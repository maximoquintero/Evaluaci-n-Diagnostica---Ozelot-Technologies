/* Realizar un algoritmo que calcula la edad de una persona.
El usuario debe ingresar su año de nacimiento, día y hora.
*/

// Primero defino una constante para almacenar la fecha de nacimiento
const birthDateInput = "1990-05-15T10:30:00";

// Funcion flecha que calcula la edad
const calculateAge = birthDateInput => {
    // Validdo que la fecha sea valida
    if(new Date(birthDateInput) == "Invalid Date") return "Fecha de nacimiento invalida";
    // Creo un objeto Date a partir de la entrada del usuario
    const birthDate = new Date(birthDateInput);
    // Creo un objeto Date con la fecha actual
    const today = new Date();
    // Creo un variable para almacenar la edad 
    let age = today.getFullYear() - birthDate.getFullYear();
    // Creo una constante para calcular la diferencia de meses
    const monthDifference = today.getMonth() - birthDate.getMonth();
    // Valido si no ha pasado el mes de su cumpleanos este año
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    // Retorno la edad
    return age;
}

console.log(calculateAge(birthDateInput));