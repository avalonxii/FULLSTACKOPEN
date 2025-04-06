import { useState } from 'react'

function App() {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  const handlerGood = () => {
    const updatedAll = all + 1
    const updatedTotal = total + 1
    const updatedGood= good + 1
    setGood(updatedGood)
    setAll(updatedAll)
    setTotal(updatedTotal )
    setAverage(updatedTotal / updatedAll)
    setPositive(updatedGood / updatedAll)
  }

  const handlerNeutral = () => {
    const updatedAll = all + 1
    setNeutral(neutral + 1)
    setAll(updatedAll)
    setAverage(total / updatedAll)
    setPositive(good / updatedAll)
  }

  const handlerBad = () => {
    const updatedAll = all + 1
    const updatedTotal = total - 1
    setBad(bad + 1)
    setAll(updatedAll)
    setTotal(updatedTotal )
    setAverage(updatedTotal / updatedAll)
    setPositive(good / updatedAll)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handlerGood}>good</button>
      <button onClick={handlerNeutral}>neutral</button>
      <button onClick={handlerBad}>bad</button>

      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive * 100} %</p>
    </div>
  )
}

export default App
