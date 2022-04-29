import './PokeCard.css';
import {
    React,
} from 'react';
import { PokeCardBase } from '../PokeCardBase/PokeCardBase';


export function PokeCard(props) {

    const {
        pokemon,
        assignPokemonInformation,
        pokemonBag,
    } = props;

    const capitalizeName = (pokemonName) => {
        return pokemonName[0].toUpperCase() + pokemonName.substring(1)
    }

    return (   
        <div className="container">
            <div className="card">
                <img src={pokemon.image} alt="A photograph of a pokemon"/>
                <div className="card-data">
                    <div className="card-name">
                        <h2>
                            {capitalizeName(pokemon.name)}
                        </h2> 
                    </div>
                    <div className="card-specific-data">
                        <p>Name: {capitalizeName(pokemon.name)}</p>
                        <p>Height: {pokemon.height} Inches</p>
                        <p>Weight: {pokemon.weight} Pounds</p>
                    </div>
                </div> 
            </div>

            <PokeCardBase
            pokemon={pokemon}
            assignPokemonInformation={assignPokemonInformation}
            pokemonBag={pokemonBag}
            />
        </div>

    );
}