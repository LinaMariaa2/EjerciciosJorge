
let num = 8;

function numPrimo(num){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if (num <= 1){
                reject("No es primo ")
            }else{
                for(let i = 2; i < Math.sqrt(num); i++){
                    if(num % i === 0){
                        reject("no es primo ");
                        return;
                    } //math.sqrt se utiliza para calcular la raiz cuadrada 

                }
                    
            }
            resolve("Es primo");
        }, 2000); //2000 milisegundos = 2 segundos 
    })
};

numPrimo(num)  // Llamamos a la función con num
    .then((numeroPrimo) => {
        console.log(`El número ${num} es primo`);
    })
    .catch((error) => {
        console.log(`El número ${num} no es primo`);
    });

