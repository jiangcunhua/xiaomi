// ajax导入

$(function() {
    $.ajax({
        url: 'http://120.78.172.212:7111/api/product/getAllProduct',
        type: 'post',
        success: function(res) {
            showData(res);
            // console.log(res.Product[0].product_picture);
        },
        error: function() {
            console.log("请求失败");
        }
    })

    function showData(e) {
        var li = $('.data').find('li');
        li.each(function(index) {
            $(this).append(`
                     <div class="pic"><img src="${("http://120.78.172.212:7111/"+e.Product[index].product_picture)}"></img></div>
                     <div class="phone_name">${(e.Product[index].product_name)}</div>
                     <div class="phone_title">${(e.Product[index].product_title)}</div>
                     <div class="phone_price">
                         <div class="price">${(e.Product[index].product_price)}</div>
                         <div class="price_selling">
                         ${e.Product[index].product_selling_price}
                             <div class="hen"></div>
                         </div> 
                            `)
        })
    }
})

// 页面插入
function pageJump_collect() {
    window.open('file:///C:/Users/jiangliu/Desktop/%E5%B0%8F%E7%B1%B3%E5%95%86%E5%9F%8E/my_order/html/my_order.html');
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