
Page({
  data: {
    position: "我的位置",
    destination: "长沙火车站",
    logs: [
      {
        time: '1小时7分',
        far: '686米',
        name: '立珊专线',
        stations: 14,
        money: 2,
        on: "磨子山站"
      },
      {
        time: '1小时12分',
        far: '784米',
        name: '旅1路',
        stations: 18,
        money: 2,
        on: "磨子山站"
      },
      {
        time: '1小时7分',
        far: '1.2公里',
        name: '908区间线/902路',
        boolean: true,
        tran: "2号线",
        stations: 21,
        money: 2,
        on: "磨子山站"
      },
      {
        time: '1小时15分',
        far: '1.2公里',
        name: '311路',
        stations: 21,
        money: 2,
        on: "磨子山站"
      },
      {
        time: '1小时9分',
        far: '1.5公里',
        name: '5路',
        boolean: true,
        tran: "2号线",
        stations: 15,
        money: 4,
        on: "中南大学站"
      },
    ]
  },

  onLoad: function () {
    
  },

  showTomap: function(){
    wx.navigateTo({
      url: '../map/map',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  showList: function(evt){
    wx.navigateTo({
      url: '../stationList/stationList?id=' + evt.currentTarget.id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

})
