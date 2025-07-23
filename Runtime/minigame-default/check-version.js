Object.defineProperty(exports, "__esModule", {
    value: !0
});

const systemInfo = ks.getSystemInfoSync();
const miniProgram = systemInfo.miniProgram || { envVersion: "release" };

exports.version = systemInfo.version;
exports.SDKVersion = systemInfo.SDKVersion;
exports.platform = systemInfo.platform;
exports.system = systemInfo.system;

exports.isDebug = false;
exports.isPc = false;
exports.isIOS = systemInfo.platform === "ios";
exports.isAndroid = systemInfo.platform === "android";
exports.isDevtools = systemInfo.platform === "devtools";
exports.isMobile = !exports.isPc && !exports.isDevtools;
exports.isDevelop = miniProgram?.envVersion === "develop";
exports.isH5Renderer = GameGlobal.isIOSHighPerformanceMode;

exports.isIOS175 = exports.isH5Renderer;
exports.isSupportSharedCanvasMode = false; // TODO: unknown usage, check if it's supported

exports.canUseCoverview = () => exports.isMobile || exports.isDevtools;

exports.compareVersion = (v1, v2) => {
    return !(!v1 || !v2) && v1.split(".").map(n => n.padStart(2, "0")).join("") >= 
           v2.split(".").map(n => n.padStart(2, "0")).join("");
};

exports.isSupportBufferURL = false;
exports.isSupportPlayBackRate = true;
exports.isSupportCacheAudio = true;
exports.isSupportInnerAudio = true;
exports.isSupportVideoPlayer = true;
exports.webAudioNeedResume = exports.isH5Renderer;

GameGlobal.canUseH5Renderer = GameGlobal.canUseiOSAutoGC = exports.isH5Renderer;

exports.default = () => Promise.resolve(1); // Now we never update host version so we always return 1
