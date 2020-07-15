// js交互事件
$(function () {
    // 设备监控
    // 切换
    $('.device span').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).text() == '异常设备监控') {
            $('.nav li:eq(0)').text('异常时间');
            $('.list li .address').text('深圳市宝安区中粮商务公园3栋17楼');
            $('.list li .address').next().text('777777');
            $('.list li .address').prev().text('20200707');
        } else {
            $('.nav li:eq(0)').text('故障时间');
            $('.list li .address').text('深圳市宝安区松柏路创维工业园2栋南区');
            $('.list li .address').next().text('666666');
            $('.list li .address').prev().text('20200706');
        }
    })
    // 移入移出 li
    $('.list li').hover(function () {
        $(this).addClass('active').siblings().removeClass('active');
    }, function () {
        $('.list li').removeClass('active');
    })

    // 滚动
    function roll() {
        $('.list ul').animate({ top: -385 }, 10000, 'linear', function () {
            $('.list ul').css('top', 0);
            roll();
        })
    };

    roll();

    // 根据天数显示订单
    var orderData = [
        { orders: '20,301,987', amount: '99834' },
        { orders: '301,987', amount: '9834' },
        { orders: '1,987', amount: '3834' },
        { orders: '987', amount: '834' }
    ];
    $('.dayNav li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.left h1').text(orderData[$(this).index()].orders);
        $('.right h1').text(orderData[$(this).index()].amount);
    })

    // 各省热销切换
    var hotData = [
        { name: '可爱多', num: '9,086' },
        { name: '娃哈哈', num: '8,341' },
        { name: '喜之郎', num: '7,407' },
        { name: '八喜', num: '6,080' },
        { name: '小洋人', num: '6,724' },
        { name: '好多鱼', num: '2,170' },
    ];
    $('.province li').mouseenter(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.brand ul').empty();
        hotData.unshift(hotData.pop());
        for (let i = 0; i < hotData.length; i++) {
            $('.brand ul').append('<li><span>' + hotData[i].name + '</span><span><s class="icon-up" style="color: #DC3C33"></s>' + hotData[i].num + '</span></li>');
        }
    })
})
// echarts图表
// 饼图
$(function () {
    // 初始化
    var myChart = echarts.init($('.picShow')[0]);
    option = {
        series: [
            {
                name: '点位统计',
                type: 'pie',
                radius: ['10%', '60%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 40, name: '湖北' }
                ],
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 8,
                    length2: 10
                }
            }
        ],
        color: ['#006CFF', '#60CDA0', '#ED8884', '#FF9F7F', '#0096FF', '#9FE6B8', '#32C5E9', '#1D9DFF'],
    };
    myChart.setOption(option);
})
// 柱状图
$(function () {
    // 初始化
    var myChart = echarts.init($('.barShow')[0]);

    var item = {
        value: 1000,
        itemStyle: {
            color: '#254065',
            opacity: 0.5
        }
    };
    option = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#0078d4',
                        opacity: 0.3
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#0078d4'],
                        opacity: 0.3
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#0078d4',
                        opacity: 0.3
                    }
                },
                axisTick: {
                    show: false
                }
            },
            {
                type: 'value',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#0078d4',
                        opacity: 0.3
                    }
                },
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '60%',
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#00f6f8' },
                            { offset: 1, color: '#006dd1' }
                        ]
                    )
                }

            }
        ]
    };

    myChart.setOption(option);
})
// 环形图
$(function () {
    // 初始化
    var myChart = echarts.init($('.sellTable')[0]);
    option = {
        series: [
            {
                name: '',
                type: 'pie',
                radius: ['110%', '130%'],
                center: ['48%', '80%'],
                avoidLabelOverlap: false,
                startAngle: 180,
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                data: [
                    {
                        value: 100,
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    { offset: 0, color: '#00f6f8' },
                                    { offset: 1, color: '#006dd1' }
                                ]
                            )
                        }
                    },
                    { value: 100, itemStyle: { color: '#12274d' } },
                    { value: 200, itemStyle: { color: 'transparent' } }
                ],
            }
        ]
    };
    myChart.setOption(option);
})
// 折线图
$(function () {
    // 初始化
    var myChart = echarts.init($('.dotted')[0]);
    var data = [
        [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    ];
    option1 = {
        title: {
            text: '单位：万',
            left: 10,
            textStyle: {
                color: '#4c9bfd',
                fontWeight: 400,
                fontSize: 12,
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['预期销售额', '实际销售额'],
            textStyle: {
                color: '#4c9bfd'
            },
            right: 10
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#0078d4',
                    opacity: 0.3
                }
            },
            axisTick: {
                show: false
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontSize: 10
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#0078d4'],
                    opacity: 0.3
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#0078d4',
                    opacity: 0.3
                }
            },
            axisTick: {
                show: false
            }
        },
        series: [
            {
                name: '预期销售额',
                type: 'line',
                data: data[0][0],
                smooth: true,
                symbolSize: 5,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#00f6f8' },
                            { offset: 1, color: '#006dd1' }
                        ]
                    )
                }
            },
            {
                name: '实际销售额',
                type: 'line',
                data: data[0][1],
                smooth: true,
                symbolSize: 5,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: 'yellowgreen' },
                            { offset: 1, color: 'purple' }
                        ]
                    )
                }
            },
        ]
    };
    myChart.setOption(option1);

    // 销售额统计切换年季月周
    $('.saleNav li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        option1.series[0].data = data[$(this).index() - 1][0];
        option1.series[1].data = data[$(this).index() - 1][1];
        myChart.setOption(option1);
    })

    // 无限切换
    var num = 0;
    setInterval(function () {
        num == $('.saleNav li').length - 1 ? num = 0 : num++;
        $('.saleNav li').eq(num).click();
    },3000)
})
// 迁徙图
$(function () {
    // 初始化
    var myChart = echarts.init($('.dataMap')[0]);
    // 指定图表的配置项和数据
    var chinaGeoCoordMap = {
        '黑龙江': [127.9688, 45.368],
        '内蒙古': [110.3467, 41.4899],
        "吉林": [125.8154, 44.2584],
        '北京市': [116.4551, 40.2539],
        "辽宁": [123.1238, 42.1216],
        "河北": [114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "山西": [112.3352, 37.9413],
        "陕西": [109.1162, 34.2004],
        "甘肃": [103.5901, 36.3043],
        "宁夏": [106.3586, 38.1775],
        "青海": [101.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "西藏": [91.11, 29.97],
        "四川": [103.9526, 30.7617],
        "重庆": [108.384366, 30.439702],
        "山东": [117.1582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [118.8062, 31.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [119.5313, 29.8773],
        "福建": [119.4543, 25.9222],
        "江西": [116.0046, 28.6633],
        "湖南": [113.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.3893, 19.8516],
        '上海': [121.4648, 31.2891]
    };
    var chinaDatas = [
        [{
            name: '黑龙江',
            value: 0
        }], [{
            name: '内蒙古',
            value: 0
        }], [{
            name: '吉林',
            value: 0
        }], [{
            name: '辽宁',
            value: 0
        }], [{
            name: '河北',
            value: 0
        }], [{
            name: '天津',
            value: 0
        }], [{
            name: '山西',
            value: 0
        }], [{
            name: '陕西',
            value: 0
        }], [{
            name: '甘肃',
            value: 0
        }], [{
            name: '宁夏',
            value: 0
        }], [{
            name: '青海',
            value: 0
        }], [{
            name: '新疆',
            value: 0
        }], [{
            name: '西藏',
            value: 0
        }], [{
            name: '四川',
            value: 0
        }], [{
            name: '重庆',
            value: 0
        }], [{
            name: '山东',
            value: 0
        }], [{
            name: '河南',
            value: 0
        }], [{
            name: '江苏',
            value: 0
        }], [{
            name: '安徽',
            value: 0
        }], [{
            name: '湖北',
            value: 0
        }], [{
            name: '浙江',
            value: 0
        }], [{
            name: '福建',
            value: 0
        }], [{
            name: '江西',
            value: 0
        }], [{
            name: '湖南',
            value: 0
        }], [{
            name: '贵州',
            value: 0
        }], [{
            name: '广西',
            value: 0
        }], [{
            name: '海南',
            value: 0
        }], [{
            name: '上海',
            value: 1
        }]
    ];

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = chinaGeoCoordMap[dataItem[0].name];
            var toCoord = [116.4551, 40.2539];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord,
                    value: dataItem[0].value
                }, {
                    coord: toCoord,
                }]);
            }
        }
        return res;
    };
    var series = [];
    [['北京市', chinaDatas]].forEach(function (item, i) {
        console.log(item)
        series.push({
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: .3 //尾迹线条曲直度
                }
            },
            data: convertData(item[1])
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: { //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: 'right', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function (params) {//圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 13
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function (val) {
                return 5 + val[2] * 5; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: '#f00'
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[0].name,
                    value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            }),
        },
            //被攻击点
            {
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    brushType: 'stroke',
                    scale: 4
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        //offset:[5, 0],
                        color: '#0f0',
                        formatter: '{b}',
                        textStyle: {
                            color: "#0f0"
                        }
                    },
                    emphasis: {
                        show: true,
                        color: "#f00"
                    }
                },
                symbol: 'pin',
                symbolSize: 50,
                data: [{
                    name: item[0],
                    value: chinaGeoCoordMap[item[0]].concat([10]),
                }],
            }
        );
    });

    option = {
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(166, 200, 76, 0.82)',
            borderColor: '#FFFFCC',
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: 'z-index:100',
            formatter: function (params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var res = "";
                var name = params.name;
                var value = params.value[params.seriesIndex + 1];
                res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
                return res;
            }
        },
        backgroundColor: "#013954",
        visualMap: { //图例值控制
            min: 0,
            max: 1,
            calculable: true,
            show: false,
            color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            zoom: 1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true, //是否允许缩放
            itemStyle: {
                normal: {
                    color: 'rgba(51, 69, 89, .5)', //地图背景色
                    borderColor: '#516a89', //省市边界线00fcff 516a89
                    borderWidth: 1
                },
                emphasis: {
                    color: 'rgba(37, 43, 61, .5)' //悬浮背景
                }
            }
        },
        series: series
    };
    myChart.setOption(option);
})