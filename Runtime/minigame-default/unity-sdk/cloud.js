import response from './response';
import { formatJsonStr } from './utils';
const CloudIDObject = {};
function fixKSCallFunctionData(data) {
    for (const key in data) {
        if (typeof data[key] === 'object') {
            fixKSCallFunctionData(data[key]);
        }
        else if (typeof data[key] === 'string' && CloudIDObject[data[key]]) {
            data[key] = CloudIDObject[data[key]];
        }
    }
}
export default {
    KSCallFunctionInit(conf) {
        console.log('KSCallFunctionInit is not supported');
        // const config = formatJsonStr(conf);
        // ks.cloud.init(config);
    },
    KSCallFunction(name, data, conf, s, f, c) {
        console.log('KSCallFunction is not supported');
        // const d = JSON.parse(data);
        // fixKSCallFunctionData(d);
        // ks.cloud.callFunction({
        //     name,
        //     data: d,
        //     config: conf === '' ? null : JSON.parse(conf),
        //     ...response.handlecloudCallFunction(s, f, c),
        // });
    },
    KSCloudID(cloudId) {
        console.log('KSCloudID is not supported');
        // const res = ks.cloud.CloudID(cloudId);
        // const r = JSON.stringify(res);
        // CloudIDObject[r] = res;
        // return r;
    },
};
