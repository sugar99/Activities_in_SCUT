// activity_list.js

var app = getApp()

Page({
  data: {
    // 当前用户
    account: 'u_id',

    // 活动数据
    activities: [
      {
        a_id: 'a_id', // 活动标识
        title: 'title', // 活动标题
        time: 'time', // 活动时间
        place:'place', // 活动地点
        poster:'../../images/poster.jpg', // 活动海报
        intro: 'intro', // 活动介绍
        u_id: 'u_id', // 发布用户标识
        user_name: "user_name", // 发布用户名字
        d_id: 'd_id', // 发布组织标识
        dept_name: "dept_name", // 发布组织名字
        max: 100, // 上限人数
        now: 0, // 报名人数
      }
    ],
    
    // 轮播属性
    /*indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0,*/

    // 分类选项
    tag: ['全部显示', '文娱活动', '体育赛事', '知识讲座', '学科竞赛'],
    idxOfTag: 0,
    classification: '分类：全部显示',
    
    // 排序选项
    sort: ['按举办时间', '按上限人数', '按报名人数'],
    idxOfSort: 0,
    order: '排序：按举办时间',

    // 搜索信息
    SearchData: '',
    SearchResult: [],
  },

  // 页面加载活动
  onLoad: function () {
    console.log("页面加载活动");
    wx.showLoading({
      title: '努力加载中...',
    });
    this.loadAcitivities();
    wx.hideLoading();
  },

  // 下拉更新活动
  onPullDownRefresh: function () {
    console.log("下拉更新活动");
    wx.showNavigationBarLoading();
    setTimeout(() => {
      this.loadAcitivities();
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000);
  },

  // 后端获取活动
  loadAcitivities: function () {
    var that = this;
    wx.request({
      url: "http://localhost:8888/dbpractice/dbadmin/listactivity", // 接口地址
      method: 'GET', // 请求方法
      header: {
        'content-type': 'application/json' // 默认类型
      },
      // 成功
      success: function (res) {
        console.log("后端获取活动 √成功", res.data.activityList);
        that.setData({
          activities: res.data
        });
      },
      // 失败
      fail: function (err) {
        console.log("后端获取活动 ×失败", err);
      }
    });
  },

  // 跳转活动详情
  showActivity: function (e) {
    console.log("跳转活动索引 !" + e.currentTarget.dataset.id);
    wx.navigateTo({
      url: "../activity_info/activity_info?activity=" + e.currentTarget.dataset.id + "&account=" + this.data.account
    });
  },

  // 绑定分类选择器
  bindTagPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      idxOfTag: e.detail.value,
    });
    this.setData({
      classification: '分类：' + this.data.tag[this.data.idxOfTag],
    });
    console.log('分类为', this.data.classification);
    // TODO: 传idOfTag到后端进行分类
    // ......
  },

  // 绑定排序选择器
  bindSortPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      idxOfSort: e.detail.value,
    });
    this.setData({
      order: '排序：' + this.data.sort[this.data.idxOfSort],
    });
    console.log('排序为', this.data.order);
    // TODO: 传idOfSort到后端进行排序
    // ......
  },

  // 搜索输入
  SearchInput: function (e) {
    console.log("搜索输入：" + e.detail.value);
    this.setData({
      SearchData: e.detail.value
    });
  },

  // 搜索提交
  SearchConfirm: function () {
    console.log("搜索提交：" + this.data.SearchData);
    // TODO: 传SearchData到后端进行搜索
    // ......
  },

  // 搜索清除
  SearchClear: function () {
    console.log("搜索清除...");
    this.setData({
      SearchData: ''
    });
  },

  // TODO: 读取头像、微信号、昵称
  getWechatInfo: function () {
    // ......
  },
})

var Util = require('../../utils/util.js');
