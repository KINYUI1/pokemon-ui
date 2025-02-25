import {useContext} from 'react'
import { SquadContext } from '../PokemonContext'
import Squad from './Squad'

function Squads() {
  const {squad, setSquad} = useContext(SquadContext)
  console.log(squad);
  
  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='ml-10 font-bold'>My Squad: {squad.length}</h1>
        {squad.length >= 2 && <button className='bg-red-800 p-2 rounded-md mr-10 mt-1'>Attack</button>}
      </div>
        <div className='flex flex-wrap gap-3 ml-23'>
          {squad.map(card => <Squad card={card}/>)}
        </div>
    </div>
  )
}
export default Squads