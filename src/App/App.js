import {
  React,
  useState,
} from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { PokeCard } from '../PokemonCard/PokeCard';
import { getPokemonByName } from '../api/api';

function App() {

  const [pokemon, setPokemon] = useState({
    name: "pikachu",
    image: "",
    weight: "",
    height: "",
  });

  const [pokemonBag, setPokemonBag] = useState([]);

  const assignPokemonInformation = (pokemonName) => {
    pokemonName = pokemonName.toLowerCase();
    getPokemonByName(pokemonName)
      .then((res) => {
        setPokemon({
          name: res.name,
          image: res.sprites.front_default,
          weight: res.weight,
          height: res.height,
        });
      })
      .catch((error) => {
        window.alert("This pokemon doesn't exist! Maybe check your spelling?");
      });
  };

  /**
   * This function is called whenever the 
   * user types in something in the search bar, and 
   * if they press enter, assignPokemonInformation will
   * be executed.
   */
  const searchPokemonOnEnter = (event) => {
    if(event.key === "Enter") {
      assignPokemonInformation(event.target.value);
    }
  };

  return (
    <div className="App">
      <SearchBar
      onEnter={searchPokemonOnEnter}
      pokemonBag={pokemonBag}
      />
      <PokeCard
      pokemon={pokemon}  
      assignPokemonInformation={assignPokemonInformation}
      pokemonBag={pokemonBag}
      />
    </div>
  );
}

export default App;