import Person from "./Person";
import phonebook from "../service/phonebook";

function Persons({ persons, setPersons, filter}) {

  const deletePerson = (id) => {

    const chosenPerson = persons.find( person => person.id === id)
    
    if (window.confirm(`delete ${chosenPerson.name} ?`)) {
      phonebook
      .deleteObject(id)
      .then(res => {
        const updatedPersons = persons.filter( person => person.id !== res.id)
        setPersons(updatedPersons)
      })
    }
  }

  return (
    <>
      {persons
        .filter( person => {
          if (filter === '') {
            return true;

          } else {
            return !person.name.toLocaleLowerCase().search(filter.toLowerCase());

          }
        })
        .map( person => (
          <Person key={person.name} data={person} onDelete={deletePerson}/>
      ))}
    </>
  )
}

export default Persons