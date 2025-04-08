function Filter({ filterValue, onFilter }) {

  return (
    <>
      filter show with: <input value={filterValue} onChange={onFilter} />
    </>
  )
}

export default Filter