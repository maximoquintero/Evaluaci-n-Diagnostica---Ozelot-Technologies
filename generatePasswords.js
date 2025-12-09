/* Realizar un algoritmo que permita generar contraseñas aleatorias con los requerimientos proporcionados
(longitud mínima de 8 caracteres, al menos una letra mayúscula, un carácter especial y un número.)
*/

const generatePassword = () => {
    // Creo una variable para almacenar la contraseña
    let password = "";
    // Creo una constante para la longitud mínima
    const length = 8;

    // Defino los arrays con los caracteres posibles
    const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "[", "]", "{", "}", "|", ";", ":", ",", ".", "<", ">", "?"];

    // Creo un for para ir asignando los caracteres aleatorios a la contraseña
    for (let i = 0; i < length; i++) {
        // Una constante para obtener un numero aleatorio entre 0 y 3
        const randomType = Math.floor(Math.random() * 4);
        // Agregar un tipo de caracter dependiendo del numero que salio
        switch (randomType) {
            case 0:
                // Agrego una letra mayuscula aleatoria
                password += uppercase[Math.floor(Math.random() * uppercase.length)];
                break;
            case 1:
                // Agrego una letra minuscula aleatoria
                password += lowercase[Math.floor(Math.random() * lowercase.length)];
                break;
            case 2:
                // Agrego un numero aleatorio
                password += numbers[Math.floor(Math.random() * numbers.length)];
                break;
            case 3:
                // Agrego un caracter especial aleatorio
                password += special[Math.floor(Math.random() * special.length)];
                break;
        }
    }
    
    // Retorno la contraseña generada
    return password;
}

console.log(generatePassword());