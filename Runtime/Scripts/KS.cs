using System;

namespace KSWASM
{
    /// <summary>
    /// 快手SDK对外暴露的API
    /// </summary>
    public partial class KS : KSBase
    {
        /// <summary>
        /// 批量添加卡券。只有通过认证的小程序或文化互动类目的小游戏才能使用。
        /// </summary>
        public static void AddCard(AddCardOption option)
        {
            KSSDKManagerHandler.Instance.AddCard(option);
        }

        /// <summary>
        /// 验证私密消息。
        /// </summary>
        public static void AuthPrivateMessage(AuthPrivateMessageOption option)
        {
            KSSDKManagerHandler.Instance.AuthPrivateMessage(option);
        }

        /// <summary>
        /// 提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用某项功能或获取用户的某些数据，但不会实际调用对应接口。如果用户之前已经同意授权，则不会出现弹窗，直接返回成功。
        /// **注意事项**
        /// - 小游戏内使用 `Authorize({scope: "scope.userInfo"})`，不会弹出授权窗口，请使用 CreateUserInfoButton
        /// - 需要授权 `scope.userFuzzyLocation` 时必须配置地理位置用途说明。
        /// </summary>
        public static void Authorize(AuthorizeOption option)
        {
            KSSDKManagerHandler.Instance.Authorize(option);
        }

        /// <summary>
        /// 检查小程序是否被添加至 「我的小程序」
        /// </summary>
        public static void CheckIsAddedToMyMiniProgram(CheckIsAddedToMyMiniProgramOption option)
        {
            KSSDKManagerHandler.Instance.CheckIsAddedToMyMiniProgram(option);
        }

        /// <summary>
        /// 通过 Login 接口获得的用户登录态拥有一定的时效性。用户越久未使用小程序，用户登录态越有可能失效。反之如果用户一直在使用小程序，则用户登录态一直保持有效。具体时效逻辑由快手维护，对开发者透明。开发者只需要调用 CheckSession 接口检测当前用户登录态是否有效。
        /// 登录态过期后开发者可以再调用 Login 获取新的用户登录态。调用成功说明当前 session_key 未过期，调用失败说明 session_key 已过期。
        /// </summary>
        public static void CheckSession(CheckSessionOption option)
        {
            KSSDKManagerHandler.Instance.CheckSession(option);
        }

        /// <summary>
        /// 从本地相册选择图片或使用相机拍照。
        /// </summary>
        public static void ChooseImage(ChooseImageOption option)
        {
            KSSDKManagerHandler.Instance.ChooseImage(option);
        }

        /// <summary>
        /// 拍摄或从手机相册中选择图片或视频。
        /// </summary>
        public static void ChooseMedia(ChooseMediaOption option)
        {
            KSSDKManagerHandler.Instance.ChooseMedia(option);
        }

        /// <summary>
        /// 从客户端会话选择文件。
        /// </summary>
        public static void ChooseMessageFile(ChooseMessageFileOption option)
        {
            KSSDKManagerHandler.Instance.ChooseMessageFile(option);
        }

        /// <summary>
        /// 断开与蓝牙低功耗设备的连接。
        /// </summary>
        public static void CloseBLEConnection(CloseBLEConnectionOption option)
        {
            KSSDKManagerHandler.Instance.CloseBLEConnection(option);
        }

        /// <summary>
        /// 关闭蓝牙模块。调用该方法将断开所有已建立的连接并释放系统资源。建议在使用蓝牙流程后，与 OpenBluetoothAdapter 成对调用。
        /// </summary>
        public static void CloseBluetoothAdapter(CloseBluetoothAdapterOption option)
        {
            KSSDKManagerHandler.Instance.CloseBluetoothAdapter(option);
        }

        /// <summary>
        /// 压缩图片接口，可选压缩质量
        /// </summary>
        public static void CompressImage(CompressImageOption option)
        {
            KSSDKManagerHandler.Instance.CompressImage(option);
        }

        /// <summary>
        /// 连接蓝牙低功耗设备。
        /// 若小程序在之前已有搜索过某个蓝牙设备，并成功建立连接，可直接传入之前搜索获取的 deviceId 直接尝试连接该设备，无需再次进行搜索操作。
        /// **注意**
        /// - 请保证尽量成对的调用 CreateBLEConnection 和 CloseBLEConnection 接口。安卓如果重复调用 CreateBLEConnection 创建连接，有可能导致系统持有同一设备多个连接的实例，导致调用 `closeBLEConnection` 的时候并不能真正的断开与设备的连接。
        /// - 蓝牙连接随时可能断开，建议监听 OnBLEConnectionStateChange 回调事件，当蓝牙设备断开时按需执行重连操作
        /// - 若对未连接的设备或已断开连接的设备调用数据读写操作的接口，会返回 10006 错误，建议进行重连操作。
        /// </summary>
        public static void CreateBLEConnection(CreateBLEConnectionOption option)
        {
            KSSDKManagerHandler.Instance.CreateBLEConnection(option);
        }

        /// <summary>
        /// 建立本地作为蓝牙低功耗外围设备的服务端，可创建多个。
        /// </summary>
        public static void CreateBLEPeripheralServer(CreateBLEPeripheralServerOption option)
        {
            KSSDKManagerHandler.Instance.CreateBLEPeripheralServer(option);
        }

        /// <summary>
        /// 退出当前小程序。必须有点击行为才能调用成功。
        /// </summary>
        public static void ExitMiniProgram(ExitMiniProgramOption option)
        {
            KSSDKManagerHandler.Instance.ExitMiniProgram(option);
        }

        /// <summary>
        /// 退出（销毁）实时语音通话
        /// </summary>
        public static void ExitVoIPChat(ExitVoIPChatOption option)
        {
            KSSDKManagerHandler.Instance.ExitVoIPChat(option);
        }

        /// <summary>
        /// 人脸检测，使用前需要通过 InitFaceDetect 进行一次初始化，推荐使用相机接口返回的帧数据。
        /// </summary>
        public static void FaceDetect(FaceDetectOption option)
        {
            KSSDKManagerHandler.Instance.FaceDetect(option);
        }

        /// <summary>
        /// 获取当前支持的音频输入源
        /// </summary>
        public static void GetAvailableAudioSources(GetAvailableAudioSourcesOption option)
        {
            KSSDKManagerHandler.Instance.GetAvailableAudioSources(option);
        }

        /// <summary>
        /// 获取蓝牙低功耗设备某个服务中所有特征 (characteristic)。
        /// </summary>
        public static void GetBLEDeviceCharacteristics(GetBLEDeviceCharacteristicsOption option)
        {
            KSSDKManagerHandler.Instance.GetBLEDeviceCharacteristics(option);
        }

        /// <summary>
        /// 获取蓝牙低功耗设备的信号强度 (Received Signal Strength Indication, RSSI)。
        /// </summary>
        public static void GetBLEDeviceRSSI(GetBLEDeviceRSSIOption option)
        {
            KSSDKManagerHandler.Instance.GetBLEDeviceRSSI(option);
        }

        /// <summary>
        /// 获取蓝牙低功耗设备所有服务 (service)。
        /// </summary>
        public static void GetBLEDeviceServices(GetBLEDeviceServicesOption option)
        {
            KSSDKManagerHandler.Instance.GetBLEDeviceServices(option);
        }

        /// <summary>
        /// 获取蓝牙低功耗的最大传输单元。需在 CcreateBLEConnection 调用成功后调用。
        /// **注意**
        /// - 小程序中 MTU 为 ATT_MTU，包含 Op-Code 和 Attribute Handle 的长度，实际可以传输的数据长度为 `ATT_MTU - 3`
        /// - iOS 系统中 MTU 为固定值；安卓系统中，MTU 会在系统协商成功之后发生改变，建议使用 OnBLEMTUChange 监听。
        /// </summary>
        public static void GetBLEMTU(GetBLEMTUOption option)
        {
            KSSDKManagerHandler.Instance.GetBLEMTU(option);
        }

        /// <summary>
        /// 拉取 backgroundFetch 客户端缓存数据。
        /// 当调用接口时，若当次请求未结束，会先返回本地的旧数据（之前打开小程序时请求的），如果本地没有旧数据，安卓上会返回fail，不会等待请求完成，iOS上会返回success但fetchedData为空，也不会等待请求完成。
        /// </summary>
        public static void GetBackgroundFetchData(GetBackgroundFetchDataOption option)
        {
            KSSDKManagerHandler.Instance.GetBackgroundFetchData(option);
        }

        /// <summary>
        /// 获取设置过的自定义登录态。若无，则返回 fail。
        /// </summary>
        public static void GetBackgroundFetchToken(GetBackgroundFetchTokenOption option)
        {
            KSSDKManagerHandler.Instance.GetBackgroundFetchToken(option);
        }

        /// <summary>
        /// 获取设备电量。同步 API GetBatteryInfoSync 在 iOS 上不可用。
        /// </summary>
        public static void GetBatteryInfo(GetBatteryInfoOption option)
        {
            KSSDKManagerHandler.Instance.GetBatteryInfo(option);
        }

        /// <summary>
        /// 获取所有已搜索到的 Beacon 设备
        /// </summary>
        public static void GetBeacons(GetBeaconsOption option)
        {
            KSSDKManagerHandler.Instance.GetBeacons(option);
        }

        /// <summary>
        /// 获取本机蓝牙适配器状态。
        /// </summary>
        public static void GetBluetoothAdapterState(GetBluetoothAdapterStateOption option)
        {
            KSSDKManagerHandler.Instance.GetBluetoothAdapterState(option);
        }

        /// <summary>
        /// 获取在蓝牙模块生效期间所有搜索到的蓝牙设备。包括已经和本机处于连接状态的设备。
        /// **注意**
        /// - 该接口获取到的设备列表为**蓝牙模块生效期间所有搜索到的蓝牙设备**，若在蓝牙模块使用流程结束后未及时调用 CloseBluetoothAdapter 释放资源，会存在调用该接口会返回之前的蓝牙使用流程中搜索到的蓝牙设备，可能设备已经不在用户身边，无法连接。
        /// </summary>
        public static void GetBluetoothDevices(GetBluetoothDevicesOption option)
        {
            KSSDKManagerHandler.Instance.GetBluetoothDevices(option);
        }

        /// <summary>
        /// 获取视频号直播信息
        /// </summary>
        public static void GetChannelsLiveInfo(GetChannelsLiveInfoOption option)
        {
            KSSDKManagerHandler.Instance.GetChannelsLiveInfo(option);
        }

        /// <summary>
        /// 获取视频号直播预告信息
        /// </summary>
        public static void GetChannelsLiveNoticeInfo(GetChannelsLiveNoticeInfoOption option)
        {
            KSSDKManagerHandler.Instance.GetChannelsLiveNoticeInfo(option);
        }

        /// <summary>
        /// 获取系统剪贴板的内容
        /// </summary>
        public static void GetClipboardData(GetClipboardDataOption option)
        {
            KSSDKManagerHandler.Instance.GetClipboardData(option);
        }

        /// <summary>
        /// 根据主服务 UUID 获取已连接的蓝牙设备。
        /// </summary>
        public static void GetConnectedBluetoothDevices(GetConnectedBluetoothDevicesOption option)
        {
            KSSDKManagerHandler.Instance.GetConnectedBluetoothDevices(option);
        }

        /// <summary>
        /// 获取 第三方平台 自定义的数据字段。
        /// **Tips**
        /// 1. 本接口暂时无法通过 CanIUse 判断是否兼容，开发者需要自行判断是否存在来兼容
        /// </summary>
        public static void GetExtConfig(GetExtConfigOption option)
        {
            KSSDKManagerHandler.Instance.GetExtConfig(option);
        }

