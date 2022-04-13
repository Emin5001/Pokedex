import {
  React,
  useState,
} from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { PokeCard } from '../PokemonCard/PokeCard';
import { getPokemon } from '../api/api';

function App() {

  const [pokemon, setPokemon] = useState({
    name: "pikachu",
    image: "",
    weight: "",
    height: "",
  });

  /**
   * PUT THIS INTO UTLS.JS
   */
  const assignPokemonInformation = (pokemon) => {
    getPokemon(pokemon)
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
      />
      
      <PokeCard
      pokemon={pokemon}  
      assignPokemonInformation={assignPokemonInformation}
      />
    </div>
  );
}

export default App;