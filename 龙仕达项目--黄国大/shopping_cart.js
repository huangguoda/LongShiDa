$(function () {
    var tx=$('.text');
    var oneSun = $('.one_sun');
    var sun = $('.sun');
    var checkboxNumber=$('.main_cart_checkbox');
    // function increase(tx,oneSun,sun) {
    //     $('.jia').click(function () {
    //         var index = $('.jia').index($(this));
    //         console.log(index);
    //         var shulian = tx.eq(index).val(Number(tx.eq(index).val()) + 1);
    //         sun.eq(index).text("￥" + oneSun.eq(index).text() * shulian.val() + ".00");
    //     });
    // }
    // function reduce(tx,oneSun,sun) {
    //     $('.jian').click(function () {
    //         var index = $('.jian').index($(this));
    //         var shulian = tx.eq(index).val(Number(tx.eq(index).val()));
    //         if (shulian.val() > 1) {
    //             tx.eq(index).val(shulian.val() - 1);
    //             sun.eq(index).text("￥" + oneSun.eq(index).text() * shulian.val() + ".00");
    //         }
    //     });
    // }
    //
    function countMoney(checkboxNumber,tx,oneSun){
            var sum=0;
        $('.last_checkbox').click(function(){
            var index = $('.last_checkbox').index($(this));
            console.log(index);
            var shulian = tx.eq(index).val(Number(tx.eq(index).val()));
            var len=$("input[name='list_check_name']:checked").length;
            $('.checkbox_sun').text(len);
            var tt=oneSun.eq(index).text()*shulian.val();
            if($(this)[0].checked){
                sum+=tt;
            }else{
                sum-=tt;
            }
            if(sum>=0){
                $('#span').text("￥"+sum+".00");
            }else{
                sum=null;
            }
        });
    }


    // $('.jia').click(function () {
    //     increase(tx, oneSun, sun);
    // });
    // $('.jian').click(function () {
    //     reduce(tx, oneSun, sun);
    // });
    // checkboxNumber.click(function() {
        countMoney(checkboxNumber, tx, oneSun);
    // });

    var wholeChoice=$('.checkbox1');
    var checkBox=$('.main_cart_checkbox');
    wholeChoice.click(function () {
        wholeCheckbox(wholeChoice,checkBox);
        var len=$("input[name='list_check_name']:checked").length;
        console.log(len);
        $('.checkbox_sun').text(len);
    });

    var tx=$('.text');
    var oneSun = $('.one_sun');
    var sun = $('.sun');
    var checkboxSun=$('.checkbox_sun');
    $('.jia').click(function () {
        increase(tx, oneSun, sun,this);
    });
    $('.jian').click(function () {
        reduce(tx, oneSun, sun,this);
    });
    // $('.last_checkbox').click(function () {
    //     countMoney(this, tx, oneSun,checkboxSun);
    // })
});

// //点击加号按钮文本框的value值增加
// function increase(tx,oneSun,sun,obj) {
//         var index = $('.jia').index($(obj));
//         console.log(index);
//         var shulian = tx.eq(index).val(Number(tx.eq(index).val()) + 1);
//         sun.eq(index).text("￥" + oneSun.eq(index).text() * shulian.val() + ".00");
// }
// //点击减号按钮文本框的value值减少
// function reduce(tx,oneSun,sun,obj) {
//         var index = $('.jian').index($(obj));
//         var shulian = tx.eq(index).val(Number(tx.eq(index).val()));
//         if (shulian.val() > 1) {
//             tx.eq(index).val(shulian.val() - 1);
//             sun.eq(index).text("￥" + oneSun.eq(index).text() * shulian.val() + ".00");
//         }
// }
//获取选中商品的件数和总价钱
// function countMoney(obj,tx,oneSun,checkboxSun){
//         var sum=0;
//         var index = $('.last_checkbox').index($(obj));
//         console.log(index);
//         var shulian = tx.eq(index).val(Number(tx.eq(index).val()));
//         var len=$("input[type='checkbox']:checked").length;
//         checkboxSun.text(len);
//         var tt=oneSun.eq(index).text()*shulian.val();
//         if($(obj)[0].checked){
//             sum+=tt;
//         }else{
//             sum-=tt;
//         }
//         if(sum>=0){
//             $('#span').text("￥"+sum+".00");
//         }else{
//             sum=null;
//         }
// }

// //全选、取消全选
// function wholeCheckbox(wholeChoice,checkBox) {
//     if(wholeChoice[0].checked){
//         checkBox.each(function(){
//             this.checked=true;
//         });
//     }
//     else{
//         checkBox.each(function(){
//             this.checked=false;
//         });
//     }
// }