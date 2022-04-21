import './SearchBar.css';
import {PokemonBagDropdown} from './PokemonBagDropdown/PokemonBagDropdown';
import {
    React
} from 'react';

export function SearchBar(props) {

    const {
        onEnter,
        pokemonBag
    } = props;

    return (
        <div className="overall-container">
            <div className="banner-container">
                <img 
                src="http://www.warpzoned.com/wp-content/uploads/2013/02/pokemon-header.jpg" 
                alt="Pokemon Banner" 
                style={{height: "100px"}}/>
            </div>
            <div className="pokemon-bag-search-bar-container">
                <PokemonBagDropdown
                className="pokemon-bag-dropdown-container"
                pokemonBag={pokemonBag}
                />
                <div className="search-bar-container"> 
                    <input 
                    id="search-bar" 
                    type="text" 
                    placeholder="Search Pokemon"
                    onKeyDown={onEnter}
                    />
                </div>
            </div>
            <div className="pokemon-blue-container"></div>
        </div>

    )
}