function autenticarUsuario(usuario, contrasena) {
    const usuarioCorrecto = "linamaria";
    const contrasenaCorrecta = "10209810920";

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
                resolve("Autenticación exitosa.");
            } else {
                reject("Error en la autenticación.");
            }
        }, 1500);
    });
}

// Llamada a la función
autenticarUsuario("linamaria", "maleie")
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));
