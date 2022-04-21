import {
  React,
  useState,
} from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { PokeCard } from '../PokemonCard/PokeCard';
import { getPokemonByName } from '../api/api';
import {
  FiArrowLeftCircle,
  FiArrowRightCircle
} from 'react-icons/fi'

function App() {

  const [pokemon, setPokemon] = useState({
    name: "pikachu",
    image: "",
    weight: "",
    height: "",
  });

  const [pokemonBag, setPokemonBag] = useState([]);

  const assignPokemonInformation = async (pokemonName) => {
    pokemonName = pokemonName.toLowerCase();
    await getPokemonByName(pokemonName)
      .then((res) => {
        console.log(res);
        setPokemon({
          name: res.name,
          image: res.sprites.other['official-artwork'].front_default,
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
      <FiArrowLeftCircle
      className="left-of-card"
      size={70}
      />
      <PokeCard
      pokemon={pokemon}  
      assignPokemonInformation={assignPokemonInformation}
      pokemonBag={pokemonBag}
      />
      <FiArrowRightCircle
      className="right-of-card"
      size={70}
      />
    </div>
  );
}

export default App;