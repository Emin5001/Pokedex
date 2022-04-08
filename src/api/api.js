const axios = require('axios');

const url = "https://pokeapi.co/api/v2/";

/*
Method used for when searching up a pokemon and 
returning that data
*/

//going to need to decide between axios and fetch
export async function getPokemon(pokeName) {
    return await axios.get(`${url}pokemon/pikachu`)
        .then(res => {
            console.log(res.data.name); //this works
            return res.data; //this returns a promise, and how do i access the "value" inside of a promise?
        }) 
        .catch(error => {
            console.error(error);
        })
    // const res = await axios.get(`${url}pokemon/pikachu`);
    // console.log(res.data);
    // return res.data;
}

//for evolutions, use /evolution-chain/{param}
//pokemon?limit=1125&offset=0
//assign res to list and then get random
//pokemon # and pick from that list
export async function fullPokemonList() {
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