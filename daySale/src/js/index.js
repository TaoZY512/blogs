$(function(){
//获取数据
$.ajax({
  url:"./static/json/index.json",
  type:"GET",
  dataType:"json",
  success:(response) => {
    //加载数据
    loadingHtml($(".drinks"),response.diet);
    loadingHtml($(".shopping"),response.shopping);
    loadingHtml($(".life"),response.life);
    loadingHtml($(".traffic"),response.traffic);
    loadingHtml($(".entertainment"),response.entertainment);
    loadingHtml($(".social"),response.social);
    loadingHtml($(".finance"),response.finance);
    loadingHtml($(".medicine"),response.medicine);
    loadingHtml($(".other"),response.other);
    // let last = $(".gather");
    // let gather=[];
    // for(var i=0,len = last.length;i<len;i++){
    //   gather.push(last[i].innerHTML)
    // }
    // $('#result').text(gather);
   
  }
})
 

  let tool = new Tool();
  tool.test();
  tool.chart();
});