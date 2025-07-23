let logger;
export default {
    KSLogManagerDebug(str) {
        console.log('[KSLogManagerDebug]', str);
        // if (!logger) {
        //     logger = ks.getLogManager({ level: 0 });
        // }
        // logger.debug(str);
    },
    KSLogManagerInfo(str) {
        console.log('[KSLogManagerInfo]', str);
        // if (!logger) {
        //     logger = ks.getLogManager({ level: 0 });
        // }
        // logger.info(str);
    },
    KSLogManagerLog(str) {
        console.log('[KSLogManagerLog]', str);
        // if (!logger) {
        //     logger = ks.getLogManager({ level: 0 });
        // }
        // logger.log(str);
    },
    KSLogManagerWarn(str) {
        console.log('[KSLogManagerWarn]', str);
        // if (!logger) {
        //     logger = ks.getLogManager({ level: 0 });
        // }
        // logger.warn(str);
    },
};
