import moduleHelper from './module-helper';
import { formatJsonStr, cacheArrayBuffer, getListObject, uid } from './utils';
const recorderManagerList = {};
const getObject = getListObject(recorderManagerList, 'video');
export default {
    KS_GetRecorderManager() {
        console.log('KS_GetRecorderManager is not supported');
        // const id = uid();
        // recorderManagerList[id] = ks.getRecorderManager();
        // return id;
    },
    KS_OnRecorderError(id) {
        console.log('KS_OnRecorderError is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // const callback = (res) => {
        //     const resStr = JSON.stringify({
        //         callbackId: id,
        //         res: JSON.stringify(res),
        //     });
        //     moduleHelper.send('_OnRecorderErrorCallback', resStr);
        // };
        // obj.onError(callback);
    },
    KS_OnRecorderFrameRecorded(id) {
        console.log('KS_OnRecorderFrameRecorded is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // const callback = (res) => {
        //     cacheArrayBuffer(id, res.frameBuffer);
        //     const resStr = JSON.stringify({
        //         callbackId: id,
        //         res: JSON.stringify({
        //             frameBufferLength: res.frameBuffer.byteLength,
        //             isLastFrame: res.isLastFrame,
        //         }),
        //     });
        //     moduleHelper.send('_OnRecorderFrameRecordedCallback', resStr);
        // };
        // obj.onFrameRecorded(callback);
    },
    KS_OnRecorderInterruptionBegin(id) {
        console.log('KS_OnRecorderInterruptionBegin is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // const callback = (res) => {
        //     const resStr = JSON.stringify({
        //         callbackId: id,
        //         res: JSON.stringify(res),
        //     });
        //     moduleHelper.send('_OnRecorderInterruptionBeginCallback', resStr);
        // };
        // obj.onInterruptionBegin(callback);
    },
    KS_OnRecorderInterruptionEnd(id) {
        console.log('KS_OnRecorderInterruptionEnd is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // const callback = (res) => {
        //     const resStr = JSON.stringify({
        //         callbackId: id,
        //         res: JSON.stringify(res),
        //     });
        //     moduleHelper.send('_OnRecorderInterruptionEndCallback', resStr);
        // };
        // obj.onInterruptionEnd(callback);
    },
    KS_OnRecorderPause(id) {
        console.log('KS_OnRecorderPause is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // const callback = (res) => {
        //     const resStr = JSON.stringify({
        //         callbackId: id,
        //         res: JSON.stringify(res),
        //     });
        //     moduleHelper.send('_OnRecorderPauseCallback', resStr);
        // };
        // obj.onPause(callback);
    },
    KS_OnRecorderResume(id) {
        console.log('KS_OnRecorderResume is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // const callback = (res) => {
        //     const resStr = JSON.stringify({
        //         callbackId: id,
        //         res: JSON.stringify(res),
        //     });
        //     moduleHelper.send('_OnRecorderResumeCallback', resStr);
        // };
        // obj.onResume(callback);
    },
    KS_OnRecorderStart(id) {
        console.log('KS_OnRecorderStart is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // const callback = (res) => {
        //     const resStr = JSON.stringify({
        //         callbackId: id,
        //         res: JSON.stringify(res),
        //     });
        //     moduleHelper.send('_OnRecorderStartCallback', resStr);
        // };
        // obj.onStart(callback);
    },
    KS_OnRecorderStop(id) {
        console.log('KS_OnRecorderStop is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // const callback = (res) => {
        //     const resStr = JSON.stringify({
        //         callbackId: id,
        //         res: JSON.stringify(res),
        //     });
        //     moduleHelper.send('_OnRecorderStopCallback', resStr);
        // };
        // obj.onStop(callback);
    },
    KS_RecorderPause(id) {
        console.log('KS_RecorderPause is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.pause();
    },
    KS_RecorderResume(id) {
        console.log('KS_RecorderResume is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.resume();
    },
    KS_RecorderStart(id, option) {
        console.log('KS_RecorderStart is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // const conf = formatJsonStr(option);
        // obj.start(conf);
    },
    KS_RecorderStop(id) {
        console.log('KS_RecorderStop is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.stop();
    },
};