        /// <summary>
        /// 获取当前的模糊地理位置。
        /// </summary>
        public static void GetFuzzyLocation(GetFuzzyLocationOption option)
        {
            KSSDKManagerHandler.Instance.GetFuzzyLocation(option);
        }

        /// <summary>
        /// 获取游戏圈数据。
        /// **type说明**
        /// | type取值 | 说明                                   | subKey  | GameClubDataByType.value |
        /// | ------- | -------------------------------------- | -------- | -------- |
        /// | 1   | 加入该游戏圈时间                            | 无需传入 | 秒级Unix时间戳 |
        /// | 3   | 用户禁言状态                                | 无需传入  | 0：正常 1：禁言  |
        /// | 4   | 当天(自然日)点赞贴子数                       | 无需传入  |  |
        /// | 5   | 当天(自然日)评论贴子数                        | 无需传入  |  |
        /// | 6   | 当天(自然日)发表贴子数                       | 无需传入  |  |
        /// | 7   | 当天(自然日)发表视频贴子数                    | 无需传入  |  |
        /// | 8   | 当天(自然日)赞官方贴子数                      | 无需传入  |  |
        /// | 9   | 当天(自然日)评论官方贴子数                     | 无需传入  |  |
        /// | 10   | 当天(自然日)发表到本圈子话题的贴子数           | 传入话题id，从mp-游戏圈话题管理处获取  |  |
        /// 
        /// **encryptedData 解密后得到的 GameClubData 的结构**
        /// | 属性 | 类型 | 说明                                   |
        /// | ------- | ------- | -------------------------------------- |
        /// |  dataList   | Array<GameClubDataByType> | 游戏圈相关数据的对象数组           |
        /// 
        /// **GameClubDataByType 的结构**
        /// | 属性 | 类型 | 说明                                   |
        /// | ------- |------- |  -------------------------------------- |
        /// |  dataType   | number | 与输入的 dataType 一致          |
        /// |  value   | number | 不同type返回的value含义不同，见type表格说明           |
        /// </summary>
        public static void GetGameClubData(GetGameClubDataOption option)
        {
            KSSDKManagerHandler.Instance.GetGameClubData(option);
        }

        /// <summary>
        /// 获取快手群聊场景下的小程序启动信息。群聊场景包括群聊小程序消息卡片、群待办、群工具。可用于获取当前群的 opengid。
        /// </summary>
        public static void GetGroupEnterInfo(GetGroupEnterInfoOption option)
        {
            KSSDKManagerHandler.Instance.GetGroupEnterInfo(option);
        }

        /// <summary>
        /// 获取通用AI推理引擎版本。
        /// </summary>
        public static void GetInferenceEnvInfo(GetInferenceEnvInfoOption option)
        {
            KSSDKManagerHandler.Instance.GetInferenceEnvInfo(option);
        }

        /// <summary>
        /// 获取局域网IP地址
        /// </summary>
        public static void GetLocalIPAddress(GetLocalIPAddressOption option)
        {
            KSSDKManagerHandler.Instance.GetLocalIPAddress(option);
        }

        /// <summary>
        /// 获取网络类型
        /// </summary>
        public static void GetNetworkType(GetNetworkTypeOption option)
        {
            KSSDKManagerHandler.Instance.GetNetworkType(option);
        }

        /// <summary>
        /// 查询隐私授权情况。
        /// 
        /// **具体说明：**
        /// 1. 一定要调用 GetPrivacySetting 接口吗？
        /// - 不是，GetPrivacySetting 只是一个辅助接口，可以根据实际情况选择使用。
        /// </summary>
        public static void GetPrivacySetting(GetPrivacySettingOption option)
        {
            KSSDKManagerHandler.Instance.GetPrivacySetting(option);
        }

        /// <summary>
        /// 获取屏幕亮度
        /// **说明**
        /// - 若安卓系统设置中开启了自动调节亮度功能，则屏幕亮度会根据光线自动调整，该接口仅能获取自动调节亮度之前的值，而非实时的亮度值。
        /// </summary>
        public static void GetScreenBrightness(GetScreenBrightnessOption option)
        {
            KSSDKManagerHandler.Instance.GetScreenBrightness(option);
        }

        /// <summary>
        /// 查询用户是否在录屏。
        /// </summary>
        public static void GetScreenRecordingState(GetScreenRecordingStateOption option)
        {
            KSSDKManagerHandler.Instance.GetScreenRecordingState(option);
        }

        /// <summary>
        /// 获取用户的当前设置。**返回值中只会出现小程序已经向用户请求过的权限**。
        /// </summary>
        public static void GetSetting(GetSettingOption option)
        {
            KSSDKManagerHandler.Instance.GetSetting(option);
        }

        /// <summary>
        /// 获取转发详细信息（主要是获取群ID）。 从群聊内的小程序消息卡片打开小程序时，调用此接口才有效。推荐用 GetGroupEnterInfo 替代此接口。
        /// </summary>
        public static void GetShareInfo(GetShareInfoOption option)
        {
            KSSDKManagerHandler.Instance.GetShareInfo(option);
        }

        /// <summary>
        /// 异步获取当前storage的相关信息。
        /// </summary>
        public static void GetStorageInfo(GetStorageInfoOption option)
        {
            KSSDKManagerHandler.Instance.GetStorageInfo(option);
        }

        /// <summary>
        /// 获取系统信息。**由于历史原因，getSystemInfo 是异步的调用格式，但是是同步返回，需要异步获取系统信息请使用 GetSystemInfoAsync。**
        /// </summary>
        public static void GetSystemInfo(GetSystemInfoOption option)
        {
            KSSDKManagerHandler.Instance.GetSystemInfo(option);
        }

        /// <summary>
        /// 异步获取系统信息。需要一定的快手客户端版本支持，在不支持的客户端上，会使用同步实现来返回。
        /// </summary>
        public static void GetSystemInfoAsync(GetSystemInfoAsyncOption option)
        {
            KSSDKManagerHandler.Instance.GetSystemInfoAsync(option);
        }

        /// <summary>
        /// 获取用户信息。
        /// </summary>
        public static void GetUserInfo(GetUserInfoOption option)
        {
            KSSDKManagerHandler.Instance.GetUserInfo(option);
        }

        /// <summary>
        /// 获取当前用户互动型托管数据对应 key 的数据。该接口需要用户授权。
        /// </summary>
        public static void GetUserInteractiveStorage(GetUserInteractiveStorageOption option)
        {
            KSSDKManagerHandler.Instance.GetUserInteractiveStorage(option);
        }

        /// <summary>
        /// 获取用户过去三十一天快手运动步数。需要先调用 Login 接口。步数信息会在用户主动进入小程序时更新。
        /// stepInfoList 中，每一项结构如下：
        /// | 属性 | 类型 | 说明 |
        /// | --- | ---- | --- |
        /// | timestamp | number | 时间戳，表示数据对应的时间 |
        /// | step | number | 快手运动步数 |
        /// </summary>
        public static void GetWeRunData(GetWeRunDataOption option)
        {
            KSSDKManagerHandler.Instance.GetWeRunData(option);
        }

        /// <summary>
        /// 隐藏键盘
        /// </summary>
        public static void HideKeyboard(HideKeyboardOption option)
        {
            KSSDKManagerHandler.Instance.HideKeyboard(option);
        }

        /// <summary>
        /// 隐藏 loading 提示框
        /// </summary>
        public static void HideLoading(HideLoadingOption option)
        {
            KSSDKManagerHandler.Instance.HideLoading(option);
        }

        /// <summary>
        /// 隐藏当前页面的转发按钮
        /// 
        /// **注意事项**
        /// - "shareAppMessage"表示“发送给朋友”按钮，"shareTimeline"表示“分享到朋友圈”按钮
        /// - 隐藏“发送给朋友”按钮时必须同时隐藏“分享到朋友圈”按钮，隐藏“分享到朋友圈”按钮时则允许不隐藏“发送给朋友”按钮
        /// </summary>
        public static void HideShareMenu(HideShareMenuOption option)
        {
            KSSDKManagerHandler.Instance.HideShareMenu(option);
        }

        /// <summary>
        /// 隐藏消息提示框
        /// </summary>
        public static void HideToast(HideToastOption option)
        {
            KSSDKManagerHandler.Instance.HideToast(option);
        }

        /// <summary>
        /// 初始化人脸检测
        /// </summary>
        public static void InitFaceDetect(InitFaceDetectOption option)
        {
            KSSDKManagerHandler.Instance.InitFaceDetect(option);
        }

        /// <summary>
        /// 查询蓝牙设备是否配对，仅安卓支持。
        /// </summary>
        public static void IsBluetoothDevicePaired(IsBluetoothDevicePairedOption option)
        {
            KSSDKManagerHandler.Instance.IsBluetoothDevicePaired(option);
        }

        /// <summary>
        /// 加入 (创建) 实时语音通话，调用前需要用户授权 `scope.record`，若房间类型为视频房间需要用户授权 `scope.camera`。
        /// </summary>
        public static void JoinVoIPChat(JoinVoIPChatOption option)
        {
            KSSDKManagerHandler.Instance.JoinVoIPChat(option);
        }

        /// <summary>
        /// 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户在当前小程序的唯一标识（openid）、快手开放平台账号下的唯一标识（unionid，若当前小程序已绑定到快手开放平台账号）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成。
        /// </summary>
        public static void Login(LoginOption option)
        {
            KSSDKManagerHandler.Instance.Login(option);
        }

        /// <summary>
        /// 蓝牙配对接口，仅安卓支持。
        /// 通常情况下（需要指定 `pin` 码或者密码时）系统会接管配对流程，直接调用 CreateBLEConnection 即可。该接口只应当在开发者不想让用户手动输入 `pin` 码且真机验证确认可以正常生效情况下用。
        /// </summary>
        public static void MakeBluetoothPair(MakeBluetoothPairOption option)
        {
            KSSDKManagerHandler.Instance.MakeBluetoothPair(option);
        }

        /// <summary>
        /// 打开另一个小程序
        /// </summary>
        public static void NavigateToMiniProgram(NavigateToMiniProgramOption option)
        {
            KSSDKManagerHandler.Instance.NavigateToMiniProgram(option);
        }

        /// <summary>
        /// 启用蓝牙低功耗设备特征值变化时的 notify 功能，订阅特征。注意：必须设备的特征支持 notify 或者 indicate 才可以成功调用。
        /// 另外，必须先启用 NotifyBLECharacteristicValueChange 才能监听到设备 `characteristicValueChange` 事件
        /// **注意**
        /// - 订阅操作成功后需要设备主动更新特征的 value，才会触发 OnBLECharacteristicValueChange 回调。
        /// - 安卓平台上，在本接口调用成功后立即调用 WriteBLECharacteristicValue 接口，在部分机型上会发生 10008 系统错误
        /// </summary>
        public static void NotifyBLECharacteristicValueChange(NotifyBLECharacteristicValueChangeOption option)
        {
            KSSDKManagerHandler.Instance.NotifyBLECharacteristicValueChange(option);
        }

        /// <summary>
        /// 跳转系统快手授权管理页
        /// </summary>
        public static void OpenAppAuthorizeSetting(OpenAppAuthorizeSettingOption option)
        {
            KSSDKManagerHandler.Instance.OpenAppAuthorizeSetting(option);
        }

