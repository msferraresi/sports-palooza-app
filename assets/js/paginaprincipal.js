
document.addEventListener('DOMContentLoaded', function () {
  const apiKey = '3b74ae80bbmsh9a1a268dad8d097p100222jsnd0e0d5aec999';
  const locationKey = 'Santa Isabel, Córdoba';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'accuweatherstefan-skliarovv1.p.rapidapi.com'
    }
  };

  // URL de la API para obtener condiciones climáticas por ubicación.
  const apiUrl = `https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey?locationKey=${locationKey}`;

  const weatherInfo = document.getElementById('weather-info');

  async function obtenerCondicionesClimaticas() {
    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();

      // Manipula los datos y muestra la información en la página.
      if (data && data.length > 0) {
        const ul = document.createElement('ul');
        data.forEach(entry => {
          const li = document.createElement('li');
          li.textContent = `Hora: ${entry.DateTime}, Temperatura: ${entry.Temperature.Imperial.Value} °F`;
          ul.appendChild(li);
        });
        weatherInfo.appendChild(ul);
      } else {
        weatherInfo.textContent = 'No se encontraron datos climáticos.';
      }
    } catch (error) {
      console.error(error);
      weatherInfo.textContent = 'Error al cargar los datos climáticos.';
    }
  }

  // Llama a la función para obtener condiciones climáticas cuando la página se carga.
  obtenerCondicionesClimaticas();
});
