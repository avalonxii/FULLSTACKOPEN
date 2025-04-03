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
    <p>Number of exercises {props.num1 + props.num2 + props.num3}</p>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content data={[part1, part2, part3 ]} />
      <Total num1={part1.exercises} num2={part2.exercises} num3={part3.exercises} />
    </div>
  )
}

export default App
