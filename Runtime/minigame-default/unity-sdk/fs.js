import response from './response';
import moduleHelper from './module-helper';
import { cacheArrayBuffer, formatJsonStr, formatResponse } from './utils';
import { fileInfoHandler, fileInfoType, responseWrapper } from './file-info';
function runMethod(method, option, callbackId, isString = false) {
    try {
        const fs = ks.getFileSystemManager();
        let config;
        if (typeof option === 'string') {
            config = formatJsonStr(option);
        }
        else {
            config = option;
        }
        if (method === 'readZipEntry' && !config.encoding) {
            config.encoding = 'utf-8';
            console.error('fs.readZipEntry不支持读取ArrayBuffer，已改为utf-8');
        }
        
        fs[method]({
            ...config,
            success(res) {
                let returnRes = '';
                if (method === 'read') {
                    cacheArrayBuffer(callbackId, res.arrayBuffer);
                    returnRes = JSON.stringify({
                        bytesRead: res.bytesRead,
                        arrayBufferLength: res.arrayBuffer?.byteLength ?? 0,
                    });
                }
                else if (method === 'readCompressedFile') {
                    cacheArrayBuffer(callbackId, res.data);
                    returnRes = JSON.stringify({
                        arrayBufferLength: res.data?.byteLength ?? 0,
                    });
                }
                else if (method === 'readFile') {
                    if (config.encoding) {
                        returnRes = JSON.stringify({
                            stringData: res.data || '',
                        });
                    }
                    else {
                        cacheArrayBuffer(callbackId, res.data);
                        returnRes = JSON.stringify({
                            arrayBufferLength: res.data?.byteLength ?? 0,
                        });
                    }
                }
                else {
                    returnRes = JSON.stringify(res);
                }
                // console.log(`fs.${method} success:`, res);
                moduleHelper.send('FileSystemManagerCallback', JSON.stringify({
                    callbackId, type: 'success', res: returnRes, method: isString ? `${method}_string` : method,
                }));
            },
            fail(res) {
                
                moduleHelper.send('FileSystemManagerCallback', JSON.stringify({
                    callbackId, type: 'fail', res: JSON.stringify(res), method: isString ? `${method}_string` : method,
                }));
            },
            complete(res) {
                moduleHelper.send('FileSystemManagerCallback', JSON.stringify({
                    callbackId, type: 'complete', res: JSON.stringify(res), method: isString ? `${method}_string` : method,
                }));
            },
        });
    }
    catch (e) {
        moduleHelper.send('FileSystemManagerCallback', JSON.stringify({
            callbackId, type: 'complete', res: 'fail', method: isString ? `${method}_string` : method,
        }));
    }
}
export default {
        KSGetUserDataPath() {
        return ks.env.USER_DATA_PATH;
    },
    KSWriteFileSync(filePath, data, encoding) {
        try {
            const fs = ks.getFileSystemManager();
            
            fs.writeFileSync(filePath, data, encoding);
            fileInfoHandler.addFileInfo(filePath, data);
        }
        catch (e) {
            console.error(e);
            if (e.message) {
                return e.message;
            }
            return 'fail';
        }
        return 'ok';
    },
    KSAccessFileSync(filePath) {
        try {
            const fs = ks.getFileSystemManager();
            fs.accessSync(filePath);
            return 'access:ok';
        }
        catch (e) {
            
            if (e.message) {
                return e.message;
            }
            return 'fail';
        }
    },
    KSAccessFile(path, s, f, c) {
        const fs = ks.getFileSystemManager();
        fs.access({
            path,
            ...response.handleText(s, f, c),
        });
    },
    KSCopyFileSync(src, dst) {
        try {
            const fs = ks.getFileSystemManager();
            fs.copyFileSync(src, dst);
            return 'copyFile:ok';
        }
        catch (e) {
            console.error(e);
            if (e.message) {
                return e.message;
            }
            return 'fail';
        }
    },
    KSCopyFile(srcPath, destPath, s, f, c) {
        const fs = ks.getFileSystemManager();
        fs.copyFile({
            srcPath,
            destPath,
            ...response.handleText(s, f, c),
        });
    },
    KSUnlinkSync(filePath) {
        try {
            const fs = ks.getFileSystemManager();
            fs.unlinkSync(filePath);
            fileInfoHandler.removeFileInfo(filePath);
            return 'unlink:ok';
        }
        catch (e) {
            console.error(e);
            if (e.message) {
                return e.message;
            }
            return 'fail';
        }
    },
    KSUnlink(filePath, s, f, c) {
        const fs = ks.getFileSystemManager();
        fs.unlink({
            filePath,
            ...responseWrapper(response.handleText(s, f, c), { filePath, type: fileInfoType.remove }),
        });
    },
    KSWriteFile(filePath, data, encoding, s, f, c) {
        const fs = ks.getFileSystemManager();
        fs.writeFile({
            filePath,
            data: data.buffer,
            encoding,
            ...responseWrapper(response.handleTextLongBack(s, f, c), { filePath, data: data.buffer, type: fileInfoType.add }),
        });
    },
    KSWriteStringFile(filePath, data, encoding, s, f, c) {
        const fs = ks.getFileSystemManager();
        fs.writeFile({
            filePath,
            data,
            encoding,
            ...responseWrapper(response.handleTextLongBack(s, f, c), { filePath, data, type: fileInfoType.add }),
        });
    },
    KSAppendFile(filePath, data, encoding, s, f, c) {
        const fs = ks.getFileSystemManager();
        fs.appendFile({
            filePath,
            data: data.buffer,
            encoding,
            ...response.handleTextLongBack(s, f, c),
        });
    },
    KSAppendStringFile(filePath, data, encoding, s, f, c) {
        const fs = ks.getFileSystemManager();
        fs.appendFile({
            filePath,
            data,
            encoding,
            ...response.handleTextLongBack(s, f, c),
        });
    },
    KSWriteBinFileSync(filePath, data, encoding) {
        const fs = ks.getFileSystemManager();
        try {
            fs.writeFileSync(filePath, data.buffer, encoding);
            fileInfoHandler.addFileInfo(filePath, data.buffer);
        }
        catch (e) {
            console.error(e);
            if (e.message) {
                return e.message;
            }
            return 'fail';
        }
        return 'ok';
    },
    KSReadFile(option, callbackId) {
        runMethod('readFile', option, callbackId);
    },
    KSReadFileSync(option) {
        const fs = ks.getFileSystemManager();
        const config = formatJsonStr(option);
        try {
            const { filePath } = config;
            var res;
            if(config.position && config.length) {
                res = fs.readFileSync(config.filePath, config.encoding, config.position, config.length);
            }
            else if(config.encoding){
                res = fs.readFileSync(config.filePath, config.encoding);
            }
            else{
                res = fs.readFileSync(config.filePath);
            }
            if (!config.encoding && typeof res !== 'string') {
                cacheArrayBuffer(filePath, res);
                return `${res.byteLength}`;
            }
            return res;
        }
        catch (e) {
            console.error(e);
            if (e.message) {
                return e.message;
            }
            return 'fail';
        }
    },
    KSMkdir(dirPath, recursive, s, f, c) {
        const fs = ks.getFileSystemManager();
        fs.mkdir({
            dirPath,
            recursive: Boolean(recursive),
            ...response.handleText(s, f, c),
        });
    },
    KSMkdirSync(dirPath, recursive) {
        try {
            const fs = ks.getFileSystemManager();
            fs.mkdirSync(dirPath, Boolean(recursive));
            return 'mkdir:ok';
        }
        catch (e) {
            console.error(e);
            if (e.message) {
                return e.message;
            }
            return 'fail';
        }
    },
    KSRmdir(dirPath, recursive, s, f, c) {
        const fs = ks.getFileSystemManager();
        fs.rmdir({
            dirPath,
            recursive: Boolean(recursive),
            ...response.handleText(s, f, c),
        });
    },
    KSRmdirSync(dirPath, recursive) {
        try {
            const fs = ks.getFileSystemManager();
            fs.rmdirSync(dirPath, Boolean(recursive));
            return 'rmdirSync:ok';
        }
        catch (e) {
            console.error(e);
            if (e.message) {
                return e.message;
            }
            return 'fail';
        }
    },
    KSStat(conf, callbackId) {
        const config = formatJsonStr(conf);
        ks.getFileSystemManager().stat({
            ...config,
            success(res) {
                if (!Array.isArray(res.stats)) {
                    
                    res.one_stat = res.stats;
                    
                    res.stats = null;
                }
                moduleHelper.send('StatCallback', JSON.stringify({
                    callbackId,
                    type: 'success',
                    res: JSON.stringify(res),
                }));
            },
            fail(res) {
                moduleHelper.send('StatCallback', JSON.stringify({
                    callbackId,
                    type: 'fail',
                    res: JSON.stringify(res),
                }));
            },
            complete(res) {
                
                if (!Array.isArray(res.stats)) {
                    
                    res.one_stat = res.stats;
                    
                    res.stats = null;
                }
                moduleHelper.send('StatCallback', JSON.stringify({
                    callbackId,
                    type: 'complete',
                    res: JSON.stringify(res),
                }));
            },
        });
    },
    KS_FileSystemManagerClose(option, callbackId) {
        runMethod('close', option, callbackId);
    },
    KS_FileSystemManagerFstat(option, callbackId) {
        runMethod('fstat', option, callbackId);
    },
    KS_FileSystemManagerFtruncate(option, callbackId) {
        runMethod('ftruncate', option, callbackId);
    },
    KS_FileSystemManagerGetFileInfo(option, callbackId) {
        runMethod('getFileInfo', option, callbackId);
    },
    KS_FileSystemManagerGetSavedFileList(option, callbackId) {
        runMethod('getSavedFileList', option, callbackId);
    },
    KS_FileSystemManagerOpen(option, callbackId) {
        runMethod('open', option, callbackId);
    },
    KS_FileSystemManagerRead(option, data, callbackId) {
        const config = formatJsonStr(option);
        config.arrayBuffer = data.buffer;
        runMethod('read', config, callbackId);
    },
    KS_FileSystemManagerReadCompressedFile(option, callbackId) {
        runMethod('readCompressedFile', option, callbackId);
    },
    KS_FileSystemManagerReadZipEntry(option, callbackId) {
        runMethod('readZipEntry', option, callbackId);
    },
    KS_FileSystemManagerReadZipEntryString(option, callbackId) {
        runMethod('readZipEntry', option, callbackId, true);
    },
    KS_FileSystemManagerReaddir(option, callbackId) {
        runMethod('readdir', option, callbackId);
    },
    KS_FileSystemManagerRemoveSavedFile(option, callbackId) {
        runMethod('removeSavedFile', option, callbackId);
    },
    KS_FileSystemManagerRename(option, callbackId) {
        runMethod('rename', option, callbackId);
    },
    KS_FileSystemManagerSaveFile(option, callbackId) {
        runMethod('saveFile', option, callbackId);
    },
    KS_FileSystemManagerTruncate(option, callbackId) {
        runMethod('truncate', option, callbackId);
    },
    KS_FileSystemManagerUnzip(option, callbackId) {
        runMethod('unzip', option, callbackId);
    },
    KS_FileSystemManagerWrite(option, data, callbackId) {
        const config = formatJsonStr(option);
        config.data = data.buffer;
        runMethod('write', config, callbackId);
    },
    KS_FileSystemManagerWriteString(option, callbackId) {
        runMethod('write', option, callbackId, true);
    },
    KS_FileSystemManagerReaddirSync(dirPath) {
        const fs = ks.getFileSystemManager();
        try {
            
            return JSON.stringify(fs.readdirSync(dirPath) || []);
        }
        catch (e) {
            console.error(e);
            return '[]';
        }
    },
    KS_FileSystemManagerReadCompressedFileSync(option, callbackId) {
        // const fs = ks.getFileSystemManager();
        // const res = fs.readCompressedFileSync(formatJsonStr(option));
        // cacheArrayBuffer(callbackId, res);
        // return res.byteLength;
        console.log("KS_FileSystemManagerReadCompressedFileSync is not supported");
    },
    KS_FileSystemManagerAppendFileStringSync(filePath, data, encoding) {
        const fs = ks.getFileSystemManager();
        fs.appendFileSync(filePath, data, encoding);
    },
    KS_FileSystemManagerAppendFileSync(filePath, data, encoding) {
        const fs = ks.getFileSystemManager();
        fs.appendFileSync(filePath, data.buffer, encoding);
    },
    KS_FileSystemManagerRenameSync(oldPath, newPath) {
        const fs = ks.getFileSystemManager();
        fs.renameSync(oldPath, newPath);
        return 'ok';
    },
    KS_FileSystemManagerReadSync(option, callbackId) {
        // const fs = ks.getFileSystemManager();
        // const res = fs.readSync(formatJsonStr(option));
        // cacheArrayBuffer(callbackId, res.arrayBuffer);
        // return JSON.stringify({
        //     bytesRead: res.bytesRead,
        //     arrayBufferLength: res.arrayBuffer?.byteLength ?? 0,
        // });
        console.log("KS_FileSystemManagerReadSync is not supported");
    },
    KS_FileSystemManagerFstatSync(option) {
        // const fs = ks.getFileSystemManager();
        // const res = fs.fstatSync(formatJsonStr(option));
        // formatResponse('Stats', res);
        // return JSON.stringify(res);
        console.log("KS_FileSystemManagerFstatSync is not supported");
    },
    KS_FileSystemManagerStatSync(path, recursive) {
        const fs = ks.getFileSystemManager();
        const res = fs.statSync(path, recursive);
        let resArray;
        if (Array.isArray(res)) {
            resArray = res;
        }
        else {
            resArray = [res];
        }
        return JSON.stringify(resArray);
    },
    KS_FileSystemManagerWriteSync(option, data) {
        // const fs = ks.getFileSystemManager();
        // const optionConfig = formatJsonStr(option);
        // optionConfig.data = data.buffer;
        // const res = fs.writeSync(optionConfig);
        // return JSON.stringify({
        //     mode: res.bytesWritten,
        // });
        console.log("KS_FileSystemManagerWriteSync is not supported");
    },
    KS_FileSystemManagerWriteStringSync(option) {
        // const fs = ks.getFileSystemManager();
        // const res = fs.writeSync(formatJsonStr(option));
        // return JSON.stringify({
        //     mode: res.bytesWritten,
        // });
        console.log("KS_FileSystemManagerWriteStringSync is not supported");
    },
    KS_FileSystemManagerOpenSync(option) {
        // const fs = ks.getFileSystemManager();
        // return fs.openSync(formatJsonStr(option));
        console.log("KS_FileSystemManagerOpenSync is not supported");
    },
    KS_FileSystemManagerSaveFileSync(tempFilePath, filePath) {
        const fs = ks.getFileSystemManager();
        if (filePath === "") {
            return fs.saveFileSync(tempFilePath);
        }
        return fs.saveFileSync(tempFilePath, filePath);
    },
    KS_FileSystemManagerCloseSync(option) {
        // const fs = ks.getFileSystemManager();
        // fs.closeSync(formatJsonStr(option));
        console.log("KS_FileSystemManagerCloseSync is not supported");
        return 'ok';
    },
    KS_FileSystemManagerFtruncateSync(option) {
        // const fs = ks.getFileSystemManager();
        // fs.ftruncateSync(formatJsonStr(option));
        console.log("KS_FileSystemManagerFtruncateSync is not supported");
        return 'ok';
    },
    KS_FileSystemManagerTruncateSync(option) {
        const fs = ks.getFileSystemManager();
        fs.truncateSync(formatJsonStr(option));
        return 'ok';
    },
};
