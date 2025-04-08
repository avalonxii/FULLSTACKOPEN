import Person from "./Person";

function Persons({ persons, filtre}) {
  return (
    <>
      {persons
        .filter( person => {
          if (filtre === '') {
            return true;

          } else {
            return !person.name.toLocaleLowerCase().search(filtre.toLowerCase());

          }
        })
        .map( person => (
          <Person key={person.name} data={person}/>
      ))}
    </>
  )
}

export default Persons