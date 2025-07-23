using System;
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;
using System.Linq;

namespace KSWASM.editor
{
    [InitializeOnLoad]
    public class MiniHostBuildWindowHelper
    {
        private static SettingsHelper helper;
        private static SettingGuiHelper guiHelper;
        static MiniHostBuildWindowHelper()
        {
            helper = new SettingsHelper();
            guiHelper = new SettingGuiHelper(helper);
        }

        public static void OnSettingsGUI(bool showBuildPath)
        {
            guiHelper.OnSettingsGUI(showBuildPath);
        }
        
        public static void OnDisable()
        {
            helper.OnDisable();
        }
        
        public static void UpdateWebGL2()
        {
            helper.UpdateWebGL2();
        }
    }
    
    public class SettingsHelper
    {
        private Dictionary<string, string> formInputData = new Dictionary<string, string>();
        private Dictionary<string, int> formIntPopupData = new Dictionary<string, int>();
        private Dictionary<string, bool> formCheckboxData = new Dictionary<string, bool>();
        private bool m_IsAutoStreaming;
        private bool m_AutoStreamingInitialized = false;
        protected virtual KSEditorScriptObject config => UnityUtil.GetEditorConf("kuaishou", "Assets/KS-WASM-SDK-V2/Editor/MiniGameConfig.asset");

        private void addBundlePathIdentifier(string value)
        {
            string identifier = config.ProjectConf.bundlePathIdentifier;
            if (identifier[identifier.Length - 1] != ';')
            {
                identifier += ";";
            }
            identifier += value;
            config.ProjectConf.bundlePathIdentifier = identifier;
        }
        private void configAutoStreaming()
        {
            config.ProjectConf.CDN = UnityUtil.GetInstantGameAutoStreamingCDN();
            string identifier = config.ProjectConf.bundlePathIdentifier;
            string[] identifiers = identifier.Split(';');
            bool AS = false;
            bool CUS = false;
            foreach (string id in identifiers)
            {
                if (id == "AS")
                {
                    AS = true;
                }
                if (id == "CUS/CustomAB")
                {
                    CUS = true;
                }
            }
            if (!AS)
            {
                this.addBundlePathIdentifier("AS");
            }
            if (!CUS)
            {
                this.addBundlePathIdentifier("CUS/CustomAB");
            }
            if (config.ProjectConf.dataFileSubPrefix != "CUS")
            {
                config.ProjectConf.dataFileSubPrefix = "CUS";
            }
        }

