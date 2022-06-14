// init 控制display
var all_control = $('.display_order_null')
var collect_com = $('.display_order_main')
var wid = $('.collect_main')
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
        wid.css({
            'height': '688px'
        })
    }
}

// pageJump
function pageJump_order() {
    window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/my_collect/html/my_collect.html');
}

function pageJump_shopping() {
    window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/shopping_cart/html/shopping_cart.html');
}

function pageJump_allProduct() {
    window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/all_product/html/all_product.html');
}