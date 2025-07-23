import { formatTouchEvent, convertOnTouchStartListenerResultToPointer } from '../utils';
let ksOnTouchCancelCallback;
let ksOnTouchEndCallback;
let ksOnTouchMoveCallback;
let ksOnTouchStartCallback;
function handleTouchEvent(res, callback) {
    const dataPtr = convertOnTouchStartListenerResultToPointer({
        touches: res.touches.map(v => formatTouchEvent(v, res.type)),
        changedTouches: res.changedTouches.map(v => formatTouchEvent(v, res.type, 1)),
        timeStamp: parseInt(res.timeStamp.toString(), 10),
    });
    GameGlobal.Module.dynCall_viii(callback, dataPtr, res.touches.length, res.changedTouches.length);
    GameGlobal.Module._free(dataPtr);
}
const OnTouchCancel = (res) => {
    handleTouchEvent(res, ksOnTouchCancelCallback);
};
const OnTouchEnd = (res) => {
    handleTouchEvent(res, ksOnTouchEndCallback);
};
const OnTouchMove = (res) => {
    handleTouchEvent(res, ksOnTouchMoveCallback);
};
const OnTouchStart = (res) => {
    handleTouchEvent(res, ksOnTouchStartCallback);
};
function KS_OnTouchCancel() {
    ks.onTouchCancel(OnTouchCancel);
}
function KS_OffTouchCancel() {
    ks.offTouchCancel(OnTouchCancel);
}
function KS_OnTouchEnd() {
    ks.onTouchEnd(OnTouchEnd);
}
function KS_OffTouchEnd() {
    ks.offTouchEnd(OnTouchEnd);
}
function KS_OnTouchMove() {
    ks.onTouchMove(OnTouchMove);
}
function KS_OffTouchMove() {
    ks.offTouchMove(OnTouchMove);
}
function KS_OnTouchStart() {
    ks.onTouchStart(OnTouchStart);
}
function KS_OffTouchStart() {
    ks.offTouchStart(OnTouchStart);
}
function KS_RegisterOnTouchCancelCallback(callback) {
    ksOnTouchCancelCallback = callback;
}
function KS_RegisterOnTouchEndCallback(callback) {
    ksOnTouchEndCallback = callback;
}
function KS_RegisterOnTouchMoveCallback(callback) {
    ksOnTouchMoveCallback = callback;
}
function KS_RegisterOnTouchStartCallback(callback) {
    ksOnTouchStartCallback = callback;
}
export default {
    KS_OnTouchCancel,
    KS_OffTouchCancel,
    KS_OnTouchEnd,
    KS_OffTouchEnd,
    KS_OnTouchMove,
    KS_OffTouchMove,
    KS_OnTouchStart,
    KS_OffTouchStart,
    KS_RegisterOnTouchCancelCallback,
    KS_RegisterOnTouchEndCallback,
    KS_RegisterOnTouchMoveCallback,
    KS_RegisterOnTouchStartCallback,
};
