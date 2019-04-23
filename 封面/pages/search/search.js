//index.js
//获取应用实例
var bol=true;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    click: bol,
    //首页搜索导航数据
    navList:[]
  },

  change: function () {
    var click = this.data.click;
    this.setData({
      click:!(bol)
    })
  },

  at_play:function(){
    //动画开始
    animation=wx.createAnimation({
      duration:1000
    });//声明创建一个动画对象
    //开始执行动作
    animation.scale(0.2).step({duration:400});//执行绽放的动作
    animation.scale(1).step({duration:400});//导出动画数据，并赋值给dhdata
  },

//获取首页搜索导航数据
  getNavList(){
    let that=this;
    wx.request({
      url:"https://easy-mock.com/mock/5ca6b68070e0c146ca398cac/example/mock",
      success(res){
        //console.log(res);
        if(res.data.code===0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取首页导航
    this.getNavList();
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

})