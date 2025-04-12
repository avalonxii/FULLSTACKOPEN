import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebook from './service/phonebook'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    phonebook
      .getAll()
      .then(res => {
        setPersons(res)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (isNameAdded(newName) || isNumberAdded(newNumber) ) {
      const valueToShow = isNameAdded(newName) ? newName : newNumber;
      showAlert(valueToShow)
      
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      phonebook
      .create(newPerson)
      .then(returnedNote =>{
        setPersons(persons.concat(returnedNote))
        setNewName('')
        setNewNumber('')
      } )
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
          {id: 'name', value: newName, handler: handlerNameChange},
          {id: 'number', value:newNumber, handler: handlerNumberChange}
        ]}/>

      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} filter={filterName}/>
    </div>
  )
}

export default App
