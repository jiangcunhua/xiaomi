// 页面跳转
function pageJump_collect() {
    window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/my_order/html/my_order.html');
}

function pageJump_order() {
    window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/my_collect/html/my_collect.html');
}


function pageJump_allProduct() {
    window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/all_product/html/all_product.html');
}

var all_control = $('.display_collect')
var collect_com = $('.shopping_detail')
init();

function init() {
    var i = true;
    if (i) {
        all_control.css({
            'display': 'block'
        })
        collect_com.css({
            'display': 'none'
        })
    }
}