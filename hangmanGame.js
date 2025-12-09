/* Se genera una palabra aleatoria (oculta al usuario),
el usuario debe ingresar letra por letra para intentar adivinar la palabra,
se debe validar que las letras coincidan con la posición de las letras de la palabra generada.
Máximo 5 errores.
*/

// Creo una constante para la libreria de readline
const readline = require('readline');

// Creo la interfaz para la configuración de entrada y salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variables del juego
// Variable para la palabra
let word = '';
// Array para mostrar al usuario
let secretWord = [];
// Vidas
let lifes = 5;

// Busco con una api la palabra aleatoria
fetch('https://random-word-api.herokuapp.com/word?lang=es')
    .then(res => res.json())
    .then(data => {
        // Extraigo la palabra y la paso a minusculas
        word = data[0].toLowerCase();
        // Creo el array con la longitud de la palabra y lleno con guiones bajos
        secretWord = Array(word.length).fill('_');

        console.log("Adivina la palabra:");
        console.log(secretWord.join(' '));
        // Inicio el juego
        startGame();
    })
    .catch(err => console.error(err));

// Funcion para preguntar por consola
const ask = () => {
    return new Promise(resolve => {
        rl.question("Ingresa una letra: ", letter => resolve(letter.toLowerCase()));
    });
}

// Funcion para empezar el juego
const startGame = async () => {
    // Ciclo para validar si gano o si ya perdio y funcione el juego
    while (lifes > 0 && secretWord.includes('_')) {

        // variable para la letra que se ingreso
        let letter = await ask();

        // Validar que solo sea una letra
        if (letter.length !== 1) {
            console.log("Solo se acepta una letra.");
            continue;
        }

        // Variable para saber si esta la letra en la palabra
        let result = false;

        // recorro la palabra letra por letra
        for (let i = 0; i < word.length; i++) {
            // si la letra coincide con la que esta en posicion
            if (word[i] === letter) {
                // se le asigna al array en la posicion que se encontro
                secretWord[i] = letter;
                // se cambia a true para saber que si estaba la letra
                result = true;
            }
        }

        // si no estaba la letra se le quita vida
        if (!result) {
            lifes--;
            console.log(`Fallaste. Te quedan ${lifes} vidas.`);
        } else {
            console.log("Correcto");
        }

        console.log(secretWord.join(' '));
    }

    // Cuando acabe el while es porque o gano o perdio, lo valido si es que tenia vidas o no
    if (lifes === 0) {
        console.log("Perdiste! La palabra era:", word);
    } else {
        console.log("¡Ganaste! La palabra era:", word);
    }

    // Termino con la interfaz para ya no es escuchar por consola
    rl.close();
}
