function Person({data, onDelete}) {
  const {id, name, number} = data

  return (
    <p key={id}>
      {name} {number} 
      <button onClick={() => onDelete(id)}>delete</button>
    </p>
  )
}

export default Person