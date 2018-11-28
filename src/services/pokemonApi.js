import pokemonz from '../assets/pokedex.js';


const types = [];


pokemonz.forEach(pokemon => {
    const type1 = pokemon.type_1;
    if(types.includes(type1)) {
        types.push(type1);
    } else return;
});


export default {
    getPokemon() {
        return pokemonz;
    },
    getTypes() {
        return types;
    }
};