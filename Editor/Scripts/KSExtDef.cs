using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.IO;
using System.Runtime.InteropServices;
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;
using UnityEngine.Rendering;
using Debug = UnityEngine.Debug;

namespace KSWASM.editor
{
    [InitializeOnLoad]
    public class KSExtDef
    {
        static KSExtDef()
        {
            Init();
            UnityUtil.KsSDKEnvInit();
        }

        private static void Init()
        {
            KSExtEnvDef.pluginVersion = KSPluginVersion.pluginVersion;
            KSExtEnvDef.scriptVersion = KSPluginVersion.scriptVersion;
            KSExtEnvDef.converterVersion = KSPluginVersion.converterVersion;
#if UNITY_2018_1_OR_NEWER
            KSExtEnvDef.SETDEF("UNITY_2018_1_OR_NEWER", true);
#else
            KSExtEnvDef.SETDEF("UNITY_2018_1_OR_NEWER", false);
#endif

#if UNITY_2020_1_OR_NEWER
            KSExtEnvDef.SETDEF("UNITY_2020_1_OR_NEWER", true);
#else
            KSExtEnvDef.SETDEF("UNITY_2020_1_OR_NEWER", false);
#endif

#if UNITY_2021_1_OR_NEWER
            KSExtEnvDef.SETDEF("UNITY_2021_1_OR_NEWER", true);
#else
            KSExtEnvDef.SETDEF("UNITY_2021_1_OR_NEWER", false);
#endif
#if UNITY_2021_2_OR_NEWER
            KSExtEnvDef.SETDEF("UNITY_2021_2_OR_NEWER", true);
#else
            KSExtEnvDef.SETDEF("UNITY_2021_2_OR_NEWER", false);
#endif
#if UNITY_2021_3_OR_NEWER
            KSExtEnvDef.SETDEF("UNITY_2021_3_OR_NEWER", true);
#else
            KSExtEnvDef.SETDEF("UNITY_2021_3_OR_NEWER", false);
#endif
#if UNITY_2021_2_5
            KSExtEnvDef.SETDEF("UNITY_2021_2_5", true);
#else
            KSExtEnvDef.SETDEF("UNITY_2021_2_5", false);
#endif
#if UNITY_EDITOR_OSX
            KSExtEnvDef.SETDEF("UNITY_EDITOR_OSX", true);
#else
            KSExtEnvDef.SETDEF("UNITY_EDITOR_OSX", false);
#endif
#if UNITY_EDITOR_LINUX
            KSExtEnvDef.SETDEF("UNITY_EDITOR_LINUX", true);
#else
            KSExtEnvDef.SETDEF("UNITY_EDITOR_LINUX", false);
#endif
#if UNITY_2020
            KSExtEnvDef.SETDEF("UNITY_2020", true);
#else
            KSExtEnvDef.SETDEF("UNITY_2020", false);
#endif
#if UNITY_2021
            KSExtEnvDef.SETDEF("UNITY_2021", true);
#else
            KSExtEnvDef.SETDEF("UNITY_2021", false);
#endif
#if UNITY_2022
            KSExtEnvDef.SETDEF("UNITY_2022", true);
#else
            KSExtEnvDef.SETDEF("UNITY_2022", false);
#endif
#if UNITY_2022_2_OR_NEWER
            KSExtEnvDef.SETDEF("UNITY_2022_2_OR_NEWER", true);
#else
            KSExtEnvDef.SETDEF("UNITY_2022_2_OR_NEWER", false);
#endif
#if UNITY_INSTANTGAME
            KSExtEnvDef.SETDEF("UNITY_INSTANTGAME", true);
#else
            KSExtEnvDef.SETDEF("UNITY_INSTANTGAME", false);
#endif
#if WEIXINMINIGAME
            KSExtEnvDef.SETDEF("WEIXINMINIGAME", true);
#else
            KSExtEnvDef.SETDEF("WEIXINMINIGAME", false);
#endif
#if TUANJIE_2022_3_OR_NEWER
            KSExtEnvDef.SETDEF("TUANJIE_2022_3_OR_NEWER", true);
#else
            KSExtEnvDef.SETDEF("TUANJIE_2022_3_OR_NEWER", false);
#endif
#if PLATFORM_WEIXINMINIGAME
            KSExtEnvDef.SETDEF("PLATFORM_WEIXINMINIGAME", true);
#else
            KSExtEnvDef.SETDEF("PLATFORM_WEIXINMINIGAME", false);
#endif
            RegisterController();
        }

