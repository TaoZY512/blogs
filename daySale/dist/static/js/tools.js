"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tool = function () {
    function Tool() {
        _classCallCheck(this, Tool);
    }

    _createClass(Tool, [{
        key: "test",
        value: function test() {
            var myChartLine = echarts.init($("#test")[0]);
            //预先设置图标基本结构
            myChartLine.setOption({
                title: {
                    text: "本周生活消费数据"
                },
                tooltip: {
                    show: true
                },
                legend: {
                    data: ["食品酒水", "购物消费", "居家生活", "行车交通", "休闲娱乐", "人情费用", "金融保险", "药品医疗", "其他"],
                    top: 40,
                    right: -5,
                    orient: "vertical"

                },
                xAxis: {
                    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                },
                yAxis: {}
            });
            //ajax请求
            myChartLine.showLoading();
            $.ajax({
                url: "./static/json/index.json",
                type: "GET",
                dataType: "json",
                success: function success(response) {
                    myChartLine.hideLoading();
                    //更新数据
                    myChartLine.setOption({
                        series: [{
                            name: response.diet.name,
                            type: "bar",
                            data: response.diet.value
                        }, {
                            name: response.shopping.name,
                            type: "bar",
                            data: response.shopping.value
                        }, {
                            name: response.life.name,
                            type: "bar",
                            data: response.life.value
                        }, {
                            name: response.traffic.name,
                            type: "bar",
                            data: response.traffic.value
                        }, {
                            name: response.entertainment.name,
                            type: "bar",
                            data: response.entertainment.value
                        }, {
                            name: response.social.name,
                            type: "bar",
                            data: response.social.value
                        }, {
                            name: response.finance.name,
                            type: "bar",
                            data: response.finance.value
                        }, {
                            name: response.medicine.name,
                            type: "bar",
                            data: response.medicine.value
                        }, {
                            name: response.other.name,
                            type: "bar",
                            data: response.other.value
                        }]
                    });
                }
            });
        }
    }, {
        key: "chart",
        value: function chart() {
            var myChart = echarts.init($("#chart")[0]);

            //预先设置图标基本结构
            myChart.setOption({
                title: {
                    text: "本周生活消费比重"
                },
                tooltip: {
                    show: true
                },
                legend: {
                    data: ["食品酒水", "购物消费", "居家生活", "行车交通", "休闲娱乐", "人情费用", "金融保险", "药品医疗", "其他"],
                    top: 40,
                    right: -5,
                    orient: "vertical"

                }

            });
            //ajax请求
            $.ajax({
                url: "./static/json/index.json",
                type: "GET",
                dataType: "json",
                success: function success(response) {
                    var last = $(".gather");
                    var gather = [];
                    for (var i = 0, len = last.length; i < len; i++) {
                        gather.push(last[i].innerHTML);
                    }

                    //更新数据
                    myChart.setOption({
                        series: [{
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [{ value: gather[0], name: response.diet.name }, { value: gather[1], name: response.shopping.name }, { value: gather[2], name: response.life.name }, { value: gather[3], name: response.traffic.name }, { value: gather[4], name: response.entertainment.name }, { value: gather[5], name: response.social.name }, { value: gather[6], name: response.finance.name }, { value: gather[7], name: response.medicine.name }, { value: gather[8], name: response.other.name }],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }]
                    });
                }
            });
        }
    }]);

    return Tool;
}();