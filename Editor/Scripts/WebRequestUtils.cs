using System;
using System.Text;
using UnityEngine.Networking;

namespace KSWASM.editor
{
    public static class WebRequestUtils
    {
        public static UnityWebRequest PostJson(Uri url, string json)
        {
            byte[] jsonToSend = Encoding.UTF8.GetBytes(json);
            UnityWebRequest request = new UnityWebRequest(url, "POST");
            request.uploadHandler = new UploadHandlerRaw(jsonToSend);
            request.downloadHandler = new DownloadHandlerBuffer();
            request.SetRequestHeader("Content-Type", "application/json");
            return request;
        }
    }
}