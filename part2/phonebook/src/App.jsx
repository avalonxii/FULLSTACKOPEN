import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(res => {
        setPersons(res.data)
      })
  }, [])

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
      <Filter filterValue={filterName} onFilter={e => setFilterName(e.target.value)}/>

      <h2>add a new</h2>
      <PersonForm 
        onSave={addPerson} 
        inputs={[
          {id: 'name', name: newName, handler: handlerNameChange},
          {id: 'number', name:newNumber, handler: handlerNumberChange}
        ]}/>

      <h2>Numbers</h2>
      <Persons persons={persons} filtre={filterName}/>
    </div>
  )
}

export default App
