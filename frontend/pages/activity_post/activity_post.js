
Page({
  data:{
    date:'2019-01-01',
    multiArray: [['五山校区', '大学城校区'], ['逸夫人文馆', '34号楼', '33号楼', '海丽文体中心', '博学楼'], ['报告厅1', '报告厅2']],
    multiIndex: [0, 0, 0],
    index:0,
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
      date:e.detail.value
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
            data.multiArray[2] = ['报告厅1','报告厅2'];
            break;
          case 1:
            data.multiArray[1] = ['A1', 'A2', 'A3','A4','学术大讲堂','音乐厅'];
            data.multiArray[2] = ['101', '102','103','104','105','106','107','108','201','202','203','204','205','206','207','208','209'];
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
                data.multiArray[2] = ['101', '102', '103', '104', '105','106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
              case 3:
                data.multiArray[2] = [''];
                break;
              case 4:
                data.multiArray[2] = ['101', '102', '103', '104', '105','106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['101', '102', '103', '104', '105','106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
              case 1:
                data.multiArray[2] = ['101', '102', '103', '104', '105','106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
              case 2:
                data.multiArray[2] = ['101', '102', '103', '104', '105','106', '107', '108', '201', '202', '203', '204', '205', '206', '207', '208', '209'];
                break;
                case 3:
                data.multiArray[2] = ["空中教室",'模拟法庭','101','102','103','104'];
                break;
                case 4:
                data.multiArray[2]=[''];
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
  },
  uploadphoto:function(){
    console.log("上传活动预览图");
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
  },
  releaseact:function(){
    
  }
})