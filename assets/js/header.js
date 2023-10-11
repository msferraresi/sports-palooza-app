function toggleMobileMenu() {
    var navList = document.querySelector('nav ul.nav-list');
    if (navList.style.display === 'block' || navList.style.display === '') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }
}

