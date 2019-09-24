// page/component/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      history: [],
      hot: ['新鲜芹菜', '大红枣', '滋补桂圆干'],
      result: [
        {
          id: 1,
          url: '../details/details',
          thumb: '/image/s4.png',
          title: '瓜子 100g',
          price: 0.01
        },
        {
          id: 2,
          url: '../details/details',
          thumb: '/image/s5.png',
          title: '新鲜芹菜 500g',
          price: 0.02
        }
      ],
      showKeywords: false,
        keywords: ['山东肚脐橙', '湖南冰糖橙', '麻涌香蕉', '冰糖心苹果'],
        value: '',
        showResult: false,
  },
  cancelSearch() {
      this.setData({
        showResult: false,
        showKeywords: false,
        value: ''
      })
  },
  searchInput(e) {
      if (!e.detail.value) {
        this.setData({
          showKeywords: false
        })
      } else {
        if(!this.data.showKeywords) {
          timeId && clearTimeout(timeId);
          timeId = setTimeout(() => {
            this.setData({
              showKeywords: true
            })
          }, 1000)
        }
      }
  },
keywordHandle(e) {
      const text = e.target.dataset.text;
      this.setData({
        value: text,
        showKeywords: false,
        showResult: true
      })
      this.historyHandle(text);
},
historyHandle(value) {
      let history = this.data.history;
      const idx = history.indexOf(value);
      if (idx === -1) {
        // 搜索记录只保留8个
        if (history.length > 7) {
          history.pop();
        }
      } else {
        history.splice(idx, 1);
      }
      history.unshift(value);
      wx.setStorageSync('history',JSON.stringify(history));
      this.setData({
          history
      });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
              const history = wx.setStorageSync('history');
              if (history) {
                this.setData({
                  history: JSON.parse(history)
                })
              console.log(this.data.history);
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