        private static bool UseIL2CPP()
        {
#if TUANJIE_2022_3_OR_NEWER
            return PlayerSettings.GetScriptingBackend(BuildTargetGroup.WeixinMiniGame) == ScriptingImplementation.IL2CPP;
#else
            return true;
#endif
        }
        private static string GetKsSDKRootPath()
        {
#if UNITY_2018
                return Path.Combine(Application.dataPath, "KS-WASM-SDK-V2");
#else
            var packageInfo = UnityEditor.PackageManager.PackageInfo.FindForAssembly(typeof(KSExtEnvDef).Assembly);
            if (packageInfo == null)
            {
                return Path.Combine(Application.dataPath, "KS-WASM-SDK-V2");
            }
            string packagePath = packageInfo.assetPath;
            if (packageInfo.name == "KSSDK")
            {
                packagePath += "/Resources";
            }
            DirectoryInfo dir = new DirectoryInfo(packagePath);
            return dir.FullName;
#endif
        }

        private static bool IsAssets()
        {
#if UNITY_2018
                return true;
#else
            var packageInfo = UnityEditor.PackageManager.PackageInfo.FindForAssembly(typeof(KSExtEnvDef).Assembly);
            if (packageInfo == null)
            {
                return true;
            }
            return false;
#endif
        }

        private static object InitExportPlayerSetting()
        {
#if TUANJIE_1_5_OR_NEWER
            PlayerSettings.MiniGame.threadsSupport = false;
            PlayerSettings.runInBackground = false;
            PlayerSettings.MiniGame.template = "Builtin:Default";
            PlayerSettings.MiniGame.compressionFormat = MiniGameCompressionFormat.Disabled;
            PlayerSettings.MiniGame.linkerTarget = MiniGameLinkerTarget.Wasm;
            PlayerSettings.MiniGame.dataCaching = false;
            PlayerSettings.MiniGame.debugSymbolMode = MiniGameDebugSymbolMode.External;
#elif TUANJIE_2022_3_OR_NEWER
            PlayerSettings.WeixinMiniGame.threadsSupport = false;
            PlayerSettings.runInBackground = false;
            PlayerSettings.WeixinMiniGame.template = "Builtin:Default";
            PlayerSettings.WeixinMiniGame.compressionFormat = WeixinMiniGameCompressionFormat.Disabled;
            PlayerSettings.WeixinMiniGame.linkerTarget = WeixinMiniGameLinkerTarget.Wasm;
            PlayerSettings.WeixinMiniGame.dataCaching = false;
            PlayerSettings.WeixinMiniGame.debugSymbolMode = WeixinMiniGameDebugSymbolMode.External;
#else
            PlayerSettings.WebGL.threadsSupport = false;
            PlayerSettings.runInBackground = false;
            PlayerSettings.WebGL.template = "Builtin:Default";
            PlayerSettings.WebGL.compressionFormat = WebGLCompressionFormat.Disabled;
            PlayerSettings.WebGL.linkerTarget = WebGLLinkerTarget.Wasm;
            PlayerSettings.WebGL.dataCaching = false;
#if UNITY_2021_2_OR_NEWER
            PlayerSettings.WebGL.debugSymbolMode = WebGLDebugSymbolMode.External;
#else
            PlayerSettings.WebGL.debugSymbols = true;
#endif
#endif
            return null;
        }

