import moduleHelper from './module-helper';
import { formatJsonStr, getListObject, uid } from './utils';
const gameClubButtonList = {};
const typeEnum = {
    0: 'text',
    1: 'image',
};
const iconEnum = {
    0: 'green',
    1: 'white',
    2: 'dark',
    3: 'light',
};
const getObject = getListObject(gameClubButtonList, 'gameClubButton');
export default {
    KSCreateGameClubButton(conf) {
        console.log('KSCreateGameClubButton is not supported');
        // const config = formatJsonStr(conf);
        
        // config.style = JSON.parse(config.styleRaw);
        // if (config.style.fontSize === 0) {
            
        //     config.style.fontSize = undefined;
        // }
        
        // config.type = typeEnum[config.type];
        
        // config.icon = iconEnum[config.icon];
        // const id = uid();
        // gameClubButtonList[id] = ks.createGameClubButton(config);
        // return id;
    },
    KSGameClubButtonDestroy(id) {
        console.log('KSGameClubButtonDestroy is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.destroy();
        // if (gameClubButtonList) {
        //     delete gameClubButtonList[id];
        // }
    },
    KSGameClubButtonHide(id) {
        console.log('KSGameClubButtonHide is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.hide();
    },
    KSGameClubButtonShow(id) {
        console.log('KSGameClubButtonShow is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.show();
    },
    KSGameClubButtonAddListener(id, key) {
        console.log('KSGameClubButtonAddListener is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj[key](() => {
        //     moduleHelper.send('OnGameClubButtonCallback', JSON.stringify({
        //         callbackId: id,
        //         errMsg: key,
        //     }));
        // });
    },
    KSGameClubButtonRemoveListener(id, key) {
        console.log('KSGameClubButtonRemoveListener is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj[key]();
    },
    
    KSGameClubButtonSetProperty(id, key, value) {
        console.log('KSGameClubButtonSetProperty is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj[key] = value;
    },
    
    KSGameClubStyleChangeInt(id, key, value) {
        console.log('KSGameClubStyleChangeInt is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.style[key] = value;
    },
    
    KSGameClubStyleChangeStr(id, key, value) {
        console.log('KSGameClubStyleChangeStr is not supported');
        // const obj = getObject(id);
        // if (!obj) {
        //     return;
        // }
        // obj.style[key] = value;
    },
};