        /// <summary>
        /// 初始化蓝牙模块。iOS 上开启主机/从机（外围设备）模式时需分别调用一次，并指定对应的 `mode`。
        /// **object.fail 回调函数返回的 state 参数（仅 iOS）**
        /// | 状态码 | 说明   |
        /// | ------ | ------ |
        /// | 0      | 未知   |
        /// | 1      | 重置中 |
        /// | 2      | 不支持 |
        /// | 3      | 未授权 |
        /// | 4      | 未开启 |
        /// **注意**
        /// - 其他蓝牙相关 API 必须在 OpenBluetoothAdapter 调用之后使用。否则 API 会返回错误（errCode=10000）。
        /// - 在用户蓝牙开关未开启或者手机不支持蓝牙功能的情况下，调用 OpenBluetoothAdapter会返回错误（errCode=10001），表示手机蓝牙功能不可用。此时小程序蓝牙模块已经初始化完成，可通过 OnBluetoothAdapterStateChange 监听手机蓝牙状态的改变，也可以调用蓝牙模块的所有API。
        /// </summary>
        public static void OpenBluetoothAdapter(OpenBluetoothAdapterOption option)
        {
            KSSDKManagerHandler.Instance.OpenBluetoothAdapter(option);
        }

        /// <summary>
        /// 查看快手卡包中的卡券。只有通过 认证 的小程序或文化互动类目的小游戏才能使用。
        /// </summary>
        public static void OpenCard(OpenCardOption option)
        {
            KSSDKManagerHandler.Instance.OpenCard(option);
        }

        /// <summary>
        /// 打开视频号视频
        /// </summary>
        public static void OpenChannelsActivity(OpenChannelsActivityOption option)
        {
            KSSDKManagerHandler.Instance.OpenChannelsActivity(option);
        }

        /// <summary>
        /// 打开视频号活动页
        /// </summary>
        public static void OpenChannelsEvent(OpenChannelsEventOption option)
        {
            KSSDKManagerHandler.Instance.OpenChannelsEvent(option);
        }

        /// <summary>
        /// 打开视频号直播
        /// </summary>
        public static void OpenChannelsLive(OpenChannelsLiveOption option)
        {
            KSSDKManagerHandler.Instance.OpenChannelsLive(option);
        }

        /// <summary>
        /// 打开视频号主页
        /// </summary>
        public static void OpenChannelsUserProfile(OpenChannelsUserProfileOption option)
        {
            KSSDKManagerHandler.Instance.OpenChannelsUserProfile(option);
        }

        /// <summary>
        /// 打开快手客服，页面产生点击事件（例如 button 上 bindtap 的回调中）后才可调用。
        /// </summary>
        public static void OpenCustomerServiceChat(OpenCustomerServiceChatOption option)
        {
            KSSDKManagerHandler.Instance.OpenCustomerServiceChat(option);
        }

        /// <summary>
        /// 进入客服会话。要求在用户发生过至少一次 touch 事件后才能调用。后台接入方式与小程序一致。
        /// **注意事项**
        /// - 在客服会话内点击小程序消息卡片进入小程序时，不能通过 OnShow 或 GetEnterOptionsSync 等接口获取启动路径和参数，而是应该通过 OpenCustomerServiceConversation 接口的 success 回调获取启动路径和参数
        /// </summary>
        public static void OpenCustomerServiceConversation(OpenCustomerServiceConversationOption option)
        {
            KSSDKManagerHandler.Instance.OpenCustomerServiceConversation(option);
        }

        /// <summary>
        /// 跳转至隐私协议页面。
        /// 
        /// **具体说明：**
        /// - 1. 一定要调用 OpenPrivacyContract 接口吗？
        /// - 不是。开发者也可以选择在小游戏内自行展示完整的隐私协议。但推荐使用该接口。
        /// </summary>
        public static void OpenPrivacyContract(OpenPrivacyContractOption option)
        {
            KSSDKManagerHandler.Instance.OpenPrivacyContract(option);
        }

        /// <summary>
        /// 调起客户端小程序设置界面，返回用户设置的操作结果。**设置界面只会出现小程序已经向用户请求过的权限**。
        /// 
        /// - 注意：用户发生点击行为后，才可以跳转打开设置页，管理授权信息。
        /// </summary>
        public static void OpenSetting(OpenSettingOption option)
        {
            KSSDKManagerHandler.Instance.OpenSetting(option);
        }

        /// <summary>
        /// 跳转系统蓝牙设置页。仅支持安卓。
        /// </summary>
        public static void OpenSystemBluetoothSetting(OpenSystemBluetoothSettingOption option)
        {
            KSSDKManagerHandler.Instance.OpenSystemBluetoothSetting(option);
        }

        /// <summary>
        /// 在新页面中全屏预览图片。预览的过程中用户可以进行保存图片、发送给朋友等操作。
        /// </summary>
        public static void PreviewImage(PreviewImageOption option)
        {
            KSSDKManagerHandler.Instance.PreviewImage(option);
        }

        /// <summary>
        /// 预览图片和视频。
        /// </summary>
        public static void PreviewMedia(PreviewMediaOption option)
        {
            KSSDKManagerHandler.Instance.PreviewMedia(option);
        }

        /// <summary>
        /// 读取蓝牙低功耗设备特征值的二进制数据。注意：必须设备的特征支持 read 才可以成功调用。
        /// **注意**
        /// - 并行调用多次会存在读失败的可能性。
        /// - 接口读取到的信息需要在 onBLECharacteristicValueChange 方法注册的回调中获取。
        /// </summary>
        public static void ReadBLECharacteristicValue(ReadBLECharacteristicValueOption option)
        {
            KSSDKManagerHandler.Instance.ReadBLECharacteristicValue(option);
        }

        /// <summary>
        /// 从本地缓存中移除指定 key。
        /// </summary>
        public static void RemoveStorage(RemoveStorageOption option)
        {
            KSSDKManagerHandler.Instance.RemoveStorage(option);
        }

        /// <summary>
        /// 删除用户托管数据当中对应 key 的数据。
        /// </summary>
        public static void RemoveUserCloudStorage(RemoveUserCloudStorageOption option)
        {
            KSSDKManagerHandler.Instance.RemoveUserCloudStorage(option);
        }

        /// <summary>
        /// 用于游戏启动阶段的自定义场景上报。
        /// </summary>
        public static void ReportScene(ReportSceneOption option)
        {
            KSSDKManagerHandler.Instance.ReportScene(option);
        }

        /// <summary>
        /// 发起米大师支付
        /// </summary>
        public static void RequestMidasFriendPayment(RequestMidasFriendPaymentOption option)
        {
            KSSDKManagerHandler.Instance.RequestMidasFriendPayment(option);
        }

        /// <summary>
        /// 发起米大师支付
        /// **buyQuantity 限制说明**
        /// 购买游戏币的时候，buyQuantity 不可任意填写。需满足 buyQuantity * 游戏币单价 = 限定的价格等级。如：游戏币单价为 0.1 元，一次购买最少数量是 10。
        /// 有效价格等级如下：
        /// | 价格等级（单位：人民币） |
        /// |----------------------|
        /// | 1 |
        /// | 3 |
        /// | 6 |
        /// | 8 |
        /// | 12 |
        /// | 18 |
        /// | 25 |
        /// | 30 |
        /// | 40 |
        /// | 45 |
        /// | 50 |
        /// | 60 |
        /// | 68 |
        /// | 73 |
        /// | 78 |
        /// | 88 |
        /// | 98 |
        /// | 108 |
        /// | 118 |
        /// | 128 |
        /// | 148 |
        /// | 168 |
        /// | 188 |
        /// | 198 |
        /// | 328 |
        /// | 648 |
        /// | 998 |
        /// | 1998 |
        /// | 2998 |
        /// </summary>
        public static void RequestMidasPayment(RequestMidasPaymentOption option)
        {
            KSSDKManagerHandler.Instance.RequestMidasPayment(option);
        }

        /// <summary>
        /// 调起客户端小游戏订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小游戏设置页，通过 getSetting 接口可获取用户对相关模板消息的订阅状态。
        /// ## 注意事项
        /// - 一次性模板 id 和永久模板 id 不可同时使用。
        /// - 低版本基础库2.4.4~2.8.3 已支持订阅消息接口调用，仅支持传入一个一次性 tmplId / 永久 tmplId。
        /// - 户发生点击行为或者发起支付回调后，才可以调起订阅消息界面。
        /// - 开发版和体验版小游戏将禁止使用模板消息 fomrId。
        /// - 一次授权调用里，每个tmplId对应的模板标题不能存在相同的，若出现相同的，只保留一个。
        /// **错误码**
        /// 
        /// | errCode | errMsg                                                 | 说明                                                           |
        /// | ------- | ------------------------------------------------------ | -------------------------------------------------------------- |
        /// | 10001   | TmplIds can't be empty                                 | 参数传空了                                                     |
        /// | 10002   | Request list fail                                       | 网络问题，请求消息列表失败                                     |
        /// | 10003   | Request subscribe fail                                 | 网络问题，订阅请求发送失败                                     |
        /// | 10004   | Invalid template id                                    | 参数类型错误                                                   |
        /// | 10005   | Cannot show subscribe message UI                       | 无法展示 UI，一般是小游戏这个时候退后台了导致的                |
        /// | 20001   | No template data return, verify the template id exist  | 没有模板数据，一般是模板 ID 不存在 或者和模板类型不对应 导致的 |
        /// | 20002   | Templates type must be same                            | 模板消息类型 既有一次性的又有永久的                            |
        /// | 20003   | Templates count out of max bounds                      | 模板消息数量超过上限                                           |
        /// | 20004   | The main switch is switched off                        | 用户关闭了主开关，无法进行订阅                                 |
        /// | 20005   | This mini program was banned from subscribing messages | 小游戏被禁封                                                   |
        /// </summary>
        public static void RequestSubscribeMessage(RequestSubscribeMessageOption option)
        {
            KSSDKManagerHandler.Instance.RequestSubscribeMessage(option);
        }

        /// <summary>
        /// 调起小游戏系统订阅消息界面，返回用户订阅消息的操作结果。当用户勾选了订阅面板中的“总是保持以上选择，不再询问”时，模板消息会被添加到用户的小游戏设置页，通过 getSetting 接口可获取用户对相关模板消息的订阅状态。
        /// ## 注意事项
        /// - 需要在 touchend 事件的回调中调用。
        /// - 系统订阅消息只需要订阅一次，永久有效。
        /// **错误码**
        /// 
        /// | errCode | errMsg                                                 | 说明                                                           |
        /// | ------- | ------------------------------------------------------ | -------------------------------------------------------------- |
        /// | 10001   | TmplIds can't be empty                                 | 参数传空了                                                     |
        /// | 10002   | Request list fail                                       | 网络问题，请求消息列表失败                                     |
        /// | 10003   | Request subscribe fail                                 | 网络问题，订阅请求发送失败                                     |
        /// | 10004   | Invalid template id                                    | 参数类型错误                                                   |
        /// | 10005   | Cannot show subscribe message UI                       | 无法展示 UI，一般是小游戏这个时候退后台了导致的                |
        /// | 20004   | The main switch is switched off                        | 用户关闭了主开关，无法进行订阅                                 |
        /// | 20005   | This mini program was banned from subscribing messages | 小游戏被禁封                                                   |
        /// </summary>
        public static void RequestSubscribeSystemMessage(RequestSubscribeSystemMessageOption option)
        {
            KSSDKManagerHandler.Instance.RequestSubscribeSystemMessage(option);
        }

