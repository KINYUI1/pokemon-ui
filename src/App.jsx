import { useState, useEffect } from 'react'
import Pokemon from './components/Pokemon'
import Search from './components/Search'
import {SquadContext} from './PokemonContext'
import Squads from './components/Squads'


function App() {
  const [pokemons, setPokemons] = useState([])
  const [squad, setSquad] = useState([])
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=151"
  useEffect(()=>{
    const fetchPokemon = async ()=>{
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setPokemons(data.results)
        
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokemon()
  },[])
  

  return (
    <SquadContext.Provider value={{squad, setSquad}}>
      <div>
        <Squads/>
        <Search/>
        <h1 className='ml-10 font-bold'>All Pokemon</h1>
        <div className='flex flex-wrap gap-3 justify-center'>
          {pokemons.length !=0 && pokemons.map(pokemon => <Pokemon pokemon={pokemon}/>)}
        </div>
      </div>
    </SquadContext.Provider>
  )
}

export default App
