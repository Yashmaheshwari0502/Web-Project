const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar")

const list = document.querySelector(".nav-list");


burger.addEventListener("click", () => {
    navbar.classList.toggle("h-nav");
 
    list.classList.toggle("v-class");
})

