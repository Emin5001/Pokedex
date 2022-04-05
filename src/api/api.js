const url = "https://pokeapi.co/api/v2/";

/*
Method used for when searching up a pokemon and 
returning that data
*/
export const getPokemon = async (pokeName) => {
    const response = await fetch(`${url}pokemon/${pokeName}`);
    const data = await response.json();
    return data;
}