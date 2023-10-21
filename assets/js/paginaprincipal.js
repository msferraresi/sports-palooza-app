function cerrarSesion(){
    localStorage.removeItem("nombreSesion");
    localStorage.removeItem("passSesion");
    cargarPagina('home')
}