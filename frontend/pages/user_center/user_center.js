// user_center.js

var app = getApp()

Page({
  data: {
    showIndex1: 0,
    showIndex2: 0,
    
    isSignActivitiesFold: true,
    isPostActivitiesFold: true,
    isDepartmentsFold: false,

    icon1: '/images/upicon.png',
    icon2: '/images/upicon.png',
    icon3: '/images/upicon.png',

    account: 'LotteWong',
    avatar: '../../images/lecture1.jpg',
    nickname: 'nickname',

    // 已参加的活动
    activities_sign: [
      {
        /*a_id: 'a_id', // 活动标识
        title: 'title', // 活动标题
        time: 'time', // 活动时间
        place: 'place', // 活动地点
        poster: '../../images/poster.jpg', // 活动海报
        intro: 'intro', // 活动介绍
        u_id: 'u_id', // 发布用户标识
        user_name: "user_name", // 发布用户名字
        d_id: 'd_id', // 发布组织标识
        dept_name: "dept_name", // 发布组织名字
        max: 100, // 上限人数
        now: 0, // 报名人数*/
        a_id: '3',
        poster: '../../images/lecture1.jpg',
        title: '',
        time: '请选择',
        place: '请选择',
        tag: '请选择',
        intro: '',
        publisher: '1',
        organizer: '微软亚太研发集团',
        quota: '',
        offical: false,
        constrain_id: '',
      }
    ],

    // 已发布的活动
    activities_post: [
      {
        /*a_id: 'a_id', // 活动标识
        title: 'title', // 活动标题
        time: 'time', // 活动时间
        place: 'place', // 活动地点
        poster: '../../images/poster.jpg', // 活动海报
        intro: 'intro', // 活动介绍
        u_id: 'u_id', // 发布用户标识
        user_name: "user_name", // 发布用户名字
        d_id: 'd_id', // 发布组织标识
        dept_name: "dept_name", // 发布组织名字
        max: 100, // 上限人数
        now: 0, // 报名人数*/
        a_id: '',
        poster: '../../images/lecture1.jpg',
        title: '',
        time: '请选择',
        place: '请选择',
        tag: '请选择',
        intro: '',
        publisher: '1',
        organizer: '微软亚太研发集团',
        quota: '',
        offical: false,
        constrain_id: '',
      }
    ],

    activities_all: [],

    // 已加入的组织
    departments: ["ISO","IEC","ITU"]
  },

  // 页面加载中心
  onLoad: function () {
    /*var isSignUp = isAlreadySignUp(account);
    if(!isSignUp) {
      wx.navigateTo({
        url: '../sign_up/sign_up',
      })
    }*/
    this.setData({
      avatar: app.globalData.userInfo.avatarUrl,
      nickname: app.globalData.userInfo.nickName
    })
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
          activities_all: res.data.activityList
        });
      },
      // 失败
      fail: function (err) {
        console.log("后端获取活动 ×失败", err);
      }
    });
  },

  // 是否已经注册
  isAlreadySignUp: function (id) {
    var isSignUp = getWechatInfo();
    return isSignUp;
  },

  // 加载已参加的活动
  loadSignActivities: function () {
    if (this.data.isSignActivitiesFold) {
      this.setData({
        isSignActivitiesFold: false,
        icon1: '/images/downicon.png'
      })
      var that = this;
      console.log(that.data.account);
      wx.request({
        url: "http://localhost:8888/dbpractice/dbadmin/getactivityidbyuid?u_id=" + that.data.account, // 接口地址
        method: 'GET', // 请求方法
        header: {
          'content-type': 'application/json' // 默认类型
        },
        // 成功
        success: function (res) {
          console.log("后端获取活动 √成功", res.data.activityIdList);
          var ids = res.data.activityIdList;
          var activities = [];
          for (var id in ids) {
            activities.push(that.data.activities_all[ids[id]])
          };
          that.setData({
            activities_sign: activities
          });
        },
        // 失败
        fail: function (err) {
          console.log("后端获取活动 ×失败", err);
        }
      });
    }
    else {
      this.setData({
        isSignActivitiesFold: true,
        icon1: '/images/upicon.png'
      })
    }
  },

  // 加载已发布的活动
  loadPostActivities: function () {
    if (this.data.isPostActivitiesFold) {
      this.setData({
        isPostActivitiesFold: false,
        icon2: '/images/downicon.png'
      })
      var that = this;
      console.log(that.data.account);
      wx.request({
        url: "http://localhost:8888/dbpractice/dbadmin/getactivitybypublisherid?u_id=" + that.data.account, // 接口地址
        method: 'GET', // 请求方法
        header: {
          'content-type': 'application/json' // 默认类型
        },
        // 成功
        success: function (res) {
          console.log("后端获取活动 √成功", res.data.activityList);
          /*var ids = res.data.activityIdList;
          var activities = [];
          for (var id in ids) {
            activities.push(that.data.activities_all[ids[id]])
          };
          console.log(activities);*/
          that.setData({
            activities_post: res.data.activityList
          });
        },
        // 失败
        fail: function (err) {
          console.log("后端获取活动 ×失败", err);
        }
      });
    }
    else {
      this.setData({
        isPostActivitiesFold: true,
        icon2: '/images/upicon.png'
      })
    }
  },

  // 加载已加入的组织
  loadDepartments: function () {
    /*if (this.data.isDepartmentsFold) {
      this.setData({
        isDepartmentsFold: false,
        icon3: '/images/upicon.png'
      })
      var that = this;
      wx.request({
        url: "TODO: $加载已加入的组织", // 接口地址
        method: 'GET', // 请求方法
        header: {
          'content-type': 'application/json' // 默认类型
        },
        // 成功
        success: function (res) {
          console.log("后端获取活动 √成功", "TODO: $已加入的组织列表");
          that.setData({
            departments: res.data
          });
        },
        // 失败
        fail: function (err) {
          console.log("后端获取活动 ×失败", err);
        }
      });
    }
    else {
      this.setData({
        isDepartmentsFold: true,
        icon3: '/images/downicon.png'
      })
    }*/
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
    /*wx.navigateTo({
      url: '../user_info/user_info'
    })*/
    wx.navigateTo({
      url: '../sign_up/sign_up',
    })
  },

  // 跳转查看用户信息
  loadEdit: function (e) {
    /*wx.navigateTo({
      url: '../user_info/user_info'
    })*/
    console.log("当前活动编号：" + e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../activity_edit/activity_edit?a_id=' + e.currentTarget.dataset.id,
    })
    console.log("成功跳转");
  },

  // TODO：考虑多个活动
  // 跳转查看报名名单
  loadSign: function (e) {
    wx.navigateTo({
      url: '../user_list/user_list?a_id=' + e.currentTarget.dataset.id,
    })
  },

  // 跳转查看活动详情
  loadActivity: function (e) {
    console.log("跳转活动索引 !" + e.currentTarget.dataset.id);
    wx.navigateTo({
      url: "../activity_info/activity_info?activity=" + e.currentTarget.dataset.id + "&account=" + this.data.account
    });
  },

  fromIdToName: function (id) {
    console.log(id);
    var that = this;
    wx.request({
      url: "http://localhost:8888/dbpractice/dbadmin//getuserbyid?u_id=" + id, // 接口地址
      method: 'GET', // 请求方法
      header: {
        'content-type': 'application/json' // 默认类型
      },
      // 成功
      success: function (res) {
        console.log("后端获取活动 √成功", res.data.user);
        that.setData({
          publisher: res.data.user.username
        });
      },
      // 失败
      fail: function (err) {
        console.log("后端获取活动 ×失败", err);
      }
    });
  },

  // TODO: 读取头像、微信号、昵称
  getWechatInfo: function () {
    // ......
  },
})

