import moduleHelper from './module-helper';
import response from './response';
import { formatJsonStr, uid } from './utils';
import { resumeWebAudio } from './audio/utils';
const ads = {};
export default {
    KSCreateBannerAd(conf) {
        const config = formatJsonStr(conf);
        config.style = JSON.parse(config.styleRaw || '{}');
        const ad = ks.createBannerAd(config);
        const key = uid();
        ads[key] = ad;
        ad.onError((res) => {
            console.error(res);
            moduleHelper.send('ADOnErrorCallback', JSON.stringify({
                callbackId: key,
                errMsg: res.errMsg,
                errCode: res.errCode || res.err_code,
                code: res.code,
                errorMsg: res.errorMsg,
                errorCode: res.errorCode,
            }));
        });
        ad.onLoad(() => {
            moduleHelper.send('ADOnLoadCallback', JSON.stringify({
                callbackId: key,
                errMsg: '',
            }));
        });
        ad.onResize((res) => {
            moduleHelper.send('ADOnResizeCallback', JSON.stringify({
                callbackId: key,
                errMsg: '',
                ...res,
            }));
        });
        ad.onClose(() => {
            moduleHelper.send('ADOnCloseCallback', JSON.stringify({
                callbackId: key,
                errMsg: '',
            }));
        });
        return key;
    },
    KSCreateFixedBottomMiddleBannerAd(adUnitId, adIntervals, height) {
        // const info = ks.getSystemInfoSync();
        // const ad = ks.createBannerAd({
        //     adUnitId,
        //     adIntervals,
        //     style: {
        //         left: 0,
        //         top: info.windowHeight - height,
        //         height,
        //         width: info.windowWidth,
        //     },
        // });
        // const key = uid();
        // ads[key] = ad;
        // ad.onError((res) => {
        //     console.error(res);
        //     moduleHelper.send('ADOnErrorCallback', JSON.stringify({
        //         callbackId: key,
        //         errMsg: res.errMsg,
        //         errCode: res.errCode || res.err_code,
        //     }));
        // });
        // ad.onLoad(() => {
        //     moduleHelper.send('ADOnLoadCallback', JSON.stringify({
        //         callbackId: key,
        //         errMsg: '',
        //     }));
        // });
        // const oldWidth = info.windowWidth;
        // ad.onResize((res) => {
        //     if (Math.abs(res.height - height) > 1 || Math.abs(res.width - oldWidth) > 1) {
        //         ad.style.left = Math.round((info.windowWidth - res.width) / 2);
        //         ad.style.top = Math.round(info.windowHeight - res.height);
        //     }
        //     moduleHelper.send('ADOnResizeCallback', JSON.stringify({
        //         callbackId: key,
        //         errMsg: '',
        //         ...res,
        //     }));
        // });
        // return key;
        console.log('KSCreateFixedBottomMiddleBannerAd is not supported');
        return -1;
    },
    KSCreateRewardedVideoAd(conf) {
        const config = formatJsonStr(conf);
        const ad = ks.createRewardedVideoAd(config);
        const key = uid();
        ads[key] = ad;
        if (!config.multiton) {
            // 单例模式要处理一下
            console.log("RewardedVideoAd.offLoad is not supported");
            // ad.offLoad();
            ad.offError();
            ad.offClose();
        }
        ad.onError((res) => {
            console.error(res);
            moduleHelper.send('ADOnErrorCallback', JSON.stringify({
                callbackId: key,
                errMsg: res.errMsg,
                errCode: res.errCode || res.err_code,
                code: res.code,
                errorMsg: res.errorMsg,
                errorCode: res.errorCode,
            }));
        });
        console.log("RewardedVideoAd.onLoad is not supported");
        // ad.onLoad((res) => {
        //     moduleHelper.send('ADOnLoadCallback', JSON.stringify({
        //         callbackId: key,
        //         errMsg: '',
        //         ...res,
        //     }));
        // });
        ad.onClose((res) => {
            moduleHelper.send('ADOnVideoCloseCallback', JSON.stringify({
                callbackId: key,
                errMsg: '',
                ...res,
            }));
            setTimeout(() => {
                resumeWebAudio();
            }, 0);
        });
        return key;
    },
    KSCreateInterstitialAd(conf) {
        const config = formatJsonStr(conf);
        const ad = ks.createInterstitialAd(config);
        const key = uid();
        ads[key] = ad;
        ad.onError((res) => {
            console.error(res);
            moduleHelper.send('ADOnErrorCallback', JSON.stringify({
                callbackId: key,
                errMsg: res.errMsg,
                errCode: res.errCode || res.err_code,
                code: res.code,
                errorMsg: res.errorMsg,
                errorCode: res.errorCode,
            }));
        });
        console.log("InterstitialAd.onLoad is not supported");
        // ad.onLoad(() => {
        //     moduleHelper.send('ADOnLoadCallback', JSON.stringify({
        //         callbackId: key,
        //         errMsg: '',
        //     }));
        // });
        ad.onClose(() => {
            moduleHelper.send('ADOnCloseCallback', JSON.stringify({
                callbackId: key,
                errMsg: '',
            }));
        });
        return key;
    },
    KSCreateCustomAd(conf) {
        console.log('KSCreateCustomAd is not supported');
        // const config = formatJsonStr(conf);
        // config.style = JSON.parse(config.styleRaw || '{}');
        // const ad = ks.createCustomAd(config);
        // const key = uid();
        // ads[key] = ad;
        // ad.onError((res) => {
        //     console.error(res);
        //     moduleHelper.send('ADOnErrorCallback', JSON.stringify({
        //         callbackId: key,
        //         errMsg: res.errMsg,
        //         errCode: res.errCode || res.err_code,
        //     }));
        // });
        // ad.onLoad(() => {
        //     moduleHelper.send('ADOnLoadCallback', JSON.stringify({
        //         callbackId: key,
        //         errMsg: '',
        //     }));
        // });
        // ad.onClose(() => {
        //     moduleHelper.send('ADOnCloseCallback', JSON.stringify({
        //         callbackId: key,
        //         errMsg: '',
        //     }));
        // });
        // ad.onHide(() => {
        //     moduleHelper.send('ADOnHideCallback', JSON.stringify({
        //         callbackId: key,
        //         errMsg: '',
        //     }));
        // });
        // return key;
    },
    KSADStyleChange(id, key, value) {
        if (!ads[id]) {
            return false;
        }
        if (typeof ads[id].style === 'undefined') {
            return;
        }
        ads[id].style[key] = value;
    },
    KSShowAd(id, succ, fail) {
        if (!ads[id]) {
            return false;
        }
        ads[id]
            .show()
            .then(() => {
            response.textFormat(succ, {
                errMsg: 'show:ok',
            });
        })
            .catch((e) => {
            response.textFormat(fail, {
                errMsg: e.errMsg || '',
            });
        });
    },
    KSShowAd2(id, branchId, branchDim, succ, fail) {
        if (!ads[id]) {
            return false;
        }
        ads[id]
            .show({ branchId, branchDim })
            .then(() => {
            response.textFormat(succ, {
                errMsg: 'show:ok',
            });
        })
            .catch((e) => {
            response.textFormat(fail, {
                errMsg: e.errMsg || '',
            });
        });
    },
    KSHideAd(id, succ, fail) {
        if (!ads[id]) {
            return false;
        }
        if (typeof ads[id].hide === 'undefined') {
            return;
        }
        if (succ || fail) {
            const promise = ads[id].hide();
            
            if (promise) {
                promise
                    .then(() => {
                    response.textFormat(succ, {
                        errMsg: 'hide:ok',
                    });
                })
                    .catch((e) => {
                    response.textFormat(fail, {
                        errMsg: e.errMsg || '',
                    });
                });
            }
            else {
                response.textFormat(succ, {
                    errMsg: 'hide:ok',
                });
            }
        }
        else {
            ads[id].hide();
        }
    },
    KSADGetStyleValue(id, key) {
        if (!ads[id]) {
            return -1;
        }
        if (typeof ads[id].style === 'undefined') {
            return;
        }
        return ads[id].style[key];
    },
    KSADDestroy(id) {
        if (!ads[id]) {
            return false;
        }
        ads[id].destroy();
        delete ads[id];
    },
    KSADLoad(id, succ, fail) {
        // if (!ads[id]) {
        //     return false;
        // }
        // if (typeof ads[id].load === 'undefined') {
        //     return;
        // }
        // ads[id]
        //     .load()
        //     .then(() => {
        //     response.textFormat(succ, {});
        // })
        //     .catch((res) => {
        //     moduleHelper.send('ADLoadErrorCallback', JSON.stringify({
        //         callbackId: fail,
        //         ...res,
        //     }));
        // });
    },
    KSReportShareBehavior(id, conf) {
        if (!ads[id]) {
            return '{}';
        }
        if (typeof ads[id].reportShareBehavior === 'undefined') {
            return '{}';
        }
        const config = formatJsonStr(conf);
        return JSON.stringify(ads[id].reportShareBehavior(config));
    },
};
