import './PokemonBagDropdown.css';
import {PokeCard} from '../../PokemonCard/PokeCard'

export function PokemonBagDropdown(props) {

    const {
        pokemonBag 
    } = props
    
    const pokemonBagDropdown = () => {
        document.getElementById("pokemon-bag").classList.toggle("show");

    }

    return (
        <div className="pokemon-bag-container">
                    <button 
                    id="pokemon-bag-button-container"
                    className="pokemon-bag-button-container">
                        <img 
                        id="pokemon-bag"
                        src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pokemon-egg-games-video-casino-gamer-1-42383.png"
                        alt="A Pokemon Bag"
                        style={{height: "100%"}}
                        onClick={pokemonBagDropdown}
                        />
                    </button>
                    <div 
                    id="pokemon-bag-contents"
                    className="pokemon-bag-contents">
                        {pokemonBag.map(element => {
                            return (
                                <PokeCard
                                pokemon={element}
                                />
                            )
                        })}
                    </div>

                    </div>
    )
}