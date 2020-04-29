// pages/detail/detail.js
var WxParse=require('../../wxParse/wxParse.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    video_post:"",
    video_img:"",
    info:"",
    money:"",
    erweima:"",
    menuList:"",
    canshu:"",
    fenlei:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getdetailList:function(){
    var _this = this;
    wx.request({
      url: 'https://cloud.meshmellow.cn/Wechatapi/king',
      dataType:'GET',
      success(res){
        var res = JSON.parse(res.data);
        console.log(res)
        _this.setData({
          video_post:res.video,
          video_img:res.img,
          info:res.info,
          money:res.money,
          erweima: res.erweima,
          intro:res.intro,
          canshu: res.canshu,
          dibu: res.dibu
        })
      }
    })
  },
  getmenuList:function(){
    var _this = this;
    wx.request({
      url: 'https://cloud.meshmellow.cn/tpl/default/static/live/king.json',
      success(res) {
        var res = res.data.data
        _this.setData({
          menuList:res
        })
      }
    })
  },
  getinukamiList: function () {
    var _this = this;
    wx.request({
      url: 'https://cloud.meshmellow.cn/Wechatapi/inukami',
      dataType: 'GET',
      success(res) {
        var res = JSON.parse(res.data);
        _this.setData({
          video_post: res.video,
          video_img: res.img,
          info: res.info,
          money: res.money,
          erweima: res.erweima,
          intro: res.intro,
          canshu: res.canshu,
          dibu: res.dibu
        })
      }
    })
  },
  getinukamimenuList: function () {
    var _this = this;
    wx.request({
      url: 'https://cloud.meshmellow.cn/tpl/default/static/live/menu_lesson.json',
      success(res) {
        var res = res.data.data
        _this.setData({
          menuList: res
        })
      }
    })
  },
  getinukami_animationList: function () {
    var _this = this;
    wx.request({
      url: 'https://cloud.meshmellow.cn/Wechatapi/inukami_animation',
      dataType: 'GET',
      success(res) {
        var res = JSON.parse(res.data);
        _this.setData({
          video_post: res.video,
          video_img: res.img,
          info: res.info,
          money: res.money,
          erweima: res.erweima,
          intro: res.intro,
          canshu: res.canshu,
          dibu: res.dibu
        })
      }
    })
  },
  getinukami_animationmenuList: function () {
    var _this = this;
    wx.request({
      url: 'https://cloud.meshmellow.cn/tpl/default/static/live/inukami_animation.json',
      success(res) {
        var res = res.data.data
        _this.setData({
          menuList: res
        })
      }
    })
  },
  getinukami_designList: function () {
    var _this = this;
    wx.request({
      url: 'https://cloud.meshmellow.cn/tpl/default/static/js/inukami_design.json',
      dataType: 'GET',
      success(res) {
         var res = JSON.parse(res.data);
        console.log(res)
        _this.setData({
          video_post: res.video,
          video_img: res.img,
          info: res.info,
          money: res.money,
          erweima: res.erweima,
          intro: res.intro,
          canshu: res.canshu,
          dibu: res.dibu
        })
      }
    })
  },
  getinukami_designmenuList: function () {
    var _this = this;
    wx.request({
      url: 'https://cloud.meshmellow.cn/tpl/default/static/live/inukami_animation.json',
      success(res) {
        var res = res.data.data
        _this.setData({
          menuList: res
        })
      }
    })
  },
  onLoad: function (options) {
    var _this=this;
    if (options.fenlei=="king"){
      _this.getdetailList();
      _this.getmenuList()
    }else if (options.fenlei == "inukami"){
      _this.getinukamiList();
      _this.getinukamimenuList()
    } else if (options.fenlei == "inukami_animation"){
      _this.getinukami_animationList();
      _this.getinukami_animationmenuList()
    } else if (options.fenlei == "inukami_design"){
      _this.getinukami_designList();
      _this.getinukami_designmenuList()
    }
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

  }
})