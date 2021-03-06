import { getHeroById } from './bases/08_import';

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log('2 segundos despues');
//     // resolve();
//     const hero = getHeroById(2);
//     console.log(hero);
//     resolve(hero)
//   }, 2000);
// });

// promesa.then((hero) => console.log('termino ' + hero.name)).catch(err => console.warn(err));


const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log('2 segundos despues');
      // resolve();
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero)
      } else {
        reject('No se encontro al heroe');
      }
      // console.log(hero);
      // resolve(hero)
    }, 2000);
  });

}

getHeroByIdAsync(2)
  .then(console.log) // recibe el primer argumento...
  // .then(hero => console.log(hero))
  .catch(console.warn)
  // .catch(error => console.warn(error))
  ;