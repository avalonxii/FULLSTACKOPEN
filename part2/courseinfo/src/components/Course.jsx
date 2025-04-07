import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) =>  {
  let sum = 0

  course.parts.map(({ exercises }) => {
    sum += exercises
  })

  return (
    <>
      <Header  title={course.name}/>
      <Content content={course.parts}/>
      <Total total={sum}/>
    </>
  )
}

export default Course