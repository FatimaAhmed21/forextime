var swiperHelp = new Swiper(".mySwiper-help", {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        "@1.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@1.20": {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        "@1.60": {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});


var swiperChoose = new Swiper(".mySwiper-choose", {
    pagination: {
        el: ".swiper-pagination",
    },
});