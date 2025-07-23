import moduleHelper from './module-helper';
import { launchEventType } from '../plugin-config';
import { setArrayBuffer, uid } from './utils';
import '../events';
export default {
    KSReportGameStart() {
        GameGlobal.manager.reportCustomLaunchInfo();
    },
    KSReportGameSceneError(sceneId, errorType, errStr, extInfo) {
        if (GameGlobal.manager && GameGlobal.manager.reportGameSceneError) {
            GameGlobal.manager.reportGameSceneError(sceneId, errorType, errStr, extInfo);
        }
    },
    KSWriteLog(str) {
        if (GameGlobal.manager && GameGlobal.manager.writeLog) {
            GameGlobal.manager.writeLog(str);
        }
    },
    KSWriteWarn(str) {
        if (GameGlobal.manager && GameGlobal.manager.writeWarn) {
            GameGlobal.manager.writeWarn(str);
        }
    },
    KSHideLoadingPage() {
        if (GameGlobal.manager && GameGlobal.manager.hideLoadingPage) {
            GameGlobal.manager.hideLoadingPage();
        }
    },
    KSReportUserBehaviorBranchAnalytics(branchId, branchDim, eventType) {
        console.log('KSReportUserBehaviorBranchAnalytics is not supported');
        // ks.reportUserBehaviorBranchAnalytics({ branchId, branchDim, eventType });
    },
    KSPreloadConcurrent(count) {
        if (GameGlobal.manager && GameGlobal.manager.setConcurrent) {
            GameGlobal.manager.setConcurrent(count);
        }
    },
    KSIsCloudTest() {
        if (typeof GameGlobal.isTest !== 'undefined' && GameGlobal.isTest) {
            return true;
        }
        return false;
    },
    KSUncaughtException(needAbort) {
        function currentStackTrace() {
            const err = new Error('KSUncaughtException');
            return err;
        }
        const err = currentStackTrace();
        let fullTrace = err.stack?.toString();
        if (fullTrace) {
            const posOfThisFunc = fullTrace.indexOf('KSUncaughtException');
            if (posOfThisFunc !== -1) {
                fullTrace = fullTrace.substr(posOfThisFunc);
            }
            const posOfRaf = fullTrace.lastIndexOf('browserIterationFunc');
            if (posOfRaf !== -1) {
                fullTrace = fullTrace.substr(0, posOfRaf);
            }
        }
        console.error('KSUncaughtException:', fullTrace);
        // const realTimelog = ks.getRealtimeLogManager();
        // realTimelog.error(fullTrace);
        // const logmanager = ks.getLogManager({ level: 0 });
        // logmanager.warn(fullTrace);
        if (needAbort === true) {
            GameGlobal.onCrash(err);
            throw err;
        }
        else {
            setTimeout(() => {
                throw err;
            }, 0);
        }
    },
    KSCleanAllFileCache() {
        if (GameGlobal.manager && GameGlobal.manager.cleanCache) {
            const key = uid();
            GameGlobal.manager.cleanAllCache().then((res) => {
                moduleHelper.send('CleanAllFileCacheCallback', JSON.stringify({
                    callbackId: key,
                    result: res,
                }));
            });
            return key;
        }
        return '';
    },
    KSCleanFileCache(fileSize) {
        if (GameGlobal.manager && GameGlobal.manager.cleanCache) {
            const key = uid();
            GameGlobal.manager.cleanCache(fileSize).then((res) => {
                moduleHelper.send('CleanFileCacheCallback', JSON.stringify({
                    callbackId: key,
                    result: res,
                }));
            });
            return key;
        }
        return '';
    },
    KSRemoveFile(path) {
        if (GameGlobal.manager && GameGlobal.manager.removeFile && path) {
            const key = uid();
            GameGlobal.manager.removeFile(path).then((res) => {
                moduleHelper.send('RemoveFileCallback', JSON.stringify({
                    callbackId: key,
                    result: res,
                }));
            });
            return key;
        }
        return '';
    },
    KSGetCachePath(url) {
        if (GameGlobal.manager && GameGlobal.manager.getCachePath) {
            return GameGlobal.manager.getCachePath(url);
        }
    },
    KSGetPluginCachePath() {
        if (GameGlobal.manager && GameGlobal.manager.PLUGIN_CACHE_PATH) {
            return GameGlobal.manager.PLUGIN_CACHE_PATH;
        }
    },
    KSOnLaunchProgress() {
        if (GameGlobal.manager && GameGlobal.manager.onLaunchProgress) {
            const key = uid();
            // 异步执行，保证C#已经记录这个回调ID
            setTimeout(() => {
                GameGlobal.manager.onLaunchProgress((e) => {
                    moduleHelper.send('OnLaunchProgressCallback', JSON.stringify({
                        callbackId: key,
                        res: JSON.stringify(Object.assign({}, e.data, {
                            type: e.type,
                        })),
                    }));
                    
                    if (e.type === launchEventType.prepareGame) {
                        moduleHelper.send('RemoveLaunchProgressCallback', JSON.stringify({
                            callbackId: key,
                        }));
                    }
                });
            }, 0);
            return key;
        }
        return '';
    },
    KSSetDataCDN(path) {
        if (GameGlobal.manager && GameGlobal.manager.setDataCDN) {
            GameGlobal.manager.setDataCDN(path);
        }
    },
    KSSetPreloadList(paths) {
        if (GameGlobal.manager && GameGlobal.manager.setPreloadList) {
            const list = (paths || '').split(',').filter(str => !!str && !!str.trim());
            GameGlobal.manager.setPreloadList(list);
        }
    },
    KSSetArrayBuffer(buffer, offset, callbackId) {
        setArrayBuffer(buffer, offset, callbackId);
    },
    KSLaunchOperaBridge(args) {
        const res = GameGlobal.events.emit('launchOperaMsgBridgeFromWasm', args);
        if (Array.isArray(res) && res.length > 0) {
            return res[0];
        }
        return null;
    },
    KSLaunchOperaBridgeToC(callback, args) {
        moduleHelper.send('LaunchOperaBridgeToC', JSON.stringify({
            callback,
            args,
        }));
    },
};
