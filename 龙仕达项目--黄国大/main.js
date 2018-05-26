$(function () {
    $('.mask').mouseover(function () {
        mask($(this));
    });
    $('.mask').mouseout(function () {
        mask1($(this));
    });
    $('.mask1').mouseover(function () {
        maskborder($(this));
    });
    $('.mask1').mouseout(function () {
        maskborder1($(this));
    });
    Carousel_3('.Img',"images/newgoods_05%20(2).png","images/newgoods_05%20(3).png","images/newgoods_05%20(4).png");
    Carousel_2('.adletImg',"images/minbanner_01.png","images/minbanner_02.png");
    Carousel_2('.recommend2Img',"images/recommend_02.png","images/recommend_02(2).png");
    Carousel_2('.adlet2Img',"images/minbanner_02.png","images/minbanner_01.png");
    Carousel('#banner','.sequence span','sequence_1');

});
// //    加透明度
// function mask(obj) {
//     obj.css({'opacity':'0.6'});
// }
// function mask1(obj) {
//     obj.css({'opacity':'1'});
// }
// //     加透明度和边框
// function maskborder(obj) {
//     obj.css({'opacity':'0.6','border':'1px solid red'});
// }
// function maskborder1(obj) {
//     obj.css({'opacity':'1','border':'1px solid #ccc'});
// }
// //     3张图片轮播
// var timer;
// function Carousel_3(obj,picture1,picture2,picture3) {
//     var imgArr=[picture1,picture2,picture3];
//     var i=0;
//     timer=setInterval(function () {
//         $(obj)[0].src=imgArr[i];
//         if(i<imgArr.length-1){
//             i++;
//         }else{
//             i=0;
//         }
//         Hover(obj,picture1,picture2,picture3);
//     },1000);
//
// }
// function Hover(obj,picture1,picture2,picture3) {
//     $(obj).mouseover(function () {
//         clearInterval(timer);
//     });
//     $(obj).mouseout(function () {
//         Carousel_3(obj,picture1,picture2,picture3);
//     });
// }
// //    2张图片轮播
// function Carousel_2(obj,picture1,picture2) {
//     var imgArr=[picture1,picture2];
//     var i=0;
//     setInterval(function () {
//         $(obj)[0].src=imgArr[i];
//         if(i<imgArr.length-1){
//             i++;
//         }else{
//             i=0;
//         }
//     },3000);
// }
// function Carousel(obj,obj2,shuzi) {
//         var slideShow=$(obj),    //获取最外层框架的名称
//             ul=slideShow.find("ul"),
//             showNumber=slideShow.find(obj2),      //获取按钮
//             oneWidth=slideShow.find("ul li").eq(0).width();      //获取每个图片的宽度
//         var timer=null;       //定时器返回值，主要用于关闭定时器
//         var iNow=0;       //iNow为正在展示的图片索引值，当用户打开网页时首先显示第一张图，即索引值为0
//         showNumber.on("click",function(){        //为每个按钮绑定一个点击事件
//             $(this).addClass(shuzi).siblings().removeClass(shuzi);     //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉
//             var index=$(this).index();      //获取哪个按钮被点击，也就是找到被点击按钮的索引值
//             iNow=index;
//             ul.animate({"left":-oneWidth*iNow,  //注意此处用到left属性，所以ul的样式里面需要设置position: relative; 让ul左移N个图片大小的宽度，N根据被点击的按钮索引值iNOWx确定
//             })
//         });
//         function autoplay(){
//             timer=setInterval(function(){       //打开定时器
//                 iNow++;         //让图片的索引值次序加1，这样就可以实现顺序轮播图片
//                 if(iNow>showNumber.length-1){      //当到达最后一张图的时候，让iNow赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始
//                     iNow=0; }
//                 showNumber.eq(iNow).trigger("click");     //模拟触发数字按钮的click
//             },5000);      //2000为轮播的时间
//         }
//         autoplay();
//         slideShow.hover( function(){clearInterval(timer);},autoplay);     //另外注意setInterval的用法比较关键。
// }
