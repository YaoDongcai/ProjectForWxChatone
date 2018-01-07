const AV = require("../lib/av-weapp-min.js");

// 初始化leancloud 赋值appID 和appKey
class News {
  constructor() {
    
  }
  
  /** 根据objectID 获取这个 Item 详细信息 */
  getNewsItem(id) {
    var query = new AV.Query('News');
    
    wx.showLoading({
      title: '正在加载',
      mask:true
    })
    var promise = query.get(id);
    return promise;
  }
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
