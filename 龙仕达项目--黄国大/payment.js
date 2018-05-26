$(function () {

    $("#payment_content04 input").keyup(function (){
        inpNumber($(this));
    })
    $("label").click(function(){
        paymentMethod($("label"),$('input[type="radio"]'),$('input[type="radio"]:checked'),$(this));
    })
    $(".openP").click(function (){
        changeAttrHtml($(".openP"),"display","none");
        changeAttrHtml($(".stopP"),"display","block");
        changeAttrHtml($(".bank13"),"display","block");
        changeAttrHtml($(".bank14"),"display","block");
        changeAttrHtml($(".bank15"),"display","block");
    })
    $(".stopP").click(function (){
        changeAttrHtml($(".openP"),"display","block");
        changeAttrHtml($(".stopP"),"display","none");
        changeAttrHtml($(".bank13"),"display","none");
        changeAttrHtml($(".bank14"),"display","none");
        changeAttrHtml($(".bank15"),"display","none");
    })

})