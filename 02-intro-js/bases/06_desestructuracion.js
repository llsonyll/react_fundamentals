// Desestructuracion de objetos
// Asignacion desestructurante

const persona = {
  nombre: 'Josep Jairo',
  edad: 23,
  clave: 'Rojas',
  rango: 'Divine',
}

// const nombrePersona = persona.nombre;
// const nombrePersona = persona['nombre'];

// const { nombre } = persona;
// const { edad } = persona;
// const { clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);
// console.log(nombrePersona);

const retornaPersona = ({ nombre, edad, rango = 'capitan' }) => console.log(nombre, edad, rango);

const retornaPersona2 = ({ nombre, edad, rango = 'capitan', clave }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: '12.131',
      lng: '123,213',
    }
  }
};


const persona2 = retornaPersona2(persona);

retornaPersona(persona);
console.log(persona2);

const { nombreClave } = persona2;
// const { latlng } = persona2;
const { latlng: { lat, lng } } = persona2;
console.log(nombreClave);
// console.log(latlng.lat);
console.log(lat, lng);
// console.log(lat);
// console.log(lng);