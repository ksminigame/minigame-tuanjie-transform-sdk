#if TUANJIE_1_6_OR_NEWER
using UnityEditor.Build.Profile;
using UnityEngine;
using UnityEditor;
using System.Collections.Generic;


namespace KSWASM.editor
{
    public class MiniHostMiniGameSettings: MiniGameSettings
    {
        public KSProjectConf ProjectConf;
        public SDKOptions SDKOptions;
        public CompileOptions CompileOptions;
        public List<string> PlayerPrefsKeys = new List<string>();
        public FontOptions FontOptions;
    
        public MiniHostMiniGameSettings(MiniGameSettingsEditor editor) : base(editor)
        {
        }

        public KSEditorScriptObject ToKSEditorScriptObject()
        {
            var scriptObject = ScriptableObject.CreateInstance<KSEditorScriptObject>();
    
            scriptObject.ProjectConf = this.ProjectConf;
            scriptObject.SDKOptions = this.SDKOptions;
            scriptObject.CompileOptions = this.CompileOptions;
            scriptObject.PlayerPrefsKeys = new List<string>(this.PlayerPrefsKeys);
            scriptObject.FontOptions = this.FontOptions;
            scriptObject.AutoUploadOnBuild = false;

            return scriptObject;
        }

        public bool PreprocessBuild(BuildProfile buildProfile)
        {
            if (KSConvertCore.IsInstantGameAutoStreaming())
            {
                ProjectConf.CDN = UnityUtil.GetInstantGameAutoStreamingCDN();
            }
            bool result = true;
            if (!string.IsNullOrEmpty(buildProfile.buildPath))
            {
                this.ProjectConf.DST = buildProfile.buildPath;
            }
            else
            {
                Debug.LogError("Build Path is empty!");
                result = false;
            }

            return result;
        }
    }
}
#endif
