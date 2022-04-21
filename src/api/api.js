const axios = require('axios');

const url = "https://pokeapi.co/api/v2/";

/*
Method used for when searching up a pokemon and 
returning that data
*/

//going to need to decide between axios and fetch
export async function getPokemonByName(pokeName) {
    return await axios.get(`${url}pokemon/${pokeName}`)
        .then(res => {
            return res.data; 
        }) 
        .catch(error => {
            console.error(error);
        })
}

//for evolutions, use /evolution-chain/{param}
//pokemon?limit=1125&offset=0
//assign res to list and then get random
//pokemon # and pick from that list
export async function getFullPokemonList() {
    return await axios.get(`${url}pokemon?limit=1125`)
        .then(res => {
            //handle success
            return res.data;
        })
        .catch(error => {
            //handle failure
            console.error(error);
        })
}
/***
 * Make method to grab evolutions.
 */