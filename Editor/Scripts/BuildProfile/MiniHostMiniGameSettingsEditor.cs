#if TUANJIE_1_6_OR_NEWER
using UnityEditor;
using UnityEditor.Build.Profile;
using UnityEngine;
using System.Collections.Generic;
using System;

namespace KSWASM.editor
{
    public class MiniHostMiniGameSettingsEditor: MiniGameSettingsEditor
    {
        protected Vector2 scrollRoot;
        protected bool foldBaseInfo = true;
        protected bool foldDebugOptions = true;
        protected bool foldInstantGame = false;
        protected Texture loadingIcon;
        
        protected bool m_IsAutoStreaming;
        protected bool m_AutoStreamingInitialized = false;
        
        private Dictionary<string, string> formInputData = new Dictionary<string, string>();
        private Dictionary<string, int> formIntPopupData = new Dictionary<string, int>();
        private Dictionary<string, bool> formCheckboxData = new Dictionary<string, bool>();

        public override void OnMiniGameSettingsIMGUI(SerializedObject serializedObject, SerializedProperty miniGameProperty)
        {
            OnSettingsGUI(serializedObject, miniGameProperty);
        }
        
        private void OnSettingsGUI(SerializedObject serializedObject, SerializedProperty miniGameProperty, bool showBuildPath = false)
        {
            loadData(serializedObject, miniGameProperty);
            scrollRoot = EditorGUILayout.BeginScrollView(scrollRoot);

            foldBaseInfo = EditorGUILayout.Foldout(foldBaseInfo, "快手小游戏配置");
            if (foldBaseInfo)
            {
                EditorGUILayout.BeginVertical("frameBox", GUILayout.ExpandWidth(true));

                var appid = this.getDataInput("appid");
                GUILayout.BeginHorizontal();
                EditorGUILayout.LabelField(string.Empty, GUILayout.Width(10));
                GuiUtil.DrawGameIDField();
                appid = GUILayout.TextField(appid, GUILayout.MaxWidth(EditorGUIUtility.currentViewWidth - 195));

                this.setData("appid", appid);
                GUILayout.EndHorizontal();

                if (showBuildPath)
                {
                    GUILayout.BeginHorizontal();
                    var dst = this.getDataInput("dst");
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
                    this.setData("dst", dst);
                    GUILayout.EndHorizontal();
                }
                
                GUILayout.BeginHorizontal();
                string targetBg = "bgImageSrc";
                EditorGUILayout.LabelField(string.Empty, GUILayout.Width(10));
                loadingIcon = (Texture)EditorGUILayout.ObjectField("启动背景图", loadingIcon, typeof(Texture2D), false);
                var currentBgSrc = AssetDatabase.GetAssetPath(loadingIcon);
                if (!string.IsNullOrEmpty(currentBgSrc) && currentBgSrc != this.getDataInput(targetBg))
                {
                    this.setData(targetBg, currentBgSrc);
                    this.setData("isCoverviewCustomized", true);
                    this.saveData(serializedObject, miniGameProperty);
                }
                GUILayout.EndHorizontal();

                this.formIntPopup("assetLoadType", "首包资源加载方式", new[] { "CDN", "小游戏包内" }, new[] { 0, 1 });
                this.formCheckbox("demoPackage", "游戏试玩包");
                this.formCheckbox("compressDataPackage", "压缩首包资源(?)", "将首包资源Brotli压缩, 降低资源大小. 注意: 首次启动耗时可能会增加200ms, 仅推荐使用小游戏分包加载时节省包体大小使用", disable:this.getDataCheckbox("demoPackage"));
                this.formCheckbox("compressWasm", "压缩WASM(?)", "将WASM资源Brotli压缩, 降低资源大小.", disable:this.getDataCheckbox("demoPackage"));
                this.formIntPopup("orientation", "游戏方向", new[] { "纵向", "横向" }, new[] { 0, 1});
                this.formInput("cdn", "游戏资源CDN");
                this.formInput("memorySize", "预分配堆大小", "单位MB，预分配内存值，超休闲游戏256/中轻度496/重度游戏768，需预估游戏最大UnityHeap值以防止内存自动扩容带来的峰值尖刺。");
                this.formInput("bundleExcludeExtensions", "不自动缓存文件类型(?)", "(使用;分割)当请求url包含资源'cdn+StreamingAssets'时会自动缓存，但StreamingAssets目录下不是所有文件都需缓存，此选项配置不需要自动缓存的文件拓展名。默认值json");
                this.formInput("bundleHashLength", "Bundle名称Hash长度(?)", "自定义Bundle文件名中hash部分长度，默认值32，用于缓存控制。");
                this.formInput("preloadFiles", "预下载Bundle列表(?)", "使用;间隔，支持模糊匹配");
                EditorGUILayout.EndVertical();
            }
            
            foldDebugOptions = EditorGUILayout.Foldout(foldDebugOptions, "调试编译选项");
            if (foldDebugOptions)
            {
                EditorGUILayout.BeginVertical("frameBox", GUILayout.ExpandWidth(true));
#if TUANJIE_2022_3_OR_NEWER
                bool UseIL2CPP = PlayerSettings.GetScriptingBackend(BuildTargetGroup.WeixinMiniGame) == ScriptingImplementation.IL2CPP;
#else
                bool UseIL2CPP = true;
#endif
                this.formCheckbox("il2CppOptimizeSize", "Il2Cpp Optimize Size(?)", "对应于Il2CppCodeGeneration选项，勾选时使用OptimizeSize(默认推荐)，生成代码小15%左右，取消勾选则使用OptimizeSpeed。游戏中大量泛型集合的高频访问建议OptimizeSpeed，在使用HybridCLR等第三方组件时只能用OptimizeSpeed。(Dotnet Runtime模式下该选项无效)", !UseIL2CPP);
                this.formCheckbox("profilingFuncs", "Profiling Funcs");
                this.formCheckbox("profilingMemory", "Profiling Memory");

                // webgl2.0
                GUILayout.BeginHorizontal();
                EditorGUILayout.LabelField(string.Empty, GUILayout.Width(10));
                EditorGUI.BeginDisabledGroup(true); 
                GUILayout.Label(new GUIContent("WebGL2.0(beta)(?)", "是否启用 WebGL2，目前需要在 Player Settings 的 Graphics APIs 中手动选择 WebGL 2"), GUILayout.Width(140));
                EditorGUILayout.Toggle(false, GUILayout.Width(20));            
                EditorGUI.EndDisabledGroup();  
                GUILayout.EndHorizontal();

                this.formCheckbox("deleteStreamingAssets", "Clear Streaming Assets");
                this.formCheckbox("showMonitorSuggestModal", "显示优化建议弹窗");
                EditorGUILayout.EndVertical();
            }
            
#if UNITY_INSTANTGAME
            foldInstantGame = EditorGUILayout.Foldout(foldInstantGame, "Instant Game - AutoStreaming");
            if (foldInstantGame)
            {
                EditorGUILayout.BeginVertical("frameBox", GUILayout.ExpandWidth(true));
                this.formInput("bundlePathIdentifier", "Bundle Path Identifier");
                this.formInput("dataFileSubPrefix", "Data File Sub Prefix");

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

            saveData(serializedObject, miniGameProperty);
        }

        protected void loadData(SerializedObject serializedObject, SerializedProperty miniGameProperty)
        {
            serializedObject.UpdateIfRequiredOrScript();

            var ProjectConf = miniGameProperty.FindPropertyRelative("ProjectConf");
            
            // Instant Game
            var isAutoStreaming = KSConvertCore.IsInstantGameAutoStreaming();
            if (!m_AutoStreamingInitialized || m_IsAutoStreaming != isAutoStreaming || (m_IsAutoStreaming && ProjectConf.FindPropertyRelative("CDN").stringValue != UnityUtil.GetInstantGameAutoStreamingCDN()))
            {
                m_AutoStreamingInitialized = true;
                m_IsAutoStreaming = isAutoStreaming;
                if (isAutoStreaming)
                {
                    ProjectConf.FindPropertyRelative("CDN").stringValue = UnityUtil.GetInstantGameAutoStreamingCDN();
                    if (!ProjectConf.FindPropertyRelative("bundlePathIdentifier").stringValue.Contains("AS;"))
                    {
                        ProjectConf.FindPropertyRelative("bundlePathIdentifier").stringValue += "AS;";
                    }
                    if (!ProjectConf.FindPropertyRelative("bundlePathIdentifier").stringValue.Contains("CUS/CustomAB;"))
                    {
                        ProjectConf.FindPropertyRelative("bundlePathIdentifier").stringValue += "CUS/CustomAB;";
                    }
                    ProjectConf.FindPropertyRelative("dataFileSubPrefix").stringValue = "CUS";
                }
            }
            
            this.setData("projectName", PlayerSettings.productName);
            this.setData("appid", ProjectConf.FindPropertyRelative("Appid").stringValue);
            this.setData("cdn", ProjectConf.FindPropertyRelative("CDN").stringValue);
            this.setData("assetLoadType", ProjectConf.FindPropertyRelative("assetLoadType").intValue);
            this.setData("compressDataPackage", ProjectConf.FindPropertyRelative("compressDataPackage").boolValue);
            this.setData("compressWasm", ProjectConf.FindPropertyRelative("compressWasm").boolValue);
            this.setData("demoPackage", ProjectConf.FindPropertyRelative("demoPackage").boolValue);
            this.setData("videoUrl", ProjectConf.FindPropertyRelative("VideoUrl").stringValue);
            this.setData("orientation", (int)ProjectConf.FindPropertyRelative("Orientation").enumValueIndex);
            // this.setData("dst", ProjectConf.FindPropertyRelative("DST").stringValue);
            this.setData("bundleHashLength", ProjectConf.FindPropertyRelative("bundleHashLength").intValue.ToString());
            this.setData("bundlePathIdentifier", ProjectConf.FindPropertyRelative("bundlePathIdentifier").stringValue);
            this.setData("bundleExcludeExtensions", ProjectConf.FindPropertyRelative("bundleExcludeExtensions").stringValue);
            this.setData("preloadFiles", ProjectConf.FindPropertyRelative("preloadFiles").stringValue);
            
            var CompileOptions = miniGameProperty.FindPropertyRelative("CompileOptions");
            this.setData("developBuild", CompileOptions.FindPropertyRelative("DevelopBuild").boolValue);
            this.setData("scriptDebugging", CompileOptions.FindPropertyRelative("ScriptDebugging").boolValue);
            this.setData("autoProfile", CompileOptions.FindPropertyRelative("AutoProfile").boolValue);
            this.setData("scriptOnly", CompileOptions.FindPropertyRelative("ScriptOnly").boolValue);
            this.setData("il2CppOptimizeSize", CompileOptions.FindPropertyRelative("Il2CppOptimizeSize").boolValue);
            this.setData("profilingFuncs", CompileOptions.FindPropertyRelative("profilingFuncs").boolValue);
            this.setData("profilingMemory", CompileOptions.FindPropertyRelative("ProfilingMemory").boolValue);
            this.setData("deleteStreamingAssets", CompileOptions.FindPropertyRelative("DeleteStreamingAssets").boolValue);
            this.setData("cleanBuild", CompileOptions.FindPropertyRelative("CleanBuild").boolValue);
            this.setData("customNodePath", CompileOptions.FindPropertyRelative("CustomNodePath").stringValue);
            this.setData("webgl2", CompileOptions.FindPropertyRelative("Webgl2").boolValue);
            this.setData("iOSPerformancePlus", CompileOptions.FindPropertyRelative("enableIOSPerformancePlus").boolValue);
            this.setData("fbslim", CompileOptions.FindPropertyRelative("fbslim").boolValue);
            
            this.setData("bgImageSrc", ProjectConf.FindPropertyRelative("bgImageSrc").stringValue);
            loadingIcon = AssetDatabase.LoadAssetAtPath<Texture>(ProjectConf.FindPropertyRelative("bgImageSrc").stringValue);
            this.setData("isCoverviewCustomized", ProjectConf.FindPropertyRelative("isCoverviewCustomized").boolValue);
            this.setData("memorySize", ProjectConf.FindPropertyRelative("MemorySize").intValue.ToString());
            this.setData("hideAfterCallMain", ProjectConf.FindPropertyRelative("HideAfterCallMain").boolValue);
            this.setData("dataFileSubPrefix", ProjectConf.FindPropertyRelative("dataFileSubPrefix").stringValue);
            this.setData("maxStorage", ProjectConf.FindPropertyRelative("maxStorage").intValue.ToString());
            this.setData("defaultReleaseSize", ProjectConf.FindPropertyRelative("defaultReleaseSize").intValue.ToString());
            this.setData("texturesHashLength", ProjectConf.FindPropertyRelative("texturesHashLength").intValue.ToString());
            this.setData("texturesPath", ProjectConf.FindPropertyRelative("texturesPath").stringValue);
            this.setData("needCacheTextures", ProjectConf.FindPropertyRelative("needCacheTextures").boolValue);
            this.setData("loadingBarWidth", ProjectConf.FindPropertyRelative("loadingBarWidth").intValue.ToString());
            this.setData("needCheckUpdate", ProjectConf.FindPropertyRelative("needCheckUpdate").boolValue);
            this.setData("disableHighPerformanceFallback", ProjectConf.FindPropertyRelative("disableHighPerformanceFallback").boolValue);
            
            this.setData("autoAdaptScreen", CompileOptions.FindPropertyRelative("autoAdaptScreen").boolValue);
            this.setData("showMonitorSuggestModal", CompileOptions.FindPropertyRelative("showMonitorSuggestModal").boolValue);
            this.setData("enableProfileStats", CompileOptions.FindPropertyRelative("enableProfileStats").boolValue);
            this.setData("enableRenderAnalysis", CompileOptions.FindPropertyRelative("enableRenderAnalysis").boolValue);
            this.setData("brotliMT", CompileOptions.FindPropertyRelative("brotliMT").boolValue);
        }

        protected void saveData(SerializedObject serializedObject, SerializedProperty miniGameProperty)
        {
            serializedObject.UpdateIfRequiredOrScript();

            var ProjectConf = miniGameProperty.FindPropertyRelative("ProjectConf");
            PlayerSettings.productName = this.getDataInput("projectName");
            ProjectConf.FindPropertyRelative("Appid").stringValue = this.getDataInput("appid");
            ProjectConf.FindPropertyRelative("CDN").stringValue = this.getDataInput("cdn");
            ProjectConf.FindPropertyRelative("assetLoadType").intValue = this.getDataPop("assetLoadType");
            ProjectConf.FindPropertyRelative("compressDataPackage").boolValue = this.getDataCheckbox("compressDataPackage");
            ProjectConf.FindPropertyRelative("compressWasm").boolValue = this.getDataCheckbox("compressWasm");
            ProjectConf.FindPropertyRelative("demoPackage").boolValue = this.getDataCheckbox("demoPackage");
            ProjectConf.FindPropertyRelative("VideoUrl").stringValue = this.getDataInput("videoUrl");
            ProjectConf.FindPropertyRelative("Orientation").enumValueIndex = this.getDataPop("orientation");
            ProjectConf.FindPropertyRelative("DST").stringValue = serializedObject.FindProperty("m_BuildPath").stringValue;
            ProjectConf.FindPropertyRelative("bundleHashLength").intValue = int.Parse(this.getDataInput("bundleHashLength"));
            ProjectConf.FindPropertyRelative("bundlePathIdentifier").stringValue = this.getDataInput("bundlePathIdentifier");
            ProjectConf.FindPropertyRelative("bundleExcludeExtensions").stringValue = this.getDataInput("bundleExcludeExtensions");
            ProjectConf.FindPropertyRelative("preloadFiles").stringValue = this.getDataInput("preloadFiles");

            var CompileOptions = miniGameProperty.FindPropertyRelative("CompileOptions");

            CompileOptions.FindPropertyRelative("DevelopBuild").boolValue =
                serializedObject.FindProperty("m_PlatformSettings").FindPropertyRelative("m_Development").boolValue;
            CompileOptions.FindPropertyRelative("ScriptDebugging").boolValue = 
                serializedObject.FindProperty("m_PlatformSettings").FindPropertyRelative("m_AllowDebugging").boolValue;
            CompileOptions.FindPropertyRelative("AutoProfile").boolValue = this.getDataCheckbox("autoProfile");
            CompileOptions.FindPropertyRelative("ScriptOnly").boolValue = this.getDataCheckbox("scriptOnly");
            CompileOptions.FindPropertyRelative("Il2CppOptimizeSize").boolValue = this.getDataCheckbox("il2CppOptimizeSize");
            CompileOptions.FindPropertyRelative("profilingFuncs").boolValue = this.getDataCheckbox("profilingFuncs");
            CompileOptions.FindPropertyRelative("ProfilingMemory").boolValue = this.getDataCheckbox("profilingMemory");
            CompileOptions.FindPropertyRelative("DeleteStreamingAssets").boolValue = this.getDataCheckbox("deleteStreamingAssets");
            CompileOptions.FindPropertyRelative("CleanBuild").boolValue = this.getDataCheckbox("cleanBuild");
            CompileOptions.FindPropertyRelative("CustomNodePath").stringValue = this.getDataInput("customNodePath");
            CompileOptions.FindPropertyRelative("Webgl2").boolValue = this.getDataCheckbox("webgl2");
            CompileOptions.FindPropertyRelative("enableIOSPerformancePlus").boolValue = this.getDataCheckbox("iOSPerformancePlus");
            CompileOptions.FindPropertyRelative("fbslim").boolValue = this.getDataCheckbox("fbslim");

            ProjectConf.FindPropertyRelative("bgImageSrc").stringValue = this.getDataInput("bgImageSrc");
            ProjectConf.FindPropertyRelative("isCoverviewCustomized").boolValue = this.getDataCheckbox("isCoverviewCustomized");
            ProjectConf.FindPropertyRelative("MemorySize").intValue = getInt("memorySize");
            ProjectConf.FindPropertyRelative("HideAfterCallMain").boolValue = this.getDataCheckbox("hideAfterCallMain");
            ProjectConf.FindPropertyRelative("dataFileSubPrefix").stringValue = this.getDataInput("dataFileSubPrefix");
            ProjectConf.FindPropertyRelative("maxStorage").intValue = int.Parse(this.getDataInput("maxStorage"));
            ProjectConf.FindPropertyRelative("defaultReleaseSize").intValue = int.Parse(this.getDataInput("defaultReleaseSize"));
            ProjectConf.FindPropertyRelative("texturesHashLength").intValue = int.Parse(this.getDataInput("texturesHashLength"));
            ProjectConf.FindPropertyRelative("texturesPath").stringValue = this.getDataInput("texturesPath");
            ProjectConf.FindPropertyRelative("needCacheTextures").boolValue = this.getDataCheckbox("needCacheTextures");
            ProjectConf.FindPropertyRelative("loadingBarWidth").intValue = int.Parse(this.getDataInput("loadingBarWidth"));
            ProjectConf.FindPropertyRelative("needCheckUpdate").boolValue = this.getDataCheckbox("needCheckUpdate");
            ProjectConf.FindPropertyRelative("disableHighPerformanceFallback").boolValue = this.getDataCheckbox("disableHighPerformanceFallback");
            CompileOptions.FindPropertyRelative("autoAdaptScreen").boolValue = this.getDataCheckbox("autoAdaptScreen");
            CompileOptions.FindPropertyRelative("showMonitorSuggestModal").boolValue = this.getDataCheckbox("showMonitorSuggestModal");
            CompileOptions.FindPropertyRelative("enableProfileStats").boolValue = this.getDataCheckbox("enableProfileStats");
            CompileOptions.FindPropertyRelative("enableRenderAnalysis").boolValue = this.getDataCheckbox("enableRenderAnalysis");
            CompileOptions.FindPropertyRelative("brotliMT").boolValue = this.getDataCheckbox("brotliMT");
            serializedObject.ApplyModifiedProperties();
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

        internal int getInt(string target)
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
            EditorGUILayout.LabelField(string.Empty, GUILayout.Width(10));
            if (help == null)
            {
                GUILayout.Label(label, GUILayout.Width(140));
            }
            else
            {
                GUILayout.Label(new GUIContent(label, help), GUILayout.Width(140));
            }
            EditorGUI.BeginDisabledGroup(disable);
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
    }
}
#endif