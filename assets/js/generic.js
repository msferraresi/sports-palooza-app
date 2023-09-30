function uploadHeader(){
    const footerContainer = document.getElementById('header-container');
    const footerHtmlPath = '/components/header.html';

    fetch(footerHtmlPath)
    .then(response => response.text())
    .then(footerHtml =>{
        footerContainer.innerHTML = footerHtml;
    }).catch(error => {
        console.log('Error al cargar header:',error);
    });
}
uploadHeader();

function uploadFooter(){
    const footerContainer = document.getElementById('footer-container');
    const footerHtmlPath = '/components/footer.html';

    fetch(footerHtmlPath)
    .then(response => response.text())
    .then(footerHtml =>{
        footerContainer.innerHTML = footerHtml;
    }).catch(error => {
        console.log('Error al cargar footer:',error);
    });
}
uploadFooter();