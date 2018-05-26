//在页面上改变某个属性和属性值
function changeAttrHtml(obj,attribute,val) {
    $(obj).css(attribute,val);
}
//增加某个class属性
function classVal(obj1,classVal) {
    $(obj1).addClass(classVal).siblings().removeClass(classVal);
}

//不能去除￥符号
function notClear(obj) {
    var text = obj.value;
    if(text.match(/^￥/gi) == null){
        obj.value = "￥"+text;
    }
}

//判断文本框只能输入数字
function inpNumber(obj) {
    _this = $(obj);
    var re = /\d/g;
    if(!re.test(_this.val())) {
        _this.val('');
    }
}

//确认某个支付方式（单选框）
function  paymentMethod(obj1,obj2,obj3,obj4) {
    var radioId = $(obj4).attr('name');
    $(obj1).removeAttr('class') && $(obj4).attr('class', 'checked');
    $(obj2).removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
    $(obj3).attr('value');
}

//评价打分
function evaluateFraction(obj){
    var i = iScore = iStar = 0;
    for (i = 1; i <= $(obj).length; i++){
        $(obj)[i - 1].index = i;
        $(obj)[i - 1].onmouseover = function (){
            fnPoint(this.index);
        };
        $(obj)[i - 1].onclick = function () {
            iStar = this.index;
        }
    }
    //评分处理
    function fnPoint(iArg){
        iScore = iArg || iStar;
        for (i = 0; i < $(obj).length; i++) $(obj)[i].className = i < iScore ? "on" : "";
    }
}

//点击选中边框改变颜色
function borderColor(obj) {
    obj.css('border','1px solid #ff0036').siblings().css('border','1px solid white');
}
//放大镜
function magnifier(mouse_pic,min_pic,max_pic,main_img,e) {
    mouse_pic.show();
    min_pic.show();
    var max_picoffset=max_pic.offset();
    var x=e.pageX-max_picoffset.left-mouse_pic.width()/2;
    var y=e.pageY-max_picoffset.top-mouse_pic.height()/2;
    if(x<0){
        x=0;
    }else if(x>max_pic.width()-mouse_pic.width()){
        x=max_pic.width()-mouse_pic.width();
    }
    if(y<0){
        y=0;
    }else if(y>max_pic.height()-mouse_pic.height()){
        y=max_pic.height()-mouse_pic.height();
    }
    mouse_pic.css({
        'left':x+'px',
        'top':y+'px'
    });
    var peagX=x/(max_pic.width()-mouse_pic.width());
    var peagY=y/(max_pic.height()-mouse_pic.height());

    main_img.css({
        left:-peagX*(max_pic.width()-mouse_pic.width()),
        top:-peagY*(max_pic.width()-mouse_pic.width())
    });
}
//全选、取消全选
function wholeCheckbox(wholeChoice,checkBox) {
    if(wholeChoice[0].checked){
        checkBox.each(function(){
            this.checked=true;
        });
    }
    else{
        checkBox.each(function(){
            this.checked=false;
        });
    }
}

