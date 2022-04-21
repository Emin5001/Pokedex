import './SearchBar.css';
import {
    React
} from 'react';

export function SearchBar(props) {

    const {
        onEnter
    } = props;

    
    return (
        <div className="overall-container">
            <div className="banner-container">
                <img 
                src="http://www.warpzoned.com/wp-content/uploads/2013/02/pokemon-header.jpg" 
                alt="Pokemon Banner" 
                style={{height: "100px"}}/>
            </div>
            <div className="search-bar-container"> 
                <div className="pokemon-bag-container">
                    <button className="pokemon-bag-button-container">
                        <img 
                        id="pokemon-bag"
                        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pokemon-egg-games-video-casino-gamer-1-42383.png"
                        alt="A Pokemon Bag"
                        style={{height: "100%"}}
                        />
                    </button>
                    <div className="pokemon-bag-contents">
                        
                    </div>
                </div>
            <input 
            id="search-bar" 
            type="text" 
            placeholder="Search Pokemon"
            onKeyDown={onEnter}
            />
            </div>
            <div className="pokemon-blue-container">

            </div>
        </div>

    )
}