/* Realizar un sencillo algoritmo para validar si una palabra es un palíndromo,
el usuario debe ingresar una palabra y se le retorna un mensaje de valido o invalido.
*/

// Un palíndromo es una palabra o frase que se lee igual en un sentido que en otro.

// Primero defino una constante para almacenar la palabra
const word = "";

// Funcion flecha que devolvera si la palabra es un palindromo o no
const validatePalindrome = word => {
    // Valido que no venga vacia
    if (!word) return "No se detecto la palabra"
    // Convierto la palabra a minusculas y elimino los espacios
    word = word.toLowerCase();
    word = word.replace(/\s+/g, '');
    // Creo una constante para guardar la palabra invertida
    const reversedWord = word.split("").reverse().join("");
    // Comparo y retorno el resultado
    return word === reversedWord ? "Valido" : "Invalido";
}

console.log(validatePalindrome(word));