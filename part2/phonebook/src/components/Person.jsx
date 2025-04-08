function Person({data}) {
  const {id, name, number} = data

  return (
    <p key={id}>
      {name} {number}
    </p>
  )
}

export default Person