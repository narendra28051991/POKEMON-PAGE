import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useFetch } from '../../hooks/useFetch'

import PokemonList from '../../components/PokemonList'

import './Home.css'

export default function Home() {
  
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
  const {data, isPending, error} = useFetch(url)
  const [showBanner, setShowBanner] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if ( data !== null ) setShowBanner(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(showBanner));
  }, [showBanner]);

  return (
    <div className="home">
      {error && showBanner && <p>{error}</p>}
      {isPending && <p>{isPending}</p>}
      {data && showBanner && data.results.map(pokemon => (
        <PokemonList link={pokemon.url}/>
      ))}
      {data && !showBanner && data.results.sort((a, b) => a.name > b.name ? 1 : -1).map(pokemon => (
        <PokemonList link={pokemon.url}/>
      ))}
      { data.previous && (<button onClick={() => setUrl(data.previous)}>Previous</button>) }
      { data.next && (<button onClick={() => setUrl(data.next)}>Next</button>) }
      { data.results && showBanner && (<button onClick={() => {setShowBanner(false); setUrl(window.location.href)}}>Sort by name</button>) }
      { data.results && !showBanner && (<button onClick={() => {setShowBanner(true); navigate('/')}}>Home Page</button>) }
      <button onClick={() => setUrl('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')}>View by 20</button>
      <button onClick={() => setUrl('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50')}>View by 50</button>
    </div>
  )
}