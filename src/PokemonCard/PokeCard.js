import './PokeCard.css';
import {
    React,
    useState,
} from 'react';
import { PokeCardBase } from '../PokeCardBase/PokeCardBase';

export function PokeCard(props) {

    const {
        pokemon,
        assignPokemonInformation,
        pokemonBag,
    } = props;

    return (   
        <div className="container">
            <div className="card">
                <img src={pokemon.image} alt="A photograph of a pokemon"/>
                <div className="card-data">
                    <div className="card-name">
                        <h2>
                            {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                        </h2> 
                    </div>
                    <div className="card-specific-data">
                        <p>Name: {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</p>
                        <p>Height: {pokemon.height}</p>
                        <p>Weight: {pokemon.weight}</p>
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