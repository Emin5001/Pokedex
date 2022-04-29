import {
  React,
  useState,
  useEffect
} from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { PokeCard } from '../PokemonCard/PokeCard';
import { getPokemonByName, getPokemonEvolutionList, getCompleteEvolutionList } from '../api/api';
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
    id: 0,
  });

  const [previousPokemon, setPreviousPokemon] = useState({
    name: "",
    image: "",
    weight: "",
    height: "",
    id: 0,
  })

  const [nextPokemon, setNextPokemon] = useState({
    name: "",
    image: "",
    weight: "",
    height: "",
    id: 0,
  })

  const [pokemonEvolution, setPokemonEvolution] = useState({
    evolvesTo: "",
    evolvesFrom: "",
  });

  const [pokemonBag, setPokemonBag] = useState([]);

  const assignPokemonInformation = async (pokemonName) => {
    pokemonName = pokemonName.toLowerCase();
    await getPokemonByName(pokemonName)
      .then((res) => {
        setPokemon({
          name: res.name,
          image: res.sprites.other['official-artwork'].front_default,
          weight: res.weight,
          height: res.height,
          id: res.id,
        });
      })
      .catch((error) => {
        window.alert("This pokemon doesn't exist! Maybe check your spelling?");
      });
      getPokemonEvolution(pokemon.id);
  };

  /**
   * The ID of a pokemon, and the ID used to
   * get the evolution chain are DIFFERENT ID's.
   * For instance, when I use ID of Charmander (4)
   * into the evolution-chain API call, it gets
   * the evolution chain of ANOTHER ENTIRELY DIFFERENT
   * pokemon, Metapod (ID 2). The ID's for the Evolution
   * chains are dependent on which evolution chain it is on. 
   * For instance, Charmander -> Charmeleon -> Charizard is a
   * evolution chain ID of 2, but they are independently all 
   * different ID's. 
   */
  const getPokemonEvolution = async (id) => {
    await getPokemonEvolutionList(id)
      .then((res) => {
        console.log(res);
        setPokemonEvolution({
          // evolvesTo: res.chain.evolves_to[0].species.name,
          evolvesTo: res.chain.evolves_to[0].species.name,
        });
      })
      .catch(error => {
        console.error(error);
      });

    // await getCompleteEvolutionList()
    //   .then((res) => {
    //     console.log(res);
    //   })
  }

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
      <div className="card-evolution">
        {/* <PokeCard 
          id="previous-evolution"
          pokemon={previousPokemon}
          assignPokemonInformation={assignPokemonInformation}
          pokemonBag={pokemonBag}
        /> */}
        <FiArrowLeftCircle className="left-of-card" size={70} />
        <PokeCard
          id="current-evolution"
          pokemon={pokemon}
          assignPokemonInformation={assignPokemonInformation}
          pokemonBag={pokemonBag}
        />

        <FiArrowRightCircle className="right-of-card" size={70} />
        {/* <PokeCard 
          id="next-evolution"
          pokemon={nextPokemon}
          assignPokemonInformation={assignPokemonInformation}
          pokemonBag={pokemonBag}
        /> */}
      </div>

    </div>
  );
}

export default App;