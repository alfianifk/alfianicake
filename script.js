feather.replace();

// Toggle class active

const navbarNav = document.querySelector('.navbar-nav_alfianifk');

document.querySelector('#hamburger-menu_alfianifk').onclick = () => {
    navbarNav.classList.toggle('active');
}

// Klik diluar siderbar
const hamburger = document.querySelector('#hamburger-menu_alfianifk');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});