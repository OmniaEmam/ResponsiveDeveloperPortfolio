/*===================== MENU SHOW Y HIDDEN ======================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*===================== MENU SHOW ======================*/
/* Validate if constant exists*/

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===================== MENU HIDDEN ======================*/

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*===================== REMOVE MENU ======================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*===================== SKILLS APPERENCE ======================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


/*===================== Qualification APPERENCE ======================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


/*===================== SERVICES APPERENCE ======================*/
const modalViews = document.querySelectorAll('.services__model'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__model-close')

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    }) 
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})



/*===================== PORTFOLIO SWIPER======================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});



/*===================== TESTIMONIAL SWIPER======================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }

    }
});



/*=====================SCROLL======================*/
// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}



/*=====================Change Background======================*/
function scrollHeader(){
    const nav = document.getElementById("header");

    if(this.scrollY >= 80){
        nav.classList.add("scroll-header");
    }
    else{
        nav.classList.remove("scroll-header");
    }
}

window.addEventListener("scroll" , scrollHeader)


/*=====================show scroll top======================*/
function scrollUp(){
    const scrollUp = document.getElementById("scroll-up");
    if(this.scrollY >= 560){
        scrollUp.classList.add("show-scroll");
    }else{
        scrollUp.classList.remove("show-scroll");
    } 
}

window.addEventListener("scroll" , scrollUp);

/*=====================DARK LIGH THEME======================*/