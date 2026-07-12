const navButton = document.getElementById("phone-nav-btn");
const navMenu = document.getElementById("nav-menu");

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});