const personajes = ['naruto', 'sasuke', 'sakura']

const [p1] = personajes;
//ignorando los 2 primeros elementos
const [, , p3] = personajes;

console.log(p1);
console.log(p3);

const returnArreglo = () => {
  return ['ABC', 123];
}

const [first] = returnArreglo();
const [, second] = returnArreglo();

console.log(first);
console.log(second);

// Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre
const estadoUsado = (valor) => {
  return [valor, () => { console.log('hola mundo') }];
}

const [nombre, setNombre] = estadoUsado('naruto');
console.log(nombre);
setNombre();