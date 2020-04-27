// DATA
// parse data properly

$(function () {
    window.QB = new QB_map();
});

function QB_map() {
    // var reading_text = [
    // 	'实时数据读取中...',
    // ];
    var oversea_click;
    var new_date;
    var oversea_y_data;
    var country_num, country_newcase, country_casetoal, country_curecase, country_deathcase;
    var rateByoversea = d3.map();
    var rateByoverseaArea = d3.map();
    var rateByoverseaNew = d3.map();
    var rateByoverseaDetail = d3.map();
    var rateByoverseaCure = d3.map();
    var rateByoverseaCureCase = d3.map();
    var oversea_y;
    var width = $(window).width() * 0.9;
    var isTransform = false;
    var oversea_data;
    var margin = {
        left: $(window).width() * 0.05,
        right: $(window).width() * 0.05,
        top: 10,
        bottom: 10
    };
    var rect_scale;
    var fill_type = 'total';
    var height = 400;

    // .attr("transform",'translate('+ margin.left +', 0)')

    // var proj = d3.geoMercator().scale(58).translate([width / 2, height / 2]);

    // console.log(direct_url)
    var table_map_data;
    var loading_status = 0;
    var centered;
    var counties_data;
    var back_color;
    var counties_id;
    var sum_id;
    var rateBycure = d3.map();
    var rateBycureCircle = d3.map();
    var rateBycureZero = d3.map();
    var fill_type = 'total';
    var t;
    var ani_cure = d3.map();
    var hue;
    var playing = false;

    var table_cities_font_size = 10;
    var provinces_table_data;
    var other_table_data = [];
    var other_add_table_data = [];
    var china_table_data = [];
    var underfind_table_data = [];
    //省
    var china_table_data_0 = [];
    // 市
    var china_table_data_1 = [];
    // 境外输入
    var china_table_data_2 = [];
    var china_table_data_3 = [];

    var all_line_data = [];
    var all_line_add_data = [];
    var all_line_new_data = [];
    var line_data_max = [];
    var line_data_add_max = [];
    var line_data_new_max = [];
    var yAxis;
    var yAxis_add;
    var yAxis_new;
    var yAxis_oversea_0;
    var yAxis_oversea_1;
    var new_people_num;

    var svg_height;
    var area_svg_height;
    var table_width;
    var svg_width;
    // var padding = {
    // 	left: 20,
    // 	top: 50,
    // 	right: 40,
    // 	bottom: 30
    // };
    var padding;
    var xScale,
        yScale,
        yScale_add,
        yScale_new,
        linePath,
        linePath_add,
        linePath_new,
        yScale_oversea_0,
        yScale_oversea_1,
        oversea_linePath_0,
        oversea_linePath_1,
        xScale_oversea;

    var oversea_linepath_data_max_0 = [0, 0];
    var oversea_linepath_data_max_1 = [0, 0];
    var oversea_linepath_data = [];
    var oversea_linepath_flag = 0;

    var table_head_font_size, table_province_font_size, table_cities_font_size;

    // var random = Math.floor(Math.random() * 5) + 1;

    // $('.reading_content').html(reading_text[random]);

    var UA = {};
    UA.isMobile = /iPad|iPod|iPhone|Android/.test(navigator.userAgent);
    UA.isWx = /MicroMessenger/.test(navigator.userAgent);

    var rateBydetial = d3.map();
    var rateBycities = d3.map();
    var rateByExtantcity = d3.map();
    var rateBycureCity = d3.map();
    var new_area_data;
    var linePath;
    var play = true;
    var init_play = true;
    var index = 0;
    var ani_map;
    var new_line_data_0 = [];
    var new_line_data_1 = [];
    var new_line_data_2 = [];
    var new_line_data_3 = [];
    var new_line_data_add_0 = [];
    var new_line_data_add_1 = [];
    var new_line_data_add_2 = [];
    var new_line_data_add_3 = [];
    var new_line_data_new_0 = [];
    var new_line_data_new_1 = [];
    var new_line_data_new_2 = [];
    var ani_line_data = [];
    var history_data;
    var new_history_data;
    var all_history_data;
    var linepath_index_data;
    var linepath_index_add_data;
    var linepath_index_new_data;

    var province_total_data;
    var province_total;
    var rateById = d3.map();
    var rateByExtant = d3.map();
    var rateByNew = d3.map();
    var rateByOld = d3.map();
    var rateProvince = d3.map();

    var extant_total_index = 0;

    var table_color = [
        '#1a1a1a',
        '#05a7d3',
        '#2c50b0',
        '#4ab04f',
        // '#e53934',
        '#1A1A1A',
        '#f3faff',
        '#666666',
        '#B3B3B3',
        '#1A1A1A',
        '#4D4D4D',
        '#606060',
        // '#1A1A1A'
        "#feb24c"
    ];

    var col_width;

    // var ani_time_2 = ["1月15日", "1月16日", "1月17日", "1月18日", "1月19日", "1月20日", "1月21日", "1月22日", "1月23日", "1月24日", "1月25日", "1月26日", "1月27日", "1月28日", "1月29日", "1月30日", "1月31日", "2月1日", "2月2日", "2月3日", "2月4日", "2月5日", "2月6日", "2月7日", "2月8日"];

    // //新增日期需要添加的！！！！！！！！！！！！
    // // var startDate = new Date("2020-01-15");
    // // var startDate = new Date(new Date(new Date('2020-01-15').toLocaleDateString()).getTime());
    // // var startDate = new Date(new Date(new Date('2020-01-15').getTime()).setHours(0, 0, 0, 0));
    // var startDate = new Date(new Date(new Date('2020-01-23').getTime()).setHours(0, 0, 0, 0));
    // var endDateHour = new Date().getHours();
    // // console.log(endDateHour)
    // var endDate = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
    // // var endDate = new Date(new Date(new Date().getTime()-24*60*60*1000).setHours(23,59,59,999));
    // var endDate = new Date(new Date(new Date().getTime()).setHours(23, 59, 59, 999));

    // var Datelength = Math.ceil((endDate - startDate) / (24 * 3600 * 1000));
    // // var Datelength = (endDate - startDate)/(24*3600*1000);
    // // console.log(Math.ceil(Datelength/(24*3600*1000)));
    // // console.log(Datelength);
    // var totalDate = [];
    // var ani_time = [];

    //过去30天
    // var startDate = new Date(new Date(new Date('2020-01-23').getTime()).setHours(0, 0, 0, 0));
    var endDateHour = new Date().getHours();
    // console.log(endDateHour)
    // var endDate = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
    // var endDate = new Date(new Date(new Date().getTime()-24*60*60*1000).setHours(23,59,59,999));
    var endDate = new Date(new Date(new Date().getTime()).setHours(23, 59, 59, 999));
    // var Datelength = Math.ceil((endDate - startDate) / (24 * 3600 * 1000));
    var Datelength = 30;
    var startDate = new Date(new Date(endDate.getTime() - (24 * 3600 * 1000) * (Datelength - 1)).setHours(23, 59, 59, 999));

    var totalDate = [];
    var ani_time = [];

    // var map_Date = [];
    var ani_time_seq = ani_time.length;
    var ani = d3.map();
    var ani_extant = d3.map();
    if (endDateHour >= 0 && endDateHour < 7) {
        // console.log('yes')
        $('.column_y,.oversea_column_y').css('visibility', 'hidden');
    } else {
        $('.column_y,.oversea_column_y').css('visibility', 'visible');
    }

    if (UA.isMobile) {
        if ($(window).width() <= 320) {
            var proj_oversea = d3
                .geoRobinson()
                // .center([20,40])
                // .scale(56)
                .scale(56)
                .translate([width / 2, height / 4]);
        } else if ($(window).width() >= 400) {
            var proj_oversea = d3
                .geoRobinson()
                // .center([20,40])
                // .scale(56)
                .scale(66)
                .translate([width / 2, height / 4]);
        } else {
            var proj_oversea = d3
                .geoRobinson()
                // .center([20,40])
                // .scale(56)
                .scale(62)
                .translate([width / 2, height / 4]);
        }
    } else {
        var width = 1400;
        var height = 600;
        var proj_oversea = d3
            .geoRobinson()
            // .center([20,40])
            .scale(220)
            .translate([width / 2, height / 1.75]);
    }
    var path_oversea = d3.geoPath().projection(proj_oversea);

    for (var i = 0; i < Datelength; i++) {
        // var currentDate_0;

        var date = new Date(startDate.getTime() + i * (24 * 3600 * 1000));
        // console.log(date)
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var currentDate_1 = month + '月' + strDate + '日';
        if (i < Datelength - 1) {
            ani_time.push(currentDate_1);
        } else {
            if (endDateHour > 7) {
                ani_time.push(currentDate_1);
            }
        }
        if (month >= 1 && month <= 9) {
            month = '0' + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = '0' + strDate;
        }
        var currentDate_0 = month + '_' + strDate;
        // var currentDate_2 = "Number(d.values[0]['"+currentDate_0+"_casetotal'])";
        // currentDate_2 = parseInt(currentDate_2);
        // totalDate.push(currentDate_0);
        if (i < Datelength - 1) {
            totalDate.push(currentDate_0);
        } else {
            if (endDateHour > 7) {
                totalDate.push(currentDate_0);
            }
        }
        // map_Date.push(currentDate_2);
    }
    // console.log(totalDate)
    //修改bubble大小
    // 左下角的图
    $('.tl').css({
        'background-image': "url('./assets/tl_bg.png')",
        // 'background-size': 'contain',
        // 'background-position': 'center',
        'background-size': 'auto 90%',
        'background-position': 'left bottom',
        'background-repeat': 'no-repeat',
        position: 'relative'
    });

    // $('.tl').append("<div class='tl_1'></div><div class='tl_2'></div>");
    $('.tl').append("<div class='tl_2'></div>");

    // UA判断

    if (UA.isMobile) {
        var width = $(window).width() * 0.9;
        var height = 400;
        var method = 'touchstart';
        if ($(window).width() <= 320) {
            var proj = d3.geoMercator().center([103, 30]).scale(260).translate([width / 2, height / 2]);
        } else if ($(window).width() > 320 && $(window).width() <= 375) {
            var proj = d3.geoMercator().center([103, 30]).scale(300).translate([width / 2, height / 2]);
        } else if ($(window).width() > 375 && $(window).width() <= 600) {
            var proj = d3.geoMercator().center([103, 30]).scale(336).translate([width / 2, height / 2]);
        }
    } else {
        var width = 1200;
        var height = 600;
        var method = 'click';
        var proj = d3.geoMercator().center([106, 38]).scale(750).translate([width / 2, height / 2]);
    }

    var path = d3.geoPath().projection(proj);

    // 创建地图画布
    var svg = d3
        .select('#map')
        .append('svg')
        .attr('class', 'main_map')
        .attr('width', function () {
            if (UA.isMobile) {
                return width;
            } else {
                return 1400;
            }
        })
        .attr('height', function () {
            if (UA.isMobile) {
                return height;
            } else {
                return 800;
            }
        });
    // dashed
    var defs = svg.append('defs');

    defs
        .append('svg:pattern')
        .attr('id', 'pic1')
        .attr('patternUnits', 'userSpaceOnUse')
        .attr('width', 22)
        .attr('height', 22)
        .append('svg:image')
        .attr('xlink:href', './assets/dashed.png')
        .attr('width', 23)
        .attr('height', 23);

    // dot
    var defs_dot = svg.append('defs');

    defs_dot
        .append('svg:pattern')
        .attr('id', 'dot')
        .attr('patternUnits', 'userSpaceOnUse')
        .attr('width', 22)
        .attr('height', 22)
        .append('svg:image')
        .attr('xlink:href', './assets/dot.png')
        .attr('width', 23)
        .attr('height', 23);

    //阴影的效果
    var defs_bg = svg.append('defs');

    defs_bg
        .append('filter')
        .attr('id', 'box_shadow')
        .attr('x', '0')
        .attr('y', '0')
        .attr('widht', '200%')
        .attr('height', '200%');

    d3
        .select('#box_shadow')
        .append('feOffset')
        .attr('result', 'offOut')
        .attr('in', 'SourceGraphic')
        .attr('dx', '1')
        .attr('dy', '1');

    d3
        .select('#box_shadow')
        .append('feGaussianBlur')
        .attr('result', 'blurOut')
        .attr('in', 'offOut')
        .attr('stdDeviation', '10');

    d3.select('#box_shadow').append('feBlend').attr('in', 'ourceGraphic').attr('in2', 'offOut').attr('mode', 'normal');

    if (window.location.href.split('?')[1] != undefined) {
        var direct_url = window.location.href.split('?')[1];
        console.log(direct_url)
        if (direct_url.includes('oversea_cure')) {
            direct_url = 'oversea_cure';
        } else if (direct_url.includes('cure')) {
            direct_url = 'cure';
        } else if (direct_url.includes('oversea')) {
            direct_url = 'oversea';
        } else if (direct_url.includes('total')) {
            direct_url = 'total';
        }
    } else {
        var direct_url;
        $('.arrow_left').eq(0).css('background', '#feb24c');
        $('.table_1,#map_1').hide();
        if (!UA.isMobile) {
            $('.source_container').css('top', '450px');
            $('.share_tip').css('top', '450px');
        }
        // click_trigger(1,3);
    }
    // 地图初始确诊or治愈判断
    switch (direct_url) {
        case 'cure':
            // 我J装备情况初始化时
            $('.summary_title').html('我J WQ装备变化情况（含港澳台）');
            fill_type = 'cure';
            $('.table_1,#map_1').hide();
            if (!UA.isMobile) {
                $('.source_container').css('top', '450px');
                $('.share_tip').css('top', '450px');
            }
            // direct_url = window.location.href + '?cure';
            $('.arrow_container').css('background', '#32a355');
            $('.update_time').css('background-image', 'linear-gradient(90deg, #33C695, transparent)');
            $('.header').css('background-image', 'linear-gradient(90deg, #D1ED5A, #33C695)');
            $('.arrow_left,.arrow_right').css('background-color', '#77c779');
            $(this).css('background-color', '#feb24c');
            $('.search').css('background-image', 'url(./assets/search_c.png)');
            $('.around').css('background-image', 'url(./assets/around_c.png)');
            $('.share_map').css('background-image', 'url(./assets/share_map_c.png)');

            // $('.reverse').css({
            // 	'background-color': '#77c779',
            // 	color: '#fff',
            // 	'box-shadow': '0px 2px 0px 0px #006837'
            // });

            $('.header').css('background-color', '#77c779');
            $('.tl').css('background-image', 'url(./assets/tl_bg_cure.png)');
            $('.tl_1').css('background-image', 'url(./assets/tl_1_cure.png)');
            $(".tl_2").css("background-image", 'url(./assets/tl_2_cure.png)');
            $('.city_tl').css('background-image', 'url(./assets/tl_city_2.png)');
            $('.world_tl_1').css('background-image', 'url(./assets/world_rect_cure.png)');
            $('.world_tl_2').css('background-image', 'url(./assets/world_tl_cure.png)');
            $('.href_cure').css('background', '#feb24c');
            setTimeout(function () {
                click_trigger(1);
            }, 1600);
            break;
        case 'oversea_cure':
            //外军装备情况初始化时
            // console.log('外军装备情况初始化时')
            fill_type = 'cure';
            $('.oversea_title').html('外J WQ装备目标');
            $('.table_0,#map').hide();
            if (!UA.isMobile) {
                $('.source_container').css('top', '0px');
                $('.share_tip').css('top', '0px');
            }
            // direct_url = window.location.href + '?cure';
            $('.arrow_container').css('background', '#32a355');
            $('.update_time').css('background-image', 'linear-gradient(90deg, #33C695, transparent)');
            $('.header').css('background-image', 'linear-gradient(90deg, #D1ED5A, #33C695)');
            $('.arrow_left,.arrow_right').css('background-color', '#77c779');
            $(this).css('background-color', '#feb24c');
            $('.search').css('background-image', 'url(./assets/search_c.png)');
            $('.around').css('background-image', 'url(./assets/around_c.png)');
            $('.share_map').css('background-image', 'url(./assets/share_map_c.png)');

            // $('.reverse').css({
            // 	'background-color': '#77c779',
            // 	color: '#fff',
            // 	'box-shadow': '0px 2px 0px 0px #006837'
            // });

            $('.header').css('background-color', '#77c779');
            $('.tl').css('background-image', 'url(./assets/tl_bg_cure.png)');
            $('.tl_1').css('background-image', 'url(./assets/tl_1_cure.png)');
            $('.city_tl').css('background-image', 'url(./assets/tl_city_2.png)');
            $('.world_tl_1').css('background-image', 'url(./assets/world_rect_cure.png)');
            $('.world_tl_2').css('background-image', 'url(./assets/world_tl_cure.png)');
            $('.href_oversea_cure').css('background', '#feb24c');

            setTimeout(function () {
                // click_trigger(1);
                overseaYscale_change(1);
            }, 1600);
            break;
        case 'total':
            /*我J BD情况初始化*/
            $('.summary_title').html('我J 人员变化情况（含港澳台）');
            fill_type = 'total';
            $('.table_1,#map_1').hide();
            if (!UA.isMobile) {
                $('.source_container').css('top', '450px');
                $('.share_tip').css('top', '450px');
            }
            // direct_url = window.location.href + '?total';
            $('.arrow_container').css('background', '#2c50b0');
            $('.update_time').css('background-image', 'linear-gradient(90deg, #2C50B0, transparent)');
            $('.header').css('background-image', 'linear-gradient(90deg, #77A3FF, #2C50B0)');
            $('.arrow_left,.arrow_right').css('background-color', '#547edb');
            $(this).css('background-color', '#feb24c');
            $('.search').css('background-image', 'url(./assets/search.png)');
            $('.around').css('background-image', 'url(./assets/around.png)');
            $('.share_map').css('background-image', 'url(./assets/share_map.png)');
            $(".extant_total_box").show();
            // $('.reverse').css({
            // 	// 'background-color': '#FEB34C',
            // 	// color: '#000',
            // 	// 'box-shadow': '0px 2px 0px 0px #512202'
            // 	'background-color': '#B3B3B3',
            // 	color: '#fff',
            // 	'box-shadow': '0px 0px 0px 0px #512202'
            // });

            $('.header').css('background-color', '#2c50b0');
            $('.tl').css('background-image', 'url(./assets/tl_bg.png)');
            $('.tl_1').css('background-image', 'url(./assets/tl_1.png)');
            $(".tl_2").css("background-image", 'url(./assets/tl_2.png)');
            $('.city_tl').css('background-image', 'url(./assets/tl_city_1.png)');
            $('.world_tl_1').css('background-image', 'url(./assets/world_rect.png)');
            $('.world_tl_2').css('background-image', 'url(./assets/world_tl.png)');
            $('.href_total').css('background', '#feb24c');

            // d3.select('.text').selectAll('text').text(function (d) {
            //     // var ps = rateByNew.get(d.province)
            //     var number = rateByNew.get(d.properties.name);
            //     // if (number != 0) {
            //     //     return number
            //     // }
            //     if (d.properties.name == '香港') {
            //         // console.log('hk', number)
            //         return '香港：新增确诊' + number + '例';
            //     }
            //     if (d.properties.name == '澳门') {
            //         return '澳门：新增确诊' + number + '例';
            //     }
            // });
            setTimeout(function () {
                click_trigger(1, 3);
                // click_trigger(3);
            }, 1600);
            break;
        case 'oversea':
            // 外J BD情况
            fill_type = 'total';
            $('.oversea_title').html('外J BD情况');
            $('.table_0,#map').hide();
            if (!UA.isMobile) {
                $('.source_container').css('top', '0px');
                $('.share_tip').css('top', '0px');
            }
            // direct_url = window.location.href + '?total';
            $('.arrow_container').css('background', '#2c50b0');
            $('.update_time').css('background-image', 'linear-gradient(90deg, #2C50B0, transparent)');
            $('.header').css('background-image', 'linear-gradient(90deg, #77A3FF, #2C50B0)');
            $('.arrow_left,.arrow_right').css('background-color', '#547edb');
            $(this).css('background-color', '#feb24c');
            $('.search').css('background-image', 'url(./assets/search.png)');
            $('.around').css('background-image', 'url(./assets/around.png)');
            $('.share_map').css('background-image', 'url(./assets/share_map.png)');

            // $('.reverse').css({
            // 	'background-color': '#FEB34C',
            // 	color: '#000',
            // 	'box-shadow': '0px 2px 0px 0px #512202'
            // });

            $('.header').css('background-color', '#2c50b0');
            $('.tl').css('background-image', 'url(./assets/tl_bg.png)');
            $('.tl_1').css('background-image', 'url(./assets/tl_1.png)');
            $('.city_tl').css('background-image', 'url(./assets/tl_city_1.png)');
            $('.world_tl_1').css('background-image', 'url(./assets/world_rect.png)');
            $('.world_tl_2').css('background-image', 'url(./assets/world_tl.png)');
            $('.href_oversea').css('background', '#feb24c');

            setTimeout(function () {
                overseaYscale_change(0);
            }, 1600);
            break;
        default:
            setTimeout(function () {
                click_trigger(1, 3);
            }, 1600);
            break;
    }

    // 各地区详细信息提示框
    $('.tool_tip').css('display', 'none');

    $('.tool_tip').on('click', function () {
        $(this).css('display', 'none');
    });

    $('.share_blank').on('click', function () {
        $(this).fadeOut();
    });

    function map_back() {
        /*
        * 返回上一层
        * 我J BD情况 && 我J WQ装备情况
        */
        if (playing == true) {
            $('.reverse,.clock_content,.slider').show();
        }
        console.log(fill_type)
        if (fill_type == "total") {
            // 我J BD变化情况
            $(".extant_total_box").show();
            $('.summary_title').html('我J 人员变化情况（含港澳台）');
        } else {
            // 我J wQ装备变化情况
            $('.summary_title').html('我J WQ装备变化情况（含港澳台）');
        }
        d3.select('.counties').remove();
        d3.select('.counties_text').remove();
        $('.cities_count,.tool_tip').hide();
        // setTimeout(function(){
        $('.reverse,.tl').show();
        setTimeout(function () {
            $('.circle,.bg_circle,.text,.nine_0,.nine_1').fadeIn();
            if (playing == false) {
                if (fill_type == 'total') {
                    $('.arrow_right').show();
                } else {
                    $('.arrow_left').show();
                }
            }
        }, 900);
        // },1000)

        $(".column").eq(1).show();
        if (UA.isMobile) {
            if ($(window).width() < 360) {
                $(".column").width("16%");
                $(".summary").css("left", "52%");
            } else {
                $(".column").width("19%");
                $(".summary").css("left", "51%");
            }
        } else {
            $(".column").width("16%");
            $(".summary").css("left", "50%");
        }

        d3.select("#province_广东").style('fill-opacity', '1')

        d3
            .select('.states')
            .transition()
            .duration(750)
            .attr(
                'transform',
                'translate(' +
                width / 2 +
                ',' +
                height / 2 +
                ')scale(' +
                1 +
                ')translate(' +
                -width / 2 +
                ',' +
                -height / 2 +
                ')'
            );
        d3
            .select('#province_台湾')
            .transition()
            .duration(750)
            .attr(
                'transform',
                'translate(' +
                width / 2 +
                ',' +
                height / 2 +
                ')scale(' +
                1 +
                ')translate(' +
                -width / 2 +
                ',' +
                -height / 2 +
                ')'
            );
        d3.select('.states').selectAll('path').attr('opacity', '1').style('stroke-width', '0.2px');
        setTimeout(function () {
            d3.select('.states').selectAll('path').attr('pointer-events', 'auto');
            // d3.select('#province_台湾').attr('pointer-events', 'none')
            d3.select('#province_香港').attr('pointer-events', 'none');
            d3.select('#province_澳门').attr('pointer-events', 'none');
        }, 1300);
        d3.select('.active').style('fill-opacity', '1').classed('active', null);
        // $('.main_map').css('top', '0px');
        $('.main_map').css('top', '-50px');
        // $('.column_type').eq(0).html('现存确诊');
        $('.column').eq(0).children('.number').html(source_text[0].imported_totalcase);
        $('.column').eq(1).children('.number').html(source_text[0].inprogresscase);
        $('.column').eq(2).children('.number').html(source_text[0].totalcase);
        $('.column').eq(3).children('.number').html(source_text[0].curecase);
        $('.column').eq(4).children('.number').html(source_text[0].deathcase);
        // 差值
        $('.y_number').eq(0).html(function () {
            if (source_text[0].imported_newcase.split('-').length == 2) {
                return source_text[0].imported_newcasee;
            } else {
                // if(source_text[0].imported_newcase == "0"){
                // 	return "-"
                // }else{
                return '+' + source_text[0].imported_newcase;
                // }
            }
        });

        $('.y_number').eq(1).html(function () {
            if (source_text[0].change_inprogresscase.split('-').length == 2) {
                return source_text[0].change_inprogresscase;
            } else {
                // if(source_text[0].change_inprogresscase == "0"){
                // 	return "-"
                // }else{
                return '+' + source_text[0].change_inprogresscase;
                // }
            }
        });

        $('.y_number').eq(2).html(function () {
            if (source_text[0].newcase.split('-').length == 2) {
                return source_text[0].newcase;
            } else {
                // if(source_text[0].newcase == "0"){
                // 	return "-"
                // }else{
                return '+' + source_text[0].newcase;
                // }
            }
        });
        $('.y_number').eq(3).html(function () {
            if (source_text[0].new_curecase.split('-').length == 2) {
                return source_text[0].new_curecase;
            } else {
                // if(source_text[0].new_curecase == "0"){
                // 	return "-"
                // }else{
                return '+' + source_text[0].new_curecase;
                // }
            }
        });
        $('.y_number').eq(4).html(function () {
            if (source_text[0].new_deathcase.split('-').length == 2) {
                return source_text[0].new_deathcase;
            } else {
                // if(source_text[0].new_deathcase == "0"){
                // 	return "-";
                // }else{
                return '+' + source_text[0].new_deathcase;
                // }
            }
        });
        $('.column_y').css('visibility', 'visible');
        if (!UA.isMobile) {
            $('.hint').css('top', '880px');
        }
    }

    $('.back').on(method, function () {
        // $(this).hide()
        map_back();

    });

    //判断是否是国内数据

    //右边（装备情况）
    // $(".arrow_right").on("click", function () {
    // $(document).on("click",".arrow_right", function () {
    $(document).on(method, '.arrow_right', function () {
        fill_type = 'cure';
        var className = $(this).attr('class').split(' ')[1];
        $(".column").eq(1).show();
        if (className == 'href_cure') {
            // 我J装备情况
            padding = {
                left: 20,
                top: 50,
                right: 40,
                bottom: 30
            };
            $('.table_1,#map_1').hide();
            $('.table_0,#map').show();
            window.history.replaceState({}, 0, '?cure');
            if (!UA.isMobile) {
                $('.source_container').css('top', '450px');
                $('.share_tip').css('top', '450px');
            }
            map_back();
            $(".extant_total_box").hide();

            if ($(".areapath_box").length == 0) {
                draw_history_linePath(all_history_data);
                draw_history_add_linePath(new_history_data);
                draw_oversea_input(china_table_data_2);
                make_china_table(provinces_table_data);
                draw_cities_table(provinces_table_data, 0);
            }
        } else {
            //外J装备情况
            padding = {
                left: 40,
                top: 50,
                right: 60,
                bottom: 30
            };
            $('.table_0,#map').hide();
            $('.table_1,#map_1').show();
            window.history.replaceState({}, 0, '?oversea_cure');
            if (!UA.isMobile) {
                $('.source_container').css('top', '0px');
                $('.share_tip').css('top', '0px');
            }
            back_oversea();
            $(".extant_total_box").hide();

            if ($(".oversea_table_tl").length == 0) {
                make_oversea_table(other_table_data);
            }
        }
        // direct_url = window.location.href + '?cure';
        // $(this).hide();
        // $(".arrow_left").show();
        d3.select('.zsgz')
            .select('image')
            .attr('xlink:href', function () {
                if (fill_type == "total") {
                    return './assets/ship.svg'
                } else {
                    return './assets/ship_cure.svg'
                }
            })

        // $('.reverse').css({
        // 	'background-color': '#77c779',
        // 	color: '#fff',
        // 	'box-shadow': '0px 2px 0px 0px #006837'
        // });
        // $(".header").css("background-color", "#77c779");
        $('.tl').css('background-image', 'url(./assets/tl_bg_cure.png)');
        $('.tl_1').css('background-image', 'url(./assets/tl_1_cure.png)');
        $(".tl_2").css("background-image", 'url(./assets/tl_2_cure.png)');
        $('.city_tl').css('background-image', 'url(./assets/tl_city_2.png)');
        $('.world_tl_1').css('background-image', 'url(./assets/world_rect_cure.png)');
        $('.world_tl_2').css('background-image', 'url(./assets/world_tl_cure.png)');
        //
        $('.arrow_container').css('background', '#32a355');
        $('.update_time').css('background-image', 'linear-gradient(90deg, #33C695, transparent)');
        $('.header').css('background-image', 'linear-gradient(90deg, #D1ED5A, #33C695)');
        $('.arrow_left,.arrow_right').css('background-color', '#77c779');
        // $(this).css('background-color', '#feb24c')
        $('.' + className).css('background-color', '#feb24c');
        $('.search').css('background-image', 'url(./assets/search_c.png)');
        $('.around').css('background-image', 'url(./assets/around_c.png)');
        $('.share_map').css('background-image', 'url(./assets/share_map_c.png)');

        d3
            .select('.handle')
            .attr('fill', function () {
                if (fill_type == 'total') {
                    return '#fed976';
                } else {
                    return '#77c779';
                }
            })
            .attr('stroke', function () {
                if (fill_type == 'total') {
                    return '#512202';
                } else {
                    return '#006837';
                }
            });
        d3.select('.text').selectAll('text').text(function (d) {
            // var ps = rateByNew.get(d.province)
            var number = rateBycureCircle.get(d.properties.name);
            // if (number != 0) {
            //     return number
            // }
            if (d.properties.name == '香港') {
                // console.log('hk', number)
                return '香港：新增飞机 ' + number + ' 架';
            }
            if (d.properties.name == '澳门') {
                return '澳门：新增飞机 ' + number + ' 架';
            }
        });
        d3.select('.bg_circle').selectAll('circle').transition().attr('r', function (d) {
            // var ps = rateByNew.get(d.province)
            if (rateBycureCircle.get(d.properties.name) >= 0) {
                return circle_scale_cure(rateBycureCircle.get(d.properties.name));
            } else {
                return 0;
            }
        });
        d3.select('.circle').selectAll('circle').transition().attr('r', function (d) {
            // var ps = rateByNew.get(d.province)
            if (rateBycureCircle.get(d.properties.name) >= 0) {
                return circle_scale_cure(rateBycureCircle.get(d.properties.name));
            } else {
                return 0;
            }
        });
        d3
            .select('.states')
            .selectAll('path')
            .transition() // .duration()
            .style('fill', function (d) {
                if (rateBycure.get(d.id) == 0) {
                    return '#fff';
                } else if (rateBycure.get(d.id) > 0 && rateBycure.get(d.id) <= 25) {
                    return '#ffffcc';
                } else if (rateBycure.get(d.id) > 25 && rateBycure.get(d.id) <= 50) {
                    return '#c2e699';
                } else if (rateBycure.get(d.id) > 50 && rateBycure.get(d.id) <= 75) {
                    return '#78c679';
                } else if (rateBycure.get(d.id) > 75 && rateBycure.get(d.id) <= 99.99999) {
                    return '#31a354';
                } else {
                    return '#006837';
                }
            });
        d3.select('.oversea_svg').select('.oversea').selectAll('path').style('fill', function (d) {
            if (rateByoverseaCure.get(d.properties.name) == 0) {
                return '#fff';
            } else if (rateByoverseaCure.get(d.properties.name) > 0 && rateByoverseaCure.get(d.properties.name) <= 25) {
                return '#ffffcc';
            } else if (
                rateByoverseaCure.get(d.properties.name) > 25 &&
                rateByoverseaCure.get(d.properties.name) <= 50
            ) {
                return '#c2e699';
            } else if (
                rateByoverseaCure.get(d.properties.name) > 50 &&
                rateByoverseaCure.get(d.properties.name) <= 75
            ) {
                return '#78c679';
            } else if (
                rateByoverseaCure.get(d.properties.name) > 75 &&
                rateByoverseaCure.get(d.properties.name) <= 99
            ) {
                return '#31a354';
            } else if (rateByoverseaCure.get(d.properties.name) >= 100) {
                return '#006837';
            } else {
                return 'url(#dot_1)';
            }
        });
        d3
            .select('.oversea_rect')
            .selectAll('rect')
            .transition()
            .attr('height', function (d) {
                if (fill_type == 'total') {
                    if (d.properties.cp != undefined && rateByoverseaNew.get(d.properties.name) > 0) {
                        // console.log(rect_scale(rateByoverseaNew.get(d.properties.name)))
                        return rect_scale(rateByoverseaNew.get(d.properties.name));
                    }
                } else {
                    if (d.properties.cp != undefined && rateByoverseaCureCase.get(d.properties.name) > 0) {
                        // console.log(rect_scale(rateByoverseaCureCase.get(d.properties.name)))
                        return rect_scale_cure(rateByoverseaCureCase.get(d.properties.name));
                    }
                }
            })
            .attr('transform', function (d) {
                if (fill_type == 'total') {
                    if (d.properties.cp != undefined && rateByoverseaNew.get(d.properties.name) > 0) {
                        return 'translate(0,' + -rect_scale(rateByoverseaNew.get(d.properties.name)) + ')';
                    }
                } else {
                    if (d.properties.cp != undefined && rateByoverseaCureCase.get(d.properties.name) > 0) {
                        return 'translate(0,' + -rect_scale_cure(rateByoverseaCureCase.get(d.properties.name)) + ')';
                    }
                }
            });
        // click_trigger(0)
        table_word_wrap();
        tabe_text_right();
        table_head_margin();
        click_trigger(1);
        // overseaYscale_change(1);
        setTimeout(overseaYscale_change(1), 10);
        $('.oversea_linepath_legend').css('left', $('.oversea_linepath_title').width() + 26 + 'px');

        // var table_head_top = $(".table").find(".table_head_container_1")
        //   .find(".table_head")
        //   .offset().top;
    });

    // 左边
    // $(".arrow_left").on("click", function () {
    // $(document).on("click",".arrow_left", function () {
    $(document).on(method, '.arrow_left', function () {
        fill_type = 'total';
        var className = $(this).attr('class').split(' ')[1];
        $(".column").eq(1).show();
        // if(UA.isMobile){
        // 	$(".column").width("19%");
        // 	$(".summary").css("left","51%");
        // }else{
        // 	$(".column").width("16%");
        // 	$(".summary").css("left","50%");
        // }
        if (className == 'href_total') {
            map_back();
            $('.table_1,#map_1').hide();
            $('.table_0,#map').show();
            $(".extant_total_box").show();
            // $(".tool_tip").css("top","25px");
            padding = {
                left: 20,
                top: 50,
                right: 40,
                bottom: 30
            };
            window.history.replaceState({}, 0, '?total');
            if (!UA.isMobile) {
                $('.source_container').css('top', '450px');
                $('.share_tip').css('top', '450px');
            }
            $(".tl_2").css("background-image", 'url(./assets/tl_2.png)');
            if ($(".areapath_box").length == 0) {
                draw_history_linePath(all_history_data);
                draw_history_add_linePath(new_history_data);
                draw_oversea_input(china_table_data_2);
                make_china_table(provinces_table_data);
                draw_cities_table(provinces_table_data, 0);
            }
        } else {
            back_oversea();
            $(".extant_total_box").hide();
            // $(".tool_tip").css("top","10px");
            padding = {
                left: 40,
                top: 50,
                right: 60,
                bottom: 30
            };
            $('.table_0,#map').hide();
            $('.table_1,#map_1').show();
            window.history.replaceState({}, 0, '?oversea');
            if (!UA.isMobile) {
                $('.source_container').css('top', '0');
                $('.share_tip').css('top', '0');
            }
            if ($(".oversea_table_tl").length == 0) {
                make_oversea_table(other_table_data);
            }
        }

        d3.select('.zsgz')
            .select('image')
            .attr('xlink:href', function () {
                if (fill_type == "total") {
                    return './assets/ship.svg'
                } else {
                    return './assets/ship_cure.svg'
                }
            })
        // direct_url = '?total';
        // $(this).hide();
        // $(".arrow_right").show();
        // $('.reverse').css({
        // 	// 'background-color': '#FEB34C',
        // 	// color: '#000',
        // 	// 'box-shadow': '0px 2px 0px 0px #512202'
        // 	'background-color': '#B3B3B3',
        // 	"color": '#fff',
        // 	'box-shadow': '0px 0px 0px 0px #512202'
        // });

        $('.tl').css('background-image', 'url(./assets/tl_bg.png)');
        $('.tl_1').css('background-image', 'url(./assets/tl_1.png)');
        $('.city_tl').css('background-image', 'url(./assets/tl_city_1.png)');
        $('.world_tl_1').css('background-image', 'url(./assets/world_rect.png)');
        $('.world_tl_2').css('background-image', 'url(./assets/world_tl.png)');
        //
        $('.arrow_container').css('background', '#2c50b0');
        $('.update_time').css('background-image', 'linear-gradient(90deg, #2C50B0, transparent)');
        $('.header').css('background-image', 'linear-gradient(90deg, #77A3FF, #2C50B0)');
        $('.arrow_left,.arrow_right').css('background-color', '#547edb');
        $('.' + className).css('background-color', '#feb24c');
        $('.search').css('background-image', 'url(./assets/search.png)');
        $('.around').css('background-image', 'url(./assets/around.png)');
        $('.share_map').css('background-image', 'url(./assets/share_map.png)');
        d3
            .select('.handle')
            .attr('fill', function () {
                if (fill_type == 'total') {
                    return '#fed976';
                } else {
                    return '#77c779';
                }
            })
            .attr('stroke', function () {
                if (fill_type == 'total') {
                    return '#512202';
                } else {
                    return '#006837';
                }
            });
        d3.select('.text').selectAll('text').text(function (d) {
            // var ps = rateByNew.get(d.province)
            var number = rateByNew.get(d.properties.name);
            // if (number != 0) {
            //     return number
            // }
            if (d.properties.name == '香港') {
                // console.log('hk', number)
                return '香港：新增兵力 ' + number + ' 人';
            }
            if (d.properties.name == '澳门') {
                return '澳门：新增兵力 ' + number + ' 人';
            }
        });
        d3.select('.bg_circle').selectAll('circle').transition().attr('r', function (d) {
            // var ps = rateByNew.get(d.province)
            if (rateByNew.get(d.properties.name) >= 0) {
                return circle_scale(rateByNew.get(d.properties.name));
            } else {
                return 0;
            }
        });
        d3.select('.circle').selectAll('circle').transition().attr('r', function (d) {
            // var ps = rateByNew.get(d.province)
            if (rateByNew.get(d.properties.name) >= 0) {
                return circle_scale(rateByNew.get(d.properties.name));
            } else {
                return 0;
            }
        });
        d3
            .select('.states')
            .selectAll('path')
            .transition() // .duration()
            .style('fill', function (d) {
                // if (rateById.get(d.id) == 0) {
                // 	return '#EEF8FF';
                // } else if (rateById.get(d.id) >= 1 && rateById.get(d.id) <= 9) {
                // 	return '#ffffb2';
                // } else if (rateById.get(d.id) >= 10 && rateById.get(d.id) <= 19) {
                // 	return '#fed976';
                // } else if (rateById.get(d.id) >= 20 && rateById.get(d.id) <= 99) {
                // 	return '#feb24c';
                // } else if (rateById.get(d.id) >= 100 && rateById.get(d.id) <= 199) {
                // 	return '#fd8d3c';
                // } else if (rateById.get(d.id) >= 200 && rateById.get(d.id) <= 499) {
                // 	return '#FC4E2B';
                // } else if (rateById.get(d.id) >= 500 && rateById.get(d.id) <= 999) {
                // 	return '#E31B1B';
                // } else if (rateById.get(d.id) >= 1000 && rateById.get(d.id) <= 4999) {
                // 	return '#B10026';
                // } else if (rateById.get(d.id) >= 5000) {
                // 	return '#560021';
                // } else {
                // 	return "url('#pic1')";
                // }
                if (rateByExtant.get(d.id) == 0) {
                    return '#EEF8FF';
                } else if (rateByExtant.get(d.id) >= 1 && rateByExtant.get(d.id) <= 9) {
                    return '#ffffb2';
                } else if (rateByExtant.get(d.id) >= 10 && rateByExtant.get(d.id) <= 19) {
                    return '#fed976';
                } else if (rateByExtant.get(d.id) >= 20 && rateByExtant.get(d.id) <= 99) {
                    return '#feb24c';
                } else if (rateByExtant.get(d.id) >= 100 && rateByExtant.get(d.id) <= 199) {
                    return '#fd8d3c';
                } else if (rateByExtant.get(d.id) >= 200 && rateByExtant.get(d.id) <= 499) {
                    return '#FC4E2B';
                } else if (rateByExtant.get(d.id) >= 500 && rateByExtant.get(d.id) <= 999) {
                    return '#E31B1B';
                } else if (rateByExtant.get(d.id) >= 1000 && rateByExtant.get(d.id) <= 4999) {
                    return '#B10026';
                } else if (rateByExtant.get(d.id) >= 5000) {
                    return '#560021';
                } else {
                    return "url('#pic1')";
                }
            });
        d3.select('.oversea_svg').select('.oversea').selectAll('path').transition().style('fill', function (d) {
            if (rateByoversea.get(d.properties.name) == 0) {
                return '#f7f7f7';
            } else if (rateByoversea.get(d.properties.name) >= 1 && rateByoversea.get(d.properties.name) <= 50) {
                return '#ffffb2';
            } else if (rateByoversea.get(d.properties.name) >= 51 && rateByoversea.get(d.properties.name) <= 100) {
                return '#fed976';
            } else if (rateByoversea.get(d.properties.name) >= 101 && rateByoversea.get(d.properties.name) <= 500) {
                return '#feb24c';
            } else if (rateByoversea.get(d.properties.name) >= 501 && rateByoversea.get(d.properties.name) <= 1000) {
                return '#fd8d3c';
            } else if (rateByoversea.get(d.properties.name) >= 1001 && rateByoversea.get(d.properties.name) <= 5000) {
                return '#FC4E2B';
            } else if (rateByoversea.get(d.properties.name) >= 5001 && rateByoversea.get(d.properties.name) <= 10000) {
                return '#E31B1B';
            } else if (rateByoversea.get(d.properties.name) >= 10001 && rateByoversea.get(d.properties.name) <= 20000) {
                return '#B10026';
            } else if (rateByoversea.get(d.properties.name) >= 20001) {
                return '#560021';
            } else {
                return '#f7f7f7';
            }
        });
        d3
            .select('.oversea_rect')
            .selectAll('rect')
            .transition()
            .attr('height', function (d) {
                if (fill_type == 'total') {
                    if (d.properties.cp != undefined && rateByoverseaNew.get(d.properties.name) > 0) {
                        // console.log(rect_scale(rateByoverseaNew.get(d.properties.name)))
                        return rect_scale(rateByoverseaNew.get(d.properties.name));
                    }
                } else {
                    if (d.properties.cp != undefined && rateByoverseaCureCase.get(d.properties.name) > 0) {
                        // console.log(rect_scale(rateByoverseaCureCase.get(d.properties.name)))
                        return rect_scale_cure(rateByoverseaCureCase.get(d.properties.name));
                    }
                }
            })
            .attr('transform', function (d) {
                if (fill_type == 'total') {
                    if (d.properties.cp != undefined && rateByoverseaNew.get(d.properties.name) > 0) {
                        return 'translate(0,' + -rect_scale(rateByoverseaNew.get(d.properties.name)) + ')';
                    }
                } else {
                    if (d.properties.cp != undefined && rateByoverseaCureCase.get(d.properties.name) > 0) {
                        return 'translate(0,' + -rect_scale_cure(rateByoverseaCureCase.get(d.properties.name)) + ')';
                    }
                }
            });
        // click_trigger(1)
        // click_trigger(0);
        click_trigger(1, 3);
        setTimeout(overseaYscale_change(0), 10);
        table_word_wrap();
        tabe_text_right();
        table_head_margin();
        $('.oversea_linepath_legend').css('left', $('.oversea_linepath_title').width() + 26 + 'px');

        // var table_head_top = $(".table").find(".table_head_container_1")
        //   .find(".table_head")
        //   .offset().top;
    });

    function back_oversea() {
        $('.y_number_oversea').eq(0).html(function () {
            var minus =
                country_num.length -
                oversea_y_data.filter(function (d) {
                    return d.stats_type == 'casetotal' && d.count > 0;
                }).length;
            if (minus > 0) {
                return '+' + minus;
            } else {
                return minus;
            }
        });

        $('.y_number_oversea').eq(1).html(function () {
            return '+' + country_newcase;
        });

        $('.y_number_oversea').eq(2).html(function () {
            var minus =
                country_curecase -
                d3.sum(
                    oversea_y_data
                        .filter(function (d) {
                            return d.stats_type == 'curecase';
                        })
                        .map(function (d) {
                            return Number(d.count);
                        })
                );
            if (minus > 0) {
                return '+' + minus;
            } else {
                return minus;
            }
        });

        $('.y_number_oversea').eq(3).html(function () {
            var minus =
                country_deathcase -
                d3.sum(
                    oversea_y_data
                        .filter(function (d) {
                            return d.stats_type == 'deathcase';
                        })
                        .map(function (d) {
                            return Number(d.count);
                        })
                );
            if (minus > 0) {
                return '+' + minus;
            } else {
                return minus;
            }
        });
        if (UA.isMobile) {
            $('.oversea_map').height(340);
        }
        $('.world_tl_2').removeClass('tl_move');
        if (fill_type == 'total') {
            // 外J BD情况
            $('.oversea_title').html('外J BD情况');
            $('.world_tl_2').css('background-image', 'url(./assets/world_tl.png)');
        } else {
            // 外J WQ装备目标
            $('.oversea_title').html('外J WQ装备目标');
            $('.world_tl_2').css('background-image', 'url(./assets/world_tl_cure.png)');
        }
        $('.oversea_detail').hide();
        $('.zsgz,.world_tl_1').show();
        $('.oversea_column_y').css('visibility', 'visible');

        $('.back_oversea').hide();

        d3
            .select('.oversea')
            .selectAll('path')
            .transition()
            .duration(750)
            .style('opacity', '1')
            .style('stroke', '#512202')
            .style('stroke-opacity', '1')
            .style('fill-opacity', '1')
            .style('stroke-width', 0.2)
            .attr(
                'transform',
                'translate(' +
                width / 2 +
                ',' +
                height / 2 +
                ')scale(' +
                1 +
                ')translate(' +
                -width / 2 +
                ',' +
                -height / 2 +
                ')'
            );

        setTimeout(function () {
            d3.select('.oversea').selectAll('path').style('pointer-events', 'all');
        }, 900);

        d3.select('.oversea').selectAll('path').classed('click_fill', false);

        d3
            .select('.zsgz')
            .transition()
            .duration(750)
            .attr(
                'transform',
                'translate(' +
                width / 2 +
                ',' +
                height / 2 +
                ')scale(' +
                1 +
                ')translate(' +
                -width / 2 +
                ',' +
                -height / 2 +
                ')'
            );

        d3.select('.zsgz').classed('click_fill', false);

        d3.select('.oversea_rect').selectAll('rect').transition().delay(750).style('opacity', '1');
        // .selectAll("rect")
        // .transition()
        // .duration(750)
        // .attr('width',2)
        // .attr("fill","#2c50b0")
        // .style("opacity", "1")
        // .style("pointer-events", "all")
        // .attr("transform",function(d){
        //     if (d.properties.cp != undefined && rateByoverseaNew.get(d.properties.name) != undefined) {
        //       return "translate(" +width / 2 + "," + height / 2 + ")scale(" + 1 + ")translate(" + -width/2 + "," + -height/2 + ")translate(0,"+ (-rect_scale(rateByoverseaNew.get(d.properties.name))) +")"
        //     }
        //   })
        isTransform = false;
        //海外的船
        $('.oversea_number').eq(0).html(country_num.length - 2);
        $('.oversea_number').eq(1).html(country_casetoal);
        $('.oversea_number').eq(2).html(country_curecase);
        $('.oversea_number').eq(3).html(country_deathcase);
    }

    $('.back_oversea').on(method, function () {
        back_oversea();
    });

    $.ajax({
        type: 'get',
        url: './data/get_all.json',
        // url: './data/map.json',
        success: function (d) {
            d = JSON.stringify(d)
            table_map_data = JSON.parse(JSON.parse(d)[0].data);
            // table_map_data = d;
            // console.log(table_map_data)
            d3
                .nest()
                .key(function (d) {
                    return d.province;
                })
                .entries(table_map_data)
                .map(function (d) {
                    return {
                        province: d.key,
                        casetotal: d.values[0].casetotal,
                        newcase: d.values[0].newcase,
                        curecase: d.values[0].curecase,
                        newcure: d.values[0].newcure,
                        deathcase: d.values[0].deathcase
                        // "deathcase": d.values[0].deathcase
                    };
                })
                .forEach(function (d) {
                    rateById.set(d.province, +d.casetotal);
                    rateByExtant.set(d.province, +(d.casetotal - d.curecase - d.deathcase));
                    rateByNew.set(d.province, +d.newcase);
                    rateBycureCircle.set(d.province, +d.newcure);
                    rateByOld.set(d.province, +d.casetotal);
                    rateProvince.set(d.name, d.province);
                    rateBycure.set(
                        d.province,
                        // Math.round(parseFloat(+d.curecase) / parseFloat(+d.casetotal) * 10000) / 100
                        Number(parseFloat(+d.curecase) / parseFloat(+d.casetotal) * 10000) / 100
                    );
                    // rateBydeath.set(d.province,Math.round(parseFloat(+d.deathcase)/parseFloat(+d.casetotal)*10000)/100)
                });

            //画国内数据
            d3.queue().defer(d3.json, './data/china_provinces.json').await(makeMap);
            // console.log(table_map_data);
            //判断是否是国内数据
            // loading_status++;
            // console.log(rateBycure);

            // oversea
            oversea_data = JSON.parse(JSON.parse(d)[0].data);
            oversea_click = JSON.parse(JSON.parse(d)[0].data);
            console.log(oversea_data);

            var domin_max = d3.max(
                oversea_data.map(function (d) {
                    return Number(d.newcase);
                })
            );

            padding = {
                left: 20,
                top: 50,
                right: 40,
                bottom: 30
            };

            //图例上的最大值
            // domin_max = 5000;
            // rect_scale = d3.scalePow().domain([ 0, domin_max ]).nice().range([ 0, $('.world_tl_1').height() ]);
            // console.log(domin_max);
            //减一下标题
            rect_scale = d3.scaleLinear().domain([0, 20000]).nice().range([0, $('.world_tl_1').height() - 20]);

            //治愈图例
            // domin_max = 200;
            rect_scale_cure = d3.scaleLinear().domain([0, 1000, 2000]).nice().range([0, ($('.world_tl_1').height() - 20) / 2, $('.world_tl_1').height() - 20]);

            // oversea_data.forEach(function(d){
            //   console.log(Number(d.id))
            // })
            oversea_data = oversea_data.filter(function (d) {
                return (
                    d.province == '亚洲' ||
                    d.province == '欧洲' ||
                    d.province == '北美洲' ||
                    d.province == '南美洲' ||
                    d.province == '大洋洲' ||
                    d.province == '非洲' ||
                    d.province == '其他'
                );
            });

            console.log(oversea_data);

            oversea_data.forEach(function (d) {
                rateByoversea.set(d.id, d.casetotal);
                rateByoverseaArea.set(d.id, d.province);
                rateByoverseaNew.set(d.id, d.newcase);
                rateByoverseaCureCase.set(d.id, d.newcure);
                rateByoverseaCure.set(
                    d.id,
                    Math.round(parseFloat(+d.curecase) / parseFloat(+d.casetotal) * 10000) / 100
                );
                rateByoverseaDetail.set(d.id, [d.newcase, d.casetotal, d.curecase, d.deathcase]);
            });

            console.log(rateByoverseaNew, rateByoverseaCure);

            // 计算总量
            country_num = oversea_data.filter(function (d) {
                return d.name != '中国' && d.casetotal != 0;
            });
            // console.log(country_num.length)
            country_casetoal = d3.sum(
                country_num.map(function (d) {
                    return Number(d.casetotal);
                })
            );
            country_curecase = d3.sum(
                country_num.map(function (d) {
                    return Number(d.curecase);
                })
            );
            country_deathcase = d3.sum(
                country_num.map(function (d) {
                    return Number(d.deathcase);
                })
            );
            //海外的船 列支敦士登+1,小岛+12
            $('.oversea_number').eq(0).html(country_num.length - 2);
            $('.oversea_number').eq(1).html(country_casetoal);
            $('.oversea_number').eq(2).html(country_curecase);
            $('.oversea_number').eq(3).html(country_deathcase);

            //计算差值
            country_newcase = d3.sum(
                oversea_data
                    .map(function (d) {
                        return Number(d.newcase);
                    })
                    .filter(function (d) {
                        return d.name != '中国';
                    })
            );

            d3.queue().defer(d3.json, './data/world.json').await(makeWorld);

            var tl_max_scale = 100;
            // var tl_max_scale = 100;
            var tl_max_scale_cure = 500;
            // console.log(ani_province_map)
            //当前图例最大值
            circle_scale = d3.scaleSqrt().domain([0, tl_max_scale]).range([0, $('.tl_2').height() / 2]);
            circle_scale_cure = d3.scaleSqrt().domain([0, tl_max_scale_cure]).range([0, $('.tl_2').height() / 2]);

            svg_height = 120;
            table_width = $(window).width() * 0.94;
            if (UA.isMobile) {
                svg_width = table_width;
            } else {
                svg_width = 600;
            }
            area_svg_height = 200;
            var table_text;

            new_people_num = Number($('.sum').eq(0).text());

            yScale = d3
                .scaleLinear()
                .domain([0, new_people_num])
                .nice()
                .range([area_svg_height - padding.top - padding.bottom, 0]);

            yScale_add = d3
                .scaleLinear()
                .domain([0, new_people_num])
                .nice()
                .range([area_svg_height - padding.top - padding.bottom, 0]);

            yScale_new = d3
                .scaleLinear()
                .domain([0, new_people_num])
                .nice()
                .range([area_svg_height - padding.top - padding.bottom, 0]);

            // var xScale = d3.scaleBand()
            // 	.domain(totalDate)
            //     // .nice()
            // 	.rangeRound([0, width - padding.left - padding.right])
            // 	.padding(0);

            // var xScale = d3.scaleLinear()
            //     .domain([0, totalDate.length ])
            //     // .nice()
            //     .range([0, width - padding.left - padding.right]);

            xScale = d3
                .scaleLinear()
                .domain([0, totalDate.length - 1]) // .nice()
                .range([0, svg_width - padding.left - padding.right]);

            linePath = d3
                .line()
                .x(function (d) {
                    return xScale(d[0]);
                })
                .y(function (d) {
                    return yScale(d[1]);
                });
            // .curve(d3.curveCatmullRom.alpha(0.1));

            linePath_add = d3
                .line()
                .x(function (d) {
                    return xScale(d[0]);
                })
                .y(function (d) {
                    return yScale_add(d[1]);
                });

            linePath_new = d3
                .line()
                .x(function (d) {
                    return xScale(d[0]);
                })
                .y(function (d) {
                    return yScale_new(d[1]);
                });
            // .curve(d3.curveCatmullRom.alpha(0.1));

            // add slider
            if (UA.isMobile) {
                var svg = d3.select('.main_map'),
                    margin = {
                        right: $(window).width() * 0.35,
                        left: $(window).width() * 0.4
                    },
                    width = $(window).width() * 0.9 - margin.left - margin.right,
                    height = 400;
            } else {
                var svg = d3.select('.main_map'),
                    margin = {right: 1200 * 0.42, left: 1200 * 0.42},
                    width = 1200 - margin.left - margin.right,
                    height = 400;
            }

            var x = d3.scaleLinear().domain([0, Datelength - 1]).range([0, width]).clamp(true);

            var slider = svg.append('g').attr('class', 'slider').attr('transform', function () {
                if (UA.isMobile) {
                    return 'translate(' + margin.left + ',' + 45 + ')';
                } else {
                    return 'translate(' + margin.left + ',' + 145 + ')';
                }
            });

            slider
                .append('line')
                .attr('class', 'track')
                .attr('x1', x.range()[0])
                .attr('x2', x.range()[1])
                .select(function () {
                    return this.parentNode.appendChild(this.cloneNode(true));
                })
                .attr('class', 'track-inset')
                .select(function () {
                    return this.parentNode.appendChild(this.cloneNode(true));
                })
                .attr('class', 'track-overlay')
                .call(
                    d3
                        .drag()
                        .on('start.interrupt', function () {
                            slider.interrupt();
                        })
                        .on('drag', function () {
                            play = false;
                            clearInterval(t);
                            hue(x.invert(d3.event.x));
                            var ps = Math.floor(x.invert(d3.event.x));
                            $('.clock_content').html(ani_time[ps]);
                            if (ps == ani_time.length - 1) {

                                // $(".extant_total_button").css('pointer-events', 'auto');
                                if (fill_type == 'total') {
                                    $('.slider').hide();
                                    setTimeout(function () {
                                        $('.linepath_tl,.overlay').css('pointer-events', 'auto');
                                    }, 1000);
                                    $('.clock_content').css('display', 'none');
                                    // console.log(index)
                                    ani_line_data = [];
                                    clearInterval(t);
                                    index = 0;
                                    // console.log(index)
                                    d3.selectAll('path').style('pointer-events', 'all');
                                    d3.selectAll('circle').style('pointer-events', 'all');
                                    svg
                                        .selectAll('path')
                                        // .transition()
                                        // .duration(800)
                                        .style('fill', function (d) {
                                            if (rateById.get(d.id) == 0) {
                                                return '#EEF8FF';
                                            } else if (rateById.get(d.id) >= 1 && rateById.get(d.id) <= 9) {
                                                return '#ffffb2';
                                            } else if (rateById.get(d.id) >= 10 && rateById.get(d.id) <= 19) {
                                                return '#fed976';
                                            } else if (rateById.get(d.id) >= 20 && rateById.get(d.id) <= 99) {
                                                return '#feb24c';
                                            } else if (rateById.get(d.id) >= 100 && rateById.get(d.id) <= 199) {
                                                return '#fd8d3c';
                                            } else if (rateById.get(d.id) >= 200 && rateById.get(d.id) <= 499) {
                                                return '#FC4E2B';
                                            } else if (rateById.get(d.id) >= 500 && rateById.get(d.id) <= 999) {
                                                return '#E31B1B';
                                            } else if (rateById.get(d.id) >= 1000 && rateById.get(d.id) <= 4999) {
                                                return '#B10026';
                                            } else if (rateById.get(d.id) >= 5000) {
                                                return '#560021';
                                            } else {
                                                return "url('#pic1')";
                                            }
                                        });

                                    setTimeout(function () {
                                        playing = false;
                                        // displayTime()
                                        // clock_run = window.setInterval(displayTime,1000)
                                        index = 0;
                                        d3.select('.handle').attr('cx', '0');

                                        d3
                                            .select('.main_map')
                                            .selectAll('circle')
                                            .transition()
                                            .duration(800)
                                            .attr('opacity', '1');
                                        d3
                                            .select('.main_map')
                                            .selectAll('text')
                                            .transition()
                                            .duration(800)
                                            .attr('opacity', '1');
                                        $('.arrow_right,.arrow_left').css('pointer-events', 'all');
                                        $('.extant_total_box').css('pointer-events', 'all');
                                    }, 800);
                                } else {
                                    $('.slider').hide();
                                    setTimeout(function () {
                                        $('.linepath_tl,.overlay').css('pointer-events', 'auto');
                                    }, 1000);
                                    $('.clock_content').css('display', 'none');
                                    // console.log(index)
                                    ani_line_data = [];
                                    clearInterval(t);
                                    index = 0;
                                    // console.log(index)
                                    d3.selectAll('path').style('pointer-events', 'all');
                                    d3.selectAll('circle').style('pointer-events', 'all');
                                    svg
                                        .selectAll('path')
                                        // .transition()
                                        // .duration(800)
                                        .style('fill', function (d) {
                                            if (rateBycure.get(d.id) == 0) {
                                                return '#fff';
                                            } else if (rateBycure.get(d.id) > 0 && rateBycure.get(d.id) <= 25) {
                                                return '#ffffcc';
                                            } else if (rateBycure.get(d.id) > 25 && rateBycure.get(d.id) <= 50) {
                                                return '#c2e699';
                                            } else if (rateBycure.get(d.id) > 50 && rateBycure.get(d.id) <= 75) {
                                                return '#78c679';
                                            } else if (rateBycure.get(d.id) > 75 && rateBycure.get(d.id) <= 99.99999) {
                                                return '#31a354';
                                            } else {
                                                return '#006837';
                                            }
                                        });

                                    setTimeout(function () {
                                        playing = false;
                                        // displayTime()
                                        // clock_run = window.setInterval(displayTime,1000)
                                        index = 0;
                                        d3
                                            .select('.main_map')
                                            .selectAll('circle')
                                            .transition()
                                            .duration(800)
                                            .attr('opacity', '1');
                                        d3
                                            .select('.main_map')
                                            .selectAll('text')
                                            .transition()
                                            .duration(800)
                                            .attr('opacity', '1');
                                        // $('.arrow_left').css('pointer-events', 'all');
                                        $('.arrow_left,.arrow_right').css('pointer-events', 'all');
                                        $('.extant_total_box').css('pointer-events', 'all');
                                    }, 800);
                                }
                            }
                            index = ps;
                            if (fill_type == 'total') {
                                d3
                                    .select('.states')
                                    .selectAll('path') // .attr('opacity','0')
                                    // .transition()
                                    // .duration(800)
                                    // .duration(200)
                                    .style('fill', function (d) {
                                        if (extant_total_index == 0) {
                                            if (ani_extant.get(d.id)[ps] == 0) {
                                                return '#EEF8FF';
                                            } else if (ani_extant.get(d.id)[ps] >= 1 && ani_extant.get(d.id)[ps] <= 9) {
                                                return '#ffffb2';
                                            } else if (ani_extant.get(d.id)[ps] >= 10 && ani_extant.get(d.id)[ps] <= 19) {
                                                return '#fed976';
                                            } else if (ani_extant.get(d.id)[ps] >= 20 && ani_extant.get(d.id)[ps] <= 99) {
                                                return '#feb24c';
                                            } else if (ani_extant.get(d.id)[ps] >= 100 && ani_extant.get(d.id)[ps] <= 199) {
                                                return '#fd8d3c';
                                            } else if (ani_extant.get(d.id)[ps] >= 200 && ani_extant.get(d.id)[ps] <= 499) {
                                                return '#FC4E2B';
                                            } else if (ani_extant.get(d.id)[ps] >= 500 && ani_extant.get(d.id)[ps] <= 999) {
                                                return '#E31B1B';
                                            } else if (ani_extant.get(d.id)[ps] >= 1000 && ani_extant.get(d.id)[ps] <= 4999) {
                                                return '#B10026';
                                            } else if (ani_extant.get(d.id)[ps] >= 5000) {
                                                return '#560021';
                                            } else {
                                                return "url('#pic1')";
                                            }
                                        } else {
                                            if (ani.get(d.id)[ps] == 0) {
                                                return '#EEF8FF';
                                            } else if (ani.get(d.id)[ps] >= 1 && ani.get(d.id)[ps] <= 9) {
                                                return '#ffffb2';
                                            } else if (ani.get(d.id)[ps] >= 10 && ani.get(d.id)[ps] <= 19) {
                                                return '#fed976';
                                            } else if (ani.get(d.id)[ps] >= 20 && ani.get(d.id)[ps] <= 99) {
                                                return '#feb24c';
                                            } else if (ani.get(d.id)[ps] >= 100 && ani.get(d.id)[ps] <= 199) {
                                                return '#fd8d3c';
                                            } else if (ani.get(d.id)[ps] >= 200 && ani.get(d.id)[ps] <= 499) {
                                                return '#FC4E2B';
                                            } else if (ani.get(d.id)[ps] >= 500 && ani.get(d.id)[ps] <= 999) {
                                                return '#E31B1B';
                                            } else if (ani.get(d.id)[ps] >= 1000 && ani.get(d.id)[ps] <= 4999) {
                                                return '#B10026';
                                            } else if (ani.get(d.id)[ps] >= 5000) {
                                                return '#560021';
                                            } else {
                                                return "url('#pic1')";
                                            }
                                        }
                                    });
                                d3
                                    .selectAll('.line_path_0')
                                    .transition()
                                    .duration(800)
                                    .style('opacity', '1')
                                    .attr('d', function (d) {
                                        return linePath(all_line_data[0].slice(0, ps + 1));
                                    });
                            } else {
                                d3
                                    .select('.states')
                                    .selectAll('path') // .attr('opacity','0')
                                    // .transition()
                                    // .duration(800)
                                    // .duration(200)
                                    .style('fill', function (d) {
                                        if (ani_cure.get(d.id)[ps] == 0) {
                                            return '#fff';
                                        } else if (ani_cure.get(d.id)[ps] > 0 && ani_cure.get(d.id)[ps] <= 25) {
                                            return '#ffffcc';
                                        } else if (ani_cure.get(d.id)[ps] > 25 && ani_cure.get(d.id)[ps] <= 50) {
                                            return '#c2e699';
                                        } else if (ani_cure.get(d.id)[ps] > 50 && ani_cure.get(d.id)[ps] <= 75) {
                                            return '#78c679';
                                        } else if (ani_cure.get(d.id)[ps] > 75 && ani_cure.get(d.id)[ps] <= 99) {
                                            return '#31a354';
                                        } else if (ani_cure.get(d.id)[ps] == 100) {
                                            return '#006837';
                                        } else {
                                            return 'url("#dot")';
                                        }
                                    });

                                d3
                                    .selectAll('.line_path_1')
                                    .transition()
                                    .duration(800)
                                    .style('opacity', '1')
                                    .attr('d', function (d) {
                                        return linePath(all_line_data[1].slice(0, ps + 1));
                                    });
                            }
                        })
                );

            slider
                .insert('g', '.track-overlay')
                .attr('class', 'ticks')
                .attr('transform', 'translate(' + -18 + ',3)')
                .append('text')
                .attr('x', x(0))
                .attr('text-anchor', 'middle')
                .attr('font-size', '10px')
                .text('1/23');

            slider
                .insert('g', '.track-overlay')
                .attr('class', 'ticks')
                .attr('transform', 'translate(' + 16 + ',3)')
                .append('text')
                .attr('x', x(Datelength))
                .attr('text-anchor', 'middle')
                .attr('font-size', '10px')
                .text('至今');

            // slider.insert("g", ".track-overlay")
            // 	.attr("class", "ticks")
            // 	.attr("transform", "translate(0," + 18 + ")")
            // .selectAll("text")
            // .data(x.ticks(10))
            // .enter().append("text")
            // 	.attr("x", x)
            // 	.attr("text-anchor", "middle")
            // 	.text(function(d) { return d + "°"; });

            var handle = slider
                .insert('circle', '.track-overlay')
                .attr('class', 'handle')
                .attr('r', 8)
                .attr('fill', function () {
                    if (fill_type == 'total') {
                        return '#fed976';
                    } else {
                        return '#77c779';
                    }
                })
                .attr('stroke', function () {
                    if (fill_type == 'total') {
                        return '#512202';
                    } else {
                        return '#006837';
                    }
                });

            slider
                .transition() // Gratuitous intro!
                .duration(750)
                .tween('hue', function () {
                    var i = d3.interpolate(0, 0);
                    return function (t) {
                        hue(i(t));
                    };
                });

            hue = function (h) {
                handle.attr('cx', x(h));
                // svg.style("background-color", d3.hsl(h, 0.8, 0.8));
            };

            $('.slider').hide();

            ani_map = function () {
                padding = {
                    left: 20,
                    top: 50,
                    right: 40,
                    bottom: 30
                };

                $('.slider').show();

                $('.arrow_left,.arrow_right').css('pointer-events', 'none');
                $('.extant_total_box').css('pointer-events', 'none');
                switch (fill_type) {
                    case 'total':
                        // console.log(new_area_data);
                        d3
                            .selectAll('.linepath_tl')
                            .style('background', '#fff')
                            .style('border', '1px solid ' + table_color[9])
                            .style('color', table_color[9]);

                        if (extant_total_index == 0) {
                            linepath_index_data = [3];
                            yScale
                                .domain([0, line_data_max[3]])
                                .nice()
                                .range([area_svg_height - padding.top - padding.bottom, 0]);

                            d3
                                .selectAll('.linepath_tl_' + 3)
                                .style('background', table_color[1])
                                .style('border', '1px solid ' + table_color[1])
                                .style('color', '#fff');
                        } else {
                            linepath_index_data = [0];
                            yScale
                                .domain([0, line_data_max[0]])
                                .nice()
                                .range([area_svg_height - padding.top - padding.bottom, 0]);

                            d3
                                .selectAll('.linepath_tl_' + 0)
                                .style('background', table_color[0 + 2])
                                .style('border', '1px solid ' + table_color[0 + 2])
                                .style('color', '#fff');
                        }
                        // linepath_index_data.push(0);
                        // linepath_index_max_data.push(line_data_max[0]);
                        // console.log(index)

                        // .style("background", table_color[7]);

                        d3.selectAll('.vLine').style('opacity', '0');

                        if (index == 0) {
                            d3.selectAll('.line_path').style('opacity', '0');

                            d3.selectAll('.line_circle').style('opacity', '0');
                        }


                        yAxis.ticks(6).tickSize(-(svg_width - padding.left - padding.right));

                        d3.selectAll('.y_axis').transition().duration(1000).call(yAxis);

                        d3
                            .selectAll('.y_axis line')
                            .attr('stroke', table_color[6])
                            .attr('stroke-opacity', '0.8')
                            .attr('stroke-width', '0.3')
                            .attr('stroke-dasharray', '3,3')
                            .attr('shape-rendering', 'crispEdges');

                        for (var j = 0; j < all_line_data[0].length; j++) {
                            d3
                                .selectAll('.line_circle_' + 0 + '_' + j)
                                // .style("opacity","0")
                                .transition()
                                .duration(200)
                                .attr('cx', xScale(all_line_data[0][j][0]))
                                .attr('cy', yScale(all_line_data[0][j][1]));
                        }

                        // index = 0;
                        $('.linepath_tl,.overlay').css('pointer-events', 'none');
                        $('.tool_tip').css('display', 'none');

                        t = setInterval(function () {
                            d3.select('.handle').transition().attr('cx', x(index));
                            // window.clearInterval(clock_run)
                            $('.clock_content').css('display', 'block');
                            $('.clock_content').html(function () {
                                // console.log(ani_time[index])
                                return ani_time[index];
                            });
                            $('.arrow').css('display', 'none');
                            d3.select('.circle').selectAll('circle').attr('opacity', '0');
                            d3.select('.bg_circle').selectAll('circle').attr('opacity', '0');
                            d3.select('.text').selectAll('text').attr('opacity', '0');
                            // d3.select('.main_map').selectAll('path').style('pointer-events', 'none');
                            d3.select('.cirlce').selectAll('circle').style('pointer-events', 'none');
                            d3;
                            d3.select('.bg_cirlce').selectAll('circle').style('pointer-events', 'none');
                            d3
                                .select('.states')
                                .selectAll('path') // .attr('opacity','0')
                                // .transition()
                                // .duration(800)
                                // .duration(200)
                                .style('fill', function (d) {
                                    if (extant_total_index == 0) {
                                        if (ani_extant.get(d.id)[index] == 0) {
                                            return '#EEF8FF';
                                        } else if (ani_extant.get(d.id)[index] >= 1 && ani_extant.get(d.id)[index] <= 9) {
                                            return '#ffffb2';
                                        } else if (ani_extant.get(d.id)[index] >= 10 && ani_extant.get(d.id)[index] <= 19) {
                                            return '#fed976';
                                        } else if (ani_extant.get(d.id)[index] >= 20 && ani_extant.get(d.id)[index] <= 99) {
                                            return '#feb24c';
                                        } else if (ani_extant.get(d.id)[index] >= 100 && ani_extant.get(d.id)[index] <= 199) {
                                            return '#fd8d3c';
                                        } else if (ani_extant.get(d.id)[index] >= 200 && ani_extant.get(d.id)[index] <= 499) {
                                            return '#FC4E2B';
                                        } else if (ani_extant.get(d.id)[index] >= 500 && ani_extant.get(d.id)[index] <= 999) {
                                            return '#E31B1B';
                                        } else if (ani_extant.get(d.id)[index] >= 1000 && ani_extant.get(d.id)[index] <= 4999) {
                                            return '#B10026';
                                        } else if (ani_extant.get(d.id)[index] >= 5000) {
                                            return '#560021';
                                        } else {
                                            return "url('#pic1')";
                                        }
                                    } else {
                                        if (ani.get(d.id)[index] == 0) {
                                            return '#EEF8FF';
                                        } else if (ani.get(d.id)[index] >= 1 && ani.get(d.id)[index] <= 9) {
                                            return '#ffffb2';
                                        } else if (ani.get(d.id)[index] >= 10 && ani.get(d.id)[index] <= 19) {
                                            return '#fed976';
                                        } else if (ani.get(d.id)[index] >= 20 && ani.get(d.id)[index] <= 99) {
                                            return '#feb24c';
                                        } else if (ani.get(d.id)[index] >= 100 && ani.get(d.id)[index] <= 199) {
                                            return '#fd8d3c';
                                        } else if (ani.get(d.id)[index] >= 200 && ani.get(d.id)[index] <= 499) {
                                            return '#FC4E2B';
                                        } else if (ani.get(d.id)[index] >= 500 && ani.get(d.id)[index] <= 999) {
                                            return '#E31B1B';
                                        } else if (ani.get(d.id)[index] >= 1000 && ani.get(d.id)[index] <= 4999) {
                                            return '#B10026';
                                        } else if (ani.get(d.id)[index] >= 5000) {
                                            return '#560021';
                                        } else {
                                            return "url('#pic1')";
                                        }
                                    }
                                });
                            // .attr('opacity','1')

                            // console.log(index)
                            if (index <= ani_time.length - 1) {
                                // ani_line_data.push(new_line_data_0[index]);
                                // console.log(ani_line_data);
                                if (extant_total_index == 0) {

                                    d3
                                        .selectAll('.line_path_3')
                                        .transition()
                                        .duration(800)
                                        .style('opacity', '1')
                                        .attr('d', function (d) {
                                            return linePath(all_line_data[3].slice(0, index + 1));
                                        });
                                } else {

                                    d3
                                        .selectAll('.line_path_0')
                                        .transition()
                                        .duration(800)
                                        .style('opacity', '1')
                                        .attr('d', function (d) {
                                            return linePath(all_line_data[0].slice(0, index + 1));
                                        });
                                }


                                //圆点
                                // d3
                                // 	.selectAll('.line_circle_0_' + index)
                                // 	.transition()
                                // 	.duration(200)
                                // 	.style('opacity', '1');
                            }

                            // if (index == ani_time.length - 1) {
                            if (index == ani_time.length) {
                                $('.slider').hide();
                                setTimeout(function () {
                                    $('.linepath_tl,.overlay').css('pointer-events', 'auto');
                                }, 1000);
                                $('.clock_content').css('display', 'none');
                                // console.log(index)
                                ani_line_data = [];
                                clearInterval(t);
                                index = 0;
                                // console.log(index)
                                d3.selectAll('path').style('pointer-events', 'all');
                                d3.selectAll('circle').style('pointer-events', 'all');
                                svg
                                    .selectAll('path')
                                    // .transition()
                                    // .duration(800)
                                    .style('fill', function (d) {
                                        if (extant_total_index == 0) {
                                            if (rateByExtant.get(d.id) == 0) {
                                                return '#EEF8FF';
                                            } else if (rateByExtant.get(d.id) >= 1 && rateByExtant.get(d.id) <= 9) {
                                                return '#ffffb2';
                                            } else if (rateByExtant.get(d.id) >= 10 && rateByExtant.get(d.id) <= 19) {
                                                return '#fed976';
                                            } else if (rateByExtant.get(d.id) >= 20 && rateByExtant.get(d.id) <= 99) {
                                                return '#feb24c';
                                            } else if (rateByExtant.get(d.id) >= 100 && rateByExtant.get(d.id) <= 199) {
                                                return '#fd8d3c';
                                            } else if (rateByExtant.get(d.id) >= 200 && rateByExtant.get(d.id) <= 499) {
                                                return '#FC4E2B';
                                            } else if (rateById.get(d.id) >= 500 && rateByExtant.get(d.id) <= 999) {
                                                return '#E31B1B';
                                            } else if (rateByExtant.get(d.id) >= 1000 && rateByExtant.get(d.id) <= 4999) {
                                                return '#B10026';
                                            } else if (rateByExtant.get(d.id) >= 5000) {
                                                return '#560021';
                                            } else {
                                                return "url('#pic1')";
                                            }
                                        } else {
                                            if (rateById.get(d.id) == 0) {
                                                return '#EEF8FF';
                                            } else if (rateById.get(d.id) >= 1 && rateById.get(d.id) <= 9) {
                                                return '#ffffb2';
                                            } else if (rateById.get(d.id) >= 10 && rateById.get(d.id) <= 19) {
                                                return '#fed976';
                                            } else if (rateById.get(d.id) >= 20 && rateById.get(d.id) <= 99) {
                                                return '#feb24c';
                                            } else if (rateById.get(d.id) >= 100 && rateById.get(d.id) <= 199) {
                                                return '#fd8d3c';
                                            } else if (rateById.get(d.id) >= 200 && rateById.get(d.id) <= 499) {
                                                return '#FC4E2B';
                                            } else if (rateById.get(d.id) >= 500 && rateById.get(d.id) <= 999) {
                                                return '#E31B1B';
                                            } else if (rateById.get(d.id) >= 1000 && rateById.get(d.id) <= 4999) {
                                                return '#B10026';
                                            } else if (rateById.get(d.id) >= 5000) {
                                                return '#560021';
                                            } else {
                                                return "url('#pic1')";
                                            }
                                        }
                                    });

                                setTimeout(function () {
                                    playing = false;
                                    // displayTime()
                                    // clock_run = window.setInterval(displayTime,1000)
                                    index = 0;
                                    d3.select('.handle').attr('cx', '0');

                                    d3
                                        .select('.main_map')
                                        .selectAll('circle')
                                        .transition()
                                        .duration(800)
                                        .attr('opacity', '1');
                                    d3
                                        .select('.main_map')
                                        .selectAll('text')
                                        .transition()
                                        .duration(800)
                                        .attr('opacity', '1');
                                    // $('.arrow_right').css('pointer-events', 'all');
                                    $('.arrow_left,.arrow_right').css('pointer-events', 'all');
                                    $('.extant_total_box').css('pointer-events', 'all');
                                }, 800);
                            }

                            // if(index == ani_time.length - 1 ){

                            // }

                            index++;
                        }, 500);
                        break;
                    case 'cure':
                        // console.log(new_area_data);
                        linepath_index_data = [1];
                        // linepath_index_data.push(0);
                        // linepath_index_max_data.push(line_data_max[0]);
                        // console.log(index)
                        //   index = 1;

                        d3
                            .selectAll('.linepath_tl')
                            .style('background', '#fff')
                            .style('border', '1px solid ' + table_color[9])
                            .style('color', table_color[9]);
                        // .style("background", table_color[7]);

                        d3
                            .selectAll('.linepath_tl_' + 1)
                            .style('background', table_color[1 + 2])
                            .style('border', '1px solid ' + table_color[1 + 2])
                            .style('color', '#fff');

                        d3.selectAll('.vLine').style('opacity', '0');

                        if (index == 0) {
                            d3.selectAll('.line_path').style('opacity', '0');

                            d3.selectAll('.line_circle').style('opacity', '0');
                        }

                        yScale
                            .domain([0, line_data_max[1]])
                            .nice()
                            .range([area_svg_height - padding.top - padding.bottom, 0]);

                        yAxis.ticks(6).tickSize(-(svg_width - padding.left - padding.right));

                        d3.selectAll('.y_axis').transition().duration(1000).call(yAxis);

                        d3
                            .selectAll('.y_axis line')
                            .attr('stroke', table_color[7])
                            .attr('stroke-opacity', '0.8')
                            .attr('stroke-width', '0.3')
                            .attr('stroke-dasharray', '3,3')
                            .attr('shape-rendering', 'crispEdges');

                        //   for (var j = 0; j < all_line_data[0].length; j++) {

                        //       d3.selectAll(".line_circle_" + 0 + "_" + j)
                        //           // .style("opacity","0")
                        //           .transition()
                        //           .duration(200)
                        //           .attr("cx", xScale(all_line_data[0][j][0]))
                        //           .attr("cy", yScale(all_line_data[0][j][1]));
                        //   }

                        // index = 0;
                        $('.linepath_tl,.overlay').css('pointer-events', 'none');
                        $('.tool_tip').css('display', 'none');

                        t = setInterval(function () {
                            d3.select('.handle').transition().attr('cx', x(index));
                            // window.clearInterval(clock_run)
                            $('.clock_content').css('display', 'block');
                            $('.clock_content').html(function () {
                                // console.log(ani_time[index])
                                return ani_time[index];
                            });
                            $('.arrow').css('display', 'none');
                            d3.select('.circle').selectAll('circle').attr('opacity', '0');
                            d3.select('.bg_circle').selectAll('circle').attr('opacity', '0');
                            d3.select('.text').selectAll('text').attr('opacity', '0');
                            // d3.select('.main_map').selectAll('path').style('pointer-events', 'none');
                            d3.select('.cirlce').selectAll('circle').style('pointer-events', 'none');
                            d3;
                            d3.select('.bg_cirlce').selectAll('circle').style('pointer-events', 'none');
                            d3
                                .select('.states')
                                .selectAll('path') // .attr('opacity','0')
                                // .transition()
                                // .duration(800)
                                // .duration(200)
                                .style('fill', function (d) {
                                    if (ani_cure.get(d.id)[index] == 0) {
                                        return '#fff';
                                    } else if (ani_cure.get(d.id)[index] > 0 && ani_cure.get(d.id)[index] <= 25) {
                                        return '#ffffcc';
                                    } else if (ani_cure.get(d.id)[index] > 25 && ani_cure.get(d.id)[index] <= 50) {
                                        return '#c2e699';
                                    } else if (ani_cure.get(d.id)[index] > 50 && ani_cure.get(d.id)[index] <= 75) {
                                        return '#78c679';
                                    } else if (
                                        ani_cure.get(d.id)[index] > 75 &&
                                        ani_cure.get(d.id)[index] <= 99.99999
                                    ) {
                                        return '#31a354';
                                    } else if (ani_cure.get(d.id)[index] == 100) {
                                        return '#006837';
                                    } else {
                                        return 'url("#dot")';
                                    }
                                });
                            // .attr('opacity','1')

                            // console.log(index)
                            if (index <= ani_time.length - 1) {
                                // ani_line_data.push(new_line_data_1[index]);
                                // console.log(ani_line_data);
                                d3
                                    .selectAll('.line_path_1')
                                    .transition()
                                    .duration(800)
                                    .style('opacity', '1')
                                    .attr('d', function (d) {
                                        return linePath(all_line_data[1].slice(0, index + 1));
                                    });

                                //圆点
                                //   d3.selectAll(".line_circle_0_" + index)
                                //       .transition()
                                //       .duration(200)
                                //       .style("opacity", "1");
                            }

                            // if (index == ani_time.length - 1) {
                            if (index == ani_time.length) {
                                $('.slider').hide();
                                setTimeout(function () {
                                    $('.linepath_tl,.overlay').css('pointer-events', 'auto');
                                }, 1000);
                                $('.clock_content').css('display', 'none');
                                // console.log(index)
                                ani_line_data = [];
                                clearInterval(t);
                                index = 0;
                                // console.log(index)
                                d3.selectAll('path').style('pointer-events', 'all');
                                d3.selectAll('circle').style('pointer-events', 'all');
                                svg
                                    .selectAll('path')
                                    // .transition()
                                    // .duration(800)
                                    .style('fill', function (d) {
                                        if (rateBycure.get(d.id) == 0) {
                                            return '#fff';
                                        } else if (rateBycure.get(d.id) > 0 && rateBycure.get(d.id) <= 25) {
                                            return '#ffffcc';
                                        } else if (rateBycure.get(d.id) > 25 && rateBycure.get(d.id) <= 50) {
                                            return '#c2e699';
                                        } else if (rateBycure.get(d.id) > 50 && rateBycure.get(d.id) <= 75) {
                                            return '#78c679';
                                        } else if (rateBycure.get(d.id) > 75 && rateBycure.get(d.id) <= 99.99999) {
                                            return '#31a354';
                                        } else {
                                            return '#006837';
                                        }
                                    });

                                setTimeout(function () {
                                    playing = false;
                                    // displayTime()
                                    // clock_run = window.setInterval(displayTime,1000)
                                    index = 0;
                                    d3
                                        .select('.main_map')
                                        .selectAll('circle')
                                        .transition()
                                        .duration(800)
                                        .attr('opacity', '1');
                                    d3
                                        .select('.main_map')
                                        .selectAll('text')
                                        .transition()
                                        .duration(800)
                                        .attr('opacity', '1');
                                    // $('.arrow_left').css('pointer-events', 'all');
                                    $('.arrow_left,.arrow_right').css('pointer-events', 'all');
                                    $('.extant_total_box').css('pointer-events', 'all');

                                }, 800);
                            }

                            // if(index == ani_time.length - 1 ){

                            // }

                            index++;
                        }, 500);
                        break;
                    default:
                        break;
                }
            };

            $.ajax({
                type: 'get',
                url: './data/get_ani.json',
                // url: './data/history.json',
                success: function (d) {
                    console.log('ssssssssss');
                    d = JSON.stringify(d)
                    ani_map_data = JSON.parse(JSON.parse(d)[0].ani);
                    // ani_map_data = d;
                    console.log(ani_map_data);
                    loading_status++;
                    history_data = ani_map_data.filter(function (d) {
                        return d.name != '中国' && d.name != '本地' && d.name != '境外输入';
                    });
                    // new_history_data = ani_map_data.filter(function(d) {
                    // 	return (d.name == '本地' || d.name == '境外输入' || d.name == '香港' || d.name == '澳门' || d.name == '台湾' || d.name == '中国') && d.stats_type == 'newcase' ;
                    // });
                    // 新增
                    new_history_data = ani_map_data.filter(function (d) {
                        return (d.name == '境外输入' || d.name == '香港' || d.name == '澳门' || d.name == '台湾' || d.name == '中国') && d.stats_type == 'newcase';
                    });
                    //累计
                    all_history_data = ani_map_data.filter(function (d) {
                        return d.name == '中国';
                    });

                    // new_history_data = ani_map_data.filter(function(d) {
                    // 	return d.name != '本地' && d.stats_type == 'newcase';
                    // });
                    // console.log(history_data)
                    var last_linepath_index = 0;
                    linepath_index_data = [];
                    var linepath_index_max_data = [];
                    // var linepath_index
                    linepath_index_data.push(last_linepath_index);
                    linepath_index_max_data.push(line_data_max[last_linepath_index]);
                    // console.log(linepath_index_max_data)

                    // add add add
                    var last_linepath_add_index = 2;
                    var last_linepath_new_index = 1;
                    linepath_index_add_data = [];
                    linepath_index_new_data = [];
                    var linepath_index_max_add_data = [];
                    var linepath_index_max_new_data = [];
                    // var linepath_add_index
                    linepath_index_add_data.push(last_linepath_add_index);
                    linepath_index_add_data.push(last_linepath_add_index + 1);
                    linepath_index_new_data.push(last_linepath_new_index);
                    linepath_index_new_data.push(last_linepath_new_index + 1);
                    linepath_index_max_add_data.push(line_data_add_max[last_linepath_add_index]);
                    linepath_index_max_add_data.push(line_data_max[last_linepath_add_index + 1]);
                    linepath_index_max_new_data.push(line_data_new_max[last_linepath_new_index]);
                    linepath_index_max_new_data.push(line_data_max[last_linepath_new_index + 1]);
                    // console.log(linepath_index_max_add_data)
                    // console.log(linepath_index_data,linepath_index_max_data)

                    d3
                        .nest()
                        .key(function (d) {
                            return d.name;
                        })
                        .entries(history_data)
                        .map(function (d) {
                            return {
                                province: d.key,
                                values: d.values
                            };
                        })
                        .forEach(function (d) {
                            // console.log(d);
                            var map_date = [];
                            var cure_data = [];
                            var extant_data = [];
                            for (var i = 0; i < ani_time.length; i++) {
                                map_date.push(Number(+d.values[1][ani_time[i]]));
                            }
                            for (var i = 0; i < ani_time.length; i++) {
                                extant_data.push(Number(+d.values[1][ani_time[i]]) - Number(+d.values[2][ani_time[i]]) - Number(+d.values[3][ani_time[i]]));
                            }
                            for (var i = 0; i < ani_time.length; i++) {
                                cure_data.push(
                                    Math.round(
                                        Number(+d.values[2][ani_time[i]]) / Number(+d.values[1][ani_time[i]]) * 10000
                                    ) / 100
                                );
                            }
                            ani.set(d.province, map_date);
                            ani_extant.set(d.province, extant_data);
                            ani_cure.set(d.province, cure_data);
                            // }
                        });
                    console.log(ani_cure);
                    console.log(ani_extant);
                    // console.log(map_date);
                    // 图例点击
                    $(document).on(method, '.linepath_tl', function () {
                        padding = {
                            left: 20,
                            top: 50,
                            right: 40,
                            bottom: 30
                        };
                        var linepath_index = Number($(this).attr('class').split('_')[3]);
                        console.log(linepath_index);
                        // d3.selectAll(".linepath_tl")
                        // 	.style("background", table_color[6]);

                        if (linepath_index_data.indexOf(linepath_index) == -1) {
                            linepath_index_data.push(linepath_index);
                            linepath_index_max_data = [];

                            if (linepath_index == 3) {
                                d3
                                    .selectAll('.linepath_tl_' + linepath_index)
                                    .style('background', table_color[1])
                                    .style('color', '#fff')
                                    .style('border', '1px solid ' + table_color[1]);
                            } else {
                                d3
                                    .selectAll('.linepath_tl_' + linepath_index)
                                    .style('background', table_color[linepath_index + 2])
                                    .style('color', '#fff')
                                    .style('border', '1px solid ' + table_color[linepath_index + 2]);
                            }


                            for (var i = 0; i < linepath_index_data.length; i++) {
                                linepath_index_max_data.push(line_data_max[linepath_index_data[i]]);
                            }
                            // console.log(linepath_index, linepath_index_max_data)
                            // last_linepath_index = linepath_index;
                        } else {
                            linepath_index_data.splice(linepath_index_data.indexOf(linepath_index), 1);
                            linepath_index_max_data = [];
                            for (var i = 0; i < linepath_index_data.length; i++) {
                                linepath_index_max_data.push(line_data_max[linepath_index_data[i]]);
                            }
                            d3
                                .selectAll('.linepath_tl_' + linepath_index)
                                // .style("background", table_color[7]);
                                .style('background', '#fff')
                                .style('color', table_color[9])
                                .style('border', '1px solid ' + table_color[9]);

                            last_linepath_index = linepath_index;
                            // console.log(linepath_index,linepath_index_max_data)
                        }

                        if (linepath_index_max_data.length == 0) {
                            yScale.domain([0, 0]).nice().range([area_svg_height - padding.top - padding.bottom, 0]);
                        } else {
                            yScale
                                .domain([0, d3.max(linepath_index_max_data)])
                                .nice()
                                .range([area_svg_height - padding.top - padding.bottom, 0]);
                        }

                        $('.vLine')
                            // .css("opacity", "0")
                            .hide();

                        $('.line_path_tooltips')
                            // .css("opacity","0")
                            .hide();

                        $('.tooltips_tra')
                            // .css("opacity","0")
                            .hide();

                        $('.vLine_add')
                            // .css("opacity", "0")
                            .hide();

                        $('.line_path_tooltips_add')
                            // .css("opacity","0")
                            .hide();

                        $('.tooltips_tra_add')
                            // .css("opacity","0")
                            .hide();

                        $('.vLine_new')
                            // .css("opacity", "0")
                            .hide();

                        $('.line_path_tooltips_new')
                            // .css("opacity","0")
                            .hide();

                        $('.tooltips_tra_new')
                            // .css("opacity","0")
                            .hide();

                        // linepath_index_max_data.push(line_data_max[linepath_index]);
                        // console.log(linepath_index_max_data)

                        linePath = d3
                            .line()
                            .x(function (d) {
                                return xScale(d[0]);
                            })
                            .y(function (d) {
                                return yScale(d[1]);
                            });

                        // d3.selectAll(".line_path")
                        // 	.style("opacity", "0");

                        // d3.selectAll(".line_circle")
                        // 	.style("opacity", "0")

                        for (var i = 0; i < all_line_data.length; i++) {
                            d3
                                .select('.line_path_' + i)
                                .transition()
                                .duration(800)
                                .attr('d', function (d) {
                                    return linePath(all_line_data[i]);
                                })
                                .style('opacity', function (d) {
                                    if (linepath_index_data.indexOf(i) != -1) {
                                        return '1';
                                    } else {
                                        return '0';
                                    }
                                });

                            for (var j = 0; j < all_line_data[i].length; j++) {
                                d3
                                    .selectAll('.line_circle_' + i + '_' + j)
                                    // .style("opacity","0")
                                    .transition()
                                    .duration(800)
                                    .attr('cx', xScale(all_line_data[i][j][0]))
                                    .attr('cy', yScale(all_line_data[i][j][1]))
                                    .style('opacity', function (d) {
                                        // if (i == linepath_index) {
                                        if (linepath_index_data.indexOf(i) != -1) {
                                            return '1';
                                        } else {
                                            return '0';
                                        }
                                    });
                            }
                        }

                        yAxis.ticks(6).tickSize(-(svg_width - padding.left - padding.right));

                        d3.selectAll('.y_axis').transition().duration(1000).call(yAxis);

                        d3
                            .selectAll('.y_axis line')
                            .attr('stroke', table_color[6])
                            .attr('stroke-opacity', '0.8')
                            .attr('stroke-width', '0.3')
                            .attr('stroke-dasharray', '3,3')
                            .attr('shape-rendering', 'crispEdges');
                    });

                    $(document).on(method, '.linepath_tl_add', function () {

                        padding = {
                            left: 20,
                            top: 50,
                            right: 40,
                            bottom: 30
                        };

                        var linepath_index = Number($(this).attr('class').split('_')[4]);
                        // console.log(linepath_index,$(this).attr("class").split("_"))
                        // d3.selectAll(".linepath_tl")
                        // 	.style("background", table_color[6]);

                        if (linepath_index_add_data.indexOf(linepath_index) == -1) {
                            // console.log('1249');
                            linepath_index_add_data.push(linepath_index);
                            linepath_index_max_add_data = [];
                            d3
                                .selectAll('.linepath_tl_' + linepath_index + '_add')
                                .style('background', function () {
                                    if (linepath_index <= 1) {
                                        return table_color[linepath_index + 2];
                                    } else if (linepath_index == 3) {
                                        return table_color[4]
                                    } else {
                                        return '#FD8D3D';
                                    }
                                })
                                .style('color', '#fff')
                                .style('border', function () {
                                    if (linepath_index <= 1) {
                                        return '1px solid ' + table_color[linepath_index + 2];
                                    } else if (linepath_index == 3) {
                                        return '1px solid ' + table_color[4];
                                    } else {
                                        return '1px solid ' + '#FD8D3D';
                                    }
                                });

                            for (var i = 0; i < linepath_index_add_data.length; i++) {
                                linepath_index_max_add_data.push(line_data_add_max[linepath_index_add_data[i]]);
                            }
                            // console.log(linepath_index, linepath_index_max_data)
                            // last_linepath_index = linepath_index;
                        } else {
                            linepath_index_add_data.splice(linepath_index_add_data.indexOf(linepath_index), 1);
                            linepath_index_max_add_data = [];
                            for (var i = 0; i < linepath_index_add_data.length; i++) {
                                linepath_index_max_add_data.push(line_data_add_max[linepath_index_add_data[i]]);
                            }
                            d3
                                .selectAll('.linepath_tl_' + linepath_index + '_add')
                                // .style("background", table_color[7]);
                                .style('background', '#fff')
                                .style('color', table_color[9])
                                .style('border', '1px solid ' + table_color[9]);
                            last_linepath_add_index = linepath_index;
                            // console.log(linepath_index,linepath_index_max_data)
                        }

                        if (linepath_index_max_add_data.length == 0) {
                            yScale_add
                                .domain([0, 0])
                                .nice()
                                .range([area_svg_height - padding.top - padding.bottom, 0]);
                        } else {
                            yScale_add
                                .domain([0, d3.max(linepath_index_max_add_data)])
                                .nice()
                                .range([area_svg_height - padding.top - padding.bottom, 0]);
                        }

                        $('.vLine')
                            // .css("opacity", "0")
                            .hide();

                        $('.line_path_tooltips')
                            // .css("opacity","0")
                            .hide();

                        $('.tooltips_tra')
                            // .css("opacity","0")
                            .hide();

                        $('.vLine_add')
                            // .css("opacity", "0")
                            .hide();

                        $('.line_path_tooltips_add')
                            // .css("opacity","0")
                            .hide();

                        $('.tooltips_tra_add')
                            // .css("opacity","0")
                            .hide();

                        $('.vLine_new')
                            // .css("opacity", "0")
                            .hide();

                        $('.line_path_tooltips_new')
                            // .css("opacity","0")
                            .hide();

                        $('.tooltips_tra_new')
                            // .css("opacity","0")
                            .hide();

                        // linepath_index_max_data.push(line_data_max[linepath_index]);
                        // console.log(linepath_index_max_data)

                        linePath_add = d3
                            .line()
                            .x(function (d) {
                                return xScale(d[0]);
                            })
                            .y(function (d) {
                                return yScale_add(d[1]);
                            });

                        // d3.selectAll(".line_path")
                        // 	.style("opacity", "0");

                        // d3.selectAll(".line_circle")
                        // 	.style("opacity", "0")

                        for (var i = 0; i < all_line_add_data.length; i++) {
                            d3
                                .select('.line_path_add_' + i)
                                .transition()
                                .duration(800)
                                .attr('d', function (d) {
                                    return linePath_add(all_line_add_data[i]);
                                })
                                .style('opacity', function (d) {
                                    if (linepath_index_add_data.indexOf(i) != -1) {
                                        return '1';
                                    } else {
                                        return '0';
                                    }
                                });
                        }

                        yAxis_add.ticks(6).tickSize(-(svg_width - padding.left - padding.right));

                        d3.selectAll('.y_axis_add').transition().duration(1000).call(yAxis_add);

                        d3
                            .selectAll('.y_axis_add line')
                            .attr('stroke', table_color[6])
                            .attr('stroke-opacity', '0.8')
                            .attr('stroke-width', '0.3')
                            .attr('stroke-dasharray', '3,3')
                            .attr('shape-rendering', 'crispEdges');
                    });

                    var province_yScale = d3
                        .scaleLinear()
                        .domain([0, new_people_num])
                        .nice()
                        .range([area_svg_height - padding.top - padding.bottom, 0]);
                    // console.log(history_data)
                    make_table(table_map_data);
                    // if(direct_url == "total" || direct_url == "cure"){
                    if (direct_url != "oversea" && direct_url != "oversea_cure") {
                        make_china_table(provinces_table_data);
                    } else {
                        make_oversea_table(other_table_data);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // alert("地图动画、折线图数据传输错误")
                },
                complete: function () {
                    // console.log(history_data)
                    // 折线图function

                    if (direct_url != "oversea" && direct_url != "oversea_cure") {
                        draw_history_linePath(all_history_data);
                        draw_history_add_linePath(new_history_data);
                        draw_oversea_input(china_table_data_2);
                        draw_cities_table(provinces_table_data, 0);
                    }

                    $('.line_circle,.line_circle_add').hide();
                }
            });
            //PChover效果
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
        },
        complete: function () {
            $.ajax({
                type: 'get',
                url: './data/get_oversea.json',
                success: function (d) {
                    d = JSON.stringify(d)
                    oversea_y = JSON.parse(JSON.parse(d)[0].oversea);
                    console.log(oversea_y);
                    var a = new Date();

                    new_date = (a.getMonth() + 1).toString() + '月' + (a.getDate() - 1).toString() + '日';
                    console.log(new_date);
                    oversea_y_data = oversea_y
                        .map(function (d) {
                            return {
                                name: d.name,
                                area: d.area,
                                stats_type: d.stats_type,
                                count: d[new_date]
                            };
                        })
                        .filter(function (d) {
                            return d.name != '中国';
                        });
                    console.log(
                        oversea_y_data,
                        oversea_y_data.filter(function (d) {
                            return d.name == '中国';
                        })
                    );
                    var t = oversea_y_data.filter(function (d) {
                        return d.stats_type == 'casetotal' && d.count > 0;
                    });
                    console.log(t)
                    $('.y_number_oversea').eq(0).html(function () {
                        var minus =
                            country_num.length -
                            oversea_y_data.filter(function (d) {
                                return d.stats_type == 'casetotal' && d.count > 0;
                            }).length;
                        if (minus > 0) {
                            return '+' + minus;
                        } else {
                            return minus;
                        }
                    });

                    $('.y_number_oversea').eq(1).html(function () {
                        return '+' + country_newcase;
                    });

                    $('.y_number_oversea').eq(2).html(function () {
                        var minus =
                            country_curecase -
                            d3.sum(
                                oversea_y_data
                                    .filter(function (d) {
                                        return d.stats_type == 'curecase';
                                    })
                                    .map(function (d) {
                                        return Number(d.count);
                                    })
                            );
                        if (minus > 0) {
                            return '+' + minus;
                        } else {
                            return minus;
                        }
                    });

                    $('.y_number_oversea').eq(3).html(function () {
                        var minus =
                            country_deathcase -
                            d3.sum(
                                oversea_y_data
                                    .filter(function (d) {
                                        return d.stats_type == 'deathcase';
                                    })
                                    .map(function (d) {
                                        return Number(d.count);
                                    })
                            );
                        if (minus > 0) {
                            return '+' + minus;
                        } else {
                            return minus;
                        }
                    });

                    oversea_linepath(oversea_y);
                }
            });
        }
    });

    $.ajax({
        type: 'get',
        url: './data/get_text.json',
        // url: './data/text.json',
        success: function (d) {
            d = JSON.stringify(d);
            if (UA.isMobile) {
                width = $(window).width();
                table_width = width * 0.94;
            } else {
                width = 600;
                table_width = width;
            }
            // console.log(d)
            source_text = JSON.parse(JSON.parse(d)[0].lead_text);
            // source_text = d;
            console.log(source_text);
            // lead change
            $('.update_time').html(function () {
                return (
                    "截至2020年<span class='month'>" +
                    source_text[0].month +
                    "</span>月<span class='day'>" +
                    source_text[0].day +
                    '</span>日' +
                    source_text[0].time +
                    '</div>'
                );
            });
            $('.column').eq(0).children('.number').html(source_text[0].imported_totalcase);
            $('.column').eq(1).children('.number').html(source_text[0].inprogresscase);
            $('.column').eq(2).children('.number').html(source_text[0].totalcase);
            $('.column').eq(3).children('.number').html(source_text[0].curecase);
            $('.column').eq(4).children('.number').html(source_text[0].deathcase);
            // $('.column').eq(0).children('.number').html(source_text[0].inprogresscase);
            // $('.column').eq(1).children('.number').html(source_text[0].totalcase);
            // $('.column').eq(2).children('.number').html(source_text[0].curecase);
            // $('.column').eq(3).children('.number').html(source_text[0].deathcase);
            // 差值
            $('.y_number').eq(0).html(function () {
                if (source_text[0].imported_newcase.split('-').length == 2) {
                    return source_text[0].imported_newcase;
                } else {
                    return '+' + source_text[0].imported_newcase;
                }
            });

            $('.y_number').eq(1).html(function () {
                if (source_text[0].change_inprogresscase.split('-').length == 2) {
                    return source_text[0].change_inprogresscase;
                } else {
                    return '+' + source_text[0].change_inprogresscase;
                }
            });

            $('.y_number').eq(2).html(function () {
                if (source_text[0].newcase.split('-').length == 2) {
                    return source_text[0].newcase;
                } else {
                    return '+' + source_text[0].newcase;
                }
            });
            $('.y_number').eq(3).html(function () {
                if (source_text[0].new_curecase.split('-').length == 2) {
                    return source_text[0].new_curecase;
                } else {
                    return '+' + source_text[0].new_curecase;
                }
            });
            $('.y_number').eq(4).html(function () {
                if (source_text[0].new_deathcase.split('-').length == 2) {
                    return source_text[0].new_deathcase;
                } else {
                    return '+' + source_text[0].new_deathcase;
                }
            });

            //数据来源
            $('.table_1').after(
                "<div class='source_container'><div class='source source_text'>" +
                source_text[0].source +
                '</div></div>'
            );

            // .after("<div class='source_container'><div class='source source_tips'>"+source_tips+"</div><div class='source source_text'>"+source_text+"</div></div>")

            $('.source_container')
                .width(table_width + 'px')
                .css('margin', '50px auto')
                .css('position', 'relative')
                .css('top', function () {
                    if (UA.isMobile) {
                        return '30px';
                    } else {
                        return '450px';
                    }
                });
            if (UA.isMobile) {
                $('.source_text').css('margin-top', '0px');
            } else {
                $('.source_text').css('margin-top', '0px');
            }

            $('.source')
                .css('text-align', 'left')
                .css('font-size', '10px')
                .css('color', table_color[0])
                .css('font-weight', '300')
                .css('line-height', '14px');
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            // alert("地图动画、折线图数据传输错误")
        },
        complete: function (XMLHttpRequest, textStatus) {
            // console.log(ani_map_data)
            loading_status++;
            // if (loading_status >= 2) {
            // 	setTimeout(function(){
            // 		$('.reading').fadeOut()
            // 	},1200)
            // }
        }
    });

    function makeMap(error, states) {
        // console.log(states)
        svg
            .append('g')
            .attr('class', 'states')
            .selectAll('path')
            .data(states.features)
            .enter()
            .append('path')
            .attr('d', path)
            .style('fill', function (d) {
                if (fill_type == 'total') {
                    // if (rateById.get(d.id) == 0) {
                    // 	return '#EEF8FF';
                    // } else if (rateById.get(d.id) >= 1 && rateById.get(d.id) <= 9) {
                    // 	return '#ffffb2';
                    // } else if (rateById.get(d.id) >= 10 && rateById.get(d.id) <= 19) {
                    // 	return '#fed976';
                    // } else if (rateById.get(d.id) >= 20 && rateById.get(d.id) <= 99) {
                    // 	return '#feb24c';
                    // } else if (rateById.get(d.id) >= 100 && rateById.get(d.id) <= 199) {
                    // 	return '#fd8d3c';
                    // } else if (rateById.get(d.id) >= 200 && rateById.get(d.id) <= 499) {
                    // 	return '#FC4E2B';
                    // } else if (rateById.get(d.id) >= 500 && rateById.get(d.id) <= 999) {
                    // 	return '#E31B1B';
                    // } else if (rateById.get(d.id) >= 1000 && rateById.get(d.id) <= 4999) {
                    // 	return '#B10026';
                    // } else if (rateById.get(d.id) >= 5000) {
                    // 	return '#560021';
                    // } else {
                    // 	return "url('#pic1')";
                    // }
                    // rateByExtant
                    if (rateByExtant.get(d.id) == 0) {
                        // return '#EEF8FF';
                        return '#f7f7f7';
                    } else if (rateByExtant.get(d.id) >= 1 && rateByExtant.get(d.id) <= 9) {
                        return '#ffffb2';
                    } else if (rateByExtant.get(d.id) >= 10 && rateByExtant.get(d.id) <= 19) {
                        return '#fed976';
                    } else if (rateByExtant.get(d.id) >= 20 && rateByExtant.get(d.id) <= 99) {
                        return '#feb24c';
                    } else if (rateByExtant.get(d.id) >= 100 && rateByExtant.get(d.id) <= 199) {
                        return '#fd8d3c';
                    } else if (rateByExtant.get(d.id) >= 200 && rateByExtant.get(d.id) <= 499) {
                        return '#FC4E2B';
                    } else if (rateByExtant.get(d.id) >= 500 && rateByExtant.get(d.id) <= 999) {
                        return '#E31B1B';
                    } else if (rateByExtant.get(d.id) >= 1000 && rateByExtant.get(d.id) <= 4999) {
                        return '#B10026';
                    } else if (rateByExtant.get(d.id) >= 5000) {
                        return '#560021';
                    } else {
                        return "url('#pic1')";
                    }
                } else {
                    if (rateBycure.get(d.id) == 0) {
                        return '#fff';
                    } else if (rateBycure.get(d.id) > 0 && rateBycure.get(d.id) <= 25) {
                        return '#ffffcc';
                    } else if (rateBycure.get(d.id) > 25 && rateBycure.get(d.id) <= 50) {
                        return '#c2e699';
                    } else if (rateBycure.get(d.id) > 50 && rateBycure.get(d.id) <= 75) {
                        return '#78c679';
                    } else if (rateBycure.get(d.id) > 75 && rateBycure.get(d.id) <= 99.99999) {
                        return '#31a354';
                    } else {
                        return '#006837';
                    }
                }
            })
            .style('stroke', '#512202')
            .style('stroke-width', 0.2)
            .attr('id', function (d) {
                return 'province_' + d.id;
            })
            .on('click', function (d) {
                if (d.id != '澳门' && d.id != '台湾') {
                    clicked(d);
                } else if (d.id == '台湾') {
                    click_tw(d);
                }
            });

        // d3.select('#province_台湾').attr('pointer-events', 'none')
        d3.select('#province_香港').attr('pointer-events', 'none');
        d3.select('#province_澳门').attr('pointer-events', 'none');
        d3.select('#province_海南').style('transform', 'translate(0px, 4px)');

        //生成一个错位的圆
        svg
            .append('g')
            .attr('class', 'bg_circle')
            .selectAll('path')
            .data(states.features)
            .enter()
            .append('circle')
            // .attr("class", "bg_circle")
            // .attr("class", "bg_circle")
            .attr('cx', function (d) {
                return proj(d.properties.cp)[0];
            })
            .attr('cy', function (d) {
                return proj(d.properties.cp)[1];
            })
            .attr('r', function (d) {
                if (fill_type == 'total') {
                    // var ps = rateByNew.get(d.province)
                    if (rateByNew.get(d.properties.name) >= 0) {
                        return circle_scale(rateByNew.get(d.properties.name));
                    } else {
                        return 0;
                    }
                } else {
                    if (rateBycureCircle.get(d.properties.name) >= 0) {
                        return circle_scale_cure(rateBycureCircle.get(d.properties.name));
                    } else {
                        return 0;
                    }
                }
            })
            // .attr("fill","rbga(0,0,0,0.05)")
            .attr('fill', 'rgba(0,0,0,0.05)');

        d3.selectAll('.bg_circle').attr('filter', 'url(#box_shadow)');

        // svg
        //     .append('g')
        //     .attr('class', 'circle')
        //     .selectAll('path')
        //     .data(states.features)
        //     .enter()
        //     .append('img')
        //     .attr('class','imgfeiji')
        //     .attr('src','./assets/feiji.png')
        //     .attr('cx', function (d) {
        //         return proj(d.properties.cp)[0];
        //     })
        //     .attr('cy', function (d) {
        //         if (d.properties.name == '海南') {
        //             return proj(d.properties.cp)[1] + 4;
        //         } else {
        //             return proj(d.properties.cp)[1];
        //         }
        //     })
        //     .attr('r', function (d) {
        //         // var ps = rateByNew.get(d.province)
        //         if (fill_type == 'total') {
        //             // var ps = rateByNew.get(d.province)
        //             if (rateByNew.get(d.properties.name) >= 0) {
        //                 return circle_scale(rateByNew.get(d.properties.name));
        //             } else {
        //                 return 0;
        //             }
        //         } else {
        //             if (rateBycureCircle.get(d.properties.name) >= 0) {
        //                 return circle_scale_cure(rateBycureCircle.get(d.properties.name));
        //             } else {
        //                 return 0;
        //             }
        //         }
        //     })
        //     .style('fill-opacity', '1')
        svg
            .append('g')
            .attr('class', 'circle')
            .selectAll('path')
            .data(states.features)
            .enter()
            .append('circle')
            .attr('cx', function (d) {
                return proj(d.properties.cp)[0];
            })
            .attr('cy', function (d) {
                if (d.properties.name == '海南') {
                    return proj(d.properties.cp)[1] + 4;
                } else {
                    return proj(d.properties.cp)[1];
                }
            })
            .attr('r', function (d) {
                // var ps = rateByNew.get(d.province)
                if (fill_type == 'total') {
                    // var ps = rateByNew.get(d.province)
                    if (rateByNew.get(d.properties.name) >= 0) {
                        return circle_scale(rateByNew.get(d.properties.name));
                    } else {
                        return 0;
                    }
                } else {
                    if (rateBycureCircle.get(d.properties.name) >= 0) {
                        return circle_scale_cure(rateBycureCircle.get(d.properties.name));
                    } else {
                        return 0;
                    }
                }
            })
            .attr('fill', '#2c50b0')
            .style('fill-opacity', '0.75')
            .on('click', function (d) {
                if (d.id != '澳门' && d.id != '台湾') {
                    clicked(d);
                } else if (d.id == '台湾') {
                    console.log('tw')
                    click_tw(d);
                }
            });

        svg
            .append('g')
            .attr('class', 'text')
            .selectAll('text')
            .data(
                states.features.filter(function (d) {
                    return d.properties.name == '香港' || d.properties.name == '澳门';
                })
            )
            .enter()
            .append('text')
            .attr('x', function (d) {
                if (d.properties.name == '香港') {
                    // console.log('aa')
                    return proj(d.properties.cp)[0] - 3;
                } else if (d.properties.name == '澳门') {
                    // console.log('bb')
                    return proj(d.properties.cp)[0] - 3;
                }
                // else {
                //     console.log('cc')
                //     return proj(d.properties.cp)[0] - 3
                // }
            })
            .attr('y', function (d) {
                if (d.properties.name == '香港') {
                    // console.log('aaa')
                    return proj(d.properties.cp)[1] - 3 + 15;
                } else if (d.properties.name == '澳门') {
                    // console.log('bbb')
                    return proj(d.properties.cp)[1] - 3 + 30;
                }
                // else {
                //     console.log('ccc')
                //     return proj(d.properties.cp)[1] + 2
                // }
            })
            .text(function (d) {
                // var ps = rateByNew.get(d.province)
                var number = rateByNew.get(d.properties.name);
                // if (number != 0) {
                //     return number
                // }
                if (fill_type == 'total') {
                    if (d.properties.name == '香港') {
                        // console.log('hk', number)
                        return '香港：新增兵力 ' + number + ' 人';
                    }
                    if (d.properties.name == '澳门') {
                        return '澳门：新增兵力 ' + number + ' 人';
                    }
                } else {
                    if (d.properties.name == '香港') {
                        // console.log('hk', number)
                        return '香港：新增飞机 ' + number + ' 架';
                    }
                    if (d.properties.name == '澳门') {
                        return '澳门：新增飞机 ' + number + ' 架';
                    }
                }
            })
            .attr('fill', '#2c50b0')
            // .attr('font-size', '10px')
            .attr('font-size', '8px');

        // $(document).on(method, ".extant_total_button", function () {
        //     extant_total_index = Number($(this).attr("class").split("_")[5]);
        //     // console.log(extant_total_index);
        //
        //     $(".extant_total_button").css({
        //         "color": "#B3B3B3",
        //         "background": "#fff",
        //         "border": "1px solid #B3B3B3"
        //     });
        //
        //     $(this).css({
        //         "color": "#fff",
        //         "background": "rgb(254, 178, 76)",
        //         "border": "1px solid rgb(254, 178, 76)"
        //     });
        //
        //     svg.select(".states")
        //         .selectAll("path")
        //         .transition()// .duration()
        //         .style('fill', function (d) {
        //             if (extant_total_index == 0) {
        //                 if (rateByExtant.get(d.id) == 0) {
        //                     // return '#EEF8FF';
        //                     return '#f7f7f7';
        //                 } else if (rateByExtant.get(d.id) >= 1 && rateByExtant.get(d.id) <= 9) {
        //                     return '#ffffb2';
        //                 } else if (rateByExtant.get(d.id) >= 10 && rateByExtant.get(d.id) <= 19) {
        //                     return '#fed976';
        //                 } else if (rateByExtant.get(d.id) >= 20 && rateByExtant.get(d.id) <= 99) {
        //                     return '#feb24c';
        //                 } else if (rateByExtant.get(d.id) >= 100 && rateByExtant.get(d.id) <= 199) {
        //                     return '#fd8d3c';
        //                 } else if (rateByExtant.get(d.id) >= 200 && rateByExtant.get(d.id) <= 499) {
        //                     return '#FC4E2B';
        //                 } else if (rateByExtant.get(d.id) >= 500 && rateByExtant.get(d.id) <= 999) {
        //                     return '#E31B1B';
        //                 } else if (rateByExtant.get(d.id) >= 1000 && rateByExtant.get(d.id) <= 4999) {
        //                     return '#B10026';
        //                 } else if (rateByExtant.get(d.id) >= 5000) {
        //                     return '#560021';
        //                 } else {
        //                     return "url('#pic1')";
        //                 }
        //             } else {
        //                 if (rateById.get(d.id) == 0) {
        //                     // return '#EEF8FF';
        //                     return '#f7f7f7';
        //                 } else if (rateById.get(d.id) >= 1 && rateById.get(d.id) <= 9) {
        //                     return '#ffffb2';
        //                 } else if (rateById.get(d.id) >= 10 && rateById.get(d.id) <= 19) {
        //                     return '#fed976';
        //                 } else if (rateById.get(d.id) >= 20 && rateById.get(d.id) <= 99) {
        //                     return '#feb24c';
        //                 } else if (rateById.get(d.id) >= 100 && rateById.get(d.id) <= 199) {
        //                     return '#fd8d3c';
        //                 } else if (rateById.get(d.id) >= 200 && rateById.get(d.id) <= 499) {
        //                     return '#FC4E2B';
        //                 } else if (rateById.get(d.id) >= 500 && rateById.get(d.id) <= 999) {
        //                     return '#E31B1B';
        //                 } else if (rateById.get(d.id) >= 1000 && rateById.get(d.id) <= 4999) {
        //                     return '#B10026';
        //                 } else if (rateById.get(d.id) >= 5000) {
        //                     return '#560021';
        //                 } else {
        //                     return "url('#pic1')";
        //                 }
        //             }
        //         })
        // });
    }


    function loading() {
        var speed;
        var c = 0;
        var counter = 0;
        var i = setInterval(function () {
            $('.loading-page .counter h1').html(c + '%');
            $('.loading_hr').css('width', c + '%');
            counter++;
            c++;

            if (counter >= 101) {
                clearInterval(i);
                $('.loading-page').fadeOut();
            }
        }, 40);
    }

    function tabe_text_right() {
        d3
            .selectAll('.table_container_0')
            .selectAll('.col_1')
            .select('span')
            .style('position', 'relative')
            .style('right', function (d, i) {
                return ($('.col_1').eq(1).width() - $('.col_1').eq(1).find('span').width()) / 2 + 'px';
            });

        d3
            .selectAll('.table_container_1')
            // .selectAll(".table_province_box")
            // .select(".col_1")
            .selectAll('.col_1')
            .select('span')
            .style('position', 'relative')
            .style('right', function (d, i) {
                return (
                    ($('.table_container_1').find('.table_province_box_' + 0).find('.col_1').width() -
                        $('.table_container_1').find('.table_province_box_' + 0).find('.col_1').find('span').width()) /
                    2 +
                    'px'
                );
            });

        d3
            .selectAll('.table_container_0')
            .selectAll('.col_2')
            .select('span')
            .style('position', 'relative')
            .style('right', function (d, i) {
                // console.log($(".col_2").eq(0).text())
                return ($('.col_2').eq(1).width() - $('.col_2').eq(1).find('span').width()) / 2 + 'px';
            });

        d3
            .selectAll('.table_container_1')
            // .selectAll(".table_province_box")
            // .select(".col_2")
            .selectAll('.col_2')
            .select('span')
            .style('position', 'relative')
            .style('right', function (d, i) {
                return (
                    ($('.table_container_1').find('.table_province_box_' + 0).find('.col_2').width() -
                        $('.table_container_1').find('.table_province_box_' + 0).find('.col_2').find('span').width()) /
                    2 +
                    'px'
                );
            });

        d3
            .selectAll('.table_container_0')
            .selectAll('.col_3')
            .select('span')
            .style('position', 'relative')
            .style('right', function (d, i) {
                return ($('.col_3').eq(1).width() - $('.col_3').eq(1).find('span').width()) / 2 + 'px';
            });

        d3
            .selectAll('.table_container_1')
            // .selectAll(".table_province_box")
            // .select(".col_3")
            .selectAll('.col_3')
            .select('span')
            .style('position', 'relative')
            .style('right', function (d, i) {
                return (
                    ($('.table_container_1').find('.table_province_box_' + 0).find('.col_3').width() -
                        $('.table_container_1').find('.table_province_box_' + 0).find('.col_3').find('span').width()) /
                    2 +
                    'px'
                );
            });

        d3
            .selectAll('.table_container_0')
            .selectAll('.col_4')
            .select('span')
            .style('position', 'relative')
            .style('right', function (d, i) {
                return ($('.col_4').eq(1).width() - $('.col_4').eq(1).find('span').width()) / 2 + 'px';
            });

        d3
            .selectAll('.table_container_1')
            // .selectAll(".table_province_box")
            // .select(".col_4")
            .selectAll('.col_4')
            .select('span')
            .style('position', 'relative')
            .style('right', function (d, i) {
                return (
                    ($('.table_container_1').find('.table_province_box_' + 0).find('.col_4').width() -
                        $('.table_container_1').find('.table_province_box_' + 0).find('.col_4').find('span').width()) /
                    2 +
                    'px'
                );
            });
    }

    function table_head_margin() {
        d3.selectAll('.table_head').selectAll('.col').select('span').attr('class', 'table_head_span');

        $('.table_head')
            .find('.col')
            .find('span')
            .css('display', 'inline-block')
            .css('position', 'absolute')
            .css('top', '50%')
            .css('left', '50%');

        d3
            .selectAll('.table_head_span')
            .style('margin-top', function (d, i) {
                return '-' + $('.table_head_span').eq(i).height() / 2 + 'px';
            })
            .style('margin-left', function (d, i) {
                return '-' + $('.table_head_span').eq(i).width() / 2 + 'px';
            });
    }

    function click_tw(d) {
        $(".extant_total_box").hide();
        if (playing == true) {
            $('.reverse,.clock_content,.slider').hide();
            play = false;
        }
        clearInterval(t);
        sum_id = table_map_data.filter(function (dd) {
            return dd.province == d.id;
        });

        // 计算
        // console.log(counties_id)
        var newcase = d3.sum(
            sum_id.map(function (d) {
                return Number(d.newcase);
            })
        );

        var casetotal = d3.sum(
            sum_id.map(function (d) {
                return Number(d.casetotal);
            })
        );

        var curecase = d3.sum(
            sum_id.map(function (d) {
                return Number(d.curecase);
            })
        );

        var newcure = d3.sum(
            sum_id.map(function (d) {
                return Number(parseInt(d.newcure / sum_id.length));
            })
        );

        var deathcase = d3.sum(
            sum_id.map(function (d) {
                return Number(d.deathcase);
            })
        );

        var newdeath = d3.sum(
            sum_id.map(function (d) {
                return Number(d.newdeath);
            })
        );

        // var overseainput_data = table_map_data.filter(function(dd) {
        // 	return dd.province == d.id && dd.name == "境外输入";
        // });

        var overseainput_data = china_table_data_3.filter(function (dd) {
            return dd.province == d.id && dd.name == "境外输入";
        });

        // console.log(overseainput_data);
        if (overseainput_data.length == 0) {
            var overseainput = 0;
            var new_overseainput = 0;
        } else {
            var overseainput = overseainput_data[0].casetotal;
            var new_overseainput = overseainput_data[0].newcase;
        }

        $(".column").eq(1).hide();
        if (UA.isMobile) {
            if ($(window).width() < 360) {
                $(".column").width("21%");
                $(".summary").css("left", "52.5%");
            } else {
                $(".column").width("23%");
                $(".summary").css("left", "52.5%");
            }
        } else {
            $(".column").width("21%");
            $(".summary").css("left", "51%");
        }


        // $('.column_y').css('visibility', 'hidden');
        $('.column_y').css('visibility', 'visible');

        // if(fill_type == 'total' && extant_total_index==0){
        // 	$('.column_type').eq(0).html('现存确诊');
        // 	$('.number').eq(0).html(casetotal-curecase-deathcase);
        // }else{
        // 	$('.column_type').eq(0).html('新增确诊');
        // 	$('.number').eq(0).html(newcase);
        // }
        // $('.column_type').eq(1).html('境外输入');
        $('.number').eq(0).html(overseainput);
        $('.number').eq(2).html(casetotal);
        $('.number').eq(3).html(curecase);
        $('.number').eq(4).html(deathcase);

        //差值
        $('.y_number').eq(0).html(function () {
            // if (new_overseainput.split('-').length == 2 && overseainput != 0 ) {
            // 	return new_overseainput;
            // if(new_overseainput == "0"){
            // 	return "-"
            // } else {
            return '+' + new_overseainput;
            // }
        });

        $('.y_number').eq(2).html(function () {
            // if (newcase.split('-').length == 2) {
            // 	return newcase;
            // if(newcase == "0"){
            // 	return "-"
            // } else {
            return '+' + newcase;
            // }
        });

        $('.y_number').eq(3).html(function () {
            // if (newcure.split('-').length == 2) {
            // 	return newcure;
            // if(newcure == "0"){
            // 	return "-"
            // } else {
            return '+' + newcure;
            // }
        });

        $('.y_number').eq(4).html(function () {
            // if (newdeath.split('-').length == 2) {
            // 	return newdeath;
            // if(newdeath == "0"){
            // 	return "-"
            // } else {
            return '+' + newdeath;
            // }
        });

        var x, y, k;
        var centroid = d.properties.cp;
        if (UA.isMobile) {
            if (d && centered !== d) {
                x = proj(centroid)[0] - 2;
                // y = proj(centroid)[1] + 3;
                y = proj(centroid)[1] + 4;
                // y = proj(centroid)[1] - 1;
                k = 12;
                centered = d;
            } else {
                x = proj(centroid)[0] - 2;
                // y = proj(centroid)[1] + 3;
                y = proj(centroid)[1] + 4;
                // y = proj(centroid)[1] - 1;
                k = 12;
                centered = d;
            }
        } else {
            $('.hint').css('top', '820px');
            if (d && centered !== d) {
                x = proj(centroid)[0] - 40;
                // y = proj(centroid)[1] + 3;
                y = proj(centroid)[1] - 2;
                // y = proj(centroid)[1] - 1;
                k = 10;
                centered = d;
            } else {
                x = proj(centroid)[0] - 40;
                // y = proj(centroid)[1] + 3;
                y = proj(centroid)[1] - 2;
                // y = proj(centroid)[1] - 1;
                k = 10;
                centered = d;
            }
        }

        // 各省市地区
        $('.summary_title').html(d.id + '');
        $('.nine_0,.nine_1,.reverse,.circle,.text,.bg_circle,.tl,.hand').hide();
        $('.cities_count').show();
        $('.back').css('pointer-events', 'none');
        // d3.select('.states').transition()
        // .duration(750)
        // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")

        d3.select('.states').selectAll('path').attr('opacity', '0').attr('pointer-events', 'none');
        // d3.select('.active').attr('opacity', '1').transition(250).delay(800).style('fill-opacity', '0').style('stroke-width', '0px')

        setTimeout(function () {
            $('.back').css('pointer-events', 'auto');
        }, 1000);

        d3
            .select('#province_台湾')
            .attr('opacity', 0)
            .transition(700)
            .delay(200)
            .attr('transform', function (d) {
                return (
                    'translate(' + width / 2 + ',' + height / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')'
                );
            })
            .style('stroke-width', '0.05px')
            .attr('opacity', 1);
    }

    function clicked(d) {
        $(".extant_total_box").hide();
        clearInterval(t);

        console.log(d)

        if (playing == true) {
            $('.reverse,.clock_content,.slider').hide();
            play = false;
        }

        if (d.id == '香港') {
            d.id = '广东'
        }

        var id_seq = {
            type: d.id,
            features: []
        };

        counties_id = table_map_data.filter(function (dd) {
            return dd.province == d.id && dd.id != 'null';
        });

        sum_id = table_map_data.filter(function (dd) {
            return dd.province == d.id && dd.name != d.id;
        });

        console.log(sum_id)

        // 计算
        // console.log(counties_id)
        var newcase = d3.sum(
            sum_id.map(function (d) {
                return Number(d.newcase);
            })
        );

        var casetotal = d3.sum(
            sum_id.map(function (d) {
                return Number(d.casetotal);
            })
        );

        var curecase = d3.sum(
            sum_id.map(function (d) {
                return Number(d.curecase);
            })
        );

        var newcure = d3.sum(
            sum_id.map(function (d) {
                return Number(parseInt(d.newcure / sum_id.length));
            })
        );

        var deathcase = d3.sum(
            sum_id.map(function (d) {
                return Number(d.deathcase);
            })
        );

        var newdeath = d3.sum(
            sum_id.map(function (d) {
                return Number(d.newdeath);
            })
        );

        // var overseainput_data = table_map_data.filter(function(dd) {
        // 	return dd.province == d.id && dd.name == "境外输入";
        // });

        var overseainput_data = china_table_data_3.filter(function (dd) {
            return dd.province == d.id && dd.name == "境外输入";
        });

        // console.log(overseainput_data);
        if (overseainput_data.length == 0) {
            var overseainput = 0;
            var new_overseainput = 0;
        } else {
            var overseainput = overseainput_data[0].casetotal;
            var new_overseainput = overseainput_data[0].newcase;
        }

        $(".column").eq(1).hide();
        if (UA.isMobile) {
            if ($(window).width() < 360) {
                $(".column").width("21%");
                $(".summary").css("left", "52.5%");
            } else {
                $(".column").width("23%");
                $(".summary").css("left", "52.5%");
            }
        } else {
            $(".column").width("21%");
            $(".summary").css("left", "51%");
        }


        // $('.column_y').css('visibility', 'hidden');
        $('.column_y').css('visibility', 'visible');

        // if(fill_type == 'total' && extant_total_index==0){
        // 	$('.column_type').eq(0).html('现存确诊');
        // 	$('.number').eq(0).html(casetotal-curecase-deathcase);
        // }else{
        // 	$('.column_type').eq(0).html('新增确诊');
        // 	$('.number').eq(0).html(newcase);
        // }
        // $('.column_type').eq(1).html('境外输入');
        $('.number').eq(0).html(overseainput);
        $('.number').eq(2).html(casetotal);
        $('.number').eq(3).html(curecase);
        $('.number').eq(4).html(deathcase);

        //差值
        $('.y_number').eq(0).html(function () {
            // if (new_overseainput.split('-').length == 2 && overseainput != 0 ) {
            // 	return new_overseainput;
            // if(new_overseainput == "0"){
            // 	return "-"
            // } else {
            return '+' + new_overseainput;
            // }
        });

        $('.y_number').eq(2).html(function () {
            // if (newcase.split('-').length == 2) {
            // 	return newcase;
            // if(newcase == "0"){
            // 	return "-"
            // } else {
            return '+' + newcase;
            // }
        });

        $('.y_number').eq(3).html(function () {
            // if (newcure.split('-').length == 2) {
            // 	return newcure;
            // if(newcure == "0"){
            // 	return "-"
            // } else {
            return '+' + newcure;
            // }
        });

        $('.y_number').eq(4).html(function () {
            // if (newdeath.split('-').length == 2) {
            // 	return newdeath;
            // if(newdeath == "0"){
            // 	return "-"
            // } else {
            return '+' + newdeath;
            // }
        });

        // console.log(sum_id);

        d3
            .nest()
            .key(function (d) {
                return d.id;
            })
            .entries(counties_id)
            .map(function (d) {
                return {
                    id: d.key,
                    casetotal: d.values[0].casetotal,
                    curecase: d.values[0].curecase,
                    deathcase: d.values[0].deathcase
                };
            })
            .forEach(function (d) {
                rateBycities.set(d.id, d.casetotal);
                rateByExtantcity.set(d.id, Number(d.casetotal - d.curecase - d.deathcase));
                rateBycureCity.set(d.id, Math.round(parseFloat(+d.curecase) / parseFloat(+d.casetotal) * 10000) / 100);
                rateBycureZero.set(d.id, +d.curecase);
            });

        console.log(counties_id);
        var x, y, k;
        var centroid = d.properties.cp;

        // 地图定制
        if (UA.isMobile) {
            switch (d.id) {
                case '新疆':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 9;
                        y = proj(centroid)[1] + 20;
                        k = 2.1;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 9;
                        y = proj(centroid)[1] + 20;
                        k = 2.1;
                        centered = d;
                    }
                    break;
                case '内蒙古':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 36;
                        y = proj(centroid)[1] + 16;
                        k = 1.7;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 36;
                        y = proj(centroid)[1] + 16;
                        k = 1.7;
                        centered = d;
                    }
                    break;
                case '黑龙江':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 10;
                        y = proj(centroid)[1] + 16;
                        k = 3;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 10;
                        y = proj(centroid)[1] + 16;
                        k = 3;
                        centered = d;
                    }
                    break;
                case '甘肃':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] + 22;
                        y = proj(centroid)[1] + 30;
                        k = 3;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] + 22;
                        y = proj(centroid)[1] + 30;
                        k = 3;
                        centered = d;
                    }
                    break;
                case '吉林':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 10;
                        k = 5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 10;
                        k = 5;
                        centered = d;
                    }
                    break;
                case '青海':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 4;
                        y = proj(centroid)[1] + 10;
                        k = 3.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 4;
                        y = proj(centroid)[1] + 10;
                        k = 3.5;
                        centered = d;
                    }
                    break;
                case '西藏':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 4;
                        y = proj(centroid)[1] + 10;
                        k = 2.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 4;
                        y = proj(centroid)[1] + 10;
                        k = 2.5;
                        centered = d;
                    }
                    break;
                case '四川':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 8;
                        y = proj(centroid)[1] + 10;
                        k = 4;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 8;
                        y = proj(centroid)[1] + 10;
                        k = 4;
                        centered = d;
                    }
                    break;
                case '云南':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 6;
                        y = proj(centroid)[1] + 10;
                        k = 4.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 6;
                        y = proj(centroid)[1] + 10;
                        k = 4.5;
                        centered = d;
                    }
                    break;
                case '宁夏':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 6;
                        y = proj(centroid)[1] + 5;
                        k = 7;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 6;
                        y = proj(centroid)[1] + 5;
                        k = 7;
                        centered = d;
                    }
                    break;
                case '辽宁':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 5;
                        k = 6.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 5;
                        k = 6.5;
                        centered = d;
                    }
                    break;
                case '贵州':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 5;
                        k = 6.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 5;
                        k = 6.5;
                        centered = d;
                    }
                    break;
                case '广西':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 5;
                        k = 6.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 5;
                        k = 6.5;
                        centered = d;
                    }
                    break;
                case '广东':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 2.2;
                        y = proj(centroid)[1] + 5;
                        k = 6.2;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 2.2;
                        y = proj(centroid)[1] + 5;
                        k = 6.2;
                        centered = d;
                    }
                    break;
                case '湖南':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 6;
                        y = proj(centroid)[1] + 5;
                        k = 6.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 6;
                        y = proj(centroid)[1] + 5;
                        k = 6.5;
                        centered = d;
                    }
                    break;
                case '重庆':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 5;
                        k = 9;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 5;
                        k = 9;
                        centered = d;
                    }
                    break;
                case '湖北':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 5;
                        k = 6.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 5;
                        k = 6.5;
                        centered = d;
                    }
                    break;
                case '江西':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 6;
                        y = proj(centroid)[1] + 5;
                        k = 6.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 6;
                        y = proj(centroid)[1] + 5;
                        k = 6.5;
                        centered = d;
                    }
                    break;
                case '福建':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 4;
                        y = proj(centroid)[1] + 5;
                        k = 8;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 4;
                        y = proj(centroid)[1] + 5;
                        k = 8;
                        centered = d;
                    }
                    break;
                case '浙江':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 4;
                        y = proj(centroid)[1] + 5;
                        k = 8;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 4;
                        y = proj(centroid)[1] + 5;
                        k = 8;
                        centered = d;
                    }
                    break;
                case '安徽':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 4;
                        y = proj(centroid)[1] + 5;
                        k = 8;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 4;
                        y = proj(centroid)[1] + 5;
                        k = 8;
                        centered = d;
                    }
                    break;
                case '河南':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 4;
                        y = proj(centroid)[1] + 5;
                        k = 7;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 4;
                        y = proj(centroid)[1] + 5;
                        k = 7;
                        centered = d;
                    }
                    break;
                case '河北':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 0;
                        y = proj(centroid)[1] - 3.5;
                        k = 5.8;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 0;
                        y = proj(centroid)[1] - 3.5;
                        k = 5.8;
                        centered = d;
                    }
                    break;
                case '陕西':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 6;
                        y = proj(centroid)[1] + 5.5;
                        k = 5.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 6;
                        y = proj(centroid)[1] + 5.5;
                        k = 5.5;
                        centered = d;
                    }
                    break;
                case '山西':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 4;
                        y = proj(centroid)[1] + 5;
                        k = 6;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 4;
                        y = proj(centroid)[1] + 5;
                        k = 6;
                        centered = d;
                    }
                    break;
                case '江苏':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 8;
                        y = proj(centroid)[1] + 5;
                        k = 7;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 8;
                        y = proj(centroid)[1] + 5;
                        k = 7;
                        centered = d;
                    }
                    break;
                case '山东':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 5;
                        k = 6.4;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 5;
                        k = 6.4;
                        centered = d;
                    }
                    break;
                case '海南':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 1.2;
                        // y = proj(centroid)[1] + 3;
                        y = proj(centroid)[1] + 6;
                        // y = proj(centroid)[1] - 1;
                        k = 18;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 1.2;
                        // y = proj(centroid)[1] + 3;
                        y = proj(centroid)[1] + 6;
                        // y = proj(centroid)[1] - 1;
                        k = 18;
                        centered = d;
                    }
                    break;
                case '北京':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 1;
                        y = proj(centroid)[1] + 1.5;
                        k = 24;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 1;
                        y = proj(centroid)[1] + 1.5;
                        k = 24;
                        centered = d;
                    }
                    break;
                case '上海':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 1;
                        y = proj(centroid)[1] + 1;
                        k = 35;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 1;
                        y = proj(centroid)[1] + 1;
                        k = 35;
                        centered = d;
                    }
                    break;
                case '天津':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 1.5;
                        k = 25;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 2;
                        y = proj(centroid)[1] + 1.5;
                        k = 25;
                        centered = d;
                    }
                    break;
                default:
                    break;
            }
        } else {
            // pc 定制
            // $('.hint').css('top', '880px');
            $('.hint').css('top', '840px');
            switch (d.id) {
                case '新疆':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 140;
                        y = proj(centroid)[1] - 20;
                        k = 2.2;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 140;
                        y = proj(centroid)[1] - 20;
                        k = 2.2;
                        centered = d;
                    }
                    break;
                case '内蒙古':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 222;
                        y = proj(centroid)[1] - 35;
                        k = 1.9;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 222;
                        y = proj(centroid)[1] - 35;
                        k = 1.9;
                        centered = d;
                    }
                    break;
                case '黑龙江':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 142;
                        y = proj(centroid)[1] - 16;
                        k = 2.6;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 142;
                        y = proj(centroid)[1] - 16;
                        k = 2.6;
                        centered = d;
                    }
                    break;
                case '甘肃':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 82;
                        y = proj(centroid)[1] + 30;
                        k = 3;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 82;
                        y = proj(centroid)[1] + 30;
                        k = 3;
                        centered = d;
                    }
                    break;
                case '吉林':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 82;
                        y = proj(centroid)[1] - 10;
                        k = 5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 82;
                        y = proj(centroid)[1] - 10;
                        k = 5;
                        centered = d;
                    }
                    break;
                case '青海':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 90;
                        y = proj(centroid)[1] - 20;
                        k = 3.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 90;
                        y = proj(centroid)[1] - 20;
                        k = 3.5;
                        centered = d;
                    }
                    break;
                case '西藏':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 124;
                        y = proj(centroid)[1] - 24;
                        k = 2.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 124;
                        y = proj(centroid)[1] - 24;
                        k = 2.5;
                        centered = d;
                    }
                    break;
                case '四川':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 108;
                        y = proj(centroid)[1] - 10;
                        k = 4;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 108;
                        y = proj(centroid)[1] - 10;
                        k = 4;
                        centered = d;
                    }
                    break;
                case '云南':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 86;
                        y = proj(centroid)[1] - 5;
                        k = 4.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 86;
                        y = proj(centroid)[1] - 5;
                        k = 4.5;
                        centered = d;
                    }
                    break;
                case '宁夏':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 46;
                        y = proj(centroid)[1] - 5;
                        k = 7;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 46;
                        y = proj(centroid)[1] - 5;
                        k = 7;
                        centered = d;
                    }
                    break;
                case '辽宁':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 52;
                        y = proj(centroid)[1] - 5;
                        k = 6.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 52;
                        y = proj(centroid)[1] - 5;
                        k = 6.5;
                        centered = d;
                    }
                    break;
                case '贵州':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 52;
                        y = proj(centroid)[1] - 0;
                        k = 6.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 52;
                        y = proj(centroid)[1] - 0;
                        k = 6.5;
                        centered = d;
                    }
                    break;
                case '广西':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 52;
                        y = proj(centroid)[1] - 5;
                        k = 6.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 52;
                        y = proj(centroid)[1] - 5;
                        k = 6.5;
                        centered = d;
                    }
                    break;
                case '广东':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 52;
                        y = proj(centroid)[1] - 5;
                        k = 6.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 52;
                        y = proj(centroid)[1] - 5;
                        k = 6.5;
                        centered = d;
                    }
                    break;
                case '湖南':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 56;
                        y = proj(centroid)[1] - 5;
                        k = 6.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 56;
                        y = proj(centroid)[1] - 5;
                        k = 6.5;
                        centered = d;
                    }
                    break;
                case '重庆':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 32;
                        y = proj(centroid)[1] - 2;
                        k = 9;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 32;
                        y = proj(centroid)[1] - 2;
                        k = 9;
                        centered = d;
                    }
                    break;
                case '湖北':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 52;
                        y = proj(centroid)[1] - 5;
                        k = 6.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 52;
                        y = proj(centroid)[1] - 5;
                        k = 6.5;
                        centered = d;
                    }
                    break;
                case '江西':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 56;
                        y = proj(centroid)[1] - 5;
                        k = 6.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 56;
                        y = proj(centroid)[1] - 5;
                        k = 6.5;
                        centered = d;
                    }
                    break;
                case '福建':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 44;
                        y = proj(centroid)[1] - 2;
                        k = 8;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 44;
                        y = proj(centroid)[1] - 2;
                        k = 8;
                        centered = d;
                    }
                    break;
                case '浙江':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 44;
                        y = proj(centroid)[1] - 5;
                        k = 8;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 44;
                        y = proj(centroid)[1] - 5;
                        k = 8;
                        centered = d;
                    }
                    break;
                case '安徽':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 54;
                        y = proj(centroid)[1] - 5;
                        k = 7;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 54;
                        y = proj(centroid)[1] - 5;
                        k = 7;
                        centered = d;
                    }
                    break;
                case '河南':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 50;
                        y = proj(centroid)[1] - 5;
                        k = 7;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 50;
                        y = proj(centroid)[1] - 5;
                        k = 7;
                        centered = d;
                    }
                    break;
                case '河北':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 60;
                        y = proj(centroid)[1] - 28;
                        k = 5.2;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 60;
                        y = proj(centroid)[1] - 28;
                        k = 5.2;
                        centered = d;
                    }
                    break;
                case '陕西':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 84;
                        y = proj(centroid)[1] - 5;
                        k = 4.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 84;
                        y = proj(centroid)[1] - 5;
                        k = 4.5;
                        centered = d;
                    }
                    break;
                case '山西':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 60;
                        y = proj(centroid)[1] - 5;
                        k = 5.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 60;
                        y = proj(centroid)[1] - 5;
                        k = 5.5;
                        centered = d;
                    }
                    break;
                case '江苏':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 64;
                        y = proj(centroid)[1] - 5;
                        k = 7;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 64;
                        y = proj(centroid)[1] - 5;
                        k = 7;
                        centered = d;
                    }
                    break;
                case '山东':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 62;
                        y = proj(centroid)[1] - 5;
                        k = 6.5;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 62;
                        y = proj(centroid)[1] - 5;
                        k = 6.5;
                        centered = d;
                    }
                    break;
                case '海南':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 20;
                        // y = proj(centroid)[1] - 1;
                        y = proj(centroid)[1] + 3;
                        // y = proj(centroid)[1] - 1 + (18)*4;
                        k = 18;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 20;
                        // y = proj(centroid)[1] - 1;
                        y = proj(centroid)[1] + 3;
                        // y = proj(centroid)[1] - 1 + (18)*4;
                        k = 18;
                        centered = d;
                    }
                    break;
                case '北京':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 18;
                        y = proj(centroid)[1] - 1;
                        k = 20;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 18;
                        y = proj(centroid)[1] - 1;
                        k = 20;
                        centered = d;
                    }
                    break;
                case '上海':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 11;
                        y = proj(centroid)[1] - 0;
                        k = 30;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 11;
                        y = proj(centroid)[1] - 0;
                        k = 30;
                        centered = d;
                    }
                    break;
                case '天津':
                    if (d && centered !== d) {
                        x = proj(centroid)[0] - 18;
                        y = proj(centroid)[1] - 1;
                        k = 20;
                        centered = d;
                    } else {
                        x = proj(centroid)[0] - 18;
                        y = proj(centroid)[1] - 1;
                        k = 20;
                        centered = d;
                    }
                    break;
                default:
                    break;
            }
        }

        for (var i = 0; i < counties_id.length; i++) {
            var map_out = counties_data.features.filter(function (d) {
                return d.id == counties_id[i].id;
            })[0];
            id_seq['features'].push(map_out);
        }

        console.log(id_seq);

        // 各省市地区
        $('.summary_title').html(d.id + '');
        $('.nine_0,.nine_1,.reverse,.circle,.text,.bg_circle,.tl,.hand').hide();
        $('.cities_count').show();
        $('.back').css('pointer-events', 'none');

        // setTimeout(function(){
        //     $('.hand').show()
        // },1000)

        // 特殊计算 滨海新区
        var add_city;
        if (id_seq.type == '天津') {
            add_city = table_map_data.filter(function (d) {
                return d.name == '滨海新区';
            });
            var replace = [add_city[0].casetotal, add_city[0].newcase, add_city[0].curecase, add_city[0].deathcase];
            var change_city = counties_id.filter(function (d) {
                return d.name == '塘沽区' || d.name == '汉沽区' || d.name == '大港区';
            });
            console.log(change_city);
            change_city.forEach(function (d) {
                d.casetotal = replace[0];
                d.newcase = replace[1];
                d.curecase = replace[2];
                d.deathcase = replace[3];
            });
            counties_id.forEach(function (d) {
                rateBycities.set(d.id, d.casetotal);
                rateByExtantcity.set(d.id, Number(d.casetotal - d.curecase - d.deathcase));
                rateBycureCity.set(d.id, Math.round(parseFloat(d.curecase) / parseFloat(d.casetotal) * 10000) / 100);
            });
        } else if (id_seq.type == '安徽') {
            add_city = table_map_data.filter(function (d) {
                return d.name == '合肥市';
            });
            var replace = [add_city[0].casetotal, add_city[0].newcase, add_city[0].curecase, add_city[0].deathcase];
            var change_city = counties_id.filter(function (d) {
                return d.name == '巢湖市';
            });
            console.log(change_city);
            change_city.forEach(function (d) {
                d.casetotal = replace[0];
                d.newcase = replace[1];
                d.curecase = replace[2];
                d.deathcase = replace[3];
            });
            counties_id.forEach(function (d) {
                rateBycities.set(d.id, d.casetotal);
                rateByExtantcity.set(d.id, Number(d.casetotal - d.curecase - d.deathcase));
                rateBycureCity.set(d.id, Math.round(parseFloat(d.curecase) / parseFloat(d.casetotal) * 10000) / 100);
            });
        } else if (id_seq.type == '吉林') {
            add_city = table_map_data.filter(function (d) {
                return d.name == '公主岭市';
            });
            var replace = [
                Number(add_city[0].casetotal),
                Number(add_city[0].newcase),
                Number(add_city[0].curecase),
                Number(add_city[0].deathcase)
            ];
            var change_city = counties_id.filter(function (d) {
                return d.name == '四平市';
            });
            change_city.forEach(function (d) {
                d.casetotal = Number(d.casetotal) + replace[0];
                d.newcase = Number(d.newcase) + replace[1];
                d.curecase = Number(d.curecase) + replace[2];
                d.deathcase = Number(d.deathcase) + replace[3];
            });
            counties_id.forEach(function (d) {
                rateBycities.set(d.id, d.casetotal);
                rateByExtantcity.set(d.id, Number(d.casetotal - d.curecase - d.deathcase));
                rateBycureCity.set(d.id, Math.round(parseFloat(d.curecase) / parseFloat(d.casetotal) * 10000) / 100);
            });
        } else if (id_seq.type == '山东') {
            add_city = table_map_data.filter(function (d) {
                return d.name == '济南市';
            });
            var replace = [
                Number(add_city[0].casetotal),
                Number(add_city[0].newcase),
                Number(add_city[0].curecase),
                Number(add_city[0].deathcase)
            ];
            var change_city = counties_id.filter(function (d) {
                return d.name == '莱芜市';
            });
            change_city.forEach(function (d) {
                d.casetotal = Number(d.casetotal) + replace[0];
                d.newcase = Number(d.newcase) + replace[1];
                d.curecase = Number(d.curecase) + replace[2];
                d.deathcase = Number(d.deathcase) + replace[3];
            });
            counties_id.forEach(function (d) {
                rateBycities.set(d.id, d.casetotal);
                rateByExtantcity.set(d.id, Number(d.casetotal - d.curecase - d.deathcase));
                rateBycureCity.set(d.id, Math.round(parseFloat(d.curecase) / parseFloat(d.casetotal) * 10000) / 100);
            });
        } else if (id_seq.type == '陕西') {
            add_city = table_map_data.filter(function (d) {
                return d.name == '杨凌示范区';
            });
            var add_city_1 = table_map_data.filter(function (d) {
                return d.name == '韩城市';
            });
            var replace = [
                Number(add_city[0].casetotal),
                Number(add_city[0].newcase),
                Number(add_city[0].curecase),
                Number(add_city[0].deathcase)
            ];
            var replace_1 = [
                Number(add_city_1[0].casetotal),
                Number(add_city_1[0].newcase),
                Number(add_city_1[0].curecase),
                Number(add_city_1[0].deathcase)
            ];
            var change_city = counties_id.filter(function (d) {
                return d.name == '咸阳市';
            });
            var change_city_1 = counties_id.filter(function (d) {
                return d.name == '渭南市';
            });
            change_city.forEach(function (d) {
                d.casetotal = Number(d.casetotal) + replace[0];
                d.newcase = Number(d.newcase) + replace[1];
                d.curecase = Number(d.curecase) + replace[2];
                d.deathcase = Number(d.deathcase) + replace[3];
            });
            change_city_1.forEach(function (d) {
                d.casetotal = Number(d.casetotal) + replace_1[0];
                d.newcase = Number(d.newcase) + replace_1[1];
                d.curecase = Number(d.curecase) + replace_1[2];
                d.deathcase = Number(d.deathcase) + replace_1[3];
            });
            counties_id.forEach(function (d) {
                rateBycities.set(d.id, d.casetotal);
                rateByExtantcity.set(d.id, Number(d.casetotal - d.curecase - d.deathcase));
                rateBycureCity.set(d.id, Math.round(parseFloat(d.curecase) / parseFloat(d.casetotal) * 10000) / 100);
            });
        } else if (id_seq.type == '上海') {
            add_city = table_map_data.filter(function (d) {
                return d.name == '浦东新区';
            });
            var add_city_1 = table_map_data.filter(function (d) {
                return d.name == '黄浦区';
            });
            var add_city_2 = table_map_data.filter(function (d) {
                return d.name == '静安区';
            });
            var replace = [
                Number(add_city[0].casetotal),
                Number(add_city[0].newcase),
                Number(add_city[0].curecase),
                Number(add_city[0].deathcase)
            ];
            var replace_1 = [
                Number(add_city_1[0].casetotal),
                Number(add_city_1[0].newcase),
                Number(add_city_1[0].curecase),
                Number(add_city_1[0].deathcase)
            ];
            var replace_2 = [
                Number(add_city_2[0].casetotal),
                Number(add_city_2[0].newcase),
                Number(add_city_2[0].curecase),
                Number(add_city_2[0].deathcase)
            ];
            var change_city = counties_id.filter(function (d) {
                return d.name == '南汇区';
            });
            var change_city_1 = counties_id.filter(function (d) {
                return d.name == '卢湾区';
            });
            var change_city_2 = counties_id.filter(function (d) {
                return d.name == '闸北区';
            });
            change_city.forEach(function (d) {
                d.casetotal = replace[0];
                d.newcase = replace[1];
                d.curecase = replace[2];
                d.deathcase = replace[3];
            });
            change_city_1.forEach(function (d) {
                d.casetotal = replace_1[0];
                d.newcase = replace_1[1];
                d.curecase = replace_1[2];
                d.deathcase = replace_1[3];
            });
            change_city_2.forEach(function (d) {
                d.casetotal = replace_2[0];
                d.newcase = replace_2[1];
                d.curecase = replace_2[2];
                d.deathcase = replace_2[3];
            });
            counties_id.forEach(function (d) {
                rateBycities.set(d.id, d.casetotal);
                rateByExtantcity.set(d.id, Number(d.casetotal - d.curecase - d.deathcase));
                rateBycureCity.set(d.id, Math.round(parseFloat(d.curecase) / parseFloat(d.casetotal) * 10000) / 100);
            });
        } else if (id_seq.type == '北京') {
            add_city = table_map_data.filter(function (d) {
                return d.name == '东城区';
            });
            var add_city_1 = table_map_data.filter(function (d) {
                return d.name == '西城区';
            });
            // var add_city_2 = table_map_data.filter(function (d) {
            //     return d.name == '静安区'
            // })
            var replace = [
                Number(add_city[0].casetotal),
                Number(add_city[0].newcase),
                Number(add_city[0].curecase),
                Number(add_city[0].deathcase)
            ];
            var replace_1 = [
                Number(add_city_1[0].casetotal),
                Number(add_city_1[0].newcase),
                Number(add_city_1[0].curecase),
                Number(add_city_1[0].deathcase)
            ];
            // var replace_2 = [
            //     Number(add_city_2[0].casetotal),
            //     Number(add_city_2[0].newcase),
            //     Number(add_city_2[0].curecase),
            //     Number(add_city_2[0].deathcase)
            // ]
            var change_city = counties_id.filter(function (d) {
                return d.name == '崇文区';
            });
            var change_city_1 = counties_id.filter(function (d) {
                return d.name == '宣武区';
            });
            // var change_city_2 = counties_id.filter(function(d){
            //     return d.name == '闸北区'
            // })
            change_city.forEach(function (d) {
                d.casetotal = replace[0];
                d.newcase = replace[1];
                d.curecase = replace[2];
                d.deathcase = replace[3];
            });
            change_city_1.forEach(function (d) {
                d.casetotal = replace_1[0];
                d.newcase = replace_1[1];
                d.curecase = replace_1[2];
                d.deathcase = replace_1[3];
            });
            // change_city_2.forEach(function(d){
            //     d.casetotal = replace_2[0]
            //     d.newcase = replace_2[1]
            //     d.curecase = replace_2[2]
            //     d.deathcase = replace_2[3]
            // })
            counties_id.forEach(function (d) {
                rateBycities.set(d.id, d.casetotal);
                rateByExtantcity.set(d.id, Number(d.casetotal - d.curecase - d.deathcase));
                rateBycureCity.set(d.id, Math.round(parseFloat(d.curecase) / parseFloat(d.casetotal) * 10000) / 100);
            });
        }

        d3
            .select('.main_map')
            .append('g')
            .attr('class', 'counties')
            .selectAll('path')
            .data(id_seq.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('stroke', '#512202')
            .attr('stroke-width', function (d) {
                if (
                    d.properties.name != '汉沽区' &&
                    d.properties.name != '大港区' &&
                    d.properties.name != '莱芜市' &&
                    d.properties.name != '济南市' &&
                    d.properties.name != '南汇区' &&
                    d.properties.name != '浦东新区' &&
                    d.properties.name != '静安区' &&
                    d.properties.name != '闸北区' &&
                    d.properties.name != '崇文区' &&
                    d.properties.name != '宣武区'
                ) {
                    return 0.2 / k + 'px';
                }
            })
            .attr('id', function (d) {
                return 'city_' + d.id;
            })
            .style('fill', function (d) {
                if (fill_type == 'total') {
                    if (extant_total_index == 0) {

                        console.log(rateByExtant.get(d.id));
                        if (rateByExtantcity.get(d.id) == 0) {
                            return '#f7f7f7';
                        } else if (rateByExtantcity.get(d.id) >= 1 && rateByExtantcity.get(d.id) <= 9) {
                            return '#ffffb2';
                        } else if (rateByExtantcity.get(d.id) >= 10 && rateByExtantcity.get(d.id) <= 19) {
                            return '#fed976';
                        } else if (rateByExtantcity.get(d.id) >= 20 && rateByExtantcity.get(d.id) <= 99) {
                            return '#feb24c';
                        } else if (rateByExtantcity.get(d.id) >= 100 && rateByExtantcity.get(d.id) <= 199) {
                            return '#fd8d3c';
                        } else if (rateByExtantcity.get(d.id) >= 200 && rateByExtantcity.get(d.id) <= 499) {
                            return '#FC4E2B';
                        } else if (rateByExtantcity.get(d.id) >= 500 && rateByExtantcity.get(d.id) <= 999) {
                            return '#E31B1B';
                        } else if (rateByExtantcity.get(d.id) >= 1000 && rateByExtantcity.get(d.id) <= 4999) {
                            return '#B10026';
                        } else if (rateByExtantcity.get(d.id) >= 5000) {
                            return '#560021';
                        } else {
                            // console.log(rateByExtantcity.get(d.id))
                            // return "url('#pic1')";
                        }
                    } else {
                        if (rateBycities.get(d.id) == 0) {
                            return '#f7f7f7';
                        } else if (rateBycities.get(d.id) >= 1 && rateBycities.get(d.id) <= 9) {
                            return '#ffffb2';
                        } else if (rateBycities.get(d.id) >= 10 && rateBycities.get(d.id) <= 19) {
                            return '#fed976';
                        } else if (rateBycities.get(d.id) >= 20 && rateBycities.get(d.id) <= 99) {
                            return '#feb24c';
                        } else if (rateBycities.get(d.id) >= 100 && rateBycities.get(d.id) <= 199) {
                            return '#fd8d3c';
                        } else if (rateBycities.get(d.id) >= 200 && rateBycities.get(d.id) <= 499) {
                            return '#FC4E2B';
                        } else if (rateBycities.get(d.id) >= 500 && rateBycities.get(d.id) <= 999) {
                            return '#E31B1B';
                        } else if (rateBycities.get(d.id) >= 1000 && rateBycities.get(d.id) <= 4999) {
                            return '#B10026';
                        } else if (rateBycities.get(d.id) >= 5000) {
                            return '#560021';
                        } else {
                            return "url('#pic1')";
                        }
                    }
                } else {
                    if (rateBycureCity.get(d.id) == 0) {
                        return '#fff';
                    } else if (rateBycureCity.get(d.id) > 0 && rateBycureCity.get(d.id) <= 25) {
                        return '#ffffcc';
                    } else if (rateBycureCity.get(d.id) > 25 && rateBycureCity.get(d.id) <= 50) {
                        return '#c2e699';
                    } else if (rateBycureCity.get(d.id) > 50 && rateBycureCity.get(d.id) <= 75) {
                        return '#78c679';
                    } else if (rateBycureCity.get(d.id) > 75 && rateBycureCity.get(d.id) <= 99.99999) {
                        return '#31a354';
                    } else if (rateBycureCity.get(d.id) == 100) {
                        return '#006837';
                    } else {
                        return 'url("#dot")';
                    }
                }
            })
            .attr('transform', function (d) {
                if (id_seq.type == '海南') {
                    return (
                        'translate(' +
                        width / 2 +
                        ',' +
                        height / 2 +
                        ')scale(' +
                        k +
                        ')translate(' +
                        -x +
                        ',' +
                        -(y - 4) +
                        ')'
                    );
                } else {
                    return (
                        'translate(' +
                        width / 2 +
                        ',' +
                        height / 2 +
                        ')scale(' +
                        k +
                        ')translate(' +
                        -x +
                        ',' +
                        -y +
                        ')'
                    );
                }
            })
            // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
            .attr('opacity', 0)
            .transition(250)
            .delay(800)
            .attr('opacity', 1);

        d3
            .select('.main_map')
            .append('g')
            .attr('class', 'counties_text')
            .selectAll('text')
            .data(id_seq.features)
            .enter()
            .append('text')
            .attr('transform', function (d) {
                if (id_seq.type == '海南') {
                    return (
                        'translate(' +
                        width / 2 +
                        ',' +
                        height / 2 +
                        ') scale(' +
                        k +
                        ') translate(' +
                        -x +
                        ',' +
                        -(y - 4) +
                        ')'
                    );
                } else {
                    // return "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")"
                    return (
                        'translate(' +
                        width / 2 +
                        ',' +
                        height / 2 +
                        ') scale(' +
                        k +
                        ')  translate(' +
                        -x +
                        ',' +
                        -y +
                        ')'
                    );
                }
            })
            // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
            .attr('x', function (d) {
                if (d.properties.name == '济源市') {
                    if (UA.isMobile) {
                        return proj(d.properties.cp)[0] - 2;
                    } else {
                        return proj(d.properties.cp)[0] - 5;
                    }
                } else if (d.properties.name == '焦作市') {
                    return proj(d.properties.cp)[0] + 2;
                } else if (d.properties.name == '珠海市') {
                    return proj(d.properties.cp)[0] - 2;
                } else {
                    return proj(d.properties.cp)[0];
                }
            })
            .attr('y', function (d) {
                if (d.properties.name == '白沙黎族自治县') {
                    return proj(d.properties.cp)[1] + 0.3;
                } else if (d.properties.name == '浦东新区') {
                    return proj(d.properties.cp)[1] + 1;
                } else if (d.properties.name == '巴南区') {
                    return proj(d.properties.cp)[1] + 1;
                } else if (d.properties.name == '文山壮族苗族自治州') {
                    return proj(d.properties.cp)[1] - 2;
                } else if (d.properties.name == '咸阳市(含杨凌示范区)') {
                    return proj(d.properties.cp)[1] + 1;
                } else if (d.properties.name == '彭水苗族土家族自治县') {
                    return proj(d.properties.cp)[1] + 1;
                } else if (d.properties.name == '芜湖市') {
                    return proj(d.properties.cp)[1] + 1;
                } else if (d.properties.name == '渝北区') {
                    return proj(d.properties.cp)[1] + 0.5;
                } else if (d.properties.name == '呼伦贝尔市') {
                    return proj(d.properties.cp)[1] + 6;
                } else if (d.properties.name == '鄂尔多斯市') {
                    return proj(d.properties.cp)[1] + 2;
                } else {
                    return proj(d.properties.cp)[1];
                }
            })
            .text(function (d) {
                if (
                    d.properties.name != '莱芜市' &&
                    d.properties.name != '红桥区' &&
                    d.properties.name != '南开区' &&
                    d.properties.name != '和平区' &&
                    d.properties.name != '河西区' &&
                    d.properties.name != '河北区' &&
                    d.properties.name != '河东区' &&
                    d.properties.name != '卢湾区' &&
                    d.properties.name != '闸北区' &&
                    d.properties.name != '杨浦区' &&
                    d.properties.name != '虹口区' &&
                    d.properties.name != '长宁区' &&
                    d.properties.name != '黄浦区' &&
                    d.properties.name != '东城区' &&
                    d.properties.name != '西城区' &&
                    d.properties.name != '五家渠市' &&
                    d.properties.name != '大渡口区' &&
                    d.properties.name != '沙坪坝区' &&
                    d.properties.name != '渝中区' &&
                    d.properties.name != '双桥区' &&
                    d.properties.name != '巢湖市' &&
                    d.properties.name != '南岸区' &&
                    d.properties.name != '汉沽区' &&
                    d.properties.name != '大港区' &&
                    d.properties.name != '南汇区' &&
                    d.properties.name != '宣武区' &&
                    d.properties.name != '崇文区'
                ) {
                    return d.properties.name;
                }
            })
            .style('font-size', function (d) {
                if (UA.isMobile) {
                    return Number(6 / k).toFixed(2) + 'px';
                } else {
                    return Number(10 / k).toFixed(2) + 'px';
                }
            })
            .style('text-anchor', 'middle')
            .style('dy', '-0.3em')
            .style('fill', function (d) {
                if (fill_type == 'total') {
                    if (extant_total_index == 0) {
                        if (rateByExtantcity.get(d.id) <= 499) {
                            return '#000';
                        } else {
                            return '#fff';
                        }
                    } else {
                        if (rateBycities.get(d.id) <= 499) {
                            return '#000';
                        } else {
                            return '#fff';
                        }
                    }
                } else {
                    if (rateBycities.get(d.id) == 0) {
                        return '#000';
                    } else if (rateBycureCity.get(d.id) == 0) {
                        return '#000';
                    } else if (rateBycureCity.get(d.id) > 0 && rateBycureCity.get(d.id) <= 80) {
                        return '#000';
                    } else {
                        return '#fff';
                    }
                }
            })
            .attr('opacity', '0')
            .transition()
            .duration(200)
            .delay(900)
            .attr('opacity', '1');

        // if (id_seq.type == '海南') {
        //     d3.select('#city_460000').attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k/3 + ")translate(" + -x + "," + -(y) + ")")
        // }

        d3.select('.counties').selectAll('path').on('click', function (result) {
            $('.tool_tip_container').html('');
            // $('.hand').hide();
            console.log(counties_id, result);
            var m = d3.mouse(d3.select('.active').node());
            console.log(m);
            d3
                .nest()
                .key(function (d) {
                    return d.id;
                })
                .entries(counties_id)
                .map(function (d) {
                    return {
                        id: d.key,
                        data: [
                            Number(d.values[0].newcase),
                            Number(d.values[0].casetotal),
                            Number(d.values[0].curecase),
                            Number(d.values[0].deathcase)
                        ]
                    };
                })
                .forEach(function (d) {
                    rateBydetial.set(d.id, d.data);
                });
            console.log(rateBydetial);
            var name;
            if (fill_type == 'total') {
                $('.tool_tip_container').append(function () {
                    if (result.properties.name == '莱芜市') {
                        name = '济南市';
                    } else if (result.properties.name == '汉沽区' || result.properties.name == '大港区') {
                        name = '滨海新区';
                    } else if (result.properties.name == '巢湖市') {
                        name = '合肥市';
                    } else if (result.properties.name == '南汇区') {
                        name = '浦东新区';
                    } else if (result.properties.name == '卢湾区') {
                        name = '黄浦区';
                    } else if (result.properties.name == '闸北区') {
                        name = '静安区';
                    } else if (result.properties.name == '宣武区') {
                        name = '西城区';
                    } else if (result.properties.name == '崇文区') {
                        name = '东城区';
                    } else {
                        name = result.properties.name;
                    }
                    return (
                        "<div class='tool_province'><span>" +
                        name +
                        "</span></div><div class='tool_old'><span>当日新增：</span>" +
                        rateBydetial.get(result.id)[0] +
                        "例</div><div class='tool_new'><span>累计确诊：</span>" +
                        rateBydetial.get(result.id)[1] +
                        "例</div><div class='tool_new'><span>累计出院：</span>" +
                        rateBydetial.get(result.id)[2] +
                        "例</div><div class='tool_new'><span>累计死亡：</span>" +
                        rateBydetial.get(result.id)[3] +
                        '例</div>'
                    );
                });
            } else {
                // console.log(rateBydetial.get(result.id))
                $('.tool_tip_container').append(function () {
                    if (result.properties.name == '莱芜市') {
                        name = '济南市';
                    } else if (result.properties.name == '汉沽区' || result.properties.name == '大港区') {
                        name = '滨海新区';
                    } else if (result.properties.name == '巢湖市') {
                        name = '合肥市';
                    } else if (result.properties.name == '南汇区') {
                        name = '浦东新区';
                    } else if (result.properties.name == '卢湾区') {
                        name = '黄浦区';
                    } else if (result.properties.name == '闸北区') {
                        name = '静安区';
                    } else if (result.properties.name == '宣武区') {
                        name = '西城区';
                    } else if (result.properties.name == '崇文区') {
                        name = '东城区';
                    } else {
                        name = result.properties.name;
                    }

                    if (rateBydetial.get(result.id)[2] == 0) {
                        var rate = 0;
                    } else {
                        var rate = Math.round(
                            rateBydetial.get(result.id)[2] / rateBydetial.get(result.id)[1] * 10000 / 100
                        );
                    }
                    if (rateBydetial.get(result.id)[1] != 0) {
                        return (
                            "<div class='tool_province'><span>" +
                            name +
                            "</span></div><div class='tool_old'><span>当日新增：</span>" +
                            rateBydetial.get(result.id)[0] +
                            "例</div><div class='tool_new'><span>累计确诊：</span>" +
                            rateBydetial.get(result.id)[1] +
                            "例</div><div class='tool_new'><span>累计出院：</span>" +
                            rateBydetial.get(result.id)[2] +
                            "例</div><div class='tool_new'><span>累计死亡：</span>" +
                            rateBydetial.get(result.id)[3] +
                            "例</div><div class='tool_new'><span>治愈比例：</span>" +
                            rate +
                            '%</div>'
                        );
                    } else {
                        return (
                            "<div class='tool_province'><span>" +
                            name +
                            "</span></div><div class='tool_old'><span>当日新增：</span>" +
                            rateBydetial.get(result.id)[0] +
                            "例</div><div class='tool_new'><span>累计确诊：</span>" +
                            rateBydetial.get(result.id)[1] +
                            "例</div><div class='tool_new'><span>累计出院：</span>" +
                            rateBydetial.get(result.id)[2] +
                            "例</div><div class='tool_new'><span>累计死亡：</span>" +
                            rateBydetial.get(result.id)[3] +
                            '例</div></div>'
                        );
                    }
                });
            }

            console.log($('.tool_tip').width(), $('.tool_tip').height());
            d3
                .select('.tool_tip')
                .style('display', 'block')
                .style('position', 'absolute')
                // .style("left", function () {
                //    return m[0]/2 + "px"
                // })
                // .style("top", m[1] + $('.tool_tip').height() + "px")
                .style('font-size', '10px');
            // .attr("transform", "translate(" + proj(d.properties.cp)[0] + "," + proj(d.properties.cp)[1] + ")")
        });

        d3.select('.states').selectAll('path').classed(
            'active',
            centered &&
            function (d) {
                return d === centered;
            }
        );

        // 获取当前省的颜色
        // back_color = d3.select('.active').style('fill');

        // console.log(back_color);

        d3
            .select('.states')
            .transition()
            .duration(750)
            .attr(
                'transform',
                'translate(' + width / 2 + ',' + height / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')'
            );
        d3.select('.states').selectAll('path').attr('opacity', '0').attr('pointer-events', 'none');

        // states 香港
        if (d.id == "香港" || d.id == "广东") {

            d3
                .select('#province_广东')
                .attr('opacity', '1')
                .transition(250)
                .delay(800)
                .style('fill-opacity', '0')
                .style('stroke-width', '0px');

        } else {
            d3
                .select('.active')
                .attr('opacity', '1')
                .transition(250)
                .delay(800)
                .style('fill-opacity', '0')
                .style('stroke-width', '0px');
        }

        // $('.main_map').css('top', '-56px');
        $('.main_map').css('top', '-96px');

        setTimeout(function () {
            $('.back').css('pointer-events', 'auto');
        }, 1000);
    }

    function draw_history_linePath(all_history_data) {
        padding = {
            left: 20,
            top: 50,
            right: 40,
            bottom: 30
        };
        $('#map').append("<div class='areapath_box'></div>");

        $('.areapath_box')
            .css('position', 'relative')
            .css('top', function () {
                if (UA.isMobile) {
                    return '-100px';
                } else {
                    return '-190px';
                }
            })
            .css('background', function () {
                if (UA.isMobile) {
                    return '#fff';
                } else {
                    return '#d7e9f9';
                }
            })
            .width(svg_width + 'px')
            .css('margin', '30px auto');

        // var areaPath_svg = d3
        // 	.select('.areapath_box')
        // 	.append('svg')
        // 	.attr('class', 'areaPath_svg')
        // 	.attr('width', svg_width + 'px')
        // 	.attr('height', area_svg_height + 'px');

        // var axis_g = areaPath_svg.append('g').attr('class', 'axis_g');

        console.log(history_data);

        for (var i = 0; i < totalDate.length; i++) {
            var temp_0 = [];
            var temp_1 = [];
            var temp_2 = [];
            var temp_3 = [];
            all_history_data.forEach(function (d, a) {
                // if (d[totalDate[i] + '_casetotal'] == 'null') {
                // 	temp_0.push(0);
                // } else {
                // 	temp_0.push(Number(d[totalDate[i] + '_casetotal']));
                // }
                if (d.stats_type == 'casetotal') {
                    if (d[ani_time[i]] == 'null') {
                        temp_0.push(0);
                    } else {
                        temp_0.push(Number(d[ani_time[i]]));
                    }
                } else if (d.stats_type == 'curecase') {
                    if (d[ani_time[i]] == 'null') {
                        temp_1.push(0);
                    } else {
                        temp_1.push(Number(d[ani_time[i]]));
                    }
                } else if (d.stats_type == 'deathcase') {
                    if (d[ani_time[i]] == 'null') {
                        temp_2.push(0);
                    } else {
                        temp_2.push(Number(d[ani_time[i]]));
                    }
                }
                // console.log(temp_0,temp_1,temp_2)
                // temp_1.push(d[totalDate[i] + "_curecase"])
                // temp_2.push(d[totalDate[i] + "_deathcase"])

            });

            // console.log(temp_0)
            var sum_temp_0 = d3.sum(temp_0);
            var sum_temp_1 = d3.sum(temp_1);
            var sum_temp_2 = d3.sum(temp_2);
            if (temp_0 != 0) {
                // new_line_data_0.push([totalDate[i],sum_temp_0]);
                new_line_data_0.push([i, sum_temp_0]);
            }
            if (temp_1 != 0) {
                // new_line_data_1.push([totalDate[i],sum_temp_1]);
                new_line_data_1.push([i, sum_temp_1]);
            }
            if (temp_2 != 0) {
                // new_line_data_2.push([totalDate[i],sum_temp_2]);
                new_line_data_2.push([i, sum_temp_2]);
            }
            //这里
            new_line_data_3.push([i, sum_temp_0 - sum_temp_1 - sum_temp_2])
            // console.log(new_line_data_3)
            // new_line_data_1.push([totalDate[i],d3.sum(temp_1)]);
            // new_line_data_2.push([totalDate[i],d3.sum(temp_2)]);
        }

        // console.log(new_line_data_0);
        // console.log(new_line_data_1);
        // console.log(new_line_data_2);

        line_data_max[0] = d3.max(new_line_data_0, function (d) {
            return d[1];
        });

        line_data_max[1] = d3.max(new_line_data_1, function (d) {
            return d[1];
        });

        line_data_max[2] = d3.max(new_line_data_2, function (d) {
            return d[1];
        });
        line_data_max[3] = d3.max(new_line_data_3, function (d) {
            return d[1];
        });

        console.log(line_data_max, d3.sum(line_data_max));

        area_svg_height = 200;
        // console.log(yScale)
        yScale.domain([0, d3.max(line_data_max)]).nice().range([area_svg_height - padding.top - padding.bottom, 0]);

        // console.log(line_data_0_max)

        all_line_data.push(new_line_data_0, new_line_data_1, new_line_data_2, new_line_data_3);

        console.log(all_line_data);

        d3.selectAll('.areaPath_svg').append('g').attr('class', 'linepath_g');

        // d3.selectAll(".areaPath_svg")
        //     .append("g")
        //     .attr("class", "circle_g")

        for (var i = 0; i < all_line_data.length; i++) {
            d3
                .selectAll('.linepath_g')
                .append('path')
                .attr('class', 'line_path line_path_' + i)
                .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
                .attr('d', function (d) {
                    return linePath(all_line_data[i]);
                })
                .attr('fill', 'none')
                .attr('stroke', function () {
                    if (i == 3) {
                        return table_color[1]
                    } else {
                        return table_color[2 + i]
                    }
                })
                .attr('stroke-width', '2px')
                .attr('stroke-linecap', 'round');

        }

        yAxis = d3.axisRight(yScale).ticks(6).tickSize(-(svg_width - padding.left - padding.right));

        var xAxis = d3
            .axisBottom(xScale)
            .ticks(totalDate.length) // .ticks(Number(Math.ceil(totalDate.length / 10)))
            .tickFormat(function (d, a) {
                // console.log(a)
                if (a % Number(Math.ceil(totalDate.length / 10)) == 0) {
                    // 	// if (a == 0) {}

                    return Number(totalDate[a].split('_')[0]) + '/' + Number(Number(totalDate[a].split('_')[1]));
                    // 	// return Number(totalDate[a].split("_")[0]) + "/" + Number(Number(totalDate[a].split("_")[1])+a)
                } else {
                    return '';
                }
            });

        // var yGrooup = axis_g
        // 	.append('g')
        // 	.attr('class', 'axis y_axis')
        // 	.attr('transform', 'translate(' + (svg_width - padding.right) + ',' + padding.top + ')')
        // 	.attr('text-anchor', 'end')
        // 	.call(yAxis);

        // var xGrooup = axis_g
        // 	.append('g')
        // 	.attr('class', 'axis x_axis')
        // 	.attr('transform', 'translate(' + padding.left + ',' + (area_svg_height - padding.bottom) + ')')
        // 	.call(xAxis);

        // axis_g.selectAll('.axis path').attr('stroke', 'none').attr('shape-rendering', 'crispEdges');

        // axis_g
        // 	.selectAll('.y_axis line')
        // 	.attr('stroke', table_color[6])
        // 	.attr('stroke-opacity', '0.8')
        // 	.attr('stroke-width', '0.3')
        // 	.attr('stroke-dasharray', '3,3')
        // 	.attr('shape-rendering', 'crispEdges');

        // axis_g
        // 	.selectAll('.x_axis line')
        // 	// .attr("stroke","none")
        // 	.attr('stroke', table_color[6])
        // 	.attr('stroke-opacity', '1')
        // 	.attr('stroke-width', '1')
        // 	.attr('y2', '3')
        // 	.attr('shape-rendering', 'crispEdges');

        // axis_g
        // 	.append('line')
        // 	.attr('x1', padding.left)
        // 	.attr('x2', svg_width - padding.right)
        // 	.attr('y1', area_svg_height - padding.bottom)
        // 	.attr('y2', area_svg_height - padding.bottom)
        // 	.attr('stroke', table_color[6])
        // 	.attr('fill', table_color[6])
        // 	.attr('stroke-opacity', '1')
        // 	// .attr("stroke-width","1.5")
        // 	.attr('stroke-width', '1.2');

        // axis_g.selectAll('text').style('font-size', '10px');

        // $('.areapath_box').append(
        // 	"<div class='areapath_title'></div><div class='areapath_tl'></div><div class='areapath_tl_2'></div><div class='areapath_tips'></div><div class='line_path_tooltips'><div class='tooltips_top'></div><div class='tooltips_bottom'></div></div><div class='tooltips_tra'></div>"
        // );

        $('.areapath_title')
            .height('30px')
            .css('position', 'absolute')
            .text('国内累计病例')
            .css('font-size', '14px')
            .css('color', '#202020')
            .css('font-weight', 'bold')
            .css('top', 15 + 'px')
            // .css("top",padding.top - 15 )
            .css('left', padding.left + 'px');

        $('.areapath_tl_2')
            .css('position', 'absolute')
            .text('单位：例')
            .css('padding-left', '10px')
            .css('font-size', table_cities_font_size)
            .css('color', table_color[0])
            .css('font-weight', '300')
            // .css("top",(table_head_font_size - table_cities_font_size)/2 + 10 +"px")
            // .css("top",60+"px")
            .css('top', 35 + 'px')
            .css('left', padding.left - 10 + 'px');

        $('.areapath_tips').append(
            "<div class='linepath_tl linepath_tl_0'>确诊</div><div class='linepath_tl linepath_tl_1'>出院</div><div class='linepath_tl linepath_tl_2'>死亡</div><div class='linepath_tl linepath_tl_3'>现存确诊</div>"
        );

        $('.areapath_tips')
            .width('220px')
            .height('20px')
            .css('position', 'absolute')
            .css('top', 15 + 'px')
            // .css("top",padding.top - 15 )
            .css('right', padding.right - 35);

        d3
            .selectAll('.linepath_tl')
            .style('line-height', '20px')
            .style('font-size', '10px')
            .style('width', '40px')
            .style('margin', '0px 0px 0px 6px')
            .style('text-align', 'center')
            .style('background', function (d, i) {
                return table_color[i + 2];
            })
            .style('color', '#fff')
            .style('border', function (d, i) {
                return '1px solid ' + table_color[i + 2];
            })
            .style('border-radius', '10px')
            .style('display', 'inline-block');

        $(".linepath_tl_3").width('60px')

        d3.selectAll('.line_path_0').style('opacity', '0');
        d3.selectAll('.line_path_1').style('opacity', '1');
        d3.selectAll('.line_path_2').style('opacity', '0');
        d3.selectAll('.line_path_3').style('opacity', '1');


        d3
            .selectAll('.linepath_tl_1')
            .style('background', '#fff')
            .style('color', table_color[9])
            .style('border', '1px solid ' + table_color[9]);
        // .style("background", table_color[7]);

        d3
            .selectAll('.linepath_tl_2')
            .style('background', '#fff')
            .style('color', table_color[9])
            .style('border', '1px solid ' + table_color[9]);
        // .style("background", table_color[7]);

        d3
            .selectAll('.linepath_tl_3')
            .style('background', '#fff')
            .style('color', table_color[9])
            .style('border', '1px solid ' + table_color[9]);

        d3.selectAll('.line_circle_1').style('opacity', '0');

        d3.selectAll('.line_circle_2').style('opacity', '0');

        //添加一个透明的监视鼠标事件用的矩形
        d3
            .selectAll('.areapath_box')
            .append('svg')
            // .append("g")
            .attr('class', 'hover_svg')
            .style('position', 'absolute')
            .style('z-index', '222')
            .style('top', padding.top)
            .style('left', 0)
            .attr('width', svg_width - padding.right + 5)
            .attr('height', area_svg_height - padding.top - padding.bottom)
            .append('rect')
            .attr('class', 'overlay')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', svg_width - padding.right + 5)
            .attr('height', area_svg_height - padding.top - padding.bottom)
            .style('opacity', 0)
            .on('mouseover', function () {
                if (linepath_index_data.length > 0) {
                    $('.vLine')
                        // .css("opacity", "1")
                        .show();

                    $('.line_path_tooltips')
                        // .css("opacity","1")
                        .css('z-index', '1')
                        .show();

                    $('.tooltips_tra')
                        .css('z-index', '1')
                        // .css("opacity","1")
                        .show();
                } else {
                    $('.line_path_tooltips')
                        // .css("opacity","0")
                        .hide();
                    // .css("opacity","0");

                    $('.vLine')
                        // .css("opacity","0")
                        .hide();

                    $('.tooltips_tra')
                        // .css("opacity","0")
                        .hide();
                }
            })
            .on('touchstart', function () {
                if (linepath_index_data.length > 0) {
                    $('.vLine').css('opacity', '1').show();

                    $('.line_path_tooltips').css('opacity', '1').show();

                    $('.tooltips_tra').css('opacity', '1').show();
                } else {
                    $('.line_path_tooltips').css('opacity', '0').hide();
                    // .css("opacity","0");

                    $('.vLine').css('opacity', '0').hide();

                    $('.tooltips_tra').css('opacity', '0').hide();
                }
            })
            .on('mouseout', function () {
                $('.line_path_tooltips')
                    // .css("opacity","0")
                    .hide();
                // .css("opacity","0");

                $('.vLine')
                    // .css("opacity","0")
                    .hide();

                $('.tooltips_tra')
                    // .css("opacity","0")
                    .hide();
            })
            .on('mousemove', mousemove);

        // d3
        // 	.select('.areaPath_svg')
        // 	.select('.axis_g')
        // 	.append('line')
        // 	.attr('class', 'vLine')
        // 	.style('stroke', table_color[8])
        // 	.style('stroke-opacity', 1)
        // 	.style('stroke-dasharray', '3,3')
        // 	.style('display', 'none');

        $('.line_path_tooltips')
            .css('width', '120px')
            .css('position', 'relative')
            .css('position', 'absolute')
            .css('top', '0px')
            .css('left', '0px')
            .css('z-index', '-1')
            // .css("opacity",0)
            .css('border', '1px solid ' + table_color[8])
            .css('border-radius', '5px')
            .css('overflow', 'hidden')
            .hide();

        $('.tooltips_top')
            .css('line-height', '24px')
            .css('color', '#fff')
            .height('24px')
            .css('padding', '0px 10px')
            .css('font-size', '14px')
            .css('background', table_color[8]);

        $('.tooltips_bottom')
            .css('line-height', '24px')
            .css('font-size', '12px')
            .css('color', table_color[9])
            .css('padding', '0px 10px')
            .css('background', '#fff');

        $('.tooltips_tra')
            .css('width', '120px')
            .height('10px')
            // .css("opacity",0)
            .css('background', 'url(./assets/linepath_tips.png)')
            .css('background-position', 'center')
            // .css("background-color","#fff")
            .css('background-size', 'auto 100%')
            .css('background-repeat', 'no-repeat')
            .css('position', 'absolute')
            .css('z-index', '-1')
            .css('top', $('.line_path_tooltips').height() + 'px')
            .css('left', '0px')
            .hide();
    }

    function draw_history_add_linePath(new_history_data) {
        // console.log(history_data)
        padding = {
            left: 20,
            top: 50,
            right: 40,
            bottom: 30
        };
        // $('#map').append("<div class='areapath_box_add'></div>");

        // $('.areapath_box_add')
        // 	.css('position', 'relative')
        // 	.css('top', function() {
        // 		if (UA.isMobile) {
        // 			return '-140px';
        // 		} else {
        // 			return '-200px';
        // 		}
        // 	})
        // 	.css('background', function() {
        // 		if (UA.isMobile) {
        // 			return '#fff';
        // 		} else {
        // 			return '#d7e9f9';
        // 		}
        // 	})
        // 	.width(svg_width + 'px')
        // 	.css('margin', '30px auto');

        // var areaPath_svg_add = d3
        // 	.select('.areapath_box_add')
        // 	.append('svg')
        // 	.attr('class', 'areaPath_svg_add')
        // 	.attr('width', svg_width + 'px')
        // 	.attr('height', area_svg_height + 'px');

        // var axis_g_add = areaPath_svg_add.append('g').attr('class', 'axis_g');

        console.log(new_history_data);

        for (var i = 0; i < totalDate.length; i++) {
            var temp_0 = [];
            var temp_1 = [];
            var temp_2 = [];
            var temp_3 = [];
            new_history_data.forEach(function (d, a) {
                // if (d.stats_type == 'newcase') {
                // temp_0.push(Number(d[ani_time[i]]));
                // console.log(d.name)
                if (d.name == '中国') {
                    temp_0.push(Number(d[ani_time[i]]));
                }
                if (d.name == '香港' || d.name == '澳门' || d.name == '台湾') {
                    temp_1.push(Number(d[ani_time[i]]));
                }
                if (d.name == '中国' || d.name == '境外输入' || d.name == '香港' || d.name == '澳门' || d.name == '台湾') {
                    // console.log(d.name,ani_time[i])
                    if (d.name == "中国") {
                        temp_2.push(Number(d[ani_time[i]]));
                    } else {
                        temp_2.push(-Number(d[ani_time[i]]));
                    }

                }
                if (d.name == '境外输入') {
                    temp_3.push(Number(d[ani_time[i]]));
                }
                // }
                // temp_0.push(Number(d[totalDate[i] + '_newcase']));
                // if (d.name == '湖北') {
                // 	temp_1.push(Number(d[totalDate[i] + '_newcase']));
                // }
                // if (d.name != '湖北') {
                // 	temp_2.push(Number(d[totalDate[i] + '_newcase']));
                // }
            });
            // console.log(temp_0)
            var sum_temp_0 = d3.sum(temp_0);
            var sum_temp_1 = d3.sum(temp_1);
            var sum_temp_2 = d3.sum(temp_2);
            var sum_temp_3 = d3.sum(temp_3);
            // console.log(sum_temp_0,sum_temp_1,sum_temp_2)
            // if (temp_0 != 0) {
            // new_line_data_0.push([totalDate[i],sum_temp_0]);
            new_line_data_add_0.push([i, sum_temp_0]);
            // }
            // if (temp_1 != 0) {
            // new_line_data_add_1.push([totalDate[i],sum_temp_1]);
            new_line_data_add_1.push([i, sum_temp_1]);
            // }
            // if (temp_2 != 0) {
            // new_line_data_add_2.push([totalDate[i],sum_temp_2]);
            new_line_data_add_2.push([i, sum_temp_2]);
            // }
            new_line_data_add_3.push([i, sum_temp_3]);

            // new_line_data_1.push([totalDate[i],d3.sum(temp_1)]);
            // new_line_data_2.push([totalDate[i],d3.sum(temp_2)]);
        }

        // console.log(new_line_data_add_0);
        // console.log(new_line_data_add_1);
        // console.log(new_line_data_add_2);


        line_data_add_max[0] = d3.max(new_line_data_add_0, function (d) {
            return d[1];
        });

        line_data_add_max[1] = d3.max(new_line_data_add_1, function (d) {
            return d[1];
        });

        line_data_add_max[2] = d3.max(new_line_data_add_2, function (d) {
            return d[1];
        });

        line_data_add_max[3] = d3.max(new_line_data_add_3, function (d) {
            return d[1];
        });


        all_line_add_data.push(new_line_data_add_0, new_line_data_add_1, new_line_data_add_2, new_line_data_add_3);
        // console.log(line_data_add_max)

        yScale_add
            // .domain([0,d3.max(linepath_index_max_add_data)])
            .domain([0, d3.max([line_data_add_max[2], line_data_add_max[3]])])
            .nice()
            .range([area_svg_height - padding.top - padding.bottom, 0]);
        // console.log(line_data_0_max)


        // console.log(all_line_add_data);

        d3.selectAll('.areaPath_svg_add').append('g').attr('class', 'linepath_g_add');

        // d3.selectAll(".areaPath_svg_add")
        //     .append("g")
        //     .attr("class", "circle_g_add")

        for (var i = 0; i < all_line_add_data.length; i++) {
            d3
                .selectAll('.linepath_g_add')
                .append('path')
                .attr('class', 'line_path_add line_path_add_' + i)
                .attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
                .attr('d', function (d) {
                    return linePath_add(all_line_add_data[i]);
                })
                .attr('fill', 'none')
                .attr('stroke', function () {
                    if (i <= 1) {
                        return table_color[2 + i];
                    } else if (i == 3) {
                        return table_color[4]
                    } else {
                        return '#FD8D3D';
                    }
                })
                .attr('stroke-width', '2px')
                .attr('stroke-linecap', 'round');
        }

        yAxis_add = d3.axisRight(yScale_add).ticks(6).tickSize(-(svg_width - padding.left - padding.right));

        var xAxis = d3
            .axisBottom(xScale)
            .ticks(totalDate.length) // .ticks(Number(Math.ceil(totalDate.length / 10)))
            .tickFormat(function (d, a) {
                // console.log(a)
                if (a % Number(Math.ceil(totalDate.length / 10)) == 0) {
                    // 	// if (a == 0) {}

                    return Number(totalDate[a].split('_')[0]) + '/' + Number(Number(totalDate[a].split('_')[1]));
                    // 	// return Number(totalDate[a].split("_")[0]) + "/" + Number(Number(totalDate[a].split("_")[1])+a)
                } else {
                    return '';
                }
            });

        // var yGrooup = axis_g_add
        // 	.append('g')
        // 	.attr('class', 'axis_add y_axis_add')
        // 	.attr('transform', 'translate(' + (svg_width - padding.right) + ',' + padding.top + ')')
        // 	.attr('text-anchor', 'end')
        // 	.call(yAxis_add);

        // var xGrooup = axis_g_add
        // 	.append('g')
        // 	.attr('class', 'axis_add x_axis_add')
        // 	.attr('transform', 'translate(' + padding.left + ',' + (area_svg_height - padding.bottom) + ')')
        // 	.call(xAxis);

        // axis_g_add.selectAll('.axis_add path').attr('stroke', 'none').attr('shape-rendering', 'crispEdges');

        // axis_g_add
        // 	.selectAll('.y_axis_add line')
        // 	.attr('stroke', table_color[6])
        // 	.attr('stroke-opacity', '0.8')
        // 	.attr('stroke-width', '0.3')
        // 	.attr('stroke-dasharray', '3,3')
        // 	.attr('shape-rendering', 'crispEdges');

        // axis_g_add
        // 	.selectAll('.x_axis_add line')
        // 	// .attr("stroke","none")
        // 	.attr('stroke', table_color[6])
        // 	.attr('stroke-opacity', '1')
        // 	.attr('stroke-width', '1')
        // 	.attr('y2', '3')
        // 	.attr('shape-rendering', 'crispEdges');

        // axis_g_add
        // 	.append('line')
        // 	.attr('x1', padding.left)
        // 	.attr('x2', svg_width - padding.right)
        // 	.attr('y1', area_svg_height - padding.bottom)
        // 	.attr('y2', area_svg_height - padding.bottom)
        // 	.attr('stroke', table_color[6])
        // 	.attr('fill', table_color[6])
        // 	.attr('stroke-opacity', '1')
        // 	// .attr("stroke-width","1.5")
        // 	.attr('stroke-width', '1.2');

        // axis_g_add.selectAll('text').style('font-size', '10px');

        // $('.areapath_box_add').append(
        // 	"<div class='areapath_title'></div><div class='areapath_tl'></div><div class='areapath_tl_2'></div><div class='areapath_tl_3'></div><div class='areapath_tips'></div><div class='line_path_tooltips_add'><div class='tooltips_top_add'></div><div class='tooltips_bottom_add'></div></div><div class='tooltips_tra_add'></div>"
        // );

        // $('.areapath_box_add')
        // 	.find('.areapath_title')
        // 	.height('30px')
        // 	.css('position', 'absolute')
        // 	.text('新增确诊病例')
        // 	.css('font-size', '14px')
        // 	.css('color', '#202020')
        // 	.css('font-weight', 'bold')
        // 	.css('top', 15 + 'px')
        // 	// .css("top",padding.top - 15 )
        // 	.css('left', padding.left + 'px');

        // $('.areapath_box_add')
        // 	.find('.areapath_tl_2')
        // 	.css('position', 'absolute')
        // 	.text('单位：例')
        // 	.css('padding-left', '10px')
        // 	.css('font-size', table_cities_font_size)
        // 	.css('color', table_color[0])
        // 	.css('font-weight', '300')
        // 	// .css("top",(table_head_font_size - table_cities_font_size)/2 + 10 +"px")
        // 	// .css("top",60+"px")
        // 	.css('top', 35 + 'px')
        // 	.css('left', padding.left - 10 + 'px');

        // $('.areapath_box_add')
        // 	.find('.areapath_tl_3')
        // 	.css('position', 'absolute')
        // 	.text('图表按通报日期显示')
        // 	.css('padding-left', '10px')
        // 	.css('font-size', table_cities_font_size)
        // 	.css('color', table_color[0])
        // 	.css('font-weight', '300')
        // 	// .css("top",(table_head_font_size - table_cities_font_size)/2 + 10 +"px")
        // 	// .css("top",60+"px")
        // 	.css('top', 50 + 'px')
        // 	.css('left', padding.left - 10 + 'px');

        // $('.areapath_box_add')
        // 	.find('.areapath_tips')
        // 	.append(
        // 		"<div class='linepath_tl_add linepath_tl_0_add'>全部</div><div class='linepath_tl_add linepath_tl_1_add'>港澳台</div><div class='linepath_tl_add linepath_tl_2_add'>本地病例</div><div class='linepath_tl_add linepath_tl_3_add'>境外输入</div>"
        // 	);

        // $('.areapath_box_add')
        // 	.find('.areapath_tips')
        // 	.width('230px')
        // 	.height('20px')
        // 	.css('position', 'absolute')
        // 	.css('top', 15 + 'px')
        // 	// .css("top",padding.top - 15 )
        // 	.css('right', padding.right - 30);

        // d3
        // 	.select('.areapath_box_add')
        // 	.selectAll('.linepath_tl_add')
        // 	.style('line-height', '20px')
        // 	.style('font-size', '10px')
        // 	.style('width', '43px')
        // 	.style('margin', '0px 0px 0px 3px')
        // 	.style('text-align', 'center')
        // 	.style('background', function(d, i) {
        // 		if (i <= 1) {
        // 			return table_color[i + 2];
        // 		}else if(i == 3){
        // 			return table_color[4]
        // 		} else {
        // 			return '#FD8D3D';
        // 		}
        // 	})
        // 	.style('border', function(d, i) {
        // 		if (i <= 1) {
        // 			return '1px solid ' + table_color[i + 2];
        // 		}else if(i == 3){
        // 			return '1px solid ' + table_color[4];
        // 		} else {
        // 			return '1px solid ' + '#FD8D3D';
        // 		}
        // 	})
        // 	.style('color', '#fff')
        // 	.style('border-radius', '10px')
        // 	.style('display', 'inline-block');

        $('.linepath_tl_2_add,.linepath_tl_3_add').width("60px")

        // .style("background","#fff")
        // .style("color",table_color[9])
        // .style("border","1px solid "+table_color[9])

        // d3.select('.areapath_box_add').selectAll('.line_path_add_0').style('opacity', '0');
        //
        // d3.select('.areapath_box_add').selectAll('.line_path_add_1').style('opacity', '0');
        //
        // d3.select('.areapath_box_add').selectAll('.line_path_add_2').style('opacity', '1');
        //
        // d3.select('.areapath_box_add').selectAll('.line_path_add_3').style('opacity', '1');
        //
        // d3
        // 	.select('.areapath_box_add')
        // 	.selectAll('.linepath_tl_0_add')
        // 	// .style("background", table_color[7]);
        // 	.style('background', '#fff')
        // 	.style('color', table_color[9])
        // 	.style('border', '1px solid ' + table_color[9]);
        //
        // d3
        // 	.select('.areapath_box_add')
        // 	.selectAll('.linepath_tl_1_add')
        // 	// .style("background", table_color[7]);
        // 	.style('background', '#fff')
        // 	.style('color', table_color[9])
        // 	.style('border', '1px solid ' + table_color[9]);
        //
        // d3.select('.areapath_box_add').selectAll('.linepath_tl_1_add');
        // // .style("background", table_color[7]);
        //
        // d3.select('.areapath_box_add').selectAll('.linepath_tl_2_add');
        // // .style("background", table_color[7]);

        // d3.select('.areapath_box_add').selectAll('.line_circle_add_0').style('opacity', '0');

        // d3.select('.areapath_box_add').selectAll('.line_circle_add_1').style('opacity', '1');

        // d3.select('.areapath_box_add').selectAll('.line_circle_add_2').style('opacity', '1');
        // d3.select('.areapath_box_add').selectAll('.line_circle_add_3').style('opacity', '0');

        //添加一个透明的监视鼠标事件用的矩形
        // d3
        // 	.selectAll('.areapath_box_add')
        // 	.append('svg')
        // 	// .append("g")
        // 	.attr('class', 'hover_svg_add')
        // 	.style('position', 'absolute')
        // 	.style('z-index', '222')
        // 	.style('top', padding.top)
        // 	.style('left', 0)
        // 	.attr('width', svg_width - padding.right + 5)
        // 	.attr('height', area_svg_height - padding.top - padding.bottom)
        // 	.append('rect')
        // 	.attr('class', 'overlay_add')
        // 	.attr('x', 0)
        // 	.attr('y', 0)
        // 	.attr('width', svg_width - padding.right + 5)
        // 	.attr('height', area_svg_height - padding.top - padding.bottom)
        // 	.style('opacity', 0)
        // 	.on('mouseover', function() {
        // 		if (linepath_index_add_data.length > 0) {
        // 			$('.vLine_add')
        // 				// .css("opacity", "1")
        // 				.show();
        //
        // 			$('.line_path_tooltips_add')
        // 				// .css("opacity","1")
        // 				.css('z-index', '1')
        // 				.show();
        //
        // 			$('.tooltips_tra_add')
        // 				.css('z-index', '1')
        // 				// .css("opacity","1")
        // 				.show();
        // 		} else {
        // 			$('.line_path_tooltips_add')
        // 				// .css("opacity","0")
        // 				.hide();
        // 			// .css("opacity","0");
        //
        // 			$('.vLine_add')
        // 				// .css("opacity","0")
        // 				.hide();
        //
        // 			$('.tooltips_tra_add')
        // 				// .css("opacity","0")
        // 				.hide();
        // 		}
        // 	})
        // 	.on('touchstart', function() {
        // 		if (linepath_index_add_data.length > 0) {
        // 			$('.vLine_add').css('opacity', '1').show();
        //
        // 			$('.line_path_tooltips_add').css('opacity', '1').show();
        //
        // 			$('.tooltips_tra_add').css('opacity', '1').show();
        // 		} else {
        // 			$('.line_path_tooltips_add').css('opacity', '0').hide();
        // 			// .css("opacity","0");
        //
        // 			$('.vLine_add').css('opacity', '0').hide();
        //
        // 			$('.tooltips_tra_add').css('opacity', '0').hide();
        // 		}
        // 	})
        // 	.on('mouseout', function() {
        // 		$('.line_path_tooltips_add')
        // 			// .css("opacity","0")
        // 			.hide();
        // 		// .css("opacity","0");
        //
        // 		$('.vLine_add')
        // 			// .css("opacity","0")
        // 			.hide();
        //
        // 		$('.tooltips_tra_add')
        // 			// .css("opacity","0")
        // 			.hide();
        // 	})
        // 	.on('mousemove', mousemove_add);

        d3
            .select('.areaPath_svg_add')
            .select('.axis_g')
            .append('line')
            .attr('class', 'vLine_add')
            .style('stroke', table_color[8])
            .style('stroke-opacity', 1)
            .style('stroke-dasharray', '3,3')
            .style('display', 'none');

        $('.line_path_tooltips_add')
            .css('width', '120px')
            .css('position', 'relative')
            .css('position', 'absolute')
            .css('top', '0px')
            .css('left', '0px')
            .css('z-index', '-1')
            // .css("opacity",0)
            .css('border', '1px solid ' + table_color[8])
            .css('border-radius', '5px')
            .css('overflow', 'hidden')
            .hide();

        $('.tooltips_top_add')
            .css('line-height', '24px')
            .css('color', '#fff')
            .height('24px')
            .css('padding', '0px 10px')
            .css('font-size', '14px')
            .css('background', table_color[8]);

        $('.tooltips_bottom_add')
            .css('line-height', '24px')
            .css('font-size', '12px')
            .css('color', table_color[9])
            .css('padding', '0px 10px')
            .css('background', '#fff');

        $('.tooltips_tra_add')
            .css('width', '120px')
            .height('10px')
            // .css("opacity",0)
            .css('background', 'url(./assets/linepath_tips.png)')
            .css('background-position', 'center')
            // .css("background-color","#fff")
            .css('background-size', 'auto 100%')
            .css('background-repeat', 'no-repeat')
            .css('position', 'absolute')
            .css('z-index', '-1')
            .css('top', $('.line_path_tooltips_add').height() + 'px')
            .css('left', '0px')
            .hide();
    }

    function draw_little_line_path_2(history_data, a) {

        var province_index = a;
        // console.log($(".table_container_0").find(".table_box_"+province_index).attr("data"));
        // if( $(".table_container_0").find(".table_box_"+province_index).attr("data") != "has_cities_box"){

        // console.log("执行");
        // $(".table_box_"+province_index).attr("data","has_linePath_box");

        var current_province_history_data = history_data.filter(function (d) {
            return d.name == china_table_data_0[province_index].province
        });

        //组装数据
        var new_province_line_data_0 = [];
        var new_province_line_data_1 = [];
        var new_province_line_data_2 = [];
        var flag_0 = -1;
        var flag_1 = -1;
        var flag_2 = -1;

        for (var j = 0; j < totalDate.length; j++) {
            var history_data_nest_temp = current_province_history_data;
            if (history_data_nest_temp[1][ani_time[j]] != '0' && history_data_nest_temp[1][ani_time[j]] != 'null') {
                flag_0++;
            }
            if (flag_0 != -1) {
                if (history_data_nest_temp[1][ani_time[j]] == 'null') {
                } else {
                    new_province_line_data_0.push([j, Number(history_data_nest_temp[1][ani_time[j]])]);
                }
            }
            if (history_data_nest_temp[2][ani_time[j]] != '0' && history_data_nest_temp[2][ani_time[j]] != 'null') {
                flag_1++;
            }
            if (flag_1 != -1) {
                if (history_data_nest_temp[2][ani_time[j]] == 'null') {
                } else {
                    new_province_line_data_1.push([j, Number(history_data_nest_temp[2][ani_time[j]])]);
                }
            }
            if (history_data_nest_temp[3][ani_time[j]] != '0' && history_data_nest_temp[3][ani_time[j]] != 'null') {
                flag_2++;
            }
            if (flag_2 != -1) {
                if (history_data_nest_temp[3][ani_time[j]] == 'null') {
                } else {
                    new_province_line_data_2.push([j, Number(history_data_nest_temp[3][ani_time[j]])]);
                }
            }
        }

        // console.log(new_province_line_data_0)

        var province_line_data_max = [];

        province_line_data_max[0] = d3.max(new_province_line_data_0, function (d) {
            return d[1];
        });

        province_line_data_max[1] = d3.max(new_province_line_data_1, function (d) {
            return d[1];
        });

        province_line_data_max[2] = d3.max(new_province_line_data_2, function (d) {
            return d[1];
        });

        padding = {
            left: 20,
            top: 50,
            right: 40,
            bottom: 30
        };

        //每省一个小图
        var province_linepath_height = area_svg_height * 0.8;


        $('.table_head_container_0')
            .find('.table_cites_box_' + province_index)
            // .attr("data","has_linePath_box")
            .append("<div class='province_linepath_box province_linepath_box_" + province_index + "'></div>");

        // svg_width = svg_width*2;
        // province_linepath_height = province_linepath_height*2;

        d3
            .selectAll('.province_linepath_box_' + province_index)
            .style('position', 'relative')
            .style('top', '0px')
            .style('border-bottom', '1px dotted rgb(179, 179, 179)')
            // .append('svg')
            .append('canvas')
            // .attr('class', 'province_linepath_svg province_linepath_svg_' + a)
            .attr('class', 'province_linepath_canvas province_linepath_canvas_' + a)
            .attr('id', 'province_linepath_canvas_' + a)
            .attr('width', svg_width * 2 + 'px')
            .attr('height', province_linepath_height * 2 + 'px')
            .style('width', '100%');

        // var little_line_canvas = document.querySelector('#province_linepath_canvas_' + province_index);

        // var little_line_context = little_line_canvas.getContext('2d');
        // little_line_context.scale(2, 2);
        // little_line_context.translate(0.5, 0.5);

        // var axis_g = d3
        // 	.selectAll('.province_linepath_svg_' + province_index)
        // 	.append('g')
        // 	.attr('class', 'province_linepath_axis_g province_linepath_axis_g_' + province_index);


        // var province_yScale = d3
        // 	.scaleLinear()
        // 	.domain([ 0, d3.max(province_line_data_max) ])
        // 	.nice()
        // 	.range([ province_linepath_height - padding.top - padding.bottom, 0 ]);

        // var province_linePath = d3
        // 	.line()
        // 	.x(function(d) {
        // 		return xScale(d[0]) + padding.left;
        // 	})
        // 	.y(function(d) {
        // 		return province_yScale(d[1]) + padding.top;
        // 	})
        // 	.context(little_line_context);

        // // console.log(line_data_0_max)
        // var all_province_line_data = [];
        // all_province_line_data.push(new_province_line_data_0, new_province_line_data_1, new_province_line_data_2);

        // xAxis();
        // yAxis();
        //
        // for (var j = 0; j < all_line_data.length-1; j++) {
        //
        // 	little_line_context.beginPath();
        // 	province_linePath(all_province_line_data[j]);
        // 	little_line_context.lineWidth = 2;
        // 	little_line_context.setLineDash([ 1, 0 ]);
        // 	little_line_context.strokeStyle = table_color[2 + j];
        // 	little_line_context.stroke();
        //
        // 	// little_line_context.EndPath();
        // }
        //
        // function xAxis() {
        // 	var tickCount = totalDate.length,
        // 		tickSize = 3,
        // 		ticks = xScale.ticks(tickCount),
        // 		tickFormat = xScale.tickFormat();
        //
        // 	little_line_context.beginPath();
        // 	ticks.forEach(function(d) {
        // 		little_line_context.moveTo(xScale(d) + padding.left, province_linepath_height - padding.bottom);
        // 		little_line_context.lineTo(
        // 			xScale(d) + padding.left,
        // 			province_linepath_height - padding.bottom + tickSize
        // 		);
        // 	});
        // 	little_line_context.strokeStyle = table_color[6];
        // 	little_line_context.setLineDash([ 1, 0 ]);
        // 	little_line_context.stroke();
        // 	// little_line_context.endPath();
        //
        // 	little_line_context.textAlign = 'center';
        // 	little_line_context.textBaseline = 'top';
        // 	ticks.forEach(function(d, a) {
        // 		// console.log(a)
        // 		var xScale_text = '';
        // 		if (a % Number(Math.ceil(totalDate.length / 10)) == 0) {
        // 			xScale_text = Number(totalDate[a].split('_')[0]) + '/' + Number(totalDate[a].split('_')[1]);
        // 		}
        // 		little_line_context.fillText(
        // 			xScale_text,
        // 			xScale(d) + padding.left,
        // 			province_linepath_height - padding.bottom + tickSize + 3
        // 		);
        // 	});
        // }
        //
        // function yAxis() {
        // 	var tickCount = 6,
        // 		tickSize = 3,
        // 		tickPadding = 3,
        // 		ticks = province_yScale.ticks(tickCount),
        // 		tickFormat = province_yScale.tickFormat(tickCount);
        //
        // 	little_line_context.beginPath();
        // 	ticks.forEach(function(d) {
        // 		little_line_context.moveTo(padding.left, province_yScale(d) + padding.top);
        // 		little_line_context.lineTo(svg_width - padding.right, province_yScale(d) + padding.top);
        // 	});
        //
        // 	little_line_context.strokeStyle = 'rgba(102,102,102,0.8)';
        //
        // 	little_line_context.lineWidth = 0.3;
        // 	little_line_context.setLineDash([ 3, 3 ]);
        // 	little_line_context.stroke();
        // 	// little_line_context.EndPath();
        //
        // 	little_line_context.beginPath();
        // 	little_line_context.moveTo(padding.left, province_linepath_height - padding.bottom);
        // 	little_line_context.lineTo(svg_width - padding.right, province_linepath_height - padding.bottom);
        //
        // 	// little_line_context.strokeStyle = table_color[6];
        // 	little_line_context.lineWidth = 1.2;
        // 	little_line_context.setLineDash([ 1, 0 ]);
        // 	little_line_context.stroke();
        // 	// little_line_context.EndPath();
        //
        // 	little_line_context.textAlign = 'left';
        // 	little_line_context.textBaseline = 'middle';
        // 	ticks.forEach(function(d) {
        // 		little_line_context.fillText(
        // 			tickFormat(d),
        // 			svg_width - padding.right + tickPadding,
        // 			province_yScale(d) + padding.top
        // 		);
        // 	});
        // }


        $('.province_linepath_box_' + province_index).append(
            "<div class='province_linepath_title province_linepath_title_" +
            province_index +
            "'></div><div class='province_linepath_tl province_linepath_tl_" +
            province_index +
            "'></div><div class='province_linepath_tl_little province_linepath_tl_little_" +
            province_index +
            "'></div>"
        );

        $('.province_linepath_title_' + province_index)
            .height('30px')
            .css('position', 'absolute')
            .text(china_table_data_0[province_index].province + '疫情趋势')
            .css('font-size', table_head_font_size)
            // .css('color', table_color[2])
            .css('color', '#202020')
            .css('font-weight', 'bold')
            .css('top', 10 + 'px')
            // .css("top",padding.top - 15 )
            .css('left', padding.left + 'px');

        $('.province_linepath_tl_' + province_index)
            .css('position', 'absolute')
            .text('单位：例')
            // .css('padding-left', '10px')
            .css('font-size', table_cities_font_size)
            .css('color', table_color[0])
            .css('font-weight', '300')
            // .css("top",60+"px")
            .css('top', 30 + 'px')
            .css('left', padding.left + 'px');

        $('.province_linepath_tl_little_' + province_index)
            .height('30px')
            .css('position', 'absolute')
            .width('150px')
            .css('background', "url('./assets/little_tl.png')")
            .css('background-size', 'contain')
            .css('background-position', 'top center')
            .css('background-repeat', 'no-repeat')
            .css('top', 32 + 'px')
            // .css("top",padding.top - 15 )
            .css('right', padding.right + 'px');

        // }
    }


    function draw_oversea_input(oversea_input_data) {
        //数据运算
        var oversea_input_data_sankey_node = [];

        //国家前十名
        var oversea_input_node_top10_0 = d3
            .nest()
            .key(function (d) {
                return d.country
            })
            .entries(china_table_data_2)

        //计算总数
        oversea_input_node_top10_0.forEach(function (d) {
            d.casetotal = d3.sum(d.values, function (a) {
                return a.casetotal
            })
        })

        oversea_input_node_top10_0
            .sort(function (b, a) {
                return a.casetotal - b.casetotal
            });

        //国家
        var oversea_input_node_top10_0_index = 8;
        for (var i = 0; i < 10; i++) {
            //天津不详增加
            if (i < oversea_input_node_top10_0_index) {
                if (oversea_input_node_top10_0[i].key == "不详") {
                    // oversea_input_data_sankey_node.push("其他国家");
                    oversea_input_node_top10_0_index = oversea_input_node_top10_0_index + 1;
                } else {
                    oversea_input_data_sankey_node.push(oversea_input_node_top10_0[i].key);
                }
            } else if (i == oversea_input_node_top10_0_index) {
                oversea_input_data_sankey_node.push("其他国家");
            }
        }


        //省份前十名
        var oversea_input_node_top10_1 = d3
            .nest()
            .key(function (d) {
                return d.province
            })
            .entries(china_table_data_2)

        //计算总数
        oversea_input_node_top10_1.forEach(function (d) {
            d.casetotal = d3.sum(d.values, function (a) {
                return a.casetotal
            })
        })

        oversea_input_node_top10_1
            .sort(function (b, a) {
                return a.casetotal - b.casetotal
            });

        //省份
        for (var i = 0; i < 10; i++) {
            if (i < 8) {
                oversea_input_data_sankey_node.push(oversea_input_node_top10_1[i].key);
            } else if (i == 8) {
                oversea_input_data_sankey_node.push("其他省份")
            }
        }

        var new_oversea_input_data_sankey_node = [];
        for (var i = 0; i < oversea_input_data_sankey_node.length; i++) {
            new_oversea_input_data_sankey_node.push({
                "name": oversea_input_data_sankey_node[i],
                "node": oversea_input_data_sankey_node.indexOf(oversea_input_data_sankey_node[i])
            });
        }

        var new_oversea_input_data_sankey_link = [];

        for (var i = 0; i < oversea_input_data.length; i++) {
            var source_index = oversea_input_data_sankey_node.indexOf(oversea_input_data[i].country)
            var target_index = oversea_input_data_sankey_node.indexOf(oversea_input_data[i].province)
            if (source_index == -1) {
                source_index = oversea_input_data_sankey_node.indexOf("其他国家");
            }

            if (target_index == -1) {
                target_index = oversea_input_data_sankey_node.indexOf("其他省份");
            }
            new_oversea_input_data_sankey_link.push({
                "source": source_index,
                "target": target_index,
                "value": Number(oversea_input_data[i].casetotal)
            })
        }

        var graph = {"nodes": new_oversea_input_data_sankey_node, "links": new_oversea_input_data_sankey_link};


        if (UA.isMobile) {
            padding = {
                left: 10,
                top: 100,
                right: 10,
                bottom: 70
            };
        } else {
            padding = {
                left: 10,
                top: 80,
                right: 10,
                bottom: 70
            };
        }
        // $('#map').append("<div class='oversea_input_box'></div>");

        // $('.oversea_input_box')
        // 	.css('position', 'relative')
        // 	.css('top', function() {
        // 		if (UA.isMobile) {
        // 			return '-180px';
        // 		} else {
        // 			return '-200px';
        // 		}
        // 	})
        // 	// .css('background', function() {
        // 	// 	if (UA.isMobile) {
        // 	// 		return '#fff';
        // 	// 	} else {
        // 	// 		return '#d7e9f9';
        // 	// 	}
        // 	// })
        // 	.width(svg_width + 'px')
        // 	.css('margin', '0px auto');

        // var oversea_input_svg = d3
        // 	.select('.oversea_input_box')
        // 	.append('svg')
        // 	.attr('class', 'oversea_input_svg')
        // 	.attr('width', svg_width + 'px')
        // 	.attr('height', area_svg_height*1.4 + 'px')
        // 	.append('g')
        // 	.attr("transform","translate(" + padding.left + "," + padding.top + ")");

        var sankey = d3.sankey()
            .nodeWidth(14)//节点宽度
            .nodePadding(2) // 矩形垂直方向的间隔
            .size([svg_width - padding.left - padding.right, area_svg_height * 1.4 - padding.top - padding.bottom]);

        var path = sankey.link();

        // console.log(graph);

        sankey
            .nodes(graph.nodes)
            .links(graph.links)
            .layout(32);

        // var units = "Widgets";
        // format variables
        // var formatNumber = d3.format(",.0f");    // zero decimal places
        // var format = function(d) { return formatNumber(d) + " " + units; };

        // add in the links
        // var oversea_input_link = oversea_input_svg.append("g").selectAll(".link")
        //   	.data(graph.links)
        // 	.enter().append("path")
        //   	.attr("class", function(d,i){
        //   	return "oversea_input_link oversea_input_link_source_"+d.source.node+ " oversea_input_link_target_"+d.target.node
        //   	})
        //   	.attr("d", path)
        //       	// .style("stroke", table_color[2])
        //     .style("stroke", function(d) {
        //       	if(d.target.node == 9){
        //       		//国内第一
        //       		return table_color[11]
        //       	}else{
        //       		return table_color[2]
        //       	}
        //     })
        //     .style("opacity", function(d){
        //       	if(d.target.node == 9){
        // 			return "0.7"
        //       	}else{
        // 			return "0.1"
        //       	}
        //     })
        //     .style("fill", "none")
        //     .style("stroke-width", function(d) { return Math.max(1, d.dy); })
        //   	.sort(function(a, b) { return b.dy - a.dy; });


        // var oversea_input_node = oversea_input_svg.append("g").selectAll(".node")
        // 	.data(graph.nodes)
        // 	.enter().append("g")
        //   // .attr("class", "node")
        // 	.attr("class",function(d,i){
        // 		return "oversea_input_node oversea_input_node_"+i
        // 	})
        // 	.attr("transform", function(d) {
        // 		return "translate(" + d.x + "," + d.y + ")"; })

        // add the rectangles for the nodes
        // oversea_input_node.append("rect")
        // 	.attr("width", function(d) { return d.dy; })
        // 	.attr("height", sankey.nodeWidth())
        // 	// .style("fill", table_color[2])
        // 	// .style("stroke", table_color[2])
        // 	.attr("class",function(d,i){
        // 		return "oversea_input_node_rect oversea_input_node_rect_"+i
        // 	})
        // 	.style("stroke", function(d,i) {
        //   		if(i== 9){
        //       		//国内第一
        //       		return table_color[11]
        //       	}else{
        //       		return table_color[2]
        //       	}
        //   	})
        //     .style("fill", function(d,i) {
        //       	if(i== 9){
        //       		//国内第一
        //       		return table_color[11]
        //       	}else{
        //       		return table_color[2]
        //       	}
        //      })
        //     .style("opacity", function(d,i) {
        //       	if(i== 9){
        //       		//国内第一
        //       		return "1"
        //       	}else{
        //       		return "0.9"
        //       	}
        //     })
        // .style("opacity", "0.5")

        // var oversea_input_node_text = oversea_input_node.append("text")
        // 	.attr("class","node_text")
        //     .attr("text-anchor", "middle")
        //     .attr("x", function (d) { return d.dy / 2 })
        //     // .attr("dy","2em")
        //     .attr("y", function(d,i){
        //     	if(d.dy>12){
        //     		if(i <= 8){
        //         		return (7-d.name.length*12)+"px"
        //         	}else{
        //         		return "27px"
        //         	}
        //     	}else{
        //     		if(i <= 8){
        //         		return (3-d.name.length*8)+"px"
        //         	}else{
        //         		return "24px"
        //         	}
        //     	}
        //     })
        //     .attr("font-size",function(d){
        //     	if(d.dy<12){
        //     		return "8"
        //     	}else{
        //     		return "12"
        //     	}
        //     });

        // var oversea_input_node_value = oversea_input_node.append("text")
        // 	.attr("class","node_value")
        //     .attr("text-anchor", "middle")
        //     .attr("x", function (d) { return d.dy / 2 })
        //     .attr("font-size",function(d){
        //     	if(d.dy<12){return "10"}else{return "12"}
        //     })
        //     .attr("fill","#fff")
        //     .attr("y",function(d){ if(d.dy<12){return "1em" }else{ return "0.9em"}})
        //     .text(function(d){return d.value})
        //
        // oversea_input_node_text.append("tspan")
        // 	.attr("dx",function(d){
        // 		if(d.dy<12){
        // 			return "0 -8 -8 -8 -8 -8 -8"
        // 		}else{
        // 			return "0 -12 -12 -12 -12 -12 -12"
        // 		}
        // 	})
        // 	.attr("dy",function(d){
        // 		if(d.dy<12){
        // 			return "0 8 8 8 8 8 8"
        // 		}else{
        // 			return "0 12 12 12 12 12 12"
        // 		}
        // 	})
        //     .text(function(d){return d.name})

        // $('.oversea_input_box').append(
        // 	"<div class='oversea_input_title'></div><div class='oversea_input_tl'></div><div class='oversea_input_hand'></div>"
        // );

        // $('.oversea_input_title')
        // 	.height('30px')
        // 	.css('position', 'absolute')
        // 	.text('境外输入情况')
        // 	.css('font-size', '14px')
        // 	.css('color', '#202020')
        // 	.css('font-weight', 'bold')
        // 	.css('top', 15 + 'px')
        // 	// .css("top",padding.top - 15 )
        // 	.css('left', padding.left+10 + 'px');

        // $('.oversea_input_tl')
        // 	.css('position', 'absolute')
        // 	.text('数据不含港澳台地区')
        // 	.css('padding-left', '10px')
        // 	.css('font-size', table_cities_font_size)
        // 	.css('color', table_color[0])
        // 	.css('font-weight', '300')
        // 	// .css("top",(table_head_font_size - table_cities_font_size)/2 + 10 +"px")
        // 	// .css("top",60+"px")
        // 	.css('top', 35 + 'px')
        // 	.css('left', padding.left+10 - 10 + 'px');


        //矩形高亮
        // $(".oversea_input_node").on(method,function(){
        // 	$(".oversea_input_hand").hide();
        // 	var oversea_input_node_rect_index = Number($(this).attr("class").split("_")[5]);
        // 	// console.log(oversea_input_node_rect_index)
        // 	d3.selectAll(".oversea_input_node_rect")
        // 		.transition()
        // 		.style("stroke",table_color[2])
        // 		.style("fill",table_color[2])
        // 		.style("opacity","0.8");
        // 	d3.select(".oversea_input_node_rect_"+ oversea_input_node_rect_index)
        // 		.transition()
        // 		.style("stroke",table_color[11])
        // 		.style("fill",table_color[11])
        // 		.style("opacity","1");
        //
        // 	d3.selectAll(".oversea_input_link")
        // 		.transition()
        // 		.style("stroke",table_color[2])
        // 		.style("opacity","0.1");
        //
        // 	if(oversea_input_node_rect_index < 9){
        // 		d3.selectAll(".oversea_input_link_source_"+oversea_input_node_rect_index)
        // 			.transition()
        // 			.style("stroke",table_color[11])
        // 			.style("opacity","0.7");
        // 	}else{
        // 		d3.selectAll(".oversea_input_link_target_"+oversea_input_node_rect_index)
        // 			.transition()
        // 			.style("stroke",table_color[11])
        // 			.style("opacity","0.7");
        // 	}
        //
        // });

        //线高亮
        $(".oversea_input_link").on(method, function () {
            $(".oversea_input_hand").hide();

            var oversea_input_node_rect_index_0 = Number($(this).attr("class").split(" ")[1].split("_")[4]);
            var oversea_input_node_rect_index_1 = Number($(this).attr("class").split(" ")[2].split("_")[4]);

            d3.selectAll(".oversea_input_node_rect")
                .transition()
                .style("stroke", table_color[2])
                .style("fill", table_color[2])
                .style("opacity", "0.8");

            d3.select(".oversea_input_node_rect_" + oversea_input_node_rect_index_0)
                .transition()
                .style("stroke", table_color[11])
                .style("fill", table_color[11])
                .style("opacity", "1");

            d3.select(".oversea_input_node_rect_" + oversea_input_node_rect_index_1)
                .transition()
                .style("stroke", table_color[11])
                .style("fill", table_color[11])
                .style("opacity", "1");

            d3.selectAll(".oversea_input_link")
                .transition()
                .style("stroke", table_color[2])
                .style("opacity", "0.1");

            d3.select(this)
                .transition()
                .style("stroke", table_color[11])
                .style("opacity", "0.7");

        });

    }


    function mousemove() {
        padding = {
            left: 20,
            top: 50,
            right: 40,
            bottom: 30
        };
        /* 当鼠标在透明矩形内滑动时调用 */
        var new_people_num = Number($('.sum').eq(0).text());

        // var yScale = d3.scaleLinear()
        // 	.domain([0, new_people_num])
        // 	.nice()
        // 	.range([area_svg_height - padding.top - padding.bottom, 0]);

        //折线的源数组
        // var data = dataset[0].gdp;
        var data = all_line_data[0];

        //获取鼠标相对于透明矩形左上角的坐标，左上角坐标为(0,0)
        var mouseX = d3.mouse(this)[0] - padding.left;
        var mouseY = d3.mouse(this)[1] - padding.top;

        //通过比例尺的反函数计算原数据中的值，例如x0为某个年份，y0为GDP值
        var x0 = xScale.invert(mouseX);
        var y0 = yScale.invert(mouseY);

        //对x0四舍五入，如果x0是2005.6，则返回2006；如果是2005.2，则返回2005
        x0 = Math.round(x0);

        //查找在原数组中x0的值，并返回索引号
        var bisect = d3.bisector(function (d) {
            return d[0];
        }).left;
        var index = bisect(data, x0);

        // console.log(totalDate[index],new_line_data_0[index][1],new_line_data_1[index][1],new_line_data_2[index][1]);

        //获取垂直对齐线的x坐标
        var vlx = xScale(index) + padding.left;

        $('.tooltips_top').text(Number(totalDate[index].split('_')[0]) + '/' + Number(totalDate[index].split('_')[1]));
        d3.select('.tooltips_bottom').text('');
        if (linepath_index_data.indexOf(0) != -1) {
            d3.select('.tooltips_bottom').append('div').attr('class', 'tooltips_bottom_' + 0);
            // .style("padding-left","10px")

            $('.tooltips_bottom_' + 0).html(
                "<span style='font-weight:bold'>确诊</span> " + new_line_data_0[index][1] + ' 例'
            );
        }
        if (linepath_index_data.indexOf(1) != -1) {
            d3.select('.tooltips_bottom').append('div').attr('class', 'tooltips_bottom_' + 1);
            // .style("padding-left","10px")
            $('.tooltips_bottom_' + 1).html(
                "<span style='font-weight:bold'>出院</span> " + new_line_data_1[index][1] + ' 例'
            );
        }
        if (linepath_index_data.indexOf(2) != -1) {
            d3.select('.tooltips_bottom').append('div').attr('class', 'tooltips_bottom_' + 2);
            // .style("padding-left","10px")

            $('.tooltips_bottom_' + 2).html(
                "<span style='font-weight:bold'>死亡</span> " + new_line_data_2[index][1] + ' 例'
            );
        }
        if (linepath_index_data.indexOf(3) != -1) {
            d3.select('.tooltips_bottom').append('div').attr('class', 'tooltips_bottom_' + 3);
            // .style("padding-left","10px")

            $('.tooltips_bottom_' + 3).html(
                "<span style='font-weight:bold'>现存确诊</span> " + new_line_data_3[index][1] + ' 例'
            );
        }
        var tooltips_top_data = [];
        // console.log(linepath_index_data)
        for (var i = 0; i < linepath_index_data.length; i++) {
            tooltips_top_data.push(all_line_data[linepath_index_data[i]][index][1]);
        }
        // console.log(tooltips_top_data)
        var tooltips_top_max = d3.max(tooltips_top_data);
        // console.log(tooltips_top_max)
        $('.line_path_tooltips')
            // .css("opacity","0")
            .css('left', function (d) {
                if (vlx - $('.line_path_tooltips').width() / 2 < 0) {
                    return 0 + 'px';
                } else if (vlx + $('.line_path_tooltips').width() / 2 >= svg_width) {
                    // console.log("ma")
                    return svg_width - $('.line_path_tooltips').width() - 5 + 'px';
                } else {
                    return vlx - $('.line_path_tooltips').width() / 2 + 'px';
                }
            })
            .css('top', function (d) {
                if (yScale(tooltips_top_max) > padding.top + (svg_height - padding.left - padding.right) / 1.5) {
                    // console.log('xxxxxxxx',yScale(tooltips_top_max))
                    return yScale(tooltips_top_max) - $('.line_path_tooltips').height() + 18 + 'px';
                } else {
                    // console.log("manz",yScale(tooltips_top_max))
                    return yScale(tooltips_top_max) + padding.top + 30 + 'px';
                }
            });

        // //设定垂直对齐线的起点和终点
        d3
            .select('.vLine')
            .attr('x1', vlx)
            // .attr("y1",padding.top)
            .attr('y1', function (d) {
                if (yScale(tooltips_top_max) > padding.top + (svg_height - padding.left - padding.right) / 1.5) {
                    return yScale(tooltips_top_max) + padding.top - 30 + 'px';
                } else {
                    // console.log("满足",tooltips_top_max,yScale(tooltips_top_max))
                    return yScale(tooltips_top_max) + padding.top + 'px';
                }
            })
            .attr('x2', vlx)
            .attr('y2', area_svg_height - padding.bottom);

        $('.tooltips_tra')
            .css('top', function (d) {
                if (yScale(tooltips_top_max) > padding.top + (svg_height - padding.left - padding.right) / 1.5) {
                    return yScale(tooltips_top_max) + padding.top - 30 + 'px';
                } else {
                    return yScale(tooltips_top_max) + padding.top + 21 + 'px';
                }
            })
            .css('transform', function (d) {
                if (yScale(tooltips_top_max) > padding.top + (svg_height - padding.left - padding.right) / 1.5) {
                    return 'rotate(0deg)';
                } else {
                    return 'rotate(180deg)';
                }
            })
            .css('left', vlx - $('.line_path_tooltips').width() / 2 + 'px');
    }

    function mousemove_add() {
        padding = {
            left: 20,
            top: 50,
            right: 40,
            bottom: 30
        };
        /* 当鼠标在透明矩形内滑动时调用 */
        var new_people_num = d3.max(new_line_data_add_0[new_line_data_add_0.length - 1]);

        // var yScale = d3.scaleLinear()
        // 	.domain([0, new_people_num])
        // 	.nice()
        // 	.range([area_svg_height - padding.top - padding.bottom, 0]);

        //折线的源数组
        // var data = dataset[0].gdp;
        var data = all_line_add_data[0];

        //获取鼠标相对于透明矩形左上角的坐标，左上角坐标为(0,0)
        var mouseX = d3.mouse(this)[0] - padding.left;
        var mouseY = d3.mouse(this)[1] - padding.top;

        //通过比例尺的反函数计算原数据中的值，例如x0为某个年份，y0为GDP值
        var x0 = xScale.invert(mouseX);
        var y0 = yScale_add.invert(mouseY);

        //对x0四舍五入，如果x0是2005.6，则返回2006；如果是2005.2，则返回2005
        x0 = Math.round(x0);

        //查找在原数组中x0的值，并返回索引号
        var bisect = d3.bisector(function (d) {
            return d[0];
        }).left;
        var index = bisect(data, x0);
        // console.log(linepath_index_add_data)
        // console.log(totalDate[index],new_line_data_0[index][1],new_line_data_1[index][1],new_line_data_2[index][1]);
        // console.log(linepath_index_add_data[0],linepath_index_add_data[1],linepath_index_add_data[2])
        //获取垂直对齐线的x坐标
        var vlx = xScale(index) + padding.left;
        // console.log(new_line_data_add_0,new_line_data_add_1,new_line_data_add_2)
        $('.tooltips_top_add').text(
            Number(totalDate[index].split('_')[0]) + '/' + Number(totalDate[index].split('_')[1])
        );

        d3.select('.tooltips_bottom_add').text('');
        if (linepath_index_add_data.indexOf(0) != -1) {
            d3.select('.tooltips_bottom_add').append('div').attr('class', 'tooltips_bottom_add_' + 0);
            // .style("padding-left","10px")

            $('.tooltips_bottom_add_' + 0).html(
                "<span style='font-weight:bold'>全部</span> " + new_line_data_add_0[index][1] + ' 例'
            );
        }
        if (linepath_index_add_data.indexOf(1) != -1) {
            d3.select('.tooltips_bottom_add').append('div').attr('class', 'tooltips_bottom_add_' + 1);
            // .style("padding-left","10px")

            $('.tooltips_bottom_add_' + 1).html(
                "<span style='font-weight:bold'>港澳台</span> " + new_line_data_add_1[index][1] + ' 例'
            );
        }
        if (linepath_index_add_data.indexOf(2) != -1) {
            d3.select('.tooltips_bottom_add').append('div').attr('class', 'tooltips_bottom_add_' + 2);
            // .style("padding-left","10px")

            $('.tooltips_bottom_add_' + 2).html(
                "<span style='font-weight:bold'>本地病例</span> " + new_line_data_add_2[index][1] + ' 例'
            );
        }
        if (linepath_index_add_data.indexOf(3) != -1) {
            d3.select('.tooltips_bottom_add').append('div').attr('class', 'tooltips_bottom_add_' + 3);
            // .style("padding-left","10px")
            $('.tooltips_bottom_add_' + 3).html(
                "<span style='font-weight:bold'>境外输入</span> " + new_line_data_add_3[index][1] + ' 例'
            );
        }
        var tooltips_top_data = [];

        for (var i = 0; i < linepath_index_add_data.length; i++) {
            tooltips_top_data.push(all_line_add_data[linepath_index_add_data[i]][index][1]);
        }

        var tooltips_top_max = d3.max(tooltips_top_data);
        // console.log(tooltips_top_data)
        $('.line_path_tooltips_add')
            // .css("opacity","0")
            .css('left', function (d) {
                if (vlx - $('.line_path_tooltips_add').width() / 2 < 0) {
                    return 0 + 'px';
                } else if (vlx + $('.line_path_tooltips_add').width() / 2 >= svg_width) {
                    // console.log("ma")
                    return svg_width - $('.line_path_tooltips_add').width() - 5 + 'px';
                } else {
                    return vlx - $('.line_path_tooltips_add').width() / 2 + 'px';
                }
            })
            .css('top', function (d) {
                if (yScale_add(tooltips_top_max) > padding.top + (svg_height - padding.left - padding.right) / 1.5) {
                    return yScale_add(tooltips_top_max) - $('.line_path_tooltips_add').height() + 18 + 'px';
                } else {
                    // console.log("manz")
                    return yScale_add(tooltips_top_max) + padding.top + 30 + 'px';
                }
            });

        // //设定垂直对齐线的起点和终点
        d3
            .select('.vLine_add')
            .attr('x1', vlx)
            // .attr("y1",padding.top)
            .attr('y1', function (d) {
                if (yScale_add(tooltips_top_max) > padding.top + (svg_height - padding.left - padding.right) / 1.5) {
                    // console.log("满足")
                    return yScale_add(tooltips_top_max) + padding.top - 30 + 'px';
                } else {
                    return yScale_add(tooltips_top_max) + padding.top + 'px';
                }
            })
            .attr('x2', vlx)
            .attr('y2', area_svg_height - padding.bottom);

        $('.tooltips_tra_add')
            .css('top', function (d) {
                if (yScale_add(tooltips_top_max) > padding.top + (svg_height - padding.left - padding.right) / 1.5) {
                    return yScale_add(tooltips_top_max) + padding.top - 30 + 'px';
                } else {
                    return yScale_add(tooltips_top_max) + padding.top + 21 + 'px';
                }
            })
            .css('transform', function (d) {
                if (yScale_add(tooltips_top_max) > padding.top + (svg_height - padding.left - padding.right) / 1.5) {
                    return 'rotate(0deg)';
                } else {
                    return 'rotate(180deg)';
                }
            })
            .css('left', vlx - $('.line_path_tooltips_add').width() / 2 + 'px');
    }


    function make_table(table_map_data) {
        //市级排序
        table_map_data.sort(function (a, b) {
            //  逆序
            return b.casetotal - a.casetotal;
        });

        for (var i = 0; i < table_map_data.length; i++) {
            // 大洲判断
            if (
                table_map_data[i].province == '亚洲' ||
                table_map_data[i].province == '欧洲' ||
                table_map_data[i].province == '非洲' ||
                table_map_data[i].province == '北美洲' ||
                table_map_data[i].province == '南美洲' ||
                table_map_data[i].province == '大洋洲' ||
                table_map_data[i].province == '其他'
            ) {
                // console.log("a")
                if (
                    table_map_data[i].newcase == 0 &&
                    table_map_data[i].casetotal == 0 &&
                    table_map_data[i].curecase == 0 &&
                    table_map_data[i].deathcase == 0
                ) {
                } else {
                    other_table_data.push(table_map_data[i]);
                }
            } else if (table_map_data[i].name == '地市明细不详') {
                underfind_table_data.push(table_map_data[i]);
            } else if (table_map_data[i].name == table_map_data[i].province) {
                //省
                china_table_data_0.push(table_map_data[i]);
            }
                // else if (table_map_data[i].province == "尚不明确") {
            // }
            else {
                if (table_map_data[i].name.split("-").length != 2) {
                    //市
                    china_table_data_1.push(table_map_data[i]);
                } else {
                    //境外输入
                    china_table_data_2.push(table_map_data[i]);
                }

            }
        }
        //省
        for (var i = 0; i < china_table_data_0.length; i++) {
            china_table_data.push(china_table_data_0[i]);
        }

        //境外输入处理
        china_table_data_2.forEach(function (d) {
            d.country = d.name.split("-")[1];
            d.name = d.name.split("-")[0];
        });

        //境外输入组装
        china_table_data_3 = d3.nest()
            .key(function (d) {
                return d.province
            })
            .entries(china_table_data_2);

        china_table_data_3.forEach(function (d) {
            d.province = d.key;
            d.name = "境外输入";
            // var temp_3 = d.values;
            d.casetotal = d3.sum(d.values, function (d) {
                return d.casetotal
            });
            d.newcase = d3.sum(d.values, function (d) {
                return d.newcase
            });
            d.curecase = d3.sum(d.values, function (d) {
                return d.curecase
            });
            d.deathcase = d3.sum(d.values, function (d) {
                return d.deathcase
            });
        });

        china_table_data_3 = china_table_data_3.filter(function (d) {
            return d.province != "尚不明确"
        });

        // console.log(china_table_data,underfind_table_data);

        // console.log(china_table_data_3);

        //境外输入
        for (var i = 0; i < china_table_data_3.length; i++) {
            china_table_data.push(china_table_data_3[i]);
        }

        //市
        for (var i = 0; i < china_table_data_1.length; i++) {
            china_table_data.push(china_table_data_1[i]);
        }
        //地市不详
        for (var i = 0; i < underfind_table_data.length; i++) {
            china_table_data.push(underfind_table_data[i]);
        }

        // console.log(provinces_table_data);

        //国内的数据
        provinces_table_data = d3
            .nest()
            .key(function (d) {
                return d.province;
            })
            .entries(china_table_data);

        //省级排序
        provinces_table_data.sort(function (a, b) {
            //  逆序
            return b.values[0].casetotal - a.values[0].casetotal;
        });


        //生成数据表1
        if (UA.isMobile) {
            width = $(window).width();
            table_width = width * 0.94;
        } else {
            width = 600;
            table_width = width;
        }
        $('.table').width(table_width + 'px').css('margin', '0 auto');
        // console.log(table_width)
        var window_height = $(window).height();
        if (UA.isMobile) {
            col_width = table_width / 5 - 0.5;
        } else {
            col_width = table_width / 5 - 1.5;
        }

        if (width <= 360) {
            table_head_font_size = 12;
            table_province_font_size = 12;
            table_cities_font_size = 10;
        } else {
            table_head_font_size = 14;
            table_province_font_size = 14;
            table_cities_font_size = 12;
        }


        $('.table_container_0').before(
            "<div class='table_head'><div class='col col_0'><span>省份</span></div><div class='col col_1'><span>现存<br>确诊</span></div><div class='col col_2'><span>累计<br>确诊</span></div><div class='col col_3'><span>出院<br>人数</span></div><div class='col col_4'><span>累计<br>死亡</span></div></div>"
        );
        $('.table_container_1').before(
            "<div class='table_head'><div class='col col_0'><span></span></div><div class='col col_1'><span>新增<br>确诊</span></div><div class='col col_2'><span>累计<br>确诊</span></div><div class='col col_3'><span>出院<br>人数</span></div><div class='col col_4'><span>累计<br>死亡</span></div></div>"
        );

    }

    function make_china_table(provinces_table_data) {

        // .css("background","#fff");
        // console.log(provinces_table_data);
        for (var i = 0; i < provinces_table_data.length; i++) {
            $('.table_container_0').append(
                "<div class='table_box table_box_" +
                i +
                "'><div class='table_province_box table_province_box_" +
                i +
                "'></div><div class='table_cites_box table_cites_box_" +
                i +
                "'></div></div>"
            );

            var j = 0;

            // for (var j = 0; j < provinces_table_data[i].values.length; j++) {
            // if (j == 0) {
            //疑似,西藏判断
            // if (provinces_table_data[i].key != "西藏") {
            d3
                .select('.table_container_0')
                .select('.table_province_box_' + i)
                .append('div')
                .attr('class', 'col col_0 col_0_' + i + '_' + j)
                .append('span')
                .style('display', 'inline-block')
                .text(provinces_table_data[i].values[j].name)


            $('.table_container_0')
                .find('.table_province_box_' + i)
                .find('.col')
                .css('position', 'relative')
                .append("<span class='table_up'></span>");

            $('.table_container_0')
                .find('.table_province_box_' + i)
                .find('.col')
                .find('.table_up')
                .attr('data', 0)
            // }

            d3
                .select('.table_container_0')
                .select('.table_province_box_' + i)
                .append('div')
                .attr('class', 'col col_1 col_1_' + i + '_' + j)
                .append('span')
                .style('display', 'inline-block')
                .html(function (d) {
                    return (
                        provinces_table_data[i].values[j].casetotal -
                        provinces_table_data[i].values[j].curecase -
                        provinces_table_data[i].values[j].deathcase
                    )
                    // }
                });

            d3
                .select('.table_container_0')
                .select('.table_province_box_' + i)
                .append('div')
                .attr('class', 'col col_2 col_2_' + i + '_' + j)
                .append('span')
                .style('display', 'inline-block')
                .text(provinces_table_data[i].values[j].casetotal)

            d3
                .select('.table_container_0')
                .select('.table_province_box_' + i)
                .append('div')
                .attr('class', 'col col_3 col_3_' + i + '_' + j)
                .append('span')
                .style('display', 'inline-block')
                .text(provinces_table_data[i].values[j].curecase)

            d3
                .select('.table_container_0')
                .select('.table_province_box_' + i)
                .append('div')
                .attr('class', 'col col_4 col_4_' + i + '_' + j)
                .append('span')
                .style('display', 'inline-block')
                .text(provinces_table_data[i].values[j].deathcase)
            // }

            // }
        }

        $(".colundefined").parent().parent().find(".col_1").find("span").text("-");


        $('.table_head').width(table_width);


        $(".table_0").find('.col')
            .width(col_width - 15)
            .css('height', '30px')
            .css('padding', '0 2.5px')
            .css('border-right', '0.5px solid rgba(155,203,224,0)');

        $(".table_0").find('.col_0')
            .width(col_width + 10 + 'px')
            .css('text-align', 'left')
            .css('padding', '0px 0px 0px 30px')
            .css('color', table_color[0]);

        $(".table_0").find('.col_1').css('text-align', 'right').css('color', table_color[0]);

        $(".table_0").find('.col_2').css('text-align', 'right').css('color', table_color[0]);

        $(".table_0").find('.col_3').css('text-align', 'right').css('color', table_color[0])
        // .css('color', table_color[3]);

        $(".table_0").find('.col_4').css('text-align', 'right').css('color', table_color[0]);

        $(".table_container_0").find('.table_province_box')
            .css('line-height', '35px')
            .css('font-size', table_province_font_size)
            .css('border-bottom', '1px dotted ' + table_color[7]);

        $(".table_container_0").find('.table_province_box').find('.col').css('height', '35px');

        $('.table_container_1').find('.table_box').find('.col').css('color', table_color[6]);
        // //调颜色
        $('.table_container_0').find('.table_province_box').find('.col').css('color', "#3333333");
        $('.table_container_0').find('.each_table_cites_box').find('.col').css('color', "#4D4D4D");
        $('.table_container_0').find('.each_table_input_box').find('.col').css('color', "#808080");

        $(".table_container_0").find('.each_table_cites_box')
            .css('line-height', '30px')
            .css('font-size', table_cities_font_size)
            .css('border-bottom', '1px dotted ' + table_color[7]);


        $(".table_container_0").find('.each_table_input_box')
            .css('line-height', '30px')
            .css('font-size', table_cities_font_size)
            .css('border-top', '1px dotted ' + table_color[7]);

        $(".table_container_0").find('.table_cites_box').fadeOut();
        $(".table_container_0").find('.table_input_box').fadeOut();


        $('.table_container').css('background', '#fff');

        // $('.table_container_1')
        // 	.find('.table_province_box')
        // 	.css('background', '#fff')
        // 	.css('border-bottom', '1px dotted ' + table_color[7]);

        $(".table_0").find('.table_head')
            .find('.col_0')
            .width(col_width + 40 + 'px')
            // .css("padding", "unset")
            .css('padding', '0px')
            .css('position', 'relative')
            .height('40px')
            .css('text-align', 'center');

        $(".table_0").find('.table_head')
            .find('.col_1')
            .css('line-height', Number(table_head_font_size) + 2 + 'px')
            .css('position', 'relative')
            .height('40px')
            .css('text-align', 'center');

        $(".table_0").find('.table_head')
            .find('.col_2')
            .css('line-height', Number(table_head_font_size) + 2 + 'px')
            .css('position', 'relative')
            .height('40px')
            // .css("top","50%")
            .css('text-align', 'center');

        $(".table_0").find('.table_head')
            .find('.col_3')
            .css('line-height', Number(table_head_font_size) + 2 + 'px')
            .css('position', 'relative')
            .height('40px')
            // .css("top","50%")
            .css('text-align', 'center');

        $(".table_0").find('.table_head')
            .find('.col_4')
            .css('line-height', Number(table_head_font_size) + 2 + 'px')
            .css('position', 'relative')
            .height('40px')
            // .css("top","50%")
            .css('text-align', 'center');

        //折行调整（海外的）

        // setTimeout(make_oversea_table(other_table_data));


        //加了疑似，不是0，而是1
        //湖北打开
        $(".table_container_0").find('.table_cites_box_' + 0).fadeToggle('fast');

        // d3.selectAll(".table_container_0")
        d3
            .selectAll('.table_container')
            .selectAll('.table_province_box_' + 0)
            .selectAll('.col_0')
            .selectAll('.table_up')
            .attr('data', 180)
            .style('transform', 'rotate(180deg)');

        //整个区域
        var parent_index, table_index, up_rotate;
        // $(document).on("click",".table_province_box",function(){
        $(document).on(method, '.table_province_box', function (e) {
            //获取当前id
            // console.log("省级")
            parent_index = $(this).parent().parent().attr('class').split('_')[3];
            table_index = $(this).attr('class').split('_')[5];
            // if (parent_index == 0) {
            // draw_cities_table(provinces_table_data,table_index);
            if (UA.isMobile) {
                //touchmove监听
                // $(document).on("touchmove",".table_province_box",function(){
                // $('.touch_circle').bind(method, function (e) {
                if (e.originalEvent && e.originalEvent.targetTouches && e.originalEvent.targetTouches[0]) {
                    var touch = e.originalEvent.targetTouches[0];
                    touchStartY = touch.pageY;
                    touchEndY = touch.pageY;
                }
                // });
            } else {
                var up_rotate = Number($(this).find('.col').find('.table_up').attr('data')) + 180;

                if (up_rotate == 360) {
                    up_rotate = 0;
                }
                draw_cities_table(provinces_table_data, table_index);

                $('.table_container_' + parent_index).find('.table_cites_box_' + table_index).fadeToggle('fast');

                // draw_little_line_path_2(history_data,table_index);

                d3
                    .selectAll('.table_container_' + parent_index)
                    .selectAll('.table_province_box_' + table_index)
                    .selectAll('.col_0')
                    .selectAll('.table_up')
                    .style('transform', 'rotate(0deg)')
                    .attr('data', up_rotate)
                    .transition()
                    .duration(200)
                    .style('transform', 'rotate(' + up_rotate + 'deg)');

                // }
            }
        });

        $(document).on(method, '.hasinput', function (e) {
            //获取当前id
            // console.log("省级")
            // console.log($(this).attr('class').split('_'))
            // parent_index = $(this).parent().parent().attr('class').split('_')[8];
            parent_index = $(this).attr('class').split('_')[8];
            table_index = $(this).attr('class').split('_')[9];
            // console.log(parent_index,table_index)
            // if (parent_index == 0) {

            if (UA.isMobile) {
                //touchmove监听
                // $(document).on("touchmove",".table_province_box",function(){
                // $('.touch_circle').bind(method, function (e) {
                if (e.originalEvent && e.originalEvent.targetTouches && e.originalEvent.targetTouches[0]) {
                    var touch = e.originalEvent.targetTouches[0];
                    touchStartY = touch.pageY;
                    touchEndY = touch.pageY;
                }
                // });
            } else {
                var up_rotate = Number($(this).find('.col_0').find('.table_up').attr('data')) + 180;
                // console.log(up_rotate)
                if (up_rotate == 360) {
                    up_rotate = 0;
                }

                $(".table_input_box_" + parent_index + "_" + table_index).fadeToggle('fast');
                // $('.table_container_' + parent_index).find('.table_cites_box_' + table_index).fadeToggle('fast');

                d3
                    .select('.hasinput_' + parent_index + "_" + table_index)
                    .select('.table_up')
                    .style('transform', 'rotate(0deg)')
                    .attr('data', up_rotate)
                    .transition()
                    .duration(200)
                    .style('transform', 'rotate(' + up_rotate + 'deg)');

                // }
            }
        });

        $(document).on('touchmove', '.table_province_box', function (e) {
            // if (parent_index == 0) {
            var touch = e.originalEvent.targetTouches[0];
            touchEndY = touch.pageY;
            // }
        });

        $(document).on('touchmove', '.hasinput', function (e) {
            // if (parent_index == 0) {
            var touch = e.originalEvent.targetTouches[0];
            touchEndY = touch.pageY;
            // }
        });

        $(document).on('touchend', '.table_province_box', function (e) {
            // if (Math.abs(touchEndY - touchStartY) < 3 && parent_index == 0) {
            if (Math.abs(touchEndY - touchStartY) < 3) {
                up_rotate = Number($(this).find('.col').find('.table_up').attr('data')) + 180;

                if (up_rotate == 360) {
                    up_rotate = 0;
                }
                table_head_top_1 = $('.table_head_container_1').find('.table_head').offset().top;
                draw_cities_table(provinces_table_data, table_index);

                $('.table_container_' + parent_index).find('.table_cites_box_' + table_index).fadeToggle('fast');
                // draw_little_line_path_2(history_data,table_index);

                d3
                    .selectAll('.table_container_' + parent_index)
                    .selectAll('.table_province_box_' + table_index)
                    .selectAll('.col_0')
                    .selectAll('.table_up')
                    .style('transform', 'rotate(0deg)')
                    .attr('data', up_rotate)
                    .transition()
                    .duration(200)
                    .style('transform', 'rotate(' + up_rotate + 'deg)');
            }
        });

        $(document).on('touchend', '.hasinput', function (e) {
            // if (Math.abs(touchEndY - touchStartY) < 3 && parent_index == 0) {
            if (Math.abs(touchEndY - touchStartY) < 3) {
                up_rotate = Number($(this).find('.col').find('.table_up').attr('data')) + 180;

                if (up_rotate == 360) {
                    up_rotate = 0;
                }
                // table_head_top_1 = $('.table_head_container_1').find('.table_head').offset().top;

                // $('.table_container_' + parent_index).find('.table_cites_box_' + table_index).fadeToggle('fast');

                $(".table_input_box_" + parent_index + "_" + table_index).fadeToggle('fast');

                d3
                    .select('.hasinput_' + parent_index + "_" + table_index)
                    .select('.table_up')
                    .style('transform', 'rotate(0deg)')
                    .attr('data', up_rotate)
                    .transition()
                    .duration(200)
                    .style('transform', 'rotate(' + up_rotate + 'deg)');
            }
        });


        tabe_text_right();
        table_head_margin();
    }

    function make_oversea_table(other_table_data) {
        // for (var i = 0; i < other_table_nest.length; i++) {
        for (var i = 0; i < other_table_data.length; i++) {
            $('.table_container_1').append(
                "<div class='table_box table_box_" +
                i +
                "'><div class='table_province_box table_province_box_" +
                i +
                "'></div><div class='table_cites_box table_cites_box_" +
                i +
                "'></div></div>"
            );

            d3
                .select('.table_container_1')
                .select('.table_province_box_' + i)
                .append('div')
                // .attr('class', 'col col_0 col_0_' + i + '_' + j)
                .attr('class', 'col col_0 col_0_' + i)
                .append('span')
                .style('display', 'inline-block')
                // .text(other_table_nest[i].key);
                .text(other_table_data[i].name);

            d3
                .select('.table_container_1')
                .select('.table_province_box_' + i)
                .append('div')
                // .attr('class', 'col col_1 col_1_' + i + '_' + j)
                .attr('class', 'col col_1 col_1_' + i)
                .append('span')
                .style('display', 'inline-block')
                // .text(other_table_nest[i].newcase)
                .text(other_table_data[i].newcase)
                .style('opacity', function (d) {
                    // if (other_table_nest[i].newcase == '0' || other_table_nest[i].newcase == 'null') {
                    if (other_table_data[i].newcase == '0' || other_table_data[i].newcase == 'null') {
                        return '0';
                    } else {
                        return '1';
                    }
                });

            d3
                .select('.table_container_1')
                .select('.table_province_box_' + i)
                .append('div')
                // .attr('class', 'col col_2 col_2_' + i + '_' + j)
                .attr('class', 'col col_2 col_2_' + i)
                .append('span')
                .style('display', 'inline-block')
                // .text(other_table_nest[i].casetotal)
                .text(other_table_data[i].casetotal)
                .style('opacity', function (d) {
                    // if (other_table_nest[i].casetotal == '0' || other_table_nest[i].casetotal == 'null') {
                    if (other_table_data[i].casetotal == '0' || other_table_data[i].casetotal == 'null') {
                        return '0';
                    } else {
                        return '1';
                    }
                });

            d3
                .select('.table_container_1')
                .select('.table_province_box_' + i)
                .append('div')
                // .attr('class', 'col col_3 col_3_' + i + '_' + j)
                .attr('class', 'col col_3 col_3_' + i)
                .append('span')
                .style('display', 'inline-block')
                // .text(other_table_nest[i].curecase)
                .text(other_table_data[i].curecase)
                .style('opacity', function (d) {
                    // if (other_table_nest[i].curecase == '0' || other_table_nest[i].curecase == 'null') {
                    if (other_table_data[i].curecase == '0' || other_table_data[i].curecase == 'null') {
                        return '0';
                    } else {
                        return '1';
                    }
                });

            d3
                .select('.table_container_1')
                .select('.table_province_box_' + i)
                .append('div')
                // .attr('class', 'col col_4 col_4_' + i + '_' + j)
                .attr('class', 'col col_4 col_4_' + i)
                .append('span')
                .style('display', 'inline-block')
                // .text(other_table_nest[i].deathcase)
                .text(other_table_data[i].deathcase)
                .style('opacity', function (d) {
                    // if (other_table_nest[i].deathcase == '0' || other_table_nest[i].deathcase == 'null') {
                    if (other_table_data[i].deathcase == '0' || other_table_data[i].deathcase == 'null') {
                        return '0';
                    } else {
                        return '1';
                    }
                });
        }

        $(".table_container_1").find('.table_head').width(table_width);

        if (UA.isMobile) {
            col_width = table_width / 5 - 0.5;
        } else {
            col_width = table_width / 5 - 1.5;
        }


        //海外的图例
        $('.table_head_container_1').prepend("<img class='oversea_table_tl' src='./assets/area_tl.png'/>");


        $(".table_1").find('.col')
            .width(col_width - 15)
            .css('height', '30px')
            .css('padding', '0 2.5px')
            .css('border-right', '0.5px solid rgba(155,203,224,0)');

        $(".table_1").find('.col_0')
            .width(col_width + 10 + 'px')
            .css('text-align', 'left')
            .css('padding', '0px 0px 0px 30px')
            .css('color', table_color[0]);

        $(".table_1").find('.col_1').css('text-align', 'right').css('color', table_color[0]);

        $(".table_1").find('.col_2').css('text-align', 'right').css('color', table_color[0]);

        $(".table_1").find('.col_3').css('text-align', 'right').css('color', table_color[0])
        // .css('color', table_color[3]);

        $(".table_1").find('.col_4').css('text-align', 'right').css('color', table_color[0]);

        $(".table_1").find('.table_province_box')
            .css('line-height', '35px')
            .css('font-size', table_province_font_size)
            .css('border-bottom', '1px dotted ' + table_color[7]);

        $(".table_1").find('.table_province_box').find('.col').css('height', '35px');

        $('.table_1').find('.table_box').find('.col').css('color', table_color[6]);

        $(".table_1").find('.each_table_cites_box')
            .css('line-height', '30px')
            .css('font-size', table_cities_font_size)
            .css('border-bottom', '1px dotted ' + table_color[7]);


        $(".table_1").find('.each_table_input_box')
            .css('line-height', '30px')
            .css('font-size', table_cities_font_size)
            .css('border-top', '1px dotted ' + table_color[7]);

        d3
            .select('.table_container_1')
            .selectAll('.col_0')
            .style('text-align', 'left')
            .style('width', function (d) {
                // console.log(width);
                if (width <= 360) {
                    return col_width + 15 + 'px';
                } else {
                    return col_width + 10 + 'px';
                }
            })
            .style('padding', function (d) {
                if (width <= 360) {
                    return '0px 10px 0px 15px';
                } else {
                    return '0px 10px 0px 20px';
                }
            });

        $('.table_container_1')
            .find('.table_province_box')
            .css('background', '#fff')
            .css('border-bottom', '1px dotted ' + table_color[7]);

        $(".table_1").find('.table_head')
            .find('.col_0')
            .width(col_width + 40 + 'px')
            // .css("padding", "unset")
            .css('padding', '0px')
            .css('position', 'relative')
            .height('40px')
            .css('text-align', 'center');

        $(".table_1").find('.table_head')
            .find('.col_1')
            .css('line-height', Number(table_head_font_size) + 2 + 'px')
            .css('position', 'relative')
            .height('40px')
            .css('text-align', 'center');

        $(".table_1").find('.table_head')
            .find('.col_2')
            .css('line-height', Number(table_head_font_size) + 2 + 'px')
            .css('position', 'relative')
            .height('40px')
            // .css("top","50%")
            .css('text-align', 'center');

        $(".table_1").find('.table_head')
            .find('.col_3')
            .css('line-height', Number(table_head_font_size) + 2 + 'px')
            .css('position', 'relative')
            .height('40px')
            // .css("top","50%")
            .css('text-align', 'center');

        $(".table_1").find('.table_head')
            .find('.col_4')
            .css('line-height', Number(table_head_font_size) + 2 + 'px')
            .css('position', 'relative')
            .height('40px')
            // .css("top","50%")
            .css('text-align', 'center');


        table_word_wrap();
        tabe_text_right();
        table_head_margin();

    }


    function draw_cities_table(provinces_table_data, a) {

        var province_index = a;

        if ($(".table_container_0").find(".table_box_" + province_index).attr("data") != "has_cities_box") {

            var current_province_cities_data = provinces_table_data[province_index].values;

            // console.log(current_province_cities_data);
            // $(".table_box_"+province_index).attr("data","has_cities_box");

            $(".table_box_" + province_index)
                .attr("data", "has_cities_box")
            // .append("<div class='table_cites_box table_cites_box_"+province_index+"'></div>");


            for (var i = 1; i < current_province_cities_data.length; i++) {
                if (current_province_cities_data[i].newcase == 0 && current_province_cities_data[i].casetotal == 0 && current_province_cities_data[i].curecase == 0 && current_province_cities_data[i].deathcase == 0) {

                } else {

                    $('.table_container_0')
                        .find('.table_cites_box_' + province_index)
                        .append("<div class='each_table_cites_box each_table_cites_box_" + i + "'></div>");

                    d3
                        .select('.table_container_0')
                        .select('.table_cites_box_' + province_index)
                        .select('.each_table_cites_box_' + i)
                        .append('div')
                        .attr('class', 'col col_0 col_0_' + province_index + '_' + i)
                        .append('span')
                        .style('display', 'inline-block')
                        .text(current_province_cities_data[i].name)


                    d3
                        .select('.table_container_0')
                        .select('.table_cites_box_' + province_index)
                        .select('.each_table_cites_box_' + i)
                        .append('div')
                        .attr('class', function (d) {
                            if (current_province_cities_data[i].province == "北京") {
                                return 'colundefined col col_1 col_1_' + province_index + '_' + i
                            } else {
                                return 'col col_1 col_1_' + province_index + '_' + i
                            }
                        })
                        .append('span')
                        .style('display', 'inline-block')
                        .text(function (d) {
                            if (Number(current_province_cities_data[i].casetotal -
                                current_province_cities_data[i].curecase -
                                current_province_cities_data[i].deathcase) <= 0) {
                                return ""
                            } else {
                                return current_province_cities_data[i].casetotal -
                                    current_province_cities_data[i].curecase -
                                    current_province_cities_data[i].deathcase
                            }

                        });


                    d3
                        .select('.table_container_0')
                        .select('.table_cites_box_' + province_index)
                        .select('.each_table_cites_box_' + i)
                        .append('div')
                        .attr('class', 'col col_2 col_2_' + province_index + '_' + i)
                        .append('span')
                        .style('display', 'inline-block')
                        .text(current_province_cities_data[i].casetotal)
                        .style('opacity', function (d) {
                            if (
                                current_province_cities_data[i].casetotal == '0'
                            ) {
                                return '0';
                            } else {
                                return '1';
                            }
                        });

                    d3
                        .select('.table_container_0')
                        .select('.table_cites_box_' + province_index)
                        .select('.each_table_cites_box_' + i)
                        .append('div')
                        .attr('class', 'col col_3 col_3_' + province_index + '_' + i)
                        .append('span')
                        .style('display', 'inline-block')
                        .text(current_province_cities_data[i].curecase)
                        .style('opacity', function (d) {
                            if (
                                current_province_cities_data[i].curecase == '0'
                            ) {
                                return '0';
                            } else {
                                return '1';
                            }
                        });

                    d3
                        .select('.table_container_0')
                        .select('.table_cites_box_' + province_index)
                        .select('.each_table_cites_box_' + i)
                        .append('div')
                        .attr('class', 'col col_4 col_4_' + province_index + '_' + i)
                        .append('span')
                        .style('display', 'inline-block')
                        .text(current_province_cities_data[i].deathcase)
                        .style('opacity', function (d) {
                            if (
                                current_province_cities_data[i].deathcase == '0'
                            ) {
                                return '0';
                            } else {
                                return '1';
                            }
                        });

                    if (current_province_cities_data[i].name == "境外输入") {
                        // console.log("境外输入");
                        $('.table_container_0').find('.table_cites_box_' + province_index).find('.each_table_cites_box_' + i).addClass("hasinput hasinput_" + province_index + "_" + i);
                        $(".hasinput_" + province_index + "_" + i).find(".col_0_" + province_index + "_" + i).append("<span class='table_up' data='0'></span>");
                        $(".hasinput_" + province_index + "_" + i).append("<div class='table_input_box table_input_box_" + province_index + "_" + i + "'></div>");
                        $(".table_input_box_" + province_index + "_" + i).hide();
                        for (var k = 0; k < current_province_cities_data[i].values.length; k++) {
                            $(".table_input_box_" + province_index + "_" + i).append("<div class='each_table_input_box each_table_input_box_" + province_index + "_" + i + "_" + k + "'></div>")

                            d3.select(".each_table_input_box_" + province_index + "_" + i + "_" + k)
                                .append("div")
                                .attr('class', 'col col_0 col_0_' + province_index + '_' + i + ' col_0_' + province_index + '_' + i + '_' + k)
                                .append('span')
                                .style('display', 'inline-block')
                                .text(current_province_cities_data[i].values[k].country)

                            d3.select(".each_table_input_box_" + province_index + "_" + i + "_" + k)
                                .append("div")
                                .attr('class', 'col col_1 col_1_' + province_index + '_' + i + ' col_1_' + province_index + '_' + i + '_' + k)
                                .append('span')
                                .style('display', 'inline-block')
                                .text(current_province_cities_data[i].values[k].casetotal - current_province_cities_data[i].values[k].curecase - current_province_cities_data[i].values[k].deathcase)
                                .style('opacity', function (d) {
                                    if ((current_province_cities_data[i].values[k].casetotal - current_province_cities_data[i].values[k].curecase - current_province_cities_data[i].values[k].deathcase) < 0
                                    ) {
                                        return '0';
                                    } else {
                                        return '1';
                                    }
                                });


                            d3.select(".each_table_input_box_" + province_index + "_" + i + "_" + k)
                                .append("div")
                                .attr('class', 'col col_2 col_2_' + province_index + '_' + i + ' col_2_' + province_index + '_' + i + '_' + k)
                                .append('span')
                                .style('display', 'inline-block')
                                .text(current_province_cities_data[i].values[k].casetotal)
                                .style('opacity', function (d) {
                                    if (current_province_cities_data[i].values[k].casetotal == 0
                                    ) {
                                        return '0';
                                    } else {
                                        return '1';
                                    }
                                });


                            d3.select(".each_table_input_box_" + province_index + "_" + i + "_" + k)
                                .append("div")
                                .attr('class', 'col col_3 col_3_' + province_index + '_' + i + ' col_3_' + province_index + '_' + i + '_' + k)
                                .append('span')
                                .style('display', 'inline-block')
                                .text(current_province_cities_data[i].values[k].curecase)
                                .style('opacity', function (d) {
                                    if (
                                        current_province_cities_data[i].values[k].curecase == '0' ||
                                        current_province_cities_data[i].values[k].curecase == 'null'
                                    ) {
                                        return '0';
                                    } else {
                                        return '1';
                                    }
                                });

                            d3.select(".each_table_input_box_" + province_index + "_" + i + "_" + k)
                                .append("div")
                                .attr('class', 'col col_3 col_3_' + province_index + '_' + i + ' col_3_' + province_index + '_' + i + '_' + k)
                                .append('span')
                                .style('display', 'inline-block')
                                .text(current_province_cities_data[i].values[k].deathcase)
                                .style('opacity', function (d) {
                                    if (
                                        current_province_cities_data[i].deathcase == '0' ||
                                        current_province_cities_data[i].deathcase == 'null'
                                    ) {
                                        return '0';
                                    } else {
                                        return '1';
                                    }
                                });

                        }
                    }
                }
            }

            $(".colundefined").parent().parent().find(".col_1").find("span").text("-");


            if (UA.isMobile) {
                col_width = table_width / 5 - 0.5;
            } else {
                col_width = table_width / 5 - 1.5;
            }

            $(".table_cites_box").find('.col')
                .width(col_width - 15)
                .css('height', '30px')
                .css('padding', '0 2.5px')
                .css('border-right', '0.5px solid rgba(155,203,224,0)');

            $(".table_cites_box").find('.col_0')
                .width(col_width + 10 + 'px')
                .css('text-align', 'left')
                .css('padding', '0px 0px 0px 30px')
                .css('color', table_color[0]);

            $(".table_cites_box").find('.col_1').css('text-align', 'right').css('color', table_color[0])

            $(".table_cites_box").find('.col_2').css('text-align', 'right').css('color', table_color[0])

            $(".table_cites_box").find('.col_3').css('text-align', 'right').css('color', table_color[0])

            $(".table_cites_box").find('.col_4').css('text-align', 'right').css('color', table_color[0])

            // $('.table_province_box')
            // 	.css('line-height', '35px')
            // 	.css('font-size', table_province_font_size)
            // 	.css('border-bottom', '1px dotted ' + table_color[7]);

            $('.table_container_0').find('.each_table_cites_box').find('.col').css('color', "#4D4D4D");
            $('.table_container_0').find('.each_table_input_box').find('.col').css('color', "#808080");

            $('.each_table_cites_box')
                .css('line-height', '30px')
                .css('font-size', table_cities_font_size)
                .css('border-bottom', '1px dotted ' + table_color[7]);


            $('.each_table_input_box')
                .css('line-height', '30px')
                .css('font-size', table_cities_font_size)
                .css('border-top', '1px dotted ' + table_color[7]);

            // setTimeout(table_word_wrap(),10000);
            table_word_wrap();
            tabe_text_right();
            table_head_margin();
            draw_little_line_path_2(history_data, province_index);

        }


    }


    function click_trigger(linepath_index, linepath_index_2) {
        padding = {
            left: 20,
            top: 50,
            right: 40,
            bottom: 30
        };
        linepath_index_data = [];

        if (linepath_index_data.indexOf(linepath_index) == -1) {
            // console.log('this')
            linepath_index_data.push(linepath_index);
            if (linepath_index_2 == 3) {
                linepath_index_data.push(linepath_index_2);
            }
            linepath_index_max_data = [];

            // linepath_index_data.splice(linepath_index_data.indexOf(linepath_index), 0);

            // console.log(linepath_index_data);

            d3
                .selectAll('.linepath_tl')
                // .style("background", table_color[7]);
                .style('background', '#fff')
                .style('color', table_color[9])
                .style('border', '1px solid ' + table_color[9]);

            d3
                .selectAll('.linepath_tl_' + linepath_index)
                .style('background', table_color[linepath_index + 2])
                .style('color', '#fff')
                .style('border', '1px solid ' + table_color[linepath_index + 2]);

            if (linepath_index_2 == 3) {
                d3
                    .selectAll('.linepath_tl_' + linepath_index_2)
                    .style('background', table_color[1])
                    .style('color', '#fff')
                    .style('border', '1px solid ' + table_color[1]);
            }

            // d3
            // 	.selectAll('.linepath_tl_' + linepath_index_2)
            // 	.style('background', table_color[linepath_index_2 + 2])
            // 	.style('color', '#fff')
            // 	.style('border', '1px solid ' + table_color[linepath_index_2 + 2]);

            for (var i = 0; i < linepath_index_data.length; i++) {
                linepath_index_max_data.push(line_data_max[linepath_index_data[i]]);
            }

            // if(linepath_index_2 != "undefined"){

            // }
            // console.log(linepath_index, linepath_index_max_data)
            // last_linepath_index = linepath_index;
        } else {
            linepath_index_data.splice(linepath_index_data.indexOf(linepath_index), 1);
            linepath_index_max_data = [];
            for (var i = 0; i < linepath_index_data.length; i++) {
                linepath_index_max_data.push(line_data_max[linepath_index_data[i]]);
            }
            d3
                .selectAll('.linepath_tl_' + linepath_index)
                // .style("background", table_color[7]);
                .style('background', '#fff')
                .style('color', table_color[9])
                .style('border', '1px solid ' + table_color[9]);

            last_linepath_index = linepath_index;
            // console.log(linepath_index,linepath_index_max_data)
        }

        if (linepath_index_max_data.length == 0) {
            yScale.domain([0, 0]).nice().range([area_svg_height - padding.top - padding.bottom, 0]);
        } else {
            yScale
                .domain([0, d3.max(linepath_index_max_data)])
                .nice()
                .range([area_svg_height - padding.top - padding.bottom, 0]);
        }

        $('.vLine')
            // .css("opacity", "0")
            .hide();

        $('.line_path_tooltips')
            // .css("opacity","0")
            .hide();

        $('.tooltips_tra')
            // .css("opacity","0")
            .hide();

        $('.vLine_add')
            // .css("opacity", "0")
            .hide();

        $('.line_path_tooltips_add')
            // .css("opacity","0")
            .hide();

        $('.tooltips_tra_add')
            // .css("opacity","0")
            .hide();

        $('.vLine_new')
            // .css("opacity", "0")
            .hide();

        $('.line_path_tooltips_new')
            // .css("opacity","0")
            .hide();

        $('.tooltips_tra_new')
            // .css("opacity","0")
            .hide();

        // linepath_index_max_data.push(line_data_max[linepath_index]);
        // console.log(linepath_index_max_data)

        linePath = d3
            .line()
            .x(function (d) {
                return xScale(d[0]);
            })
            .y(function (d) {
                return yScale(d[1]);
            });

        // d3.selectAll(".line_path")
        // 	.style("opacity", "0");

        // d3.selectAll(".line_circle")
        // 	.style("opacity", "0")

        for (var i = 0; i < all_line_data.length; i++) {
            d3
                .select('.line_path_' + i)
                .transition()
                .duration(800)
                .attr('d', function (d) {
                    return linePath(all_line_data[i]);
                })
                .style('opacity', function (d) {
                    if (linepath_index_data.indexOf(i) != -1) {
                        return '1';
                    } else {
                        return '0';
                    }
                });

            for (var j = 0; j < all_line_data[i].length; j++) {
                d3
                    .selectAll('.line_circle_' + i + '_' + j)
                    // .style("opacity","0")
                    .transition()
                    .duration(800)
                    .attr('cx', xScale(all_line_data[i][j][0]))
                    .attr('cy', yScale(all_line_data[i][j][1]))
                    .style('opacity', function (d) {
                        // if (i == linepath_index) {
                        if (linepath_index_data.indexOf(i) != -1) {
                            return '1';
                        } else {
                            return '0';
                        }
                    });
            }
        }

        // yAxis.ticks(6).tickSize(-(svg_width - padding.left - padding.right));

        // d3.selectAll('.y_axis').transition().duration(1000).call(yAxis);

        d3
            .selectAll('.y_axis line')
            .attr('stroke', table_color[6])
            .attr('stroke-opacity', '0.8')
            .attr('stroke-width', '0.3')
            .attr('stroke-dasharray', '3,3')
            .attr('shape-rendering', 'crispEdges');

        // });
    }

    d3.json('./data/china.json', function (d) {
        counties_data = d;
    });

    function oversea_linepath(oversea) {
        // console.log(([totalDate[totalDate.length-1] + '_totalcase']).toString())
        // console.log(ani_time)
        //国家排序
        oversea = oversea.filter(function (d) {
            return d.name != '中国';
        });

        // var oversea_linepath_flag = 0;

        oversea.sort(function (a, b) {
            //  逆序
            return b[ani_time[ani_time.length - 1]] - a[ani_time[ani_time.length - 1]];
        });

        oversea = d3
            .nest()
            .key(function (d) {
                return d.stats_type;
            })
            .entries(oversea);

        // console.log(oversea);

        // console.log(oversea);

        // 海外确诊数据nest
        var oversea_nest_casetotal = d3
            .nest()
            .key(function (d) {
                return d.area;
            })
            .entries(oversea[0].values);

        oversea_nest_casetotal.forEach(function (d) {
            d.casetotal = 0;
            var oversea_nest = d.values;
            oversea_nest_casetotal.forEach(function (a) {
                d.casetotal = d.casetotal + Number(a[ani_time[ani_time.length - 1]]);
            });
        });

        // //大洲排序
        oversea_nest_casetotal.sort(function (a, b) {
            //  逆序
            return b.casetotal - a.casetotal;
        });

        // 海外治愈数据nest
        var oversea_nest_curecase = d3
            .nest()
            .key(function (d) {
                return d.area;
            })
            .entries(oversea[1].values);

        oversea_nest_curecase.forEach(function (d) {
            d.curecase = 0;
            var oversea_nest_curecase = d.values;
            oversea_nest_curecase.forEach(function (a) {
                d.curecase = d.curecase + Number(a[ani_time[ani_time.length - 1]]);
            });
        });

        // //确诊大洲排序
        oversea_nest_casetotal.sort(function (a, b) {
            //  逆序
            return b.casetotal - a.casetotal;
        });

        //治愈大洲排序
        oversea_nest_curecase.sort(function (a, b) {
            //  逆序
            return b.curecase - a.curecase;
        });

        var oversea_linepath_data_casetotal = [];
        var oversea_linepath_data_curecase = [];

        oversea_nest_casetotal.forEach(function (d) {
            var oversea_nest_temp = d.values;

            var oversea_nest_linepath_data_temp_0 = oversea_nest_temp.filter(function (d, i) {
                return i < 5;
            });
            oversea_nest_linepath_data_temp_0.forEach(function (t) {
                var oversea_nest_linepath_data_temp_1 = [];
                var oversea_nest_linepath_data_temp_2 = {};
                var oversea_nest_linepath_data_temp_3 = [];
                for (var i = 0; i < ani_time.length; i++) {
                    // console.log(t[totalDate[i] + '_casetotal'])
                    // if(t[totalDate[i] + '_casetotal'] != 0){
                    if (t[ani_time[i]] != 0) {
                        if (t[ani_time[i - 1]] == 0) {
                            oversea_nest_linepath_data_temp_1.push([i - 1, Number(0)]);
                            oversea_nest_linepath_data_temp_3.push([
                                i - 1,
                                // Math.sqrt(Number(0))
                                // Math.log(Number(0))
                                // Math.pow(Number(0), 0.1)
                                // getBaseLog(10, Number(0))
                                // Math.log10(Number(0))
                                0
                            ]);
                            // console.log(oversea_nest_linepath_data_temp_1);
                        }
                        oversea_nest_linepath_data_temp_1.push([i, Number(t[ani_time[i]])]);
                        oversea_nest_linepath_data_temp_3.push([
                            i,
                            // Math.sqrt(Number(t[ani_time[i]]))
                            // Math.log(Number(t[ani_time[i]]))
                            // Math.pow(Number(t[ani_time[i]]), 0.1)
                            // getBaseLog(10, Number(t[ani_time[i]]))
                            // Math.pow(Number(t[ani_time[i]], 10);
                            Math.log10(Number(t[ani_time[i]]))
                        ]);
                    }
                }
                oversea_nest_linepath_data_temp_2.name = t.name;
                oversea_nest_linepath_data_temp_2.area = t.area;
                oversea_nest_linepath_data_temp_2.casetotal_data = oversea_nest_linepath_data_temp_1;
                oversea_nest_linepath_data_temp_2.casetotal_data_log = oversea_nest_linepath_data_temp_3;
                oversea_linepath_data_casetotal.push(oversea_nest_linepath_data_temp_2);
            });
        });

        //治愈
        oversea_nest_curecase.forEach(function (d) {
            var oversea_nest_temp = d.values;

            var oversea_nest_linepath_data_temp_0 = oversea_nest_temp.filter(function (d, i) {
                return i < 5;
            });

            oversea_nest_linepath_data_temp_0.forEach(function (t) {
                var oversea_nest_linepath_data_temp_1 = [];
                var oversea_nest_linepath_data_temp_2 = {};
                var oversea_nest_linepath_data_temp_3 = [];
                // console.log(t[totalDate[0]])
                for (var i = 0; i < ani_time.length; i++) {
                    // console.log(t[totalDate[i] + '_casetotal'])
                    // if(t[totalDate[i] + '_casetotal'] != 0){
                    // console.log(t[totalDate[i]])
                    if (t[ani_time[i]] != 0) {
                        if (t[ani_time[i - 1]] == 0) {
                            oversea_nest_linepath_data_temp_1.push([i - 1, Number(0)]);
                            oversea_nest_linepath_data_temp_3.push([
                                i - 1,
                                // Math.sqrt(Number(0))
                                // Math.log10(Number(0))
                                0
                            ]);
                        }
                        oversea_nest_linepath_data_temp_1.push([i, Number(t[ani_time[i]])]);
                        oversea_nest_linepath_data_temp_3.push([
                            i,
                            // Math.sqrt(Number(t[ani_time[i]]))
                            Math.log10(Number(t[ani_time[i]]))
                        ]);
                    }
                }
                oversea_nest_linepath_data_temp_2.name = t.name;
                oversea_nest_linepath_data_temp_2.area = t.area;
                oversea_nest_linepath_data_temp_2.curecase_data = oversea_nest_linepath_data_temp_1;
                oversea_nest_linepath_data_temp_2.curecase_data_log = oversea_nest_linepath_data_temp_3;
                if (oversea_nest_linepath_data_temp_1[0] != undefined) {
                    oversea_linepath_data_curecase.push(oversea_nest_linepath_data_temp_2);
                } else {
                    oversea_nest_linepath_data_temp_2.curecase_data = [[0, 0], [0.001, 0]];
                    oversea_nest_linepath_data_temp_2.curecase_data_log = [[0, 0], [0.001, 0]];
                    oversea_linepath_data_curecase.push(oversea_nest_linepath_data_temp_2);
                }
            });
        });

        oversea_linepath_data_casetotal.sort(function (b, a) {
            //  逆序
            return b.casetotal_data[b.casetotal_data.length - 1][1] - a.casetotal_data[a.casetotal_data.length - 1][1];
        });

        oversea_linepath_data_curecase.sort(function (b, a) {
            //  逆序
            return b.curecase_data[b.curecase_data.length - 1][1] - a.curecase_data[a.curecase_data.length - 1][1];
        });

        // console.log(oversea_linepath_data_casetotal);
        // console.log(oversea_nest);

        oversea_linepath_data.push(oversea_linepath_data_casetotal, oversea_linepath_data_curecase);

        // console.log(oversea_linepath_data);
        //Y轴比例

        for (var i = 0; i < oversea_linepath_data_casetotal.length; i++) {
            var curr_linepath_data_max_casetotal_0 = d3.max(oversea_linepath_data_casetotal[i].casetotal_data, function (
                d
            ) {
                return d[1];
            });
            var curr_linepath_data_max_casetotal_1 = d3.max(
                oversea_linepath_data_casetotal[i].casetotal_data_log,
                function (d) {
                    return d[1];
                }
            );
            // console.log(curr_linepath_data_max)
            if (curr_linepath_data_max_casetotal_0 > oversea_linepath_data_max_0[0])
                oversea_linepath_data_max_0[0] = curr_linepath_data_max_casetotal_0;

            if (curr_linepath_data_max_casetotal_1 > oversea_linepath_data_max_0[1])
                oversea_linepath_data_max_0[1] = curr_linepath_data_max_casetotal_1;
        }

        for (var i = 0; i < oversea_linepath_data_curecase.length; i++) {
            var curr_linepath_data_max_curecase_0 = d3.max(oversea_linepath_data_curecase[i].curecase_data, function (
                d
            ) {
                return d[1];
            });
            var curr_linepath_data_max_curecase_1 = d3.max(
                oversea_linepath_data_curecase[i].curecase_data_log,
                function (d) {
                    return d[1];
                }
            );
            // console.log(curr_linepath_data_max)
            if (curr_linepath_data_max_curecase_0 > oversea_linepath_data_max_1[0])
                oversea_linepath_data_max_1[0] = curr_linepath_data_max_curecase_0;

            if (curr_linepath_data_max_curecase_1 > oversea_linepath_data_max_1[1])
                oversea_linepath_data_max_1[1] = curr_linepath_data_max_curecase_1;
        }

        // console.log(oversea_linepath_data_max_0,oversea_linepath_data_max_1);

        padding = {
            left: 50,
            top: 50,
            right: 50,
            bottom: 30
        };

        $('#map_1').append("<div class='oversea_box'></div>");

        $('.oversea_box')
            // .css('position', 'relative')
            // .css('top', function() {
            //  if (UA.isMobile) {
            //    return '-100px';
            //  } else {
            //    return '-190px';
            //  }
            // })
            .css('background', function () {
                if (UA.isMobile) {
                    return '#fff';
                } else {
                    return '#d7e9f9';
                }
            })
            .width(svg_width + 'px')
            .css('margin', '30px auto');

        // var oversea_svg = d3
        // 	.select('.oversea_box')
        // 	.append('svg')
        // 	.attr('class', 'oversea_linepath_svg')
        // 	.attr('width', svg_width + 'px')
        // 	.attr('height', area_svg_height * 1.5 + 'px');

        // var oversea_axis_g = oversea_svg.append('g').attr('class', 'oversea_axis_g');

        var xScale_oversea;

        yScale_oversea_0 = d3
            .scaleLinear()
            .domain([0, oversea_linepath_data_max_0[0]])
            .nice()
            .range([area_svg_height * 1.5 - padding.top - padding.bottom, 0]);

        yScale_oversea_1 = d3
            .scaleLinear()
            .domain([0, oversea_linepath_data_max_0[1]])
            .nice()
            .range([area_svg_height * 1.5 - padding.top - padding.bottom, 0]);

        yAxis_oversea_0 = d3.axisLeft(yScale_oversea_0).ticks(8).tickSize(-(svg_width - padding.left - padding.right));

        yAxis_oversea_1 = d3
            .axisLeft(yScale_oversea_1)
            // .ticks(4)
            .ticks(Math.round(oversea_linepath_data_max_0[1]))
            .tickSize(-(svg_width - padding.left - padding.right))
            .tickFormat(function (d) {
                // return Math.pow(d, 2);
                // return Math.pow(d, 10);

                // if(Math.pow(10,d)== 1){
                //   return ""
                // }else{
                return Math.pow(10, d);
                // }
            });

        // var yGrooup = oversea_axis_g
        // 	.append('g')
        // 	.attr('class', 'oversea_axis y_oversea_axis')
        // 	.attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
        // 	// .attr('text-anchor', 'end')
        // 	.call(yAxis_oversea_0);

        xScale_oversea = d3
            .scaleLinear()
            .domain([0, totalDate.length - 1]) // .nice()
            .range([0, svg_width - padding.left - padding.right]);

        var xAxis = d3.axisBottom(xScale_oversea).ticks(totalDate.length).tickFormat(function (d, a) {
            if (a % Number(Math.ceil(totalDate.length / 10)) == 0) {
                return Number(totalDate[a].split('_')[0]) + '/' + Number(Number(totalDate[a].split('_')[1]));
            } else {
                return '';
            }
        });

        // var xGrooup = oversea_axis_g
        // 	.append('g')
        // 	.attr('class', 'oversea_axis x_oversea_axis')
        // 	.attr('transform', 'translate(' + padding.left + ',' + (area_svg_height * 1.5 - padding.bottom) + ')')
        // 	.call(xAxis);

        // oversea_axis_g.selectAll('.oversea_axis path').attr('stroke', 'none').attr('shape-rendering', 'crispEdges');

        // oversea_axis_g
        // 	.selectAll('.y_oversea_axis line')
        // 	.attr('stroke', table_color[6])
        // 	.attr('stroke-opacity', '0.8')
        // 	.attr('stroke-width', '0.3')
        // 	.attr('stroke-dasharray', '3,3')
        // 	.attr('shape-rendering', 'crispEdges');

        // oversea_axis_g
        // 	.selectAll('.x_oversea_axis line')
        // 	// .attr("stroke","none")
        // 	.attr('stroke', table_color[6])
        // 	.attr('stroke-opacity', '1')
        // 	.attr('stroke-width', '1')
        // 	.attr('y2', '3')
        // 	.attr('shape-rendering', 'crispEdges');

        // oversea_axis_g
        // 	.append('line')
        // 	.attr('x1', padding.left)
        // 	.attr('x2', svg_width - padding.right)
        // 	.attr('y1', area_svg_height * 1.5 - padding.bottom)
        // 	.attr('y2', area_svg_height * 1.5 - padding.bottom)
        // 	.attr('stroke', table_color[6])
        // 	.attr('fill', table_color[6])
        // 	.attr('stroke-opacity', '1')
        // 	// .attr("stroke-width","1.5")
        // 	.attr('stroke-width', '1.2');

        // oversea_axis_g.selectAll('text').style('font-size', '10px');

        oversea_linePath_0 = d3
            .line()
            .x(function (d) {
                return xScale_oversea(d[0]);
            })
            .y(function (d) {
                return yScale_oversea_0(d[1]);
            });

        oversea_linePath_1 = d3
            .line()
            .x(function (d) {
                return xScale_oversea(d[0]);
            })
            .y(function (d) {
                return yScale_oversea_1(d[1]);
            });

        // var oversea_casetotal_linepath_g = oversea_svg
        // 	.append('g')
        // 	.attr('class', 'oversea_casetotal_linepath_g')
        // 	.selectAll('.oversea_casetotal_line')
        // 	.data(oversea_linepath_data[0])
        // 	.enter()
        // 	.append('path')
        // 	.attr('class', function(d, i) {
        // 		return 'oversea_casetotal_line oversea_casetotal_line_' + i;
        // 	})
        // 	.attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
        // 	.attr('d', function(d) {
        // 		return oversea_linePath_0(d.casetotal_data);
        // 	})
        // 	.attr('fill', 'none')
        // 	// .attr('stroke', table_color[2])
        // 	.attr('stroke', function(d, i) {
        // 		// if(i < 5){
        // 		if (i > oversea_linepath_data[0].length - 7) {
        // 			var stroke_color_data = d.casetotal_data[d.casetotal_data.length - 1][1];
        // 			if (stroke_color_data == 0) {
        // 				return '#EEF8FF';
        // 			} else if (stroke_color_data >= 1 && stroke_color_data <= 9) {
        // 				return '#ffffb2';
        // 			} else if (stroke_color_data >= 10 && stroke_color_data <= 19) {
        // 				return '#fed976';
        // 			} else if (stroke_color_data >= 20 && stroke_color_data <= 99) {
        // 				return '#feb24c';
        // 			} else if (stroke_color_data >= 100 && stroke_color_data <= 199) {
        // 				return '#fd8d3c';
        // 			} else if (stroke_color_data >= 200 && stroke_color_data <= 499) {
        // 				return '#FC4E2B';
        // 			} else if (stroke_color_data >= 500 && stroke_color_data <= 999) {
        // 				return '#E31B1B';
        // 			} else if (stroke_color_data >= 1000 && stroke_color_data <= 4999) {
        // 				return '#B10026';
        // 			} else if (stroke_color_data >= 5000) {
        // 				return '#560021';
        // 			}
        // 		} else {
        // 			return table_color[10];
        // 		}
        // 	})
        // 	.attr('stroke-opacity', '0.7')
        // 	// .attr("stroke-width", "1.5px")
        // 	.attr('stroke-width', function(d) {
        // 		if (UA.isMobile) {
        // 			// return "1.6px"
        // 			return '2px';
        // 		} else {
        // 			return '2px';
        // 		}
        // 	})
        // 	.attr('stroke-linecap', 'round');

        var curr_oversea_casetotal_name_y = [[6, 0, 0]];

        // var oversea_casetotal_linepath_name_g = oversea_svg
        // 	.append('g')
        // 	.attr('class', 'oversea_casetotal_name_g')
        // 	.selectAll('.oversea_casetotal_name')
        // 	.data(oversea_linepath_data[0])
        // 	.enter()
        // 	.append('text')
        // 	.attr('class', 'oversea_casetotal_name')
        // 	.attr('transform', 'translate(' + padding.left + ',' + padding.top + ')')
        // 	.attr('x', svg_width - padding.left - padding.right + 5)
        // 	.attr('y', function(d) {
        // 		// console.log(d.casetotal_data[d.casetotal_data.length-1][1])
        // 		return yScale_oversea_0(d.casetotal_data[d.casetotal_data.length - 1][1]);
        // 	})
        // 	.attr('dy', '0.4em')
        // 	// .attr("font-size", table_cities_font_size - 2 + "px")
        // 	.attr('font-size', 8 + 'px')
        // 	.text(function(d) {
        // 		return d.name;
        // 	})
        // 	.style('opacity', function(d, i) {
        // 		if (i > oversea_linepath_data[0].length - 7) {
        // 			var oversea_casetotal_name_y_temp = [
        // 				oversea_linepath_data[0].length - i,
        // 				yScale_oversea_0(d.casetotal_data[d.casetotal_data.length - 1][1]),
        // 				yScale_oversea_0(d.casetotal_data[d.casetotal_data.length - 1][1]) -
        // 					curr_oversea_casetotal_name_y[curr_oversea_casetotal_name_y.length - 1][1],
        // 				d.name
        // 			];
        // 			curr_oversea_casetotal_name_y.push(oversea_casetotal_name_y_temp);
        // 			return 1;
        // 		} else {
        // 			return 0;
        // 		}
        // 	})
        // 	.attr('class', function(d, i) {
        // 		if (i > oversea_linepath_data[0].length - 7) {
        // 			return (
        // 				'oversea_casetotal_name oversea_casetotal_name_special oversea_casetotal_name_special_' +
        // 				(oversea_linepath_data[0].length - i)
        // 			);
        // 		} else {
        // 			return 'oversea_casetotal_name';
        // 		}
        // 	});

        setTimeout(oversea_casetotal_name_change(curr_oversea_casetotal_name_y), 10);

        //按钮切换
        // $('.oversea_box').append(
        // 	"<div class='oversea_linepath_title'></div><div class='oversea_linepath_legend'></div><div class='oversea_linepath_tl_box'></div>"
        // );

        // console.log(table_head_font_size);

        $('.oversea_linepath_title')
            .height('30px')
            .css('position', 'absolute')
            .text('海外确诊趋势')
            // .css('font-size', table_head_font_size)
            .css('font-size', '14px')
            // .css('color', table_color[2])
            .css('color', '#202020')
            .css('font-weight', 'bold')
            .css('top', 15 + 'px')
            // .css("top",padding.top - 15 )
            .css('left', 20 + 'px');

        $('.oversea_linepath_legend')
            .css('position', 'absolute')
            // .text('单位：例')
            .text('(例)')
            // .css('padding-left', '10px')
            .css('font-size', table_cities_font_size)
            .css('color', table_color[0])
            .css('font-weight', '300')
            // .css("top",60+"px")
            // .css('top', 30 + 'px')
            .css('top', 17 + 'px')
            // .css('left', padding.left + 'px');
            .css('left', $('.oversea_linepath_title').width() + 26 + 'px');

        $('.oversea_linepath_tl_box').append(
            "<div class='oversea_linepath_tl oversea_linepath_tl_0'>常规坐标</div><div class='oversea_linepath_tl oversea_linepath_tl_1'>对数坐标</div>"
        );

        $('.oversea_linepath_tl_box')
            .width('150px')
            .height('20px')
            .css('position', 'absolute')
            .css('top', 15 + 'px')
            // .css('right', padding.right - 5)
            .css('right', padding.right / 2);

        d3
            .selectAll('.oversea_linepath_tl')
            .style('line-height', '20px')
            .style('font-size', '10px')
            .style('width', '63px')
            .style('margin', '0px 0px 0px 10px')
            .style('text-align', 'center')
            .style('background', function (d, i) {
                // return table_color[2];
                return table_color[4];
            })
            .style('color', '#fff')
            .style('border', function (d, i) {
                // return '1px solid ' + table_color[2];
                return '1px solid ' + table_color[4];
            })
            .style('border-radius', '10px')
            .style('display', 'inline-block');

        d3
            .selectAll('.oversea_linepath_tl_1')
            .style('background', '#fff')
            .style('color', table_color[9])
            .style('border', '1px solid ' + table_color[9]);

        $(document).on(method, '.oversea_linepath_tl', function () {
            // console.log("dianji");
            var oversea_linepath_tl_index = $(this).attr('class').split('_')[5];
            // console.log(oversea_linepath_tl_index);

            $('.oversea_linepath_tl')
                .css('background', '#fff')
                .css('color', table_color[9])
                .css('border', '1px solid ' + table_color[9]);

            $('.oversea_linepath_tl_' + oversea_linepath_tl_index)
                // .css('background',table_color[2+oversea_linepath_flag])
                .css('background', table_color[4])
                .css('color', '#fff')
                // .css("border", "1px solid " + table_color[2 + oversea_linepath_flag])
                .css('border', '1px solid ' + table_color[4]);

            var curr_oversea_casetotal_name_y = [[6, 0, 0]];

            if (oversea_linepath_tl_index == 1) {
                // console.log("bian")
                // $(".oversea_hand").hide();
                d3
                    .selectAll('.oversea_casetotal_line')
                    .data(oversea_linepath_data[oversea_linepath_flag])
                    .transition()
                    .duration(800)
                    .attr('d', function (d) {
                        if (oversea_linepath_flag == 0) {
                            return oversea_linePath_1(d.casetotal_data_log);
                        } else {
                            return oversea_linePath_1(d.curecase_data_log);
                        }
                    });

                d3.selectAll('.y_oversea_axis').transition().duration(600).call(yAxis_oversea_1);

                d3
                    .selectAll('.oversea_casetotal_name')
                    .data(oversea_linepath_data[oversea_linepath_flag])
                    .transition()
                    .duration(800)
                    .attr('y', function (d) {
                        // console.log(d.casetotal_data[d.casetotal_data.length-1][1])
                        if (oversea_linepath_flag == 0) {
                            return yScale_oversea_1(d.casetotal_data_log[d.casetotal_data_log.length - 1][1]);
                        } else {
                            return yScale_oversea_1(d.curecase_data_log[d.curecase_data_log.length - 1][1]);
                        }
                    })
                    .style('opacity', function (d, i) {
                        if (i > oversea_linepath_data[oversea_linepath_flag].length - 7) {
                            if (oversea_linepath_flag == 0) {
                                var oversea_casetotal_name_y_temp = [
                                    oversea_linepath_data[oversea_linepath_flag].length - i,
                                    yScale_oversea_1(d.casetotal_data_log[d.casetotal_data_log.length - 1][1]),
                                    yScale_oversea_1(d.casetotal_data_log[d.casetotal_data_log.length - 1][1]) -
                                    curr_oversea_casetotal_name_y[curr_oversea_casetotal_name_y.length - 1][1],
                                    d.name
                                ];
                            } else {
                                var oversea_casetotal_name_y_temp = [
                                    oversea_linepath_data[oversea_linepath_flag].length - i,
                                    yScale_oversea_1(d.curecase_data_log[d.curecase_data_log.length - 1][1]),
                                    yScale_oversea_1(d.curecase_data_log[d.curecase_data_log.length - 1][1]) -
                                    curr_oversea_casetotal_name_y[curr_oversea_casetotal_name_y.length - 1][1],
                                    d.name
                                ];
                            }

                            curr_oversea_casetotal_name_y.push(oversea_casetotal_name_y_temp);

                            return 1;
                        } else {
                            return 0;
                        }
                    })
                    .attr('class', function (d, i) {
                        if (i > oversea_linepath_data[oversea_linepath_flag].length - 7) {
                            return (
                                'oversea_casetotal_name oversea_casetotal_name_special oversea_casetotal_name_special_' +
                                (oversea_linepath_data[oversea_linepath_flag].length - i)
                            );
                        } else {
                            return 'oversea_casetotal_name';
                        }
                    });
            } else {
                d3
                    .selectAll('.oversea_casetotal_line')
                    .data(oversea_linepath_data[oversea_linepath_flag])
                    .transition()
                    .duration(800)
                    .attr('d', function (d) {
                        // return oversea_linePath_0(d.casetotal_data);
                        if (oversea_linepath_flag == 0) {
                            return oversea_linePath_0(d.casetotal_data);
                        } else {
                            return oversea_linePath_0(d.curecase_data);
                        }
                    });

                d3.selectAll('.y_oversea_axis').transition().duration(600).call(yAxis_oversea_0);

                d3
                    .selectAll('.oversea_casetotal_name')
                    .data(oversea_linepath_data[oversea_linepath_flag])
                    .transition()
                    .duration(800)
                    .attr('y', function (d) {
                        // console.log(d.casetotal_data[d.casetotal_data.length-1][1])
                        // return yScale_oversea_0(d.casetotal_data[d.casetotal_data.length-1][1])
                        if (oversea_linepath_flag == 0) {
                            return yScale_oversea_0(d.casetotal_data[d.casetotal_data.length - 1][1]);
                        } else {
                            return yScale_oversea_0(d.curecase_data[d.curecase_data.length - 1][1]);
                        }
                    })
                    .style('opacity', function (d, i) {
                        if (i > oversea_linepath_data[oversea_linepath_flag].length - 7) {
                            if (oversea_linepath_flag == 0) {
                                var oversea_casetotal_name_y_temp = [
                                    oversea_linepath_data[oversea_linepath_flag].length - i,
                                    yScale_oversea_0(d.casetotal_data[d.casetotal_data.length - 1][1]),
                                    yScale_oversea_0(d.casetotal_data[d.casetotal_data.length - 1][1]) -
                                    curr_oversea_casetotal_name_y[curr_oversea_casetotal_name_y.length - 1][1],
                                    d.name
                                ];
                            } else {
                                var oversea_casetotal_name_y_temp = [
                                    oversea_linepath_data[oversea_linepath_flag].length - i,
                                    yScale_oversea_0(d.curecase_data[d.curecase_data.length - 1][1]),
                                    yScale_oversea_0(d.curecase_data[d.curecase_data.length - 1][1]) -
                                    curr_oversea_casetotal_name_y[curr_oversea_casetotal_name_y.length - 1][1],
                                    d.name
                                ];
                            }

                            curr_oversea_casetotal_name_y.push(oversea_casetotal_name_y_temp);

                            return 1;
                        } else {
                            return 0;
                        }
                    })
                    .attr('class', function (d, i) {
                        if (i > oversea_linepath_data[oversea_linepath_flag].length - 7) {
                            return (
                                'oversea_casetotal_name oversea_casetotal_name_special oversea_casetotal_name_special_' +
                                (oversea_linepath_data[oversea_linepath_flag].length - i)
                            );
                        } else {
                            return 'oversea_casetotal_name';
                        }
                    });

                // oversea_casetotal_name_change(curr_oversea_casetotal_name_y);
            }

            setTimeout(oversea_casetotal_name_change(curr_oversea_casetotal_name_y), 10);
            // setTimeout(oversea_casetotal_name_change(curr_oversea_casetotal_name_y),900);

            d3
                .selectAll('.y_oversea_axis line')
                .attr('stroke', table_color[6])
                .attr('stroke-opacity', '0.8')
                .attr('stroke-width', '0.3')
                .attr('stroke-dasharray', '3,3')
                .attr('shape-rendering', 'crispEdges');

            $('.line_path_tooltips_oversea').css('z-index', '-1').hide();
            $('.tooltips_tra_oversea').css('z-index', '-1').hide();

            d3
                .selectAll('.oversea_casetotal_line')
                .style('stroke', function (d, i) {
                    if (oversea_linepath_flag == 0) {
                        if (i > oversea_linepath_data[0].length - 7) {
                            var stroke_color_data = d.casetotal_data[d.casetotal_data.length - 1][1];
                            if (stroke_color_data == 0) {
                                return '#EEF8FF';
                            } else if (stroke_color_data >= 1 && stroke_color_data <= 9) {
                                return '#ffffb2';
                            } else if (stroke_color_data >= 10 && stroke_color_data <= 19) {
                                return '#fed976';
                            } else if (stroke_color_data >= 20 && stroke_color_data <= 99) {
                                return '#feb24c';
                            } else if (stroke_color_data >= 100 && stroke_color_data <= 199) {
                                return '#fd8d3c';
                            } else if (stroke_color_data >= 200 && stroke_color_data <= 499) {
                                return '#FC4E2B';
                            } else if (stroke_color_data >= 500 && stroke_color_data <= 999) {
                                return '#E31B1B';
                            } else if (stroke_color_data >= 1000 && stroke_color_data <= 4999) {
                                return '#B10026';
                            } else if (stroke_color_data >= 5000) {
                                return '#560021';
                            }
                        } else {
                            return table_color[10];
                        }
                    } else {
                        if (
                            i == oversea_linepath_data[oversea_linepath_flag].length - 6 ||
                            i == oversea_linepath_data[oversea_linepath_flag].length - 5
                        ) {
                            return '#78c679';
                        } else if (
                            i == oversea_linepath_data[oversea_linepath_flag].length - 4 ||
                            i == oversea_linepath_data[oversea_linepath_flag].length - 3
                        ) {
                            return '#31a354';
                        } else if (
                            i == oversea_linepath_data[oversea_linepath_flag].length - 1 ||
                            i == oversea_linepath_data[oversea_linepath_flag].length - 2
                        ) {
                            return '#006837';
                        } else {
                            return table_color[10];
                        }
                    }
                })
                .style('stroke-opacity', '0.7');
        });

        //点击事件
        $('.oversea_box').append(
            "<div class='line_path_tooltips_oversea'><div class='tooltips_top_oversea'></div><div class='tooltips_bottom_oversea'></div></div><div class='tooltips_tra_oversea'></div>"
        );

        d3
            .selectAll('.oversea_casetotal_line')
            .on('mouseover', function (d) {
                //边距
                $('.oversea_hand').hide();
                var mouseX = d3.mouse(this)[0] + 50;
                var mouseY = d3.mouse(this)[1] + 50;
                var oversea_hover_linepath_index = Number($(this).attr('class').split('_')[5]);
                d3.selectAll('.oversea_casetotal_line').style('stroke', table_color[10]).style('stroke-opacity', '0.6');

                d3
                    .select(this)
                    .style('stroke', function (d) {
                        if (oversea_linepath_flag == 0) {
                            return '#560021';
                        } else {
                            return '#006837';
                        }
                    })
                    .style('stroke-opacity', '1');
                if (oversea_linepath_flag == 0) {
                    $('.tooltips_top_oversea').text(oversea_linepath_data_casetotal[oversea_hover_linepath_index].name);
                } else {
                    $('.tooltips_top_oversea').text(oversea_linepath_data_curecase[oversea_hover_linepath_index].name);
                }

                $('.line_path_tooltips_oversea')
                    .css('left', mouseX - $('.line_path_tooltips_oversea').width() / 2 - 2)
                    .css(
                        'top',
                        mouseY - $('.line_path_tooltips_oversea').height() - $('.tooltips_tra_oversea').height() - 1
                    )
                    .css('z-index', '1')
                    .show();
                $('.tooltips_tra_oversea')
                    .css('left', mouseX - $('.line_path_tooltips_oversea').width() / 2)
                    .css('top', mouseY - $('.tooltips_tra_oversea').height())
                    .css('z-index', '1')
                    .show();
            })
            .on('mouseout', function (d) {
                $('.line_path_tooltips_oversea').css('z-index', '-1').hide();
                $('.tooltips_tra_oversea').css('z-index', '-1').hide();

                d3
                    .selectAll('.oversea_casetotal_line')
                    .style('stroke', function (d, i) {
                        if (oversea_linepath_flag == 0) {
                            if (i > oversea_linepath_data[0].length - 7) {
                                var stroke_color_data = d.casetotal_data[d.casetotal_data.length - 1][1];
                                if (stroke_color_data == 0) {
                                    return '#EEF8FF';
                                } else if (stroke_color_data >= 1 && stroke_color_data <= 9) {
                                    return '#ffffb2';
                                } else if (stroke_color_data >= 10 && stroke_color_data <= 19) {
                                    return '#fed976';
                                } else if (stroke_color_data >= 20 && stroke_color_data <= 99) {
                                    return '#feb24c';
                                } else if (stroke_color_data >= 100 && stroke_color_data <= 199) {
                                    return '#fd8d3c';
                                } else if (stroke_color_data >= 200 && stroke_color_data <= 499) {
                                    return '#FC4E2B';
                                } else if (stroke_color_data >= 500 && stroke_color_data <= 999) {
                                    return '#E31B1B';
                                } else if (stroke_color_data >= 1000 && stroke_color_data <= 4999) {
                                    return '#B10026';
                                } else if (stroke_color_data >= 5000) {
                                    return '#560021';
                                }
                            } else {
                                return table_color[10];
                            }
                        } else {
                            if (
                                i == oversea_linepath_data[oversea_linepath_flag].length - 6 ||
                                i == oversea_linepath_data[oversea_linepath_flag].length - 5
                            ) {
                                return '#78c679';
                            } else if (
                                i == oversea_linepath_data[oversea_linepath_flag].length - 4 ||
                                i == oversea_linepath_data[oversea_linepath_flag].length - 3
                            ) {
                                return '#31a354';
                            } else if (
                                i == oversea_linepath_data[oversea_linepath_flag].length - 1 ||
                                i == oversea_linepath_data[oversea_linepath_flag].length - 2
                            ) {
                                return '#006837';
                            } else {
                                return table_color[10];
                            }
                        }
                    })
                    .style('stroke-opacity', '0.7');
            })
            .on('touchstart', function (d) {
                $('.oversea_hand').hide();
                var mouseX = d3.mouse(this)[0] + 40;
                var mouseY = d3.mouse(this)[1] + 50;
                var oversea_hover_linepath_index = Number($(this).attr('class').split('_')[5]);
                d3.selectAll('.oversea_casetotal_line').style('stroke', table_color[10]).style('stroke-opacity', '0.6');
                d3
                    .select(this)
                    .style('stroke', function (d) {
                        if (oversea_linepath_flag == 0) {
                            return '#560021';
                        } else {
                            return '#006837';
                        }
                    })
                    .style('stroke-opacity', '1');
                if (oversea_linepath_flag == 0) {
                    $('.tooltips_top_oversea').text(oversea_linepath_data_casetotal[oversea_hover_linepath_index].name);
                } else {
                    $('.tooltips_top_oversea').text(oversea_linepath_data_curecase[oversea_hover_linepath_index].name);
                }

                $('.line_path_tooltips_oversea')
                    .css('left', mouseX - $('.line_path_tooltips_oversea').width() / 2 - 2)
                    .css(
                        'top',
                        mouseY - $('.line_path_tooltips_oversea').height() - $('.tooltips_tra_oversea').height() - 1
                    )
                    .css('z-index', '1')
                    .show();
                $('.tooltips_tra_oversea')
                    .css('left', mouseX - $('.line_path_tooltips_oversea').width() / 2)
                    .css('top', mouseY - $('.tooltips_tra_oversea').height())
                    .css('z-index', '1')
                    .show();
            });

        d3.select('.oversea_linepath_svg').on('touchstart', function (d) {
            $('.line_path_tooltips_oversea').css('z-index', '-1').hide();
            $('.tooltips_tra_oversea').css('z-index', '-1').hide();

            d3
                .selectAll('.oversea_casetotal_line')
                .style('stroke', function (d, i) {
                    if (oversea_linepath_flag == 0) {
                        if (i > oversea_linepath_data[0].length - 7) {
                            var stroke_color_data = d.casetotal_data[d.casetotal_data.length - 1][1];
                            if (stroke_color_data == 0) {
                                return '#EEF8FF';
                            } else if (stroke_color_data >= 1 && stroke_color_data <= 9) {
                                return '#ffffb2';
                            } else if (stroke_color_data >= 10 && stroke_color_data <= 19) {
                                return '#fed976';
                            } else if (stroke_color_data >= 20 && stroke_color_data <= 99) {
                                return '#feb24c';
                            } else if (stroke_color_data >= 100 && stroke_color_data <= 199) {
                                return '#fd8d3c';
                            } else if (stroke_color_data >= 200 && stroke_color_data <= 499) {
                                return '#FC4E2B';
                            } else if (stroke_color_data >= 500 && stroke_color_data <= 999) {
                                return '#E31B1B';
                            } else if (stroke_color_data >= 1000 && stroke_color_data <= 4999) {
                                return '#B10026';
                            } else if (stroke_color_data >= 5000) {
                                return '#560021';
                            }
                        } else {
                            return table_color[10];
                        }
                    } else {
                        if (
                            i == oversea_linepath_data[oversea_linepath_flag].length - 6 ||
                            i == oversea_linepath_data[oversea_linepath_flag].length - 5
                        ) {
                            return '#78c679';
                        } else if (
                            i == oversea_linepath_data[oversea_linepath_flag].length - 4 ||
                            i == oversea_linepath_data[oversea_linepath_flag].length - 3
                        ) {
                            return '#31a354';
                        } else if (
                            i == oversea_linepath_data[oversea_linepath_flag].length - 1 ||
                            i == oversea_linepath_data[oversea_linepath_flag].length - 2
                        ) {
                            return '#006837';
                        } else {
                            return table_color[10];
                        }
                    }
                })
                .style('stroke-opacity', '0.7');
        });

        $('.line_path_tooltips_oversea')
            .css('width', '62px')
            .css('position', 'relative')
            .css('position', 'absolute')
            .css('top', '0px')
            .css('left', '0px')
            .css('z-index', '-1')
            // .css("opacity",0)
            .css('border', '1px solid ' + table_color[8])
            .css('border-radius', '5px')
            .css('overflow', 'hidden')
            .hide();

        $('.tooltips_top_oversea')
            .css('line-height', '20px')
            .css('color', table_color[8])
            .height('20px')
            .css('text-align', 'center')
            // .css("padding", "0px 10px")
            .css('font-size', table_cities_font_size + 'px')
            .css('background', '#fff');

        $('.tooltips_tra_oversea')
            .css('min-width', '60px')
            .height('8px')
            // .css("opacity",0)
            .css('background', 'url(./assets/linepath_tips.png)')
            .css('background-position', 'center')
            // .css("background-color","#fff")
            .css('background-size', 'auto 100%')
            .css('background-repeat', 'no-repeat')
            .css('position', 'absolute')
            .css('z-index', '-1')
            .css('top', $('.line_path_tooltips_oversea').height() + 'px')
            .css('left', '0px')
            .hide();

        $('.oversea_box').append("<div class='oversea_hand'></div>");
    }

    function overseaYscale_change(a) {
        $('.oversea_hand').show();

        $('.line_path_tooltips_oversea').css('z-index', '-1').hide();
        $('.tooltips_tra_oversea').css('z-index', '-1').hide();

        oversea_linepath_flag = a;
        oversea_linepath_tl_index = 0;
        var curr_oversea_casetotal_name_y = [[6, 0, 0]];
        if (oversea_linepath_flag == 0) {
            $('.oversea_linepath_title').text('海外确诊趋势');
            yScale_oversea_0.domain([0, oversea_linepath_data_max_0[0]]).nice();

            yScale_oversea_1.domain([0, oversea_linepath_data_max_0[1]]).nice();

            yAxis_oversea_1.ticks(Math.round(oversea_linepath_data_max_0[1]));

            d3
                .selectAll('.oversea_casetotal_line')
                .data(oversea_linepath_data[oversea_linepath_flag])
                .transition()
                .duration(800)
                // .attr('stroke', table_color[2+oversea_linepath_flag])
                .style('stroke', function (d, i) {
                    // if(i < 5){
                    if (i > oversea_linepath_data[oversea_linepath_flag].length - 7) {
                        var stroke_color_data = d.casetotal_data[d.casetotal_data.length - 1][1];
                        if (stroke_color_data == 0) {
                            return '#EEF8FF';
                        } else if (stroke_color_data >= 1 && stroke_color_data <= 9) {
                            return '#ffffb2';
                        } else if (stroke_color_data >= 10 && stroke_color_data <= 19) {
                            return '#fed976';
                        } else if (stroke_color_data >= 20 && stroke_color_data <= 99) {
                            return '#feb24c';
                        } else if (stroke_color_data >= 100 && stroke_color_data <= 199) {
                            return '#fd8d3c';
                        } else if (stroke_color_data >= 200 && stroke_color_data <= 499) {
                            return '#FC4E2B';
                        } else if (stroke_color_data >= 500 && stroke_color_data <= 999) {
                            return '#E31B1B';
                        } else if (stroke_color_data >= 1000 && stroke_color_data <= 4999) {
                            return '#B10026';
                        } else if (stroke_color_data >= 5000) {
                            return '#560021';
                        }
                    } else {
                        return table_color[10];
                    }
                })
                .style('stroke-opacity', '0.7')
                .attr('d', function (d) {
                    return oversea_linePath_0(d.casetotal_data);
                });

            d3.selectAll('.y_oversea_axis').transition().duration(600).call(yAxis_oversea_0);

            d3
                .selectAll('.oversea_casetotal_name')
                .data(oversea_linepath_data[oversea_linepath_flag])
                .transition()
                .duration(800)
                .text(function (d) {
                    return d.name;
                })
                .attr('y', function (d) {
                    // console.log(d.casetotal_data[d.casetotal_data.length-1][1])
                    return yScale_oversea_0(d.casetotal_data[d.casetotal_data.length - 1][1]);
                })
                // .style("opacity", function(d, i) {
                //   if (i > oversea_linepath_data[oversea_linepath_flag].length - 6) {
                //     return 1;
                //   } else {
                //     return 0;
                //   }
                // });
                .style('opacity', function (d, i) {
                    if (i > oversea_linepath_data[oversea_linepath_flag].length - 7) {
                        var oversea_casetotal_name_y_temp = [
                            oversea_linepath_data[oversea_linepath_flag].length - i,
                            yScale_oversea_0(d.casetotal_data[d.casetotal_data.length - 1][1]),
                            yScale_oversea_0(d.casetotal_data[d.casetotal_data.length - 1][1]) -
                            curr_oversea_casetotal_name_y[curr_oversea_casetotal_name_y.length - 1][1],
                            d.name
                        ];
                        curr_oversea_casetotal_name_y.push(oversea_casetotal_name_y_temp);
                        return 1;
                    } else {
                        return 0;
                    }
                })
                .attr('class', function (d, i) {
                    if (i > oversea_linepath_data[oversea_linepath_flag].length - 7) {
                        return (
                            'oversea_casetotal_name oversea_casetotal_name_special oversea_casetotal_name_special_' +
                            (oversea_linepath_data[oversea_linepath_flag].length - i)
                        );
                    } else {
                        return 'oversea_casetotal_name';
                    }
                });
        } else {
            // curr_oversea_casetotal_name_y = [[6, 0, 0]];
            $('.oversea_linepath_title').text('海外治愈趋势');

            yScale_oversea_0.domain([0, oversea_linepath_data_max_1[0]]).nice();

            yScale_oversea_1.domain([0, oversea_linepath_data_max_1[1]]).nice();

            // console.log(oversea_linepath_data_max_1[1]);

            yAxis_oversea_1.ticks(Math.round(oversea_linepath_data_max_1[1]));

            d3
                .selectAll('.oversea_casetotal_line')
                .data(oversea_linepath_data[oversea_linepath_flag])
                .transition()
                .duration(800)
                // .attr('stroke', table_color[2+oversea_linepath_flag])
                .style('stroke', function (d, i) {
                    if (
                        i == oversea_linepath_data[oversea_linepath_flag].length - 6 ||
                        i == oversea_linepath_data[oversea_linepath_flag].length - 5
                    ) {
                        return '#78c679';
                    } else if (
                        i == oversea_linepath_data[oversea_linepath_flag].length - 4 ||
                        i == oversea_linepath_data[oversea_linepath_flag].length - 3
                    ) {
                        return '#31a354';
                    } else if (
                        i == oversea_linepath_data[oversea_linepath_flag].length - 1 ||
                        i == oversea_linepath_data[oversea_linepath_flag].length - 2
                    ) {
                        return '#006837';
                    } else {
                        return table_color[10];
                    }
                })
                .style('stroke-opacity', '0.7')
                .attr('d', function (d) {
                    return oversea_linePath_0(d.curecase_data);
                });

            d3.selectAll('.y_oversea_axis').transition().duration(600).call(yAxis_oversea_0);

            d3
                .selectAll('.oversea_casetotal_name')
                .data(oversea_linepath_data[oversea_linepath_flag])
                .transition()
                .duration(800)
                .text(function (d) {
                    return d.name;
                })
                .attr('y', function (d) {
                    // console.log(d.casetotal_data[d.casetotal_data.length-1][1])
                    return yScale_oversea_0(d.curecase_data[d.curecase_data.length - 1][1]);
                })
                .style('opacity', function (d, i) {
                    if (i > oversea_linepath_data[oversea_linepath_flag].length - 7) {
                        var oversea_casetotal_name_y_temp = [
                            oversea_linepath_data[oversea_linepath_flag].length - i,
                            yScale_oversea_0(d.curecase_data[d.curecase_data.length - 1][1]),
                            yScale_oversea_0(d.curecase_data[d.curecase_data.length - 1][1]) -
                            curr_oversea_casetotal_name_y[curr_oversea_casetotal_name_y.length - 1][1],
                            d.name
                        ];
                        curr_oversea_casetotal_name_y.push(oversea_casetotal_name_y_temp);
                        return 1;
                    } else {
                        return 0;
                    }
                })
                .attr('class', function (d, i) {
                    if (i > oversea_linepath_data[oversea_linepath_flag].length - 7) {
                        return (
                            'oversea_casetotal_name oversea_casetotal_name_special oversea_casetotal_name_special_' +
                            (oversea_linepath_data[oversea_linepath_flag].length - i)
                        );
                    } else {
                        return 'oversea_casetotal_name';
                    }
                });

            // setTimeout(oversea_casetotal_name_change(curr_oversea_casetotal_name_y),800);
        }
        setTimeout(oversea_casetotal_name_change(curr_oversea_casetotal_name_y), 10);

        $('.oversea_linepath_tl')
            .css('background', '#fff')
            .css('color', table_color[9])
            .css('border', '1px solid ' + table_color[9]);

        $('.oversea_linepath_tl_' + oversea_linepath_tl_index)
            .css('background', table_color[4])
            .css('color', '#fff')
            .css('border', '1px solid ' + table_color[4]);

        // d3.selectAll(".y_oversea_axis")
        //   .transition()
        //   .duration(1000)
        //   .call(yAxis_oversea_0);

        d3
            .selectAll('.y_oversea_axis line')
            .attr('stroke', table_color[6])
            .attr('stroke-opacity', '0.8')
            .attr('stroke-width', '0.3')
            .attr('stroke-dasharray', '3,3')
            .attr('shape-rendering', 'crispEdges');
    }

    function oversea_casetotal_name_change(oversea_casetotal_name_y) {
        var oversea_casetotal_name_y_new = oversea_casetotal_name_y.filter(function (d) {
            // return d[2] > (-(table_cities_font_size - 2)) && d[2] < 0
            return Math.abs(d[2]) < (8) && Math.abs(d[2]) != 0;
        });

        // oversea_casetotal_name_y_new[oversea_casetotal_name_y_new.length][0] = 999;
        // oversea_casetotal_name_y_new[oversea_casetotal_name_y_new.length+1][0] = 9999;
        // oversea_casetotal_name_y_new.push([999]);

        var oversea_casetotal_name_y_new_flag = 0;
        // for(var i = 0;i<oversea_casetotal_name_y_new.length;i++){
        if (oversea_casetotal_name_y_new.length == 1) {
            oversea_casetotal_name_y_new[0].flag = '1';
        } else if (oversea_casetotal_name_y_new.length == 2) {
            if (oversea_casetotal_name_y_new[1][0] - oversea_casetotal_name_y_new[0][0] == -1) {
                oversea_casetotal_name_y_new[0].flag = '1';
                oversea_casetotal_name_y_new[1].flag = '1';
            } else {
                oversea_casetotal_name_y_new[0].flag = '1';
                oversea_casetotal_name_y_new[1].flag = '2';
            }
        } else if (oversea_casetotal_name_y_new.length == 3) {
            if (
                oversea_casetotal_name_y_new[1][0] - oversea_casetotal_name_y_new[0][0] == -1 &&
                oversea_casetotal_name_y_new[2][0] - oversea_casetotal_name_y_new[1][0] != -1
            ) {
                oversea_casetotal_name_y_new[0].flag = '1';
                oversea_casetotal_name_y_new[1].flag = '1';
                oversea_casetotal_name_y_new[2].flag = '2';
            } else if (
                oversea_casetotal_name_y_new[1][0] - oversea_casetotal_name_y_new[0][0] != -1 &&
                oversea_casetotal_name_y_new[2][0] - oversea_casetotal_name_y_new[1][0] == -1
            ) {
                oversea_casetotal_name_y_new[0].flag = '1';
                oversea_casetotal_name_y_new[1].flag = '2';
                oversea_casetotal_name_y_new[2].flag = '2';
            } else if (
                oversea_casetotal_name_y_new[1][0] - oversea_casetotal_name_y_new[0][0] != -1 &&
                oversea_casetotal_name_y_new[2][0] - oversea_casetotal_name_y_new[1][0] != -1
            ) {
                oversea_casetotal_name_y_new[0].flag = '1';
                oversea_casetotal_name_y_new[1].flag = '2';
                oversea_casetotal_name_y_new[2].flag = '3';
            } else if (
                oversea_casetotal_name_y_new[1][0] - oversea_casetotal_name_y_new[0][0] == -1 &&
                oversea_casetotal_name_y_new[2][0] - oversea_casetotal_name_y_new[1][0] == -1
            ) {
                oversea_casetotal_name_y_new[0].flag = '1';
                oversea_casetotal_name_y_new[1].flag = '1';
                oversea_casetotal_name_y_new[2].flag = '1';
            }
        } else if (oversea_casetotal_name_y_new.length == 4) {
            if (
                oversea_casetotal_name_y_new[1][0] - oversea_casetotal_name_y_new[0][0] != -1 &&
                oversea_casetotal_name_y_new[2][0] - oversea_casetotal_name_y_new[1][0] != -1 &&
                oversea_casetotal_name_y_new[3][0] - oversea_casetotal_name_y_new[2][0] != -1
            ) {
                oversea_casetotal_name_y_new[0].flag = '1';
                oversea_casetotal_name_y_new[1].flag = '2';
                oversea_casetotal_name_y_new[2].flag = '3';
                oversea_casetotal_name_y_new[3].flag = '4';
            } else if (
                oversea_casetotal_name_y_new[1][0] - oversea_casetotal_name_y_new[0][0] == -1 &&
                oversea_casetotal_name_y_new[2][0] - oversea_casetotal_name_y_new[1][0] != -1 &&
                oversea_casetotal_name_y_new[3][0] - oversea_casetotal_name_y_new[2][0] != -1
            ) {
                oversea_casetotal_name_y_new[0].flag = '1';
                oversea_casetotal_name_y_new[1].flag = '1';
                oversea_casetotal_name_y_new[2].flag = '2';
                oversea_casetotal_name_y_new[3].flag = '3';
            } else if (
                oversea_casetotal_name_y_new[1][0] - oversea_casetotal_name_y_new[0][0] == -1 &&
                oversea_casetotal_name_y_new[2][0] - oversea_casetotal_name_y_new[1][0] == -1 &&
                oversea_casetotal_name_y_new[3][0] - oversea_casetotal_name_y_new[2][0] != -1
            ) {
                oversea_casetotal_name_y_new[0].flag = '1';
                oversea_casetotal_name_y_new[1].flag = '1';
                oversea_casetotal_name_y_new[2].flag = '1';
                oversea_casetotal_name_y_new[3].flag = '2';
            } else if (
                oversea_casetotal_name_y_new[1][0] - oversea_casetotal_name_y_new[0][0] == -1 &&
                oversea_casetotal_name_y_new[2][0] - oversea_casetotal_name_y_new[1][0] == -1 &&
                oversea_casetotal_name_y_new[3][0] - oversea_casetotal_name_y_new[2][0] == -1
            ) {
                oversea_casetotal_name_y_new[0].flag = '1';
                oversea_casetotal_name_y_new[1].flag = '1';
                oversea_casetotal_name_y_new[2].flag = '1';
                oversea_casetotal_name_y_new[3].flag = '1';
            }
            if (
                oversea_casetotal_name_y_new[1][0] - oversea_casetotal_name_y_new[0][0] != -1 &&
                oversea_casetotal_name_y_new[2][0] - oversea_casetotal_name_y_new[1][0] == -1 &&
                oversea_casetotal_name_y_new[3][0] - oversea_casetotal_name_y_new[2][0] != -1
            ) {
                oversea_casetotal_name_y_new[0].flag = '1';
                oversea_casetotal_name_y_new[1].flag = '2';
                oversea_casetotal_name_y_new[2].flag = '2';
                oversea_casetotal_name_y_new[3].flag = '3';
            }
            if (
                oversea_casetotal_name_y_new[1][0] - oversea_casetotal_name_y_new[0][0] != -1 &&
                oversea_casetotal_name_y_new[2][0] - oversea_casetotal_name_y_new[1][0] == -1 &&
                oversea_casetotal_name_y_new[3][0] - oversea_casetotal_name_y_new[2][0] == -1
            ) {
                oversea_casetotal_name_y_new[0].flag = '1';
                oversea_casetotal_name_y_new[1].flag = '2';
                oversea_casetotal_name_y_new[2].flag = '2';
                oversea_casetotal_name_y_new[3].flag = '2';
            }
            if (
                oversea_casetotal_name_y_new[1][0] - oversea_casetotal_name_y_new[0][0] == -1 &&
                oversea_casetotal_name_y_new[2][0] - oversea_casetotal_name_y_new[1][0] != -1 &&
                oversea_casetotal_name_y_new[3][0] - oversea_casetotal_name_y_new[2][0] == -1
            ) {
                oversea_casetotal_name_y_new[0].flag = '1';
                oversea_casetotal_name_y_new[1].flag = '1';
                oversea_casetotal_name_y_new[2].flag = '2';
                oversea_casetotal_name_y_new[3].flag = '2';
            }
        } else if (oversea_casetotal_name_y_new.length == 5) {
            if (
                oversea_casetotal_name_y_new[1][0] - oversea_casetotal_name_y_new[0][0] == -1 &&
                oversea_casetotal_name_y_new[2][0] - oversea_casetotal_name_y_new[1][0] == -1 &&
                oversea_casetotal_name_y_new[3][0] - oversea_casetotal_name_y_new[2][0] == -1 &&
                oversea_casetotal_name_y_new[4][0] - oversea_casetotal_name_y_new[3][0] == -1
            ) {
                oversea_casetotal_name_y_new[0].flag = '1';
                oversea_casetotal_name_y_new[1].flag = '1';
                oversea_casetotal_name_y_new[2].flag = '1';
                oversea_casetotal_name_y_new[3].flag = '1';
                oversea_casetotal_name_y_new[4].flag = '1';
            }
        }

        // console.log(oversea_casetotal_name_y_new);

        oversea_casetotal_name_y_new = d3
            .nest()
            .key(function (d) {
                return d.flag;
            })
            .entries(oversea_casetotal_name_y_new)
            .filter(function (d) {
                return d.key != 'undefined';
            });

        // console.log(oversea_casetotal_name_y_new);

        oversea_casetotal_name_y_new.forEach(function (d) {
            if (d.values.length == 1) {
                var oversea_casetotal_name_y_new_index = Number(d.values[0][0]);
                var oversea_casetotal_name_y_new_height = Number(d.values[0][2]);
                d3
                    .select('.oversea_casetotal_name_special_' + oversea_casetotal_name_y_new_index)
                    .transition()
                    .duration(800)
                    .attr('y', function (d) {
                        return (
                            oversea_casetotal_name_y[
                            oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index)
                                ][1] -
                            (table_cities_font_size - 2) / 2 -
                            Number(oversea_casetotal_name_y_new_height + table_cities_font_size / 2) / 2
                        );
                    });

                d3
                    .select('.oversea_casetotal_name_special_' + oversea_casetotal_name_y_new_index + 1)
                    .transition()
                    .duration(800)
                    .attr('y', function (d) {
                        return (
                            oversea_casetotal_name_y[
                            oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index + 1)
                                ][1] +
                            (table_cities_font_size - 2) / 2 +
                            Number(oversea_casetotal_name_y_new_height + table_cities_font_size) / 2
                        );
                    });

                // d3.select(".oversea_casetotal_name_special_" + (oversea_casetotal_name_y_new_index + 1))
                //   .transition()
                //   .duration(800)
                //   .attr("y", function (d) {
                //     return oversea_casetotal_name_y[oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index + 1)][1] + (table_cities_font_size - 2) / 2 + Number(oversea_casetotal_name_y_new_height + 1) / 2
                //   });
            } else if (d.values.length == 2) {
                // console.log(d.values[1][3]);

                var oversea_casetotal_name_y_new_index = Number(d.values[0][0]);
                var oversea_casetotal_name_y_new_height = Number(d.values[0][2]);

                d3
                    .select('.oversea_casetotal_name_special_' + Number(oversea_casetotal_name_y_new_index - 1))
                    .transition()
                    .duration(800)
                    .attr('y', function (d) {
                        return (
                            oversea_casetotal_name_y[
                            oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index - 1)
                                ][1] -
                            (table_cities_font_size - 2) -
                            Number(oversea_casetotal_name_y_new_height) / 2
                        );
                    });

                d3
                    .select('.oversea_casetotal_name_special_' + Number(oversea_casetotal_name_y_new_index))
                    .transition()
                    .duration(800)
                    .attr('y', function (d) {
                        return (
                            oversea_casetotal_name_y[
                            oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index - 1)
                                ][1] -
                            (table_cities_font_size - 2) * -0.2 -
                            Number(oversea_casetotal_name_y_new_height) / 2
                        );
                    });

                d3
                    .select('.oversea_casetotal_name_special_' + Number(oversea_casetotal_name_y_new_index + 1))
                    .transition()
                    .duration(800)
                    .attr('y', function (d) {
                        return (
                            oversea_casetotal_name_y[
                            oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index - 1)
                                ][1] -
                            (table_cities_font_size - 2) * -1.2 -
                            Number(oversea_casetotal_name_y_new_height) / 2
                        );
                    });
                // .attr("y", function (d) {
                //   return oversea_casetotal_name_y[oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index + 1)][1] + (table_cities_font_size - 2) + Number(oversea_casetotal_name_y_new_height + 1) / 2
                // });
            } else if (d.values.length == 3) {
                // console.log(d.values[1][3]);
                var oversea_casetotal_name_y_new_index = Number(d.values[0][0]);
                var oversea_casetotal_name_y_new_height = Number(d.values[0][2]);
                // console.log(d.values);

                d3
                    .select('.oversea_casetotal_name_special_' + Number(oversea_casetotal_name_y_new_index - 2))
                    .transition()
                    .duration(800)
                    .attr('y', function (d) {
                        return (
                            oversea_casetotal_name_y[
                            oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index - 2)
                                ][1] -
                            (table_cities_font_size - 2) * 0.2 -
                            Number(oversea_casetotal_name_y_new_height + 1) / 2
                        );
                    });

                d3
                    .select('.oversea_casetotal_name_special_' + Number(oversea_casetotal_name_y_new_index - 1))
                    .transition()
                    .duration(800)
                    .attr('y', function (d) {
                        return (
                            oversea_casetotal_name_y[
                            oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index - 2)
                                ][1] -
                            (table_cities_font_size - 2) * -0.8 -
                            Number(oversea_casetotal_name_y_new_height + 1) / 2
                        );
                    });

                d3
                    .select('.oversea_casetotal_name_special_' + Number(oversea_casetotal_name_y_new_index))
                    .transition()
                    .duration(800)
                    .attr('y', function (d) {
                        return (
                            oversea_casetotal_name_y[
                            oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index - 2)
                                ][1] -
                            (table_cities_font_size - 2) * -1.8 -
                            Number(oversea_casetotal_name_y_new_height + 1) / 2
                        );
                    });

                d3
                    .select('.oversea_casetotal_name_special_' + Number(oversea_casetotal_name_y_new_index + 1))
                    .transition()
                    .duration(800)
                    // .attr("y", function (d) {
                    //   return oversea_casetotal_name_y[oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index + 1)][1] - (table_cities_font_size - 2) * (-1.2) + Number(oversea_casetotal_name_y_new_height + 1) / 2
                    // });
                    .attr('y', function (d) {
                        return (
                            oversea_casetotal_name_y[
                            oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index - 2)
                                ][1] -
                            (table_cities_font_size - 2) * -2.8 -
                            Number(oversea_casetotal_name_y_new_height + 1) / 2
                        );
                    });
            } else if (d.values.length == 4) {
                // console.log(d.values[1][3]);
                var oversea_casetotal_name_y_new_index = Number(d.values[0][0]);
                var oversea_casetotal_name_y_new_height = Number(d.values[0][2]);
                console.log(d.values[0][3]);

                d3
                    .select('.oversea_casetotal_name_special_' + Number(oversea_casetotal_name_y_new_index - 3))
                    .transition()
                    .duration(800)
                    .attr('y', function (d) {
                        return (
                            oversea_casetotal_name_y[
                            oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index - 3)
                                ][1] -
                            (table_cities_font_size - 2) * 2.2 -
                            Number(oversea_casetotal_name_y_new_height + 1) / 2
                        );
                    });

                d3
                    .select('.oversea_casetotal_name_special_' + Number(oversea_casetotal_name_y_new_index - 2))
                    .transition()
                    .duration(800)
                    .attr('y', function (d) {
                        return (
                            oversea_casetotal_name_y[
                            oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index - 2)
                                ][1] -
                            (table_cities_font_size - 2) * 1.2 -
                            Number(oversea_casetotal_name_y_new_height + 1) / 2
                        );
                    });

                d3
                    .select('.oversea_casetotal_name_special_' + Number(oversea_casetotal_name_y_new_index - 1))
                    .transition()
                    .duration(800)
                    .attr('y', function (d) {
                        return (
                            oversea_casetotal_name_y[
                            oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index - 1)
                                ][1] -
                            (table_cities_font_size - 2) * 0.2 -
                            Number(oversea_casetotal_name_y_new_height + 1) / 2
                        );
                    });

                d3
                    .select('.oversea_casetotal_name_special_' + Number(oversea_casetotal_name_y_new_index + 1))
                    .transition()
                    .duration(800)
                    .attr('y', function (d) {
                        return (
                            oversea_casetotal_name_y[
                            oversea_casetotal_name_y.length - Number(oversea_casetotal_name_y_new_index + 1)
                                ][1] -
                            (table_cities_font_size - 2) * -1 +
                            Number(oversea_casetotal_name_y_new_height + 1) / 2
                        );
                    });
            }
        });
    }

    function makeWorld(error, world) {
        console.log(world);
        if (world != undefined) {
            $('.oversea_loading').fadeOut();
        }
        if (UA.isMobile) {
            var width = $(window).width();
        } else {
            width = 1400;
            height = 800;
        }

        //溢出
        var svg = d3
            .select('.oversea_map')
            .append('svg')
            .attr('class', 'oversea_svg')
            // .attr("width", width+100)
            .attr('width', width + 0)
            .attr('height', height)
            // .attr("transform", "translate(-15,0) ")
            // .attr("transform", "translate(-25,0)")
            .style('left', -15);

        // dashed
        var defs = svg.append('defs');

        defs
            .append('svg:pattern')
            .attr('id', 'pic1')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 22)
            .attr('height', 22)
            .append('svg:image')
            .attr('xlink:href', './assets/dashed.png')
            .attr('width', 23)
            .attr('height', 23);

        // dot
        var defs_dot = svg.append('defs');

        defs_dot
            .append('svg:pattern')
            .attr('id', 'dot_1')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 22)
            .attr('height', 22)
            .append('svg:image')
            .attr('xlink:href', './assets/dot.png')
            .attr('width', 23)
            .attr('height', 23);

        //阴影的效果
        var defs_bg = svg.append('defs');

        defs_bg
            .append('filter')
            .attr('id', 'box_shadow')
            .attr('x', '0')
            .attr('y', '0')
            .attr('widht', '200%')
            .attr('height', '200%');

        d3
            .select('#box_shadow')
            .append('feOffset')
            .attr('result', 'offOut')
            .attr('in', 'SourceGraphic')
            .attr('dx', '1')
            .attr('dy', '1');

        d3
            .select('#box_shadow')
            .append('feGaussianBlur')
            .attr('result', 'blurOut')
            .attr('in', 'offOut')
            .attr('stdDeviation', '10');

        d3
            .select('#box_shadow')
            .append('feBlend')
            .attr('in', 'ourceGraphic')
            .attr('in2', 'offOut')
            .attr('mode', 'normal');

        svg
            .append('g')
            .attr('class', 'oversea')
            .selectAll('path')
            .data(world.features)
            .enter()
            .append('path')
            .attr('d', path_oversea)
            .attr('class', function (d) {
                return d.area;
            })
            // .attr("transform", "translate(50,0)")
            .attr('country', function (d) {
                return d.properties.name;
            })
            .style('fill', function (d) {
                if (fill_type == 'total') {
                    if (rateByoversea.get(d.properties.name) == 0) {
                        // return "#EEF8FF";
                        return '#f7f7f7';
                    } else if (rateByoversea.get(d.properties.name) >= 1 &&
                        rateByoversea.get(d.properties.name) <= 50) {
                        return '#ffffb2';
                    } else if (
                        rateByoversea.get(d.properties.name) >= 51 &&
                        rateByoversea.get(d.properties.name) <= 100
                    ) {
                        return '#fed976';
                    } else if (
                        rateByoversea.get(d.properties.name) >= 101 &&
                        rateByoversea.get(d.properties.name) <= 500
                    ) {
                        return '#feb24c';
                    } else if (
                        rateByoversea.get(d.properties.name) >= 501 &&
                        rateByoversea.get(d.properties.name) <= 1000
                    ) {
                        return '#fd8d3c';
                    } else if (
                        rateByoversea.get(d.properties.name) >= 1001 &&
                        rateByoversea.get(d.properties.name) <= 5000
                    ) {
                        return '#FC4E2B';
                    } else if (
                        rateByoversea.get(d.properties.name) >= 5001 &&
                        rateByoversea.get(d.properties.name) <= 10000
                    ) {
                        return '#E31B1B';
                    } else if (
                        rateByoversea.get(d.properties.name) >= 10001 &&
                        rateByoversea.get(d.properties.name) <= 20000
                    ) {
                        return '#B10026';
                    } else if (rateByoversea.get(d.properties.name) >= 20001) {
                        return '#560021';
                    } else {
                        // console.log(d.area, d.properties.name)
                        return '#f7f7f7';
                    }
                } else {
                    if (rateByoverseaCure.get(d.properties.name) == 0) {
                        return '#fff';
                    } else if (
                        rateByoverseaCure.get(d.properties.name) > 0 &&
                        rateByoverseaCure.get(d.properties.name) <= 25
                    ) {
                        return '#ffffcc';
                    } else if (
                        rateByoverseaCure.get(d.properties.name) > 25 &&
                        rateByoverseaCure.get(d.properties.name) <= 50
                    ) {
                        return '#c2e699';
                    } else if (
                        rateByoverseaCure.get(d.properties.name) > 50 &&
                        rateByoverseaCure.get(d.properties.name) <= 75
                    ) {
                        return '#78c679';
                    } else if (
                        rateByoverseaCure.get(d.properties.name) > 75 &&
                        rateByoverseaCure.get(d.properties.name) <= 99.99999
                    ) {
                        return '#31a354';
                    } else if (rateByoverseaCure.get(d.properties.name) >= 100) {
                        return '#006837';
                    } else {
                        return 'url("#dot_1")';
                    }
                }
            })
            .style('stroke', '#512202')
            .style('stroke-width', 0.2)
            .on('click', function (d) {
                var className = $(this).attr('class');
                click_oversea(className, d);

                // d3.select(".oversea")
                //   .selectAll("path")
                //   .style("stroke-opacity", "0.5")
                //   .style("fill-opacity", "0.5");

                // d3.select(this)
                //   .style("stroke-opacity", "1")
                //   .style("fill-opacity", "1");

                d3.select('.oversea').selectAll('path').classed('click_fill', false);

                d3.select(this).classed('click_fill', true);
            });

        // 钻石公主号
        // var ship_position = [ 138.252924, 36.204824 ];
        if (UA.isMobile) {
            var ship_position = [138.252924, 36.204824];
        } else {
            var ship_position = [141.252924, 36.204824];
        }

        d3
            .select('.oversea_svg')
            .append('g')
            .attr('class', 'zsgz')
            .append('image')
            .attr('xlink:href', function () {
                if (fill_type == "total") {
                    return './assets/ship.svg'
                } else {
                    return './assets/ship_cure.svg'
                }
            })
            .attr('width', 8)
            .attr('height', 6)
            .attr(
                'transform',
                'translate(' + (proj_oversea(ship_position)[0] - 1) + ',' + (proj_oversea(ship_position)[1] + 2) + ')'
            )
            .on('click', function () {
                var zsgz_data = oversea_data.filter(function (d) {
                    return d.name == '钻石公主号';
                });
                if (isTransform == true) {
                    $('.oversea_detail').show();
                    d3.select('.oversea_svg').select('.oversea').selectAll('path').classed('click_fill', false);
                }
                $('.c_name').html('钻石公主号');
                $('.c_newcase').html(zsgz_data[0].newcase);
                $('.c_casetotal').html(zsgz_data[0].casetotal);
                $('.c_curecase').html(zsgz_data[0].curecase);
                $('.c_deathcase').html(zsgz_data[0].deathcase);
            });

        //柱形
        d3
            .select('.oversea_svg')
            .append('g')
            .attr('class', 'oversea_rect')
            .selectAll('rect')
            .data(world.features, function (d) {
                return d.properties.cp != undefined;
            })
            .enter()
            .append('rect')
            .attr('class', function (d) {
                return d.area;
            })
            .attr('x', function (d) {
                if (d.properties.cp != undefined) {
                    return proj_oversea(d.properties.cp)[0];
                }
            })
            .attr('y', function (d) {
                if (d.properties.cp != undefined) {
                    return proj_oversea(d.properties.cp)[1];
                }
            })
            .attr('width', 2)
            .attr('height', function (d) {
                if (fill_type == 'total') {
                    if (d.properties.cp != undefined && rateByoverseaNew.get(d.properties.name) > 0) {
                        // console.log(rect_scale(rateByoverseaNew.get(d.properties.name)))
                        return rect_scale(rateByoverseaNew.get(d.properties.name));
                    }
                } else {
                    if (d.properties.cp != undefined && rateByoverseaCureCase.get(d.properties.name) > 0) {
                        // console.log(rect_scale(rateByoverseaCureCase.get(d.properties.name)))
                        return rect_scale_cure(rateByoverseaCureCase.get(d.properties.name));
                    }
                }
            })
            .style('fill', '#2c50b0')
            .attr('transform', function (d) {
                if (fill_type == 'total') {
                    if (d.properties.cp != undefined && rateByoverseaNew.get(d.properties.name) > 0) {
                        return 'translate(0,' + -rect_scale(rateByoverseaNew.get(d.properties.name)) + ')';
                    }
                } else {
                    if (d.properties.cp != undefined && rateByoverseaCureCase.get(d.properties.name) > 0) {
                        return 'translate(0,' + -rect_scale_cure(rateByoverseaCureCase.get(d.properties.name)) + ')';
                    }
                }
            });
        // .style('fill-opacity','0.8')
    }

    function click_oversea(className, d) {
        // console.log(className, d);
        if (UA.isMobile) {
            $('.oversea_map').height(480);
        }
        var x, y, k;
        // var centroid = d.properties.cp;
        if (UA.isMobile) {
            switch (className) {
                case '亚洲':
                    x = proj_oversea([80, 10])[0] + 5;
                    y = proj_oversea([80, 10])[1] - 20;
                    k = 2.5;
                    break;
                case '欧洲':
                    x = proj_oversea([60, 20])[0] - 40;
                    y = proj_oversea([60, 20])[1] - 30;
                    k = 4;
                    break;
                case '非洲':
                    x = proj_oversea([15, 0])[0];
                    y = proj_oversea([35, 0])[1] - 10;
                    k = 3;
                    break;
                case '北美洲':
                    x = proj_oversea([-85, 10])[0] + 5;
                    y = proj_oversea([-75, 10])[1] - 25;
                    k = 2.05;
                    break;
                case '南美洲':
                    x = proj_oversea([-85, 10])[0] + 30;
                    y = proj_oversea([-75, 10])[1] + 40;
                    k = 2.8;
                    break;
                case '大洋洲':
                    x = proj_oversea([140, -20])[0];
                    y = proj_oversea([140, -20])[1];
                    k = 3.2;
                    break;
                default:
                    break;
            }
        } else {
            switch (className) {
                case '亚洲':
                    x = proj_oversea([80, 10])[0] - 220;
                    y = proj_oversea([80, 10])[1] - 80;
                    k = 1.8;
                    break;
                case '欧洲':
                    x = proj_oversea([60, 20])[0] - 220;
                    y = proj_oversea([60, 20])[1] - 160;
                    k = 1.8;
                    break;
                case '非洲':
                    x = proj_oversea([15, 0])[0] - 260;
                    y = proj_oversea([35, 0])[1] - 10;
                    k = 1.8;
                    break;
                case '北美洲':
                    x = proj_oversea([-85, 10])[0] - 220;
                    y = proj_oversea([-75, 10])[1] - 160;
                    k = 1.6;
                    break;
                case '南美洲':
                    x = proj_oversea([-85, 10])[0] - 180;
                    y = proj_oversea([-75, 10])[1] + 120;
                    k = 1.6;
                    break;
                case '大洋洲':
                    x = proj_oversea([140, -20])[0] - 160;
                    y = proj_oversea([140, -20])[1];
                    k = 2.4;
                    break;
                default:
                    break;
            }
        }

        if (isTransform == false) {
            //各大州
            $('.oversea_title').html(function () {
                return className + '';
            });
            $('.back_oversea').show();
            $('.world_tl_1').hide();
            $('.world_tl_2').addClass('tl_move');
            if (fill_type == 'total') {
                $('.world_tl_2').css('background-image', 'url(./assets/c_tl.png)');
            } else {
                $('.world_tl_2').css('background-image', 'url(./assets/c_tl_cure.png)');
            }
            isTransform = true;
            d3.select('.oversea').selectAll('path').style('opacity', '0').style('pointer-events', 'none');

            d3.select('.oversea_rect').selectAll('rect').style('opacity', '0').style('pointer-events', 'none');

            d3
                .select('.oversea')
                .selectAll('.' + className + '')
                .transition()
                .duration(750)
                .style('opacity', '1')
                .style('pointer-events', 'all')
                .style('stroke-width', 0.2 / k)
                .attr(
                    'transform',
                    'translate(' + width / 2 + ',' + height / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')'
                );

            if (className == '亚洲') {
                d3
                    .select('.zsgz')
                    .transition()
                    .duration(750)
                    .attr(
                        'transform',
                        'translate(' +
                        width / 2 +
                        ',' +
                        height / 2 +
                        ')scale(' +
                        k +
                        ')translate(' +
                        -x +
                        ',' +
                        -y +
                        ')'
                    );
            } else {
                $('.zsgz').hide();
            }

            //计算总值
            // $(".oversea_column_y").css("visibility", "hidden");
            var filter_data = oversea_data.filter(function (d) {
                return d.province == className && d.name != '中国';
            });

            var a = d3.sum(
                filter_data.map(function (d) {
                    return Number(d.casetotal);
                })
            );

            var b = d3.sum(
                filter_data.map(function (d) {
                    return Number(d.curecase);
                })
            );

            var c = d3.sum(
                filter_data.map(function (d) {
                    return Number(d.deathcase);
                })
            );

            $('.oversea_number').eq(0).html(filter_data.length);
            $('.oversea_number').eq(1).html(a);
            $('.oversea_number').eq(2).html(b);
            $('.oversea_number').eq(3).html(c);
            // 洲计算
            var oversea_y_filter = oversea_y
                .map(function (d) {
                    return {
                        name: d.name,
                        area: d.area,
                        type: d.stats_type,
                        data: d[new_date]
                    };
                })
                .filter(function (d) {
                    return d.area == className && d.name != '中国';
                });
            console.log(oversea_y_filter);

            $('.y_number_oversea').eq(0).html(
                '+' +
                (filter_data.length -
                    oversea_y_filter.filter(function (d) {
                        return d.type == 'casetotal';
                    }).length).toString()
            );
            $('.y_number_oversea').eq(1).html(function () {
                return (
                    '+' +
                    (a -
                        d3.sum(
                            oversea_y_filter
                                .filter(function (d) {
                                    return d.type == 'casetotal';
                                })
                                .map(function (d) {
                                    return Number(d.data);
                                })
                        )).toString()
                );
            });
            $('.y_number_oversea').eq(2).html(function () {
                return (
                    '+' +
                    (b -
                        d3.sum(
                            oversea_y_filter
                                .filter(function (d) {
                                    return d.type == 'curecase';
                                })
                                .map(function (d) {
                                    return Number(d.data);
                                })
                        )).toString()
                );
            });
            $('.y_number_oversea').eq(3).html(function () {
                return (
                    '+' +
                    (c -
                        d3.sum(
                            oversea_y_filter
                                .filter(function (d) {
                                    return d.type == 'deathcase';
                                })
                                .map(function (d) {
                                    return Number(d.data);
                                })
                        )).toString()
                );
            });
        }

        //国家计算
        var country_filter = oversea_click.filter(function (dd) {
            return dd.id == d.properties.name;
        });
        console.log(country_filter);
        if (country_filter[0] != undefined) {
            $('.oversea_detail').show();
            $('.c_name').html(country_filter[0].name);
            $('.c_newcase').html(country_filter[0].newcase);
            $('.c_casetotal').html(country_filter[0].casetotal);
            $('.c_curecase').html(country_filter[0].curecase);
            $('.c_deathcase').html(country_filter[0].deathcase);
        } else {
            $('.oversea_detail').hide();
        }
    }

    //折行调整（省内的）+ 省外
    function table_word_wrap() {
        // console.log(d3.selectAll('.each_table_cites_box').selectAll('.col_0').select('span'));

        // $('.each_table_cites_box').find('.col_0').find('span').eq(0).attr('class', 'col_span_0');
        d3.selectAll('.each_table_cites_box').selectAll('.col_0').select('span').attr('class', 'col_span_0')
        d3
            .selectAll('.table_container_1')
            .selectAll('.table_province_box')
            .selectAll('.col_0')
            .selectAll('span')
            .attr('class', 'col_span_0');

        d3
            .select('.table_container_0')
            .selectAll('.col_span_0')
            .filter(function (d, i) {
                return (
                    $('.table_container_0').find('.col_span_0').eq(i).text().length >
                    Math.ceil((col_width + 1) / table_cities_font_size)
                );
            })
            .attr('class', 'col_span_0 col_span_special_0');

        d3
            .select('.table_container_1')
            .selectAll('.col_span_0')
            .filter(function (d, i) {
                // console.log($(".table_container_1").find('.col_span_0').eq(i).text().length , Math.floor((col_width - 5) / table_province_font_size))
                return (
                    $('.table_container_1').find('.col_span_0').eq(i).text().length >
                    Math.floor((col_width + 1) / table_province_font_size)
                );
            })
            .attr('class', 'col_span_0 col_span_special_0');

        $('.table_container_0').find('.col_span_special_0').parent().addClass('col_special_0');
        $('.table_container_1').find('.col_span_special_0').parent().addClass('col_special_0');

        d3
            .select('.table_container_0')
            .selectAll('.col_span_special_0')
            .style('width', col_width + 5 + 'px')
            .style('line-height', Number(table_cities_font_size) + 4 + 'px');

        d3
            .select('.table_container_1')
            .selectAll('.col_span_special_0')
            .style('width', col_width + 1 + 'px')
            // .style('width', col_width + 5 + 'px')
            .style('line-height', Number(table_province_font_size) + 2 + 'px');

        d3
            .selectAll('.table_container')
            .select('.col_special_0')
            .selectAll('.col_span_special_0')
            .style('position', 'relative').style('height', Number(table_province_font_size) + 2 + 16 + "px");

        // d3.selectAll('.col_special_0').style('position', 'relative').style('height', function(d, i) {
        // 	// console.log($('.col_span_special_0').eq(i).text())
        // 	return Number($('.col_span_special_0').eq(i).height()) + 16 + 'px';
        // 	// console.log($('.col_span_special_0').eq(i).height())
        // 	// return Number(d3.selectAll('.col_span_special_0').filter(function(dd,ii){ return ii == i}).style("height")) + 16 + 'px';
        // });

        // d3.selectAll(".col_special_0")
        $('.table_container_0').find('.col_special_0').parent().addClass('each_table_cites_special_box');

        // d3.selectAll(".col_special_0")
        $('.table_container_1').find('.col_special_0').parent().addClass('province_special_box');

        d3.selectAll('.each_table_cites_special_box').style('height', function (d, i) {
            return Number($('.table_container_0').find('.col_span_special_0').eq(i).height()) + 16 + 'px';
        });

        d3.selectAll('.province_special_box').style('height', function (d, i) {
            return Number($('.table_container_1').find('.col_span_special_0').eq(i).height()) + 16 + 'px';
        });

        d3
            .selectAll('.each_table_cites_special_box')
            .select('.col_0')
            .style('float', 'left')
            .style('position', 'relative')
            .style('height', function (d, i) {
                return (
                    Number($('.each_table_cites_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px'
                );
            });

        d3
            .selectAll('.province_special_box')
            .select('.col_0')
            .style('float', 'left')
            .style('position', 'relative')
            .style('height', function (d, i) {
                return Number($('.province_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px';
            });

        d3
            .selectAll('.each_table_cites_special_box')
            .select('.col_1')
            .style('float', 'left')
            .style('line-height', function (d, i) {
                return (
                    Number($('.each_table_cites_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px'
                );
            })
            .style('height', function (d, i) {
                return (
                    Number($('.each_table_cites_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px'
                );
            });

        d3
            .selectAll('.province_special_box')
            .select('.col_1')
            .style('float', 'left')
            .style('line-height', function (d, i) {
                return Number($('.province_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px';
            })
            .style('height', function (d, i) {
                return Number($('.province_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px';
            });

        d3
            .selectAll('.each_table_cites_special_box')
            .select('.col_2')
            .style('float', 'left')
            .style('line-height', function (d, i) {
                return (
                    Number($('.each_table_cites_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px'
                );
            })
            .style('height', function (d, i) {
                return (
                    Number($('.each_table_cites_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px'
                );
            });

        d3
            .selectAll('.province_special_box')
            .select('.col_2')
            .style('float', 'left')
            .style('line-height', function (d, i) {
                return Number($('.province_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px';
            })
            .style('height', function (d, i) {
                return Number($('.province_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px';
            });

        d3
            .selectAll('.each_table_cites_special_box')
            .select('.col_3')
            .style('float', 'left')
            .style('line-height', function (d, i) {
                return (
                    Number($('.each_table_cites_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px'
                );
            })
            .style('height', function (d, i) {
                return (
                    Number($('.each_table_cites_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px'
                );
            });

        d3
            .selectAll('.province_special_box')
            .select('.col_3')
            .style('float', 'left')
            .style('line-height', function (d, i) {
                return Number($('.province_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px';
            })
            .style('height', function (d, i) {
                return Number($('.province_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px';
            });

        d3
            .selectAll('.each_table_cites_special_box')
            .select('.col_4')
            .style('float', 'left')
            .style('line-height', function (d, i) {
                return (
                    Number($('.each_table_cites_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px'
                );
            })
            .style('height', function (d, i) {
                return (
                    Number($('.each_table_cites_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px'
                );
            });

        d3
            .selectAll('.province_special_box')
            .select('.col_4')
            .style('float', 'left')
            .style('line-height', function (d, i) {
                return Number($('.province_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px';
            })
            .style('height', function (d, i) {
                return Number($('.province_special_box').find('.col_span_special_0').eq(i).height()) + 16 + 'px';
            });

        d3
            .selectAll('.col_span_special_0')
            .style('position', 'absolute')
            .style('top', '50%')
            .style('margin-top', function (d, i) {
                return '-' + $('.col_span_special_0').eq(i).height() / 2 + 'px';
            });

        //海外的国家名填色

        d3
            .select('.table_container_1')
            // .selectAll('.col_0')
            .selectAll('.col_span_0')
            // .style('height', table_province_font_size + 'px')
            .style('line-height', table_province_font_size + 'px')
            .style('padding', '3px 5px')
            .style('background', function (d, i) {
                if (other_table_data[i].province == '亚洲') {
                    return '#FAD0D1';
                } else if (other_table_data[i].province == '欧洲') {
                    return '#D5DCEF';
                } else if (other_table_data[i].province == '非洲') {
                    return '#DBEFDC';
                } else if (other_table_data[i].province == '大洋洲') {
                    return '#CDEDF6';
                } else if (other_table_data[i].province == '北美洲') {
                    return '#FFF4D6';
                } else if (other_table_data[i].province == '南美洲') {
                    return '#FEDDC5';
                } else if (other_table_data[i].province == '其他') {
                    return '#D1D1D1';
                }
            })
            .style('border-radius', '8px');


        d3
            .select('.table_container_1')
            .selectAll('.col_span_special_0')
            .style('height', table_province_font_size * 2 + 'px')
            .style('margin-top', function (d, i) {
                return '-' + $('.table_container_1').find('.col_span_special_0').eq(i).height() / 2 - 3 + 'px';
            });

    }
}
//分享文案

var directory = location.origin + location.pathname.substring(0, location.pathname.lastIndexOf('/')); //  文档目录
var shareInfo = {
    title: '新冠肺炎病例实时更新地图',
    desc: '梳理汇总国家卫健委及地方卫健委实时通报病例数据。',
    link: location.href,
    img: directory + '/wxshare.jpg'
};
