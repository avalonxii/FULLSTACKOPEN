import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) =>  {
  // reduce(acumulador (accumulator), valorActual(currentValur), IndiceActual(currentIndex), array(source))
  // lo se ahce auqui es añadir al acumualdor el valor actual pero de los ejercicio, con un valor inicial de 0 y luego retorna la suma
  const total = course.parts.reduce((acc, cur ) => acc + cur.exercises, 0)

  return (
    <>
      <Header  title={course.name}/>
      <Content content={course.parts}/>
      <Total total={total}/>
    </>
  )
}

export default Course