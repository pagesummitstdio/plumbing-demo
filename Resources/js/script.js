const page = document.getElementById("page-body");
const navButton = document.getElementById("phone-nav-btn");
const navMenu = document.getElementById("nav-menu");

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    if (navButton.textContent === "☰") {
        navButton.textContent = "×";
        navButton.classList.add("close-icon");
    } else {
        navButton.textContent = "☰";
        navButton.classList.remove("close-icon");
    }
});

document.addEventListener("click", (e) => {
    const clickedInsideMenu = navMenu.contains(e.target);
    const clickedNavButton = navButton.contains(e.target);
    const clickedNavLink = e.target.tagName === "A" && clickedInsideMenu;

    if (navMenu.classList.contains("active") && (!clickedInsideMenu || clickedNavLink) && !clickedNavButton) {
        navMenu.classList.remove("active");
        navButton.innerHTML = "☰"; 
        navButton.classList.remove("close-icon");  
    }
});