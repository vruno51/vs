function contarVocales(texto) {
    let vocales = "aeiou";
    let contador = 0;
    
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

function invertirArray(array) {
    let resultado = [];
    for (let i = array.length - 1; i >= 0; i--) {
        resultado.push(array[i]);
    }
    return resultado;
}

function buscarNumero(array, numero) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero) {
            return true;
        }
    }
    return false;
}

// Probando las funciones
console.log("Vocales en 'hola':", contarVocales("hola")); // Debería ser 2
console.log("Array invertido:", invertirArray([1, 2, 3, 4])); // Debería ser [4, 3, 2, 1]

let numeros = [10, 20, 30, 40];
console.log("¿Está el 20?:", buscarNumero(numeros, 20)); // Debería ser true