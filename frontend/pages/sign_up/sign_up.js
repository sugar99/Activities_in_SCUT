// pages/sign_up/sign_up.js

var app = getApp();

Page({
  data: {
    user: {
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
    },

    genders: ['男', '女'],
    idxOfGender: 0,

    grades: ['2016', '2017', '2018', '2019'],
    idxOfGrade: 0,

    departments: ['软件学院', '计算机学院', '电信学院', '医学院'],
    idxOfDepartment: 0,

    majors: [['软件工程', '软件工程卓越班', '软件工程中澳班'], ['计算机科学与技术全英联合班', '计算机科学与技术全英创新班', '计算机科学与技术', '网络工程', '信息安全'], ['通信工程', '信息工程', '电子科学与技术'], ['医学影像技术']],
    idxOfMajor: 0,
  },

  // 页面加载注册
  // onShow: function() {
    /*var isSignUp = isAlreadySignUp(account);
    if(isSignUp) {
      wx.navigateTo({
        url: '../sign_up/sign_up',
      })
    }*/
  // },

  onLoad: function() {
    var temp = this.data.user
    temp.u_id = app.globalData.userInfo.nickName;
    temp.avatar = app.globalData.userInfo.avatarUrl;
    temp.nickname = app.globalData.userInfo.nickName;
    this.setData({
      user: temp
    })
  },

  // 是否已经注册
  isAlreadySignUp: function (id) {
    var isSignUp = getWechatInfo();
    return isSignUp;
  },

  // 姓名输入
  usernameInput: function (e) {
    console.log("姓名输入：" + e.detail.value);
    var temp = this.data.user;
    temp.username = e.detail.value;
    this.setData({
      user: temp
    });
  },

  // 学号输入
  studentNumberInput: function (e) {
    console.log("学号输入：" + e.detail.value);
    var temp = this.data.user;
    temp.school_id = e.detail.value;
    this.setData({
      user: temp
    });
  },

  // 绑定性别选择器的函数
  bindGenderPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      idxOfGender: e.detail.value,
    });
    var temp = this.data.user;
    temp.gender = this.data.genders[this.data.idxOfGender];
    this.setData({
      user: temp
    });
  },

  // 绑定年级选择器的函数
  bindGradePickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      idxOfGrade: e.detail.value,
    });
    var temp = this.data.user;
    temp.grade = this.data.grades[this.data.idxOfGrade];
    this.setData({
      user: temp
    });
  },

  // 绑定学院选择器的函数
  bindDepartmentPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      idxOfDepartment: e.detail.value,
    });
    var temp = this.data.user;
    temp.dept_name = this.data.departments[this.data.idxOfDepartment];
    this.setData({
      user: temp
    });
  },

  // 绑定专业选择器的函数
  bindMajorPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      idxOfMajor: e.detail.value,
    });
    var temp = this.data.user;
    temp.major = this.data.majors[this.data.idxOfDepartment][this.data.idxOfMajor];
    this.setData({
      user: temp
    });
  },

  // 手机输入
  phoneInput: function (e) {
    console.log("手机输入：" + e.detail.value);
    var temp = this.data.user;
    temp.phone = e.detail.value;
    this.setData({
      user: temp
    });
  },

  // 邮箱输入
  emailInput: function (e) {
    console.log("邮箱输入：" + e.detail.value);
    var temp = this.data.user;
    temp.email = e.detail.value;
    this.setData({
      user: temp
    });
  },

  // 提交注册
  formSubmit: function () {
    console.log('form发生了submit事件');
    var that = this;
    wx.request({
      url: "http://localhost:8888/dbpractice/dbadmin/adduser", // 接口地址
      method: 'GET', // 请求方法
      header: {
        'content-type': 'application/json' // 默认类型
      },
      data: that.data.user,
      // 成功
      success: function (res) {
        console.log("后端添加活动 √成功", res.data);
        // that.setData({
        //   //activities: res.data.activityList
        // });
      },
      // 失败
      fail: function (err) {
        console.log("后端添加活动 ×失败", err);
      }
    });
    wx.navigateBack({
      
    })
  },

  // 重置注册
  formReset: function () {
    console.log('form发生了reset事件');
    var temp = {
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
    };
    this.setData({
      user: temp
    });
  },

  // TODO: 读取头像、微信号、昵称
  getWechatInfo: function () {
    // ......
  },
})