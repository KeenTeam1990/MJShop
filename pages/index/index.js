//index.js
//获取应用实例
const app = getApp()
//引用
var fileData = require('../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    banner_url: fileData.getBannerImageUrl(),
    interval: 3000,
    duration: 1000,
    vertical: false,
    indicatordots: true,
    autoplay: true,
    circular: true,
    navTopItems: fileData.getIndexNavData(),
    colors: fileData.getColorData(),
    curNavId: 1,
    curIndex: 0,
    navSectionItems: fileData.getIndexNavSectionData()
    
  },

  laodMore:function(res){
    var that = this;
    //得到导航的下标
    var curid = this.data.curIndex;
    if(this.data.navSectionItems[curid]==0){
      return; 
    }  else {
     //加载更多
      wx.showToast({
        title:'加载中...',
        icon:'loading',
        duration:2000
      })
    }
    that.data.navSectionItems[curid] = that.data.navSectionItems[curid].concat(that.data.navSectionItems[curid]);

    that.setData({
      list: that.data.navSectionItems,
    })

  },
  //跳转到详情页
  navigateDatail:function(res){
    var subject = res.currentTarget.dataset.subject;
    var price = res.currentTarget.dataset.price;
    var message = res.currentTarget.dataset.message;
    var civerpath = res.currentTarget.dataset.civerpath;
    wx.setStorage({
      key: 'civerpath',
      data: civerpath,
    })
  wx.navigateTo({
    url: '../detail/detail?subject=' + subject + '&price=' + price + '&message=' + message + '&civerpath=' + civerpath,
   
  })
  },

  switchTap:function(res){
   var that = this;
   let id=res.currentTarget.dataset.id;
   let index = res.currentTarget.dataset.index;
   that.setData({
     curNavId: id,
     curIndex: index,

   })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      list: this.data.navSectionItems
    })
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
  //跳转book页面
  bookTap:function(res){

    var subject = res.currentTarget.dataset.subject;
    var price = res.currentTarget.dataset.price;
    var message = res.currentTarget.dataset.message;
    var civerpath = res.currentTarget.dataset.civerpath;
    wx.navigateTo({
      url: '../book/book?subject=' + subject + '&price=' + price + '&message=' + message + '&civerpath=' + civerpath,

    })

  }


})