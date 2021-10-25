var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");
const body = document.querySelector(".content");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        body.classList.remove("opacity");
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        body.classList.add("opacity");
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 20) {
        $(".header").addClass("active");
        $('.menu-icon').addClass("active");
        $('.close-icon').addClass("active");
        $(".logo").addClass("logo-active");
    } else {
        $(".header").removeClass("active");
        $('.menu-icon').removeClass("active");
        $('.close-icon').removeClass("active");
        $(".logo").removeClass("logo-active");
    }
});