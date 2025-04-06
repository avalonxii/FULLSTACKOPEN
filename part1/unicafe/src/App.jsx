import { useState } from 'react'


function StatisticLine({ text, value }) {
  return (
    <>
      <td>{ text }</td>
      <td>{ value }</td>
    </>
  )
}

function Statistics( props ) {
  const { good, neutral, bad } = props

  if (good === 0 && neutral === 0 && bad === 0){
    return <p>No feedback given</p>
  }

  return (
    <table>
      <tbody>
        {
          Object.entries(props).map(([ key, value ]) => (
              <tr key={key}>
                <StatisticLine text={key} value={value} />
              </tr>
          ))
        }
      </tbody>
    </table>
  )
}

function Button({ handleClick, text }) {
  return (
    <button onClick={ handleClick }> { text } </button>
  )
}

function App() {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const truncDecimal = (num) => Math.trunc(num * 10) / 10
 
  const handlerGood = () => {
    const updatedAll = all + 1
    const updatedTotal = total + 1
    const updatedGood = good + 1
    const totalPositive = truncDecimal(updatedGood / updatedAll * 100)
    setGood(updatedGood)
    setAll(updatedAll)
    setTotal(updatedTotal )
    setAverage(truncDecimal(updatedTotal / updatedAll))
    setPositive(totalPositive)
  }

  const handlerNeutral = () => {
    const updatedAll = all + 1
    const totalPositive = truncDecimal(good / updatedAll * 100)
    setNeutral(neutral + 1)
    setAll(updatedAll)
    setAverage(truncDecimal(total / updatedAll, 1))
    setPositive(totalPositive)
  }

  const handlerBad = () => {
    const updatedAll = all + 1
    const updatedTotal = total - 1
    const totalPositive = truncDecimal(good / updatedAll * 100)
    setBad(bad + 1)
    setAll(updatedAll)
    setTotal(updatedTotal )
    setAverage(truncDecimal(updatedTotal / updatedAll))
    setPositive(totalPositive)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handlerGood} text={'good'} />
      <Button handleClick={handlerNeutral} text={'neutral'} />
      <Button handleClick={handlerBad} text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive + '%'} />
    </div>
  )
}

export default App
