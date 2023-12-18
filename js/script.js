const swiper = new Swiper('.sample-slider', {
  loop: true,                         //loop
  autoplay: {                         //autoplay
    delay: 2000,  
  },       
  navigation: {                       //navigation(arrow)
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {                       //pagination(dots)
    el: '.swiper-pagination',
  },
})
const swiper1 = new Swiper('.sample-slider-1', {
  loop: true,                         //loop
  autoplay: {                         //autoplay
      delay: 2000,  
  },   
  pagination: {                       //pagination(dots)
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  },
  navigation: {                       //navigation(arrows)
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

const bg = document.getElementById('header')
window.onscroll = function() {
  const y = window.scrollY
  console.log(y)
  if (y>=0) {
    bg.classList.add('header-blanco')
  } 
  if (y==0) {
    bg.classList.remove('header-blanco')
  }
}