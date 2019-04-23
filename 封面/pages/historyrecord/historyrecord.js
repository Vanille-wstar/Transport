var app = getApp()
Page({
  data: {
    // tab切换
    currentTab: 0,
    history: null,
    collect: null
  },
  //showok: function () {

  //})
  //},
  swichNav: function (e) {
    console.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },

  swiperChange: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.detail.current,
    })
  },

  collect_click: function ({ currentTarget: { dataset } }) {
    var index = dataset.selectedId;
    var cur_value = dataset.value;
    var sced = 'history[' + index + '].sced';
    var imgurl = 'history[' + index + '].imgurl';
    if (dataset.sced == 0) {
      this.setData({ [sced]: 1, [imgurl]: "../../images/sced.png" });
      this.data.collect.push({ value: cur_value, sced: 1, imgurl: "../../images/sced.png" });
      this.setData({ collect: this.data.collect });
    }
    else {
      this.setData({ [sced]: 0, [imgurl]: "../../images/sc.png" });
      var num;
      const length = this.data.collect.length;
      for (let i = 0; i < length; i++) {
        if (this.data.collect[i].value == cur_value) {
          num = i;
          break;
        }
      }
      this.data.collect.splice(num, 1);
      this.setData({ collect: this.data.collect });
    }
    wx.showToast({
      title: '收藏成功',
      icon: 'success',
      duration: 1000
    })
  },

  cancel_collect({ currentTarget: { dataset } }) {
    var cur_value = dataset.value;
    var index = dataset.selectedId;
    this.data.collect.splice(index, 1);
    this.setData({ collect: this.data.collect });
    var num;
    const length = this.data.history.length;
    for (let i = 0; i < length; i++) {
      if (this.data.history[i].value == cur_value) {
        num = i;
        break;
      }
    }
    var sced = 'history[' + num + '].sced';
    var imgurl = 'history[' + num + '].imgurl';
    this.setData({ [sced]: 0, [imgurl]: "../../images/sc.png" });
    wx.showToast({
      title: '取消成功',
      icon: 'success',
      duration: 1000
    })
  },

  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    this.setData({
      history: app.globalData.History,
      collect: app.globalData.Collect
    })
  },

  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
  },

  onShow: function () {
    // 生命周期函数--监听页面显示
  },

  onHide: function () {
    // 生命周期函数--监听页面隐藏
  },

  onUnload: function () {
    // 生命周期函数--监听页面卸载
  },

  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
  },

  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
  },

  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})
