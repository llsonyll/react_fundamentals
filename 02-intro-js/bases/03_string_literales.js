const persona = {
  nombre: 'Josep',
  apellido: 'Rojas',
  edad: 23,
  direccion: {
    calle: 'Los Girasoles',
    urbanizacion: 'La Florida',
    letra: 'J-12',
    distrito: 'Wanchaq'
  }
}

console.log(persona);

// Clonar el objeto
const persona2 = { ...persona };
persona2.nombre = 'Jairo';

console.log(persona2);
// const persona2 = persona; >> apunta al espacio en memoria no al objeto perse