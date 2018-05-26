
$(function () {
        mask('.mask');
        maskborder('.mask1');
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
function mask(obj) {
    $(obj).mouseover(function () {
        $(this).css({'opacity':'0.6'});
        // $(this).after("<div class='us'></div>");

    });
    $(obj).mouseout(function () {
        $(this).css({'opacity':'1'});
    })
}
function maskborder(obj) {
    $(obj).mouseover(function () {
        $(this).css({'opacity':'0.6','border':'1px solid red'});
    });
    $(obj).mouseout(function () {
        $(this).css({'opacity':'1','border':'1px solid #ccc'});
    })
}

window.onload=function () {
    function time() {
        var gunBong = document.getElementsByClassName('goods_details_right_all')[0];
        var oDiv = document.getElementsByClassName('goods_details_right_div');
        gunBong.innerHTML += gunBong.innerHTML;
        gunBong.style.height = (oDiv[0].offsetHeight + 20) * oDiv.length + 'px';
        time = setInterval(function () {
            gunBong.style.top = gunBong.offsetTop - 1 + "px";
            if (gunBong.offsetTop < -gunBong.offsetHeight / 2) {
                gunBong.style.top = 0 + 'px';
            }
        }, 10)

    }
    return time()
};



