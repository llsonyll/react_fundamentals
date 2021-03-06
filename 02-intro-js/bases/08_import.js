// import heroes, { owners } from '../data/heroes';
// import { heroes, owners} from './data/heroes';
import heroes from '../data/heroes';

export const getHeroById = (id) => heroes.find((hero) => hero.id === id);
// console.log(getHeroById(2));

export const getHeroByOwner = (owner) => heroes.filter((hero) => hero.owner === owner);
// console.log(getHeroByOwner('Marvel'));