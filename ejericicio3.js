/*debdemos buscar por id si existe el usuario si no enviar mensaje error 
usuarios =[
    {
        idB: 67882,
        nombre: "lina",
        id: 123
        
    },

    {
        idB: 12345,
        nombre: "juan",
        id: 89
        
    },
    {
        idB: 737893,
        nombre: "pepe",
        id: 555
        
    },
    {
        idB: 10298109,
        nombre: "flor",
        id: 45
        
    }
];
    
//console.log(usuarios)

function buscarUser(usuarios, idB){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const userEncontrado = usuarios.find(usuario => usuario.idB === idB)
            if(userEncontrado){
                resolve(userEncontrado);
            }else{
                reject(`No se encontro un usuario con id ${idB}`)
            }

        },2000 );
    });
}

buscarUser(usuarios,73)
    .then((userEncontrado)=>{
        console.log("user encontrado")
        console.log(userEncontrado)
    })
    .catch((errorUser)=> {
        console.log(errorUser)
    });
*/
//Vamos a buscar el user por la ciudad 
usuarios =[
    {
        idB: 67882,
        nombre: "lina",
        ciudad: "Popayan"
        
    },

    {
        idB: 12345,
        nombre: "juan",
        ciudad: "Cali"
        
    },
    {
        idB: 737893,
        nombre: "pepe",
        ciudad: "Tolima"
        
    },
    {
        idB: 10298109,
        nombre: "flor",
        ciudad: "Medellin"
        
    }
];

function encontrarCiudad(usuarios, ciudad){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const userEncontrado = usuarios.find(ciudadUser => ciudadUser.ciudad.toLowerCase() === ciudad) // El tolower para convertir el texto en minuscula 
            if(userEncontrado){
                resolve(userEncontrado)
            }else{
                reject(`No hemos encontrado a trabajadores en la ciudad de ${ciudad}`)
            }
        }, 2000);
        
    });
}

encontrarCiudad(usuarios, "cali")
    // el parámetro userEncontrado es el valor resuelto de la promesa.
    // El valor que pasa a la función dentro de .then() es el usuario encontrado, 
    // y podemos acceder a sus propiedades usando userEncontrado.nombre o userEncontrado.ciudad.
    .then((userEncontrado)=>{
        console.log(`El User de la ciudad de ${userEncontrado.ciudad} se encontro y su nombre es ${userEncontrado.nombre}`)
    })
    .catch((msjError)=>{
        console.log(msjError)
    });