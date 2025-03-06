// Ejercicio ingreso al sistemas por medio del login con password y usuario


function verificarDatos(login, pass, usuario){
    return new Promise((resolve, reject) =>{
        const exito = (login === usuario.login) && (pass === usuario.contrasenia )
        setTimeout(()=>{
            if(exito){
                resolve(`Bienvenido ${usuario.nombre}`)
            }else{
                reject("lo siento hubo un problema al iniciar ")
            }
        }, 2000);
    });
}

const usuarios = {
    usuario1: {
      nombre: "Ana García",
      login: "anagarcia",
      contrasena: "Contraseña123*"
    }
  };
  
  console.log("Iniciando...");
  
  const login = "anagarcia";
  const pass = "Contras";
  
  verificarDatos(login, pass, usuarios.usuario1)
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => {
      console.error(error);
    });