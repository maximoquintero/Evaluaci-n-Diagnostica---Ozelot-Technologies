/* Realizar un algoritmo que maneje una lista de usuarios,
permitiendo agregar, listar, actualizar y eliminar usuarios.

I. Agregar un usuario (Nombre usuario, edad, y contraseña).
II. Editar datos de un usuario por su id (Nombre usuario, edad, y contraseña).
III. Eliminar un usuario por su id.
IV. Ver la lista de los usuarios agregados.

Permitiendo que cada vez que se edite, agregue o elimine un dato muestre la lista actualizada.
*/

// Creo mi clase user con sus propiedades
class User {
  id;
  nameUser;
  age;
  password;

  // Creo el id y asigno los valores a las propiedades
  constructor(id, { nameUser, age, password }) {
    this.id = id;
    this.nameUser = nameUser;
    this.age = age;
    this.password = password;
  }
}

// Creo mi clase usuarios con la lista de usuarios y sus metodos
class Users {
  // Lista de usuarios
  users = [];
  // Manejo de los id de manera ascendente
  currentId = 1;

  // Get para ver usuarios
  getUsers() {
    // Si no hay usuarios mostrar un mensaje especial
    if (this.users.length === 0) {
      console.log("No hay usuarios.\n");
      return;
    }

    // mostrar los usuarios, solo el 1 y el nombre
    console.log("\nLista de usuarios:");
    this.users.forEach((user) =>
      console.log(
        `${user.id}. ${user.nameUser}`
      )
    );
  }

  // Metodo para agregar un usuario
  addUser(userData) {
    // Instancio un objecto de la clase usuario usando el id de esta clase y los datos recibidos
    const newUser = new User(this.currentId++, userData);
    // Agrego el objecto a la lista
    this.users.push(newUser);
    // Muestro el mensaje
    console.log("\nUsuario agregado correctamente.");
    // Llamo al get para mostrar la lista
    this.getUsers();
  }

  // Metodo para actualizar usuario
  updateUser(id, newData) {
    // Busco la poscicion del usuario en la lista
    const index = this.users.findIndex((user) => user.id === id);

    // Si no lo encuentra mando el mensaje
    if (index === -1) {
      console.log("Usuario no encontrado.\n");
      return;
    }

    // Reemplazo al usuario en esa poscicion con un nuevo objecto de la clase User con los nuevos valores
    this.users[index] = new User(id, newData);
    console.log("\nUsuario actualizado.");
    this.getUsers();
  }

  // Metodo de eliminar por id
  deleteUser(id) {
    // Guardo la longitud de la lista
    const previousLength = this.users.length;
    // Modifico toda la lista con una nueva donde no se guarda el que queremos eliminar
    this.users = this.users.filter((user) => user.id !== id);

    // Si la longitud de la lista actual coincide con la  que guarde antes de la operacion,
    // significa que no encontro el id y no excluyo ningun usuario por lo tanto no se modifico
    if (this.users.length === previousLength) {
      console.log("Usuario no encontrado.\n");
      return;
    }

    console.log("\nUsuario eliminado.");
    this.getUsers();
  }
}

// Creamos mi objecto users de mi clase Users para poder acceder a todos sus metodos
// y tener nuestra lista de usuarios
const users = new Users();

users.addUser({ nameUser: "Max", age: 20, password: "1234" });
users.addUser({ nameUser: "Ana", age: 25, password: "abcd" });

users.updateUser(1, { nameUser: "Maximiliano", age: 21, password: "4321" });

users.deleteUser(2);

users.getUsers();
