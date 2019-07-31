// user_center.js

var app = getApp()

Page({
  data: {
    showIndex: 0,
    activities: [
      {
        id: 1000000,
        title: "微软亚洲研究院创新论坛2019",
        time: "2019-08-22",
        address: "北京微软大厦",
        content: "创新汇",
        host: "微软亚研",
        left: 7,
        total: 21,
        isIn: false,
      },
      {
        id: 1000001,
        title: "2019年二十一世纪的计算大会",
        time: "2019-08-30",
        address: "上海世博中心",
        content: "二十一世纪的计算大会",
        host: "微软亚研",
        left: 7,
        total: 21,
        isIn: false,
      }
    ],
  },

  // 折叠标签栏
  panel: function (e) {
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex: 0
      })
    }
  },

  // 加载活动列表
  onLoad: function () {
    console.log("加载活动列表");
    // var that = this;
    wx.showLoading({
      title: '努力加载中...',
    });

    // that.loadActivities();
    this.loadAcitivities();
    wx.hideLoading();
  },

  // 下拉更新活动
  onPullDownRefresh: function () {
    console.log("下拉更新活动");
    // var that = this;
    wx.showNavigationBarLoading();

    setTimeout(() => {
      // that.loadActivities();
      this.loadAcitivities();
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000)
  },

  // 后端获取数据
  loadAcitivities: function () {
    var that = this;
    wx.request({
      url: "http://localhost:8888/dbpractice/dbadmin/listactivity", // 接口地址
      method: 'GET',
      header: {
        'content-type': 'application/json' //默认值
      },
      // 成功
      success: function (res) {
        console.log("加载活动列表 成功", res.data.activityList);
        that.setData({
          activities: res.data.activityList
        });
      },
      // 失败
      fail: function (err) {
        console.log("加载活动列表 失败", err);
      }
    })
  },

  // 活动详情
  showActivity: function (event) {
    console.log(event.currentTarget.id)
    console.log(!(event.currentTarget.id == ""))
    console.log("../activity_info/activity_/" + event.currentTarget.id + "activity_" + event.currentTarget.id)

    if (!(event.currentTarget.id == "")) {
      console.log("存在该活动");
      wx.navigateTo({
        url: "../activity_info/activity_" + event.currentTarget.id + "/activity_" + event.currentTarget.id
      });
    } else {
      console.log("没有该活动");
    }

    // TODO: blk传参问题
    wx.navigateTo({
      url: "../activity_info/activity_" + 1 + "/activity_" + 1
    });
  },

  // 已参与活动
  enrolledActivities: function () {
    console.log("已参与活动");
    var that = this;
    wx.request({
      url: "http://localhost:8888/dbpractice/dbadmin//getactivitybyid", // 接口地址
      method: 'GET',
      header: {
        'content-type': 'application/json' //默认值
      },
      // 成功
      success: function (res) {
        console.log("加载活动列表 成功", res.data.activityList);
        that.setData({
          activities: res.data.activityList
        });
      },
      // 失败
      fail: function (err) {
        console.log("加载活动列表 失败", err);
      }
    })
  },

  // 已发布活动
  releasedActivities: function () {
    console.log("已发布活动");
  },
})