        /// <summary>
        /// 模拟隐私接口调用，并触发隐私弹窗逻辑。
        /// 
        /// **具体说明：**
        /// 1. 调用 requirePrivacyAuthorize() 时：
        /// - 1. 如果用户之前已经同意过隐私授权，会立即返回success回调，不会触发 onNeedPrivacyAuthorization 事件。
        /// - 2. 如果用户之前没有授权过，并且开发者注册了 onNeedPrivacyAuthorization() 事件监听，就会立即触发 onNeedPrivacyAuthorization 事件，然后开发者在 onNeedPrivacyAuthorization 回调中弹出自定义隐私授权弹窗，用户点了同意后开发者调用 onNeedPrivacyAuthorization 的回调接口 resolve({ event: 'agree' })，会触发 requirePrivacyAuthorize 的 success 回调。用户点击拒绝授权后开发者调用 onNeedPrivacyAuthorization 的回调接口 resolve({ event: 'disagree' }) 的话，会触发 requirePrivacyAuthorize 的 fail 回调。
        /// - 3. 如果用户之前没有授权过，并且开发者没有注册 onNeedPrivacyAuthorization() 事件监听，就会立即弹出平台提供的统一隐私授权弹窗，用户点了同意之后，会触发 requirePrivacyAuthorize 的 success 回调，用户点了拒绝后会触发 requirePrivacyAuthorize 的 fail 回调。
        /// - 4. 基于上述特性，开发者可以在调用任何真实隐私接口之前调用 requirePrivacyAuthorize 接口来模拟隐私接口调用，并触发隐私弹窗（包括自定义弹窗或平台弹窗）逻辑。
        /// 2. 一定要调用 requirePrivacyAuthorize 接口吗？
        /// - 不是，requirePrivacyAuthorize 只是一个辅助接口，可以根据实际情况选择使用。当开发者希望在调用隐私接口之前就主动弹出隐私弹窗时，就可以使用这个接口。
        /// </summary>
        public static void RequirePrivacyAuthorize(RequirePrivacyAuthorizeOption option)
        {
            KSSDKManagerHandler.Instance.RequirePrivacyAuthorize(option);
        }

        /// <summary>
        /// 重启当前小程序
        /// </summary>
        public static void RestartMiniProgram(RestartMiniProgramOption option)
        {
            KSSDKManagerHandler.Instance.RestartMiniProgram(option);
        }

        /// <summary>
        /// 保存文件系统的文件到用户磁盘，仅在 PC 端支持
        /// </summary>
        public static void SaveFileToDisk(SaveFileToDiskOption option)
        {
            KSSDKManagerHandler.Instance.SaveFileToDisk(option);
        }

        /// <summary>
        /// 保存图片到系统相册。
        /// </summary>
        public static void SaveImageToPhotosAlbum(SaveImageToPhotosAlbumOption option)
        {
            KSSDKManagerHandler.Instance.SaveImageToPhotosAlbum(option);
        }

        /// <summary>
        /// 调起客户端扫码界面进行扫码
        /// </summary>
        public static void ScanCode(ScanCodeOption option)
        {
            KSSDKManagerHandler.Instance.ScanCode(option);
        }

        /// <summary>
        /// 协商设置蓝牙低功耗的最大传输单元 (Maximum Transmission Unit, MTU)。需在 CreateBLEConnection 调用成功后调用。仅安卓系统 5.1 以上版本有效，iOS 因系统限制不支持。
        /// </summary>
        public static void SetBLEMTU(SetBLEMTUOption option)
        {
            KSSDKManagerHandler.Instance.SetBLEMTU(option);
        }

        /// <summary>
        /// 设置自定义登录态，在周期性拉取数据时带上，便于第三方服务器验证请求合法性
        /// </summary>
        public static void SetBackgroundFetchToken(SetBackgroundFetchTokenOption option)
        {
            KSSDKManagerHandler.Instance.SetBackgroundFetchToken(option);
        }

        /// <summary>
        /// 设置系统剪贴板的内容。调用成功后，会弹出 toast 提示"内容已复制"，持续 1.5s
        /// </summary>
        public static void SetClipboardData(SetClipboardDataOption option)
        {
            KSSDKManagerHandler.Instance.SetClipboardData(option);
        }

        /// <summary>
        /// 切换横竖屏。接口调用成功后会触发 onDeviceOrientationChange 事件
        /// </summary>
        public static void SetDeviceOrientation(SetDeviceOrientationOption option)
        {
            KSSDKManagerHandler.Instance.SetDeviceOrientation(option);
        }

        /// <summary>
        /// 设置是否打开调试开关。此开关对正式版也能生效。
        /// **Tips**
        /// - 在正式版打开调试还有一种方法，就是先在开发版或体验版打开调试，再切到正式版就能看到vConsole。
        /// </summary>
        public static void SetEnableDebug(SetEnableDebugOption option)
        {
            KSSDKManagerHandler.Instance.SetEnableDebug(option);
        }

        /// <summary>
        /// 设置 InnerAudioContext 的播放选项。设置之后对当前小程序全局生效。
        /// 
        /// **注意事项**
        /// - 为保证快手整体体验，speakerOn 为 true 时，客户端会忽略 mixWithOthers 参数的内容，强制与其它音频互斥
        /// - 不支持在播放音频的过程中切换为扬声器播放，开发者如需切换可以先暂停当前播放的音频并记录下当前暂停的时间点，然后切换后重新从原来暂停的时间点开始播放音频
        /// - 目前 setInnerAudioOption 接口不兼容 createWebAudioContext 接口，也不兼容 createInnerAudioContext 开启 useWebAudioImplement 的情况，将在后续版本中支持
        /// </summary>
        public static void SetInnerAudioOption(SetInnerAudioOption option)
        {
            KSSDKManagerHandler.Instance.SetInnerAudioOption(option);
        }

        /// <summary>
        /// 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
        /// </summary>
        public static void SetKeepScreenOn(SetKeepScreenOnOption option)
        {
            KSSDKManagerHandler.Instance.SetKeepScreenOn(option);
        }

        /// <summary>
        /// 动态设置通过右上角按钮拉起的菜单的样式。
        /// </summary>
        public static void SetMenuStyle(SetMenuStyleOption option)
        {
            KSSDKManagerHandler.Instance.SetMenuStyle(option);
        }

        /// <summary>
        /// 设置屏幕亮度
        /// </summary>
        public static void SetScreenBrightness(SetScreenBrightnessOption option)
        {
            KSSDKManagerHandler.Instance.SetScreenBrightness(option);
        }

        /// <summary>
        /// 当在配置中设置 showStatusBarStyle 时，屏幕顶部会显示状态栏。此接口可以修改状态栏的样式。
        /// </summary>
        public static void SetStatusBarStyle(SetStatusBarStyleOption option)
        {
            KSSDKManagerHandler.Instance.SetStatusBarStyle(option);
        }

        /// <summary>
        /// 对用户托管数据进行写数据操作。允许同时写多组 KV 数据。
        /// **托管数据的限制**
        /// 1. 每个openid所标识的快手用户在每个游戏上托管的数据不能超过128个key-value对。
        /// 2. 上报的key-value列表当中每一项的key+value长度都不能超过1K(1024)字节。
        /// 3. 上报的key-value列表当中每一个key长度都不能超过128字节。
        /// </summary>
        public static void SetUserCloudStorage(SetUserCloudStorageOption option)
        {
            KSSDKManagerHandler.Instance.SetUserCloudStorage(option);
        }

        /// <summary>
        /// 设置截屏/录屏时屏幕表现，仅支持在 Android 端调用
        /// </summary>
        public static void SetVisualEffectOnCapture(SetVisualEffectOnCaptureOption option)
        {
            KSSDKManagerHandler.Instance.SetVisualEffectOnCapture(option);
        }

        /// <summary>
        /// 显示操作菜单
        /// **注意**
        /// - Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；
        /// - Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，所以尽量避免使用「取消」分支中实现业务逻辑
        /// </summary>
        public static void ShowActionSheet(ShowActionSheetOption option)
        {
            KSSDKManagerHandler.Instance.ShowActionSheet(option);
        }

        /// <summary>
        /// 显示键盘
        /// </summary>
        public static void ShowKeyboard(ShowKeyboardOption option)
        {
            KSSDKManagerHandler.Instance.ShowKeyboard(option);
        }

        /// <summary>
        /// 显示 loading 提示框。需主动调用 hideLoading 才能关闭提示框
        /// **注意**
        /// - showLoading 同时只能显示一个
        /// - showLoading 配对使用
        /// </summary>
        public static void ShowLoading(ShowLoadingOption option)
        {
            KSSDKManagerHandler.Instance.ShowLoading(option);
        }

        /// <summary>
        /// 显示模态对话框
        /// **注意**
        /// - Android 6.7.2 以下版本，点击取消或蒙层时，回调 fail, errMsg 为 "fail cancel"；
        /// - Android 6.7.2 及以上版本 和 iOS 点击蒙层不会关闭模态弹窗，所以尽量避免使用「取消」分支中实现业务逻辑
        /// - 自基础库 2.17.1 版本起，支持传入 editable 参数，显示带输入框的弹窗
        /// </summary>
        public static void ShowModal(ShowModalOption option)
        {
            KSSDKManagerHandler.Instance.ShowModal(option);
        }

        /// <summary>
        /// 打开分享图片弹窗，可以将图片发送给朋友、收藏或下载
        /// </summary>
        public static void ShowShareImageMenu(ShowShareImageMenuOption option)
        {
            KSSDKManagerHandler.Instance.ShowShareImageMenu(option);
        }

        /// <summary>
        /// 显示当前页面的转发按钮
        /// 
        /// **注意事项**
        /// - "shareAppMessage"表示“发送给朋友”按钮，"shareTimeline"表示“分享到朋友圈”按钮
        /// - 显示“分享到朋友圈”按钮时必须同时显示“发送给朋友”按钮，显示“发送给朋友”按钮时则允许不显示“分享到朋友圈”按钮
        /// </summary>
        public static void ShowShareMenu(ShowShareMenuOption option)
        {
            KSSDKManagerHandler.Instance.ShowShareMenu(option);
        }

        /// <summary>
        /// 显示消息提示框
        /// **注意**
        /// - showLoading 同时只能显示一个
        /// - showToast 配对使用
        /// </summary>
        public static void ShowToast(ShowToastOption option)
        {
            KSSDKManagerHandler.Instance.ShowToast(option);
        }

        /// <summary>
        /// 开始监听加速度数据。
        /// **注意**
        /// - 根据机型性能、当前 CPU 与内存的占用情况，`interval` 的设置与实际 `onAccelerometerChange()` 回调函数的执行频率会有一些出入。
        /// </summary>
        public static void StartAccelerometer(StartAccelerometerOption option)
        {
            KSSDKManagerHandler.Instance.StartAccelerometer(option);
        }

        /// <summary>
        /// 开始搜索附近的 Beacon 设备
        /// </summary>
        public static void StartBeaconDiscovery(StartBeaconDiscoveryOption option)
        {
            KSSDKManagerHandler.Instance.StartBeaconDiscovery(option);
        }

        /// <summary>
        /// 开始搜寻附近的蓝牙外围设备。
        /// **此操作比较耗费系统资源，请在搜索到需要的设备后及时调用 stopBluetoothDevicesDiscovery 停止搜索。**
        /// **注意**
        /// - 考虑到蓝牙功能可以间接进行定位，安卓 6.0 及以上版本，无定位权限或定位开关未打开时，无法进行设备搜索。这种情况下，安卓 8.0.16 前，接口调用成功但无法扫描设备；8.0.16 及以上版本，会返回错误。
        /// </summary>
        public static void StartBluetoothDevicesDiscovery(StartBluetoothDevicesDiscoveryOption option)
        {
            KSSDKManagerHandler.Instance.StartBluetoothDevicesDiscovery(option);
        }

        /// <summary>
        /// 开始监听罗盘数据
        /// </summary>
        public static void StartCompass(StartCompassOption option)
        {
            KSSDKManagerHandler.Instance.StartCompass(option);
        }

        /// <summary>
        /// 开始监听设备方向的变化。
        /// </summary>
        public static void StartDeviceMotionListening(StartDeviceMotionListeningOption option)
        {
            KSSDKManagerHandler.Instance.StartDeviceMotionListening(option);
        }

        /// <summary>
        /// 停止监听加速度数据。
        /// </summary>
        public static void StopAccelerometer(StopAccelerometerOption option)
        {
            KSSDKManagerHandler.Instance.StopAccelerometer(option);
        }

