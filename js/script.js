const swiper = new Swiper('.sample-slider', {
  loop: true,                         //loop
  autoplay: {                         //autoplay
    delay: 2000,  
    disableOnInteraction: false,
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
    disableOnInteraction: false,
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


  var swiper2 = new Swiper('.consultorio', {
    spaceBetween: 30,
    loop: true,                         //loop
    autoplay: {                         //autoplay
      delay: 2000,  
      disableOnInteraction: false,
    },   
  });

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
  if (y>=3200) {
    const counts = document.querySelectorAll('.count_amount')
    const velocidad = 700;

    const animationCount = () =>{
        for(const count of counts){
            const countUpdate = () => {
                let cantidadMaxima = +count.dataset.cantidadTotal,
                valor_actual = +count.innerText,
                incremento = cantidadMaxima / velocidad
                if(valor_actual < cantidadMaxima){
                    count.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout(countUpdate, 5)
                }else{
                    count.innerText = cantidadMaxima
                }
            }
            countUpdate()
        }
    }
    const mostrarCount = elementos => {
        elementos.forEach(elemento => {
            if(elemento.isIntersecting){
                setTimeout(animationCount, 300)
            }
        });
    }
    const observer = new IntersectionObserver(mostrarCount, {
        threshold: 0.75
    })
    const elementosHMTL = document.querySelectorAll('.contador')
    elementosHMTL.forEach(elementoHMTL => {
        observer.observe(elementoHMTL)
    })
  }
}

const logo = document.getElementById('logo')
logo.addEventListener('click', function () {
  location.assign('/')
})