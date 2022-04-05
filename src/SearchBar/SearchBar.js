import './SearchBar.css';
import {
    React,
    useState,
    createContext,
} from 'react';

const PokemonContext = createContext();

export function SearchBar() {
    const [pokemon, setPokemon] = useState("");

    function handleChange(event){
        setPokemon(event.target.value);
    }

    // let pokemonData = getPokemon(input);

    return (
        <div id="search-bar-container">
            <input 
            id="search-bar" 
            type="text" 
            placeholder="Search Pokemon"
            onChange={handleChange}
            />
        </div>
    )
}