        /// <summary>
        /// 停止搜索附近的 Beacon 设备
        /// </summary>
        public static void StopBeaconDiscovery(StopBeaconDiscoveryOption option)
        {
            KSSDKManagerHandler.Instance.StopBeaconDiscovery(option);
        }

        /// <summary>
        /// 停止搜寻附近的蓝牙外围设备。若已经找到需要的蓝牙设备并不需要继续搜索时，建议调用该接口停止蓝牙搜索。
        /// </summary>
        public static void StopBluetoothDevicesDiscovery(StopBluetoothDevicesDiscoveryOption option)
        {
            KSSDKManagerHandler.Instance.StopBluetoothDevicesDiscovery(option);
        }

        /// <summary>
        /// 停止监听罗盘数据
        /// </summary>
        public static void StopCompass(StopCompassOption option)
        {
            KSSDKManagerHandler.Instance.StopCompass(option);
        }

        /// <summary>
        /// 停止监听设备方向的变化。
        /// </summary>
        public static void StopDeviceMotionListening(StopDeviceMotionListeningOption option)
        {
            KSSDKManagerHandler.Instance.StopDeviceMotionListening(option);
        }

        /// <summary>
        /// stopFaceDetect(Object object)
        /// </summary>
        public static void StopFaceDetect(StopFaceDetectOption option)
        {
            KSSDKManagerHandler.Instance.StopFaceDetect(option);
        }

        /// <summary>
        /// 更新键盘输入框内容。只有当键盘处于拉起状态时才会产生效果
        /// </summary>
        public static void UpdateKeyboard(UpdateKeyboardOption option)
        {
            KSSDKManagerHandler.Instance.UpdateKeyboard(option);
        }

        /// <summary>
        /// 更新转发属性
        /// 
        /// **注意事项**
        /// - bug：在iOS上，如果 withShareTicket 传了 true ，同时 isUpdatableMessage 传了 false，会导致 withShareTicket 失效。解决办法：当 withShareTicket 传了 true 的时候，isUpdatableMessage 传 true 或者不传都可以，但不要传 false。如果需要关掉动态消息设置，则另外单独调用一次 updateShareMenu({ isUpdatableMessage: false }) 即可。
        /// </summary>
        public static void UpdateShareMenu(UpdateShareMenuOption option)
        {
            KSSDKManagerHandler.Instance.UpdateShareMenu(option);
        }

        /// <summary>
        /// 更新实时语音静音设置
        /// </summary>
        public static void UpdateVoIPChatMuteConfig(UpdateVoIPChatMuteConfigOption option)
        {
            KSSDKManagerHandler.Instance.UpdateVoIPChatMuteConfig(option);
        }

        /// <summary>
        /// 使手机发生较长时间的振动（400 ms)
        /// </summary>
        public static void VibrateLong(VibrateLongOption option)
        {
            KSSDKManagerHandler.Instance.VibrateLong(option);
        }

        /// <summary>
        /// 使手机发生较短时间的振动（15 ms）。仅在 iPhone `7 / 7 Plus` 以上及 Android 机型生效
        /// </summary>
        public static void VibrateShort(VibrateShortOption option)
        {
            KSSDKManagerHandler.Instance.VibrateShort(option);
        }

        /// <summary>
        /// 向蓝牙低功耗设备特征值中写入二进制数据。注意：必须设备的特征支持 write 才可以成功调用。
        /// **注意**
        /// - 并行调用多次会存在写失败的可能性。
        /// - 小程序不会对写入数据包大小做限制，但系统与蓝牙设备会限制蓝牙 4.0 单次传输的数据大小，超过最大字节数后会发生写入错误，建议每次写入不超过 20 字节。
        /// - 若单次写入数据过长，iOS 上存在系统不会有任何回调的情况（包括错误回调）。
        /// - 安卓平台上，在调用 notifyBLECharacteristicValueChange 成功后立即调用本接口，在部分机型上会发生 10008 系统错误
        /// </summary>
        public static void WriteBLECharacteristicValue(WriteBLECharacteristicValueOption option)
        {
            KSSDKManagerHandler.Instance.WriteBLECharacteristicValue(option);
        }

        /// <summary>
        /// 小游戏内主动发起直播，开发者可在游戏内设置一键开播入口
        /// startGameLive 接口需要用户产生点击行为后才能调用,要在KS.OnTouchEnd事件中调用
        /// </summary>
        public static void StartGameLive(StartGameLiveOption option)
        {
            KSSDKManagerHandler.Instance.StartGameLive(option);
        }

        /// <summary>
        /// 检查用户是否有直播权限以及用户设备是否支持直播
        /// </summary>
        public static void CheckGameLiveEnabled(CheckGameLiveEnabledOption option)
        {
            KSSDKManagerHandler.Instance.CheckGameLiveEnabled(option);
        }

        /// <summary>
        /// 获取小游戏用户当前正在直播的信息（可查询当前直播的 feedId）
        /// </summary>
        public static void GetUserCurrentGameliveInfo(GetUserCurrentGameliveInfoOption option)
        {
            KSSDKManagerHandler.Instance.GetUserCurrentGameliveInfo(option);
        }

        /// <summary>
        /// 获取小游戏用户最近已结束的直播的信息（可查询最近已结束的直播的 feedId）
        /// </summary>
        public static void GetUserRecentGameLiveInfo(GetUserRecentGameLiveInfoOption option)
        {
            KSSDKManagerHandler.Instance.GetUserRecentGameLiveInfo(option);
        }

        /// <summary>
        /// 获取小游戏用户的已结束的直播数据
        /// 错误码：
        /// -10000400：参数无效；
        /// -10115001：存在未结束的直播
        /// encryptedData 解密后得到的数据结构：
        /// ```
        /// {
        ///  watermark: {
        ///      timestamp,
        ///      appid
        ///  },
        ///  liveInfoList: [{
        ///      feedId,                    // 直播id
        ///      description,               // 直播主题
        ///      startTime,                 // 开播时间戳
        ///      endTime,                   // 关播时间戳
        ///      totalCheerCount,           // 主播收到的喝彩总数
        ///      totalAudienceCount,        // 直播间总观众人数
        ///      liveDurationInSeconds      // 直播总时长
        ///  }]
        ///  }
        /// ```
        /// </summary>
        public static void GetUserGameLiveDetails(GetUserGameLiveDetailsOption option)
        {
            KSSDKManagerHandler.Instance.GetUserGameLiveDetails(option);
        }

        /// <summary>
        /// 支持打开当前游戏的直播专区
        /// 接口需要用户产生点击行为后才能调用,要在KS.OnTouchEnd事件中调用
        /// </summary>
        public static void OpenChannelsLiveCollection(OpenChannelsLiveCollectionOption option)
        {
            KSSDKManagerHandler.Instance.OpenChannelsLiveCollection(option);
        }

        /// <summary>
        /// 打开游戏内容页面
        /// </summary>
        public static void OpenPage(OpenPageOption option)
        {
            KSSDKManagerHandler.Instance.OpenPage(option);
        }

        /// <summary>
        /// 发起米大师支付
        /// </summary>
        public static void RequestMidasPaymentGameItem(RequestMidasPaymentGameItemOption option)
        {
            KSSDKManagerHandler.Instance.RequestMidasPaymentGameItem(option);
        }

        public static void RequestSubscribeLiveActivity(RequestSubscribeLiveActivityOption option)
        {
            KSSDKManagerHandler.Instance.RequestSubscribeLiveActivity(option);
        }

        /// <summary>
        /// 打开业务页面
        /// </summary>
        public static void OpenBusinessView(OpenBusinessViewOption option)
        {
            KSSDKManagerHandler.Instance.OpenBusinessView(option);
        }

        /// <summary>
        /// 解除锁定鼠标指针。此接口仅在 Windows、Mac 端支持。
        /// </summary>
        public static void ExitPointerLock()
        {
            KSSDKManagerHandler.Instance.ExitPointerLock();
        }

        /// <summary>
        /// 分享游戏对局回放。
        /// </summary>
        public static void OperateGameRecorderVideo(OperateGameRecorderVideoOption option)
        {
            KSSDKManagerHandler.Instance.OperateGameRecorderVideo(option);
        }

        /// <summary>
        /// removeStorage 的同步版本
        /// </summary>
        public static void RemoveStorageSync(string key)
        {
            KSSDKManagerHandler.Instance.RemoveStorageSync(key);
        }

        /// <summary>
        /// 事件上报
        /// </summary>
        public static void ReportEvent<T>(string eventId, T data)
        {
            KSSDKManagerHandler.Instance.ReportEvent(eventId, data);
        }

        /// <summary>
        /// 自定义业务数据监控上报接口。
        /// **使用说明**
        /// 使用前，需要在「小程序管理后台-运维中心-性能监控-业务数据监控」中新建监控事件，配置监控描述与告警类型。每一个监控事件对应唯一的监控ID，开发者最多可以创建128个监控事件。
        /// </summary>
        public static void ReportMonitor(string name, double value)
        {
            KSSDKManagerHandler.Instance.ReportMonitor(name, value);
        }

        /// <summary>
        /// 小程序测速上报。使用前，需要在小程序管理后台配置。
        /// </summary>
        public static void ReportPerformance(double id, double value, string dimensions)
        {
            KSSDKManagerHandler.Instance.ReportPerformance(id, value, dimensions);
        }

        /// <summary>
        /// 用于分支相关的UI组件（一般是按钮）相关事件的上报，事件目前有曝光、点击两种
        /// </summary>
        public static void ReportUserBehaviorBranchAnalytics(ReportUserBehaviorBranchAnalyticsOption option)
        {
            KSSDKManagerHandler.Instance.ReportUserBehaviorBranchAnalytics(option);
        }

        /// <summary>
        /// 锁定鼠标指针。锁定指针后，鼠标会被隐藏，可以通过 touchMove(#) 事件获取鼠标偏移量。 **此接口仅在 Windows、Mac 端支持，且必须在用户进行操作后才可调用。**
        /// </summary>
        public static void RequestPointerLock()
        {
            KSSDKManagerHandler.Instance.RequestPointerLock();
        }

        /// <summary>
        /// 预约视频号直播
        /// </summary>
        public static void ReserveChannelsLive(ReserveChannelsLiveOption option)
        {
            KSSDKManagerHandler.Instance.ReserveChannelsLive(option);
        }

        /// <summary>
        /// 根据 URL 销毁存在内存中的数据
        /// </summary>
        public static void RevokeBufferURL(string url)
        {
            KSSDKManagerHandler.Instance.RevokeBufferURL(url);
        }

        /// <summary>
        /// 可以修改渲染帧率。默认渲染帧率为 60 帧每秒。修改后，requestAnimationFrame 的回调频率会发生改变。
        /// </summary>
        public static void SetPreferredFramesPerSecond(double fps)
        {
            KSSDKManagerHandler.Instance.SetPreferredFramesPerSecond(fps);
        }

        /// <summary>
        /// 将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
        /// **注意**
        /// storage 应只用来进行数据的持久化存储，不应用于运行时的数据传递或全局状态管理。启动过程中过多的同步读写存储，会显著影响启动耗时。
        /// </summary>
        public static void SetStorageSync(string key, string data)
        {
            KSSDKManagerHandler.Instance.SetStorageSync(key, data);
        }

        /// <summary>
        ///  clearStorage 的同步版本
        /// </summary>
        public static void ClearStorageSync()
        {
            KSSDKManagerHandler.Instance.ClearStorageSync();
        }

        /// <summary>
        ///  清理本地数据缓存。
        /// </summary>
        public static void ClearStorage(ClearStorageOption option)
        {
            KSSDKManagerHandler.Instance.ClearStorage(option);
        }

