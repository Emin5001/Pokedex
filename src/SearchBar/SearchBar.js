import './SearchBar.css';
import {
    React
} from 'react';

export function SearchBar(props) {

    const {
        onEnter
    } = props;

    
    return (
        <div className="banner-container">
            <img src="http://www.warpzoned.com/wp-content/uploads/2013/02/pokemon-header.jpg" alt="Pokemon Banner"/>
            <div className="search-bar-container"> 
                <div className="pokemon-bag-container">
                    <img 
                    id="pokemon-bag"
                    src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pokemon-egg-games-video-casino-gamer-1-42383.png"
                    alt="A Pokemon Bag"
                    />
                </div>
                <input 
                id="search-bar" 
                type="text" 
                placeholder="Search Pokemon"
                onKeyDown={onEnter}
                />
            </div>
        </div>
    )
}