        public void loadData()
        {
            var isAutoStreaming = KSConvertCore.IsInstantGameAutoStreaming();
            if (!m_AutoStreamingInitialized || m_IsAutoStreaming != isAutoStreaming || (m_IsAutoStreaming && config.ProjectConf.CDN != UnityUtil.GetInstantGameAutoStreamingCDN()))
            {
                m_AutoStreamingInitialized = true;
                m_IsAutoStreaming = isAutoStreaming;
                if (isAutoStreaming)
                {
                    configAutoStreaming();
                }
            }

            this.setData("projectName", PlayerSettings.productName);
            this.setData("appid",  config.ProjectConf.Appid);

            this.setData("cdn", config.ProjectConf.CDN);
            this.setData("assetLoadType", config.ProjectConf.assetLoadType);
            this.setData("compressDataPackage", config.ProjectConf.compressDataPackage);
            this.setData("videoUrl", config.ProjectConf.VideoUrl);
            this.setData("orientation", (int)config.ProjectConf.Orientation);
            this.setData("dst", config.ProjectConf.DST);
            this.setData("bundleHashLength", config.ProjectConf.bundleHashLength.ToString());
            this.setData("bundlePathIdentifier", config.ProjectConf.bundlePathIdentifier);
            this.setData("bundleExcludeExtensions", config.ProjectConf.bundleExcludeExtensions);
            this.setData("preloadFiles", config.ProjectConf.preloadFiles);
            this.setData("developBuild", config.CompileOptions.DevelopBuild);
            this.setData("scriptDebugging", config.CompileOptions.ScriptDebugging);
            this.setData("autoProfile", config.CompileOptions.AutoProfile);
            this.setData("scriptOnly", config.CompileOptions.ScriptOnly);
            this.setData("il2CppOptimizeSize", config.CompileOptions.Il2CppOptimizeSize);
            this.setData("profilingFuncs", config.CompileOptions.profilingFuncs);
            this.setData("profilingMemory", config.CompileOptions.ProfilingMemory);
            this.setData("deleteStreamingAssets", config.CompileOptions.DeleteStreamingAssets);
            this.setData("cleanBuild", config.CompileOptions.CleanBuild);
            this.setData("customNodePath", config.CompileOptions.CustomNodePath);
            this.setData("webgl2", config.CompileOptions.Webgl2);
            this.setData("fbslim", config.CompileOptions.fbslim);
            this.setData("bgImageSrc", config.ProjectConf.bgImageSrc);
            this.setData("isCoverviewCustomized", config.ProjectConf.isCoverviewCustomized);
            this.setData("memorySize", config.ProjectConf.MemorySize.ToString());
            this.setData("hideAfterCallMain", config.ProjectConf.HideAfterCallMain);

            this.setData("dataFileSubPrefix", config.ProjectConf.dataFileSubPrefix);
            this.setData("maxStorage", config.ProjectConf.maxStorage.ToString());
            this.setData("defaultReleaseSize", config.ProjectConf.defaultReleaseSize.ToString());
            this.setData("texturesHashLength", config.ProjectConf.texturesHashLength.ToString());
            this.setData("texturesPath", config.ProjectConf.texturesPath);
            this.setData("needCacheTextures", config.ProjectConf.needCacheTextures);
            this.setData("loadingBarWidth", config.ProjectConf.loadingBarWidth.ToString());
            this.setData("needCheckUpdate", config.ProjectConf.needCheckUpdate);
            this.setData("disableHighPerformanceFallback", config.ProjectConf.disableHighPerformanceFallback);
            this.setData("autoAdaptScreen", config.CompileOptions.autoAdaptScreen);
            this.setData("showMonitorSuggestModal", config.CompileOptions.showMonitorSuggestModal);
            this.setData("enableProfileStats", config.CompileOptions.enableProfileStats);
            this.setData("enableRenderAnalysis", config.CompileOptions.enableRenderAnalysis);
            this.setData("brotliMT", config.CompileOptions.brotliMT);
            
            this.setData("buildVersion", config.ProjectConf.buildVersion);
            this.setData("buildDescription", config.ProjectConf.buildDescription);
        }

