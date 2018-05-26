$(function () {
    yincangxianshi('.span_2','.login_AA','.login_A');
    $('.span_2').click(function () {
        yincangxianshi('.span_2','.login_A')
    });
    $('.login_AA').click(function () {
        yincangxianshi1('.login_AA','.login_A')
    });
    $("#frame1").click(function() {
        weikong("#user","#password")
    });
});
// //    显示与隐藏
// function yincangxianshi(xianshi,obj) {
//     $(obj).css({'display':'block'});
// }
// function yincangxianshi1(yincang,obj) {
//     $(obj).css({'display':'none'});
// }
// //      内容不能为空
// function weikong(className2,className3) {
//     if($(className2).val()=="" || $(className3).val()==""){
//         alert('填写项不能为空！');
//         return ;
//     }
//     else{
//         location.href="main.html";
//     }
// }