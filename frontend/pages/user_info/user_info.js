// pages/user_info/user_info.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    index1:0,
    index2:0,
    index3:0,
    index4:0,
    campus:['','五山校区','大学城校区','国际校区'],
    academy:['','软件学院','计算机学院','建筑学院','艺术学院','环境学院','经济学院','新闻与传播学院'],
    major:['','软件工程','计算机科学','建筑学','舞蹈','环境科学','国际金融学','新闻学'],
    grade: ['','2016级','2017级','2018级','2019级'],
    sex:['','男','女'],
    imgUrl:'/images/lovely_girl.jpg'
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

  //绑定校区选择器的函数
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  //绑定学院选择器的函数
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },

  //绑定专业选择器的函数
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },

  //绑定年级选择器的函数
  bindPickerChange3: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },

  //绑定性别选择器的函数
  bindPickerChange4: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index4: e.detail.value
    })
  },

  //更换头像的函数
  setPhotoInfo: function(){
    var that = this;
    wx.chooseImage({
      count:1,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success:function(res){
        var tempFilePaths = res.tempFilePaths
        that.setData({imgUrl:tempFilePaths})
      }
    })
  },

})