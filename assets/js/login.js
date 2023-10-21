function login() {
    event.preventDefault();
    document.getElementById('form-response').textContent = '';
    let correo = document.getElementById("txtMail").value;
    let pass = document.getElementById("txtPass").value;

    if (validarEmailLogin(correo) && validarPassLogin(pass)) {
        validarIdentidad(correo, pass)
        /*if(validarIdentidad(correo, pass)){
            document.getElementById("txtMail").value = '';
            document.getElementById("txtPass").value = '';
            document.getElementById('mail-error').textContent = '';
            document.getElementById('pass-error').textContent = '';
        }else{
            document.getElementById('form-response').textContent = 'No se pudo validar la identidad';
            event.preventDefault();
        }*/
    }
}

function validarEmailLogin(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === '') {
        document.getElementById('mail-error').textContent = 'El email no puede estar vacio.';
        return false;
    } else {
        if (regex.test(email)) {
            document.getElementById('mail-error').textContent = '';
            return true;
        } else {
            document.getElementById('mail-error').textContent = 'El email no es válido.';
            return false;
        }
    }
}

function validarPassLogin(pass) {
    if (pass.trim() === '') {
        document.getElementById('pass-error').textContent = 'La contraseña no puede estar vacia.';
        return false;
    } else {
        document.getElementById('pass-error').textContent = '';
        return true;
    }
}

function validarIdentidad(correo, pass) {
    var datosaValidar = []
    var nombreUsuario = null
    var passUsuario = null
    var datosaValidar = JSON.parse(json)
    for (let i = 0; i < datosaValidar.length; i++) {
        if (correo == datosaValidar[i]) {
            let posicionUsuario = i;
            nombreUsuario = datosaValidar[i-2]
            if (pass == datosaValidar[posicionUsuario + 1]) {
                console.log("Sesion iniciada")
                passUsuario = datosaValidar[posicionUsuario + 1]
                break;
            }
        }
    }
    if (nombreUsuario != null && passUsuario != null) {
        localStorage.setItem("nombreSesion", nombreUsuario)
        localStorage.setItem("passSesion", passUsuario)
        cargarPagina('paginaprincipal')
    }
    //return Math.random() < 0.5; 
}

function sesionIniciada() {
    if(nombreUsuario != null && passUsuario != null){
        cargarPagina('paginaprincipal')
    }
}

sesionIniciada()