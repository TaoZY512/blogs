class Tool {
    constructor() {}

    basic(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('main'));
        let legend  = ["语文", "数学", "英语", "政治", "历史", "地理", "化学", "生物", "物理", "体育", "音乐", "美术"];
        let stus    = ["周杰伦", "周润发", "周星驰", "李鸿章", "李世民", "李德森"];
        // 配置
        myChart.setOption({
            title: {
                text: "学员成绩表",
                subtext: "数据仅供参考",
                link: "http://github.com/LiHongyao"
            },
            //  工具箱
            toolbox: {
                feature: {
                    //  保存为图片
                    saveAsImage: {},
                    //  缩放
                    dataZoom: {},
                    //  切换图标类型
                    magicType: {
                        type: ["line", "bar"]
                    },
                    //  还原
                    restore: {},
                }
            },
            //  提示
            tooltip: {
                trigger: "axis",
                formatter: "学科：{a}<br/>姓名：{b}<br/>成绩：{c}"
            },
            legend: {
                type: "scroll",
                data: legend,
                orient: "horizontal",
                bottom: 0,
                selectedMode: "single",
                selected: (function(){
                    let selected = {};
                    legend.forEach((key, index) => {
                        if(index < 1) {
                            selected[key] = true;
                        }else {
                            selected[key] = false;
                        }
                    });
                    return selected;
                })()
            },
            xAxis: {
                type: "category",
                data: stus
            },
            yAxis: {},
            series: (function(){
                let series = [];
                legend.forEach(item => {
                    series.push({
                        name: item,
                        type: "line",
                        markPoint: {
                            data: [
                                {type: "min", name: "最小值"},
                                {type: "max", name: "最大值"},
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        },
                        data: (function(){
                            let grades = [];
                            stus.forEach(element => {
                                grades.push(Math.floor(Math.random() * 100) + 1);
                            });
                            return grades;
                        })()
                    });
                });
                return series;
            })()
        });
    }

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
            url: "./static/json/data.json",
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
                            markPoint: {
                                data: [
                                    {type: "min", name: "最小值"},
                                    {type: "max", name: "最大值"}
                                ]
                            },
                            markLine: {
                                data: [
                                    {type: "average", name: "平均值"}
                                ]
                            }
                        }
                    ]
                });
            }
        })
       }, 1500);
    }

    test1() {
        let myChart = echarts.init($("#test1")[0]);
        myChart.setOption({
            title: {
                text: "天气状况"
            },
            tooltip: { show: true},
            legend: {
                data: ["蒸发量", "降水量", "平均温度"]
            },
            toolbox: {
                feature: {
                    saveAsImage: {},
                    restore: {}
                }
            },
            xAxis: {
                data: (function() {
                    let month = [];
                    for(let i = 1; i <= 12; i++) {
                        month.push(`${i}月`);
                    }
                    return month;
                })()
            },
            yAxis: [
                {
                    type: "value",
                    name: "水量",
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: "{value} ml"
                    }
                },
                {
                    type: "value",
                    name: "温度",
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: "{value} °C"
                    }
                },
            ],
            series: [
                {
                    name: "降水量",
                    type: "bar",
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name: "蒸发量",
                    type: "bar",
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                },
                {
                    name: "平均温度",
                    type: "line",
                    yAxisIndex: 1,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }
            ]
        });
    }
}