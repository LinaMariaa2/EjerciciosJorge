function procesarImagen() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const imagen = new Array(10000).fill(0); // Simula ula entrada de una imagenes en pixel
            resolve("Imagen procesada con éxito.");
        }, 2000);
    });
}


procesarImagen()
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.log(error));
