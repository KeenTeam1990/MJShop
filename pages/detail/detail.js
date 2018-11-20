// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subject:'',
    price:'',
    message:'',
    civerpath:'',
    timeStamp:'',
    nonceStr:'',
    package:'',
    signType:'',
    paySign:''
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
      success: function(res) {
        that.setData({
          subject: subject,
          price: price,
          message: message,
          civerpath: res.data,
        })

      },
    })
  },

  bookTap:function(){
  console.log('bookTap')
   var that = this;
    wx.getStorage({
      key: 'openid',
      success: function(res) {
       wx.request({
         url: 'https://www.baidu.com',
         data:{
          
           openid: res.data,
           fee: '1', //支付金额
           details: '微信小程序开发',//支付商品的名称
         },
        
         success:function(result){
          if(result.data){
          wx.requestPayment({
            timeStamp: result.data['timeStamp'],
            nonceStr: result.data['nonceStr'],
            package: result.data['package'],
            signType: 'MD5',
            paySign: result.data['paySign'],

            'success':function(successret){

              console.log('支付成功');

            }
          })         
          }
         }
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