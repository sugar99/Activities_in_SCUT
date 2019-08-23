
Page({
  data:{
    poster_frontground: '../../images/lecture1.jpg',
    poster_background: '../../images/lecture1.jpg',
    
    title: '请填写',
    time: '请选择',
    location: '请选择',
    classification: '请选择',
    intro: '请填写',
    gender: '请选择',
    organization: '请选择',
    maximum: '请填写',
    verification: false,

    multiArray: [['五山校区', '大学城校区'], ['逸夫人文馆', '34号楼', '33号楼', '海丽文体中心', '博学楼'], ['报告厅1', '报告厅2']],
    sex: ['不限', '男', '女'],
    tag: ['文娱活动', '体育赛事', '知识讲座', '学科竞赛'],
    multiArray1: [['不限', '2016级', '2017级', '2018级', '2019级'], ['不限', '软件学院', '计算机学院', '电信学院', '医学院'], ['不限', '软件工程', '软件工程卓越班', '软件工程中澳班'], ],
    multiIndex: [0, 0, 0],
    multiIndex1: [0, 0, 0],
    index:0,
    index4: 0,
    index5: 0,
    index1:0,
    
    building:'',
    room:'',
    carWin_im:'',

    
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  bindDateChange:function(e){
    console.log('picker发送【举办时间】选择改变')
    console.log(e.detail.value)
    this.setData({
      time:e.detail.value
    })
  },
  bindMultiPickerColumnChange1: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray1: this.data.multiArray1,
      multiIndex1: this.data.multiIndex1
    };
    data.multiIndex1[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 1:
        switch (data.multiIndex1[1]) {
          case 1:
            data.multiArray1[2] = ['不限', '软件工程', '软件工程卓越班', '软件工程中澳班'];
            break;
          case 2:
            data.multiArray1[2] = ['不限', '计算机科学与技术全英联合班', '计算机科学与技术全英创新班', '计算机科学与技术', '网络工程', '信息安全'];
            break;
          case 3:
            data.multiArray1[2] = ['不限', '通信工程', '信息工程', '电子科学与技术'];
            break;
          case 4:
            data.multiArray1[2] = ['不限', '医学影像技术'];
            break;
        }
        data.multiIndex1[2] = 0;
        break;
    }
    this.setData(data);
    this.setData({
      organization: this.data.multiArray1[0][this.data.multiIndex1[0]] + ' ' + this.data.multiArray1[1][this.data.multiIndex1[1]] + ' ' + this.data.multiArray1[2][this.data.multiIndex1[2]]
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['逸夫人文馆', '34号楼', '33号楼', '海丽文体中心', '博学楼'];
            data.multiArray[2] = ['报告厅1', '报告厅2'];
            break;
          case 1:
            data.multiArray[1] = ['A1', 'A2', 'A3', 'A4', '学术大讲堂', '音乐厅'];
            data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['报告厅1', '报告厅2'];
                break;
              case 1:
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
              case 2:
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
              case 3:
                data.multiArray[2] = [''];
                break;
              case 4:
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
              case 1:
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
              case 2:
                data.multiArray[2] = ['101', '102', '103', '104', '105', '106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
              case 3:
                data.multiArray[2] = ["空中教室", '模拟法庭', '101', '102', '103', '104'];
                break;
              case 4:
                data.multiArray[2] = [''];
                break;
              case 5:
                data.multiArray[2] = [''];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
    this.setData({
      location: this.data.multiArray[0][this.data.multiIndex[0]] + ' ' + this.data.multiArray[1][this.data.multiIndex[1]] + ' ' + this.data.multiArray[2][this.data.multiIndex[2]]
    })
  },
  uploadphoto:function(){
    console.log("上传活动预览图");
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        that.setData({ 
          poster_frontground: tempFilePaths,
          poster_background: tempFilePaths
        })
      }
    })
  },
  //绑定性别选择器的函数
  bindPickerChange4: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index4: e.detail.value,
    })
    this.setData({
      gender: this.data.sex[this.data.index4],
    })
  },
  //绑定分类选择器的函数
  bindPickerChange5: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index5: e.detail.value,
    })
    this.setData({
      classification: this.data.tag[this.data.index5],
    })
  },
  releaseact:function() {
    
  },
  applyForVerification:function(e) {
    console.log('radio-group发送选择改变，携带值为', e.detail.value)
    this.setData({
      verification: e.detail.value === 'true',
    })
    console.log('radio-group发送选择改变，携带值为', this.data.verification)
    console.log('radio-group发送选择改变，携带值为', typeof(this.data.verification))
  }
})