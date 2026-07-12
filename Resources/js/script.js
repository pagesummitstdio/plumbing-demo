const navButton = document.getElementById("phone-nav-btn");
const navMenu = document.getElementById("nav-menu");

if (navButton && navMenu) {
    navButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}