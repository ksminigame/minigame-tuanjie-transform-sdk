import moduleHelper from './module-helper';
import { formatJsonStr, getListObject, uid } from './utils';
const gameRecorderList = {};
let ksGameRecorderList;
const getObject = getListObject(gameRecorderList, 'gameRecorder');
export default {
    KS_GetGameRecorder() {
        const id = uid();
        gameRecorderList[id] = ks.getGameRecorder();
        return id;
    },
    KS_GameRecorderOff(id, eventType) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        if (!obj || typeof ksGameRecorderList === 'undefined' || typeof ksGameRecorderList[eventType] === 'undefined') {
            return;
        }
        
        for (const key in Object.keys(ksGameRecorderList[eventType])) {
            const callback = ksGameRecorderList[eventType][key];
            if (callback) {
                obj.off(eventType, callback);
            }
        }
        ksGameRecorderList[eventType] = {};
    },
    KS_GameRecorderOn(id, eventType) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        if (!ksGameRecorderList) {
            ksGameRecorderList = {
                start: {},
                stop: {},
                pause: {},
                resume: {},
                abort: {},
                // timeUpdate: {},
                error: {},
            };
        }
        const callbackId = uid();
        const callback = (res) => {
            let result = '';
            if (res) {
                result = JSON.stringify(res);
            }
            const resStr = JSON.stringify({
                id,
                res: JSON.stringify({
                    eventType,
                    result,
                }),
            });
            moduleHelper.send('_OnGameRecorderCallback', resStr);
        };
        if (ksGameRecorderList[eventType]) {
            ksGameRecorderList[eventType][callbackId] = callback;
            obj.on(eventType, callback);
            return callbackId;
        }
        return '';
    },
    KS_GameRecorderStart(id, option) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        const data = formatJsonStr(option);
        obj.start(data);
    },
    KS_GameRecorderAbort(id) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        obj.abort();
    },
    KS_GameRecorderPause(id) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        obj.pause();
    },
    KS_GameRecorderResume(id) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        obj.resume();
    },
    KS_GameRecorderStop(id) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        obj.stop();
    },
    KS_GameRecorderPublishVideo(id, option, callbackId) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        const data = formatJsonStr(option);
        obj.publishVideo({
            ...data,
            callback(res) {
                moduleHelper.send('PublishVideoCallback', JSON.stringify({
                    callbackId: callbackId,
                    type: 'callback',
                    res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_OperateGameRecorderVideo(option) {
        if (typeof ks.operateGameRecorderVideo !== 'undefined') {
            const data = formatJsonStr(option);
            data.fail = (res) => {
                console.error(res);
            };
            ks.operateGameRecorderVideo(data);
        }
    },
};
