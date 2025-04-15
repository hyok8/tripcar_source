const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
document.head.appendChild(link);

const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
script.onload = () => {
  initSwiper();
};
document.body.appendChild(script);

function initSwiper() {
  const target = document.querySelector('#b-80694');

  const swiperContainer = document.createElement('div');
  swiperContainer.classList.add('swiper');

  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');

  const images = [
    '../img/1_kayak.png',
    '../img/2_rentalcars.png',
    '../img/3_booking.png',
    '../img/4_lotte.png',
    '../img/5_trip.png',
    '../img/6_klook.png',
    '../img/7_sk.png.',
    '../img/8_carmoa.png'
  ];
  images.forEach((imgSrc) => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    const img = document.createElement('img');
    img.src = imgSrc;
    slide.appendChild(img);
    swiperWrapper.appendChild(slide);
  });

  const pagination = document.createElement('div');
  pagination.classList.add('swiper-pagination');

  swiperContainer.appendChild(swiperWrapper);
  swiperContainer.appendChild(pagination);
  target.appendChild(swiperContainer);

  new Swiper(swiperContainer, {
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 0,
    speed: 5000,
    pagination: {
      el: pagination,
      clickable: true,
    },
  });
}