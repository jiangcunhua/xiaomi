// 登录 注册
$('#top_li3').click(function() {
    // 点击按钮的时候显示弹窗
    $('.register_showdom').css("display", 'block')
})


// 点遮罩层返回
$('.register_showdom').click(function() {
        $(this).css('display', 'none')
    })
    // 阻止冒泡
$('.register').click(function(e) {
    e.stopPropagation()
});

var r_usename = $('.r-usename input')
var r_password = $('.r-password input')
var r_password_twe = $('.r-password_twe input')

var r_usename_hint = $('.r-usename_hint')
var r_password_hint = $('.r-password_hint')
var r_password_twe_hint = $('.r-password_twe_hint')

var r_usename_stand = $('.r-usename_stand')
var r_password_stand = $('.r-password_stand')
var r_password_twe_stand = $('.r-password_twe_stand')
    // 标志
var flag = 1;
$('.register_buttom').click(function() {
    // 调试取值
    // console.log(usename.val() + password.val());
    // console.log("点击成功");

    // 选中input清除css
    r_usename.mouseup(function() {
        // css样式清除
        r_usename_hint.css("display", "none")
        r_usename_stand.css("display", "none")
        r_usename.css("border", "1px solid #DCDFE6");
        // console.log("css样式清除");
    })
    r_password.mouseup(function() {
        r_password_hint.css("display", "none")
        r_password_stand.css("display", "none")
        r_password.css("border", "1px solid #DCDFE6");
    })
    r_password_twe.mouseup(function() {
            // css样式清除
            r_password_twe_stand.css({
                "display": "none"
            })
            r_password_twe.css("border", "1px solid #DCDFE6");
            // console.log("css样式清除");
            r_password_twe_hint.css("display", "none")

        })
        // null判断
    if (r_usename.val() == "") {
        r_usename_hint.css("display", "block")
        r_usename.css("border", "1px solid #F56C6C");
        flag = 0;
    } else if (r_password.val() == "") {
        r_password_hint.css("display", "block")
        r_password.css("border", "1px solid #F56C6C");
        flag = 0;
    } else if (r_password_twe.val() == "") {
        r_password_twe_hint.css("display", "block")
        r_password_twe.css("border", "1px solid #F56C6C");
        flag = 0;
    }


    // stand判断
    // 字母开头,长度5-16之间,允许字母数字下划线   字母开头,长度6-18之间,允许字母数字和下划线
    // console.log(usename.val().length);
    else if (r_password.val() != r_password_twe.val()) {
        // console.log(password.val() + password_twe.val());
        r_password_twe_stand.css("display", "block")
        r_password_twe.css("border", "1px solid #F56C6C");
        flag = 0;
    } else if (r_password.val().length < 5 || r_password.val().length > 16) {
        r_password_stand.css({
            "display": "block"
        })
        r_password.css("border", "1px solid #F56C6C");
        flag = 0;
    } else if (r_usename.val().length < 5 || r_usename.val().length > 16) {
        r_usename_stand.css({
            "display": "block"
        })
        r_usename.css("border", "1px solid #F56C6C");
        flag = 0;
    }

    // 1.是注册判定 2.是注册请求
    else if (flag === 1) {
        var useName = $('.usename input').val()
        $.ajax({
            type: 'POST',
            url: 'http://120.78.172.212:7111/api/users/findUserName',
            contentType: 'application/json;charset=utf-8',
            data: JSON.stringify({ useName: useName }),
            dataTpye: "JSON",
            success: function(data) {
                if (data.code === 002) {
                    console.log("用户名存在");
                } else {
                    register_req(useName, password);
                }

            },
            error: function() {
                console.log("失败");
            }
        })
    }
})

// r-del
$('.r-del').click(function() {
    $('.register_showdom').css("display", "none")
})

// 封装请求函数
function register_req(useName, password) {
    var useName = $('.usename input').val()
    var password = $('password input').val()
    $.ajax({
        type: 'POST',
        url: 'http://120.78.172.212:7111/api/users/register',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify({ useName: useName, password: password }),
        dataTpye: "JSON",
        success: function(data) {
            alert("注册成功")
            $('.r-del').click()
            console.log(data);
        },
        error: function() {
            console.log("失败");
        }
    })
}