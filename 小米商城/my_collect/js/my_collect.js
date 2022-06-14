// init 控制display
var all_control = $('.display_collect')
var collect_com = $('.collect_com')
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

function pageJump_order() {
    window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/my_collect/html/my_collect.html');
}

function pageJump_shopping() {
    window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/shopping_cart/html/shopping_cart.html');
}

function pageJump_allProduct() {
    window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/all_product/html/all_product.html');
}

// 全屏
function fullscreen() {
    win = window.open("Main.aspx", "_blank", "resizable=yes;status=yes;toolbar=no;location=no;menubar=no;directories=no;scrollbars=no;");
    window.opener = null;
    window.open('', '_self');
    window.close();
    win.moveTo(0, 0);
    win.resizeTo(screen.availWidth, screen.availHeight);
}

// 点击跳转
$("#banner_a2").click(function() {
    window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/all_product/html/all_product.html');
})

$("#banner_a1").click(function() {
    window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/home_page/home_page.html#');
})