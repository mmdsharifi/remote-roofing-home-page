var myFullpage = new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    responsiveWidth: 900,
    responsiveHeight: 560,
    responsiveSlides: true,
    navigationTooltips: [
        "Residential",
        "Solar",
        "Metal",
        "Tiles",
        "Contact",
    ],
    anchors: ["Residential", "Solar", "Metal", "Tiles", "Contact"],
});

let menu = document.querySelector(".humbugger-menu");
let menuIcon = document.querySelector(".mobile-menu");
let closeIcon = document.querySelector(".mobile-close");
let navbar = document.querySelector(".navbar");
let links = document.querySelectorAll(".navbar li a");
[menu, ...links].forEach((el) => {
    el.addEventListener("click", () => {
        toggleMenu();
    });
});

function toggleMenu() {
    if (navbar.className === "navbar") {
        navbar.className += " open";
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        navbar.className = "navbar";
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    }
}