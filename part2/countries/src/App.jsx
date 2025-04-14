import { useEffect, useState } from 'react'
import conexion from '../services/countries'
import ShowCountrie from './components/ShowCountrie'
import CountriesList from './components/CountriesList'

function App() {
  const [countries, setCountries] = useState([])
  const [countriesFiltered, setCountriesFiltered] = useState([])
  const [filterCountrie, setFilterCountrie] = useState('')

  useEffect(() => {
    conexion
    .getAll()
    .then (res => setCountries(res))
  }, [])

  useEffect(() => {
    const show = countries
    .filter( countrie =>
      countrie.name.common.toLowerCase().includes(filterCountrie.toLowerCase())
    )

    setCountriesFiltered(show)

  }, [filterCountrie, countries])

  return (
    <>  
      find countries: <input value={ filterCountrie } onChange={ e => setFilterCountrie(e.target.value) }/>
      {
        filterCountrie === ''
        ? <p>Write something! </p>

        : countriesFiltered.length > 10
        ? <p>Too many matches, specify another filter</p>

        : countriesFiltered.length > 1
        ? <CountriesList countries={countriesFiltered} setValue={setFilterCountrie} />

        : countriesFiltered.length === 1
        ? <ShowCountrie countrie={countriesFiltered[0]}/>

        : countriesFiltered.length === 0
        ? <p>no matches!!!</p>
        : ''
      }
    </>
  )
}

export default App
