import React from 'react'

function Header(props) {
  return (
    <h1>{props.course}</h1>
  )
}

function Part(props) {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

function Content(props) {
  return (
    <>
      {props.data.map(( { name, exercises }, index ) => (
        <Part key={index} name={name} exercises={exercises}/>
      ))}
    </>
  )
}

function Total(props) {
  return (
    <p>
      Number of exercises {props.data[0].exercises + props.data[1].exercises + props.data[2].exercises}
    </p>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content data={course.parts} />
      <Total data={course.parts} />
    </div>
  )
}

export default App
