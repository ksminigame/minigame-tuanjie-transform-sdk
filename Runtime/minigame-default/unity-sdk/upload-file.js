import moduleHelper from './module-helper';
import { formatJsonStr, getListObject, offEventCallback, onEventCallback } from './utils';
const uploadTaskList = {};
const ksUpdateTaskOnProgressList = {};
const ksUpdateTaskOnHeadersList = {};
const getObject = getListObject(uploadTaskList, 'uploadTask');
export default {
    KS_UploadFile(option, callbackId) {
        const conf = formatJsonStr(option);
        const obj = ks.uploadFile({
            ...conf,
            success: (res) => {
                moduleHelper.send('UploadFileCallback', JSON.stringify({
                    callbackId,
                    type: 'success',
                    res: JSON.stringify(res),
                }));
            },
            fail: (res) => {
                moduleHelper.send('UploadFileCallback', JSON.stringify({
                    callbackId,
                    type: 'fail',
                    res: JSON.stringify(res),
                }));
            },
            complete: (res) => {
                moduleHelper.send('UploadFileCallback', JSON.stringify({
                    callbackId,
                    type: 'complete',
                    res: JSON.stringify(res),
                }));
                setTimeout(() => {
                    if (uploadTaskList) {
                        delete uploadTaskList[callbackId];
                    }
                }, 0);
            },
        });
        uploadTaskList[callbackId] = obj;
    },
    KSUploadTaskAbort(id) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        obj.abort();
    },
    KSUploadTaskOffHeadersReceived(id) {
        console.log('KSUploadTaskOffHeadersReceived is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // offEventCallback(ksUpdateTaskOnHeadersList, (v) => {
        //     obj.offHeadersReceived(v);
        // }, id);
    },
    KSUploadTaskOffProgressUpdate(id) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        offEventCallback(ksUpdateTaskOnProgressList, (v) => {
            obj.offProgressUpdate(v);
        }, id);
    },
    KSUploadTaskOnHeadersReceived(id) {
        console.log('KSUploadTaskOnHeadersReceived is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // const callback = onEventCallback(ksUpdateTaskOnHeadersList, '_OnHeadersReceivedCallback', id);
        // obj.onHeadersReceived(callback);
    },
    KSUploadTaskOnProgressUpdate(id) {
        const obj = getObject(id);
        if (!obj) {
            return;
        }
        const callback = onEventCallback(ksUpdateTaskOnProgressList, '_OnProgressUpdateCallback', id);
        obj.onProgressUpdate(callback);
    },
};