        /// <summary>
        ///  将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容。除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
        /// </summary>
        public static void SetStorage(SetStorageOption option)
        {
            KSSDKManagerHandler.Instance.SetStorage(option);
        }

        /// <summary>
        /// 主动拉起转发，进入选择通讯录界面。
        /// </summary>
        public static void ShareAppMessage(ShareAppMessageOption option)
        {
            KSSDKManagerHandler.Instance.ShareAppMessage(option);
        }

        /// <summary>
        /// 加快触发 JavaScriptCore 垃圾回收（Garbage Collection）。GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。
        /// </summary>
        public static void TriggerGC()
        {
            KSSDKManagerHandler.Instance.TriggerGC();
        }

        /// <summary>
        /// 监听加速度数据事件。频率根据 startAccelerometer() 的 interval 参数, 接口调用后会自动开始监听。
        /// </summary>
        public static void OnAccelerometerChange(Action<OnAccelerometerChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnAccelerometerChange(result);
        }

        public static void OffAccelerometerChange(Action<OnAccelerometerChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffAccelerometerChange(result);
        }

        /// <summary>
        /// 监听音频因为受到系统占用而被中断开始事件。以下场景会触发此事件：闹钟、电话、FaceTime 通话、快手语音聊天、快手视频聊天、有声广告开始播放、实名认证页面弹出等。此事件触发后，小程序内所有音频会暂停。
        /// </summary>
        public static void OnAudioInterruptionBegin(Action<GeneralCallbackResult> res)
        {
            KSSDKManagerHandler.Instance.OnAudioInterruptionBegin(res);
        }

        public static void OffAudioInterruptionBegin(Action<GeneralCallbackResult> res)
        {
            KSSDKManagerHandler.Instance.OffAudioInterruptionBegin(res);
        }

        /// <summary>
        /// 监听音频中断结束事件。在收到 onAudioInterruptionBegin 事件之后，小程序内所有音频会暂停，收到此事件之后才可再次播放成功
        /// </summary>
        public static void OnAudioInterruptionEnd(Action<GeneralCallbackResult> res)
        {
            KSSDKManagerHandler.Instance.OnAudioInterruptionEnd(res);
        }

        public static void OffAudioInterruptionEnd(Action<GeneralCallbackResult> res)
        {
            KSSDKManagerHandler.Instance.OffAudioInterruptionEnd(res);
        }

        /// <summary>
        /// 监听蓝牙低功耗连接状态改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等
        /// </summary>
        public static void OnBLEConnectionStateChange(Action<OnBLEConnectionStateChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnBLEConnectionStateChange(result);
        }

        public static void OffBLEConnectionStateChange(Action<OnBLEConnectionStateChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffBLEConnectionStateChange(result);
        }

        /// <summary>
        /// 监听蓝牙低功耗的最大传输单元变化事件（仅安卓触发）。
        /// </summary>
        public static void OnBLEMTUChange(Action<OnBLEMTUChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnBLEMTUChange(result);
        }

        public static void OffBLEMTUChange(Action<OnBLEMTUChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffBLEMTUChange(result);
        }

        /// <summary>
        /// 监听当前外围设备被连接或断开连接事件
        /// </summary>
        public static void OnBLEPeripheralConnectionStateChanged(Action<OnBLEPeripheralConnectionStateChangedListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnBLEPeripheralConnectionStateChanged(result);
        }

        public static void OffBLEPeripheralConnectionStateChanged(Action<OnBLEPeripheralConnectionStateChangedListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffBLEPeripheralConnectionStateChanged(result);
        }

        /// <summary>
        /// 监听收到 backgroundFetch 数据事件。如果监听时请求已经完成，则事件不会触发。建议和 getBackgroundFetchData 配合使用
        /// </summary>
        public static void OnBackgroundFetchData(Action<OnBackgroundFetchDataListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnBackgroundFetchData(result);
        }


        /// <summary>
        /// 监听 Beacon 服务状态变化事件，仅能注册一个监听
        /// </summary>
        public static void OnBeaconServiceChange(Action<OnBeaconServiceChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnBeaconServiceChange(result);
        }

        public static void OffBeaconServiceChange(Action<OnBeaconServiceChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffBeaconServiceChange(result);
        }

        /// <summary>
        /// 监听 Beacon 设备更新事件，仅能注册一个监听
        /// </summary>
        public static void OnBeaconUpdate(Action<OnBeaconUpdateListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnBeaconUpdate(result);
        }

        public static void OffBeaconUpdate(Action<OnBeaconUpdateListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffBeaconUpdate(result);
        }

        /// <summary>
        /// 监听蓝牙适配器状态变化事件
        /// </summary>
        public static void OnBluetoothAdapterStateChange(Action<OnBluetoothAdapterStateChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnBluetoothAdapterStateChange(result);
        }

        public static void OffBluetoothAdapterStateChange(Action<OnBluetoothAdapterStateChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffBluetoothAdapterStateChange(result);
        }

        /// <summary>
        /// 监听搜索到新设备的事件
        /// **注意**
        /// - 若在 onBluetoothDeviceFound 接口获取到的数组中。
        /// **注意**
        /// - 蓝牙设备在被搜索到时，系统返回的 `name` 字段一般为广播包中的 `LocalName` 字段中的设备名称，而如果与蓝牙设备建立连接，系统返回的 `name` 字段会改为从蓝牙设备上获取到的 `GattName`。若需要动态改变设备名称并展示，建议使用 `localName` 字段。
        /// - 安卓下部分机型需要有位置权限才能搜索到设备，需留意是否开启了位置权限
        /// </summary>
        public static void OnBluetoothDeviceFound(Action<OnBluetoothDeviceFoundListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnBluetoothDeviceFound(result);
        }

        public static void OffBluetoothDeviceFound(Action<OnBluetoothDeviceFoundListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffBluetoothDeviceFound(result);
        }

        /// <summary>
        /// 监听罗盘数据变化事件。频率：5 次/秒，接口调用后会自动开始监听，可使用 stopCompass 停止监听。
        /// **accuracy 在 iOS/Android 的差异**
        /// 由于平台差异，accuracy 在 iOS/Android 的值不同。
        /// - iOS：accuracy 是一个 number 类型的值，表示相对于磁北极的偏差。0 表示设备指向磁北，90 表示指向东，180 表示指向南，依此类推。
        /// - Android：accuracy 是一个 string 类型的枚举值。
        /// 
        /// | 值              | 说明                                                                                   |
        /// | --------------- | -------------------------------------------------------------------------------------- |
        /// | high            | 高精度                                                                                 |
        /// | medium          | 中等精度                                                                               |
        /// | low             | 低精度                                                                                 |
        /// | no-contact      | 不可信，传感器失去连接                                                                 |
        /// | unreliable      | 不可信，原因未知                                                                       |
        /// | unknow ${value} | 未知的精度枚举值，即该 Android 系统此时返回的表示精度的 value 不是一个标准的精度枚举值 |
        /// </summary>
        public static void OnCompassChange(Action<OnCompassChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnCompassChange(result);
        }

        public static void OffCompassChange(Action<OnCompassChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffCompassChange(result);
        }

        /// <summary>
        /// 监听设备方向变化事件。频率根据 startDeviceMotionListening() 停止监听。
        /// </summary>
        public static void OnDeviceMotionChange(Action<OnDeviceMotionChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnDeviceMotionChange(result);
        }

        public static void OffDeviceMotionChange(Action<OnDeviceMotionChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffDeviceMotionChange(result);
        }

        /// <summary>
        /// 监听屏幕转向切换事件
        /// 
        /// **注意事项**
        /// - 在基础库 v2.26.0 之前，onDeviceOrientationChange 只监听左横屏和右横屏之间切换的事件，且仅在 game.json 中配置 deviceOrientation 的值为 landscape 时生效。
        /// - 从基础库 v2.26.0 开始，onDeviceOrientationChange 会同时监听通过 setDeviceOrientation 接口切换横竖屏的事件。
        /// </summary>
        public static void OnDeviceOrientationChange(Action<OnDeviceOrientationChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnDeviceOrientationChange(result);
        }

        public static void OffDeviceOrientationChange(Action<OnDeviceOrientationChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffDeviceOrientationChange(result);
        }

        /// <summary>
        /// 监听全局错误事件
        /// </summary>
        public static void OnError(Action<Error> error)
        {
            KSSDKManagerHandler.Instance.OnError(error);
        }

        public static void OffError(Action<Error> error)
        {
            KSSDKManagerHandler.Instance.OffError(error);
        }

        /// <summary>
        /// 监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。
        /// </summary>
        public static void OnHide(Action res)
        {
            KSSDKManagerHandler.Instance.OnHide(res);
        }

        public static void OffHide(Action res)
        {
            KSSDKManagerHandler.Instance.OffHide(res);
        }

        /// <summary>
        /// 监听成功修改好友的互动型托管数据事件，该接口在游戏主域使用
        /// </summary>
        public static void OnInteractiveStorageModified(Action<string> res)
        {
            KSSDKManagerHandler.Instance.OnInteractiveStorageModified(res);
        }

        public static void OffInteractiveStorageModified(Action<string> res)
        {
            KSSDKManagerHandler.Instance.OffInteractiveStorageModified(res);
        }

        /// <summary>
        /// 监听键盘按键按下事件，仅适用于 PC 平台
        /// </summary>
        public static void OnKeyDown(Action<OnKeyDownListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnKeyDown(result);
        }

        public static void OffKeyDown(Action<OnKeyDownListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffKeyDown(result);
        }

        /// <summary>
        /// 监听键盘按键弹起事件，仅适用于 PC 平台
        /// </summary>
        public static void OnKeyUp(Action<OnKeyDownListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnKeyUp(result);
        }

        public static void OffKeyUp(Action<OnKeyDownListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffKeyUp(result);
        }

        /// <summary>
        /// 监听监听键盘收起的事件
        /// </summary>
        public static void OnKeyboardComplete(Action<OnKeyboardInputListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnKeyboardComplete(result);
        }

        public static void OffKeyboardComplete(Action<OnKeyboardInputListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffKeyboardComplete(result);
        }

        /// <summary>
        /// 监听用户点击键盘 Confirm 按钮时的事件
        /// </summary>
        public static void OnKeyboardConfirm(Action<OnKeyboardInputListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnKeyboardConfirm(result);
        }

        public static void OffKeyboardConfirm(Action<OnKeyboardInputListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffKeyboardConfirm(result);
        }

        /// <summary>
        /// 监听键盘高度变化事件
        /// </summary>
        public static void OnKeyboardHeightChange(Action<OnKeyboardHeightChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnKeyboardHeightChange(result);
        }

        public static void OffKeyboardHeightChange(Action<OnKeyboardHeightChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffKeyboardHeightChange(result);
        }

        /// <summary>
        /// 监听键盘输入事件
        /// </summary>
        public static void OnKeyboardInput(Action<OnKeyboardInputListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnKeyboardInput(result);
        }

        public static void OffKeyboardInput(Action<OnKeyboardInputListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffKeyboardInput(result);
        }

        /// <summary>
        /// 监听内存不足告警事件。
        /// 当 iOS/Android 向小程序进程发出内存警告时，触发该事件。触发该事件不意味小程序被杀，大部分情况下仅仅是告警，开发者可在收到通知后回收一些不必要资源避免进一步加剧内存紧张。
        /// </summary>
        public static void OnMemoryWarning(Action<OnMemoryWarningListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnMemoryWarning(result);
        }

        public static void OffMemoryWarning(Action<OnMemoryWarningListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffMemoryWarning(result);
        }

