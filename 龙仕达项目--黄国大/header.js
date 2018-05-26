// window.onload=function () {
//     var text=document.getElementById('header_text');
//     text.onfocus=function () {
//         this.value="";
//     };
//     text.onblur=function () {
//         this.value="跑步机/健身车";
//     };
//     // console.log(text);
//     var Wholegoods_disply=document.getElementById('wholegoods_disply');
//     var Wholegoods=document.getElementsByClassName('wholegoods')[0];
//     Wholegoods_disply.onmouseover=function () {
//         Wholegoods.style.display="block";
//     };
//     Wholegoods_disply.onmouseout=function () {
//         Wholegoods.style.display="none";
//     };
//     // console.log(Wholegoods_disply);
// };

$(function() {
    var tab = $("#wholegoods_disply");
    var wholeGoods=$('.wholegoods');
    tab.mouseover(function() {
        wholeGoods.stop();
        wholeGoods.stop().slideDown();
    });
    tab.mouseout(function() {
        // wholeGoods.stop();
        wholeGoods.stop().slideUp();
    });
});


// $("#title").keyup(function() {
//     if ($("#title").val().length > 12) {
//         $("#title").val($("#title").val().substring(0, 12));
//     }
//     $("#titleCount").text("还可以输入" + (12 - $("#title").val().length) + "个字");
// });