$(function () {
    var intDiff = parseInt(30);
    $('#frame1').click(function(){
        weikongliu('#user','#password','#password_2','#cellphone','#validate','#validate','#form');
    });
    $('#frame1').click(function(){
        ConfirmPassword('#password','#password_2');
    });
    $('#gain').click(function () {
        cellphoneValidate('#cellphone','#gain1');
    });
    $('#frame1').click(function () {
        kongzifu('#user');
    });
    $('#frame1').click(function () {
        kongzifu('#password');
    });
    $('#gain').click(function () {
        $('#gain1').text(countDown(intDiff,'#gain1'));
    });
});
// //   判断填写项是否为空
// function weikongliu(obj1,obj2,obj3,obj4,obj5,obj6,obj7) {
//     if($(obj1).val()=="" || $(obj2).val()==""){
//         alert('填写项不能为空！');
//         return false;
//     }else if($(obj3).val()=="" || $(obj4).val()==""){
//         alert('填写项不能为空！');
//         return false;
//     }else if($(obj5).val()=="" || $(obj6).val()==""){
//         alert('填写项不能为空！');
//         return false;
//     }else{
//         $(obj7).prop('action','main.html');
//     }
//
// }
// //   第一次输入的密码与第二次输入的密码一不一致
// function ConfirmPassword(obj1,obj2){
//     if($(obj1).val() == $(obj2).val()){
//         // alert('恭喜您注册成功！');
//         return;
//     }else{
//         alert('第一次输入的密码与第二次输入的密码不一致，请重新输入正确的密码！');
//         return;
//     }
//
// }
// //   获取手机验证码时判断手机输入正不正确
// function cellphoneValidate(str,obj2) {
//     var re =/^1[0-9]{10}$/;
//     if (re.test($(str).val())) {
//         $(obj2).css({'display':'block'});
//     } else {
//         alert('手机号输入错误！');
//     }
// }
// //    用户名或密码不能带有空字符
// function kongzifu(str) {
//         var re=/\s/;
//         if(re.test($(str).val())){
//             alert("用户名或密码不能带有空字符！");
//             return false;
//         }else{
//             return true;
//         }
// }
// //    倒计时
// var timer=null;
// function countDown(intDiff,obj){
//     clearInterval(timer);
//     timer=setInterval(function(){
//
//         var day=0,
//             hour=0,
//             minute=0,
//             second=0;//时间默认值
//         if(intDiff > 0){
//             day = Math.floor(intDiff / (60 * 60 * 24));
//             hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
//             minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
//             second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
//         }
//         if (minute <= 9) minute = '0' + minute;
//         if (second <= 9) second = '0' + second;
//         // $('#gain1').html(day+"天");
//         // $('#gain1').html('<s id="h"></s>'+hour+'时');
//         // $('#gain1').html('<s></s>'+minute+'分');
//         $('#gain1').html('<s></s>'+second+'秒');
//         intDiff--;
//         if(second<=0){
//             $(obj).css({'display':'none'});
//         }
//     }, 1000);
// }