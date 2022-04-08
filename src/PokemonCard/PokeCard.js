import './PokeCard.css';
import React from 'react';
import {getPokemon} from '../api/api';

export function PokeCard(props) {
    const { pokemon } = props.pokemon;

    let pokemonData = getPokemon(pokemon);
    console.log(pokemonData);

    return (   
        <div className="container">
            <div className="card">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" alt="A photograph of a pokemon"/>
                <div className="card-data">
                    <div className="card-name">
                        {/* <h2>
                            {pokemonData.name}
                        </h2> */}
                    </div>
                    <div className="card-specific-data">
                        <p>Name: </p>
                        <p>Abilities: </p>
                        <p>Weight: </p>
                        <p>Height: </p>
                    </div>
                </div>  
            </div>
        </div>
    );
}