$(function () {
    $('.new').click(function () {
        yincangxianshi('#increase');
    });
    $('.cancel').click(function () {
        yincangxianshi1('#increase');
    });
    $('.span_9').click(function () {
        yincangxianshi1('.main_right_center_2');
    });
    $('.span_4').click(function () {
        assignment('.information_1','.text1');
        assignment('.information_2','.text2');
        assignment('.information_3','.text3');
        assignment('.information_4','.text4');
        assignment('.information_5','.text5');
        assignment('.information_6','.text6');
        assignment('.fukuan','.text7 select');
        assignment('.kuaidi','.text8 select');
        yincangxianshi('.main_right_center_2');
    });
    $('.span_10').click(function () {
        assignment1('.text1','.information_1');
        assignment1('.text2','.information_2');
        assignment1('.text3','.information_3');
        assignment1('.text4','.information_4');
        assignment1('.text5','.information_5');
        assignment1('.text6','.information_6');
        assignment1('.text7 select','.fukuan');
        assignment1('.text8 select','.kuaidi');
        yincangxianshi1('.main_right_center_2');
    });
    $('.confirm').click(function () {
        weikongliu('#user','#area','#address','#cellphone','#telephone','#mailbox','.shuzi','#increase');
    })
});


