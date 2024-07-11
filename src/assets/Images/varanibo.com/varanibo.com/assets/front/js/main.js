// nav

const navMenu = document.querySelector(".menu-toggler i");
const nav = document.querySelector(".main-menu-content");

navMenu.addEventListener("click", () => {
    nav.classList.toggle("main-menu-content-open");
    navMenu.classList.toggle("la-times");
});

// scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-scroll", scrollY > 0);
});

// post img

const roomImg = document.querySelector(".room-img img");

const roomImgSelect = document.querySelectorAll(".room-img-change img ");

roomImgSelect.forEach((item) => {
    item.addEventListener("click", () => {
        roomImg.src = item.src;
    });
});

// banner slider js code



const popupBtn = document.querySelectorAll(".categories-home-box");
const popupContainer = document.querySelector(".home-form-popup");
const popupClose = document.querySelector(".popup-close");
const body = document.querySelector("body");


popupBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
        popupContainer.showModal();
        body.style.overflow = "hidden"


    });
});

popupClose.addEventListener("click", () => {
    popupContainer.close();
    body.style.overflow = "visible"
});