        private static object CheckBuildTarget()
        {
            LifeCycleEvent.Emit(LifeCycle.beforeSwitchActiveBuildTarget);
            if (UnityUtil.GetEngineVersion() == UnityUtil.EngineVersion.Unity)
            {
                EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.WebGL, BuildTarget.WebGL);
            }
            else
            {
#if TUANJIE_2022_3_OR_NEWER
                EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.WeixinMiniGame, BuildTarget.WeixinMiniGame);
#endif
            }
            LifeCycleEvent.Emit(LifeCycle.afterSwitchActiveBuildTarget);
            return null;
        }

        private static object UpdateGraphicAPI(KSEditorScriptObject config)
        {
            GraphicsDeviceType[] targets = new GraphicsDeviceType[] { };
            return null;
        }

        private static bool ExceptionSupportIsNone()
        {
#if TUANJIE_1_5_OR_NEWER
            return PlayerSettings.MiniGame.exceptionSupport == MiniGameExceptionSupport.None;
#elif PLATFORM_WEIXINMINIGAME
            return PlayerSettings.WeixinMiniGame.exceptionSupport == WeixinMiniGameExceptionSupport.None;
#else
            return PlayerSettings.WebGL.exceptionSupport == WebGLExceptionSupport.None;
#endif
        }
        private static string[] GetScenePaths()
        {
            List<string> scenes = new List<string>();
            for (int i = 0; i < EditorBuildSettings.scenes.Length; i++)
            {
                var scene = EditorBuildSettings.scenes[i];
                UnityEngine.Debug.LogFormat("[Builder] Scenes [{0}]: {1}, [{2}]", i, scene.path, scene.enabled ? "x" : " ");

                if (scene.enabled)
                {
                    scenes.Add(scene.path);
                }
            }

            return scenes.ToArray();
        }
        private static int PerformBuild(KSEditorScriptObject config)
        {
#if TUANJIE_1_5_OR_NEWER
            PlayerSettings.MiniGame.emscriptenArgs =
                " -s EXPORTED_FUNCTIONS=_sbrk,_emscripten_stack_get_base,_emscripten_stack_get_end -s ERROR_ON_UNDEFINED_SYMBOLS=0";
#elif PLATFORM_WEIXINMINIGAME
            PlayerSettings.WeixinMiniGame.emscriptenArgs = string.Empty;
            if (KSExtEnvDef.GETDEF("UNITY_2021_2_OR_NEWER"))
            {
                PlayerSettings.WeixinMiniGame.emscriptenArgs += " -s EXPORTED_FUNCTIONS=_sbrk,_emscripten_stack_get_base,_emscripten_stack_get_end -s ERROR_ON_UNDEFINED_SYMBOLS=0";
            }

#else
            PlayerSettings.WebGL.emscriptenArgs = string.Empty;
            if (KSExtEnvDef.GETDEF("UNITY_2021_2_OR_NEWER"))
            {
                PlayerSettings.WebGL.emscriptenArgs += " -s EXPORTED_FUNCTIONS=_sbrk,_emscripten_stack_get_base,_emscripten_stack_get_end -s ERROR_ON_UNDEFINED_SYMBOLS=0";
#if UNITY_2021_2_5
                    PlayerSettings.WebGL.emscriptenArgs += ",_main";
#endif
            }
#endif
            PlayerSettings.runInBackground = false;
            if (config.ProjectConf.MemorySize != 0)
            {
                if (config.ProjectConf.MemorySize >= 1024)
                {
                    UnityEngine.Debug.LogErrorFormat($"UnityHeap必须小于1024！");
                    return -1;
                }
                else if (config.ProjectConf.MemorySize >= 500)
                {
                    UnityEngine.Debug.LogWarningFormat($"UnityHeap大于500M时，32位Android与iOS普通模式较大概率启动失败，中轻度游戏建议小于该值。");
                }
#if TUANJIE_1_5_OR_NEWER
                PlayerSettings.MiniGame.emscriptenArgs += $" -s TOTAL_MEMORY={config.ProjectConf.MemorySize}MB";
#elif PLATFORM_WEIXINMINIGAME
                PlayerSettings.WeixinMiniGame.emscriptenArgs += $" -s TOTAL_MEMORY={config.ProjectConf.MemorySize}MB";
#else
                PlayerSettings.WebGL.emscriptenArgs += $" -s TOTAL_MEMORY={config.ProjectConf.MemorySize}MB";
#endif
            }

            string original_EXPORTED_RUNTIME_METHODS = "\"ccall\",\"cwrap\",\"stackTrace\",\"addRunDependency\",\"removeRunDependency\",\"FS_createPath\",\"FS_createDataFile\",\"stackTrace\",\"writeStackCookie\",\"checkStackCookie\"";
            string additional_EXPORTED_RUNTIME_METHODS = ",\"lengthBytesUTF8\",\"stringToUTF8\"";

#if TUANJIE_1_5_OR_NEWER
            PlayerSettings.MiniGame.emscriptenArgs += " -s EXPORTED_RUNTIME_METHODS='[" + original_EXPORTED_RUNTIME_METHODS + additional_EXPORTED_RUNTIME_METHODS + "]'";

            if (config.CompileOptions.ProfilingMemory)
            {
                PlayerSettings.MiniGame.emscriptenArgs += " --memoryprofiler ";
            }

            if (config.CompileOptions.profilingFuncs)
            {
                PlayerSettings.MiniGame.emscriptenArgs += " --profiling-funcs ";
            }
#elif PLATFORM_WEIXINMINIGAME
            PlayerSettings.WeixinMiniGame.emscriptenArgs += " -s EXPORTED_RUNTIME_METHODS='[" + original_EXPORTED_RUNTIME_METHODS + additional_EXPORTED_RUNTIME_METHODS + "]'";

            if (config.CompileOptions.ProfilingMemory)
            {
                PlayerSettings.WeixinMiniGame.emscriptenArgs += " --memoryprofiler ";
            }

            if (config.CompileOptions.profilingFuncs)
            {
                PlayerSettings.WeixinMiniGame.emscriptenArgs += " --profiling-funcs ";
            }

#if UNITY_2021_2_OR_NEWER
#if UNITY_2022_1_OR_NEWER
            PlayerSettings.SetIl2CppCodeGeneration(NamedBuildTarget.WeixinMiniGame, config.CompileOptions.Il2CppOptimizeSize ? Il2CppCodeGeneration.OptimizeSize : Il2CppCodeGeneration.OptimizeSpeed);
#else
            EditorUserBuildSettings.il2CppCodeGeneration = config.CompileOptions.Il2CppOptimizeSize ? Il2CppCodeGeneration.OptimizeSize : Il2CppCodeGeneration.OptimizeSpeed;
#endif
#endif
            UnityEngine.Debug.Log("[Builder] Starting to build WeixinMiniGame project ... ");
            UnityEngine.Debug.Log("PlayerSettings.WeixinMiniGame.emscriptenArgs : " + PlayerSettings.WeixinMiniGame.emscriptenArgs);
#else
            PlayerSettings.WebGL.emscriptenArgs += " -s EXPORTED_RUNTIME_METHODS='[" + original_EXPORTED_RUNTIME_METHODS + additional_EXPORTED_RUNTIME_METHODS + "]'";

            if (config.CompileOptions.ProfilingMemory)
            {
                PlayerSettings.WebGL.emscriptenArgs += " --memoryprofiler ";
            }

            if (config.CompileOptions.profilingFuncs)
            {
                PlayerSettings.WebGL.emscriptenArgs += " --profiling-funcs ";
            }

#if UNITY_2021_2_OR_NEWER
#if UNITY_2022_1_OR_NEWER
            PlayerSettings.SetIl2CppCodeGeneration(NamedBuildTarget.WebGL, config.CompileOptions.Il2CppOptimizeSize ? Il2CppCodeGeneration.OptimizeSize : Il2CppCodeGeneration.OptimizeSpeed);
#else
            EditorUserBuildSettings.il2CppCodeGeneration = config.CompileOptions.Il2CppOptimizeSize ? Il2CppCodeGeneration.OptimizeSize : Il2CppCodeGeneration.OptimizeSpeed;
#endif
#endif
            UnityEngine.Debug.Log("[Builder] Starting to build WebGL project ... ");
            UnityEngine.Debug.Log("PlayerSettings.WebGL.emscriptenArgs : " + PlayerSettings.WebGL.emscriptenArgs);
#endif

#if TUANJIE_2022_3_OR_NEWER
            if (EditorUserBuildSettings.activeBuildTarget != BuildTarget.WeixinMiniGame)
            {
                UnityEngine.Debug.LogFormat("[Builder] Current target is: {0}, switching to: {1}", EditorUserBuildSettings.activeBuildTarget, BuildTarget.WeixinMiniGame);
                if (!EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.WeixinMiniGame, BuildTarget.WeixinMiniGame))
                {
                    UnityEngine.Debug.LogFormat("[Builder] Switching to {0}/{1} failed!", BuildTargetGroup.WeixinMiniGame, BuildTarget.WeixinMiniGame);
                    return -1;
                }
            }

            var projDir = Path.Combine(config.ProjectConf.DST, "webgl");
            
            var result = BuildPipeline.BuildPlayer(GetScenePaths(), projDir, BuildTarget.WeixinMiniGame, config.buildOptions);
            if (result.summary.result != UnityEditor.Build.Reporting.BuildResult.Succeeded)
            {
#if TUANJIE_1_5_OR_NEWER
                UnityEngine.Debug.LogFormat("[Builder] BuildPlayer failed. emscriptenArgs:{0}", PlayerSettings.MiniGame.emscriptenArgs);
#else
                UnityEngine.Debug.LogFormat("[Builder] BuildPlayer failed. emscriptenArgs:{0}", PlayerSettings.WeixinMiniGame.emscriptenArgs);
#endif
                return -1;
            }
