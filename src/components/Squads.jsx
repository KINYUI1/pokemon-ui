import {useContext} from 'react'
import { SquadContext } from '../PokemonContext'
import Squad from './Squad'

function Squads() {
  const {squad, setSquad} = useContext(SquadContext)
  console.log(squad);
  
  return (
    <div>
        <h1 className='ml-10 font-bold'>My Squad</h1>
        <div className='flex flex-wrap gap-3 ml-23'>
          {squad.map(card => <Squad card={card}/>)}
        </div>
    </div>
  )
}
export default Squads