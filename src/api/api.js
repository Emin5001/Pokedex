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
export async function getPokemonEvolutionList(id) {
    return await axios.get(`${url}evolution-chain/${id}/`)
        .then(res => {
            return res.data;
        })
        .catch(error => {
            console.error(error);
        })
}

export async function getCompleteEvolutionList() {
    return await axios.get(`${url}evolution-chain`)
        .then (res => {
            return res.data;
        })
}

export async function getPreviousEvolution(id) {
    return await axios.get(`${url}evolution-chain/${id}`)
        .then((res) => {
            let evolutionData = {
                evolvesTo: res.data.evolves_to[0].species.name,
                
            }
        })
}