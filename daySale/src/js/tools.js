class Tool{
    constructor(){}
    test(){
        let myChartLine = echarts.init($("#test")[0]);
        //预先设置图标基本结构
        myChartLine.setOption({
            title:{
                text:"本周生活消费数据"
            },
           tooltip:{
               show:true
           },
           legend:{
               data:["食品酒水","购物消费","居家生活","行车交通","休闲娱乐","人情费用","金融保险","药品医疗","其他"],
               top:40,
               right:-5,
               orient:"vertical"

           },
           xAxis:{
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
           },
           yAxis:{}
        });
        //ajax请求
        myChartLine.showLoading();
        $.ajax({
            url:"./static/json/index.json",
            type:"GET",
            dataType:"json",
            success:function success(response){
                myChartLine.hideLoading();
                //更新数据
                myChartLine.setOption({
                    series:[
                        {
                            name:response.diet.name,
                            type:"bar",
                            data:response.diet.value
                        },
                        {
                            name:response.shopping.name,
                            type:"bar",
                            data:response.shopping.value
                        },
                        {
                            name:response.life.name,
                            type:"bar",
                            data:response.life.value
                        },
                        {
                            name:response.traffic.name,
                            type:"bar",
                            data:response.traffic.value
                        },
                        {
                            name:response.entertainment.name,
                            type:"bar",
                            data:response.entertainment.value
                        },
                        {
                            name:response.social.name,
                            type:"bar",
                            data:response.social.value
                        },
                        {
                            name:response.finance.name,
                            type:"bar",
                            data:response.finance.value
                        },
                        {
                            name:response.medicine.name,
                            type:"bar",
                            data:response.medicine.value
                        },
                        {
                            name:response.other.name,
                            type:"bar",
                            data:response.other.value
                        },
                    ]
                })

            }
        })
    }
    chart(){
        let myChart = echarts.init($("#chart")[0]);
        
        //预先设置图标基本结构
        myChart.setOption({
            title:{
                text:"本周生活消费比重"
            },
           tooltip:{
               show:true
           },
           legend:{
               data:["食品酒水","购物消费","居家生活","行车交通","休闲娱乐","人情费用","金融保险","药品医疗","其他"],
               top:40,
               right:-5,
               orient:"vertical"

           }
          
        });
        //ajax请求
        $.ajax({
            url:"./static/json/index.json",
            type:"GET",
            dataType:"json",
            success:function success(response){
                let last = $(".gather");
                let gather=[];
                for(var i=0,len = last.length;i<len;i++){
                gather.push(last[i].innerHTML)
    }

                //更新数据
                myChart.setOption({
                    series:[
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:gather[0], name:response.diet.name},
                                {value:gather[1], name:response.shopping.name},
                                {value:gather[2], name:response.life.name},
                                {value:gather[3], name:response.traffic.name},
                                {value:gather[4], name:response.entertainment.name},
                                {value:gather[5], name:response.social.name},
                                {value:gather[6], name:response.finance.name},
                                {value:gather[7], name:response.medicine.name},
                                {value:gather[8], name:response.other.name}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                          
                      ]
                })

            }
        })
    }
}