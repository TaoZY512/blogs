//app.js
App({
  // 程序生命周期
  onLaunch: function () {
    console.log('程序加载完成')
  },
  onShow(){
    console.log('程序进入前台')
  },
  onHide(){
     console.log('程序进入后台')
  },
  // 全局变量
  globalData: {
    userInfo: null
  }
})