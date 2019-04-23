//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onShow: function () {
    console.log('从后台进入前台');
  },
  globalData: {
      userInfo: null,
    History: [{ value: 'a', sced: 0, imgurl: "../../images/sc.png" },
      { value: 'b', sced: 0, imgurl: "../../images/sc.png" },
      { value: 'c', sced: 0, imgurl: "../../images/sc.png" },
      { value: 'd', sced: 0, imgurl: "../../images/sc.png" },
      { value: 'e', sced: 0, imgurl: "../../images/sc.png" },
      { value: 'f', sced: 0, imgurl: "../../images/sc.png" },
      { value: 'g', sced: 0, imgurl: "../../images/sc.png" },
      { value: 'h', sced: 0, imgurl: "../../images/sc.png" },
      { value: 'i', sced: 0, imgurl: "../../images/sc.png" },
      { value: 'j', sced: 0, imgurl: "../../images/sc.png" },
      { value: 'k', sced: 0, imgurl: "../../images/sc.png" },
      { value: 'l', sced: 0, imgurl: "../../images/sc.png" },
      { value: 'm', sced: 0, imgurl: "../../images/sc.png" },
      { value: 'n', sced: 0, imgurl: "../../images/sc.png" }],
      Collect: []
  }
})