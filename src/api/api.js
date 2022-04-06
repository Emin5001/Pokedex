const axios = require('axios');

const url = "https://pokeapi.co/api/v2/";

/*
Method used for when searching up a pokemon and 
returning that data
*/

//going to need to decide between axios and fetch
export default async function getPokemon(pokeName) {
    return axios.get(`${url}pokemon/pikachu`)
        .then(res => {
            //handle success
            console.log(res);
            return res;
        })
        .catch(error => {
            //handle error
            console.log(error);
        }) 
}

//for evolutions, use /evolution-chain/{param}