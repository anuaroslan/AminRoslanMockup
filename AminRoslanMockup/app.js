// Navigation Scroll Up Down 

const body = document.body;
const header = document.querySelector("header");
let lastScroll = 0;
let borderScroll = 70;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    console.log(currentScroll);

    // scrolldown
    if (currentScroll >= lastScroll && body.classList.contains("scroll-up")) {
        header.style.position = "fixed";
        body.classList.add("scroll-down");
        body.classList.remove("scroll-up");
    }

    // scroll Up
    if (currentScroll < lastScroll) {
        header.style.position = "fixed";
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }

    if (currentScroll <= 0) {
        header.style.position = "absolute";
        body.classList.remove("scroll-up");
    }

    if (currentScroll < 0) {
        body.classList.remove("scroll-up");

    }

    if (currentScroll <= 70) {
        body.classList.remove("scroll-down");
        header.style.position = "absolute";
    }





    lastScroll = currentScroll;
})














