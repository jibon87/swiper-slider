(function ($) {
    "use strict";

    // jquery-bg
    $("*[data-background-image]").each(function () {
        $(this).css({
            "background-image": "url(" + $(this).data("background-image") + ")",
        });
    });

    // swiper c..
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        // spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 1,
                // spaceBetween: 50,
            },
        },
    });
})(jQuery);
