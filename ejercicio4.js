/* El factorial de un número entero positivo 
es la multiplicacion de este hacia atras= 5! = 5x4x3x2x1 =120 */

// El factorial no está definido para números negativos
let numero= 3;
function factorialNumero(numero) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let resultado = 1;
                for (let i = 1; i <= numero; i++) {
                    resultado *= i;
                }
        resolve(resultado);
        
        },1500);
    });
}

factorialNumero(numero)  
    .then((numeroFactorizado) => {
        console.log(`El factorial del ${numero} es ${numeroFactorizado}`);
    });
   
