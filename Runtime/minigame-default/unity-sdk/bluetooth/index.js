import { convertDataToPointer } from '../utils';
let ksOnBLECharacteristicValueChangeCallback;
const OnBLECharacteristicValueChange = (res) => {
    const deviceIdPtr = convertDataToPointer(res.deviceId);
    const serviceIdPtr = convertDataToPointer(res.serviceId);
    const characteristicIdPtr = convertDataToPointer(res.characteristicId);
    const valuePtr = convertDataToPointer(res.value);
    GameGlobal.Module.dynCall_viiiii(ksOnBLECharacteristicValueChangeCallback, deviceIdPtr, serviceIdPtr, characteristicIdPtr, valuePtr, res.value.byteLength);
    GameGlobal.Module._free(deviceIdPtr);
    GameGlobal.Module._free(serviceIdPtr);
    GameGlobal.Module._free(characteristicIdPtr);
    GameGlobal.Module._free(valuePtr);
};
function KS_OnBLECharacteristicValueChange() {
    console.log('KS_OnBLECharacteristicValueChange is not supported');
    // ks.onBLECharacteristicValueChange(OnBLECharacteristicValueChange);
}
function KS_OffBLECharacteristicValueChange() {
    console.log('KS_OffBLECharacteristicValueChange is not supported');
    // ks.offBLECharacteristicValueChange();
}
function KS_RegisterOnBLECharacteristicValueChangeCallback(callback) {
    ksOnBLECharacteristicValueChangeCallback = callback;
}
export default {
    KS_OnBLECharacteristicValueChange,
    KS_OffBLECharacteristicValueChange,
    KS_RegisterOnBLECharacteristicValueChangeCallback,
};
