function PersonForm({ onSave, inputs }) {

  return (
    <form onSubmit={onSave}>
      {inputs
        .map( ({id, value, handler}) => 
          <div key={id}>
            {id}: <input value={value} onChange={handler}/>
          </div>
      )}

      <button type="submit">add</button>
    </form>
  )
}

export default PersonForm