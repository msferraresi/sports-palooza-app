function SendQuestion(){
    event.preventDefault();
    document.getElementById('form-response').textContent = '';
    let nombre = document.getElementById("txtName").value;
    let correo = document.getElementById("txtMail").value;
    let mensaje = document.getElementById("txtMessage").value;

    if(validarNombre(nombre) && validarEmail(correo) && validarMensaje(mensaje)){
        document.getElementById("txtName").value = '';
        document.getElementById("txtMail").value = '';
        document.getElementById("txtMessage").value = '';
        document.getElementById('name-error').textContent = '';
        document.getElementById('mail-error').textContent = '';
        document.getElementById('message-error').textContent = '';
        document.getElementById('form-response').textContent = 'Su consulta ha sido enviada';
    }

    console.log("Nombre: " + nombre + " Correo: " + correo + " Mensaje: " + mensaje);

    event.preventDefault();
}



function validarEmail(email) {
    var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(email)) {
        document.getElementById('mail-error').textContent = '';
        return true;
    } else {
        document.getElementById('mail-error').textContent = 'El email no es válido.';
        return false;
    }
}

function validarMensaje(mensaje) {
    if (mensaje.trim() === '') {
        document.getElementById('message-error').textContent = 'El campo no puede estar vacío.';
        return false;
    } else {
        document.getElementById('message-error').textContent = '';
        return true;
    }
}

function validarNombre(nombre) {
    if (nombre.trim() === '') {
        document.getElementById('name-error').textContent = 'El nombre no es válido.';
        return false;
    } else {
        document.getElementById('name-error').textContent = '';
        return true;
    }
}