$(function () {
    changeAttrHtml($(".ah3"), "color","#005aa0");
    changeAttrHtml($(".ah3_1"),"color","#005aa0");
    $(".number1").addClass("numclass1");
    $(".nav_a a").eq(0).addClass("ah4");

    //在页面上鼠标放上去改变颜色
    $(".ah3").hover(function () {
        changeAttrHtml($(this),"color","red");
    },function () {
        changeAttrHtml($(this),"color","#005aa0");
    });
    $(".ah3_1").hover(function () {
        changeAttrHtml($(this),"color","red");
    },function () {
        changeAttrHtml($(this),"color","#005aa0");
    });

    //设定文本框只能输入数字
    $(".jump").keyup(function () {
        inpNumber($(this));
    });
    $("#inp2").keyup(function () {
        inpNumber($(this));
    });
    $("#inp3").keyup(function () {
        inpNumber($(this));
    });

    //设定点击边成红底白字
    $(".nav_a").children().click(function () {
        classVal($(this),"ah4");
    });

    //设定鼠标放上去就出现边框和加阴影
    $(".commodity").mouseover(function () {
        changeAttrHtml($(this),"border-color","red");
        changeAttrHtml($(this),"box-shadow","3px 3px 5px #CCCCCC");
    });
    $(".commodity").mouseout(function () {
        changeAttrHtml($(this),"border-color","#cccccc");
        changeAttrHtml($(this),"box-shadow","0 0");
    });
    $(".commodity_1").mouseover(function () {
        changeAttrHtml($(this),"border-color","red");
        changeAttrHtml($(this),"box-shadow","3px 3px 5px #CCCCCC");
    });
    $(".commodity_1").mouseout(function () {
        changeAttrHtml($(this),"border-color","#cccccc");
        changeAttrHtml($(this),"box-shadow","0 0");
    });

    //不能去除￥符号
    $("#inp2").keyup(function () {
        notClear(this);
    });
    $("#inp2").blur(function () {
        notClear(this);
    });
    $("#inp3").keyup(function () {
        notClear(this);
    });
    $("#inp3").blur(function () {
        notClear(this);
    });

    //分页功能
    $("#pagination1").pagination({
    	currentPage: 1,
    	totalPage: 100,
    	isShow: true,
    	count: 7,
    	homePageText: "首页",
    	endPageText: "尾页",
    	prevPageText: "上一页",
    	nextPageText: "下一页"
    });

    //更多的显示和隐藏
    $(".more1").click(function () {
        changeAttrHtml($(".more1"),"display","none");
        changeAttrHtml($(".img1_1"),"display","none");
        changeAttrHtml($(".stop1"),"display","block");
        changeAttrHtml($(".img5_1"),"display","block");
        changeAttrHtml($(".moreDiv1"),"display","block");
        changeAttrHtml($(".moreDiv2"),"display","block");

    });
    $(".stop1").click(function () {
        changeAttrHtml($(".more1"),"display","block");
        changeAttrHtml($(".img1_1"),"display","block");
        changeAttrHtml($(".stop1"),"display","none");
        changeAttrHtml($(".img5_1"),"display","none");
        changeAttrHtml($(".moreDiv1"),"display","none");
        changeAttrHtml($(".moreDiv2"),"display","none");
    });
    $(".more2").click(function () {
        changeAttrHtml($(".more2"),"display","none");
        changeAttrHtml($(".img1_2"),"display","none");
        changeAttrHtml($(".stop2"),"display","block");
        changeAttrHtml($(".img5_2"),"display","block");
        changeAttrHtml($(".moreDiv3"),"display","block");
        changeAttrHtml($(".moreDiv4"),"display","block");
    });
    $(".stop2").click(function () {
        changeAttrHtml($(".more2"),"display","block");
        changeAttrHtml($(".img1_2"),"display","block");
        changeAttrHtml($(".stop2"),"display","none");
        changeAttrHtml($(".img5_2"),"display","none");
        changeAttrHtml($(".moreDiv3"),"display","none");
        changeAttrHtml($(".moreDiv4"),"display","none");
    });
    $(".more3").click(function () {
        changeAttrHtml($(".more3"),"display","none");
        changeAttrHtml($(".img1_3"),"display","none");
        changeAttrHtml($(".stop3"),"display","block");
        changeAttrHtml($(".img5_3"),"display","block");
        changeAttrHtml($(".moreDiv5"),"display","block");
        changeAttrHtml($(".moreDiv6"),"display","block");
    });
    $(".stop3").click(function () {
        changeAttrHtml($(".more3"),"display","block");
        changeAttrHtml($(".img1_3"),"display","block");
        changeAttrHtml($(".stop3"),"display","none");
        changeAttrHtml($(".img5_3"),"display","none");
        changeAttrHtml($(".moreDiv5"),"display","none");
        changeAttrHtml($(".moreDiv6"),"display","none");
    })
});