#else
            if (EditorUserBuildSettings.activeBuildTarget != BuildTarget.WebGL)
            {
                UnityEngine.Debug.LogFormat("[Builder] Current target is: {0}, switching to: {1}", EditorUserBuildSettings.activeBuildTarget, BuildTarget.WebGL);
                if (!EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.WebGL, BuildTarget.WebGL))
                {
                    UnityEngine.Debug.LogFormat("[Builder] Switching to {0}/{1} failed!", BuildTargetGroup.WebGL, BuildTarget.WebGL);
                    return -1;
                }
            }

            var projDir = Path.Combine(config.ProjectConf.DST, "webgl");

            var result = BuildPipeline.BuildPlayer(GetScenePaths(), projDir, BuildTarget.WebGL, config.buildOptions);
            if (result.summary.result != UnityEditor.Build.Reporting.BuildResult.Succeeded)
            {
                UnityEngine.Debug.LogFormat("[Builder] BuildPlayer failed. emscriptenArgs:{0}", PlayerSettings.WebGL.emscriptenArgs);
                return -1;
            }
#endif
            UnityEngine.Debug.LogFormat("[Builder] Done: " + projDir);
            return 0;
        }

        private static bool UploadInstantGameAssets(string firstBundlePath)
        {
#if (UNITY_WEBGL || WEIXINMINIGAME) && UNITY_INSTANTGAME
            if (!string.IsNullOrEmpty(firstBundlePath) && File.Exists(firstBundlePath))
            {
                if (Unity.InstantGame.IGBuildPipeline.UploadWeChatDataFile(firstBundlePath))
                {
                    Debug.Log("转换完成并成功上传首包资源");
                    return true;
                }
                else
                {
                    Debug.LogError("首包资源上传失败，请检查网络以及Auto Streaming配置是否正确。");
                    return false;
                }
            }
            else
            {
                Debug.LogError("首包路径不正确");
                return false;
            }
#else
            return true;
#endif
        }
        private static bool RunBabel(string targetPath)
        {
            string babelPath = Path.Combine(targetPath, "@babel");
            if (!Directory.Exists(babelPath))
            {
#if UNITY_EDITOR_OSX
                HandleAuthority();
#endif
                string babelBin = Path.GetFullPath(Path.Combine(GetKsSDKRootPath(), "Editor", ".Babel", "node_modules", ".bin", "babel"));
                string babelCommand = $"\"{babelBin}\" --config-file ./.babelrc \"{targetPath}\" -d \"{targetPath}\"";

                if (!RunCommand(babelCommand))
                {
                    Debug.LogError("Convert Failure!");
                    return false;
                }
            }
            return true;
        }

