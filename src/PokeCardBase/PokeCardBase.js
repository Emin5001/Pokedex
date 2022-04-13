/**
 * This component will be holding the functionalities
 * of finding another pokemon (randomly) and potentially
 * catching that pokemon (also determined randomly)
 * 
 */

import './PokeCardBase.css';
import {   
    React, 
    useState,
} from 'react';

import {
    getFullPokemonList,
    getPokemonByName
} from '../api/api';


export function PokeCardBase(props) {

    const {
        pokemonName,
        assignPokemonInformation,
    } = props;

    const [pokemonList, setPokemonList] = useState([]);

    function getRandomPokemon() {
        getFullPokemonList().then(res => {
            setPokemonList(res.results);
        })
        const randomIndex = Math.floor(Math.random() * pokemonList.length + 1);
        //i attempted to pass this function as a prop. can we pass functions as props through components?
        assignPokemonInformation(pokemonList[randomIndex].name)
    }

    function catchPokemon(pokemonName) {
        let canCatch = false;

        const catchChance = Math.floor(Math.random() * 1);
        if (catchChance){
            canCatch = true;
            addPokemonToBag(pokemonName);
        }
        else { return; };
    }

    function addPokemonToBag(pokemonName) {
        
    }

    return (
        <div id="card-base">
            <div id="pokemon-bttn-containers">
                <button 
                id="random-pokemon"
                onClick={getRandomPokemon}></button>
                <button 
                id="catch-pokemon"
                onClick={catchPokemon(pokemonName)}></button>
            </div> 
        </div>
    );
}