        public void saveData()
        {
            PlayerSettings.productName = this.getDataInput("projectName");
            config.ProjectConf.Appid = this.getDataInput("appid");
            config.ProjectConf.CDN = this.getDataInput("cdn");
            config.ProjectConf.assetLoadType = this.getDataPop("assetLoadType");
            config.ProjectConf.compressDataPackage = this.getDataCheckbox("compressDataPackage");
            config.ProjectConf.VideoUrl = this.getDataInput("videoUrl");
            config.ProjectConf.Orientation = (KSScreenOritation)this.getDataPop("orientation");
            config.ProjectConf.DST = this.getDataInput("dst");
            config.ProjectConf.bundleHashLength = int.Parse(this.getDataInput("bundleHashLength"));
            config.ProjectConf.bundlePathIdentifier = this.getDataInput("bundlePathIdentifier");
            config.ProjectConf.bundleExcludeExtensions = this.getDataInput("bundleExcludeExtensions");
            config.ProjectConf.preloadFiles = this.getDataInput("preloadFiles");
            config.CompileOptions.DevelopBuild = this.getDataCheckbox("developBuild");
            config.CompileOptions.ScriptDebugging = this.getDataCheckbox("scriptDebugging");
            config.CompileOptions.AutoProfile = this.getDataCheckbox("autoProfile");
            config.CompileOptions.ScriptOnly = this.getDataCheckbox("scriptOnly");
            config.CompileOptions.Il2CppOptimizeSize = this.getDataCheckbox("il2CppOptimizeSize");
            config.CompileOptions.profilingFuncs = this.getDataCheckbox("profilingFuncs");
            config.CompileOptions.ProfilingMemory = this.getDataCheckbox("profilingMemory");
            config.CompileOptions.DeleteStreamingAssets = this.getDataCheckbox("deleteStreamingAssets");
            config.CompileOptions.CleanBuild = this.getDataCheckbox("cleanBuild");
            config.CompileOptions.CustomNodePath = this.getDataInput("customNodePath");
            config.CompileOptions.Webgl2 = this.getDataCheckbox("webgl2");
            config.CompileOptions.fbslim = this.getDataCheckbox("fbslim");
            config.ProjectConf.bgImageSrc = this.getDataInput("bgImageSrc");
            config.ProjectConf.isCoverviewCustomized = this.getDataCheckbox("isCoverviewCustomized");
            config.ProjectConf.MemorySize = getInt("memorySize");
            config.ProjectConf.HideAfterCallMain = this.getDataCheckbox("hideAfterCallMain");
            config.ProjectConf.dataFileSubPrefix = this.getDataInput("dataFileSubPrefix");
            config.ProjectConf.maxStorage = int.Parse(this.getDataInput("maxStorage"));
            config.ProjectConf.defaultReleaseSize = int.Parse(this.getDataInput("defaultReleaseSize"));
            config.ProjectConf.texturesHashLength = int.Parse(this.getDataInput("texturesHashLength"));
            config.ProjectConf.texturesPath = this.getDataInput("texturesPath");
            config.ProjectConf.needCacheTextures = this.getDataCheckbox("needCacheTextures");
            config.ProjectConf.loadingBarWidth = int.Parse(this.getDataInput("loadingBarWidth"));
            config.ProjectConf.needCheckUpdate = this.getDataCheckbox("needCheckUpdate");
            config.ProjectConf.disableHighPerformanceFallback = this.getDataCheckbox("disableHighPerformanceFallback");
            config.CompileOptions.autoAdaptScreen = this.getDataCheckbox("autoAdaptScreen");
            config.CompileOptions.showMonitorSuggestModal = this.getDataCheckbox("showMonitorSuggestModal");
            config.CompileOptions.enableProfileStats = this.getDataCheckbox("enableProfileStats");
            config.CompileOptions.enableRenderAnalysis = this.getDataCheckbox("enableRenderAnalysis");
            config.CompileOptions.brotliMT = this.getDataCheckbox("brotliMT");

            config.ProjectConf.buildVersion = this.getDataInput("buildVersion");
            config.ProjectConf.buildDescription = this.getDataInput("buildDescription");
        }

        public string getDataInput(string target)
        {
            if (this.formInputData.ContainsKey(target))
                return this.formInputData[target];
            return "";
        }
        
        internal int getDataPop(string target)
        {
            if (this.formIntPopupData.ContainsKey(target))
                return this.formIntPopupData[target];
            return 0;
        }

        public bool getDataCheckbox(string target)
        {
            if (this.formCheckboxData.ContainsKey(target))
                return this.formCheckboxData[target];
            return false;
        }
        
        public int getInt(string target)
        {
            string input = getDataInput(target);
            
            if (string.IsNullOrEmpty(input) || !int.TryParse(input, out int value))
            {
                Debug.LogError($"输入的 {target} 不能为空");
                return 0; 
            }

            return value;
        }

        public void setData(string target, string value)
        {
            if (formInputData.ContainsKey(target))
            {
                formInputData[target] = value;
            }
            else
            {
                formInputData.Add(target, value);
            }
        }

        public void setData(string target, bool value)
        {
            if (formCheckboxData.ContainsKey(target))
            {
                formCheckboxData[target] = value;
            }
            else
            {
                formCheckboxData.Add(target, value);
            }
        }

        public void setData(string target, int value)
        {
            if (formIntPopupData.ContainsKey(target))
            {
                formIntPopupData[target] = value;
            }
            else
            {
                formIntPopupData.Add(target, value);
            }
        }

        public void formInput(string target, string label, string help = null)
        {
            if (!formInputData.ContainsKey(target))
            {
                formInputData[target] = "";
            }
            GUILayout.BeginHorizontal();
            EditorGUILayout.LabelField(string.Empty, GUILayout.Width(10));
            if (help == null)
            {
                GUILayout.Label(label, GUILayout.Width(140));
            }
            else
            {
                GUILayout.Label(new GUIContent(label, help), GUILayout.Width(140));
            }
            formInputData[target] = GUILayout.TextField(formInputData[target], GUILayout.MaxWidth(EditorGUIUtility.currentViewWidth - 195));
            GUILayout.EndHorizontal();
        }

