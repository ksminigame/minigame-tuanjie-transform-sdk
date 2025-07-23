#if UNITY_WEBGL || WEIXINMINIGAME || UNITY_EDITOR
using KSWASM;
using UnityEngine;

internal class CheckFrame : MonoBehaviour
{
    private int frameCnt = 0;

    public void Update()
    {
        frameCnt++;
        if (frameCnt == 2)
        {
#if (UNITY_WEBGL || WEIXINMINIGAME) && !UNITY_EDITOR
            KSSDKManagerHandler.Instance.HideLoadingPage();
#endif
            Destroy(this);
        }
    }
}

internal class HideLoadingPage : MonoBehaviour
{
    [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
    private static void OnGameLaunch()
    {
        var gameObject = new GameObject("HideLoadingPage");
        gameObject.AddComponent<CheckFrame>();
        DontDestroyOnLoad(gameObject);
    }
}
#endif