        /// <summary>
        /// 监听主域发送的消息
        /// </summary>
        public static void OnMessage(Action<string> res)
        {
            KSSDKManagerHandler.Instance.OnMessage(res);
        }


        /// <summary>
        /// 监听鼠标按键按下事件
        /// </summary>
        public static void OnMouseDown(Action<OnMouseDownListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnMouseDown(result);
        }

        public static void OffMouseDown(Action<OnMouseDownListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffMouseDown(result);
        }

        /// <summary>
        /// 监听鼠标移动事件
        /// </summary>
        public static void OnMouseMove(Action<OnMouseMoveListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnMouseMove(result);
        }

        public static void OffMouseMove(Action<OnMouseMoveListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffMouseMove(result);
        }

        /// <summary>
        /// 监听鼠标按键弹起事件
        /// </summary>
        public static void OnMouseUp(Action<OnMouseDownListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnMouseUp(result);
        }

        public static void OffMouseUp(Action<OnMouseDownListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffMouseUp(result);
        }

        /// <summary>
        /// 监听网络状态变化事件
        /// </summary>
        public static void OnNetworkStatusChange(Action<OnNetworkStatusChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnNetworkStatusChange(result);
        }

        public static void OffNetworkStatusChange(Action<OnNetworkStatusChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffNetworkStatusChange(result);
        }

        /// <summary>
        /// 监听弱网状态变化事件
        /// </summary>
        public static void OnNetworkWeakChange(Action<OnNetworkWeakChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnNetworkWeakChange(result);
        }

        public static void OffNetworkWeakChange(Action<OnNetworkWeakChangeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffNetworkWeakChange(result);
        }

        /// <summary>
        /// 监听用户录屏事件。
        /// </summary>
        public static void OnScreenRecordingStateChanged(Action<OnScreenRecordingStateChangedListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnScreenRecordingStateChanged(result);
        }

        public static void OffScreenRecordingStateChanged(Action<OnScreenRecordingStateChangedListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffScreenRecordingStateChanged(result);
        }

        /// <summary>
        /// 监听主域接收`shareMessageToFriend`接口的成功失败通知事件
        /// </summary>
        public static void OnShareMessageToFriend(Action<OnShareMessageToFriendListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnShareMessageToFriend(result);
        }

        /// <summary>
        /// 监听小游戏回到前台的事件
        /// </summary>
        public static void OnShow(Action<OnShowListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnShow(result);
        }

        public static void OffShow(Action<OnShowListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffShow(result);
        }

        /// <summary>
        /// 监听未处理的 Promise 拒绝事件
        /// **注意**
        /// 安卓平台暂时不会派发该事件
        /// </summary>
        public static void OnUnhandledRejection(Action<OnUnhandledRejectionListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnUnhandledRejection(result);
        }

        public static void OffUnhandledRejection(Action<OnUnhandledRejectionListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffUnhandledRejection(result);
        }

        /// <summary>
        /// 监听用户主动截屏事件。用户使用系统截屏按键截屏时触发，只能注册一个监听
        /// </summary>
        public static void OnUserCaptureScreen(Action<GeneralCallbackResult> res)
        {
            KSSDKManagerHandler.Instance.OnUserCaptureScreen(res);
        }

        public static void OffUserCaptureScreen(Action<GeneralCallbackResult> res)
        {
            KSSDKManagerHandler.Instance.OffUserCaptureScreen(res);
        }

        /// <summary>
        /// 监听被动断开实时语音通话事件。包括小游戏切入后端时断开
        /// </summary>
        public static void OnVoIPChatInterrupted(Action<OnVoIPChatInterruptedListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnVoIPChatInterrupted(result);
        }

        public static void OffVoIPChatInterrupted(Action<OnVoIPChatInterruptedListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffVoIPChatInterrupted(result);
        }

        /// <summary>
        /// 监听实时语音通话成员在线状态变化事件。有成员加入/退出通话时触发回调
        /// </summary>
        public static void OnVoIPChatMembersChanged(Action<OnVoIPChatMembersChangedListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnVoIPChatMembersChanged(result);
        }

        public static void OffVoIPChatMembersChanged(Action<OnVoIPChatMembersChangedListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffVoIPChatMembersChanged(result);
        }

        /// <summary>
        /// 监听实时语音通话成员通话状态变化事件。有成员开始/停止说话时触发回调
        /// </summary>
        public static void OnVoIPChatSpeakersChanged(Action<OnVoIPChatSpeakersChangedListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnVoIPChatSpeakersChanged(result);
        }

        public static void OffVoIPChatSpeakersChanged(Action<OnVoIPChatSpeakersChangedListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffVoIPChatSpeakersChanged(result);
        }

        /// <summary>
        /// 监听房间状态变化事件。
        /// </summary>
        public static void OnVoIPChatStateChanged(Action<OnVoIPChatStateChangedListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnVoIPChatStateChanged(result);
        }

        public static void OffVoIPChatStateChanged(Action<OnVoIPChatStateChangedListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffVoIPChatStateChanged(result);
        }

        /// <summary>
        /// 监听鼠标滚轮事件
        /// </summary>
        public static void OnWheel(Action<OnWheelListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnWheel(result);
        }

        public static void OffWheel(Action<OnWheelListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffWheel(result);
        }

        /// <summary>
        /// 监听窗口尺寸变化事件
        /// </summary>
        public static void OnWindowResize(Action<OnWindowResizeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OnWindowResize(result);
        }

        public static void OffWindowResize(Action<OnWindowResizeListenerResult> result)
        {
            KSSDKManagerHandler.Instance.OffWindowResize(result);
        }

        /// <summary>
        /// 监听用户点击关闭按钮事件
        /// </summary>
        public static void OnClickCloseButtonAction(Action<GeneralCallbackResult> result)
        {
            KSSDKManagerHandler.Instance.OnClickCloseButtonAction(result);
        }

        public static void OffClickCloseButtonAction(Action<GeneralCallbackResult> result)
        {
            KSSDKManagerHandler.Instance.OffClickCloseButtonAction(result);
        }

        /// <summary>
        /// 监听用户点击菜单「收藏」按钮时触发的事件
        /// </summary>
        public static void OnAddToFavorites(Action<Action<OnAddToFavoritesListenerResult>> callback)
        {
            KSSDKManagerHandler.Instance.OnAddToFavorites(callback);
        }

        public static void OffAddToFavorites(Action<Action<OnAddToFavoritesListenerResult>> callback = null)
        {
            KSSDKManagerHandler.Instance.OffAddToFavorites(callback);
        }

        /// <summary>
        /// 监听用户点击右上角菜单的「复制链接」按钮时触发的事件。本接口为 Beta 版本，暂只在 Android 平台支持。
        /// </summary>
        public static void OnCopyUrl(Action<Action<OnCopyUrlListenerResult>> callback)
        {
            KSSDKManagerHandler.Instance.OnCopyUrl(callback);
        }

        public static void OffCopyUrl(Action<Action<OnCopyUrlListenerResult>> callback = null)
        {
            KSSDKManagerHandler.Instance.OffCopyUrl(callback);
        }

        /// <summary>
        /// 监听用户点击菜单「在电脑上打开」按钮时触发的事件
        /// </summary>
        public static void OnHandoff(Action<Action<OnHandoffListenerResult>> callback)
        {
            KSSDKManagerHandler.Instance.OnHandoff(callback);
        }

        public static void OffHandoff(Action<Action<OnHandoffListenerResult>> callback = null)
        {
            KSSDKManagerHandler.Instance.OffHandoff(callback);
        }

        /// <summary>
        /// 监听用户点击右上角菜单的「分享到朋友圈」按钮时触发的事件。本接口为 Beta 版本，暂只在 Android 平台支持。
        /// </summary>
        public static void OnShareTimeline(Action<Action<OnShareTimelineListenerResult>> callback)
        {
            KSSDKManagerHandler.Instance.OnShareTimeline(callback);
        }

        public static void OffShareTimeline(Action<Action<OnShareTimelineListenerResult>> callback = null)
        {
            KSSDKManagerHandler.Instance.OffShareTimeline(callback);
        }

        /// <summary>
        /// 监听小游戏直播状态变化事件
        /// </summary>
        public static void OnGameLiveStateChange(Action<OnGameLiveStateChangeCallbackResult, Action<OnGameLiveStateChangeCallbackResponse>> callback)
        {
            KSSDKManagerHandler.Instance.OnGameLiveStateChange(callback);
        }

        public static void OffGameLiveStateChange(Action<OnGameLiveStateChangeCallbackResult, Action<OnGameLiveStateChangeCallbackResponse>> callback = null)
        {
            KSSDKManagerHandler.Instance.OffGameLiveStateChange(callback);
        }

        /// <summary>
        /// 设置接力参数，该接口需要在游戏域调用
        /// </summary>
        public static bool SetHandoffQuery(string query)
        {
            return KSSDKManagerHandler.Instance.SetHandoffQuery(query);
        }

        /// <summary>
        /// 获取当前账号信息。线上小程序版本号仅支持在正式版小程序中获取，开发版和体验版中无法获取。
        /// </summary>
        public static AccountInfo GetAccountInfoSync()
        {
            return KSSDKManagerHandler.Instance.GetAccountInfoSync();
        }

        /// <summary>
        /// 获取快手APP授权设置
        /// **返回值说明**
        /// `'authorized'` 表示已经获得授权，无需再次请求授权；
        /// `'denied'` 表示请求授权被拒绝，无法再次请求授权；（此情况需要引导用户打开系统设置，在设置页中打开权限）
        /// `'non determined'` 表示尚未请求授权，会在快手下一次调用系统相应权限时请求；（仅 iOS 会出现。此种情况下引导用户打开系统设置，不展示开关）
        /// </summary>
        public static AppAuthorizeSetting GetAppAuthorizeSetting()
        {
            return KSSDKManagerHandler.Instance.GetAppAuthorizeSetting();
        }

        /// <summary>
        /// 获取快手APP基础信息
        /// </summary>
        public static AppBaseInfo GetAppBaseInfo()
        {
            return KSSDKManagerHandler.Instance.GetAppBaseInfo();
        }

        /// <summary>
        /// getBatteryInfo 的同步版本
        /// </summary>
        public static GetBatteryInfoSyncResult GetBatteryInfoSync()
        {
            return KSSDKManagerHandler.Instance.GetBatteryInfoSync();
        }

        /// <summary>
        /// 获取设备基础信息
        /// </summary>
        public static DeviceInfo GetDeviceInfo()
        {
            return KSSDKManagerHandler.Instance.GetDeviceInfo();
        }

        /// <summary>
        /// 获取小游戏打开的参数（包括冷启动和热启动）
        /// **返回有效 referrerInfo 的场景**
        /// | 场景值 | 场景                            | appId含义  |
        /// | ------ | ------------------------------- | ---------- |
        /// | 1020   | 公众号 profile 页相关小程序列表 | 来源公众号 |
        /// | 1035   | 公众号自定义菜单                | 来源公众号 |
        /// | 1036   | App 分享消息卡片                | 来源App    |
        /// | 1037   | 小程序打开小程序                | 来源小程序 |
        /// | 1038   | 从另一个小程序返回              | 来源小程序 |
        /// | 1043   | 公众号模板消息                  | 来源公众号 |
        /// 
        /// **不同 apiCategory 场景下的 API 限制**
        /// `X` 表示 API 被限制无法使用；不在表格中的 API 不限制。
        /// 
        /// |                                       | default | nativeFunctionalized | browseOnly | embedded |
        /// |-|-|-|-|-|
        /// |navigateToMiniProgram                  |         | `X`                  | `X`        |          |
        /// |openSetting                            |         |                      | `X`        |          |
        /// |&lt;button open-type="share"&gt;       |         | `X`                  | `X`        | `X`      |
        /// |&lt;button open-type="feedback"&gt;    |         |                      | `X`        |          |
        /// |&lt;button open-type="open-setting"&gt;|         |                      | `X`        |          |
        /// |openEmbeddedMiniProgram                |         | `X`                  | `X`        | `X`      |
        /// 
        /// **注意**
        /// 部分版本在无`referrerInfo`的时候会返回 `undefined`，建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。
        /// </summary>
        public static EnterOptionsGame GetEnterOptionsSync()
        {
            return KSSDKManagerHandler.Instance.GetEnterOptionsSync();
        }

