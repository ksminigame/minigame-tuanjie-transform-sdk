import { formatJsonStr, uid, onEventCallback, offEventCallback, getListObject, convertInfoToPointer, formatResponse, convertDataToPointer } from '../utils';
const TCPSocketList = {};
const ksTCPSocketBindWifiList = {};
const ksTCPSocketCloseList = {};
const ksTCPSocketConnectList = {};
const ksTCPSocketErrorList = {};
const ksTCPSocketMessageList = {};
const getTCPSocketObject = getListObject(TCPSocketList, 'TCPSocket');
let ksTCPSocketOnMessageCallback;
function KS_CreateTCPSocket() {
    const obj = ks.createTCPSocket();
    const key = uid();
    TCPSocketList[key] = obj;
    return key;
}
function KS_TCPSocketBindWifi(id, option) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    obj.bindWifi(formatJsonStr(option));
}
function KS_TCPSocketClose(id) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    obj.close();
    delete TCPSocketList[id];
}
function KS_TCPSocketConnect(id, option) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    obj.connect(formatJsonStr(option));
}
function KS_TCPSocketWriteString(id, data) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    obj.write(data);
}
function KS_TCPSocketWriteBuffer(id, dataPtr, dataLength) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    obj.write(GameGlobal.Module.HEAPU8.buffer.slice(dataPtr, dataPtr + dataLength));
}
function KS_TCPSocketOffBindWifi(id) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    offEventCallback(ksTCPSocketBindWifiList, (v) => {
        obj.offBindWifi(v);
    }, id);
}
function KS_TCPSocketOffClose(id) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    offEventCallback(ksTCPSocketCloseList, (v) => {
        obj.offClose(v);
    }, id);
}
function KS_TCPSocketOffConnect(id) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    offEventCallback(ksTCPSocketConnectList, (v) => {
        obj.offConnect(v);
    }, id);
}
function KS_TCPSocketOffError(id) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    offEventCallback(ksTCPSocketErrorList, (v) => {
        obj.offError(v);
    }, id);
}
function KS_TCPSocketOffMessage(id) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    offEventCallback(ksTCPSocketMessageList, (v) => {
        obj.offMessage(v);
    }, id);
}
function KS_TCPSocketOnBindWifi(id) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    const callback = onEventCallback(ksTCPSocketBindWifiList, '_TCPSocketOnBindWifiCallback', id, id);
    obj.onBindWifi(callback);
}
function KS_TCPSocketOnClose(id) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    const callback = onEventCallback(ksTCPSocketCloseList, '_TCPSocketOnCloseCallback', id, id);
    obj.onClose(callback);
}
function KS_TCPSocketOnConnect(id) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    const callback = onEventCallback(ksTCPSocketConnectList, '_TCPSocketOnConnectCallback', id, id);
    obj.onConnect(callback);
}
function KS_TCPSocketOnError(id) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    const callback = onEventCallback(ksTCPSocketErrorList, '_TCPSocketOnErrorCallback', id, id);
    obj.onError(callback);
}
function KS_TCPSocketOnMessage(id, needInfo) {
    const obj = getTCPSocketObject(id);
    if (!obj) {
        return;
    }
    if (!ksTCPSocketMessageList[id]) {
        ksTCPSocketMessageList[id] = [];
    }
    const callback = (res) => {
        formatResponse('TCPSocketOnMessageListenerResult', res);
        const idPtr = convertDataToPointer(id);
        const messagePtr = convertDataToPointer(res.message);
        if (needInfo) {
            const localInfoPtr = convertInfoToPointer(res.localInfo);
            const remoteInfoPtr = convertInfoToPointer(res.remoteInfo);
            GameGlobal.Module.dynCall_viiiii(ksTCPSocketOnMessageCallback, idPtr, messagePtr, res.message.length || res.message.byteLength, localInfoPtr, remoteInfoPtr);
            GameGlobal.Module._free(localInfoPtr);
            GameGlobal.Module._free(remoteInfoPtr);
        }
        else {
            GameGlobal.Module.dynCall_viiiii(ksTCPSocketOnMessageCallback, idPtr, messagePtr, res.message.length || res.message.byteLength, 0, 0);
        }
        GameGlobal.Module._free(idPtr);
        GameGlobal.Module._free(messagePtr);
    };
    ksTCPSocketMessageList[id].push(callback);
    obj.onMessage(callback);
}
function KS_RegisterTCPSocketOnMessageCallback(callback) {
    ksTCPSocketOnMessageCallback = callback;
}
export default {
    KS_CreateTCPSocket,
    KS_TCPSocketBindWifi,
    KS_TCPSocketClose,
    KS_TCPSocketConnect,
    KS_TCPSocketWriteString,
    KS_TCPSocketWriteBuffer,
    KS_TCPSocketOffBindWifi,
    KS_TCPSocketOffClose,
    KS_TCPSocketOffConnect,
    KS_TCPSocketOffError,
    KS_TCPSocketOffMessage,
    KS_TCPSocketOnBindWifi,
    KS_TCPSocketOnClose,
    KS_TCPSocketOnConnect,
    KS_TCPSocketOnError,
    KS_TCPSocketOnMessage,
    KS_RegisterTCPSocketOnMessageCallback,
};
