
function cerrarSesion() {
  localStorage.removeItem("nombreSesion");
  localStorage.removeItem("passSesion");
  cargarPagina('home');
}


function obtenerListaDeLigas() {
  const apiUrl = 'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const listaLigas = document.getElementById('listaLigas');
      let ligaArgentinaLink;

      data.leagues.forEach(league => {
        const listItem = document.createElement('li');
        listItem.textContent = league.strLeague;
        listaLigas.appendChild(listItem);

        
        if (league.strLeague === 'Argentina Primera Division') {
          ligaArgentinaLink = league.strWebsite;
        }
      });

     
      if (ligaArgentinaLink) {
        const linkItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = ligaArgentinaLink;
        link.textContent = 'Enlace a la liga argentina de fútbol';
        linkItem.appendChild(link);
        listaLigas.appendChild(linkItem);
      }
    })
    .catch(error => {
      console.error('Error al obtener la lista de ligas', error);
    });
}


document.addEventListener('DOMContentLoaded', function () {
  obtenerListaDeLigas();
});
