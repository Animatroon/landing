window.addEventListener('DOMContentLoaded', function() {

const menu = document.querySelector('.menu'),
      header = document.querySelector('.header'),
      nav = document.querySelector('.nav'),
      body = document.querySelector('body'),
      main = document.querySelector('.main'),
      slidesField = document.querySelector('.main__slider'),
      slides = document.querySelectorAll('.main__slide'),
      width = window.getComputedStyle(main).width,
      height = parseFloat(window.getComputedStyle(main).height) - 70;

let slideIndex = 1, offset = 0;

let lastScroll = 0;
const defaultOffset = height;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
    if (scrollPosition() >= height && !header.classList.contains("headerScroll")) {
        header.classList.add('headerScroll');
        
    }
    else if (scrollPosition() <= height && header.classList.contains("headerScroll")) {
        header.classList.remove('headerScroll');
    }
});

menu.addEventListener('click', () => {
    menu.classList.toggle("active");
    nav.classList.toggle("active");
    body.classList.toggle("active");
});


slidesField.style.width = 100 * slides.length + '%';
    
});















// field.setAttribute("name", strUser); чтобы поменять name аттрибут