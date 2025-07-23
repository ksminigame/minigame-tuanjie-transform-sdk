import moduleHelper from './module-helper';
import { formatJsonStr, cacheArrayBuffer, getListObject } from './utils';
const cameraList = {};
const getObject = getListObject(cameraList, 'camera');
export default {
    KSCameraCreateCamera(conf, callbackId) {
        console.log('KSCameraCreateCamera is not supported');
        // const obj = ks.createCamera({
        //     ...formatJsonStr(conf),
        //     success(res) {
        //         moduleHelper.send('CameraCreateCallback', JSON.stringify({
        //             callbackId,
        //             type: 'success',
        //             res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         moduleHelper.send('CameraCreateCallback', JSON.stringify({
        //             callbackId,
        //             type: 'fail',
        //             res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         moduleHelper.send('CameraCreateCallback', JSON.stringify({
        //             callbackId,
        //             type: 'complete',
        //             res: JSON.stringify(res),
        //         }));
        //     },
        // });
        // cameraList[callbackId] = obj;
    },
    KSCameraCloseFrameChange(id) {
        console.log('KSCameraCloseFrameChange is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.closeFrameChange();
    },
    KSCameraDestroy(id) {
        console.log('KSCameraDestroy is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.destroy();
    },
    KSCameraListenFrameChange(id) {
        console.log('KSCameraListenFrameChange is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.listenFrameChange();
    },
    KSCameraOnAuthCancel(id) {
        console.log('KSCameraOnAuthCancel is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // const callback = (res) => {
        //     const resStr = JSON.stringify({
        //         callbackId: id,
        //         res: JSON.stringify(res),
        //     });
        //     moduleHelper.send('CameraOnAuthCancelCallback', resStr);
        // };
        // obj.onAuthCancel(callback);
    },
    KSCameraOnCameraFrame(id) {
        console.log('KSCameraOnCameraFrame is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // const callback = (res) => {
        //     cacheArrayBuffer(id, res.data);
        //     const resStr = JSON.stringify({
        //         callbackId: id,
        //         res: JSON.stringify({
        //             width: res.width,
        //             height: res.height,
        //         }),
        //     });
        //     moduleHelper.send('CameraOnCameraFrameCallback', resStr);
        // };
        // obj.onCameraFrame(callback);
    },
    KSCameraOnStop(id) {
        console.log('KSCameraOnStop is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // const callback = (res) => {
        //     const resStr = JSON.stringify({
        //         callbackId: id,
        //         res: JSON.stringify(res),
        //     });
        //     moduleHelper.send('CameraOnStopCallback', resStr);
        // };
        // obj.onStop(callback);
    },
};
