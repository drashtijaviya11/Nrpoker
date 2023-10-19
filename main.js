const header = document.querySelector(".header");
const mobileHeader = document.querySelector(".mobile-header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const headerContainer = document.querySelector(".header-container");
const mobileHeader1 = document.querySelector(".mobile-header-1");
const lImage = document.querySelector(".l-image");
const faceLoginTable = document.querySelector(".face-login-table");
const loginTable = document.querySelector(".login-table");
const helpButton = document.querySelector(".help-b");
const profileButton = document.querySelector(".profile-b");
const signButton = document.querySelector(".signup-b");
const loginImage = document.querySelector(".l-image");
const signImage = document.querySelector(".s-image");
const heroSection = document.querySelector(".hero-section")

let isMenuOpen = false;


window.addEventListener("scroll", () => {
    if (window.pageYOffset > 60 && !isMenuOpen) {
        header.classList.add("scrolled");
        mobileHeader.classList.add("scrolled");
        mobileHeader.style.borderBottom = "1px solid #bababa"; 
    } else {
        header.classList.remove("scrolled");
        if (!isMenuOpen) {
            mobileHeader.classList.remove("scrolled");
            mobileHeader.style.borderBottom = "none"; 
        }
    }
});

menuBtn.addEventListener("click", () => {
    headerContainer.classList.add("active");
    heroSection.classList.remove("active");
    isMenuOpen = true;
});

closeBtn.addEventListener("click", () => {
    headerContainer.classList.remove("active");
    isMenuOpen = false;
});

document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the button with class "help-b"
    const helpButton = document.querySelector('.help-b');
    if (helpButton) {
        helpButton.addEventListener('click', function() {
            // Navigate to the FAQ page
            window.location.href = 'faq.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the button with class "help-b"
    const profileButton = document.querySelector('.profile-b');
    if (profileButton) {
        profileButton.addEventListener('click', function() {
            // Navigate to the FAQ page
            window.location.href = 'login.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the button with class "help-b"
    const signButton = document.querySelector('.signup-b');
    if (signButton) {
        signButton.addEventListener('click', function() {
            // Navigate to the FAQ page
            window.location.href = 'signup.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the button with class "help-b"
    const loginImage = document.querySelector('.l-image');
    if (loginImage) {
        loginImage.addEventListener('click', function() {
            // Navigate to the FAQ page
            window.location.href = 'face-login.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the button with class "help-b"
    const signImage = document.querySelector('.s-image');
    if (signImage) {
        signImage.addEventListener('click', function() {
            // Navigate to the FAQ page
            window.location.href = 'face-signup.html';
        });
    }
});