#if UNITY_EDITOR_OSX
        private static void HandleAuthority()
        {
            //Todo: not tested on macos 
            string babelPath = Path.GetFullPath(Path.Combine(GetKsSDKRootPath(), "Editor", ".Babel", "node_modules", ".bin", "babel"));
            string zipPath = Path.GetFullPath(Path.Combine(GetKsSDKRootPath(), "Editor", "Converter", "Tools", "osx_x64", "ZipGame"));
            bool isAppleSiliconEditor = UnityEngine.SystemInfo.processorType.Contains("Apple") && !EditorUtility.IsRunningUnderCPUEmulation();
            if (isAppleSiliconEditor)
            {
                zipPath = Path.GetFullPath(Path.Combine(GetKsSDKRootPath(), "Editor", "Converter", "Tools", "osx_arm", "ZipGame"));
            }
            
            string converterPath = Path.GetFullPath(Path.Combine(GetKsSDKRootPath(), "Editor", ".Babel"));
            
            RunCommandIgnoreError($"chmod -R a+x \'{converterPath}\'");
            RunCommandIgnoreError($"xattr -d com.apple.quarantine \'{babelPath}\'");
            RunCommandIgnoreError($"xattr -d com.apple.quarantine \'{zipPath}\'");
        }

        static bool RunCommandIgnoreError(string command)
        {
            try
            {
                Process process = new Process();
                process.StartInfo.FileName = "/bin/bash";
                process.StartInfo.Arguments = $"-c \"{command}\"";
                process.StartInfo.UseShellExecute = false;
                process.StartInfo.CreateNoWindow = true;
                process.StartInfo.RedirectStandardError = true;
                process.StartInfo.RedirectStandardOutput = true;

                process.Start();
                process.WaitForExit();
                string output = process.StandardOutput.ReadToEnd();
                string strErrOuput = process.StandardError.ReadToEnd();
                process.Close();
            }
            catch (Exception e)
            {
                Debug.LogError($"命令执行失败: {e.Message}");
                Environment.Exit(1);
            }

            return false;
        }
