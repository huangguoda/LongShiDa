
$(function () {
    var max_pic=$('.max_pic');
    var min_pic=$('.min_pic');
    var mouse_pic=$('.mouse_pic');
    var main_img=$('.main_pic img');
//鼠标移入调用放大镜方法
    max_pic.mousemove(function (e) {
        magnifier(mouse_pic,min_pic,max_pic,main_img,e);
    });
    max_pic.mouseout(function(e) {
        mouse_pic.hide();
        min_pic.hide();
    });

    var t=Number($('.text').val());
    $('.jia').click(function () {
        $('.text').val(t += 1);
    });
    $('.jian').click(function () {
        if($('.text').val()>0){
            $('.text').val(t -= 1);
        }
    });

    $('.colorClass').click(function () {
        borderColor($(this));
    });
});

// //点击选中边框改变颜色
// function borderColor(obj) {
//     obj.css('border','1px solid #ff0036').siblings().css('border','1px solid white');
// }
//放大镜
// function magnifier(mouse_pic,min_pic,max_pic,main_img,e) {
//     mouse_pic.show();
//     min_pic.show();
//     var max_picoffset=max_pic.offset();
//     var x=e.pageX-max_picoffset.left-mouse_pic.width()/2;
//     var y=e.pageY-max_picoffset.top-mouse_pic.height()/2;
//     if(x<0){
//         x=0;
//     }else if(x>max_pic.width()-mouse_pic.width()){
//         x=max_pic.width()-mouse_pic.width();
//     }
//     if(y<0){
//         y=0;
//     }else if(y>max_pic.height()-mouse_pic.height()){
//         y=max_pic.height()-mouse_pic.height();
//     }
//     mouse_pic.css({
//         'left':x+'px',
//         'top':y+'px'
//     });
//     var peagX=x/(max_pic.width()-mouse_pic.width());
//     var peagY=y/(max_pic.height()-mouse_pic.height());
//
//     main_img.css({
//         left:-peagX*(max_pic.width()-mouse_pic.width()),
//         top:-peagY*(max_pic.width()-mouse_pic.width())
//     });
// }