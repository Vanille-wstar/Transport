//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    addflag: true, //判断是否显示搜索框右侧部分
    addimg: '../../images/activity_add.png',
    searchstr: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),


    onLoad() {



    },
    onShow() {

    },

    tap(e) {

    },
    // 搜索框右侧 事件
    addhandle() {
      console.log('触发搜索框右侧事件')
    },

    //搜索框输入时触发
    searchList(ev) {
      let e = ev.detail;
      this.setData({
        searchstr: e.detail.value
      })
    },
    //搜索回调
    endsearchList(e) {
      console.log('查询数据')
    },
    // 取消搜索
    cancelsearch() {
      this.setData({
        searchstr: ''
      })
    },
    //清空搜索框
    activity_clear(e) {

      this.setData({
        searchstr: ''
      })
    },


    //事件处理函数
    bindViewTap: function() {
      wx.navigateTo({
        url: '../logs/logs'
      })
    },
    onLoad: function() {
      if (app.globalData.userInfo) {
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      } else if (this.data.canIUse) {
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
    },
    getUserInfo: function(e) {
      console.log(e)
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    },
    jumpPage: function() {
      wx.navigateTo({
        url: '../../pay/index',
      })
    },
       suo: function(e) {
      wx.navigateTo({
        url: '../pay/index',
      })
    },
    bindInput: function(e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
    setSearchStorage: function() {
      let data;
      let localStorageValue = [];
      if (this.data.inputValue != '') {
        //调用API从本地缓存中获取数据
        var searchData = wx.getStorageSync('searchData') || []
        searchData.push(this.data.inputValue)
        wx.setStorageSync('searchData', searchData)
        wx.navigateTo({
          url: '../result/result'
        })
      }
    }
  },
  jumpPage: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  jumpPageTo: function () {
    wx.navigateTo({
      url: '../pay/index',
    })
  }
})

