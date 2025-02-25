import { useState, useEffect, useRef } from 'react'
// import pikachu from '../assets/pikachu.jpg'
import { useContext } from 'react'
import { SquadContext } from '../PokemonContext'


const Pokemon = (props)=>{
    const pokemon = props.pokemon
    const [pokemonData, setPokemonData] = useState('')
    const [pokemonImg, setPokemonImg] = useState('')
    const {squad, setSquad} = useContext(SquadContext)

     useEffect(()=>{
        const fetchPokemon = async ()=>{
          try {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            setPokemonData(data)
            setPokemonImg(data.sprites.front_default)
            // console.log(data);
            
            
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchPokemon()
      },[])

      const cardIsInSquad = (pokemon)=>{
        return squad.some(card => card.name == pokemon.name)
      }

      const handleAdd = (pokemon)=>{
        if(!cardIsInSquad(pokemon) && squad.length != 6){
          setSquad([...squad, pokemon])
        }
      }

      const buttonRef = useRef(null);
      let disabled = cardIsInSquad(pokemon)

      useEffect(() => {
        if (disabled && buttonRef.current === document.activeElement) {
          buttonRef.current.blur();
        }
      }, [disabled]);
      
    return <div className='border-2 w-50 rounded-md mt-2'>
        <img className='h-40 ' src={pokemonImg} alt={pokemon.name} />
        <div className='font-bold flex gap-3 m-2'>
          <div>
            <h2 >{pokemon.name}</h2>
            <h3>Height: {pokemonData.height}</h3>
          </div>
          <button className='m-3 bg-green-700 p-2 rounded-md' ref={buttonRef} disabled={disabled} onClick={() => handleAdd(pokemon)}>Add</button>
        </div>
        <h6 className='m-2'>Base Experience: {pokemonData.base_experience}</h6>
    </div> 
}

export default Pokemon;