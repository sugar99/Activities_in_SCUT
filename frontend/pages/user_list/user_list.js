// pages/user_list/user_list.js

Page({
  data: {
    showIndex: 0,
    iconImgUrl: '/images/upicon.png',
    pre:{},
    next:{},
    deleteOrNot:false,
    returnOrNot:false,
    participants:[
      {
        avatar: '/images/LiuQiangDong.jpg',
        nickname :'不知妻美',
        username: '刘强东',
        student_number: 125,
        grade: '很老',
        department: '不知',
        major: '资本家',
        gender: '男',
        phone: 986775463,
        email: '321435343@qq.com',
      }
    ]
  },

  // 页面加载名单
  onLoad: function () {
    console.log("页面加载名单");
    wx.showLoading({
      title: '努力加载中...',
    });
    this.loadParticipants();
    wx.hideLoading();
  },

  // 下拉更新名店
  onPullDownRefresh: function () {
    console.log("下拉更新活动");
    wx.showNavigationBarLoading();
    setTimeout(() => {
      this.loadParticipants();
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000);
  },

  // 后端获取名单
  loadParticipants: function () {
    var that = this;
    wx.request({
      url: "TODO: $后端获取名单接口", // 接口地址
      method: 'GET', // 请求方法
      header: {
        'content-type': 'application/json' // 默认类型
      },
      // 成功
      success: function (res) {
        console.log("后端获取名单 √成功", "$后端获取名单列表");
        that.setData({
          participants: res.data
        });
      },
      // 失败
      fail: function (err) {
        console.log("后端获取名单 ×失败", err);
      }
    });
  },

  // 折叠标签栏
  panel: function (e) {
    var index = e.currentTarget.dataset.index-1
    var key = "participants[" + index + "].iconImgUrl"

    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index,
        [key]: '/images/downicon.png'
      })
    } 
    else {
      this.setData({
        showIndex: 0,
        [key]: '/images/upicon.png'
      })
    }
  },

  // 删除指定数组项
  delete: function(e){
    var index = e.currentTarget.dataset.index;
    var partici = this.data.participants;
    var pre1 = partici.splice(index, 1);
    this.setData({
      participants: partici,
      deleteOrNot: true,
      pre: pre1
    })
    // TODO: 后端活动剔除用户
    // ......
  },

  // 返回上一步
  returnPre:function(){
    var that = this;
    if(that.data.deleteOrNOt){
      var partici = that.data.participants;
      var pre2 = that.data.pre;
      partici.push(pre);
      that.setData({
        participants: partici,
        returnOrNot: true,
        deleteOrNot: false
      })
    } 
  },

  // 返回下一步
  returnNext:function(){
    var that = this;
    if (that.data.returnOrNOt) {
      var partici = that.data.participants;
      partici.splice(partici.length-1,1);
      that.setData({
        participants: partici,
        returnOrNot: false
      })
    }
  },

  // 导出用户列表数据
  outportUsers:function(){

  }

})