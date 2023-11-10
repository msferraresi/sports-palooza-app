//primer API
document.addEventListener('DOMContentLoaded', function () {
  const apiUrl = 'https://www.freeforexapi.com/api/live';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
     
      console.log(data);

      const eurUsdPrice = data.rates.USDEUR.rate;
      console.log(`El precio de EUR/USD es: ${eurUsdPrice}`);
    })
    .catch(error => console.error('Error al obtener datos:', error));
});
