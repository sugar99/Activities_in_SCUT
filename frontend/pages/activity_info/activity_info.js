// acticity_info.js

var app = getApp()

Page({
  data: {
    // activity:{
      a_id: 'test',
      title: '学术讲座 | 行业月系列活动 — 智慧城市',
      time: '2019-09-01',
      place: '大学城校区 · 学术大讲堂',
      tag: '',
      intro: '随着国家治理体系和治理能力的不断现代化，随着‘创新、协调、绿色、开放‘发展理念不断深入，城市被赋予新的内涵与要求。新一期行业月系列活动，我们将邀请资深行业专家，为您解读新型智慧城市的挑战与发展。工商管理学院作为华南地区管理教育的先行者，学院办学三十余年，秉承“接力工科优势、推进理论创新、培育管理精英、服务社会发展”的使命，坚持知识、能力、技能与素质一体化的复合型创新人才培养模式，形成“理论创新与实践、工程技术与管理、国际化与本土化相融合”的办学特色，培养了一大批远见卓识、务实进取的社会才俊和管理精英，赢得了“华南企业家的摇篮，商界精英的殿堂”的赞誉。目前，学院拥有工商管理和管理科学与工程两个一级学科博士点、博士后流动站，具有EMBA、MBA、ME、MPACC专业学位授予权。管理科学与工程学科是广东省唯一攀峰重点学科，工商管理学科是优势重点学科。拥有包括长江学者特聘教授、国家杰出青年科学基金获得者、国家“万人计划”哲学社会科学领军人才、中宣部文化名家暨“四个一批”人才等国家级高层次人才的师资队伍。拥有国内一流的教学设施与优美环境，拥有广泛的国际合作与交流网络。研究成果多次获得教育部、广东省哲学社会科学优秀成果奖一等奖和入选国家哲学社会科学成果文库。',
      poster: '../../images/poster.jpg',
      quota:0,
      pulisher:'',
      organizer:'',
      official:false,
      constrain_id:'',
    // },
    /*account: 'u_id', // 使用用户标识 
    u_id: 'u_id', // 发布用户标识
    user_name: '马化腾',
    d_id: 'd_id',
    dept_name: 'Tencent',
    max: 100,
    now: 0,*/
  },

  // 页面加载活动
  onLoad: function (q) {
    console.log("页面加载活动");
    console.log("跨界面传参为" + q.activity + ' ' + q.account);
    wx.showLoading({
      title: '努力加载中...',
    });
    this.setData({
      a_id: q.activity,
      // account: q.account
    });
    this.loadAcitivity(q.activity);
    wx.hideLoading();
  },

  // 下拉更新活动
  onPullDownRefresh: function () {
    console.log("下拉更新活动");
    wx.showNavigationBarLoading();
    setTimeout(() => {
      this.loadAcitivity(this.a_id);
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }, 2000);
  },

  // 后端获取活动
  loadAcitivity: function (id) {
    var that = this;
    wx.request({
      url: "http://localhost:8888/dbpractice/dbadmin/getactivitybyid?a_id=" + that.data.a_id, // 接口地址
      method: 'GET', // 请求方法
      header: {
        'content-type': 'application/json' // 默认类型
      },
      // 成功
      success: function (res) {
        console.log("后端获取活动 √成功", res.data.activity);
        that.setData(res.data.activity);
      },
      // 失败
      fail: function (err) {
        console.log("后端获取活动 ×失败", err);
      }
    });
  },

  // 是否已经报名
  isAlreadyEnroll: function(id) {
    var that = this;
    wx.request({
      url: "TODO: $是否报名接口地址", // 接口地址
      method: 'GET', // 请求方法
      header: {
        'content-type': 'application/json' // 默认类型
      },
      // 成功
      success: function (res) {
        console.log("后端是否报名 √成功", "TODO: $是否报名返回数据");
        that.setData("TODO: $是否报名返回数据");
      },
      // 失败
      fail: function (err) {
        console.log("后端是否报名 ×失败", err);
      }
    });
  },

  // 报名参加活动
  signUp: function (e) {
    var that =this;
    // var tmp = this.data.now;
    // tmp += 1;
    // var isIn = isAlreadyEnroll(account);
    // if (tmp <= this.data.quota && !isIn) {
      // this.setData({ now: tmp });
      // TODO: 向sign表插数据
      // ......
      wx.request({
        url: 'http://localhost:8888/dbpractice/dbadmin/addsign',
        method:'GET',
        data:{
          a_id:'1',
          u_id:'LotteWong',
        }
      })
      console.log("报名成功");
    // }
    // else if(isIn){
      // console.log("已经报名");
    // }
    // else {
      // console.log("报名失败");
    // }
  },

  // TODO: 读取头像、微信号、昵称
  getWechatInfo: function() {
    // ......
  },

  // TODO: 避免重复报名
  // ......
})