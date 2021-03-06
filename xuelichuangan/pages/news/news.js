var app = getApp();
var News = require("../../lib/service.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList:[]// 消息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 开始请求用户的news消息数据
   var news = new News();
   // 得到消息列表
   var newsListPromise = news.getNewsList();
   newsListPromise.then(res => {
     wx.hideLoading();
     console.log('res' + JSON.stringify(res));
     this.setData({
       newsList:res
     })
   }, error => {
     wx.hideLoading();
     
   })
  },

  /** 跳转到对应的新闻列表 */
  goHref: function(event) {
    // 这里开始找到需要的event.dataset 数据 然后发给下个视图即可
    // 开始打印出来这个item的详细信息
    var id = event.currentTarget.dataset.id;
    var url = '../des/des?id=' + id;
    console.log(url);
    wx.navigateTo({
      url: url
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