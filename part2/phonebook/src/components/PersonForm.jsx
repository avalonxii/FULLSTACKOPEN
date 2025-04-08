function PersonForm({ onSave, inputs }) {

  return (
    <form onSubmit={onSave}>
      {inputs
        .map( ({id, name, handler}) => 
          <div key={id}>
            {id}: <input value={name} onChange={handler}/>
          </div>
      )}

      <button type="submit">add</button>
    </form>
  )
}

export default PersonForm