        /// <summary>
        /// 给定实验参数数组，获取对应的实验参数值
        /// **提示**
        /// 假设实验参数有 `color`, `size`
        /// 调用 getExptInfoSync() 会返回 `{color:'#fff',size:20}` 类似的结果
        /// 而 getExptInfoSync(['color']) 则只会返回 `{color:'#fff'}`
        /// </summary>
        public static T GetExptInfoSync<T>(string[] keys)
        {
            return KSSDKManagerHandler.Instance.GetExptInfoSync<T>(keys);
        }

        /// <summary>
        /// getExtConfig 的同步版本。
        /// **Tips**
        /// 1. 本接口暂时无法通过 canIUse(#) 判断是否兼容，开发者需要自行判断 getExtConfigSync 是否存在来兼容
        /// </summary>
        public static T GetExtConfigSync<T>()
        {
            return KSSDKManagerHandler.Instance.GetExtConfigSync<T>();
        }

        /// <summary>
        /// ks.getStorage 的同步版本
        /// </summary>
        public static string GetStorageSync(string key)
        {
            return KSSDKManagerHandler.Instance.GetStorageSync(key);
        }

        /// <summary>
        /// 从本地缓存中异步获取指定 key 的内容
        /// </summary>
        public static void GetStorage(GetStorageOption option)
        {
            KSSDKManagerHandler.Instance.GetStorage(option);
        }

        /// <summary>
        /// 获取小游戏冷启动时的参数。热启动参数通过 onShow 接口获取。
        /// **返回有效 referrerInfo 的场景**
        /// 
        /// | 场景值 | 场景                            | appId含义  |
        /// | ------ | ------------------------------- | ---------- |
        /// | 1020   | 公众号 profile 页相关小程序列表 | 来源公众号 |
        /// | 1035   | 公众号自定义菜单                | 来源公众号 |
        /// | 1036   | App 分享消息卡片                | 来源App    |
        /// | 1037   | 小程序打开小程序                | 来源小程序 |
        /// | 1038   | 从另一个小程序返回              | 来源小程序 |
        /// | 1043   | 公众号模板消息                  | 来源公众号 |
        /// 
        /// **注意**
        /// 部分版本在无`referrerInfo`的时候会返回 `undefined`，
        /// 建议使用 `options.referrerInfo && options.referrerInfo.appId` 进行判断。
        /// </summary>
        public static LaunchOptionsGame GetLaunchOptionsSync()
        {
            return KSSDKManagerHandler.Instance.GetLaunchOptionsSync();
        }

        /// <summary>
        /// 获取菜单按钮（右上角胶囊按钮）的布局位置信息。坐标信息以屏幕左上角为原点。
        /// </summary>
        public static ClientRect GetMenuButtonBoundingClientRect()
        {
            return KSSDKManagerHandler.Instance.GetMenuButtonBoundingClientRect();
        }

        /// <summary>
        /// getStorageInfo 的同步版本
        /// </summary>
        public static GetStorageInfoSyncOption GetStorageInfoSync()
        {
            return KSSDKManagerHandler.Instance.GetStorageInfoSync();
        }

        /// <summary>
        /// getSystemInfo 的同步版本
        /// </summary>
        public static SystemInfo GetSystemInfoSync()
        {
            return KSSDKManagerHandler.Instance.GetSystemInfoSync();
        }

        /// <summary>
        /// 获取设备设置
        /// </summary>
        public static SystemSetting GetSystemSetting()
        {
            return KSSDKManagerHandler.Instance.GetSystemSetting();
        }

        /// <summary>
        /// 获取窗口信息
        /// </summary>
        public static WindowInfo GetWindowInfo()
        {
            return KSSDKManagerHandler.Instance.GetWindowInfo();
        }

        /// <summary>
        /// 创建一个 ImageData 图片数据对象
        /// </summary>
        public static ImageData CreateImageData()
        {
            return KSSDKManagerHandler.Instance.CreateImageData();
        }

        /// <summary>
        /// 创建一个 Path2D 路径对象
        /// </summary>
        public static Path2D CreatePath2D()
        {
            return KSSDKManagerHandler.Instance.CreatePath2D();
        }

        /// <summary>
        /// 检查鼠标指针是否被锁定。此接口仅在 Windows、Mac 端支持。
        /// </summary>
        public static bool IsPointerLocked()
        {
            return KSSDKManagerHandler.Instance.IsPointerLocked();
        }

        /// <summary>
        /// 判断支持版本
        /// </summary>
        public static bool IsVKSupport(string version)
        {
            return KSSDKManagerHandler.Instance.IsVKSupport(version);
        }

        /// <summary>
        /// 加载自定义光标，仅支持 PC 平台
        /// **注意**
        /// - 传入图片太大可能会导致设置无效，推荐图标大小 32x32
        /// - 基础库 v2.16.0 后，支持更多图片格式以及关键字种类（参考 CSS 标准）
        /// </summary>
        public static bool SetCursor(string path, double x, double y)
        {
            return KSSDKManagerHandler.Instance.SetCursor(path, x, y);
        }

        /// <summary>
        /// 设置 shareMessageToFriend 接口 query 字段的值
        /// </summary>
        public static bool SetMessageToFriendQuery(SetMessageToFriendQueryOption option)
        {
            return KSSDKManagerHandler.Instance.SetMessageToFriendQuery(option);
        }

        /// <summary>
        /// 获取一行文本的行高
        /// </summary>
        public static double GetTextLineHeight(GetTextLineHeightOption option)
        {
            return KSSDKManagerHandler.Instance.GetTextLineHeight(option);
        }

        /// <summary>
        /// 加载自定义字体文件
        /// </summary>
        public static string LoadFont(string path)
        {
            return KSSDKManagerHandler.Instance.LoadFont(path);
        }

        /// <summary>
        /// 查询当前直播状态
        /// </summary>
        public static GameLiveState GetGameLiveState()
        {
            return KSSDKManagerHandler.Instance.GetGameLiveState();
        }

        /// <summary>
        /// 下载文件资源到本地。客户端直接发起一个 HTTPS GET 请求，返回文件的本地临时路径 (本地路径)，单次下载允许的最大文件为 200MB。
        /// 注意：请在服务端响应的 header 中指定合理的 `Content-Type` 字段，以保证客户端正确处理文件类型。
        /// </summary>
        public static KSDownloadTask DownloadFile(DownloadFileOption option)
        {
            return KSSDKManagerHandler.Instance.DownloadFile(option);
        }

        /// <summary>
        /// 创建打开意见反馈页面的按钮
        /// </summary>
        public static KSFeedbackButton CreateFeedbackButton(CreateOpenSettingButtonOption option)
        {
            return KSSDKManagerHandler.Instance.CreateFeedbackButton(option);
        }

        /// <summary>
        /// 获取日志管理器对象。
        /// </summary>
        public static KSLogManager GetLogManager(GetLogManagerOption option)
        {
            return KSSDKManagerHandler.Instance.GetLogManager(option);
        }

        /// <summary>
        /// 获取实时日志管理器对象。
        /// </summary>
        public static KSRealtimeLogManager GetRealtimeLogManager()
        {
            return KSSDKManagerHandler.Instance.GetRealtimeLogManager();
        }

        /// <summary>
        /// 获取**全局唯一**的版本更新管理器，用于管理小程序更新。关于小程序的更新机制。
        /// </summary>
        public static KSUpdateManager GetUpdateManager()
        {
            return KSSDKManagerHandler.Instance.GetUpdateManager();
        }

        /// <summary>
        /// 创建视频解码器，可逐帧获取解码后的数据
        /// </summary>
        public static KSVideoDecoder CreateVideoDecoder()
        {
            return KSSDKManagerHandler.Instance.CreateVideoDecoder();
        }

        /// <summary>
        /// 添加小游戏快捷方式到手机桌面上
        /// </summary>
        public static void AddShortcut(AddShortcutOption option)
        {
            KSSDKManagerHandler.Instance.AddShortcut(option);
        }

        /// <summary>
        /// 检查小游戏快捷方式是否已添加到手机桌面上，仅 Android 支持
        /// </summary>
        public static void CheckShortcut(CheckShortcutOption option)
        {
            KSSDKManagerHandler.Instance.CheckShortcut(option);
        }

        /// <summary>
        /// 判断小游戏是否从手机桌面快捷方式启动
        /// </summary>
        public static bool IsLaunchFromShortcut()
        {
            return KSSDKManagerHandler.Instance.IsLaunchFromShortcut();
        }

        /// <summary>
        /// 判断侧边栏是否可用
        /// </summary>
        public static void CheckSliderBarIsAvailable(CheckSliderBarIsAvailableOption option)
        {
            KSSDKManagerHandler.Instance.CheckSliderBarIsAvailable(option);
        }

        /// <summary>
        /// 查看关注官方帐号状态
        /// </summary>
        public static void CheckFollowState(CheckFollowStateOption option)
        {
            KSSDKManagerHandler.Instance.CheckFollowState(option);
        }

        /// <summary>
        /// 打开官方帐号profile
        /// </summary>
        public static void OpenUserProfile(OpenUserProfileOption option)
        {
            KSSDKManagerHandler.Instance.OpenUserProfile(option);
        }

        /// <summary>
        /// 支付接口
        /// </summary>
        public static void RequestGamePayment(RequestGamePaymentOption option)
        {
            KSSDKManagerHandler.Instance.RequestGamePayment(option);
        }

        /// <summary>
        /// 跳转到某个小游戏入口场景
        /// </summary>
        public static void NavigateToScene(NavigateToSceneOption option)
        {
            KSSDKManagerHandler.Instance.NavigateToScene(option);
        }

        /// <summary>
        /// 从相册上传视频/图片信息
        /// </summary>
        public static void ChooseVideoAndPublish(ChooseVideoAndPublishOption option)
        {
            KSSDKManagerHandler.Instance.ChooseVideoAndPublish(option);
        }

        /// <summary>
        /// 图片分享至游戏圈
        /// </summary>
        public static void ShareImageToGameClub(ShareImageToGameClubOption option)
        {
            KSSDKManagerHandler.Instance.ShareImageToGameClub(option);
        }

        /// <summary>
        /// 跳转到游戏圈
        /// </summary>
        public static void JumpToGameClub(JumpToGameClubOption option)
        {
            KSSDKManagerHandler.Instance.JumpToGameClub(option);
        }

        /// <summary>
        /// 支持用户在游戏内将小游戏设为常用
        /// </summary>
        public static void AddCommonUse(AddCommonUseOption option)
        {
            KSSDKManagerHandler.Instance.AddCommonUse(option);
        }

        /// <summary>
        /// 检查用户是否已经将小游戏设为常用
        /// </summary>
        public static void CheckCommonUse(CheckCommonUseOption option)
        {
            KSSDKManagerHandler.Instance.CheckCommonUse(option);
        }

        public static void OpenUrl(OpenUrlOption option)
        {
            KSSDKManagerHandler.Instance.OpenUrl(option);
        }

        public static void NotifyMiniProgramPlayableStatus(NotifyMiniProgramPlayableStatusOption option)
        {
            KSSDKManagerHandler.Instance.NotifyMiniProgramPlayableStatus(option);
        }
    }
}