        public void formIntPopup(string target, string label, string[] options, int[] values)
        {
            if (!formIntPopupData.ContainsKey(target))
            {
                formIntPopupData[target] = 0;
            }
            GUILayout.BeginHorizontal();
            EditorGUILayout.LabelField(string.Empty, GUILayout.Width(10));
            GUILayout.Label(label, GUILayout.Width(140));
            formIntPopupData[target] = EditorGUILayout.IntPopup(formIntPopupData[target], options, values, GUILayout.MaxWidth(EditorGUIUtility.currentViewWidth - 195));
            GUILayout.EndHorizontal();
        }

        public void formCheckbox(string target, string label, string help = null, bool disable = false, Action<bool> setting = null)
        {
            if (!formCheckboxData.ContainsKey(target))
            {
                formCheckboxData[target] = false;
            }
            GUILayout.BeginHorizontal();
            EditorGUI.BeginDisabledGroup(disable);
            EditorGUILayout.LabelField(string.Empty, GUILayout.Width(10));
            if (help == null)
            {
                GUILayout.Label(label, GUILayout.Width(140));
            }
            else
            {
                GUILayout.Label(new GUIContent(label, help), GUILayout.Width(140));
            }
            formCheckboxData[target] = EditorGUILayout.Toggle(disable ? false : formCheckboxData[target]);

            if (setting != null)
            {
                EditorGUILayout.LabelField("", GUILayout.Width(10));
                // 配置按钮
                if (GUILayout.Button(new GUIContent("设置"), GUILayout.Width(40), GUILayout.Height(18)))
                {
                    setting?.Invoke(true);
                }
                EditorGUILayout.LabelField("", GUILayout.MinWidth(10));
            }

            EditorGUI.EndDisabledGroup();

            if (setting == null)
                EditorGUILayout.LabelField(string.Empty);
            GUILayout.EndHorizontal();
        }
        
        public void UpdateWebGL2()
        {
            // Global PlayerSettings
            ColorSpace colorSpace = PlayerSettings.colorSpace;

            GraphicsDeviceType[] apis = PlayerSettings.GetGraphicsAPIs(EditorUserBuildSettings.activeBuildTarget);
            bool isAutomatic = PlayerSettings.GetUseDefaultGraphicsAPIs(EditorUserBuildSettings.activeBuildTarget);

            // Dont allow automatic
            if (isAutomatic && colorSpace == ColorSpace.Linear)
            {
                config.CompileOptions.Webgl2 = true;
                this.setData("webgl2", config.CompileOptions.Webgl2);
            }

            if (apis.Length == 1)
            {
                bool isWebGL1 = apis.Contains(GraphicsDeviceType.OpenGLES2);
                if (isWebGL1 && colorSpace == ColorSpace.Linear)
                {
                    Debug.LogError("WebGL1 does not support Linear color space. Please switch to Gamma color space.");
                    return;
                }

                config.CompileOptions.Webgl2 = !isWebGL1;
                this.setData("webgl2", config.CompileOptions.Webgl2);
            }
            else
            {
                Debug.LogError("Please choose between WebGL1 and WebGL2");
            }
        }

        public void OnDisable()
        {
            EditorUtility.SetDirty(config);
        }
    }

    
    public class SettingGuiHelper
    {
        private Vector2 scrollRoot;
        private bool foldBaseInfo = true;
        protected bool foldDebugOptions = true;
#if UNITY_INSTANTGAME
        private bool foldInstantGame = false;
#endif
        private SettingsHelper settingsHelper;
        private Texture loadingIcon;