#endif

        private static string GetPlaybackEngineDirectory()
        {
#if PLATFORM_WEIXINMINIGAME
            return BuildPipeline.GetPlaybackEngineDirectory(BuildTarget.WeixinMiniGame, BuildOptions.None);
#else
            return BuildPipeline.GetPlaybackEngineDirectory(BuildTarget.WebGL, BuildOptions.None);
#endif
        }

        private static string GetEditorDirectory()
        {
            string editorExePath = EditorApplication.applicationPath;

            return Path.GetDirectoryName(editorExePath);
        }

        public static bool TryGetNodeJsPath(out string nodePath)
        {
            string[] candidatePaths = new string[]
            {
                Path.Combine(GetPlaybackEngineDirectory(), "BuildTools", "Emscripten", "node"),
                Path.Combine(GetEditorDirectory(), "Data", "Tools", "nodejs")
            };

            foreach (var path in candidatePaths)
            {
                if (Directory.Exists(path))
                {
                    nodePath = path;
                    return true;
                }
            }

            if(TryReadDefaultNvmNode(out nodePath))
            {
                return true;
            }

            if (IsNodeInstalled(out nodePath))
            {
                return true;
            }

            Debug.LogError("当前编辑器版本不包含 Node.js, 请用户自行安装 Node.js 并配置环境变量。");
            nodePath = null;
            return false;
        }

        private static bool TryReadDefaultNvmNode(out string nodePath)
        {
            nodePath = null;

            string home = Environment.GetFolderPath(Environment.SpecialFolder.UserProfile);
            string nvmBase = Path.Combine(home, ".nvm/versions/node");

            if (!Directory.Exists(nvmBase))
                return false;

            var versions = Directory.GetDirectories(nvmBase);
            if (versions.Length == 0)
                return false;

            string latestVersion = versions.OrderByDescending(v => v).First();
            string candidatePath = Path.Combine(latestVersion, "bin");

            if (Directory.Exists(candidatePath))
            {
                nodePath = candidatePath;
                return true;
            }

            return false;
        }

        private static bool IsNodeInstalled(out string nodePath)
        {
            nodePath = null;

            string command;
#if UNITY_EDITOR_WIN
            command = "where";
#else
            command = "which";
#endif

            try
            {
                var psi = new ProcessStartInfo
                {
                    FileName = command,
                    Arguments = "node",
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                };

                using (var process = Process.Start(psi))
                {
                    if (process == null) return false;

                    string output = process.StandardOutput.ReadLine();
                    process.WaitForExit();

                    if (!string.IsNullOrEmpty(output) && File.Exists(output.Trim()))
                    {
                        nodePath = output.Trim();
                        return true;
                    }
                }
            }
            catch
            {
                return false;
            }

            return false;
        }

        private static bool RunCommand(string command)
        {
            try
            {
                if (!TryGetNodeJsPath(out string npxPath))
                {
                    return false;
                }

                string pathSeparator = RuntimeInformation.IsOSPlatform(OSPlatform.Windows) ? ";" : ":";
                string pathVariableName = RuntimeInformation.IsOSPlatform(OSPlatform.Windows) ? "Path" : "PATH";

                Process process = new Process();
#if UNITY_EDITOR_WIN
                process.StartInfo.FileName = "cmd.exe";
                process.StartInfo.Arguments = "/c " + $"\"{command}\"";
#elif UNITY_EDITOR_OSX
                string pathVariable = Environment.GetEnvironmentVariable("PATH");
                if (pathVariable != null && !pathVariable.Contains("/usr/local/bin"))
                {
                    string newPath = pathVariable + ":/usr/local/bin";
                    Environment.SetEnvironmentVariable("PATH", newPath);
                    Debug.Log("/usr/local/bin 已添加到环境变量中。");
                }
                process.StartInfo.FileName = "/bin/bash";
                process.StartInfo.Arguments = $"-c \'{command}\'";
#endif
                process.StartInfo.UseShellExecute = false;
                process.StartInfo.CreateNoWindow = true;
                process.StartInfo.WorkingDirectory = Path.GetFullPath(Path.Combine(GetKsSDKRootPath(), "Editor", ".Babel"));
                process.StartInfo.RedirectStandardError = true;
                process.StartInfo.RedirectStandardOutput = true;
                process.StartInfo.EnvironmentVariables[pathVariableName] = $"{Environment.GetEnvironmentVariable(pathVariableName)}{pathSeparator}{npxPath}";

                process.Start();
                process.WaitForExit();
                string output = process.StandardOutput.ReadToEnd();
                string strErrOuput = process.StandardError.ReadToEnd();
                if (string.IsNullOrEmpty(strErrOuput)
                   || strErrOuput.IndexOf("[BABEL] Note", StringComparison.OrdinalIgnoreCase) >= 0
                   || strErrOuput.IndexOf("npm notice", StringComparison.OrdinalIgnoreCase) >= 0
                   )
                {
                    Debug.Log(strErrOuput);
                    return true;
                }

                if (strErrOuput == "/bin/bash: npx: command not found\n")
                {
                    Debug.LogError(strErrOuput + " Please install Node.js: https://nodejs.org/en/");
                }
                else if (strErrOuput.IndexOf("Permission denied", StringComparison.OrdinalIgnoreCase) >= 0)
                {
                    string babelPath = Path.GetFullPath(Path.Combine(GetKsSDKRootPath(), "Editor", ".Babel", "node_modules", ".bin", "babel"));
                    Debug.LogError(strErrOuput + $" Please execute 'chmod a+x \"{babelPath}\"'");
                }
                else if (!string.IsNullOrEmpty(strErrOuput))
                {
                    Debug.LogError(strErrOuput);
                }
                process.Close();
            }
            catch (Exception e)
            {
                Debug.LogError($"命令执行失败: {e.Message}");
                Environment.Exit(1);
            }

            return false;
        }

        private static string GetInstantGameAutoStreamingCDN()
        {
#if UNITY_INSTANTGAME
            string cdn = Unity.InstantGame.IGBuildPipeline.GetInstantGameCDNRoot();
            return cdn;
#else
            return "";
#endif
        }
        private static void RegisterController()
        {
            KSExtEnvDef.RegisterAction("UnityUtil.UseIL2CPP", (args) => UseIL2CPP());
            KSExtEnvDef.RegisterAction("UnityUtil.GetKsSDKRootPath", (args) => GetKsSDKRootPath());
            KSExtEnvDef.RegisterAction("UnityUtil.IsAssets", (args) => IsAssets());
            KSExtEnvDef.RegisterAction("UnityUtil.InitExportPlayerSetting", (args) => InitExportPlayerSetting());
            KSExtEnvDef.RegisterAction("UnityUtil.CheckBuildTarget", (args) => CheckBuildTarget());
            KSExtEnvDef.RegisterAction("UnityUtil.UpdateGraphicAPI", (args) => UpdateGraphicAPI((KSEditorScriptObject)args));
            KSExtEnvDef.RegisterAction("UnityUtil.ExceptionSupportIsNone", (args) => ExceptionSupportIsNone());
            KSExtEnvDef.RegisterAction("UnityUtil.PerformBuild", (args) => PerformBuild((KSEditorScriptObject)args));
            KSExtEnvDef.RegisterAction("UnityUtil.UploadInstantGameAssets", (args) => UploadInstantGameAssets((string)args));
            KSExtEnvDef.RegisterAction("UnityUtil.RunBabel", (args) => RunBabel((string)args));
            KSExtEnvDef.RegisterAction("UnityUtil.GetInstantGameAutoStreamingCDN", (args) => GetInstantGameAutoStreamingCDN());
        }
    }
}