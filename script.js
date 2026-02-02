
const navLinks = document.querySelectorAll(".nav-menu .nav-link")
const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button")


menuOpenButton.addEventListener("click", ()=>{
  // toggle 
    document.body.classList.toggle("show-mobile-menu");
})

menuCloseButton.addEventListener("click",()=>{
     menuOpenButton.click();
})

// menu close when the nav link is clicked 

navLinks.forEach(link =>{
  link.addEventListener("click",()=>menuOpenButton.click());
})


// initialise swapper

const swiper = new Swiper('.silder-wrapper', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});