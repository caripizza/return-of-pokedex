import pokemon from '../assets/pokedex.js';

// console.log(pokemon[0]);

// const types = [];

/*
pokemon.forEach(pokemon => {
    const type = pokemon.type_1;
    if(types.includes(type)) {
        return;
    }
    types.push(type);
}); */


export default {
    getPokemon() {
        console.log('hi');
        return pokemon;
    }, /*
    getTypes() {
        return types;
    } */
};