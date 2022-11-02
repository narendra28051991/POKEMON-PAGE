import { useLocation } from 'react-router-dom'

import PokemonList from '../../components/PokemonList'

export default function Search() {
    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')
    const link = 'https://pokeapi.co/api/v2/pokemon/' + query

    return (
        <PokemonList link={link} />
    )
}