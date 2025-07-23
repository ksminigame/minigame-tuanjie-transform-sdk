import moduleHelper from './module-helper';
import { formatJsonStr, formatResponse } from './utils';
let shareResolve;
export default {
    KS_ShareAppMessage(conf, callbackId) {
        const config = formatJsonStr(conf);

        ks.shareAppMessage({
            ...config,
            success(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShareAppMessageCallback', JSON.stringify({
                    callbackId, type: 'success', res: JSON.stringify(res),
                }));
            },
            fail(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShareAppMessageCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res),
                }));
            },
            complete(res) {
                formatResponse('GeneralCallbackResult', res);
                moduleHelper.send('ShareAppMessageCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res),
                }));
            }
        });
    },
    KSOnShareAppMessage(conf, isPromise) {
        console.log('KSOnShareAppMessage is not supported');
        // ks.onShareAppMessage(() => ({
        //     ...formatJsonStr(conf),
        //     promise: isPromise
        //         ? new Promise((resolve) => {
        //             shareResolve = resolve;
        //             moduleHelper.send('OnShareAppMessageCallback');
        //         })
        //         : null,
        // }));
    },
    KSOnShareAppMessageResolve(conf) {
    //     if (shareResolve) {
    //         shareResolve(formatJsonStr(conf));
    //     }
    },
};
// ks.showShareMenu({
//     menus: ['shareAppMessage', 'shareTimeline'],
// });
