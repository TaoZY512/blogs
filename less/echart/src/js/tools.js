class Tool {
    constructor(){}

    basic(){ }
    test() {
        let myChart = echarts.init($("#test")[0]);
        // 预先设置图表基本结构
        myChart.setOption({
            title: {
                text: "一周消费情况",
                subtext: "数据仅供参考"
            },
            toolbox: {
                feature: {
                    saveAsImage: {},
                    dataZoom: {},
                    magicType: {
                        type: ["line", "bar"]
                    },
                    restore: {}
                }
            },
            tooltip: {
                show: true
            },
            legend: {
                data: ["休闲娱乐"]
            },
            xAxis: {
                data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            },
            yAxis: {},
            series: []
              
        });
        // ajax 请求
        myChart.showLoading();
       setTimeout(() => {
        $.ajax({
            url: "./json/data.json",
            type: "GET",
            dataType: "json",
            success: (response) => {
                myChart.hideLoading();
                // 更新数据
                myChart.setOption({
                    series: [
                        {
                            name: "休闲娱乐",
                            type: "line",
                            data: response,
                            markPoint:{
                                data:[
                                    {type:"min",name:"最小值"},
                                    {type:"max",name:"最大值"},
                                ]
                            },
                           
                        }
                    ]
                });
            }
        })
       }, 1500);
    }

    test1(){
        let myChart = echarts.init($("#test1")[0]);
        myChart.setOption({
           title:{
               text:"天气状况"
           },
           tooltop:{
               show:true
           },
           legend:{
               data:["蒸发量","降水量","平均温度"]
           },
           toolbox:{
               feature:{
                   saveAsImage:{},
                   restore:{}
               }
           },
           xAxis:{
               data:(function(){
                   let month =[];
                   for(let i=1;i<=12;i++){
                       month.push(`${i}月`)
                   }
                   return month;
               })
           },
           yAxis:[
               {
                   type:"value",
                   name:"降水量",
                   min:0,
                   max:250,
                   interval:50,
                   axisLabel:{
                       formatter:"{value} ml"
                   }
                },
                {
                    type:"value",
                    name:"温度",
                    min:0,
                    max:25,
                    interval:5,
                    axisLabel:{
                        formatter:"{value} ℃"
                    }
                 }
           ],
           series:[
               {
                   name:"降水量",
                   type:"bar",
                   data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
               },
               {
                name:"蒸发量",
                type:"bar",
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:"平均温度",
                type:"line",
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
           ]
        });
    }
  
  
    
}
