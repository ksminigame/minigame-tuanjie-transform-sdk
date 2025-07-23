import moduleHelper from './module-helper';
import { getListObject, uid } from './utils';
const userInfoButtonList = {};
const getObject = getListObject(userInfoButtonList, 'userInfoButton');
export default {
        KSCreateUserInfoButton(x, y, width, height, lang, withCredentials) {
            console.log('KSCreateUserInfoButton is not supported');
        // const id = uid();
        // const button = ks.createUserInfoButton({
        //     type: 'text',
        //     text: '',
        //     withCredentials,
        //     lang,
        //     style: {
        //         left: x / window.devicePixelRatio,
        //         top: y / window.devicePixelRatio,
        //         width: width / window.devicePixelRatio,
        //         height: height / window.devicePixelRatio,
        //         backgroundColor: 'rgba(0, 0, 0, 0)',
        //         color: 'rgba(0, 0, 0, 0)',
        //         textAlign: 'center',
        //         fontSize: 0,
        //         borderRadius: 0,
        //         borderColor: '#FFFFFF',
        //         borderWidth: 0,
        //         lineHeight: height / window.devicePixelRatio,
        //     },
        // });
        // userInfoButtonList[id] = button;
        // return id;
    },
    KSUserInfoButtonShow(id) {
        console.log('KSUserInfoButtonShow is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.show();
    },
    KSUserInfoButtonDestroy(id) {
        console.log('KSUserInfoButtonDestroy is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.destroy();
        // if (userInfoButtonList) {
        //     delete userInfoButtonList[id];
        // }
    },
    KSUserInfoButtonHide(id) {
        console.log('KSUserInfoButtonHide is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.hide();
    },
    KSUserInfoButtonOffTap(id) {
        console.log('KSUserInfoButtonOffTap is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.offTap();
    },
    KSUserInfoButtonOnTap(id) {
        console.log('KSUserInfoButtonOnTap is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        
        // obj.onTap((res) => {
        //     res.userInfo = res.userInfo || {};
        //     moduleHelper.send('UserInfoButtonOnTapCallback', JSON.stringify({
        //         callbackId: id,
        //         errCode: res.err_code || (res.errMsg.indexOf('getUserInfo:fail') === 0 ? 1 : 0),
        //         errMsg: res.errMsg || '',
        //         signature: res.signature || '',
        //         encryptedData: res.encryptedData || '',
        //         iv: res.iv || '',
        //         cloudID: res.cloudID || '',
        //         userInfoRaw: JSON.stringify({
        //             nickName: res.userInfo.nickName || '',
        //             avatarUrl: res.userInfo.avatarUrl || '',
        //             country: res.userInfo.country || '',
        //             province: res.userInfo.province || '',
        //             city: res.userInfo.city || '',
        //             language: res.userInfo.language || '',
        //             gender: res.userInfo.gender || 0,
        //         }),
        //     }));
        // });
    },
};
