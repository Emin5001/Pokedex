import './PokeCard.css';
import {
    React,
    useState,
} from 'react';

export function PokeCard(props) {

    const {
        pokemonName, 
        pokemonImage,
        weight,
        height,
    } = props;

    return (   
        <div className="container">
            <div className="card">
                <img src={pokemonImage} alt="A photograph of a pokemon"/>
                <div className="card-data">
                    <div className="card-name">
                        <h2>
                            {pokemonName[0].toUpperCase() + pokemonName.substring(1)}
                        </h2> 
                    </div>
                    <div className="card-specific-data">
                        <p>Name: {pokemonName[0].toUpperCase() + pokemonName.substring(1)}</p>
                        <p>Height: {height}</p>
                        <p>Weight: {weight}</p>
                    </div>
                </div>  
            </div>
        </div>
    );
}