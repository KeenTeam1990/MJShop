// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choose_name: '选择联系人',
    choose_time: '服务时间',
    index: 0,
    range: [
      '上海浦东新区，李先生，电话：18786056435',
      '上海浦东新区，王先生，电话：18786056435',
      '上海浦东新区，电话：18786056435',
      '上海浦东新区，李先生，电话：18786056435',
      '上海浦东新区，李先生，电话：18786056435'
    ],
    date: '2018-12-26',
    time: "19:34",
    showToastBol: true,
    subject: '',
    price: '',
    message: '',
    civerpath: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    let subject = options.subject;
    let price = options.price;
    let message = options.message;
    let civerpath = options.civerpath;

    wx.getStorage({
      key: 'civerpath',
      success: function (res) {
        that.setData({
          subject: subject,
          price: price,
          message: message,
          civerpath: res.data,
        })

      },
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