// page/component/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        thumb:'',
        nickname: '',
        orders:[],
        hasAddress: false,
        address:{}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        var self = this;

        wx.getUserInfo({
          success: function (res) {
            self.setData({
              thumb: res.userInfo.avataUrl,
              nickname: res.userInfo.nickname
            })
          }
        }),
// 发起请求获取订单列表信息
        wx.request({
          url: '',
          success(res) {
            self.setData({
              orders: res.data
            })
          }
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
        var self = this;
          // 获取本地缓存 地址信息
          wx.getStorage({
            key: 'address',
            success: function(res) {
              self.setData({
                hasAddress: true,
                address: res.data
              })
            }
          })
  },
  // 发起支付请求
  payOrders() {
        wx.requestPayment({
          timeStamp: 'String1',
          nonceStr: 'String2',
          package: 'String3',
          singType: 'MD5',
          paySign: 'String4',
          success: function(res) {
              console.log(res)
          },
          fail: function(res) {
            wx.showModal({
              title: '支付提示',
              content:'<text>',
              showCancle: false
            })
          }
        })
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