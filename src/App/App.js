import logo from '../logo.svg';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import {PokeCard} from '../PokemonCard/PokeCard';

function App() {
  return (
    <div className="App">
      <PokeCard/>
    </div>
  );
}

export default App;
