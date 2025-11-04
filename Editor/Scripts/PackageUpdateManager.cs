using System.IO;
using System.Net;
using UnityEditor;
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;

namespace KSWASM.editor
{
    public class PackageUpdateManager
    {
        private const string gitRepoUrl = "https://github.com/ksminigame/minigame-tuanjie-transform-sdk";
        private const string packageJsonUrl = "https://raw.githubusercontent.com/ksminigame/minigame-tuanjie-transform-sdk/refs/heads/main/package.json";

        private static bool isChecked = false;
        private static bool isWindow = false;

        private static string currentVersion = "";
        private static string latestVersion = "";

        private static AddRequest addRequest;
        private static float fakeProgress = 0f;
        private static bool isInstalling = false;
        private static string currentStatus = "准备安装中...";

        private static bool isDialogScheduled = false;

        [System.Serializable]
        public class PackageInfo
        {
            public string version;
        }

        [MenuItem("快手小游戏/检查更新", false, 1000)]
        public static void ShowWindow()
        {
            CheckUpdate(true);
            isWindow = true;
        }

        public static int CompareVersions(string v1, string v2)
        {
            if (v1 == v2)
                return 0;

            string[] parts1 = v1.Split('.');
            string[] parts2 = v2.Split('.');

            int length = Mathf.Max(parts1.Length, parts2.Length);

            for (int i = 0; i < length; i++)
            {
                int num1 = i < parts1.Length ? int.Parse(parts1[i]) : 0;
                int num2 = i < parts2.Length ? int.Parse(parts2[i]) : 0;

                if (num1 < num2)
                    return -1;
                if (num1 > num2)
                    return 1;
            }

            return 0;
        }

        public static bool CheckUpdateOnce()
        {
            if (isChecked)
            {
                return false;
            }

            return CheckUpdate();
        }


        public static bool CheckUpdate(bool _isWindow = false)
        {
            isWindow = _isWindow;
            isChecked = true;

            HttpWebRequest httpWebRequest = (HttpWebRequest)WebRequest.Create(packageJsonUrl);
            httpWebRequest.ContentType = "application/json";
            httpWebRequest.Method = "GET";
            httpWebRequest.Timeout = 10000;
            HttpWebResponse httpWebResponse = (HttpWebResponse)httpWebRequest.GetResponse();
            StreamReader streamReader = new StreamReader(httpWebResponse.GetResponseStream());
            string text = streamReader.ReadToEnd();
            httpWebResponse.Close();
            streamReader.Close();
            PackageInfo packageInfo = JsonUtility.FromJson<PackageInfo>(text);
            ReadPackageJson();
            latestVersion = packageInfo.version;
            if (CompareVersions(currentVersion, latestVersion) < 0)
            {
                if (!isDialogScheduled)
                {
                    isDialogScheduled = true;
                    EditorApplication.delayCall += () =>
                    {
                        OpenDownloadUrl();
                        isDialogScheduled = false;
                    };
                }
                return true;
            }
            else if (isWindow)
            {
                EditorApplication.delayCall += () =>
                {
                    EditorUtility.DisplayDialog("快手小游戏插件检查更新", $"当前版本: {currentVersion}, 线上最新版本: {latestVersion}，已是最新版本。", "确定");
                };
            }
            return false;
        }

        public static void OpenDownloadUrl()
        {
            if (EditorUtility.DisplayDialog("快手小游戏插件更新提示", $@"检测到插件有新版本，当前版本: {currentVersion}, 线上最新版本: {latestVersion}，是否更新到最新版本？", "是[推荐]", "否"))
            {
                if (UnityUtil.GetSDKMode() == UnityUtil.SDKMode.Package)
                {
                    fakeProgress = 0f;
                    isInstalling = true;
                    currentStatus = "Updating...";
                    addRequest = Client.Add(gitRepoUrl + ".git" + "#" + latestVersion);
                    EditorApplication.update += UpdateProgress;
                }
                else
                {
                    Debug.Log("请前往 Git 仓库下载最新版本并导入: " + gitRepoUrl);
                    Application.OpenURL(gitRepoUrl);
                }
            }
            else
            {
                Debug.Log("稍后可以通过“窗口 > 快手小游戏 > 检查更新”再次检查插件更新。");
            }
        }

        private static void UpdateProgress()
        {
            if (!isInstalling) return;

            if (fakeProgress < 0.8f)
            {
                fakeProgress += 0.001f;
            }

            if (addRequest != null && addRequest.IsCompleted)
            {
                if (addRequest.Status == StatusCode.Success)
                {
                    currentStatus = "更新成功：" + addRequest.Result.packageId;
                }
                else
                {
                    currentStatus = "更新失败：" + addRequest.Error.message;
                }

                fakeProgress = 1f;
                isInstalling = false;
            }

            EditorUtility.DisplayProgressBar("Update Kwai MiniGame...", currentStatus, fakeProgress);

            if (!isInstalling && fakeProgress >= 1f)
            {
                EditorUtility.ClearProgressBar();
                EditorApplication.update -= UpdateProgress;
            }
        }

        private static void ReadPackageJson()
        {
            string packageJsonPath = Path.Combine(UnityUtil.GetKsSDKRootPath(), "package.json");
            if (File.Exists(packageJsonPath))
            {
                string jsonContent = File.ReadAllText(packageJsonPath);
                var packageJson = JsonUtility.FromJson<PackageInfo>(jsonContent);
                if (packageJson != null)
                {
                    currentVersion = packageJson.version;
                }
            }
        }
    }
}