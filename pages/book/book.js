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
      '贵州金阳新区，李先生，电话：18786056435',
      '安顺新区，王先生，电话：18786056435',
      '阳关小区，李先生，电话：18786056435',
      '大营坡王江小区，李先生，电话：18786056435',
      '贵州花溪金阳新区，李先生，电话：18786056435'
    ],
    date: '2016-5-26',
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
    that.setData({
      subject: subject,
      price: price,
      message: message,
      civerpath: civerpath,
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