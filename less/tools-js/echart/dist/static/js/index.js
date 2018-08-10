"use strict";

$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    var legend = ["语文", "数学", "英语", "政治", "历史", "地理", "化学", "生物", "物理", "美术"];
    var stus = ["锐宝宝", "李德森", "李赛罕", "李世民", "李大钊", "李云龙"];
    myChart.setOption({
        title: {
            text: "学员成绩表",
            subtext: "数据仅供参考",
            link: "https://github.com/LiHongyao"
        },
        toolbox: {
            feature: {
                //保存为图片
                saveAsImage: {},
                //缩放
                dataZoom: {},
                //切换图标类型
                magicType: {
                    type: ["line", "bar"]
                },
                //还原
                restore: {}
            }
        },
        tooltip: {
            trigger: "axis"
            // formatter: "学科：{a}<br/>姓名：{b}<br/>成绩：{c}"
        },
        legend: {
            type: "scroll",
            data: legend,
            orient: "horizontal",
            bottom: -5,
            selectedModel: "single",
            selected: function selected() {
                var selected = {};
                legend.forEach(function (key, index) {
                    if (index < 3) {
                        selected[key] = true;
                    } else {
                        selected[key] = false;
                    }
                });
                return selected;
            }
        },
        xAxis: {
            type: "category",
            data: stus
        },
        yAxis: {},
        series: function () {
            var series = [];
            legend.forEach(function (item) {
                series.push({
                    name: item,
                    type: "line",
                    markPoint: {
                        data: [{ type: "min", name: "最小值" }, { type: "max", name: "最大值" }]
                    },
                    markLine: {
                        data: [{ type: 'average', name: "平均值" }]
                    },
                    data: function () {
                        var grades = [];
                        stus.forEach(function (Element) {
                            grades.push(Math.floor(Math.random() * 100));
                        });
                        return grades;
                    }()

                });
            });
            return series;
        }()
    });
});