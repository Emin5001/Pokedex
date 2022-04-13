import './SearchBar.css';
import {
    React
} from 'react';

export function SearchBar(props) {

    const {
        onChange,
        onEnter
    } = props;

    /**
     * PROBLEM: The css in the .css
     * file just doesn't work. 
     */
    const pokemonBagStyle = {
        pokemonBag: {
            height: 30,
            display: "flex",
            justifyContent: "flex-start",
        },

        searchBar: {
            backgroundColor: "green",
            display: "flex",
            justifyContent: "flex-end",
        }
    }
    
    return (
        <div id="search-bar-container"> 
            <div id="pokemon-bag-container">
                <img 
                id="pokemon-bag"
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pokemon-egg-games-video-casino-gamer-1-42383.png"
                alt="A Pokemon Bag"
                style={pokemonBagStyle.pokemonBag}
                />
            </div>
            <input 
            id="search-bar" 
            type="text" 
            placeholder="Search Pokemon"
            onChange={onChange}
            onKeyDown={onEnter}
            style={pokemonBagStyle.searchBar}
            />
        </div>
    )
}