var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },

    breakpoints: {
        // >= 768px
        768: {
            slidesPerView: 2,
        },

        // >= 1024
        1024: {
            slidesPerView: 3,
        }
    }
});