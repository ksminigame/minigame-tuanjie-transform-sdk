import moduleHelper from './module-helper';
import { formatJsonStr, getListObject, uid } from './utils';
const videoList = {};
const getObject = getListObject(videoList, 'video');
export default {
    KSCreateVideo(conf) {
        const id = uid();
        const params = formatJsonStr(conf);
        
        if (params.underGameView) {
            GameGlobal.enableTransparentCanvas = true;
        }
        videoList[id] = ks.createVideo(params);
        return id;
    },
    KSVideoSetProperty(id, key, value) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        if (key === 'x' || key === 'y' || key === 'width' || key === 'height') {
            obj[key] = +value;
        }
        else if (key === 'src' || key === 'poster') {
            obj[key] = value;
        }
    },
    KSVideoPlay(id) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        obj.play();
    },
    KSVideoAddListener(id, key) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        obj[key]((e) => {
            moduleHelper.send('OnVideoCallback', JSON.stringify({
                callbackId: id,
                key: key,
                errMsg: e.errMsg,
                position: e && e.position,
                buffered: e && e.buffered,
                duration: e && e.duration,
            }));
            if (key === 'onError') {
                GameGlobal.enableTransparentCanvas = false;
                console.error(e);
            }
        });
    },
    KSVideoDestroy(id) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        obj.destroy();
        GameGlobal.enableTransparentCanvas = false;
    },
    KSVideoExitFullScreen(id) {
        console.log('KSVideoExitFullScreen is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.exitFullScreen();
    },
    KSVideoPause(id) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        obj.pause();
    },
    KSVideoRequestFullScreen(id, direction) {
        console.log('KSVideoRequestFullScreen is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.requestFullScreen(direction);
    },
    KSVideoSeek(id, time) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        obj.seek(time);
    },
    KSVideoStop(id) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        obj.stop();
    },
    KSVideoRemoveListener(id, key) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        obj[key]();
    },
};
