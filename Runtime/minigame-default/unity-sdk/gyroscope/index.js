import { formatJsonStr, formatResponse, convertDataToPointer } from '../utils';
let ksStartGyroscopeCallback;
let ksStopGyroscopeCallback;
let ksOnGyroscopeChangeCallback;
const OnGyroscopeChange = (res) => {
    formatResponse('OnGyroscopeChangeListenerResult', res);
    const xPtr = convertDataToPointer(res.x);
    const yPtr = convertDataToPointer(res.y);
    const zPtr = convertDataToPointer(res.z);
    GameGlobal.Module.dynCall_viii(ksOnGyroscopeChangeCallback, xPtr, yPtr, zPtr);
    GameGlobal.Module._free(xPtr);
    GameGlobal.Module._free(yPtr);
    GameGlobal.Module._free(zPtr);
};
function handleCallback(callback, id, callbackType, res) {
    formatResponse('GeneralCallbackResult', res);
    const idPtr = convertDataToPointer(id);
    const msgPtr = convertDataToPointer(res.errMsg);
    GameGlobal.Module.dynCall_viii(callback, idPtr, callbackType, msgPtr);
    GameGlobal.Module._free(idPtr);
    GameGlobal.Module._free(msgPtr);
}
function KS_StartGyroscope(id, conf) {
    const config = formatJsonStr(conf);
    ks.startGyroscope({
        ...config,
        success(res) {
            handleCallback(ksStartGyroscopeCallback, id, 2, res);
        },
        fail(res) {
            handleCallback(ksStartGyroscopeCallback, id, 1, res);
        },
        complete(res) {
            handleCallback(ksStartGyroscopeCallback, id, 0, res);
        },
    });
}
function KS_StopGyroscope(id, conf) {
    const config = formatJsonStr(conf);
    ks.stopGyroscope({
        ...config,
        success(res) {
            handleCallback(ksStopGyroscopeCallback, id, 2, res);
        },
        fail(res) {
            handleCallback(ksStopGyroscopeCallback, id, 1, res);
        },
        complete(res) {
            handleCallback(ksStopGyroscopeCallback, id, 0, res);
        },
    });
}
function KS_OnGyroscopeChange() {
    ks.onGyroscopeChange(OnGyroscopeChange);
}
function KS_OffGyroscopeChange() {
    ks.offGyroscopeChange();
}
function KS_RegisterStartGyroscopeCallback(callback) {
    ksStartGyroscopeCallback = callback;
}
function KS_RegisterStopGyroscopeCallback(callback) {
    ksStopGyroscopeCallback = callback;
}
function KS_RegisterOnGyroscopeChangeCallback(callback) {
    ksOnGyroscopeChangeCallback = callback;
}
export default {
    KS_StartGyroscope,
    KS_StopGyroscope,
    KS_OnGyroscopeChange,
    KS_OffGyroscopeChange,
    KS_RegisterStartGyroscopeCallback,
    KS_RegisterStopGyroscopeCallback,
    KS_RegisterOnGyroscopeChangeCallback,
};
