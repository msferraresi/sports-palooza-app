console.log("conectado registro js")
//localStorage.clear();
var json = localStorage.getItem('array')
var datosUsuario = []
if (json != null) { 
    datosUsuario = JSON.parse(json);
}
function guardarDatos(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let contra = document.getElementById("contra").value;
    let celular = document.getElementById("celular").value;
    let nacionalidad = document.getElementById("nacionalidad").value;
    let fechaDeNacimiento = document.getElementById("fechaDeNacimiento").value;
    datosUsuario.push(nombre, apellido, email, contra, celular, nacionalidad, fechaDeNacimiento)
    localStorage.setItem("array", JSON.stringify(datosUsuario));
}
console.log(datosUsuario)