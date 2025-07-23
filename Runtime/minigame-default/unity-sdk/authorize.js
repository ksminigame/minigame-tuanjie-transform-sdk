import moduleHelper from './module-helper';
import { formatJsonStr } from './utils';
let resolveFn = null;
export default {
    KS_OnNeedPrivacyAuthorization() {
        console.log('KS_OnNeedPrivacyAuthorization is not supported');
        // const callback = (resolve) => {
        //     resolveFn = resolve;
        //     moduleHelper.send('_OnNeedPrivacyAuthorizationCallback', '{}');
        // };
        
        // ks.onNeedPrivacyAuthorization(callback);
    },
    KS_PrivacyAuthorizeResolve(conf) {
        console.log('KS_PrivacyAuthorizeResolve is not supported');
        // const config = formatJsonStr(conf);
        
        // config.event = config.eventString;
        // if (resolveFn) {
        //     resolveFn(config);
        //     if (config.event === 'agree' || config.event === 'disagree') {
        //         resolveFn = null;
        //     }
        // }
    },
};
