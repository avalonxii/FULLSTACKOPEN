import axios from 'axios'

const api_key = import.meta.env.VITE_SOME_KEY

const getAll = (lat, lon) =>
  axios
  .get( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}` )
  .then( res => res.data )

export default { getAll }