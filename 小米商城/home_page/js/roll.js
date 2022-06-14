// 滚播图
$(function() {
    $.ajax({
        url: 'http://120.78.172.212:7111/api/resources/carousel',
        type: 'post',
        success: function(res) {
            // console.log(res);
            showData(res);
        },
        error: function(e) {
            console.log(e);
        }
    });
});

function showData(e) {
    // var img = $('.banner');
    var banner = document.querySelector('.banner')
    var banner_ul = document.createElement('ul')
    banner_ul.classList.add('big-List')


    for (i = 0; i < 4; i++) {
        var oImg = document.createElement('img');
        var banner_li = document.createElement('li')
        var id = "http://120.78.172.212:7111/";
        oImg.src = id + e.carousel[i].imgPath;
        banner_li.appendChild(oImg);
        banner_ul.appendChild(banner_li)
        banner.appendChild(banner_ul)
    }



    // 轮播图效果

    var index = 0;
    var total = 0;
    // 声明记录是否滚动的变量
    var isMove = false;
    init();

    function init() {
        // 在末位添加一张 猫腻图
        $('.big-List').append(`<li class="big-item">
     <img
     src="http://120.78.172.212:7111/public/imgs/cms_1.jpg"
     alt=""
    />
     </li>`);

        // 在前面加一张
        $(".big-List").prepend(`<li class="big-item">
        <img
        src="http://120.78.172.212:7111/public/imgs/cms_4.jpg"
        alt=""
         />
        </li>`);

        //事件绑定      
        setBannerinit(1);

        function setBannerinit(step) {
            if (isMove) {
                return;
            }
            isMove = true;
            index += step;



            $(".big-List").animate({
                left: -1532 * index + "px",
            }, 0, function() {
                if (index > total - 2) {
                    index = 1;
                    $('.big-List').animate({
                        left: -1532 * index + "px",
                    }, 0);
                    console.log(index);
                } else if (index == 0) {
                    index = total - 2;
                    $('.big-List').animate({
                        left: -1532 * index + "px"
                    }, 0)
                }
                isMove = false;
                return index;
            })

        }

    }


    // 图片数量
    total = $('.big-List li').length;



    function setBanner(step) {
        if (isMove) {
            return;
        }
        isMove = true;
        index += step;



        $(".big-List").animate({
            left: -1532 * index + "px",
        }, 500, function() {
            if (index > total - 2) {
                index = 1;
                $('.big-List').animate({
                    left: -1532 * index + "px",
                }, 0);
                console.log(index);
            } else if (index == 0) {
                index = total - 2;
                $('.big-List').animate({
                    left: -1532 * index + "px"
                }, 0)
            }
            isMove = false;
            return index;
        })

    }


    // 点击切换 left指右边的按钮
    $('.banner_ico_left').click(function() {
        setBanner(1);
        console.log(index);
    })

    $('.banner_ico_right').click(function() {
        setBanner(-1);
    })
}