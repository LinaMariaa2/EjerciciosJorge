// Ordenamiento de array de froma ascendente
/*
let arreglo = [28, 3, 46, 5, 6];

function ordenandoArray(arreglo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            for (let i = 0; i < arreglo.length - 1; i++) {
                for (let j = 0; j < arreglo.length - 1 - i; j++) {  // Comparar elementos adyacentes
                    if (arreglo[j] > arreglo[j + 1]) {
                        let temp = arreglo[j];
                        arreglo[j] = arreglo[j + 1];
                        arreglo[j + 1] = temp;
                    }
                }
            }
            resolve(arreglo);  // Resolver la promesa con el arreglo ordenado
        }, 2000);
    });
}

ordenandoArray(arreglo).then((resultado) => {
    console.log(resultado);  // Mostrar el arreglo ordenado
});
*/
let arreglo = [23,4,28,6,733,89];

function ordenandoArrayA(arreglo) {
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            arreglo.sort((a, b) => a - b);
            resolve(arreglo)
        },2000);    
        
    });

}

ordenandoArrayA(arreglo)
.then((resultadoArreglo) =>{
        console.log(resultadoArreglo)
    });

//Arreglo de forma descendente

/*Si el resultado de b - a es positivo, eso significa que b es mayor que a y, por lo tanto, se colocará antes que a en el arreglo.

Si el resultado de b - a es negativo, eso significa que a es mayor que b, y entonces a se colocará antes que b.

Si el resultado es cero, los elementos se consideran iguales en cuanto al orden y no se modifican.*/

let arreglod = [28, 2,25,344,669993,9292]
function arregloDescendiente (arreglod){
    return new Promise((resolve)=>{
        setTimeout(() =>{
            arreglod.sort((a,b) => b-a);
            resolve(arreglod)

        }, 2000);
    });
}

arregloDescendiente(arreglod)
.then((resultado) => {
    console.log(resultado)
});