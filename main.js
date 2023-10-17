const header = document.querySelector(".header");
const mobileHeader = document.querySelector(".mobile-header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const headerContainer = document.querySelector(".header-container");
const mobileHeader1 = document.querySelector(".mobile-header-1");

let isMenuOpen = false;

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 60 && !isMenuOpen) {
        header.classList.add("scrolled");
        mobileHeader.classList.add("scrolled");
        mobileHeader.style.borderBottom = "1px solid #bababa"; // Add this line to add the border
    } else {
        header.classList.remove("scrolled");
        if (!isMenuOpen) {
            mobileHeader.classList.remove("scrolled");
            mobileHeader.style.borderBottom = "none"; // Remove the border when not scrolled
        }
    }
});

menuBtn.addEventListener("click", () => {
    headerContainer.classList.add("active");
    isMenuOpen = true;
});

closeBtn.addEventListener("click", () => {
    headerContainer.classList.remove("active");
    isMenuOpen = false;
});
