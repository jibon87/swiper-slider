# swiper-slider live https://jibon87.github.io/swiper-slider/

```
Swiper slider

1.  js--link  ---> jquery.min.js

2.  js--link  ---> js/swiper.min.js

3.  css--link ---> css/swiper.min.css

4.  css--link ---> css/style.css [ for styleing ]


5.  html 
    {
    <!-- slider -->
     <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" data-background-image="img/slider-4.jpg">
                <div class="contin">
                    <h1>hello jivon</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, aliquam?</p>
                </div>
            </div>
            <div class="swiper-slide" data-background-image="img/slider-2.jpg">
                <div class="contin">
                    <h1>hello jivon</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, aliquam?</p>
                </div>
            </div>
            <div class="swiper-slide" data-background-image="img/slider-5.jpg">
                <div class="contin">
                    <h1>hello jivon</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, aliquam?</p>
                </div>
            </div>
        </div>
        <div class="swiper-button-next"><i class="fas fa-angle-double-right"></i></div>
        <div class="swiper-button-prev"><i class="fas fa-angle-double-left"></i></div>
        <div class="swiper-pagination"></div>
    </div>

    
6.  active js {

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
}
7.  note [ 
           
         ]
