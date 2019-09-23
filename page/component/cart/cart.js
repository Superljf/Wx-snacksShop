// page/component/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      carts: [],
      hasList: false,
      totalPrice: 0,
      selectAllStatus: true,
      obj: {
        name: "hello"
      }
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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
        this.setData({
          hasList: true,
          carts: [
            {id: 1, title: '新鲜芹菜 半斤', image:'/image/s5.png',num:4,price: 0.01,seclected:true},
            {id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, seclected:true}
          ]
        });
        this.getTotalPrice();
  },
  // 当前商品选中事件
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const seclected = carts[index].seclected;
    carts[index].seclected = !seclected;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  // 删除购物车当前商品
deleteList(e) {
  const index = e.currentTarget.dataset.index;
  let carts = this.data.carts;
  carts.splice(index, 1);
  this.setData({
    carts: carts
  });
  if (!carts.length) {
    this.setData({
      hasList: false
    });
  } else {
    this.getTotalPrice();
  }
},

// 购物车全选事件

selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();
},

// 绑定加数量事件
addCount(e) {
  const index = e.currentTarget.dataset.index;
  let carts = this.data.carts;
  let num = carts[index].num;
  num = num + 1;
  carts[index].num = num;
  this.setData({
    carts: carts
  });
  this.getTotalPrice();
},

// 绑定减数量事件
minusCount(e) {
    const index = e.currentTarget.dataset.index;
    const obj = e.currentTarget.dataset.obj;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
        carts: carts
    });
    this.getTotalPrice();
},

// 计算总价
getTotalPrice() {
      let carts = this.data.carts;  // 获取购物车列表
      let total = 0;      
      for (let i = 0; i < carts.length; i ++) {   // 循环列表得到每个数据
          if (carts[i].selected) {  // 判断选中才会计算价格
            total += carts[i].num * carts[i].price;   // 所有价格加起来
          }
      }
      this.setData({                          // 最后赋值到data 中渲染到页面
        carts: carts,
        totalPrice: total.toFixed(2)
      });
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