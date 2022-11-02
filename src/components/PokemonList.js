import { Link } from 'react-router-dom'

import { useFetch } from '../hooks/useFetch'
import { useTheme } from '../hooks/useTheme'

import './PokemonList.css'

export default function PokemonList({ link }) {

  const {data, isPending, error} = useFetch(link)
  const { mode } = useTheme()
  console.log(data)
  
  if(data.length === 0) {
    return <div>No recipes to load...</div>
  }

  return (
    <div className='pokemonlist'>
      {error && <p>{error}</p>}
      {isPending && <p>{isPending}</p>}
      {data && [data].map(image => (
            <div key={image.id} className={ `card ${ mode }` }>
                <p>{image.name}</p>
                <img src={image.sprites.front_default} alt="pokemon" />
                <Link to={`/pokemon/${image.id}`}>More Info</Link>
            </div>
        ))}
    </div>
    
  )
}