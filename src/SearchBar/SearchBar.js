import './SearchBar.css';
import {
    React,
    useState,
} from 'react';
import getPokemon from '../api/api';

export function SearchBar() {
    const [pokemon, setPokemon] = useState('');

    let input = document.getElementById("search-bar").value;

    let pokemonData = getPokemon(input);

    return (
        <div id="search-bar-container">
            <input id="search-bar" type="text" placeholder="Search Pokemon"/>
        </div>
    )
}

