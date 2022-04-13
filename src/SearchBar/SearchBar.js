import './SearchBar.css';
import {
    React
} from 'react';

export function SearchBar(props) {

    const {
        onEnter
    } = props;

    /**
     * PROBLEM: The css in the .css
     * file just doesn't work. 
     */
    const pokemonBagStyle = {
        pokemonBag: {
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
        }
    }
    
    return (
        <div id="search-bar-container"> 
            <div id="pokemon-bag-container">
                <img 
                id="pokemon-bag"
                class="pk-bag"
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pokemon-egg-games-video-casino-gamer-1-42383.png"
                alt="A Pokemon Bag"
                style={pokemonBagStyle.pokemonBag}
                />
            </div>
            <input 
            id="search-bar" 
            type="text" 
            placeholder="Search Pokemon"
            onKeyDown={onEnter}
            />
        </div>
    )
}