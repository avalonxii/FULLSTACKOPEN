import React from 'react'

function ShowCountrie({ countrie }) {
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
    </div>
  )
}

export default ShowCountrie