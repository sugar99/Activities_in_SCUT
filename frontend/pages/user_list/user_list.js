// pages/user_list/user_list.js

Page({
  data: {
    showIndex: 0,
    iconImgUrl: '/images/upicon.png',
    pre:{},
    next:{},
    deleteOrNot:false,
    returnOrNot:false,
    a_id: '2',
    participants: [
      /*{
        avatar: '/images/LiuQiangDong.jpg',
        nickname: 'nickname',
        u_id: 'u_id',
        username: '',
        school_id: '',
        grade: '请选择',
        dept_name: '请选择',
        major: '请选择',
        gender: '请选择',
        phone: '',
        email: '',
        address:'',
        isadmin: false,
      }*/
    ],
  },

  // 页面加载名单
  onLoad: function (q) {
    console.log("页面加载名单");
    this.setData({
      a_id: q.a_id
    })
    console.log(this.data.a_id)
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
      url: "http://localhost:8888/dbpractice/dbadmin/getparticipantbyaid?a_id=" + that.data.a_id, // 接口地址
      method: 'GET', // 请求方法
      header: {
        'content-type': 'application/json' // 默认类型
      },
      // 成功
      success: function (res) {
        console.log("后端获取名单 √成功", res.data.participantList);
        console.log(res.data.participantList);
        /*var ids = res.data.participantIdList;
        for (var id in ids) {
          that.fromIdToUser(ids[id]);
        };
        console.log(that.data.participants);*/
        /*that.setData({
          participants: users
        });*/
        that.setData({
          participants: res.data.participantList
        });
      },
      // 失败
      fail: function (err) {
        console.log("后端获取名单 ×失败", err);
      }
    });
  },

  fromIdToUser: function(id) {
    var that = this;
    wx.request({
      url: "http://localhost:8888/dbpractice/dbadmin//getuserbyid?u_id=" + id, // 接口地址
      method: 'GET', // 请求方法
      header: {
        'content-type': 'application/json' // 默认类型
      },
      // 成功
      success: function (res) {
        console.log("后端进行转换 √成功", res.data.user);
        that.setData({
          participants: that.data.participants.push(res.data.user)
        })
      },
      // 失败
      fail: function (err) {
        console.log("后端获取活动 ×失败", err);
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
  deleteParticipant: function(e){
    var index = e.currentTarget.dataset.index;
    var partici = this.data.participants;
    var pre1 = partici.splice(index, 1);
    this.setData({
      participants: partici,
      deleteOrNot: true,
      pre: pre1
    })
    var userId = e.currentTarget.dataset.id;
    console.log('剔除用户id为' + e.currentTarget.dataset.id);
    var that = this;
    wx.request({
      url: "http://localhost:8888/dbpractice/dbadmin/deletesign", // 接口地址
      method: 'GET', // 请求方法
      data:{
        u_id: userId,
        a_id: that.data.a_id
        // u_id: "skywalker",
        // a_id: 1,
      },
      header: {
        'content-type': 'application/json' // 默认类型
      },
      // 成功
      success: function (res) {
        console.log("后端获取名单 √成功", res.data);
        //that.setData({
        // participants: res.data
        //});
      },
      // 失败
      fail: function (err) {
        console.log("后端获取名单 ×失败", err);
      }
    });
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