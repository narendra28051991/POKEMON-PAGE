import { useNavigate, useParams } from 'react-router-dom'

import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'

import './Pokemon.css'

export default function Pokemon() {
  const { id } = useParams()
  console.log(id)
  const url = 'https://pokeapi.co/api/v2/pokemon/' + id
  const { data: pokemon, isPending, error } = useFetch(url)
  const { mode } = useTheme()
  const navigate = useNavigate()

  return (
    <div className={ `pokemon ${ mode }` }>
      { error && <p className="error">{ error }</p> }
      { isPending && <p className="loading">Loading...</p> }
      { pokemon && (
        [pokemon].map(image => (
            <ul key={image.id} className={ `card ${ mode }` }>
                <li>Name: {image.name.toUpperCase()}</li>
                <li>Height: {image.height}</li>
                <li>Weight: {image.weight}</li>
                <img src={image.sprites.front_default} alt="pokemon" />
                <img src={image.sprites.front_shiny} alt="pokemon" />
                <img src={image.sprites.back_default} alt="pokemon" />
                <img src={image.sprites.back_shiny} alt="pokemon" />
                <button onClick={() => navigate('/')}>Go Back</button>
            </ul>
        ))
      )}
    </div>
  )
}