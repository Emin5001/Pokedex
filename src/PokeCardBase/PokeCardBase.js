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
    fullPokemonList,
    getPokemon
} from '../api/api';


export function PokeCardBase() {

    const [pokemonList, setPokemonList] = useState([]);

    function getRandomPokemon() {
        fullPokemonList().then(res => {
            setPokemonList(res.results);
        })
        let randomIndex = Math.floor(Math.random() * pokemonList.length);

        console.log(pokemonList[randomIndex]);
    }

    function catchPokemon() {
        
    }

    return (
        <div id="card-base">
            <div id="pokemon-bttn-containers">
                <button 
                id="random-pokemon"
                onClick={getRandomPokemon}></button>
                <button 
                id="catch-pokemon"
                onClick={catchPokemon}></button>
            </div> 
        </div>
    );
}