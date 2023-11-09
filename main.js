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
const loginImage = document.querySelector(".l-image");
const signImage = document.querySelector(".s-image");
const heroSection = document.querySelector(".hero-section")
const gameButton = document.querySelector(".game-btn");
const ambButton = document.querySelector(".amb-btn");


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
    const loginImage = document.querySelector('.l-image');
    if (loginImage) {
        loginImage.addEventListener('click', function() {
            // Navigate to the FAQ page
            window.location.href = 'face-login.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const signImage = document.querySelector('.s-image');
    if (signImage) {
        signImage.addEventListener('click', function() {
            window.location.href = 'face-signup.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.querySelector(".home-btn");
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutButton = document.querySelector(".about-btn");
    if (aboutButton) {
        aboutButton.addEventListener('click', function() {
            window.location.href = 'about.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const tourButton = document.querySelector(".tour-btn");
    if (tourButton) {
        tourButton.addEventListener('click', function() {
            window.location.href = 'about.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const conButton = document.querySelector(".con-btn");
    if (conButton) {
        conButton.addEventListener('click', function() {
            window.location.href = 'contact.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector(".login-b");
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const sBtn = document.querySelector(".s-btn");
    if (sBtn) {
        sBtn.addEventListener('click', function() {
            window.location.href = 'signup.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const siBtn = document.querySelector(".si-btn");
    if (siBtn) {
        siBtn.addEventListener('click', function() {
            window.location.href = 'signup.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector(".logo");
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const home = document.querySelector(".home");
    if (home) {
        home.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const homeL = document.querySelector(".home-l");
    if (homeL) {
        homeL.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});


var acc = document.getElementsByClassName("detail");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(event) {
    event.preventDefault();

    var faqC = this.nextElementSibling;

    // Close all other "faq-c" elements
    var faqCList = document.getElementsByClassName("faq-c");
    for (var j = 0; j < faqCList.length; j++) {
      if (faqCList[j] !== faqC) {
        faqCList[j].style.display = "none";
      }
    }

    if (faqC.style.display === "block") {
      faqC.style.display = "none";
    } else {
      faqC.style.display = "block";
    }
  });
}

