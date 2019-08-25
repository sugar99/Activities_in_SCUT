// activity_post.js

var app = getApp()

Page({
  data:{
    account: 'u_id',

    activity: {
      a_id: 'a_id',

      poster: '../../images/lecture1.jpg',

      title: '',
      time: '请选择',
      place: '请选择',
      tag: '请选择',
      intro: '',

      gender: '请选择',
      grade: '请选择',
      dept_name: '请选择',
      major: '请选择',
      description: '',
      quota: '',
      verification: false,
    },

    places: [['五山校区', '大学城校区'], ['逸夫人文馆', '34号楼', '33号楼', '海丽文体中心', '博学楼'], ['报告厅1', '报告厅2']],
    idxsOfPlaces: [0, 0, 0],
    
    tags: ['文娱活动', '体育赛事', '知识讲座', '学科竞赛'],
    idxOfTag: 0,

    genders: ['不限', '男', '女'],
    idxOfGender: 0,

    grades: ['不限', '2016级', '2017级', '2018级', '2019级'],
    idxOfGrade: 0,

    departments: ['不限', '软件学院', '计算机学院', '电信学院', '医学院'],
    idxOfDepartment: 0,

    majors: [['不限'], ['不限', '软件工程', '软件工程卓越班', '软件工程中澳班'], ['不限', '计算机科学与技术全英联合班', '计算机科学与技术全英创新班', '计算机科学与技术', '网络工程', '信息安全'], ['不限', '通信工程', '信息工程', '电子科学与技术'], ['不限', '医学影像技术']],
    idxOfMajor: 0,
  },

  // 标题输入
  titleInput: function (e) {
    console.log("标题输入：" + e.detail.value);
    var temp = this.data.activity;
    temp.title = e.detail.value;
    this.setData({
      activity: temp
    });
  },
  
  // 绑定时间选择器的函数
  bindDatePickerChange: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value);
    var temp = this.data.activity;
    temp.time = e.detail.value;
    this.setData({
      activity: temp
    })
  },

  // 绑定地点选择器的函数
  bindMultiPlacesPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，修改的值为', e.detail.value);
    var data = {
      places: this.data.places,
      idxsOfPlaces: this.data.idxsOfPlaces
    };
    data.idxsOfPlaces[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.idxsOfPlaces[0]) {
          case 0:
            data.places[1] = ['逸夫人文馆', '34号楼', '33号楼', '海丽文体中心', '博学楼'];
            data.places[2] = ['报告厅1', '报告厅2'];
            break;
          case 1:
            data.places[1] = ['A1', 'A2', 'A3', 'A4', '学术大讲堂', '音乐厅'];
            data.places[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
            break;
        }
        data.idxsOfPlaces[1] = 0;
        data.idxsOfPlaces[2] = 0;
        break;
      case 1:
        switch (data.idxsOfPlaces[0]) {
          case 0:
            switch (data.idxsOfPlaces[1]) {
              case 0:
                data.places[2] = ['报告厅1', '报告厅2'];
                break;
              case 1:
                data.places[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
              case 2:
                data.places[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
              case 3:
                data.places[2] = [''];
                break;
              case 4:
                data.places[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
            }
            break;
          case 1:
            switch (data.idxsOfPlaces[1]) {
              case 0:
                data.places[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
              case 1:
                data.places[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
              case 2:
                data.places[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
              case 3:
                data.places[2] = ["空中教室", '模拟法庭', '101', '102', '103', '104'];
                break;
              case 4:
                data.places[2] = [''];
                break;
              case 5:
                data.places[2] = [''];
                break;
            }
            break;
        }
        data.idxsOfPlaces[2] = 0;
        console.log(data.idxsOfPlaces);
        break;
    }
    this.setData(data);
    var temp = this.data.activity;
    temp.place = this.data.places[0][this.data.idxsOfPlaces[0]] + ' ' + this.data.places[1][this.data.idxsOfPlaces[1]] + ' ' + this.data.places[2][this.data.idxsOfPlaces[2]];
    this.setData({
      activity: temp
    });
  },

  // 绑定分类选择器的函数
  bindTagPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      idxOfTag: e.detail.value,
    });
    var temp = this.data.activity;
    temp.tag = this.data.tags[this.data.idxOfTag];
    this.setData({
      activity: temp
    });
  },

  // 详情输入
  introInput: function (e) {
    console.log("标题输入：" + e.detail.value);
    var temp = this.data.activity;
    temp.intro = e.detail.value;
    this.setData({
      activity: temp
    });
  },

  // 绑定性别选择器的函数
  bindGenderPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      idxOfGender: e.detail.value,
    });
    var temp = this.data.activity;
    temp.gender = this.data.genders[this.data.idxOfGender];
    this.setData({
      activity: temp
    });
  },

  // 绑定年级选择器的函数
  bindGradePickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      idxOfGrade: e.detail.value,
    });
    var temp = this.data.activity;
    temp.grade = this.data.grades[this.data.idxOfGrade];
    this.setData({
      activity: temp
    });
  },

  // 绑定学院选择器的函数
  bindDepartmentPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      idxOfDepartment: e.detail.value,
    });
    var temp = this.data.activity;
    temp.dept_name = this.data.departments[this.data.idxOfDepartment];
    this.setData({
      activity: temp
    });
  },

  // 绑定专业选择器的函数
  bindMajorPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      idxOfMajor: e.detail.value,
    });
    var temp = this.data.activity;
    temp.major = this.data.majors[this.data.idxOfDepartment][this.data.idxOfMajor];
    this.setData({
      activity: temp
    });
  },

  // 上限输入
  quotaInput: function (e) {
    console.log("标题输入：" + e.detail.value);
    var temp = this.data.activity;
    temp.quota = e.detail.value;
    this.setData({
      activity: temp
    });
  },

  // 申请认证
  applyForVerification: function (e) {
    console.log('radio-group发送选择改变，携带值为', e.detail.value)
    var temp = this.data.activity;
    temp.verification = (e.detail.value === 'true');
    this.setData({
      activity: temp
    });
  },

  // 上传海报
  uploadPoster: function(){
    var that = this;
    wx.chooseImage({
      count: 1, // 默认为9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        var temp = that.data.activity;
        temp.poster = tempFilePaths;
        that.setData({ 
          activity: temp
        });
      }
    })
  },
  
  // 提交活动
  formSubmit: function () {
    var that = this;
    console.log('form发生了submit事件');
    // TODO: 提交活动插this.data.activity进activity表
    // ......
    wx.navigateTo({
      url: "../activity_info/activity_info?activity=" + this.data.activity.a_id + "&account=" + this.data.account
    });

    wx.request({
      url: "http://localhost:8888/dbpractice/dbadmin/addactivity", // 接口地址
      method: 'GET', // 请求方法
      header: {
        'content-type': 'application/json' // 默认类型
      },
      data: {
        a_id: '',
        title: "放寒假",
        time: "2020-01-20",
        place: "家里",
        tag: "知识竞赛",
        intro: "回家哈皮",
        poster: "http://photocdn.sohu.com/20130925/Img387224863.jpg",
        quota: 10086,
        publisher: "LotteWong",
        organizer: "软件学院",
        official: true,
        constrain_id: '',
      },
      // 成功
      success: function (res) {
        console.log("后端获取活动 √成功", res.data.activityList);
        that.setData({
          activities: res.data.activityList
        });
      },
      // 失败
      fail: function (err) {
        console.log("后端获取活动 ×失败", err);
      }
    });
  },

  // 重置活动
  formReset: function () {
    console.log('form发生了reset事件');
    var temp = {
      poster: '../../images/lecture1.jpg',

      title: '',
      time: '请选择',
      place: '请选择',
      tag: '请选择',
      intro: '',

      gender: '请选择',
      grade: '请选择',
      dept_name: '请选择',
      major: '请选择',
      description: '',
      quota: '',
      verification: false,
    };
    this.setData({
      activity: temp
    });
  },

  // TODO: 读取头像、微信号、昵称
  getWechatInfo: function () {
    // ......
  },
})