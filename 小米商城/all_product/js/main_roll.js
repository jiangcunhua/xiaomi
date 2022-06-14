index = 0;
var num_1 = $('.num_style');
var num_2 = $('.num_style');
var num_3 = $('.num_style');
var li = $('.page_num');
var main = $('.page_main_all');
var r = $('.arrow_r');
var l = $('.arrow_l');
li.find('li').each(function() {
    $(this).click(function() {
        // console.log($(this).index()); 1920
        // position($(this).index());
        $(this).addClass('num_style').siblings().removeClass('num_style')
        roll($(this).index());
    })
})
r.each(function() {
    console.log(index);
    var index = 1;
    r.click(function() {
        // $(this).addClass('num_style').siblings().removeClass('num_style'
        if (index < 3 && index >= 0) {
            roll_main(index);
            index++;
            $('.page_num li').eq(index - 1).addClass('num_style').siblings().removeClass('num_style')
        }

    })
})

l.each(function() {
    var index = 1;
    console.log(index);
    l.click(function() {
        // $(this).addClass('num_style').siblings().removeClass('num_style')
        if (index < 3 && index >= 0) {
            roll_main(index);
            console.log(main.css('margin-left'));
            index--;
            console.log(index);
            $('.page_num li').eq(index + 1).addClass('num_style').siblings().removeClass('num_style')
        }

    })
    return index;
})

function position(num) {
    if (num > 2) {
        num = 0;
    } else if (num < 0) {
        num = 3;
    }
}

function roll_main(index) {
    main.css({
        "margin-left": -1834 * index + "px",
        "transition": "500ms"
    })
}

function roll(num) {
    main.css({
        "margin-left": (num * -96) + "%",
        "transition": "500ms"
    })

}