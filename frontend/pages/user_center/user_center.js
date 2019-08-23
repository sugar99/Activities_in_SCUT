// user_center.js

var app = getApp()

Page({
  data: {
    showIndex1: 0,
    showIndex2: 0,
    
    isSignActivitiesFold: false,
    isPostActivitiesFold: false,
    isDepartmentsFold: false,

    avatar: '/images/lovely_girl.jpg',
    username: 'username',

    icon1: '/images/upicon.png',
    icon2: '/images/upicon.png',
    icon3: '/images/upicon.png',

    // 已参加的活动
    activities_sign: [
      {
        id: 1000000,
        title: "微软亚洲研究院创新论坛2019",
        time: "2019-08-22",
        address: "北京微软大厦",
        content: "创新汇",
        host: "微软亚研",
        signed: 7,
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
        signed: 7,
        total: 21,
        isIn: false,
      }
    ],

    // 已发布的活动
    activities_post: [
      {
        id: 1000002,
        title: "计算机视觉应用冬季会议",
        time: "2020-03-02",
        address: "夏威夷",
        content: "计算机视觉应用方面交流会",
        host: "美国",
        signed: 7,
        total: 21,
        isIn: false,
      },
      {
        id: 1000003,
        title: "美国人工智能协会年会",
        time: "2020-01-27",
        address: "夏威夷",
        content: "人工智能领域重要会议",
        host: "美国人工智能协会",
        signed: 7,
        total: 21,
        isIn: false,
      }
    ],

    // 已加入的组织
    departments: ["ISO","IEC","ITU"]
  },

  // 加载已参加的活动
  loadSignActivities: function () {
    if (this.data.isSignActivitiesFold) {
      this.setData({
        isSignActivitiesFold: false,
        icon1: '/images/upicon.png'
      })
    }
    else {
      this.setData({
        isSignActivitiesFold: true,
        icon1: '/images/downicon.png'
      })
    }
  },

  // 加载已发布的活动
  loadPostActivities: function () {
    if (this.data.isPostActivitiesFold) {
      this.setData({
        isPostActivitiesFold: false,
        icon2: '/images/upicon.png'
      })
    }
    else {
      this.setData({
        isPostActivitiesFold: true,
        icon2: '/images/downicon.png'
      })
    }
  },

  // 加载已加入的组织
  loadDepartments: function () {
    if (this.data.isDepartmentsFold) {
      this.setData({
        isDepartmentsFold: false,
        icon3: '/images/upicon.png'
      })
    }
    else {
      this.setData({
        isDepartmentsFold: true,
        icon3: '/images/downicon.png'
      })
    }
  },

  // 折叠或展开标签栏
  loadSignActivitiesPanel: function(e) {
    if (e.currentTarget.dataset.index != this.data.showIndex1) {
      this.setData({
        showIndex1: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex1: 0
      })
    }
  },

  // 折叠或展开标签栏
  loadPostActivitiesPanel: function (e) {
    if (e.currentTarget.dataset.index != this.data.showIndex2) {
      this.setData({
        showIndex2: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex2: 0
      })
    }
  },

  // 跳转查看用户信息
  loadInfo: function () {
    wx.navigateTo({
      url: '../user_info/user_info'
    })
  },

  // TODO：考虑多个活动
  // 跳转查看报名名单
  loadSign: function () {
    wx.navigateTo({
      url: '../user_list/user_list'
    })
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
  signActivities: function () {
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
  postActivities: function () {
    console.log("已发布活动");
  },

})

