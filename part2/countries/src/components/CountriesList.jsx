import React from 'react'

function CountriesList({countries, setValue}) {
  return (
    <>
      {countries.map( countrie =>
        <p key={countrie.name.common}>
          {countrie.name.common}
          <button onClick={() => setValue(countrie.name.common)}>show</button>
        </p>
      )}
    </>
  )
}

export default CountriesList