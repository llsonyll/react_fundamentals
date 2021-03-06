const arreglo = [1, 2, 3, 4];
arreglo.push(5);
const arreglo2 = [5, ...arreglo];

let arreglo3 = arreglo2.map((e) => e + 1);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);