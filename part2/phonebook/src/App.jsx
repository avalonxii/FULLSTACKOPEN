import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    {id:1, name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      id: persons.length + 1,
      name: newName
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handlerNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlerNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map( person => <p key={person.id}>{ person.name }</p>)}
    </div>
  )
}

export default App
