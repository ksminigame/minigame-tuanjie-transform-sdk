using System;
using System.Collections;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Unity.CloudEditor.Template.Manager.Editor.InternalBridge;

using UnityEngine;
using UnityEngine.Networking;

namespace KSWASM.editor
{
    public class FileUploader
    {
        class CreateNewBundleRequest
        {
            public string description;
            public string version;
        }
        class CreateNewBundleResponse
        {
            public string appId;
            public string createdTime;
            public string deletedTime;
            public string description;
            public string id;
            public string originalPackageUploaded;
            public string putUrl;
            public string released;
            public string splitJobId;
            public string status;
            public string updatedTime;
            public string useSplited;
            public string version;
        }

        
        private string _hostAddress;
        private string _appId;
        private CreateNewBundleRequest _createNewBundleRequest = new CreateNewBundleRequest();
        private CreateNewBundleResponse _createNewBundleResponse;
        private string _accessToken;
        private Action<string, float> _onProgress;
        private Action<string, string> _onFinish;
        private string _filesToUpload;
        private bool _fileUploaded;
        private bool _statusChecked;
        private bool _bundleCreated;
        private string _dashboardUrl;
        
        public FileUploader WithHostAddress(string hostAddress)
        {
            _hostAddress = hostAddress;
            return this;
        }
       
        public FileUploader WithAppId(string appId)
        {
            _appId = appId;
            return this;
        }
        public FileUploader WithBundleVersion(string version)
        {
            _createNewBundleRequest.version = version;
            return this;
        }
        public FileUploader WithBundleDescription(string description)
        {
            _createNewBundleRequest.description = description;
            return this;
        }
        public FileUploader WithUploadFiles(string filePath)
        {
            _filesToUpload = filePath;
            return this;
        }
        

        public FileUploader WithUploadProgressHandler(Action<string, float> handler)
        {
            this._onProgress = handler;
            return this;
        }

        public FileUploader WithUploadFinishHandler(Action<string, string> handler)
        {
            this._onFinish = handler;
            return this;
        }

        public FileUploader Build()
        {
            _accessToken = UnityConnectSession.GetAccessToken();
            return this;
        }

        private void SetupToken(ref UnityWebRequest webRequest)
        {
            webRequest.SetRequestHeader("X-Unity-Access-Token", _accessToken);
        }

        private void HandleError(string info, UnityWebRequest webRequest)
        {
            string jsonResponse = webRequest.downloadHandler?.text;
            
            if (string.IsNullOrEmpty(jsonResponse)) return;

            var errorDetails = JObject.Parse(jsonResponse);
            string errorCode = errorDetails["errorCode"]?.ToString();
            string message = errorDetails["message"]?.ToString();
            string target = errorDetails["target"]?.ToString();

            if (target == "appId" && message == "the given parameter is missing or invalid")
            {
                Debug.LogError($"[上传失败]填写的 Game ID 无效。");
            }
            else if (errorDetails["error"]?.ToString() == "Unauthorized")
            {
                Debug.LogError("[上传失败]应用未获得授权，请检查Hub的登录状态或者Licenses。");
            }
            else
            {
                Debug.LogError($"{info}, status: {webRequest.result.ToString()}. {webRequest.downloadHandler?.text}");
            }
        }
        private IEnumerator GetDashboardUrl()
        {
            Uri hostUri = new Uri(_hostAddress.TrimEnd('/'));
            Uri routeUri = new Uri(hostUri, $"api/game_app/{_appId}/dashboard_url");
            UnityWebRequest webRequest = UnityWebRequest.Get(routeUri);
            SetupToken(ref webRequest);
            var syncOp = webRequest.SendWebRequest();
            while (!syncOp.isDone)
            {
                yield return null;
            }
            if (webRequest.result != UnityWebRequest.Result.Success)
            {
                HandleError("get dashboard url failed", webRequest);
                _dashboardUrl = null;
                yield break;
            }
            _dashboardUrl = webRequest.downloadHandler.text;
        }
        private IEnumerator CreateNewBundle()
        {
            Uri hostUri = new Uri(_hostAddress.TrimEnd('/'));
            Uri routeUri = new Uri(hostUri, $"api/game_app/{_appId}/bundle");
            UnityWebRequest webRequest = WebRequestUtils.PostJson(routeUri, JsonConvert.SerializeObject(_createNewBundleRequest, Formatting.Indented));
            SetupToken(ref webRequest);
            var syncOp = webRequest.SendWebRequest();
            while (!syncOp.isDone)
            {
                _onProgress?.Invoke($"准备上传...", syncOp.progress);
                yield return null;
            }
            if (webRequest.result != UnityWebRequest.Result.Success)
            {
                HandleError("upload failed", webRequest);
                yield break;
            }
            _createNewBundleResponse = JsonConvert.DeserializeObject<CreateNewBundleResponse>(webRequest.downloadHandler.text);
            _bundleCreated = true;
        }

        private IEnumerator UploadFile()
        {
            if (_createNewBundleResponse == null || string.IsNullOrEmpty(_createNewBundleResponse.putUrl))
            {
                yield break;
            }
            byte[] fileBytes = File.ReadAllBytes(_filesToUpload);
            var req = UnityWebRequest.Put(_createNewBundleResponse.putUrl, fileBytes);
            req.SetRequestHeader("Content-Type", "application/x-zip-compressed");
            SetupToken(ref req);
            req.SendWebRequest();
            while (!req.isDone)
            {
                _onProgress?.Invoke($"上传代码包中...", req.uploadProgress);
                yield return null;
            }

            if (req.result != UnityWebRequest.Result.Success)
            {
                Debug.LogError($"upload failed, status: {req.result.ToString()}");
                yield break;
            }

            _fileUploaded = true;

        }

        private IEnumerator CheckUploadStatus()
        {
            if (!_fileUploaded)
            {
                yield break;
            }
            Uri hostUri = new Uri(_hostAddress.TrimEnd('/'));
            Uri routeUri = new Uri(hostUri, $"api/game_app/{_appId}/bundle/{_createNewBundleResponse.id}/on_upload");
            UnityWebRequest req = new UnityWebRequest(routeUri, "Patch");
            SetupToken(ref req);
            var asynOp = req.SendWebRequest();
            while (!asynOp.isDone)
            {
                _onProgress?.Invoke($"检查上传状态中...", req.uploadProgress);
                yield return null;
            }

            if (req.result != UnityWebRequest.Result.Success)
            {
                Debug.LogError($"check upload status failed, status: {req.result.ToString()}");
                yield break;
            }
            _statusChecked = true;
        }
       
        public  IEnumerator Upload()
        {
            if (string.IsNullOrEmpty(_filesToUpload) || !File.Exists(_filesToUpload))
            {
                Debug.LogError("no valid files selected");
                _onFinish?.Invoke(null, null);
                yield break;
            }

            yield return GetDashboardUrl();
            yield return CreateNewBundle();
            yield return UploadFile();
            yield return CheckUploadStatus();
            if (_bundleCreated && _fileUploaded && _statusChecked)
            {
                _onFinish?.Invoke(_dashboardUrl, _createNewBundleResponse.id);
            }
            else
            {
                _onFinish?.Invoke(null, null);
            }
        }
    }
}