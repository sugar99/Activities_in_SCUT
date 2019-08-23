// pages/user_list/user_list.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    showIndex: 0,
    pre:{},
    next:{},
    deleteOrNot:false,
    returnOrNot:false,
    participants:[
      {
        imgUrl:'/images/MaYun.jpg',
        nickname:'996福报',
        name:'马云',
        student_number:123,
        campus:'1号',
        academy:'不知',
        major:'资本家',
        grade:'很老',
        sex:'男',
        phoneNumber:576879868,
        mailBox:'79686329@qq.com',
        iconImgUrl: '/images/upicon.png'
      },
      {
        imgUrl: '/images/WangJianLin.jpg',
        nickname :'1个亿小目标',
        name: '王健林',
        student_number: 124,
        campus: '2号',
        academy: '不知',
        major: '资本家',
        grade: '很老',
        sex: '男',
        phoneNumber: 8576899432,
        mailBox: '987685678@qq.com',
        iconImgUrl: '/images/upicon.png'
      },
      {
        imgUrl: '/images/LiuQiangDong.jpg',
        nickname :'不知妻美',
        name: '刘强东',
        student_number: 125,
        campus: '3号',
        academy: '不知',
        major: '资本家',
        grade: '很老',
        sex: '男',
        phoneNumber: 986775463,
        mailBox: '321435343@qq.com',
        iconImgUrl: '/images/upicon.png'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  //删除指定数组项
  delete: function(e){
    var index = e.currentTarget.dataset.index;
    var partici = this.data.participants;
    var pre1 = partici.splice(index, 1);
    this.setData({
      participants: partici,
      deleteOrNot: true,
      pre: pre1
    })
  },

//返回上一步
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

//返回下一步
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

//导出用户列表数据
  loadUsers:function(){

  }

})