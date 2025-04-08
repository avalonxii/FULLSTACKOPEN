import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

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
      filter show with: <input value={filterName} onChange={e => setFilterName(e.target.value)}/>

      <h2>add a new</h2>
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

      {persons
        .filter( person => {
          if (filterName === '') {
            return true;

          } else {
            return !person.name.toLocaleLowerCase().search(filterName.toLowerCase());

          }
        })
        .map( person => (
          <p key={person.id}>
            {person.name} {person.number}
          </p>
      ))}
    </div>
  )
}

export default App
