using System.IO;
using UnityEditor;
using UnityEngine;

namespace KSWASM.editor
{
    public class MiniHostBuildWindow : EditorWindow
    {
        [MenuItem("快手小游戏/构建", false, 10)]
        static void ShowWindow()
        {
            var win = GetWindow(typeof(MiniHostBuildWindow), false, "构建快手小游戏");
            win.minSize = new Vector2(750, 400);
            win.position = new Rect(100, 100, 750, 400);
            win.Show();
        }

        private void OnGUI()
        {
            PackageUpdateManager.CheckUpdateOnce();
            MiniHostBuildWindowHelper.OnSettingsGUI(true);
            OnBuildButtonGUI();
        }

        public void OnDisable()
        {
            MiniHostBuildWindowHelper.OnDisable();
        }

        private void OnBuildButtonGUI()
        {
            GUILayout.BeginHorizontal();
            GUILayout.FlexibleSpace();
            var toBuild = GUILayout.Button(new GUIContent("生成并转换"), GUILayout.Width(100), GUILayout.Height(25));
            GUILayout.Space(20);
            GUILayout.EndHorizontal();
            GUILayout.Space(10);
            if (toBuild)
            {
                var selection = Selection.objects;
                KSEditorScriptObject config = UnityUtil.GetEditorConf("kuaishou", "Assets/KS-WASM-SDK-V2/Editor/MiniGameConfig.asset");
                
                config.buildOptions = GetBuildOptions(config);
                MiniHostBuildWindowHelper.UpdateWebGL2();
                KSConvertCore.DoExport(config);
                Selection.objects = selection;
                GUIUtility.ExitGUI();
            }
        }
        
        
    public static BuildOptions GetBuildOptions(KSEditorScriptObject config)
    {
        BuildOptions option = BuildOptions.None;

        if (config.CompileOptions.DevelopBuild)
        {
            option |= BuildOptions.Development;
        }

        if (config.CompileOptions.AutoProfile)
        {
            option |= BuildOptions.ConnectWithProfiler;
        }


        if (config.CompileOptions.ScriptDebugging)
        {
            option |= BuildOptions.AllowDebugging;
        }

        if (config.CompileOptions.ScriptOnly)
        {
            option |= BuildOptions.BuildScriptsOnly;
        }
        #if UNITY_2022_3_OR_NEWER
        if (config.CompileOptions.CleanBuild)
        {
            option |= BuildOptions.CleanBuildCache;
        }
        #endif
        return option;
    }
    }
}