const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
document.head.appendChild(link);

const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
script.onload = initSwiper;
document.body.appendChild(script);

function initSwiper() {
    fetch('../data/rentlogo.json')
        .then(res => res.json())
        .then(images => {
            const target = document.querySelector('#b-80694 .banArea');

            const swiperContainer = document.createElement('div');
            swiperContainer.classList.add('swiper', 'rolling-swiper');

            const swiperWrapper = document.createElement('div');
            swiperWrapper.classList.add('swiper-wrapper');

            images.forEach(item => {
                const slide = document.createElement('div');
                slide.classList.add('swiper-slide');
                slide.innerHTML = `
            <img src="../img/${item.img}" alt="${item.alt}" />
          `;
                swiperWrapper.appendChild(slide);
            });

            swiperContainer.appendChild(swiperWrapper);
            target.appendChild(swiperContainer);

            new Swiper('.rolling-swiper', {
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 32,
                speed: 6000,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
                allowTouchMove: false,
            });
        });
}