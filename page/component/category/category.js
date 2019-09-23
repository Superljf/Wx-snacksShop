// page/component/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      category: [
          {name: '果味', id: 'guowei'},
          {name: '蔬菜', id:'shucai'},
          {name: '炒货', id: 'chaohuo'},
          {name: '点心', id: 'dianxin'},
          {name: '粗茶', id: 'cucha'},
          {name: '淡饭', id: 'danfan'}
      ],
      detail: [],
      curIndex: 0,
      isScoll: false,
      toView: 'guowei'
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      var self = this;
      wx.request({
        url:'',
        success(res) {
          self.setData({
            detail : res.data
          })
        }
      });
  },

  switchTab(e) {
    const self = this;
    this.setData({
      isScoll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScoll: false
      })
    }, 1)
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

