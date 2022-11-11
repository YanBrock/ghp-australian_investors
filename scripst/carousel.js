let position = 0;
let slidesToShow = null;
if(window.screen.width >= 1100) {
   slidesToShow = 3;
}

if(window.screen.width < 1100 && window.screen.width >= 730) {
   slidesToShow = 2;
}

if(window.screen.width < 730) {
   slidesToShow = 1;
}

const slidesToScroll = 1;
const container = document.querySelector(".information_carousel");
const track = document.querySelector(".information_carousel-wrapper");
const btnPrev = document.querySelector(".information_btn-prev");
const btnNext = document.querySelector(".information_btn-next");
const items = document.querySelectorAll(".carousel_item");
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
   item.style.minWidth = `${itemWidth}px`;
});


const carouselNextSlide = () => {
   const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

   position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

   setPosition();
   checkBtns();
}

const carouselPrevSlide = () => {
   const itemsLeft = Math.abs(position) / itemWidth;

   position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

   setPosition();
   checkBtns();
}

const setPosition = () => {
   track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
   btnPrev.disabled = position === 0;
   btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
}

checkBtns();

btnNext.addEventListener("click", carouselNextSlide);
btnPrev.addEventListener("click", carouselPrevSlide);