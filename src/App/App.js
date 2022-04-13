import {
  React,
  useState,
} from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { PokeCard } from '../PokemonCard/PokeCard';
import { PokeCardBase } from '../PokeCardBase/PokeCardBase';
import { getPokemon } from '../api/api';

function App() {

  const [imgUrl, setImgUrl] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");
  const [pokemon, setPokemon] = useState("pikachu");
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  
    /**
   * This function sets the name of the pokemon
   * from the api call to the pokemon var, which will
   * get passed into PokeCard component and displayed 
   * the card.
   */

  const assignPokemonName = (pokemon) => {
    getPokemon(pokemon).then(res => {
      setPokemon(res.name);
    })
    .catch(error => {
      window.alert("This pokemon doesn't exist! Maybe check your spelling?");
    })
  };

  /**
   * This function sets the image of the pokemon
   * from the api call to the imgUrl var, which will
   * get passed into PokeCard component and displayed 
   * on the card.
   */
  const assignPokemonImage = (pokemon) => {
    getPokemon(pokemon).then(res => {
      setImgUrl(res.sprites.front_default);
    })
  };

  /**
   * This function sets the weight of the pokemon
   * from the api call to the weight var, which
   * will get passed into PokeCard component and displayed
   * on the card. 
   */
  const assignPokemonWeight = (pokemon) => {
    getPokemon(pokemon).then(res => {
      setWeight(res.weight);
    })
  }

  const assignPokemonHeight = (pokemon) => {
    getPokemon(pokemon).then(res => {
      setHeight(res.height);
    })
  }

  /**
   * This function calls all other function that
   * fetch data about the pokemon from the api calls 
   * to the pokeapi. This function is called whenever
   * the user enters in a pokemon to search for in
   * the search bar. 
   */
  const assignPokemonInformation = (pokemon) => {
    assignPokemonName(pokemon);
    assignPokemonImage(pokemon);
    assignPokemonWeight(pokemon);
    assignPokemonHeight(pokemon);
  }

  const searchPokemonOnEnter = (event) => {
    if(event.key === "Enter") {
      assignPokemonInformation(event.target.value);
    }
  };

  return (
    <div className="App">
      <SearchBar
      onEnter={searchPokemonOnEnter}
      />
      
      <PokeCard
      pokemonName={pokemon}  
      pokemonImage={imgUrl}
      weight={weight}
      height={height}

      />

      <PokeCardBase/>
    </div>
  );
}

export default App;