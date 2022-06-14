$(function() {
    $.ajax({
        url: 'http://120.78.172.212:7111/api/product/getAllProduct',
        type: 'post',
        success: function(res) {
            //console.log("请求成功");
            //console.log(res);
            showDate(res)
        },
        error: function() {
            console.log("请求失败");
        }
    })
});

function showDate(e) {






    for (var i = 0; i < e.Product.length; i++) {
        apply(i);
    }

    // 手机页面封装
    function apply(i) {

        // 将图片插入pic
        var pic = $('.pic')[i];
        // var pic = document.getElementsByClassName('.pic')
        var id = 'http://120.78.172.212:7111/';
        var oImg = document.createElement('img');
        // 大图片插入   
        oImg.src = id + e.Product[i].product_picture;
        // var temp_li = document.createElement('li')
        // temp_li.appendChild(oImg)
        pic.append(oImg)
            //console.log(pic);
            // pic.pendChild(temp_li)


        //名字封装
        // var name = $('.phone_name');
        var name = $('.center_banner1_right ul li .phone_name');
        // 这边的写法dom和jq混写 达到效果
        name[i].innerText = e.Product[i].product_name;
        name.css({
            "white-space": "nowrap"
        })



        // title插入
        var title = $('.center_banner1_right ul li .phone_title');
        title[i].innerText = e.Product[i].product_title;

        // price插入
        var price = $('.center_banner1_right ul li .price');
        // price.html(e.Product[i].product_price + "元")
        price[i].innerText = e.Product[i].product_price + "元";

        var price_selling = $('.center_banner1_right ul li .price_selling')
        price_selling[i].innerText = e.Product[i].product_selling_price + "元";
        var hen = document.createElement('div')
        price_selling[i].append(hen)
        hen.classList.add("hen")

        if (e.Product[i].product_price == e.Product[i].product_selling_price) {
            price_selling[i].innerHTML = ""
            price[i].style.left = "16%"
        }
    }


}