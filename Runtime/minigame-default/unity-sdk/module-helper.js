import { MODULE_NAMES } from './conf';
export default {
    _send: null,
    init() {
        this._send = GameGlobal.Module.SendMessage;
    },
    send(method, str = '') {
        if (!this._send) {
            this.init();
        }
        for (const moduleName of MODULE_NAMES) {
            this._send(moduleName, method, str);
        }
    },
};
