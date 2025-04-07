import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { id:1, name: 'Arto Hellas', number: '12-12-1234567' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if (isNameAdded(newName) || isNumberAdded(newNumber) ) {
      const valueToShow = isNameAdded(newName) ? newName : newNumber;
      showAlert(valueToShow)
      
    } else {
      const newPerson = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }
  
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const handlerNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlerNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const isNameAdded = (name) => persons.find( person => person.name === name)
  const isNumberAdded = (number) => persons.find( person => person.number === number)

  const showAlert = (message) => {
    alert(`${message} is already added to phonebook`);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlerNameChange}/>
        </div>
        <div>
          number: <input value={newNumber}  onChange={handlerNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map( person => <p key={person.id}>{ person.name } { person.number }</p>)}
    </div>
  )
}

export default App
