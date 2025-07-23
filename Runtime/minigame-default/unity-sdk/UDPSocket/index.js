import { formatJsonStr, uid, onEventCallback, offEventCallback, getListObject, convertDataToPointer, convertInfoToPointer, formatResponse } from '../utils';
const UDPSocketList = {};
const ksUDPSocketCloseList = {};
const ksUDPSocketErrorList = {};
const ksUDPSocketListeningList = {};
const ksUDPSocketMessageList = {};
const getUDPSocketObject = getListObject(UDPSocketList, 'UDPSocket');
let ksUDPSocketOnMessageCallback;
function KS_CreateUDPSocket() {
    const obj = ks.createUDPSocket();
    const key = uid();
    UDPSocketList[key] = obj;
    return key;
}
function KS_UDPSocketClose(id) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    obj.close();
    delete UDPSocketList[id];
}
function KS_UDPSocketConnect(id, option) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    obj.connect(formatJsonStr(option));
}
function KS_UDPSocketOffClose(id) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    offEventCallback(ksUDPSocketCloseList, (v) => {
        obj.offClose(v);
    }, id);
}
function KS_UDPSocketOffError(id) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    offEventCallback(ksUDPSocketErrorList, (v) => {
        obj.offError(v);
    }, id);
}
function KS_UDPSocketOffListening(id) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    offEventCallback(ksUDPSocketListeningList, (v) => {
        obj.offListening(v);
    }, id);
}
function KS_UDPSocketOffMessage(id) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    offEventCallback(ksUDPSocketMessageList, (v) => {
        obj.offMessage(v);
    }, id);
}
function KS_UDPSocketOnClose(id) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    const callback = onEventCallback(ksUDPSocketCloseList, '_UDPSocketOnCloseCallback', id, id);
    obj.onClose(callback);
}
function KS_UDPSocketOnError(id) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    const callback = onEventCallback(ksUDPSocketErrorList, '_UDPSocketOnErrorCallback', id, id);
    obj.onError(callback);
}
function KS_UDPSocketOnListening(id) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    const callback = onEventCallback(ksUDPSocketListeningList, '_UDPSocketOnListeningCallback', id, id);
    obj.onListening(callback);
}
function KS_UDPSocketOnMessage(id, needInfo) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    if (!ksUDPSocketMessageList[id]) {
        ksUDPSocketMessageList[id] = [];
    }
    const callback = (res) => {
        formatResponse('UDPSocketOnMessageListenerResult', res);
        const idPtr = convertDataToPointer(id);
        const messagePtr = convertDataToPointer(res.message);
        if (needInfo) {
            const localInfoPtr = convertInfoToPointer(res.localInfo);
            const remoteInfoPtr = convertInfoToPointer(res.remoteInfo);
            GameGlobal.Module.dynCall_viiiii(ksUDPSocketOnMessageCallback, idPtr, messagePtr, res.message.length || res.message.byteLength, localInfoPtr, remoteInfoPtr);
            GameGlobal.Module._free(localInfoPtr);
            GameGlobal.Module._free(remoteInfoPtr);
        }
        else {
            GameGlobal.Module.dynCall_viiiii(ksUDPSocketOnMessageCallback, idPtr, messagePtr, res.message.length || res.message.byteLength, 0, 0);
        }
        GameGlobal.Module._free(idPtr);
        GameGlobal.Module._free(messagePtr);
    };
    ksUDPSocketMessageList[id].push(callback);
    obj.onMessage(callback);
}
function KS_UDPSocketSendString(id, data, param) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    const config = formatJsonStr(param);
    obj.send({
        address: config.address,
        message: data,
        port: config.port,
        setBroadcast: config.setBroadcast,
    });
}
function KS_UDPSocketSendBuffer(id, dataPtr, dataLength, param) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    const config = formatJsonStr(param);
    obj.send({
        address: config.address,
        message: GameGlobal.Module.HEAPU8.buffer.slice(dataPtr, dataPtr + dataLength),
        port: config.port,
        length: config.length,
        offset: config.offset,
        setBroadcast: config.setBroadcast,
    });
}
function KS_UDPSocketSetTTL(id, ttl) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    obj.setTTL(ttl);
}
function KS_UDPSocketWriteString(id, data, param) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    const config = formatJsonStr(param);
    obj.write({
        address: config.address,
        message: data,
        port: config.port,
        setBroadcast: config.setBroadcast,
    });
}
function KS_UDPSocketWriteBuffer(id, dataPtr, dataLength, param) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return;
    }
    const config = formatJsonStr(param);
    obj.write({
        address: config.address,
        message: GameGlobal.Module.HEAPU8.buffer.slice(dataPtr, dataPtr + dataLength),
        port: config.port,
        length: config.length,
        offset: config.offset,
        setBroadcast: config.setBroadcast,
    });
}
function KS_UDPSocketBind(id, param) {
    const obj = getUDPSocketObject(id);
    if (!obj) {
        return 0;
    }
    const config = formatJsonStr(param);
    return obj.bind(config.port);
}
function KS_RegisterUDPSocketOnMessageCallback(callback) {
    ksUDPSocketOnMessageCallback = callback;
}
export default {
    KS_CreateUDPSocket,
    KS_UDPSocketBind,
    KS_UDPSocketClose,
    KS_UDPSocketConnect,
    KS_UDPSocketOffClose,
    KS_UDPSocketOffError,
    KS_UDPSocketOffListening,
    KS_UDPSocketOffMessage,
    KS_UDPSocketOnClose,
    KS_UDPSocketOnError,
    KS_UDPSocketOnListening,
    KS_UDPSocketOnMessage,
    KS_UDPSocketSendString,
    KS_UDPSocketSendBuffer,
    KS_UDPSocketSetTTL,
    KS_UDPSocketWriteString,
    KS_UDPSocketWriteBuffer,
    KS_RegisterUDPSocketOnMessageCallback,
};
