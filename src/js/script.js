$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1150,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left.png" /></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/right.png" /></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        }]

    });
});