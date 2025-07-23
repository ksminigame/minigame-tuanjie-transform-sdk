import { WEBAudio, audios, unityAudioVolume, innerAudioVolume } from './store';
import { resumeWebAudio, mkCacheDir } from './utils';

mkCacheDir();
export default {
        KSGetAudioCount() {
        return {
            innerAudio: Object.keys(audios).length,
            webAudio: WEBAudio.bufferSourceNodeLength,
            buffer: WEBAudio.audioBufferLength,
        };
    },
        KSSetAudioMute(value) {
        if (typeof value !== 'boolean') {
            return;
        }
        if (WEBAudio.isMute === value) {
            return;
        }
        WEBAudio.isMute = value;
        
        for (const channelInstance of Object.keys(WEBAudio.audioInstances)) {
            const channel = WEBAudio.audioInstances[+channelInstance];
            if (channel.source) {
                channel.setVolume?.(value ? 0 : unityAudioVolume.get(channel) ?? 1);
            }
        }
        
        for (const innerAudio of Object.values(audios)) {
            innerAudio.volume = value ? 0 : innerAudioVolume.get(innerAudio) ?? 1;
        }
    },
};

const HandleInterruption = {
    init() {
        let INTERRUPT_LIST = {};
        ks.onHide(() => {
            Object.keys(audios).forEach((key) => {
                if (!audios[key].paused !== false) {
                    INTERRUPT_LIST[key] = true;
                }
            });
        });
        ks.onShow(() => {
            Object.keys(audios).forEach((key) => {
                if (audios[key].paused !== false && INTERRUPT_LIST[key]) {
                    audios[key].play();
                }
            });
            INTERRUPT_LIST = {};
        });
        // ks.onAudioInterruptionBegin(() => {
        //     Object.keys(audios).forEach((key) => {
        //         if (!audios[key].paused !== false) {
        //             INTERRUPT_LIST[key] = true;
        //         }
        //     });
        // });
        // ks.onAudioInterruptionEnd(() => {
        //     Object.keys(audios).forEach((key) => {
        //         if (audios[key].paused !== false && INTERRUPT_LIST[key]) {
        //             audios[key].play();
        //         }
        //     });
        //     INTERRUPT_LIST = {};
        //     resumeWebAudio();
        // });
    },
};
HandleInterruption.init();
