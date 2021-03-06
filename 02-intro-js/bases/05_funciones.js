const saludar = function (nombre) {
  return `hola ${nombre}`;
}

const saludar2 = (nombre) => {
  return `hola ${nombre}`;
}

const saludar3 = (nombre) => `hola ${nombre}`;

const user = () => {
  return {
    nombre: 'Nombre',
    id: 1
  }
}

// const user2 = () => { nombre: 'nombre2', id: 2 };

const user3 = () => ({
  nombre: 'nombre3',
  id: 3
})

console.log(saludar('saludo1'));
console.log(saludar2('saludo2'));
console.log(saludar3('saludo3'));
console.log(user());
console.log(user3());

// tarea
// funcion flecha
// tiene que retornar un objeto implicito
// probarlo

function getUsuarioActivo(nombre) {
  return {
    uid: 'ABCDEF',
    username: nombre,
  }
}

const usuarioActivo = getUsuarioActivo('Josep');
console.log(usuarioActivo);

// Resolucion de la tarea
const getResueltoUsuario = (nombre) => ({
  uid: 'Abcdefg',
  username: nombre,
})

const usuarioResuelto = getResueltoUsuario('Jairo')
console.log(usuarioResuelto);