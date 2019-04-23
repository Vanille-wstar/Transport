// pages/stationList/stationList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title_bus_name:"当前公交车",
    title_bus_info:"当前公交车信息",
    title: [
      {
        bus_name:"立珊专线",
        bus_info: "1小时7分•14站•步行686米•2元"
      },
      {
        bus_name: "旅1路",
        bus_info: "1小时12分•18站•步行784米•2元"
      },
      {
        bus_name: "908区间线/902路",
        bus_info: "1小时7分•21站•步行1.2公里•2元"
      },
      {
        bus_name: "311路",
        bus_info: "1小时15分•21站•步行1.2公里•2元"
      },
      {
        bus_name: "5路->2号线",
        bus_info: "1小时9分•15站•步行1.5公里•4元"
      }
    ],
    items: [
      {
        start_station: true,
        stations: '中南大学升华学生公寓'
      },
      {
        stations: '淹鱼塘'
      },
      {
        on_station: true,
        stations: '磨子山站'
      },
      {
        stations: '中南大学'
      },
      {
        stations: '左家陇西'
      },
      {
        stations: '八字墙'
      },
      {
        stations: '渔湾市'
      },
      {
        now: true,
        stations: '桃子湖'
      },
      {
        stations: '湖南大学'
      },
      {
        stations: '桃子湖路口'
      },
      {
        stations: '新民学会旧址'
      },
      {
        destination_station: true,
        stations: '太平街口'
      },
      {
        stations: '南阳街口'
      },
      {
        stations: '韭菜园'
      },
      {
        stations: '曙光路口'
      },
      {
        stations: '长岛路口'
      },
      {
        end_station: true,
        stations: '长沙火车站'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title_bus_name: (this.data.title)[parseInt(options.id)].bus_name,
      title_bus_info: (this.data.title)[parseInt(options.id)].bus_info
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})