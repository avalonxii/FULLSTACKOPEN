import{ useEffect, useState } from 'react'
import weather from '../../services/weather'

function ShowCountrie({ countrie }) {
  const [localWeather, setLocalWeather] = useState(null)

  const [lat, lon] = countrie.latlng

  useEffect(() => {
    weather
    .getAll(lat, lon)
    .then( res => setLocalWeather(res))

  }, [])

  return (
    <div>
      <h1>{countrie.name.common}</h1>
      <p>Capital {countrie.capital}</p>
      <p>Area {countrie.area}</p>

      <h2>Languagues</h2>
      <ul>
        {Object.entries(countrie.languages).map(([ key, language ]) => 
          <li key={key}>{language}</li>
        )}
      </ul>
      <img src={countrie.flags.png} alt={countrie.flags.alt} /> 

      {localWeather && (
        <>
          <h2>Weather in {countrie.capital}</h2>
          <p>Temperature {parseInt(localWeather.main.temp) - 273} Celsius</p>
          <img src={` https://openweathermap.org/img/wn/${localWeather.weather[0].icon}@2x.png`} alt="weather icon" />
          <p>Wind {localWeather.wind.speed} m/s </p>
        </>
      )}
    </div>
  )
}

export default ShowCountrie