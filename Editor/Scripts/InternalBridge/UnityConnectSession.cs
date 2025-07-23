using UnityEditor.Connect;

// ReSharper disable once CheckNamespace
namespace Unity.CloudEditor.Template.Manager.Editor.InternalBridge {
    public class UnityConnectSession {
        public static UnityConnectSession Instance { get; } = new UnityConnectSession();

        public static string GetAccessToken() {
            return UnityConnect.instance.GetAccessToken();
        }

        public static string GetUserId() {
            return UnityConnect.instance.GetUserId();
        }

        public string GetEnvironment() {
            return UnityConnect.instance.GetEnvironment();
        }

        public static void ShowLogin() {
            UnityConnect.instance.ShowLogin();
        }

        public static void OpenAuthorizedURLInWebBrowser(string url) {
            UnityConnect.instance.OpenAuthorizedURLInWebBrowser(url);
        }
    }
}