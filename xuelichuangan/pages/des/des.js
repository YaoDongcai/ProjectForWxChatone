var app = getApp();
var News = require("../../lib/service.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    author:'', // 作者
    content:'',// 内容
    description:'', // 描述
    imgurl:'', // 图片地址
    time:'', // 发表时间
    title:'' // 文章标题
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    var news = new News();
    var _self = this;
    
    news.getNewsItem(options.id).then(res => {
      wx.hideLoading();
      let contentHtml = res.get("content");
      console.log(contentHtml.indexOf("&nbsp;"));
      
      // 替换html中特殊字符符号&nbsp;为空格;
      while (contentHtml.indexOf("&nbsp;") >= 0) {
            contentHtml = contentHtml.replace("&nbsp;", " ");
      }

      let content = contentHtml;

      _self.setData({
        author:res.get("author"),
        content: content,
        description: res.get("description"),
        imgurl: res.get("imgurl"),
        time: res.get("time"),
        title: res.get("title")
        }
        );
    }, error => {
      wx.hideLoading();
       console.log('error' + error);
    });
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