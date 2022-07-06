import logo from './logo.svg';
import './App.css';
import PokemonForm from './Components/PokemonForm';
import PokemonDetail from './Components/PokemonDetail';
import { useState, useEffect } from 'react';
import PokemonTeam from './Components/PokemonTeam';
import AuthForm from './Components/AuthForm';

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState()

  console.log(selectedPokemon)


  return (
    <div className="App">
      <AuthForm></AuthForm>
      <div className='pokedex__title'>
        <h1>PokeDex</h1>
      </div>

      <div className='pokemon-search__container'>
        <PokemonForm setSelectedPokemon={setSelectedPokemon}></PokemonForm>
        <PokemonDetail selectedPokemon={selectedPokemon}></PokemonDetail>
      </div>

      <PokemonTeam></PokemonTeam>

    </div>
  );
}

export default App;
