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
} from '../api/api';

import {
    FaRandom,
} from 'react-icons/fa';

// import {
//     CgPokemon
// } from 'css.gg'

export function PokeCardBase(props) {
    const {
        pokemon,
        assignPokemonInformation,
        pokemonBag,
    } = props;


    const [pokemonList, setPokemonList] = useState([]);
    
    function getRandomPokemon() {
        getFullPokemonList().then(res => {
            setPokemonList(res.results)
        });

        const randomIndex = Math.floor(Math.random() * pokemonList.length + 1);
        assignPokemonInformation(pokemonList[randomIndex].name)
    }

    //want to use something like componentDidMount in order to
    //make a random pokemon appear every time the user loads the page.
    
    // useEffect(() => {
    //     getRandomPokemon();
    // }, []);

    function catchPokemon(pokemon) {
        let catchChance = Math.floor(Math.random() * 10);
        if (catchChance >= 5){
            window.alert("You have caught this pokemon!")
            addPokemonToBag(pokemon);
        }
        else { 
            return; 
        };
    }

    function addPokemonToBag(pokemon) {
        pokemonBag.push(pokemon);
    }

    return (
        <div id="card-base">
            <div id="pokemon-bttn-containers">
                <FaRandom 
                onClick={() => getRandomPokemon()}
                id="random-pokemon"
                className="button"
                />
                <button
                id="catch-pokemon"
                onClick={() => catchPokemon(pokemon)}
                className="button"
                />
            </div> 
        </div>
    );
}