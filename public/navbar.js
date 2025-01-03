const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});