import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phonebook from './service/phonebook'
import Alert from './components/Alert'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [alertMssg, setAlertMssg] = useState({
    open: false,
    text: ''
  })

  useEffect(() => {
    phonebook
      .getAll()
      .then(res => {
        setPersons(res)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    if (isNumberAdded(newNumber)) {
      showAlert(newNumber)

      return 0
    }

    const message = 'is already added to phonebook, replace the old number with a new one?'

    const newPerson = {
      name: newName,
      number: newNumber
    }
    
    if (isNameAdded(newName) && window.confirm(`${newName} ${message}`)) {
      updatePerson(newPerson)
      
    }else {
      createPerson(newPerson)
    } 
  }

  const createPerson = (newPerson) => {
    phonebook
    .create(newPerson)
    .then(returnedNote =>{
      setPersons(persons.concat(returnedNote))
      setNewName('')
      setNewNumber('')
      setAlertMssg({
        open: true,
        text: `Added ${newPerson.name}`
      })

      setTimeout(resertAlert, 2000)
    })
  }

  const updatePerson = (newPerson) => {
    
    const personToUpdate = persons.find( person => person.name === newPerson.name )

    phonebook
    .update(personToUpdate.id, newPerson)
    .then( res => {
      const UpdatedPersons = persons.map( person => person.id === personToUpdate.id ? res : person)
      setPersons(UpdatedPersons)
    })
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

  const resertAlert = () => {
    setAlertMssg({
      open: false,
      text: ''
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {alertMssg.open && (
        <Alert message={alertMssg.text}/>
      )}
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
