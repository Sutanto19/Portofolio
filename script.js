var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


//HIRE ME BUTTON
document.addEventListener("DOMContentLoaded", function () {
    const hireBtn = document.getElementById("hireBtn");
    const hirePanel = document.getElementById("hirePanel");
    const closePanel = document.getElementById("closepanel");
    // Create overlay element dynamically
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);

        hirePanel.style.display = "none";
        overlay.style.display = "none";

    hireBtn.addEventListener("click", function () {
        hirePanel.style.display = hirePanel.style.display === "none" ? "flex" : "none";
        overlay.style.display = overlay.style.display === "none" ? "block" : "none";
    });

    closePanel.addEventListener("click", function () {
        hirePanel.style.display = "none";
        overlay.style.display = "none";
    });
});

//CLOSE PANEL



//SLIDE CONTENT
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: false,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    loopFillGroupWithBlank: true,
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

breakpoints: {
    0: {
        slidesPerView: 1,
    },

    520: {
        slidesPerView: 2,
    },

    950: {
        slidesPerView: 3,
    },
}


});