import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './SearchBar.css'

export default function SearchBar() {
    const [term, setTerm] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/pokemon/${term}`)
        setTerm('')
    }

  return (
    <div className="searchbar">
      <form onSubmit={ handleSubmit }>
          <label>Filter by: </label>
          <input
            type="text"
            onChange={(e) => setTerm(e.target.value.toLowerCase())}
            value={ term }
            required
          ></input>
      </form>
    </div>
  )
}