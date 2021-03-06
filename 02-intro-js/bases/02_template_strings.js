const nombre = "Josep"
const apellido = "Rojas"

const nombreCompleto = `${nombre} ${apellido}`
// const nombreCompleto = nombre + "-" + apellido;

console.log(nombreCompleto);

function getSaludo(nombreScopped) {
  return 'Hola gente ' + nombreScopped;
}

console.log(`Este es un saludo: ${getSaludo('parametrizada')} `);