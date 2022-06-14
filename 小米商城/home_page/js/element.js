// 登录 首页
$('#top_li1').click(function() {
    // 点击按钮的时候显示弹窗
    $('.login_showdom').css("display", 'block')
})


// 点遮罩层返回
$('.login_showdom').click(function() {
        $(this).css('display', 'none')
    })
    // 阻止冒泡
$('.login').click(function(e) {
    e.stopPropagation()
});

// input  hint

var usename = $('.usename input')
var password = $('.password input')
var usename_hint = $('.usename_hint')
var password_hint = $('.password_hint')
var usename_stand = $('.usename_stand')
var password_stand = $('.password_stand')
$('.login_buttom').click(function() {
    // 调试取值
    // console.log(usename.val() + password.val());
    // console.log("点击成功");

    // null判断
    if (usename.val() == "") {
        usename_hint.css("display", "block")
        usename.css("border", "1px solid #F56C6C");
    }

    if (password.val() == "") {
        password_hint.css("display", "block")
        password.css("border", "1px solid #F56C6C");
    }
    // stand判断
    // 字母开头,长度5-16之间,允许字母数字下划线   字母开头,长度6-18之间,允许字母数字和下划线
    // console.log(usename.val().length);

    if (password.val().length < 5 || password.val().length > 16) {
        password_stand.css({
            "display": "block"
        })
        password.css("border", "1px solid #F56C6C");
    }

    if (usename.val().length < 5 || usename.val().length > 16) {
        usename_stand.css({
            "display": "block"
        })
        usename.css("border", "1px solid #F56C6C");
    }
})

// 选中input清除css
usename.mouseup(function() {
    // css样式清除
    usename_stand.css({
        "display": "none"
    })
    usename.css("border", "1px solid #DCDFE6");
    // console.log("css样式清除");
})
password.mouseup(function() {
        // css样式清除
        password_stand.css({
            "display": "none"
        })
        password.css("border", "1px solid #DCDFE6");
        // console.log("css样式清除");
    })
    // del

$('.s-del').click(function() {
    $(".login_showdom").css("display", "none")
})

// 页面跳转
var flag2 = 0;
var code = 0;

function pageJump_collect() {
    // 向服务器发送请求 如果服务端返回校验码 '请求成功' 则跳转 否则点击注册页面
    if (flag2 == 1) {
        console.log("true");
        window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/my_order/html/my_order.html');
    } else {
        alert("请先登录")
    }
}

function pageJump_order() {
    // 向服务器发送请求 如果服务端返回校验码 '请求成功' 则跳转 否则点击注册页面
    if (flag2 == 1) {
        console.log("true");
        window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/my_collect/html/my_collect.html');
    } else {
        alert("请先登录")
    }
}

function pageJump_shopping() {
    // 向服务器发送请求 如果服务端返回校验码 '请求成功' 则跳转 否则点击注册页面
    if (flag2 == 1) {
        console.log("true");
        window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/shopping_cart/html/shopping_cart.html');
    } else {
        alert("请先登录")
    }

}

function pageJump_allProduct() {
    // 向服务器发送请求 如果服务端返回校验码 '请求成功' 则跳转 否则点击注册页面
    if (flag2 == 1) {
        console.log("true");
        window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/all_product/html/all_product.html');
    } else {
        alert("请先登录")
    }
}

// 登录
$('.login_buttom').click(function() {
    // 发送请求
    login_req()
        // 验证状态码
    if (code == 0) {
        console.log("true");
        $('.s-del').click()
        flag2 = 1;
    }



})

function login_req() {
    var useName = $('.usename input').val()
    var password = $('password input').val()
    $.ajax({
        type: 'POST',
        url: 'http://120.78.172.212:7111/api/users/login',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify({ useName: useName, password: password }),
        dataTpye: "JSON",
        success: function(data) {
            // 跳转判断 状态码
            code = data.code;
            console.log(code);
        },
        error: function() {
            console.log("失败");
        }
    })
}