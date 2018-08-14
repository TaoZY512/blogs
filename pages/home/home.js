Page({
  data:{
    contentlist:''
  },
  onLoad(){
    // 网络请求
    wx,wx.request({
      url: 'https://route.showapi.com/341-1',
      data:{
        'showapi_appid':'66408',
        'showapi_sign':'35faf3bcf9944ea2975c3cdc6fe56d4d'
      },
      header:{

      },
      method:'GET',
      
      success:function(res){
        // console.log(res)
        // 将数据缓存至本地
        wx.setStorage({
          key: 'contentlist',
          data: res['data']['showapi_res_body']['contentlist']

        })
       
      },
     
    }),
      this.getCotents();
// 判断网络状态
    wx.getNetworkType({
      success: function (res) {
        console.log(res.networkType)
        if(res.networkType == 'none'){
   
        }
       },
    })
    wx.makePhoneCall({
      phoneNumber: '18782053272',
    })
  },
  getCotents() {
    let _this = this;
    wx.getStorage({
      key: 'contentlist',
      success: function (res) {
        // console.log(res['data'])
        // 更新数据层
        _this.setData({
          contentlist: res['data']
          
        })
        console.log(_this.setData)
      },
    })
  }
  
})