//点击加号按钮文本框的value值增加并对应输出总价的值
function increase(tx,oneSun,sun,obj) {
    var index = $('.jia').index($(obj));
    console.log(index);
    var shulian = tx.eq(index).val(Number(tx.eq(index).val()) + 1);
    sun.eq(index).text("￥" + oneSun.eq(index).text() * shulian.val() + ".00");
}
//点击减号按钮文本框的value值减少并对应输出总价的值
function reduce(tx,oneSun,sun,obj) {
    var index = $('.jian').index($(obj));
    var shulian = tx.eq(index).val(Number(tx.eq(index).val()));
    if (shulian.val() > 1) {
        tx.eq(index).val(shulian.val() - 1);
        sun.eq(index).text("￥" + oneSun.eq(index).text() * shulian.val() + ".00");
    }
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
//    加透明度
function mask(obj) {
    obj.css({'opacity':'0.6'});
}
function mask1(obj) {
    obj.css({'opacity':'1'});
}
//     加透明度和边框
function maskborder(obj) {
    obj.css({'opacity':'0.6','border':'1px solid red'});
}
function maskborder1(obj) {
    obj.css({'opacity':'1','border':'1px solid #ccc'});
}
//     3张图片轮播
var timer;
function Carousel_3(obj,picture1,picture2,picture3) {
    var imgArr=[picture1,picture2,picture3];
    var i=0;
    timer=setInterval(function () {
        $(obj)[0].src=imgArr[i];
        if(i<imgArr.length-1){
            i++;
        }else{
            i=0;
        }
        Hover(obj,picture1,picture2,picture3);
    },1000);

}
function Hover(obj,picture1,picture2,picture3) {
    $(obj).mouseover(function () {
        clearInterval(timer);
    });
    $(obj).mouseout(function () {
        Carousel_3(obj,picture1,picture2,picture3);
    });
}
//    2张图片轮播
function Carousel_2(obj,picture1,picture2) {
    var imgArr=[picture1,picture2];
    var i=0;
    setInterval(function () {
        $(obj)[0].src=imgArr[i];
        if(i<imgArr.length-1){
            i++;
        }else{
            i=0;
        }
    },3000);
}
function Carousel(obj,obj2,shuzi) {
    var slideShow=$(obj),    //获取最外层框架的名称
        ul=slideShow.find("ul"),
        showNumber=slideShow.find(obj2),      //获取按钮
        oneWidth=slideShow.find("ul li").eq(0).width();      //获取每个图片的宽度
    var timer=null;       //定时器返回值，主要用于关闭定时器
    var iNow=0;       //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0
    showNumber.on("click",function(){        //为每个按钮绑定一个点击事件
        $(this).addClass(shuzi).siblings().removeClass(shuzi);     //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
        var index=$(this).index();      //获取哪个按钮被点击，也就是找到被点击按钮的索引值
        iNow=index;
        ul.animate({"left":-oneWidth*iNow,  //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNOWx确定
        })
    });
    function autoplay(){
        timer=setInterval(function(){       //打开定时器
            iNow++;         //让图片的索引值次序加1，这样就可以实现顺序轮播图片
            if(iNow>showNumber.length-1){      //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
                iNow=0; }
            showNumber.eq(iNow).trigger("click");     //模拟触发数字按钮的click
        },5000);      //2000为轮播的时间
    }
    autoplay();
    slideShow.hover( function(){clearInterval(timer);},autoplay);     //另外注意setInterval的用法比较关键。
}
//    显示与隐藏
function yincangxianshi(xianshi,obj) {
    $(obj).css({'display':'block'});
}
function yincangxianshi1(yincang,obj) {
    $(obj).css({'display':'none'});
}
//      内容不能为空
function weikong(className2,className3) {
    if($(className2).val()=="" || $(className3).val()==""){
        alert('填写项不能为空！');
        return ;
    }
    else{
        location.href="main.html";
    }
}
//   判断填写项是否为空
function weikongliu(obj1,obj2,obj3,obj4,obj5,obj6,obj7) {
    if($(obj1).val()=="" || $(obj2).val()==""){
        alert('填写项不能为空！');
        return false;
    }else if($(obj3).val()=="" || $(obj4).val()==""){
        alert('填写项不能为空！');
        return false;
    }else if($(obj5).val()=="" || $(obj6).val()==""){
        alert('填写项不能为空！');
        return false;
    }else{
        $(obj7).prop('action','main.html');
    }

}
//   第一次输入的密码与第二次输入的密码一不一致
function ConfirmPassword(obj1,obj2){
    if($(obj1).val() == $(obj2).val()){
        // alert('恭喜您注册成功！');
        return;
    }else{
        alert('第一次输入的密码与第二次输入的密码不一致，请重新输入正确的密码！');
        return;
    }

}
//   获取手机验证码时判断手机输入正不正确
function cellphoneValidate(str,obj2) {
    var re =/^1[0-9]{10}$/;
    if (re.test($(str).val())) {
        $(obj2).css({'display':'block'});
    } else {
        alert('手机号输入错误！');
    }
}
//    用户名或密码不能带有空字符
function kongzifu(str) {
    var re=/\s/;
    if(re.test($(str).val())){
        alert("用户名或密码不能带有空字符！");
        return false;
    }else{
        return true;
    }
}
//    倒计时
var timer=null;
function countDown(intDiff,obj){
    clearInterval(timer);
    timer=setInterval(function(){

        var day=0,
            hour=0,
            minute=0,
            second=0;//时间默认值
        if(intDiff > 0){
            day = Math.floor(intDiff / (60 * 60 * 24));
            hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
            minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
        }
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        // $('#gain1').html(day+"天");
        // $('#gain1').html('<s id="h"></s>'+hour+'时');
        // $('#gain1').html('<s></s>'+minute+'分');
        $('#gain1').html('<s></s>'+second+'秒');
        intDiff--;
        if(second<=0){
            $(obj).css({'display':'none'});
        }
    }, 1000);
}
//   赋值内容给div
function assignment(obj1,obj2) {
    $(obj2).val($(obj1).text());
}
function assignment1(obj1,obj2) {
    $(obj2).text($(obj1).val());
}

function yincangxianshi(obj) {
    $(obj).css({'display':'block'});
}
function yincangxianshi1(obj) {
    $(obj).css({'display':'none'});
}
//   判断填写项是否为空与新增地址自加
function weikongliu(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8) {
    if($(obj1).val()=="" || $(obj2).val()==""){
        alert('填写项不能为空！');
        $(obj8).css({'display':'block'});
        return false;
    }else if($(obj3).val()=="" || $(obj4).val()==""){
        alert('填写项不能为空！');
        $(obj8).css({'display':'block'});
        return false;
    }else if($(obj5).val()=="" || $(obj6).val()==""){
        alert('填写项不能为空！');
        $(obj8).css({'display':'block'});
        return false;
    }else{
        var i=parseInt($(obj7).eq(0).text());
        i++;
        $(obj7).text(i);
        $(obj8).css({'display':'none'});
    }
}