        public SettingGuiHelper(SettingsHelper helper)
        {
            settingsHelper = helper;
        }
        internal void OnSettingsGUI(bool showBuildPath = false)
        {
            settingsHelper.loadData();
            loadingIcon = AssetDatabase.LoadAssetAtPath<Texture>(settingsHelper.getDataInput("bgImageSrc"));
            scrollRoot = EditorGUILayout.BeginScrollView(scrollRoot);

            foldBaseInfo = EditorGUILayout.Foldout(foldBaseInfo, "基本信息");
            if (foldBaseInfo)
            {
                EditorGUILayout.BeginVertical("frameBox", GUILayout.ExpandWidth(true));

                var appid = settingsHelper.getDataInput("appid");
                GUILayout.BeginHorizontal();
                EditorGUILayout.LabelField(string.Empty, GUILayout.Width(10));
                GuiUtil.DrawGameIDField();
                appid = GUILayout.TextField(appid, GUILayout.MaxWidth(EditorGUIUtility.currentViewWidth - 195));
                
                settingsHelper.setData("appid", appid);
                GUILayout.EndHorizontal();

                if (showBuildPath)
                {
                    GUILayout.BeginHorizontal();
                    var dst = settingsHelper.getDataInput("dst");
                    EditorGUILayout.LabelField(string.Empty, GUILayout.Width(10));
                    GUILayout.Label("导出路径", GUILayout.Width(140));
                    dst = GUILayout.TextField(dst, GUILayout.MaxWidth(EditorGUIUtility.currentViewWidth - 270));
                    if (GUILayout.Button(new GUIContent("打开"), GUILayout.Width(40)))
                    {
                        if (!dst.Trim().Equals(string.Empty))
                        {
                            EditorUtility.RevealInFinder(dst);
                        }
                        GUIUtility.ExitGUI();
                    }
                    if (GUILayout.Button(new GUIContent("选择"), GUILayout.Width(40)))
                    {
                        var dstPath = EditorUtility.SaveFolderPanel("选择你的游戏导出目录", string.Empty, string.Empty);
                        if (dstPath != string.Empty)
                        {
                            dst = dstPath;
                        }
                    }
                    settingsHelper.setData("dst", dst);
                    GUILayout.EndHorizontal();
                }
                
                GUILayout.BeginHorizontal();
                string targetBg = "bgImageSrc";
                EditorGUILayout.LabelField(string.Empty, GUILayout.Width(10));
                loadingIcon = (Texture)EditorGUILayout.ObjectField("启动背景图", loadingIcon, typeof(Texture2D), false);
                var currentBgSrc = AssetDatabase.GetAssetPath(loadingIcon);
                if (!string.IsNullOrEmpty(currentBgSrc) && currentBgSrc !=  settingsHelper.getDataInput(targetBg))
                {
                    settingsHelper.setData(targetBg, currentBgSrc);
                    settingsHelper.setData("isCoverviewCustomized", true);
                    settingsHelper.saveData();
                }
                GUILayout.EndHorizontal();

                settingsHelper.formIntPopup("assetLoadType", "首包资源加载方式", new[] { "CDN", "小游戏包内" }, new[] { 0, 1 });
                settingsHelper.formCheckbox("compressDataPackage", "压缩首包资源(?)", "将首包资源Brotli压缩, 降低资源大小. 注意: 首次启动耗时可能会增加200ms, 仅推荐使用小游戏分包加载时节省包体大小使用");
                settingsHelper.formIntPopup("orientation", "游戏方向", new[] { "纵向", "横向" }, new[] { 0, 1});
                settingsHelper.formInput("cdn", "游戏资源CDN");
                settingsHelper.formInput("memorySize", "预分配堆大小", "单位MB，预分配内存值，超休闲游戏256/中轻度496/重度游戏768，需预估游戏最大UnityHeap值以防止内存自动扩容带来的峰值尖刺。");
                settingsHelper.formInput("bundleExcludeExtensions", "不自动缓存文件类型(?)", "(使用;分割)当请求url包含资源'cdn+StreamingAssets'时会自动缓存，但StreamingAssets目录下不是所有文件都需缓存，此选项配置不需要自动缓存的文件拓展名。默认值json");
                settingsHelper.formInput("bundleHashLength", "Bundle名称Hash长度(?)", "自定义Bundle文件名中hash部分长度，默认值32，用于缓存控制。");
                settingsHelper.formInput("preloadFiles", "预下载Bundle列表(?)", "使用;间隔，支持模糊匹配");
                // settingsHelper.formInput("buildVersion", "*版本");
                // settingsHelper.formInput("buildDescription", "描述");
                EditorGUILayout.EndVertical();
            }
            
            foldDebugOptions = EditorGUILayout.Foldout(foldDebugOptions, "调试编译选项");
            if (foldDebugOptions)
            {
                EditorGUILayout.BeginVertical("frameBox", GUILayout.ExpandWidth(true));
                settingsHelper.formCheckbox("developBuild", "Development Build");
                settingsHelper.formCheckbox("autoProfile", "Auto connect Profiler", disable:!settingsHelper.getDataCheckbox("developBuild"));
                settingsHelper.formCheckbox("scriptOnly", "Scripts Only Build");
#if TUANJIE_2022_3_OR_NEWER
                bool UseIL2CPP = PlayerSettings.GetScriptingBackend(BuildTargetGroup.WeixinMiniGame) == ScriptingImplementation.IL2CPP;
#else
                bool UseIL2CPP = true;
#endif
                settingsHelper.formCheckbox("il2CppOptimizeSize", "Il2Cpp Optimize Size(?)", "对应于Il2CppCodeGeneration选项，勾选时使用OptimizeSize(默认推荐)，生成代码小15%左右，取消勾选则使用OptimizeSpeed。游戏中大量泛型集合的高频访问建议OptimizeSpeed，在使用HybridCLR等第三方组件时只能用OptimizeSpeed。(Dotnet Runtime模式下该选项无效)", !UseIL2CPP);
                settingsHelper.formCheckbox("profilingFuncs", "Profiling Funcs");
                settingsHelper.formCheckbox("profilingMemory", "Profiling Memory");
                GuiUtil.DrawWebGl2();
                settingsHelper.formCheckbox("deleteStreamingAssets", "Clear Streaming Assets");
                settingsHelper.formCheckbox("cleanBuild", "Clean WebGL Build");
                settingsHelper.formCheckbox("showMonitorSuggestModal", "显示优化建议弹窗");
                EditorGUILayout.EndVertical();
            }
            
#if UNITY_INSTANTGAME
            foldInstantGame = EditorGUILayout.Foldout(foldInstantGame, "Instant Game - AutoStreaming");
            if (foldInstantGame)
            {
                EditorGUILayout.BeginVertical("frameBox", GUILayout.ExpandWidth(true));
                settingsHelper.formInput("bundlePathIdentifier", "Bundle Path Identifier");
                settingsHelper.formInput("dataFileSubPrefix", "Data File Sub Prefix");

                EditorGUILayout.BeginHorizontal();
                EditorGUILayout.LabelField(string.Empty);
                if (GUILayout.Button(new GUIContent("了解Instant Game AutoStreaming", ""), EditorStyles.linkLabel))
                {
                    Application.OpenURL("https://docs.unity.cn/cn/tuanjiemanual/Manual/AutoStreamingIntro.html");
                }
                EditorGUILayout.EndHorizontal();
                EditorGUILayout.EndVertical();
            }
#endif
            
            EditorGUILayout.EndScrollView();
            
            settingsHelper.saveData();
        }
    }

    public class GuiUtil
    {
        public static string m_AppIdDocLink = "https://open.kuaishou.com/platform/console";

        public static void DrawGameIDField()
        {
            if (GUILayout.Button(new GUIContent("游戏AppID"), EditorStyles.label,
                    GUILayout.Width(140)))
            {
                Application.OpenURL(m_AppIdDocLink);
            }
        }
        
        public static void DrawWebGl2()
        {
            GUILayout.BeginHorizontal();
            EditorGUILayout.LabelField(string.Empty, GUILayout.Width(10));
            EditorGUI.BeginDisabledGroup(true); 
            GUILayout.Label(new GUIContent("WebGL2.0(beta)(?)", "是否启用 WebGL2，目前需要在 Player Settings 的 Graphics APIs 中手动选择 WebGL 2"), GUILayout.Width(140));
            EditorGUILayout.Toggle(false, GUILayout.Width(20));            
            EditorGUI.EndDisabledGroup();  
            GUILayout.EndHorizontal();
        }
    }
}