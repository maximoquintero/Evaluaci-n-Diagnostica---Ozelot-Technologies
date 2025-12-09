/* Realiza un algoritmo que dibuje la sucesión de Fibonacci hasta la posición que el usuario ingrese.
*/

// Variable para el límite
const limit = 7;

// Función para generar la sucesión de Fibonacci
const fibonacci = n => {
    // Inicializamos los primeros dos números de la sucesión
    let a = 0, b = 1;
    // Array para almacenar la sucesión
    const result = [];

    // Ciclo for para generar la sucesión hasta n que es el limit
    for (let i = 0; i < n; i++) {
        // Agregamos en cada interación el valor finabocci actual a la lista
        result.push(a);
        // Guardamos el siguiente valor de fibonacci
        let temp = a + b;
        // Movemos el valor de b hacia a para poder guardarlo en la siguiente iteración
        a = b;
        // Actualizamos b con la suma calculada para avanzar en la sucesión
        b = temp;
    }

    // Retornamos la sucesión generada
    return result;
}

console.log(fibonacci(limit));
