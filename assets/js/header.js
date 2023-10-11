// Agrega un evento click al icono de hamburguesa para mostrar/ocultar el menú
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('nav ul.nav-list');

mobileMenuToggle.addEventListener('click', function () {
    if (navList.style.display === 'block' || navList.style.display === '') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }
});
