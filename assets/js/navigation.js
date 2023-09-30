// Función para cargar el contenido de la pagina principal en el div al entrar a la aplicacion
/*function cargarContenidoPrincipal() {
    const mainContentContainer = document.getElementById('main-container');
    const mainContentHtmlPath = '/pages/home.html'; // Ruta al archivo home.html

    fetch(mainContentHtmlPath)
        .then(response => response.text())
        .then(mainContentHtml => {
            mainContentContainer.innerHTML = mainContentHtml;
        })
        .catch(error => {
            console.error('Error al cargar la sección principal:', error);
        });
}*/

// Función para cargar el contenido de una pagina en el div principal
function cargarPagina(pagina) {
    const mainContent = document.getElementById('main-container');
    fetch(`/pages/${pagina}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Página ${pagina} no encontrada`);
            }
            return response.text();
        })
        .then(html => {
            mainContent.innerHTML = html;
        })
        .catch(error => {
            console.error(error.message);
            cargarPagina('error_404');
        });
}


/*document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('menu-home').addEventListener('click', function () {
        cargarContenidoPrincipal();
    });
    
    document.getElementById('menu-about').addEventListener('click', function () {
        cargarPagina('about');
    });
    
    document.getElementById('menu-service').addEventListener('click', function () {
        cargarPagina('services');
    });
    
    document.getElementById('menu-contact').addEventListener('click', function () {
        cargarPagina('contact');
    });

    document.getElementById('menu-login').addEventListener('click', function () {
        cargarPagina('login');
    });

    document.getElementById('menu-register').addEventListener('click', function () {
        cargarPagina('register');
    });
    
});

cargarContenidoPrincipal();*/

cargarPagina('home');