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

cargarPagina('home');