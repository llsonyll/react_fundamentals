const activo = false;

// let mensaje = "";

// if (activo) {
//   mensaje = 'activo'
// } else {
//   mensaje = 'inactivo'
// }

// condicional ternario
const mensaje = activo ? 'activo' : 'inactivo';
const mensaje2 = activo ? 'activo' : null;
const mensaje3 = activo && 'activo';

console.log(mensaje);
console.log(mensaje2);
console.log(mensaje3);