
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile navigation menu
menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuBtn.setAttribute("aria-expanded", isOpen);
    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});

// Automatically display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();
