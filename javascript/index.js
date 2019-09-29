$(document).ready(function () {
    $('.banner').bxSlider({
        pager: false
    });
    $('.prPhoto').bxSlider({
        pagerCustom: '#bx-pager'
    });
    $('.relPhoto').bxSlider({
        slideWidth: 200,
        minSlides: 2,
        maxSlides: 7,
        moveSlides: 7,
        slideMargin: 10,
        ticker: false,
        speed: 1000,
        pager: false
    });
});
$('#gallery').photobox('a', {
    loop: false
});
