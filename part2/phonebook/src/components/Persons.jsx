import { useState } from "react";
import Person from "./Person";

function Persons({ persons, handlerDelete, filter}) {

  const test = persons.filter( person => {
    if (filter === '') {
      return true;

    } else {
      return person.name.toLocaleLowerCase().includes(filter.toLowerCase());
    }
  })

  return (
    <>
      {
        test.length !== 0
        ? test.map( person => (
          <Person key={person.name} data={person} onDelete={handlerDelete}/>
        ))
        : <p> <strong>not found in the phonebook</strong></p>
      }
    </>
  )
}

export default Persons