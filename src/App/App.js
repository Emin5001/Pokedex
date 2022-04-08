import {
  React,
  useState,
} from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import {PokeCard} from '../PokemonCard/PokeCard';

function App() {

  const [pokemon, setPokemon] = useState("");

  function handleChange(event){
      setPokemon(event.target.value);
  }

  return (
    <div className="App">
      <SearchBar
      onChange={handleChange}/>
      
      <PokeCard
      pokemon={pokemon}  
      />
    </div>
  );
}

export default App;
