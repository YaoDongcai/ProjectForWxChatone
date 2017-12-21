const AV = require("../lib/av-weapp-min.js");

// 初始化leancloud 赋值appID 和appKey
class News {
  constructor() {
    AV.init({
      appId: 'nn8FUyQ1azCQv90z0609L9tn-gzGzoHsz',
      appKey: '3rH6zjygm91XjDEPTeAJ6Cmb',
    });
  }

  /** 根据objectID 获取这个详细信息 */
  /** 获取News 列表 */
  getNewsList() {
    var query = new AV.Query('News');
    // 正在加载
    wx.showLoading({
      title: "正在加载",
      mask: true,
    })
    // 请求数据;
    var promise = query.find();
    return promise;
  }
}

module.exports = News;
