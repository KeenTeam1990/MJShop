// pages/user/user.js
var app= getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    avatarUrl:'http://img1.imgtn.bdimg.com/it/u=3018401455,3285222202&fm=11&gp=0.jpg'
  },

  //事件处理函数
  bindViewTap:function(){
   
   var that= this;
   wx.chooseImage({
     count:1,
     sizeType:['original','compressed'],
     sourceType:['album','camera'],
     success: function(res) {
     var tempFilePaths = res.tempFilePaths
     that.setData({

       avatarUrl: tempFilePaths[0]

     })



     },
   })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用一下
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  map_btn: function () {
    wx.getLocation({
      success: function (res) {
        console.log(res)
        var longitude = res.longitude;
        var latitude = res.latitude;
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
        })
      },
    })
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