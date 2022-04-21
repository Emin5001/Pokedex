import './PokemonBagDropdown.css';
import {PokeCard} from '../../PokemonCard/PokeCard'

export function PokemonBagDropdown(props) {

    const {
        pokemonBag 
    } = props
    
    const pokemonBagDropdown = () => {
        document.getElementById("individual-pokemon-bag-content")
        pokemonBag.map(e => console.log(e.name));
    }

    return (
        <div className="pokemon-bag-container">
            <img 
            id="pokemon-bag"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/pokemon-egg-games-video-casino-gamer-1-42383.png"
            alt="A Pokemon Bag"
            style={{height: "50px"}}
            onClick={pokemonBagDropdown}
            />
                <div 
                id="pokemon-bag-contents"
                className="pokemon-bag-contents">
                    {pokemonBag.map(element => {
                        return (
                            <PokeCard
                            id="individual-pokemon-bag-content"
                            pokemon={element}
                            />
                        )
                        })}
                </div>
        </div>
    )
}