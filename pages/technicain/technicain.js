// pages/technicain/technicain.js
var fileData = require('../../utils/data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    skillData: fileData.getSkillData(),
    caseArray: ['官网', '商城', '旅游', '门店'],
    index: 2
  },

   
  namechange:function(res){
    this.setData({
      index: res.detail.value
    })
  },
  navgetDail:function(res){
    var price = res.currentTarget.dataset.price;
    var company = res.currentTarget.dataset.company;
    var message = res.currentTarget.dataset.message;
    var avatar = res.currentTarget.dataset.avatar;
    wx.navigateTo({
      url: '../detail/detail?subject=' + company + '&price=' + price + '&message=' + message + '&civerpath=' + avatar,

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      list: this.data.skillData
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

  }
})