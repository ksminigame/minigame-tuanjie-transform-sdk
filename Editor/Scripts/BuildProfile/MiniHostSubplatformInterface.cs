#if TUANJIE_1_6_OR_NEWER
using System;
using System.Linq;
using UnityEditor;
using UnityEditor.Build.Profile;
using UnityEngine;
using UnityEngine.Rendering;
using System.IO;

namespace KSWASM.editor
{
    [InitializeOnLoad]
    public static class RegisterMiniHostSubplatformInterface
    {
        static RegisterMiniHostSubplatformInterface()
        {
            MiniGameSubplatformManager.RegisterSubplatform(new MiniHostSubplatformInterface());
        }
    }

    public class MiniHostSubplatformInterface: MiniGameSubplatformInterface
    {
        public override string GetSubplatformName()
        {
            return "KuaiShou:快手小游戏";
        }

        public override MiniGameSettings GetSubplatformSettings()
        {
            return new MiniHostMiniGameSettings(new MiniHostMiniGameSettingsEditor());
        }
        
        public override string GetSubplatformLink()
        {
            return "";
        }

        public override string GetSubplatformTooltip()
        {
            return "点击查看更多关于快手小游戏";
        }
        
        private static bool MiniGameHostBuildPreprocess(BuildProfile buildProfile)
        {
            // Check GFX API and Color Space
            if (buildProfile != null)
            {
                PlayerSettings playerSettings = buildProfile.playerSettings;
                MiniHostMiniGameSettings settings = buildProfile.miniGameSettings as MiniHostMiniGameSettings;

                // Global PlayerSettings
                ColorSpace colorSpace = PlayerSettings.colorSpace;
                GraphicsDeviceType[] apis = PlayerSettings.GetGraphicsAPIs(buildProfile.buildTarget);
                bool isAutomatic = PlayerSettings.GetUseDefaultGraphicsAPIs(buildProfile.buildTarget);

                if (playerSettings != null)
                {
                    // BuildProfile PlayerSettings Override
                    colorSpace = PlayerSettings.GetColorSpace_Internal(playerSettings);
                    apis = PlayerSettings.GetGraphicsAPIs_Internal(playerSettings, buildProfile.buildTarget);
                    isAutomatic = PlayerSettings.GetUseDefaultGraphicsAPIs_Internal(playerSettings, buildProfile.buildTarget);
                }

                // Dont allow automatic
                if (isAutomatic && colorSpace == ColorSpace.Linear && settings!=null)
                {
                    settings.CompileOptions.Webgl2 = true;
                }
            
                if (apis.Length == 1 && settings!=null)
                {
                    bool isWebGL1 = apis.Contains(GraphicsDeviceType.OpenGLES2);
                    if (isWebGL1 && colorSpace == ColorSpace.Linear)
                    {
                        Debug.LogError("WebGL1 does not support Linear color space. Please switch to Gamma color space.");
                        return false;
                    }
                    settings.CompileOptions.Webgl2 = !isWebGL1;
                }
                else
                {
                    Debug.LogError("Please choose between WebGL1 and WebGL2");
                    return false;
                }

                return true;
            }
            else
            {
                throw new InvalidOperationException("Build profile has not been initialized.");
            }
        }

        public override BuildMiniGameError Build(BuildProfile profile)
        {
            return BuildMiniGameError.Unknown;
        }

        public override BuildMiniGameError Build(BuildProfile profile, BuildOptions options)
        {
            bool preprocessSuccess = MiniGameHostBuildPreprocess(profile);
            if (!preprocessSuccess)
            {
                return BuildMiniGameError.PlayerBuildFailed;
            }
            
            MiniHostMiniGameSettings settings = profile.miniGameSettings as MiniHostMiniGameSettings;
            if (settings is not null && settings.PreprocessBuild(profile))
            {
                var selection = Selection.objects;
                KSEditorScriptObject config = settings.ToKSEditorScriptObject();
            
                
                config.buildOptions = options;
                KSConvertCore.DoExport(config);
                Selection.objects = selection;
            }
            else
            {
                Debug.Log("miniHostMiniGameSettingsEditor is null");
            }
            return BuildMiniGameError.Succeeded;
        }
    }
}
#endif