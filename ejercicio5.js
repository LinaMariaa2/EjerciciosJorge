// Contraseña y usuario de ejemplo
let contrasenia = "Lina250469*%";
let nombreUser = "LinaOrtega";

// Función que valida la contraseña según los requisitos
function validarContrasenia(contrasenia) {
    const regexMayusculas = /[A-Z]/;           // Al menos una mayúscula
    const regexMinusculas = /[a-z]/;           // Al menos una minúscula
    const regexNumeros = /\d/;                 // Al menos un número
    const regexCaracteresEspeciales = /[!@#$%^&*(),.?":{}|<>]/; // Al menos un carácter especial

    // Verificar longitud mínima
    if (contrasenia.length < 8) {
        return "La contraseña debe tener al menos 8 caracteres.";
    }
    // Verificar que haya al menos 2 caracteres especiales
    const caracteresEspeciales = (contrasenia.match(regexCaracteresEspeciales) || []).length;
    if (caracteresEspeciales < 2) {
        return "La contraseña debe tener al menos 2 caracteres especiales.";
    }
    // Verificar al menos una mayúscula
    if (!regexMayusculas.test(contrasenia)) {
        return "La contraseña debe contener al menos una letra mayúscula.";
    }
    // Verificar al menos una minúscula
    if (!regexMinusculas.test(contrasenia)) {
        return "La contraseña debe contener al menos una letra minúscula.";
    }
    // Verificar al menos un número
    if (!regexNumeros.test(contrasenia)) {
        return "La contraseña debe contener al menos un número.";
    }
    return "La contraseña es válida.";
}

// Función para validar el usuario y la contraseña
function validarUser(login, contrasenia) {
    const user1 = {
        nombreUser: "LinaOrtega",
        contrasenia: "Lina250469*%"
    };

    return new Promise((resolve, reject) => {
        if (login === user1.nombreUser && contrasenia === user1.contrasenia) {
            const mensajeValidacion = validarContrasenia(contrasenia);
            if (mensajeValidacion === "La contraseña es válida.") {
                resolve("Usuario y contraseña válidos.");
            } else {
                reject(mensajeValidacion);
            }
        } else {
            reject("El usuario o la contraseña son incorrectos.");
        }
    });
}

// Probar la función
validarUser("LinaOrtega", "Lina250469*%")
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));
