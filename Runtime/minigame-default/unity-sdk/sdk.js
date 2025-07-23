
import moduleHelper from './module-helper';
import { uid, formatResponse, formatJsonStr, onEventCallback, offEventCallback, getListObject, stringifyRes } from './utils';
let OnAccelerometerChangeList;
let OnAudioInterruptionBeginList;
let OnAudioInterruptionEndList;
let OnBLEConnectionStateChangeList;
let OnBLEMTUChangeList;
let OnBLEPeripheralConnectionStateChangedList;
let OnBeaconServiceChangeList;
let OnBeaconUpdateList;
let OnBluetoothAdapterStateChangeList;
let OnBluetoothDeviceFoundList;
let OnCompassChangeList;
let OnDeviceMotionChangeList;
let OnDeviceOrientationChangeList;
let OnErrorList;
let OnHideList;
let OnInteractiveStorageModifiedList;
let OnKeyDownList;
let OnKeyUpList;
let OnKeyboardCompleteList;
let OnKeyboardConfirmList;
let OnKeyboardHeightChangeList;
let OnKeyboardInputList;
let OnMemoryWarningList;
let OnMouseDownList;
let OnMouseMoveList;
let OnMouseUpList;
let OnNetworkStatusChangeList;
let OnNetworkWeakChangeList;
let OnScreenRecordingStateChangedList;
let OnShowList;
let OnUnhandledRejectionList;
let OnUserCaptureScreenList;
let OnVoIPChatInterruptedList;
let OnVoIPChatMembersChangedList;
let OnVoIPChatSpeakersChangedList;
let OnVoIPChatStateChangedList;
let OnWheelList;
let OnWindowResizeList;
let OnClickCloseButtonActionList;
let ksOnAddToFavoritesResolveConf;
let ksOnCopyUrlResolveConf;
let ksOnHandoffResolveConf;
let ksOnShareTimelineResolveConf;
let ksOnGameLiveStateChangeResolveConf;
const DownloadTaskList = {};
const FeedbackButtonList = {};
const LogManagerList = {};
const RealtimeLogManagerList = {};
const UpdateManagerList = {};
const VideoDecoderList = {};
const ksDownloadTaskHeadersReceivedList = {};
const ksDownloadTaskProgressUpdateList = {};
const ksFeedbackButtonTapList = {};
const ksVideoDecoderList = {};
const getDownloadTaskObject = getListObject(DownloadTaskList, 'DownloadTask');
const getFeedbackButtonObject = getListObject(FeedbackButtonList, 'FeedbackButton');
const getLogManagerObject = getListObject(LogManagerList, 'LogManager');
const getRealtimeLogManagerObject = getListObject(RealtimeLogManagerList, 'RealtimeLogManager');
const getUpdateManagerObject = getListObject(UpdateManagerList, 'UpdateManager');
const getVideoDecoderObject = getListObject(VideoDecoderList, 'VideoDecoder');
export default {
    KS_AddCard(conf, callbackId) {
        console.log('KS_AddCard is not supported');
        // const config = formatJsonStr(conf);
        // ks.addCard({
        //     ...config,
        //     success(res) {
        //         formatResponse('AddCardSuccessCallbackResult', res);
        //         moduleHelper.send('AddCardCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('AddCardCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('AddCardCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_AuthPrivateMessage(conf, callbackId) {
        console.log('KS_AuthPrivateMessage is not supported');
        // const config = formatJsonStr(conf);
        // ks.authPrivateMessage({
        //     ...config,
        //     success(res) {
        //         formatResponse('AuthPrivateMessageSuccessCallbackResult', res);
        //         moduleHelper.send('AuthPrivateMessageCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('AuthPrivateMessageCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('AuthPrivateMessageCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_Authorize(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.authorize({
            ...config,
            success(res) {
                formatResponse('AuthorizeOptionSuccessCallbackResult', res);
                moduleHelper.send('AuthorizeCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('AuthorizeCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('AuthorizeCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_CheckIsAddedToMyMiniProgram(conf, callbackId) {
        console.log('KS_CheckIsAddedToMyMiniProgram is not supported');
        // const config = formatJsonStr(conf);
        // ks.checkIsAddedToMyMiniProgram({
        //     ...config,
        //     success(res) {
        //         formatResponse('CheckIsAddedToMyMiniProgramSuccessCallbackResult', res);
        //         moduleHelper.send('CheckIsAddedToMyMiniProgramCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('CheckIsAddedToMyMiniProgramCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('CheckIsAddedToMyMiniProgramCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_CheckSession(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.checkSession({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('CheckSessionCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('CheckSessionCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('CheckSessionCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_ChooseImage(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.chooseImage({
            ...config,
            success(res) {
                formatResponse('ChooseImageSuccessCallbackResult', res);
                moduleHelper.send('ChooseImageCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ChooseImageCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ChooseImageCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_ChooseMedia(conf, callbackId) {
        console.log('KS_ChooseMedia is not supported');
        // const config = formatJsonStr(conf);
        // ks.chooseMedia({
        //     ...config,
        //     success(res) {
        //         formatResponse('ChooseMediaSuccessCallbackResult', res);
        //         moduleHelper.send('ChooseMediaCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ChooseMediaCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ChooseMediaCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_ChooseMessageFile(conf, callbackId) {
        console.log('KS_ChooseMessageFile is not supported');
        // const config = formatJsonStr(conf);
        // ks.chooseMessageFile({
        //     ...config,
        //     success(res) {
        //         formatResponse('ChooseMessageFileSuccessCallbackResult', res);
        //         moduleHelper.send('ChooseMessageFileCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ChooseMessageFileCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ChooseMessageFileCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_CloseBLEConnection(conf, callbackId) {
        console.log("KS_CloseBLEConnection is not supported");
        // const config = formatJsonStr(conf);
        // ks.closeBLEConnection({
        //     ...config,
        //     success(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('CloseBLEConnectionCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('CloseBLEConnectionCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('CloseBLEConnectionCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_CloseBluetoothAdapter(conf, callbackId) {
        console.log("KS_CloseBluetoothAdapter is not supported");
        // const config = formatJsonStr(conf);
        // ks.closeBluetoothAdapter({
        //     ...config,
        //     success(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('CloseBluetoothAdapterCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('CloseBluetoothAdapterCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('CloseBluetoothAdapterCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_CompressImage(conf, callbackId) {
        console.log("KS_CompressImage is not supported");
        // const config = formatJsonStr(conf);
        // ks.compressImage({
        //     ...config,
        //     success(res) {
        //         formatResponse('CompressImageSuccessCallbackResult', res);
        //         moduleHelper.send('CompressImageCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('CompressImageCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('CompressImageCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_CreateBLEConnection(conf, callbackId) {
        console.log("KS_CreateBLEConnection is not supported");
        // const config = formatJsonStr(conf);
        // ks.createBLEConnection({
        //     ...config,
        //     success(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('CreateBLEConnectionCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('CreateBLEConnectionCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('CreateBLEConnectionCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_CreateBLEPeripheralServer(conf, callbackId) {
        console.log("KS_CreateBLEPeripheralServer is not supported");
        // const config = formatJsonStr(conf);
        // ks.createBLEPeripheralServer({
        //     ...config,
        //     success(res) {
        //         formatResponse('CreateBLEPeripheralServerSuccessCallbackResult', res);
        //         moduleHelper.send('CreateBLEPeripheralServerCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('CreateBLEPeripheralServerCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('CreateBLEPeripheralServerCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_ExitMiniProgram(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.exitMiniProgram({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ExitMiniProgramCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ExitMiniProgramCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ExitMiniProgramCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_ExitVoIPChat(conf, callbackId) {
        console.log("KS_ExitVoIPChat is not supported");
        // const config = formatJsonStr(conf);
        // ks.exitVoIPChat({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ExitVoIPChatCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ExitVoIPChatCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ExitVoIPChatCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_FaceDetect(conf, callbackId) {
        console.log("KS_FaceDetect is not supported");
        // const config = formatJsonStr(conf);
        // ks.faceDetect({
        //     ...config,
        //     success(res) {
        //         formatResponse('FaceDetectSuccessCallbackResult', res);
        //         moduleHelper.send('FaceDetectCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('FaceDetectCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('FaceDetectCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetAvailableAudioSources(conf, callbackId) {
        console.log("KS_GetAvailableAudioSources is not supported");
        // const config = formatJsonStr(conf);
        // ks.getAvailableAudioSources({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetAvailableAudioSourcesSuccessCallbackResult', res);
        //         moduleHelper.send('GetAvailableAudioSourcesCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetAvailableAudioSourcesCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetAvailableAudioSourcesCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetBLEDeviceCharacteristics(conf, callbackId) {
        console.log("KS_GetBLEDeviceCharacteristics is not supported");
        // const config = formatJsonStr(conf);
        // ks.getBLEDeviceCharacteristics({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetBLEDeviceCharacteristicsSuccessCallbackResult', res);
        //         moduleHelper.send('GetBLEDeviceCharacteristicsCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('GetBLEDeviceCharacteristicsCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('GetBLEDeviceCharacteristicsCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetBLEDeviceRSSI(conf, callbackId) {
        console.log("KS_GetBLEDeviceRSSI is not supported");
        // const config = formatJsonStr(conf);
        // ks.getBLEDeviceRSSI({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetBLEDeviceRSSISuccessCallbackResult', res);
        //         moduleHelper.send('GetBLEDeviceRSSICallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetBLEDeviceRSSICallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetBLEDeviceRSSICallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetBLEDeviceServices(conf, callbackId) {
        console.log("KS_GetBLEDeviceServices is not supported");
        // const config = formatJsonStr(conf);
        // ks.getBLEDeviceServices({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetBLEDeviceServicesSuccessCallbackResult', res);
        //         moduleHelper.send('GetBLEDeviceServicesCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('GetBLEDeviceServicesCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('GetBLEDeviceServicesCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetBLEMTU(conf, callbackId) {
        console.log("KS_GetBLEMTU is not supported");
        // const config = formatJsonStr(conf);
        // ks.getBLEMTU({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetBLEMTUSuccessCallbackResult', res);
        //         moduleHelper.send('GetBLEMTUCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('GetBLEMTUCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('GetBLEMTUCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetBackgroundFetchData(conf, callbackId) {
        console.log("KS_GetBackgroundFetchData is not supported");
        // const config = formatJsonStr(conf);
        // ks.getBackgroundFetchData({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetBackgroundFetchDataSuccessCallbackResult', res);
        //         moduleHelper.send('GetBackgroundFetchDataCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetBackgroundFetchDataCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetBackgroundFetchDataCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetBackgroundFetchToken(conf, callbackId) {
        console.log("KS_GetBackgroundFetchToken is not supported");
        // const config = formatJsonStr(conf);
        // ks.getBackgroundFetchToken({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetBackgroundFetchTokenSuccessCallbackResult', res);
        //         moduleHelper.send('GetBackgroundFetchTokenCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetBackgroundFetchTokenCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetBackgroundFetchTokenCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetBatteryInfo(conf, callbackId) {
        console.log("KS_GetBatteryInfo is not supported");
        // const config = formatJsonStr(conf);
        // ks.getBatteryInfo({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetBatteryInfoSuccessCallbackResult', res);
        //         moduleHelper.send('GetBatteryInfoCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetBatteryInfoCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetBatteryInfoCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetBeacons(conf, callbackId) {
        console.log("KS_GetBeacons is not supported");
        // const config = formatJsonStr(conf);
        // ks.getBeacons({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetBeaconsSuccessCallbackResult', res);
        //         moduleHelper.send('GetBeaconsCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BeaconError', res);
        //         moduleHelper.send('GetBeaconsCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BeaconError', res);
        //         moduleHelper.send('GetBeaconsCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetBluetoothAdapterState(conf, callbackId) {
        console.log("KS_GetBluetoothAdapterState is not supported");
        // const config = formatJsonStr(conf);
        // ks.getBluetoothAdapterState({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetBluetoothAdapterStateSuccessCallbackResult', res);
        //         moduleHelper.send('GetBluetoothAdapterStateCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('GetBluetoothAdapterStateCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('GetBluetoothAdapterStateCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetBluetoothDevices(conf, callbackId) {
        console.log("KS_GetBluetoothDevices is not supported");
        // const config = formatJsonStr(conf);
        // ks.getBluetoothDevices({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetBluetoothDevicesSuccessCallbackResult', res);
        //         moduleHelper.send('GetBluetoothDevicesCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('GetBluetoothDevicesCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('GetBluetoothDevicesCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetChannelsLiveInfo(conf, callbackId) {
        console.log("KS_GetChannelsLiveInfo is not supported");
        // const config = formatJsonStr(conf);
        // ks.getChannelsLiveInfo({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetChannelsLiveInfoSuccessCallbackResult', res);
        //         moduleHelper.send('GetChannelsLiveInfoCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetChannelsLiveInfoCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetChannelsLiveInfoCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetChannelsLiveNoticeInfo(conf, callbackId) {
        console.log("KS_GetChannelsLiveNoticeInfo is not supported");
        // const config = formatJsonStr(conf);
        // ks.getChannelsLiveNoticeInfo({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetChannelsLiveNoticeInfoSuccessCallbackResult', res);
        //         moduleHelper.send('GetChannelsLiveNoticeInfoCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetChannelsLiveNoticeInfoCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetChannelsLiveNoticeInfoCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetClipboardData(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.getClipboardData({
            ...config,
            success(res) {
                formatResponse('GetClipboardDataSuccessCallbackOption', res);
                moduleHelper.send('GetClipboardDataCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetClipboardDataCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetClipboardDataCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_GetConnectedBluetoothDevices(conf, callbackId) {
        console.log("KS_GetConnectedBluetoothDevices is not supported");
        // const config = formatJsonStr(conf);
        // ks.getConnectedBluetoothDevices({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetConnectedBluetoothDevicesSuccessCallbackResult', res);
        //         moduleHelper.send('GetConnectedBluetoothDevicesCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('GetConnectedBluetoothDevicesCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('GetConnectedBluetoothDevicesCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetExtConfig(conf, callbackId) {
        console.log("KS_GetExtConfig is not supported");
        // const config = formatJsonStr(conf);
        // ks.getExtConfig({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetExtConfigSuccessCallbackResult', res);
        //         moduleHelper.send('GetExtConfigCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetExtConfigCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetExtConfigCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetFuzzyLocation(conf, callbackId) {
        console.log("KS_GetFuzzyLocation is not supported");
        // const config = formatJsonStr(conf);
        // ks.getFuzzyLocation({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetFuzzyLocationSuccessCallbackResult', res);
        //         moduleHelper.send('GetFuzzyLocationCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetFuzzyLocationCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetFuzzyLocationCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetGameClubData(conf, callbackId) {
        console.log("KS_GetGameClubData is not supported");
        // const config = formatJsonStr(conf);
        // ks.getGameClubData({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetGameClubDataSuccessCallbackResult', res);
        //         moduleHelper.send('GetGameClubDataCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetGameClubDataCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetGameClubDataCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetGroupEnterInfo(conf, callbackId) {
        console.log("KS_GetGroupEnterInfo is not supported");
        // const config = formatJsonStr(conf);
        // ks.getGroupEnterInfo({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetGroupEnterInfoSuccessCallbackResult', res);
        //         moduleHelper.send('GetGroupEnterInfoCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetGroupEnterInfoCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetGroupEnterInfoCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetInferenceEnvInfo(conf, callbackId) {
        console.log("KS_GetInferenceEnvInfo is not supported");
        // const config = formatJsonStr(conf);
        // ks.getInferenceEnvInfo({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetInferenceEnvInfoSuccessCallbackResult', res);
        //         moduleHelper.send('GetInferenceEnvInfoCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetInferenceEnvInfoCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetInferenceEnvInfoCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetLocalIPAddress(conf, callbackId) {
        console.log("KS_GetLocalIPAddress is not supported");
        // const config = formatJsonStr(conf);
        // ks.getLocalIPAddress({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetLocalIPAddressSuccessCallbackResult', res);
        //         moduleHelper.send('GetLocalIPAddressCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetLocalIPAddressCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetLocalIPAddressCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetNetworkType(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.getNetworkType({
            ...config,
            success(res) {
                formatResponse('GetNetworkTypeSuccessCallbackResult', res);
                moduleHelper.send('GetNetworkTypeCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetNetworkTypeCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetNetworkTypeCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_GetPrivacySetting(conf, callbackId) {
        console.log("KS_GetPrivacySetting is not supported");
        // const config = formatJsonStr(conf);
        // ks.getPrivacySetting({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetPrivacySettingSuccessCallbackResult', res);
        //         moduleHelper.send('GetPrivacySettingCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetPrivacySettingCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetPrivacySettingCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetScreenBrightness(conf, callbackId) {
        console.log("KS_GetScreenBrightness is not supported");
        // const config = formatJsonStr(conf);
        // ks.getScreenBrightness({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetScreenBrightnessSuccessCallbackOption', res);
        //         moduleHelper.send('GetScreenBrightnessCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetScreenBrightnessCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetScreenBrightnessCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetScreenRecordingState(conf, callbackId) {
        console.log("KS_GetScreenRecordingState is not supported");
        // const config = formatJsonStr(conf);
        // ks.getScreenRecordingState({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetScreenRecordingStateSuccessCallbackResult', res);
        //         moduleHelper.send('GetScreenRecordingStateCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetScreenRecordingStateCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetScreenRecordingStateCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetSetting(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.getSetting({
            ...config,
            success(res) {
                moduleHelper.send('GetSettingCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetSettingCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetSettingCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_GetShareInfo(conf, callbackId) {
        console.log("KS_GetShareInfo is not supported");
        // const config = formatJsonStr(conf);
        // ks.getShareInfo({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetGroupEnterInfoSuccessCallbackResult', res);
        //         moduleHelper.send('GetShareInfoCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetShareInfoCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetShareInfoCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetStorageInfo(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.getStorageInfo({
            ...config,
            success(res) {
                formatResponse('GetStorageInfoSuccessCallbackOption', res);
                moduleHelper.send('GetStorageInfoCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetStorageInfoCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetStorageInfoCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_GetSystemInfo(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.getSystemInfo({
            ...config,
            success(res) {
                formatResponse('SystemInfo', res);
                moduleHelper.send('GetSystemInfoCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetSystemInfoCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetSystemInfoCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_GetSystemInfoAsync(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.getSystemInfoAsync({
            ...config,
            success(res) {
                formatResponse('SystemInfo', res);
                moduleHelper.send('GetSystemInfoAsyncCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetSystemInfoAsyncCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetSystemInfoAsyncCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_GetUserInfo(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.getUserInfo({
            ...config,
            success(res) {
                formatResponse('GetUserInfoSuccessCallbackResult', res);
                moduleHelper.send('GetUserInfoCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetUserInfoCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetUserInfoCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_GetUserInteractiveStorage(conf, callbackId) {
        console.log("KS_GetUserInteractiveStorage is not supported");
        // const config = formatJsonStr(conf);
        // ks.getUserInteractiveStorage({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetUserInteractiveStorageSuccessCallbackResult', res);
        //         moduleHelper.send('GetUserInteractiveStorageCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GetUserInteractiveStorageFailCallbackResult', res);
        //         moduleHelper.send('GetUserInteractiveStorageCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetUserInteractiveStorageCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetWeRunData(conf, callbackId) {
        console.log("KS_GetWeRunData is not supported");
        // const config = formatJsonStr(conf);
        // ks.getWeRunData({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetWeRunDataSuccessCallbackResult', res);
        //         moduleHelper.send('GetWeRunDataCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetWeRunDataCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetWeRunDataCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_HideKeyboard(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.hideKeyboard({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('HideKeyboardCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('HideKeyboardCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('HideKeyboardCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_HideLoading(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.hideLoading({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('HideLoadingCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('HideLoadingCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('HideLoadingCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_HideShareMenu(conf, callbackId) {
        console.log("KS_HideShareMenu is not supported");
        // const config = formatJsonStr(conf);
        // ks.hideShareMenu({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('HideShareMenuCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('HideShareMenuCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('HideShareMenuCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_HideToast(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.hideToast({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('HideToastCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('HideToastCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('HideToastCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_InitFaceDetect(conf, callbackId) {
        console.log("KS_InitFaceDetect is not supported");
        // const config = formatJsonStr(conf);
        // ks.initFaceDetect({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('InitFaceDetectCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('InitFaceDetectCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('InitFaceDetectCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_IsBluetoothDevicePaired(conf, callbackId) {
        console.log("KS_IsBluetoothDevicePaired is not supported");
        // const config = formatJsonStr(conf);
        // ks.isBluetoothDevicePaired({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('IsBluetoothDevicePairedCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('IsBluetoothDevicePairedCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('IsBluetoothDevicePairedCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_JoinVoIPChat(conf, callbackId) {
        console.log("KS_JoinVoIPChat is not supported");
        // const config = formatJsonStr(conf);
        // ks.joinVoIPChat({
        //     ...config,
        //     success(res) {
        //         formatResponse('JoinVoIPChatSuccessCallbackResult', res);
        //         moduleHelper.send('JoinVoIPChatCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('JoinVoIPChatError', res);
        //         moduleHelper.send('JoinVoIPChatCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('JoinVoIPChatError', res);
        //         moduleHelper.send('JoinVoIPChatCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_Login(conf, callbackId) {
        const config = formatJsonStr(conf);
        if (!config.timeout) {
            delete config.timeout;
        }
        ks.login({
            ...config,
            success(res) {
                formatResponse('LoginSuccessCallbackResult', res);
                moduleHelper.send('LoginCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('LoginCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('LoginCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_MakeBluetoothPair(conf, callbackId) {
        console.log("KS_MakeBluetoothPair is not supported");
        // const config = formatJsonStr(conf);
        // ks.makeBluetoothPair({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('MakeBluetoothPairCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('MakeBluetoothPairCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('MakeBluetoothPairCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_NavigateToMiniProgram(conf, callbackId) {
        console.log("KS_NavigateToMiniProgram is not supported");
        // const config = formatJsonStr(conf);
        // ks.navigateToMiniProgram({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('NavigateToMiniProgramCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('NavigateToMiniProgramCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('NavigateToMiniProgramCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_NotifyBLECharacteristicValueChange(conf, callbackId) {
        console.log("KS_NotifyBLECharacteristicValueChange is not supported");
        // const config = formatJsonStr(conf);
        // ks.notifyBLECharacteristicValueChange({
        //     ...config,
        //     success(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('NotifyBLECharacteristicValueChangeCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('NotifyBLECharacteristicValueChangeCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('NotifyBLECharacteristicValueChangeCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenAppAuthorizeSetting(conf, callbackId) {
        console.log("KS_OpenAppAuthorizeSetting is not supported");
        // const config = formatJsonStr(conf);
        // ks.openAppAuthorizeSetting({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenAppAuthorizeSettingCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenAppAuthorizeSettingCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenAppAuthorizeSettingCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenBluetoothAdapter(conf, callbackId) {
        console.log("KS_OpenBluetoothAdapter is not supported");
        // const config = formatJsonStr(conf);
        // ks.openBluetoothAdapter({
        //     ...config,
        //     success(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('OpenBluetoothAdapterCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('OpenBluetoothAdapterCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('OpenBluetoothAdapterCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenCard(conf, callbackId) {
        console.log("KS_OpenCard is not supported");
        // const config = formatJsonStr(conf);
        // ks.openCard({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenCardCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenCardCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenCardCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenChannelsActivity(conf, callbackId) {
        console.log("KS_OpenChannelsActivity is not supported");
        // const config = formatJsonStr(conf);
        // ks.openChannelsActivity({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsActivityCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsActivityCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsActivityCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenChannelsEvent(conf, callbackId) {
        console.log("KS_OpenChannelsEvent is not supported");
        // const config = formatJsonStr(conf);
        // ks.openChannelsEvent({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsEventCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsEventCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsEventCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenChannelsLive(conf, callbackId) {
        console.log("KS_OpenChannelsLive is not supported");
        // const config = formatJsonStr(conf);
        // ks.openChannelsLive({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsLiveCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsLiveCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsLiveCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenChannelsUserProfile(conf, callbackId) {
        console.log("KS_OpenChannelsUserProfile is not supported");
        // const config = formatJsonStr(conf);
        // ks.openChannelsUserProfile({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsUserProfileCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsUserProfileCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsUserProfileCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenCustomerServiceChat(conf, callbackId) {
        console.log("KS_OpenCustomerServiceChat is not supported");
        // const config = formatJsonStr(conf);
        // ks.openCustomerServiceChat({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenCustomerServiceChatCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenCustomerServiceChatCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenCustomerServiceChatCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenCustomerServiceConversation(conf, callbackId) {
        console.log("KS_OpenCustomerServiceConversation is not supported");
        // const config = formatJsonStr(conf);
        // ks.openCustomerServiceConversation({
        //     ...config,
        //     success(res) {
        //         formatResponse('OpenCustomerServiceConversationSuccessCallbackResult', res);
        //         moduleHelper.send('OpenCustomerServiceConversationCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenCustomerServiceConversationCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenCustomerServiceConversationCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenPrivacyContract(conf, callbackId) {
        console.log("KS_OpenPrivacyContract is not supported");
        // const config = formatJsonStr(conf);
        // ks.openPrivacyContract({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenPrivacyContractCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenPrivacyContractCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenPrivacyContractCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenSetting(conf, callbackId) {
        console.log("KS_OpenSetting is not supported");
        // const config = formatJsonStr(conf);
        // ks.openSetting({
        //     ...config,
        //     success(res) {
        //         formatResponse('OpenSettingSuccessCallbackResult', res);
        //         moduleHelper.send('OpenSettingCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenSettingCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenSettingCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenSystemBluetoothSetting(conf, callbackId) {
        console.log("KS_OpenSystemBluetoothSetting is not supported");
        // const config = formatJsonStr(conf);
        // ks.openSystemBluetoothSetting({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenSystemBluetoothSettingCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenSystemBluetoothSettingCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenSystemBluetoothSettingCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_PreviewImage(conf, callbackId) {
        console.log("KS_PreviewImage is not supported");
        // const config = formatJsonStr(conf);
        // ks.previewImage({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('PreviewImageCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('PreviewImageCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('PreviewImageCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_PreviewMedia(conf, callbackId) {
        console.log("KS_PreviewMedia is not supported");
        // const config = formatJsonStr(conf);
        // ks.previewMedia({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('PreviewMediaCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('PreviewMediaCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('PreviewMediaCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_ReadBLECharacteristicValue(conf, callbackId) {
        console.log("KS_ReadBLECharacteristicValue is not supported");
        // const config = formatJsonStr(conf);
        // ks.readBLECharacteristicValue({
        //     ...config,
        //     success(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('ReadBLECharacteristicValueCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('ReadBLECharacteristicValueCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('ReadBLECharacteristicValueCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_RemoveStorage(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.removeStorage({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('RemoveStorageCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('RemoveStorageCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('RemoveStorageCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_RemoveUserCloudStorage(conf, callbackId) {
        console.log("KS_RemoveUserCloudStorage is not supported");
        // const config = formatJsonStr(conf);
        // ks.removeUserCloudStorage({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('RemoveUserCloudStorageCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('RemoveUserCloudStorageCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('RemoveUserCloudStorageCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_ReportScene(conf, callbackId) {
        const config = formatJsonStr(conf);
        if (GameGlobal.manager && GameGlobal.manager.setGameStage) {
            GameGlobal.manager.setGameStage(config.sceneId);
        }
        ks.reportScene({
            ...config,
            success(res) {
                formatResponse('ReportSceneSuccessCallbackResult', res);
                moduleHelper.send('ReportSceneCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('ReportSceneFailCallbackErr', res);
                moduleHelper.send('ReportSceneCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('ReportSceneError', res);
                moduleHelper.send('ReportSceneCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_RequestMidasFriendPayment(conf, callbackId) {
        console.log("KS_RequestMidasFriendPayment is not supported");
        // const config = formatJsonStr(conf);
        // ks.requestMidasFriendPayment({
        //     ...config,
        //     success(res) {
        //         formatResponse('RequestMidasFriendPaymentSuccessCallbackResult', res);
        //         moduleHelper.send('RequestMidasFriendPaymentCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('MidasFriendPaymentError', res);
        //         moduleHelper.send('RequestMidasFriendPaymentCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('MidasFriendPaymentError', res);
        //         moduleHelper.send('RequestMidasFriendPaymentCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_RequestMidasPayment(conf, callbackId) {
        console.log("KS_RequestMidasPayment is not supported");
        // const config = formatJsonStr(conf);
        // ks.requestMidasPayment({
        //     ...config,
        //     success(res) {
        //         formatResponse('RequestMidasPaymentSuccessCallbackResult', res);
        //         moduleHelper.send('RequestMidasPaymentCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('RequestMidasPaymentFailCallbackErr', res);
        //         moduleHelper.send('RequestMidasPaymentCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('MidasPaymentError', res);
        //         moduleHelper.send('RequestMidasPaymentCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_RequestSubscribeMessage(conf, callbackId) {
        console.log("KS_RequestSubscribeMessage is not supported");
        // const config = formatJsonStr(conf);
        // ks.requestSubscribeMessage({
        //     ...config,
        //     success(res) {
        //         formatResponse('RequestSubscribeMessageSuccessCallbackResult', res);
        //         moduleHelper.send('RequestSubscribeMessageCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('RequestSubscribeMessageFailCallbackResult', res);
        //         moduleHelper.send('RequestSubscribeMessageCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('RequestSubscribeMessageCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_RequestSubscribeSystemMessage(conf, callbackId) {
        console.log("KS_RequestSubscribeSystemMessage is not supported");
        // const config = formatJsonStr(conf);
        // ks.requestSubscribeSystemMessage({
        //     ...config,
        //     success(res) {
        //         formatResponse('RequestSubscribeSystemMessageSuccessCallbackResult', res);
        //         moduleHelper.send('RequestSubscribeSystemMessageCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('RequestSubscribeMessageFailCallbackResult', res);
        //         moduleHelper.send('RequestSubscribeSystemMessageCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('RequestSubscribeSystemMessageCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_RequirePrivacyAuthorize(conf, callbackId) {
        console.log("KS_RequirePrivacyAuthorize is not supported");
        // const config = formatJsonStr(conf);
        // ks.requirePrivacyAuthorize({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('RequirePrivacyAuthorizeCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('RequirePrivacyAuthorizeCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('RequirePrivacyAuthorizeCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_RestartMiniProgram(conf, callbackId) {
        console.log("KS_RestartMiniProgram is not supported");
        // const config = formatJsonStr(conf);
        // ks.restartMiniProgram({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('RestartMiniProgramCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('RestartMiniProgramCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('RestartMiniProgramCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_SaveFileToDisk(conf, callbackId) {
        console.log("KS_SaveFileToDisk is not supported");
        // const config = formatJsonStr(conf);
        // ks.saveFileToDisk({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SaveFileToDiskCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SaveFileToDiskCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SaveFileToDiskCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_SaveImageToPhotosAlbum(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.saveImageToPhotosAlbum({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('SaveImageToPhotosAlbumCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('SaveImageToPhotosAlbumCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('SaveImageToPhotosAlbumCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_ScanCode(conf, callbackId) {
        console.log("KS_ScanCode is not supported");
        // const config = formatJsonStr(conf);
        // ks.scanCode({
        //     ...config,
        //     success(res) {
        //         formatResponse('ScanCodeSuccessCallbackResult', res);
        //         moduleHelper.send('ScanCodeCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ScanCodeCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ScanCodeCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_SetBLEMTU(conf, callbackId) {
        console.log("KS_SetBLEMTU is not supported");
        // const config = formatJsonStr(conf);
        // ks.setBLEMTU({
        //     ...config,
        //     success(res) {
        //         formatResponse('SetBLEMTUSuccessCallbackResult', res);
        //         moduleHelper.send('SetBLEMTUCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('SetBLEMTUFailCallbackResult', res);
        //         moduleHelper.send('SetBLEMTUCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetBLEMTUCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_SetBackgroundFetchToken(conf, callbackId) {
        console.log("KS_SetBackgroundFetchToken is not supported");
        // const config = formatJsonStr(conf);
        // ks.setBackgroundFetchToken({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetBackgroundFetchTokenCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetBackgroundFetchTokenCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetBackgroundFetchTokenCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_SetClipboardData(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.setClipboardData({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('SetClipboardDataCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('SetClipboardDataCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('SetClipboardDataCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_SetDeviceOrientation(conf, callbackId) {
        console.log("KS_SetDeviceOrientation is not supported");
        // const config = formatJsonStr(conf);
        // ks.setDeviceOrientation({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetDeviceOrientationCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetDeviceOrientationCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetDeviceOrientationCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_SetEnableDebug(conf, callbackId) {
        console.log("KS_SetEnableDebug is not supported");
        // const config = formatJsonStr(conf);
        // ks.setEnableDebug({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetEnableDebugCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetEnableDebugCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetEnableDebugCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_SetInnerAudioOption(conf, callbackId) {
        console.log("KS_SetInnerAudioOption is not supported");
        // const config = formatJsonStr(conf);
        // ks.setInnerAudioOption({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetInnerAudioOptionCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetInnerAudioOptionCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetInnerAudioOptionCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_SetKeepScreenOn(conf, callbackId) {
        console.log("KS_SetKeepScreenOn is not supported");
        // const config = formatJsonStr(conf);
        // ks.setKeepScreenOn({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetKeepScreenOnCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetKeepScreenOnCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetKeepScreenOnCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_SetMenuStyle(conf, callbackId) {
        console.log("KS_SetMenuStyle is not supported");
        // const config = formatJsonStr(conf);
        // ks.setMenuStyle({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetMenuStyleCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetMenuStyleCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetMenuStyleCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_SetScreenBrightness(conf, callbackId) {
        console.log("KS_SetScreenBrightness is not supported");
        // const config = formatJsonStr(conf);
        // ks.setScreenBrightness({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetScreenBrightnessCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetScreenBrightnessCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetScreenBrightnessCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_SetStatusBarStyle(conf, callbackId) {
        console.log("KS_SetStatusBarStyle is not supported");
        // const config = formatJsonStr(conf);
        // ks.setStatusBarStyle({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetStatusBarStyleCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetStatusBarStyleCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetStatusBarStyleCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_SetUserCloudStorage(conf, callbackId) {
        console.log("KS_SetUserCloudStorage is not supported");
        // const config = formatJsonStr(conf);
        // ks.setUserCloudStorage({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetUserCloudStorageCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetUserCloudStorageCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetUserCloudStorageCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_SetVisualEffectOnCapture(conf, callbackId) {
        console.log("KS_SetVisualEffectOnCapture is not supported");
        // const config = formatJsonStr(conf);
        // ks.setVisualEffectOnCapture({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetVisualEffectOnCaptureCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetVisualEffectOnCaptureCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('SetVisualEffectOnCaptureCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_ShowActionSheet(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.showActionSheet({
            ...config,
            success(res) {
                formatResponse('ShowActionSheetSuccessCallbackResult', res);
                moduleHelper.send('ShowActionSheetCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShowActionSheetCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShowActionSheetCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_ShowKeyboard(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.showKeyboard({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShowKeyboardCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShowKeyboardCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShowKeyboardCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_ShowLoading(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.showLoading({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShowLoadingCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShowLoadingCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShowLoadingCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_ShowModal(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.showModal({
            ...config,
            success(res) {
                formatResponse('ShowModalSuccessCallbackResult', res);
                moduleHelper.send('ShowModalCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShowModalCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShowModalCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_ShowShareImageMenu(conf, callbackId) {
        console.log("KS_ShowShareImageMenu is not supported");
        // const config = formatJsonStr(conf);
        // ks.showShareImageMenu({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ShowShareImageMenuCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ShowShareImageMenuCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ShowShareImageMenuCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_ShowShareMenu(conf, callbackId) {
        console.log("KS_ShowShareMenu is not supported");
        // const config = formatJsonStr(conf);
        // ks.showShareMenu({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ShowShareMenuCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ShowShareMenuCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('ShowShareMenuCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_ShowToast(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.showToast({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShowToastCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShowToastCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShowToastCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_StartAccelerometer(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.startAccelerometer({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StartAccelerometerCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StartAccelerometerCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StartAccelerometerCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_StartBeaconDiscovery(conf, callbackId) {
        console.log("KS_StartBeaconDiscovery is not supported");
        // const config = formatJsonStr(conf);
        // ks.startBeaconDiscovery({
        //     ...config,
        //     success(res) {
        //         formatResponse('BeaconError', res);
        //         moduleHelper.send('StartBeaconDiscoveryCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BeaconError', res);
        //         moduleHelper.send('StartBeaconDiscoveryCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BeaconError', res);
        //         moduleHelper.send('StartBeaconDiscoveryCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_StartBluetoothDevicesDiscovery(conf, callbackId) {
        console.log("KS_StartBluetoothDevicesDiscovery is not supported");
        // const config = formatJsonStr(conf);
        // ks.startBluetoothDevicesDiscovery({
        //     ...config,
        //     success(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('StartBluetoothDevicesDiscoveryCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('StartBluetoothDevicesDiscoveryCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('StartBluetoothDevicesDiscoveryCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_StartCompass(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.startCompass({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StartCompassCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StartCompassCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StartCompassCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_StartDeviceMotionListening(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.startDeviceMotionListening({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StartDeviceMotionListeningCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StartDeviceMotionListeningCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StartDeviceMotionListeningCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_StopAccelerometer(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.stopAccelerometer({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StopAccelerometerCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StopAccelerometerCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StopAccelerometerCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_StopBeaconDiscovery(conf, callbackId) {
        console.log("KS_StopBeaconDiscovery is not supported");
        // const config = formatJsonStr(conf);
        // ks.stopBeaconDiscovery({
        //     ...config,
        //     success(res) {
        //         formatResponse('BeaconError', res);
        //         moduleHelper.send('StopBeaconDiscoveryCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BeaconError', res);
        //         moduleHelper.send('StopBeaconDiscoveryCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BeaconError', res);
        //         moduleHelper.send('StopBeaconDiscoveryCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_StopBluetoothDevicesDiscovery(conf, callbackId) {
        console.log("KS_StopBluetoothDevicesDiscovery is not supported");
        // const config = formatJsonStr(conf);
        // ks.stopBluetoothDevicesDiscovery({
        //     ...config,
        //     success(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('StopBluetoothDevicesDiscoveryCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('StopBluetoothDevicesDiscoveryCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('StopBluetoothDevicesDiscoveryCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_StopCompass(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.stopCompass({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StopCompassCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StopCompassCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StopCompassCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_StopDeviceMotionListening(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.stopDeviceMotionListening({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StopDeviceMotionListeningCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StopDeviceMotionListeningCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('StopDeviceMotionListeningCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_StopFaceDetect(conf, callbackId) {
        console.log("KS_StopFaceDetect is not supported");
        // const config = formatJsonStr(conf);
        // ks.stopFaceDetect({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('StopFaceDetectCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('StopFaceDetectCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('StopFaceDetectCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_UpdateKeyboard(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.updateKeyboard({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('UpdateKeyboardCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('UpdateKeyboardCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('UpdateKeyboardCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_UpdateShareMenu(conf, callbackId) {
        console.log("KS_UpdateShareMenu is not supported");
        // const config = formatJsonStr(conf);
        // ks.updateShareMenu({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('UpdateShareMenuCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('UpdateShareMenuCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('UpdateShareMenuCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_UpdateVoIPChatMuteConfig(conf, callbackId) {
        console.log("KS_UpdateVoIPChatMuteConfig is not supported");
        // const config = formatJsonStr(conf);
        // ks.updateVoIPChatMuteConfig({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('UpdateVoIPChatMuteConfigCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('UpdateVoIPChatMuteConfigCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('UpdateVoIPChatMuteConfigCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_VibrateLong(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.vibrateLong({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('VibrateLongCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('VibrateLongCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('VibrateLongCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_VibrateShort(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.vibrateShort({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('VibrateShortCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('VibrateShortFailCallbackResult', res);
                moduleHelper.send('VibrateShortCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('VibrateShortCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_WriteBLECharacteristicValue(conf, callbackId) {
        console.log("KS_WriteBLECharacteristicValue is not supported");
        // const config = formatJsonStr(conf);
        // ks.writeBLECharacteristicValue({
        //     ...config,
        //     success(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('WriteBLECharacteristicValueCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('WriteBLECharacteristicValueCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('BluetoothError', res);
        //         moduleHelper.send('WriteBLECharacteristicValueCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_StartGameLive(conf, callbackId) {
        console.log("KS_StartGameLive is not supported");
        // const config = formatJsonStr(conf);
        // ks.startGameLive({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('StartGameLiveCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('StartGameLiveCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('StartGameLiveCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_CheckGameLiveEnabled(conf, callbackId) {
        console.log("KS_CheckGameLiveEnabled is not supported");
        // const config = formatJsonStr(conf);
        // ks.checkGameLiveEnabled({
        //     ...config,
        //     success(res) {
        //         formatResponse('CheckGameLiveEnabledSuccessCallbackOption', res);
        //         moduleHelper.send('CheckGameLiveEnabledCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('CheckGameLiveEnabledCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('CheckGameLiveEnabledCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetUserCurrentGameliveInfo(conf, callbackId) {
        console.log("KS_GetUserCurrentGameliveInfo is not supported");
        // const config = formatJsonStr(conf);
        // ks.getUserCurrentGameliveInfo({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetUserCurrentGameliveInfoSuccessCallbackOption', res);
        //         moduleHelper.send('GetUserCurrentGameliveInfoCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetUserCurrentGameliveInfoCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetUserCurrentGameliveInfoCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetUserRecentGameLiveInfo(conf, callbackId) {
        console.log("KS_GetUserRecentGameLiveInfo is not supported");
        // const config = formatJsonStr(conf);
        // ks.getUserRecentGameLiveInfo({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetUserGameLiveDetailsSuccessCallbackOption', res);
        //         moduleHelper.send('GetUserRecentGameLiveInfoCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetUserRecentGameLiveInfoCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetUserRecentGameLiveInfoCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_GetUserGameLiveDetails(conf, callbackId) {
        console.log("KS_GetUserGameLiveDetails is not supported");
        // const config = formatJsonStr(conf);
        // ks.getUserGameLiveDetails({
        //     ...config,
        //     success(res) {
        //         formatResponse('GetUserGameLiveDetailsSuccessCallbackOption', res);
        //         moduleHelper.send('GetUserGameLiveDetailsCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetUserGameLiveDetailsCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('GetUserGameLiveDetailsCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenChannelsLiveCollection(conf, callbackId) {
        console.log("KS_OpenChannelsLiveCollection is not supported");
        // const config = formatJsonStr(conf);
        // ks.openChannelsLiveCollection({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsLiveCollectionCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsLiveCollectionCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenChannelsLiveCollectionCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenPage(conf, callbackId) {
        console.log("KS_OpenPage is not supported");
        // const config = formatJsonStr(conf);
        // ks.openPage({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenPageCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenPageCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenPageCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_RequestMidasPaymentGameItem(conf, callbackId) {
        console.log("KS_RequestMidasPaymentGameItem is not supported");
        // const config = formatJsonStr(conf);
        // ks.requestMidasPaymentGameItem({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('RequestMidasPaymentGameItemCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('MidasPaymentGameItemError', res);
        //         moduleHelper.send('RequestMidasPaymentGameItemCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('MidasPaymentGameItemError', res);
        //         moduleHelper.send('RequestMidasPaymentGameItemCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_RequestSubscribeLiveActivity(conf, callbackId) {
        console.log("KS_RequestSubscribeLiveActivity is not supported");
        // const config = formatJsonStr(conf);
        // ks.requestSubscribeLiveActivity({
        //     ...config,
        //     success(res) {
        //         formatResponse('RequestSubscribeLiveActivitySuccessCallbackResult', res);
        //         moduleHelper.send('RequestSubscribeLiveActivityCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('RequestSubscribeLiveActivityCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('RequestSubscribeLiveActivityCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_OpenBusinessView(conf, callbackId) {
        console.log("KS_OpenBusinessView is not supported");
        // const config = formatJsonStr(conf);
        // ks.openBusinessView({
        //     ...config,
        //     success(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenBusinessViewCallback', JSON.stringify({
        //             callbackId, type: 'success', res: JSON.stringify(res),
        //         }));
        //     },
        //     fail(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenBusinessViewCallback', JSON.stringify({
        //             callbackId, type: 'fail', res: JSON.stringify(res),
        //         }));
        //     },
        //     complete(res) {
        //         formatResponse('GeneralCallbackResult', res);
        //         moduleHelper.send('OpenBusinessViewCallback', JSON.stringify({
        //             callbackId, type: 'complete', res: JSON.stringify(res),
        //         }));
        //     },
        // });
    },
    KS_ExitPointerLock() {
        console.log("KS_ExitPointerLock is not supported");
        // ks.exitPointerLock();
    },
    KS_OperateGameRecorderVideo(option) {
        console.log("KS_OperateGameRecorderVideo is not supported");
        // ks.operateGameRecorderVideo(formatJsonStr(option));
    },
    KS_RemoveStorageSync(key) {
        ks.removeStorageSync(key);
    },
    KS_ReportEvent(eventId, data) {
        console.log("KS_ReportEvent is not supported");
        // ks.reportEvent(eventId, formatJsonStr(data));
    },
    KS_ReportMonitor(name, value) {
        console.log("KS_ReportMonitor is not supported");
        // ks.reportMonitor(name, value);
    },
    KS_ReportPerformance(id, value, dimensions) {
        console.log("KS_ReportPerformance is not supported");
        // ks.reportPerformance(id, value, dimensions);
    },
    KS_ReportUserBehaviorBranchAnalytics(option) {
        console.log("KS_ReportUserBehaviorBranchAnalytics is not supported");
        // ks.reportUserBehaviorBranchAnalytics(formatJsonStr(option));
    },
    KS_RequestPointerLock() {
        console.log("KS_RequestPointerLock is not supported");
        // ks.requestPointerLock();
    },
    KS_ReserveChannelsLive(option) {
        console.log("KS_ReserveChannelsLive is not supported");
        // ks.reserveChannelsLive(formatJsonStr(option));
    },
    KS_RevokeBufferURL(url) {
        console.log("KS_RevokeBufferURL is not supported");
        // ks.revokeBufferURL(url);
    },
    KS_SetPreferredFramesPerSecond(fps) {
        ks.setPreferredFramesPerSecond(fps);
    },
    KS_SetStorageSync(key, data) {
        ks.setStorageSync(key, formatJsonStr(data));
    },
    KS_GetStorageSync(key) {
      return ks.getStorageSync(key);
    },
    KS_TriggerGC() {
        console.log("KS_TriggerGC is not supported");
        // ks.triggerGC();
    },
    KS_OnAccelerometerChange() {
        if (!OnAccelerometerChangeList) {
            OnAccelerometerChangeList = [];
        }
        const callback = (res) => {
            formatResponse('OnAccelerometerChangeListenerResult', res);
            const resStr = stringifyRes(res);
            moduleHelper.send('_OnAccelerometerChangeCallback', resStr);
        };
        OnAccelerometerChangeList.push(callback);
        ks.onAccelerometerChange(callback);
    },
    KS_OffAccelerometerChange() {
        (OnAccelerometerChangeList || []).forEach((v) => {
            ks.offAccelerometerChange(v);
        });
    },
    KS_OnAudioInterruptionBegin() {
        console.log("KS_OnAudioInterruptionBegin is not supported");
        // if (!OnAudioInterruptionBeginList) {
        //     OnAudioInterruptionBeginList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('GeneralCallbackResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnAudioInterruptionBeginCallback', resStr);
        // };
        // OnAudioInterruptionBeginList.push(callback);
        // ks.onAudioInterruptionBegin(callback);
    },
    KS_OffAudioInterruptionBegin() {
        console.log("KS_OffAudioInterruptionBegin is not supported");
        // (OnAudioInterruptionBeginList || []).forEach((v) => {
        //     ks.offAudioInterruptionBegin(v);
        // });
    },
    KS_OnAudioInterruptionEnd() {
        console.log("KS_OnAudioInterruptionEnd is not supported");
        // if (!OnAudioInterruptionEndList) {
        //     OnAudioInterruptionEndList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('GeneralCallbackResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnAudioInterruptionEndCallback', resStr);
        // };
        // OnAudioInterruptionEndList.push(callback);
        // ks.onAudioInterruptionEnd(callback);
    },
    KS_OffAudioInterruptionEnd() {
        console.log("KS_OffAudioInterruptionEnd is not supported");
        // (OnAudioInterruptionEndList || []).forEach((v) => {
        //     ks.offAudioInterruptionEnd(v);
        // });
    },
    KS_OnBLEConnectionStateChange() {
        console.log("KS_OnBLEConnectionStateChange is not supported");
        // if (!OnBLEConnectionStateChangeList) {
        //     OnBLEConnectionStateChangeList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnBLEConnectionStateChangeListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnBLEConnectionStateChangeCallback', resStr);
        // };
        // OnBLEConnectionStateChangeList.push(callback);
        // ks.onBLEConnectionStateChange(callback);
    },
    KS_OffBLEConnectionStateChange() {
        console.log("KS_OffBLEConnectionStateChange is not supported");
        // (OnBLEConnectionStateChangeList || []).forEach((v) => {
        //     ks.offBLEConnectionStateChange(v);
        // });
    },
    KS_OnBLEMTUChange() {
        console.log("KS_OnBLEMTUChange is not supported");
        // if (!OnBLEMTUChangeList) {
        //     OnBLEMTUChangeList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnBLEMTUChangeListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnBLEMTUChangeCallback', resStr);
        // };
        // OnBLEMTUChangeList.push(callback);
        // ks.onBLEMTUChange(callback);
    },
    KS_OffBLEMTUChange() {
        console.log("KS_OffBLEMTUChange is not supported");
        // (OnBLEMTUChangeList || []).forEach((v) => {
        //     ks.offBLEMTUChange(v);
        // });
    },
    KS_OnBLEPeripheralConnectionStateChanged() {
        console.log("KS_OnBLEPeripheralConnectionStateChanged is not supported");
        // if (!OnBLEPeripheralConnectionStateChangedList) {
        //     OnBLEPeripheralConnectionStateChangedList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnBLEPeripheralConnectionStateChangedListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnBLEPeripheralConnectionStateChangedCallback', resStr);
        // };
        // OnBLEPeripheralConnectionStateChangedList.push(callback);
        // ks.onBLEPeripheralConnectionStateChanged(callback);
    },
    KS_OffBLEPeripheralConnectionStateChanged() {
        console.log("KS_OffBLEPeripheralConnectionStateChanged is not supported");
        // (OnBLEPeripheralConnectionStateChangedList || []).forEach((v) => {
        //     ks.offBLEPeripheralConnectionStateChanged(v);
        // });
    },
    KS_OnBackgroundFetchData() {
        console.log("KS_OnBackgroundFetchData is not supported");
        // const callback = (res) => {
        //     formatResponse('OnBackgroundFetchDataListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnBackgroundFetchDataCallback', resStr);
        // };
        // ks.onBackgroundFetchData(callback);
    },
    KS_OnBeaconServiceChange() {
        console.log("KS_OnBeaconServiceChange is not supported");
        // if (!OnBeaconServiceChangeList) {
        //     OnBeaconServiceChangeList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnBeaconServiceChangeListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnBeaconServiceChangeCallback', resStr);
        // };
        // OnBeaconServiceChangeList.push(callback);
        // ks.onBeaconServiceChange(callback);
    },
    KS_OffBeaconServiceChange() {
        console.log("KS_OffBeaconServiceChange is not supported");
        // (OnBeaconServiceChangeList || []).forEach((v) => {
        //     ks.offBeaconServiceChange(v);
        // });
    },
    KS_OnBeaconUpdate() {
        console.log("KS_OnBeaconUpdate is not supported");
        // if (!OnBeaconUpdateList) {
        //     OnBeaconUpdateList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnBeaconUpdateListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnBeaconUpdateCallback', resStr);
        // };
        // OnBeaconUpdateList.push(callback);
        // ks.onBeaconUpdate(callback);
    },
    KS_OffBeaconUpdate() {
        console.log("KS_OffBeaconUpdate is not supported");
        // (OnBeaconUpdateList || []).forEach((v) => {
        //     ks.offBeaconUpdate(v);
        // });
    },
    KS_OnBluetoothAdapterStateChange() {
        console.log("KS_OnBluetoothAdapterStateChange is not supported");
        // if (!OnBluetoothAdapterStateChangeList) {
        //     OnBluetoothAdapterStateChangeList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnBluetoothAdapterStateChangeListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnBluetoothAdapterStateChangeCallback', resStr);
        // };
        // OnBluetoothAdapterStateChangeList.push(callback);
        // ks.onBluetoothAdapterStateChange(callback);
    },
    KS_OffBluetoothAdapterStateChange() {
        console.log("KS_OffBluetoothAdapterStateChange is not supported");
        // (OnBluetoothAdapterStateChangeList || []).forEach((v) => {
        //     ks.offBluetoothAdapterStateChange(v);
        // });
    },
    KS_OnBluetoothDeviceFound() {
        console.log("KS_OnBluetoothDeviceFound is not supported");
        // if (!OnBluetoothDeviceFoundList) {
        //     OnBluetoothDeviceFoundList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnBluetoothDeviceFoundListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnBluetoothDeviceFoundCallback', resStr);
        // };
        // OnBluetoothDeviceFoundList.push(callback);
        // ks.onBluetoothDeviceFound(callback);
    },
    KS_OffBluetoothDeviceFound() {
        console.log("KS_OffBluetoothDeviceFound is not supported");
        // (OnBluetoothDeviceFoundList || []).forEach((v) => {
        //     ks.offBluetoothDeviceFound(v);
        // });
    },
    KS_OnCompassChange() {
        if (!OnCompassChangeList) {
            OnCompassChangeList = [];
        }
        const callback = (res) => {
            formatResponse('OnCompassChangeListenerResult', res);
            const resStr = stringifyRes(res);
            moduleHelper.send('_OnCompassChangeCallback', resStr);
        };
        OnCompassChangeList.push(callback);
        ks.onCompassChange(callback);
    },
    KS_OffCompassChange() {
        (OnCompassChangeList || []).forEach((v) => {
            ks.offCompassChange(v);
        });
    },
    KS_OnDeviceMotionChange() {
        if (!OnDeviceMotionChangeList) {
            OnDeviceMotionChangeList = [];
        }
        const callback = (res) => {
            formatResponse('OnDeviceMotionChangeListenerResult', res);
            const resStr = stringifyRes(res);
            moduleHelper.send('_OnDeviceMotionChangeCallback', resStr);
        };
        OnDeviceMotionChangeList.push(callback);
        ks.onDeviceMotionChange(callback);
    },
    KS_OffDeviceMotionChange() {
        (OnDeviceMotionChangeList || []).forEach((v) => {
            ks.offDeviceMotionChange(v);
        });
    },
    KS_OnDeviceOrientationChange() {
        console.log("KS_OnDeviceOrientationChange is not supported");
        // if (!OnDeviceOrientationChangeList) {
        //     OnDeviceOrientationChangeList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnDeviceOrientationChangeListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnDeviceOrientationChangeCallback', resStr);
        // };
        // OnDeviceOrientationChangeList.push(callback);
        // ks.onDeviceOrientationChange(callback);
    },
    KS_OffDeviceOrientationChange() {
        console.log("KS_OffDeviceOrientationChange is not supported");
        // (OnDeviceOrientationChangeList || []).forEach((v) => {
        //     ks.offDeviceOrientationChange(v);
        // });
    },
    KS_OnError() {
        console.log("KS_OnError is not supported");
        // if (!OnErrorList) {
        //     OnErrorList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('Error', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnErrorCallback', resStr);
        // };
        // OnErrorList.push(callback);
        // ks.onError(callback);
    },
    KS_OffError() {
        console.log("KS_OffError is not supported");
        // (OnErrorList || []).forEach((v) => {
        //     ks.offError(v);
        // });
    },
    KS_OnHide() {
        if (!OnHideList) {
            OnHideList = [];
        }
        const callback = (res) => {
            formatResponse('GeneralCallbackResult', res);
            const resStr = stringifyRes(res);
            moduleHelper.send('_OnHideCallback', resStr);
        };
        OnHideList.push(callback);
        ks.onHide(callback);
    },
    KS_OffHide() {
        (OnHideList || []).forEach((v) => {
            ks.offHide(v);
        });
    },
    KS_OnInteractiveStorageModified() {
        console.log("KS_OnInteractiveStorageModified is not supported");
        // if (!OnInteractiveStorageModifiedList) {
        //     OnInteractiveStorageModifiedList = [];
        // }
        // const callback = (res) => {
        //     const resStr = res;
        //     moduleHelper.send('_OnInteractiveStorageModifiedCallback', resStr);
        // };
        // OnInteractiveStorageModifiedList.push(callback);
        // ks.onInteractiveStorageModified(callback);
    },
    KS_OffInteractiveStorageModified() {
        console.log("KS_OffInteractiveStorageModified is not supported");
        // (OnInteractiveStorageModifiedList || []).forEach((v) => {
        //     ks.offInteractiveStorageModified(v);
        // });
    },
    KS_OnKeyDown() {
        console.log("KS_OnKeyDown is not supported");
        // if (!OnKeyDownList) {
        //     OnKeyDownList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnKeyDownListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnKeyDownCallback', resStr);
        // };
        // OnKeyDownList.push(callback);
        // ks.onKeyDown(callback);
    },
    KS_OffKeyDown() {
        console.log("KS_OffKeyDown is not supported");
        // (OnKeyDownList || []).forEach((v) => {
        //     ks.offKeyDown(v);
        // });
    },
    KS_OnKeyUp() {
        console.log("KS_OnKeyUp is not supported");
        // if (!OnKeyUpList) {
        //     OnKeyUpList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnKeyDownListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnKeyUpCallback', resStr);
        // };
        // OnKeyUpList.push(callback);
        // ks.onKeyUp(callback);
    },
    KS_OffKeyUp() {
        console.log("KS_OffKeyUp is not supported");
        // (OnKeyUpList || []).forEach((v) => {
        //     ks.offKeyUp(v);
        // });
    },
    KS_OnKeyboardComplete() {
        if (!OnKeyboardCompleteList) {
            OnKeyboardCompleteList = [];
        }
        const callback = (res) => {
            formatResponse('OnKeyboardInputListenerResult', res);
            const resStr = stringifyRes(res);
            moduleHelper.send('_OnKeyboardCompleteCallback', resStr);
        };
        OnKeyboardCompleteList.push(callback);
        ks.onKeyboardComplete(callback);
    },
    KS_OffKeyboardComplete() {
        (OnKeyboardCompleteList || []).forEach((v) => {
            ks.offKeyboardComplete(v);
        });
    },
    KS_OnKeyboardConfirm() {
        if (!OnKeyboardConfirmList) {
            OnKeyboardConfirmList = [];
        }
        const callback = (res) => {
            formatResponse('OnKeyboardInputListenerResult', res);
            const resStr = stringifyRes(res);
            moduleHelper.send('_OnKeyboardConfirmCallback', resStr);
        };
        OnKeyboardConfirmList.push(callback);
        ks.onKeyboardConfirm(callback);
    },
    KS_OffKeyboardConfirm() {
        (OnKeyboardConfirmList || []).forEach((v) => {
            ks.offKeyboardConfirm(v);
        });
    },
    KS_OnKeyboardHeightChange() {
        if (!OnKeyboardHeightChangeList) {
            OnKeyboardHeightChangeList = [];
        }
        const callback = (res) => {
            formatResponse('OnKeyboardHeightChangeListenerResult', res);
            const resStr = stringifyRes(res);
            moduleHelper.send('_OnKeyboardHeightChangeCallback', resStr);
        };
        OnKeyboardHeightChangeList.push(callback);
        ks.onKeyboardHeightChange(callback);
    },
    KS_OffKeyboardHeightChange() {
        (OnKeyboardHeightChangeList || []).forEach((v) => {
            ks.offKeyboardHeightChange(v);
        });
    },
    KS_OnKeyboardInput() {
        if (!OnKeyboardInputList) {
            OnKeyboardInputList = [];
        }
        const callback = (res) => {
            formatResponse('OnKeyboardInputListenerResult', res);
            const resStr = stringifyRes(res);
            moduleHelper.send('_OnKeyboardInputCallback', resStr);
        };
        OnKeyboardInputList.push(callback);
        ks.onKeyboardInput(callback);
    },
    KS_OffKeyboardInput() {
        (OnKeyboardInputList || []).forEach((v) => {
            ks.offKeyboardInput(v);
        });
    },
    KS_OnMemoryWarning() {
        if (!OnMemoryWarningList) {
            OnMemoryWarningList = [];
        }
        const callback = (res) => {
            formatResponse('OnMemoryWarningListenerResult', res);
            const resStr = stringifyRes(res);
            moduleHelper.send('_OnMemoryWarningCallback', resStr);
        };
        OnMemoryWarningList.push(callback);
        ks.onMemoryWarning(callback);
    },
    KS_OffMemoryWarning() {
        (OnMemoryWarningList || []).forEach((v) => {
            ks.offMemoryWarning(v);
        });
    },
    KS_OnMessage() {
        console.log("KS_OnMessage is not supported");
        // const callback = (res) => {
        //     const resStr = res;
        //     moduleHelper.send('_OnMessageCallback', resStr);
        // };
        // ks.onMessage(callback);
    },
    KS_OnMouseDown() {
        console.log("KS_OnMouseDown is not supported");
        // if (!OnMouseDownList) {
        //     OnMouseDownList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnMouseDownListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnMouseDownCallback', resStr);
        // };
        // OnMouseDownList.push(callback);
        // ks.onMouseDown(callback);
    },
    KS_OffMouseDown() {
        console.log("KS_OffMouseDown is not supported");
        // (OnMouseDownList || []).forEach((v) => {
        //     ks.offMouseDown(v);
        // });
    },
    KS_OnMouseMove() {
        console.log("KS_OnMouseMove is not supported");
        // if (!OnMouseMoveList) {
        //     OnMouseMoveList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnMouseMoveListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnMouseMoveCallback', resStr);
        // };
        // OnMouseMoveList.push(callback);
        // ks.onMouseMove(callback);
    },
    KS_OffMouseMove() {
        console.log("KS_OffMouseMove is not supported");
        // (OnMouseMoveList || []).forEach((v) => {
        //     ks.offMouseMove(v);
        // });
    },
    KS_OnMouseUp() {
        console.log("KS_OnMouseUp is not supported");
        // if (!OnMouseUpList) {
        //     OnMouseUpList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnMouseDownListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnMouseUpCallback', resStr);
        // };
        // OnMouseUpList.push(callback);
        // ks.onMouseUp(callback);
    },
    KS_OffMouseUp() {
        console.log("KS_OffMouseUp is not supported");
        // (OnMouseUpList || []).forEach((v) => {
        //     ks.offMouseUp(v);
        // });
    },
    KS_OnNetworkStatusChange() {
        if (!OnNetworkStatusChangeList) {
            OnNetworkStatusChangeList = [];
        }
        const callback = (res) => {
            formatResponse('OnNetworkStatusChangeListenerResult', res);
            const resStr = stringifyRes(res);
            moduleHelper.send('_OnNetworkStatusChangeCallback', resStr);
        };
        OnNetworkStatusChangeList.push(callback);
        ks.onNetworkStatusChange(callback);
    },
    KS_OffNetworkStatusChange() {
        (OnNetworkStatusChangeList || []).forEach((v) => {
            ks.offNetworkStatusChange(v);
        });
    },
    KS_OnNetworkWeakChange() {
        console.log("KS_OnNetworkWeakChange is not supported");
        // if (!OnNetworkWeakChangeList) {
        //     OnNetworkWeakChangeList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnNetworkWeakChangeListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnNetworkWeakChangeCallback', resStr);
        // };
        // OnNetworkWeakChangeList.push(callback);
        // ks.onNetworkWeakChange(callback);
    },
    KS_OffNetworkWeakChange() {
        console.log("KS_OffNetworkWeakChange is not supported");
        // (OnNetworkWeakChangeList || []).forEach((v) => {
        //     ks.offNetworkWeakChange(v);
        // });
    },
    KS_OnScreenRecordingStateChanged() {
        console.log("KS_OnScreenRecordingStateChanged is not supported");
        // if (!OnScreenRecordingStateChangedList) {
        //     OnScreenRecordingStateChangedList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnScreenRecordingStateChangedListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnScreenRecordingStateChangedCallback', resStr);
        // };
        // OnScreenRecordingStateChangedList.push(callback);
        // ks.onScreenRecordingStateChanged(callback);
    },
    KS_OffScreenRecordingStateChanged() {
        console.log("KS_OffScreenRecordingStateChanged is not supported");
        // (OnScreenRecordingStateChangedList || []).forEach((v) => {
        //     ks.offScreenRecordingStateChanged(v);
        // });
    },
    KS_OnShareMessageToFriend() {
        console.log("KS_OnShareMessageToFriend is not supported");
        // const callback = (res) => {
        //     formatResponse('OnShareMessageToFriendListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnShareMessageToFriendCallback', resStr);
        // };
        // ks.onShareMessageToFriend(callback);
    },
    KS_OnShow() {
        if (!OnShowList) {
            OnShowList = [];
        }
        const callback = (res) => {
            formatResponse('OnShowListenerResult', res);
            const resStr = stringifyRes(res);
            moduleHelper.send('_OnShowCallback', resStr);
        };
        OnShowList.push(callback);
        ks.onShow(callback);
    },
    KS_OffShow() {
        (OnShowList || []).forEach((v) => {
            ks.offShow(v);
        });
    },
    KS_OnUnhandledRejection() {
        console.log("KS_OnUnhandledRejection is not supported");
        // if (!OnUnhandledRejectionList) {
        //     OnUnhandledRejectionList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnUnhandledRejectionListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnUnhandledRejectionCallback', resStr);
        // };
        // OnUnhandledRejectionList.push(callback);
        // ks.onUnhandledRejection(callback);
    },
    KS_OffUnhandledRejection() {
        console.log("KS_OffUnhandledRejection is not supported");
        // (OnUnhandledRejectionList || []).forEach((v) => {
        //     ks.offUnhandledRejection(v);
        // });
    },
    KS_OnUserCaptureScreen() {
        console.log("KS_OnUserCaptureScreen is not supported");
        // if (!OnUserCaptureScreenList) {
        //     OnUserCaptureScreenList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('GeneralCallbackResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnUserCaptureScreenCallback', resStr);
        // };
        // OnUserCaptureScreenList.push(callback);
        // ks.onUserCaptureScreen(callback);
    },
    KS_OffUserCaptureScreen() {
        console.log("KS_OffUserCaptureScreen is not supported");
        // (OnUserCaptureScreenList || []).forEach((v) => {
        //     ks.offUserCaptureScreen(v);
        // });
    },
    KS_OnVoIPChatInterrupted() {
        console.log("KS_OnVoIPChatInterrupted is not supported");
        // if (!OnVoIPChatInterruptedList) {
        //     OnVoIPChatInterruptedList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnVoIPChatInterruptedListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnVoIPChatInterruptedCallback', resStr);
        // };
        // OnVoIPChatInterruptedList.push(callback);
        // ks.onVoIPChatInterrupted(callback);
    },
    KS_OffVoIPChatInterrupted() {
        console.log("KS_OffVoIPChatInterrupted is not supported");
        // (OnVoIPChatInterruptedList || []).forEach((v) => {
        //     ks.offVoIPChatInterrupted(v);
        // });
    },
    KS_OnVoIPChatMembersChanged() {
        console.log("KS_OnVoIPChatMembersChanged is not supported");
        // if (!OnVoIPChatMembersChangedList) {
        //     OnVoIPChatMembersChangedList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnVoIPChatMembersChangedListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnVoIPChatMembersChangedCallback', resStr);
        // };
        // OnVoIPChatMembersChangedList.push(callback);
        // ks.onVoIPChatMembersChanged(callback);
    },
    KS_OffVoIPChatMembersChanged() {
        console.log("KS_OffVoIPChatMembersChanged is not supported");
        // (OnVoIPChatMembersChangedList || []).forEach((v) => {
        //     ks.offVoIPChatMembersChanged(v);
        // });
    },
    KS_OnVoIPChatSpeakersChanged() {
        console.log("KS_OnVoIPChatSpeakersChanged is not supported");
        // if (!OnVoIPChatSpeakersChangedList) {
        //     OnVoIPChatSpeakersChangedList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnVoIPChatSpeakersChangedListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnVoIPChatSpeakersChangedCallback', resStr);
        // };
        // OnVoIPChatSpeakersChangedList.push(callback);
        // ks.onVoIPChatSpeakersChanged(callback);
    },
    KS_OffVoIPChatSpeakersChanged() {
        console.log("KS_OffVoIPChatSpeakersChanged is not supported");
        // (OnVoIPChatSpeakersChangedList || []).forEach((v) => {
        //     ks.offVoIPChatSpeakersChanged(v);
        // });
    },
    KS_OnVoIPChatStateChanged() {
        console.log("KS_OnVoIPChatStateChanged is not supported");
        // if (!OnVoIPChatStateChangedList) {
        //     OnVoIPChatStateChangedList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnVoIPChatStateChangedListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnVoIPChatStateChangedCallback', resStr);
        // };
        // OnVoIPChatStateChangedList.push(callback);
        // ks.onVoIPChatStateChanged(callback);
    },
    KS_OffVoIPChatStateChanged() {
        console.log("KS_OffVoIPChatStateChanged is not supported");
        // (OnVoIPChatStateChangedList || []).forEach((v) => {
        //     ks.offVoIPChatStateChanged(v);
        // });
    },
    KS_OnWheel() {
        console.log("KS_OnWheel is not supported");
        // if (!OnWheelList) {
        //     OnWheelList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnWheelListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnWheelCallback', resStr);
        // };
        // OnWheelList.push(callback);
        // ks.onWheel(callback);
    },
    KS_OffWheel() {
        console.log("KS_OffWheel is not supported");
        // (OnWheelList || []).forEach((v) => {
        //     ks.offWheel(v);
        // });
    },
    KS_OnWindowResize() {
        console.log("KS_OnWindowResize is not supported");
        // if (!OnWindowResizeList) {
        //     OnWindowResizeList = [];
        // }
        // const callback = (res) => {
        //     formatResponse('OnWindowResizeListenerResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnWindowResizeCallback', resStr);
        // };
        // OnWindowResizeList.push(callback);
        // ks.onWindowResize(callback);
    },
    KS_OffWindowResize() {
        console.log("KS_OffWindowResize is not supported");
        // (OnWindowResizeList || []).forEach((v) => {
        //     ks.offWindowResize(v);
        // });
    },
    KS_OnClickCloseButtonAction() {
        if (!OnClickCloseButtonActionList) {
            OnClickCloseButtonActionList = [];
        }
        const callback = (res) => {
            formatResponse('GeneralCallbackResult', res);
            const resStr = stringifyRes(res);
            moduleHelper.send('_OnClickCloseButtonActionCallback', resStr);
        };
        OnClickCloseButtonActionList.push(callback);
        ks.onClickCloseButtonAction(callback);
    },
    KS_OffClickCloseButtonAction() {
        (OnClickCloseButtonActionList || []).forEach((v) => {
            ks.offClickCloseButtonAction(v);
        });
    },
    KS_OnAddToFavorites() {
        console.log("KS_OnAddToFavorites is not supported");
        // const callback = (res) => {
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnAddToFavoritesCallback', resStr);
        //     return ksOnAddToFavoritesResolveConf;
        // };
        // ks.onAddToFavorites(callback);
    },
    KS_OnAddToFavorites_Resolve(conf) {
        try {
            ksOnAddToFavoritesResolveConf = formatJsonStr(conf);
            return;
        }
        catch (e) {
        }
        ksOnAddToFavoritesResolveConf = {};
    },
    KS_OffAddToFavorites() {
        console.log("KS_OffAddToFavorites is not supported");
        // ks.offAddToFavorites();
    },
    KS_OnCopyUrl() {
        console.log("KS_OnCopyUrl is not supported");
        // const callback = (res) => {
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnCopyUrlCallback', resStr);
        //     return ksOnCopyUrlResolveConf;
        // };
        // ks.onCopyUrl(callback);
    },
    KS_OnCopyUrl_Resolve(conf) {
        try {
            ksOnCopyUrlResolveConf = formatJsonStr(conf);
            return;
        }
        catch (e) {
        }
        ksOnCopyUrlResolveConf = {};
    },
    KS_OffCopyUrl() {
        console.log("KS_OffCopyUrl is not supported");
        // ks.offCopyUrl();
    },
    KS_OnHandoff() {
        console.log("KS_OnHandoff is not supported");
        // const callback = (res) => {
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnHandoffCallback', resStr);
        //     return ksOnHandoffResolveConf;
        // };
        // ks.onHandoff(callback);
    },
    KS_OnHandoff_Resolve(conf) {
        try {
            ksOnHandoffResolveConf = formatJsonStr(conf);
            return;
        }
        catch (e) {
        }
        ksOnHandoffResolveConf = {};
    },
    KS_OffHandoff() {
        console.log("KS_OffHandoff is not supported");
        // ks.offHandoff();
    },
    KS_OnShareTimeline() {
        console.log("KS_OnShareTimeline is not supported");
        // const callback = (res) => {
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnShareTimelineCallback', resStr);
        //     return ksOnShareTimelineResolveConf;
        // };
        // ks.onShareTimeline(callback);
    },
    KS_OnShareTimeline_Resolve(conf) {
        try {
            ksOnShareTimelineResolveConf = formatJsonStr(conf);
            return;
        }
        catch (e) {
        }
        ksOnShareTimelineResolveConf = {};
    },
    KS_OffShareTimeline() {
        console.log("KS_OffShareTimeline is not supported");
        // ks.offShareTimeline();
    },
    KS_OnGameLiveStateChange() {
        console.log("KS_OnGameLiveStateChange is not supported");
        // const callback = (res) => {
        //     formatResponse('OnGameLiveStateChangeCallbackResult', res);
        //     const resStr = stringifyRes(res);
        //     moduleHelper.send('_OnGameLiveStateChangeCallback', resStr);
        //     return ksOnGameLiveStateChangeResolveConf;
        // };
        // ks.onGameLiveStateChange(callback);
    },
    KS_OnGameLiveStateChange_Resolve(conf) {
        try {
            ksOnGameLiveStateChangeResolveConf = formatJsonStr(conf);
            return;
        }
        catch (e) {
        }
        ksOnGameLiveStateChangeResolveConf = {};
    },
    KS_OffGameLiveStateChange() {
        console.log("KS_OffGameLiveStateChange is not supported");
        // ks.offGameLiveStateChange();
    },
    KS_SetHandoffQuery(query) {
        console.log("KS_SetHandoffQuery is not supported");
        // const res = ks.setHandoffQuery(formatJsonStr(query));
        // return res;
    },
    KS_GetAccountInfoSync() {
        console.log("KS_GetAccountInfoSync is not supported");
        // const res = ks.getAccountInfoSync();
        // formatResponse('AccountInfo', res);
        // return JSON.stringify(res);
    },
    KS_GetAppAuthorizeSetting() {
        console.log("KS_GetAppAuthorizeSetting is not supported");
        // const res = ks.getAppAuthorizeSetting();
        // formatResponse('AppAuthorizeSetting', JSON.parse(JSON.stringify(res)));
        // return JSON.stringify(res);
    },
    KS_GetAppBaseInfo() {
        console.log("KS_GetAppBaseInfo is not supported");
        // const res = ks.getAppBaseInfo();
        // formatResponse('AppBaseInfo', res);
        // return JSON.stringify(res);
    },
    KS_GetBatteryInfoSync() {
        console.log("KS_GetBatteryInfoSync is not supported");
        // const res = ks.getBatteryInfoSync();
        // formatResponse('GetBatteryInfoSyncResult', res);
        // return JSON.stringify(res);
    },
    KS_GetDeviceInfo() {
        console.log("KS_GetDeviceInfo is not supported");
        // const res = ks.getDeviceInfo();
        // formatResponse('DeviceInfo', res);
        // return JSON.stringify(res);
    },
    KS_GetEnterOptionsSync() {
        console.log("KS_GetEnterOptionsSync is not supported");
        // const res = ks.getEnterOptionsSync();
        // formatResponse('EnterOptionsGame', res);
        // return JSON.stringify(res);
    },
    KS_GetExptInfoSync(keys) {
        console.log("KS_GetExptInfoSync is not supported");
        // const res = ks.getExptInfoSync(formatJsonStr(keys));
        // formatResponse('IAnyObject', res);
        // return JSON.stringify(res);
    },
    KS_GetExtConfigSync() {
        console.log("KS_GetExtConfigSync is not supported");
        // const res = ks.getExtConfigSync();
        // formatResponse('IAnyObject', res);
        // return JSON.stringify(res);
    },
    KS_GetLaunchOptionsSync() {
        const res = ks.getLaunchOptionsSync();
        formatResponse('LaunchOptionsGame', res);
        return JSON.stringify(res);
    },
    KS_GetMenuButtonBoundingClientRect() {
        console.log("KS_GetMenuButtonBoundingClientRect is not supported");
        // const res = ks.getMenuButtonBoundingClientRect();
        // formatResponse('ClientRect', res);
        // return JSON.stringify(res);
    },
    KS_GetStorageInfoSync() {
        const res = ks.getStorageInfoSync();
        formatResponse('GetStorageInfoSyncOption', res);
        return JSON.stringify(res);
    },
    KS_GetSystemInfoSync() {
        const res = ks.getSystemInfoSync();
        formatResponse('SystemInfo', res);
        return JSON.stringify(res);
    },
    KS_GetSystemSetting() {
        console.log("KS_GetSystemSetting is not supported");
        // const res = ks.getSystemSetting();
        // formatResponse('SystemSetting', JSON.parse(JSON.stringify(res)));
        // return JSON.stringify(res);
    },
    KS_GetWindowInfo() {
        console.log("KS_GetWindowInfo is not supported");
        // const res = ks.getWindowInfo();
        // formatResponse('WindowInfo', res);
        // return JSON.stringify(res);
    },
    KS_ClearStorageSync() {
        ks.clearStorageSync();
    },
    KS_CreateImageData() {
        console.log("KS_CreateImageData is not supported");
        // const res = ks.createImageData();
        // formatResponse('ImageData', res);
        // return JSON.stringify(res);
    },
    KS_CreatePath2D() {
        console.log("KS_CreatePath2D is not supported");
        // const res = ks.createPath2D();
        // formatResponse('Path2D', res);
        // return JSON.stringify(res);
    },
    KS_IsPointerLocked() {
        console.log("KS_IsPointerLocked is not supported");
        // const res = ks.isPointerLocked();
        // return res;
    },
    KS_IsVKSupport(version) {
        console.log("KS_IsVKSupport is not supported");
        // const res = ks.isVKSupport(formatJsonStr(version));
        // return res;
    },
    KS_SetCursor(path, x, y) {
        console.log("KS_SetCursor is not supported");
        // const res = ks.setCursor(formatJsonStr(path), x, y);
        // return res;
    },
    KS_SetMessageToFriendQuery(option) {
        console.log("KS_SetMessageToFriendQuery is not supported");
        // const res = ks.setMessageToFriendQuery(formatJsonStr(option));
        // return res;
    },
    KS_GetTextLineHeight(option) {
        console.log("KS_GetTextLineHeight is not supported");
        // const res = ks.getTextLineHeight(formatJsonStr(option));
        // return res;
    },
    KS_LoadFont(path) {
        const res = ks.loadFont(formatJsonStr(path));
        return res;
    },
    KS_GetGameLiveState() {
        console.log("KS_GetGameLiveState is not supported");
        // const res = ks.getGameLiveState();
        // formatResponse('GameLiveState', res);
        // return JSON.stringify(res);
    },
    KS_DownloadFile(conf) {
        const config = formatJsonStr(conf);
        const callbackId = uid();
        const obj = ks.downloadFile({
            ...config,
            success(res) {
                formatResponse('DownloadFileSuccessCallbackResult', res);
                moduleHelper.send('DownloadFileCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('DownloadFileCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('DownloadFileCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
        DownloadTaskList[callbackId] = obj;
        return callbackId;
    },
    KS_CreateFeedbackButton(option) {
        console.log("KS_CreateFeedbackButton is not supported");
        // const obj = ks.createFeedbackButton(formatJsonStr(option));
        // const key = uid();
        // FeedbackButtonList[key] = obj;
        // return key;
    },
    KS_GetLogManager(option) {
        console.log("KS_GetLogManager is not supported");
        // const obj = ks.getLogManager(formatJsonStr(option));
        // const key = uid();
        // LogManagerList[key] = obj;
        // return key;
    },
    KS_GetRealtimeLogManager() {
        console.log("KS_GetRealtimeLogManager is not supported");
        // const obj = ks.getRealtimeLogManager();
        // const key = uid();
        // RealtimeLogManagerList[key] = obj;
        // return key;
    },
    KS_GetUpdateManager() {
        console.log("KS_GetUpdateManager is not supported");
        // const obj = ks.getUpdateManager();
        // const key = uid();
        // UpdateManagerList[key] = obj;
        // return key;
    },
    KS_CreateVideoDecoder() {
        console.log("KS_CreateVideoDecoder is not supported");
        // const obj = ks.createVideoDecoder();
        // const key = uid();
        // VideoDecoderList[key] = obj;
        // return key;
    },
    KS_DownloadTaskAbort(id) {
        const obj = getDownloadTaskObject(id);
        if (!obj) {
            return;
        }
        obj.abort();
    },
    KS_DownloadTaskOffHeadersReceived(id) {
        console.log("KS_DownloadTaskOffHeadersReceived is not supported");
        // const obj = getDownloadTaskObject(id);
        // if (!obj) {
        //     return;
        // }
        // offEventCallback(ksDownloadTaskHeadersReceivedList, (v) => {
        //     obj.offHeadersReceived(v);
        // }, id);
    },
    KS_DownloadTaskOffProgressUpdate(id) {
        const obj = getDownloadTaskObject(id);
        if (!obj) {
            return;
        }
        offEventCallback(ksDownloadTaskProgressUpdateList, (v) => {
            obj.offProgressUpdate(v);
        }, id);
    },
    KS_DownloadTaskOnHeadersReceived(id) {
        console.log("KS_DownloadTaskOnHeadersReceived is not supported");
        // const obj = getDownloadTaskObject(id);
        // if (!obj) {
        //     return;
        // }
        // const callback = onEventCallback(ksDownloadTaskHeadersReceivedList, '_DownloadTaskOnHeadersReceivedCallback', id, id);
        // obj.onHeadersReceived(callback);
    },
    KS_DownloadTaskOnProgressUpdate(id) {
        const obj = getDownloadTaskObject(id);
        if (!obj) {
            return;
        }
        const callback = onEventCallback(ksDownloadTaskProgressUpdateList, '_DownloadTaskOnProgressUpdateCallback', id, id);
        obj.onProgressUpdate(callback);
    },
    KSFeedbackButtonSetProperty(id, key, value) {
        const obj = getFeedbackButtonObject(id);
        if (!obj) {
            return;
        }
        if (/^\s*(\{.*\}|\[.*\])\s*$/.test(value)) {
            try {
                const jsonValue = JSON.parse(value);
                Object.assign(obj[key], jsonValue);
            }
            catch (e) {
                obj[key] = value;
            }
        }
        else {
            obj[key] = value;
        }
    },
    KS_FeedbackButtonDestroy(id) {
        const obj = getFeedbackButtonObject(id);
        if (!obj) {
            return;
        }
        obj.destroy();
    },
    KS_FeedbackButtonHide(id) {
        const obj = getFeedbackButtonObject(id);
        if (!obj) {
            return;
        }
        obj.hide();
    },
    KS_FeedbackButtonOffTap(id) {
        const obj = getFeedbackButtonObject(id);
        if (!obj) {
            return;
        }
        offEventCallback(ksFeedbackButtonTapList, (v) => {
            obj.offTap(v);
        }, id);
    },
    KS_FeedbackButtonOnTap(id) {
        const obj = getFeedbackButtonObject(id);
        if (!obj) {
            return;
        }
        const callback = onEventCallback(ksFeedbackButtonTapList, '_FeedbackButtonOnTapCallback', id, id);
        obj.onTap(callback);
    },
    KS_FeedbackButtonShow(id) {
        const obj = getFeedbackButtonObject(id);
        if (!obj) {
            return;
        }
        obj.show();
    },
    KS_LogManagerDebug(id, args) {
        const obj = getLogManagerObject(id);
        if (!obj) {
            return;
        }
        obj.debug(args);
    },
    KS_LogManagerInfo(id, args) {
        const obj = getLogManagerObject(id);
        if (!obj) {
            return;
        }
        obj.info(args);
    },
    KS_LogManagerLog(id, args) {
        const obj = getLogManagerObject(id);
        if (!obj) {
            return;
        }
        obj.log(args);
    },
    KS_LogManagerWarn(id, args) {
        const obj = getLogManagerObject(id);
        if (!obj) {
            return;
        }
        obj.warn(args);
    },
    KS_RealtimeLogManagerAddFilterMsg(id, msg) {
        const obj = getRealtimeLogManagerObject(id);
        if (!obj) {
            return;
        }
        obj.addFilterMsg(msg);
    },
    KS_RealtimeLogManagerError(id, args) {
        const obj = getRealtimeLogManagerObject(id);
        if (!obj) {
            return;
        }
        obj.error(args);
    },
    KS_RealtimeLogManagerInfo(id, args) {
        const obj = getRealtimeLogManagerObject(id);
        if (!obj) {
            return;
        }
        obj.info(args);
    },
    KS_RealtimeLogManagerSetFilterMsg(id, msg) {
        const obj = getRealtimeLogManagerObject(id);
        if (!obj) {
            return;
        }
        obj.setFilterMsg(msg);
    },
    KS_RealtimeLogManagerWarn(id, args) {
        const obj = getRealtimeLogManagerObject(id);
        if (!obj) {
            return;
        }
        obj.warn(args);
    },
    KS_UpdateManagerApplyUpdate(id) {
        const obj = getUpdateManagerObject(id);
        if (!obj) {
            return;
        }
        obj.applyUpdate();
    },
    KS_UpdateManagerOnCheckForUpdate(id) {
        const obj = getUpdateManagerObject(id);
        if (!obj) {
            return;
        }
        const callback = (res) => {
            formatResponse('OnCheckForUpdateListenerResult', res);
            const resStr = JSON.stringify({
                callbackId: id,
                res: JSON.stringify(res),
            });
            moduleHelper.send('_UpdateManagerOnCheckForUpdateCallback', resStr);
        };
        obj.onCheckForUpdate(callback);
    },
    KS_UpdateManagerOnUpdateFailed(id) {
        const obj = getUpdateManagerObject(id);
        if (!obj) {
            return;
        }
        const callback = (res) => {
            formatResponse('GeneralCallbackResult', res);
            const resStr = JSON.stringify({
                callbackId: id,
                res: JSON.stringify(res),
            });
            moduleHelper.send('_UpdateManagerOnUpdateFailedCallback', resStr);
        };
        obj.onUpdateFailed(callback);
    },
    KS_UpdateManagerOnUpdateReady(id) {
        const obj = getUpdateManagerObject(id);
        if (!obj) {
            return;
        }
        const callback = (res) => {
            formatResponse('GeneralCallbackResult', res);
            const resStr = JSON.stringify({
                callbackId: id,
                res: JSON.stringify(res),
            });
            moduleHelper.send('_UpdateManagerOnUpdateReadyCallback', resStr);
        };
        obj.onUpdateReady(callback);
    },
    KS_VideoDecoderGetFrameData(id) {
        const obj = getVideoDecoderObject(id);
        if (!obj) {
            return JSON.stringify(formatResponse('FrameDataOptions'));
        }
        return JSON.stringify(formatResponse('FrameDataOptions', obj.getFrameData(), id));
    },
    KS_VideoDecoderRemove(id) {
        const obj = getVideoDecoderObject(id);
        if (!obj) {
            return;
        }
        obj.remove();
    },
    KS_VideoDecoderSeek(id, position) {
        const obj = getVideoDecoderObject(id);
        if (!obj) {
            return;
        }
        obj.seek(position);
    },
    KS_VideoDecoderStart(id, option) {
        const obj = getVideoDecoderObject(id);
        if (!obj) {
            return;
        }
        obj.start(formatJsonStr(option));
    },
    KS_VideoDecoderStop(id) {
        const obj = getVideoDecoderObject(id);
        if (!obj) {
            return;
        }
        obj.stop();
    },
    KS_VideoDecoderOff(id, eventName) {
        const obj = getVideoDecoderObject(id);
        if (!obj) {
            return;
        }
        offEventCallback(ksVideoDecoderList, (v) => {
            obj.off(eventName, v);
        }, id);
    },
    KS_VideoDecoderOn(id, eventName) {
        const obj = getVideoDecoderObject(id);
        if (!obj) {
            return;
        }
        const callback = onEventCallback(ksVideoDecoderList, '_VideoDecoderOnCallback', id, id + eventName);
        obj.on(eventName, callback);
    },
    KS_AddShortcut(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.addShortcut({
            ...config,
            success(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('AddShortcutCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('AddShortcutCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('AddShortcutCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_CheckShortcut(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.checkShortcut({
            ...config,
            success(res) {
                formatResponse('CheckShortcutSuccessCallbackResult', res);
                moduleHelper.send('CheckShortcutCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('CheckShortcutCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('CheckShortcutCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            }
        });
    },
    KS_ClearStorage(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.clearStorage({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ClearStorageCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ClearStorageCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ClearStorageCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_SetStorage(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.setStorage({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('SetStorageCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('SetStorageCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('SetStorageCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_GetStorage(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.getStorage({
            ...config,
            success(res) {
                formatResponse('GetStorageSuccessCallbackResult', res);
                moduleHelper.send('GetStorageCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetStorageCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('GetStorageCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_IsLaunchFromShortcut(){
        const res = ks.isLaunchFromShortcut();
        return res;
    },
    KS_CheckSliderBarIsAvailable(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.checkSliderBarIsAvailable({
            ...config,
            success(res) {
                formatResponse('CheckSliderBarIsAvailableSuccessCallbackResult', res);
                moduleHelper.send('CheckSliderBarIsAvailableCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('CheckSliderBarIsAvailableCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            }
        });
    },
    KS_CheckFollowState(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.checkFollowState({
            ...config,
            callback(res) {
                formatResponse('CheckFollowStateCallbackResult', res);
                moduleHelper.send('CheckFollowStateCallback', JSON.stringify({
                    callbackId, type: 'callback', res: JSON.stringify(res),
                }));
            }
        });
    },
    KS_OpenUserProfile(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.openUserProfile({
            ...config,
            callback(res) {
                formatResponse('OpenUserProfileCallbackResult', res);
                moduleHelper.send('OpenUserProfileCallback', JSON.stringify({
                    callbackId, type: 'callback', res: JSON.stringify(res),
                }));
            }
        });
    },
    KS_RequestGamePayment(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.requestGamePayment({
            ...config,
            success(res) {
                formatResponse('RequestGamePaymentSuccessCallbackResult', res);
                moduleHelper.send('RequestGamePaymentCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('RequestGamePaymentCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('RequestGamePaymentCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            }
        });
    },
    KS_NavigateToScene(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.navigateToScene({
            ...config,
            success(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('NavigateToSceneCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('NavigateToSceneCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('NavigateToSceneCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            }
        });
    },
    KS_ChooseVideoAndPublish(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.chooseVideoAndPublish({
            ...config,
            success(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('ChooseVideoAndPublishCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('ChooseVideoAndPublishCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ChooseVideoAndPublishCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            }
        });
    },
    KS_OpenUrl(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.openUrl({
            ...config,
            callback(res) {
                formatResponse('OpenUrlCallbackResult', res);
                moduleHelper.send('OpenUrlCallback', JSON.stringify({
                    callbackId, type: 'callback', res: JSON.stringify(res),
                }));
            }
        });
    },
    KS_NotifyMiniProgramPlayableStatus(conf) {
        const config = formatJsonStr(conf);
        ks.notifyMiniProgramPlayableStatus({
            ...config
        });
    },
    KS_ShareImageToGameClub(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.shareImageToGameClub({
            ...config,
            success(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('ShareImageToGameClubCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('ShareImageToGameClubCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShareImageToGameClubCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            }
        });
    },
    KS_JumpToGameClub(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.jumpToGameClub({
            ...config,
            success(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('JumpToGameClubCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('JumpToGameClubCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('JumpToGameClubCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            }
        });
    },
    KS_AddCommonUse(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.addCommonUse({
            ...config,
            success(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('AddCommonUseCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('AddCommonUseCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('AddCommonUseCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            }
        });
    },
    KS_CheckCommonUse(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.checkCommonUse({
            ...config,
            success(res) {
                formatResponse('CheckCommonUseSuccessCallbackResult', res);
                moduleHelper.send('CheckCommonUseCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('KSGeneralCallbackResult', res);
                moduleHelper.send('CheckCommonUseCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('CheckCommonUseCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            }
        });
    },
};