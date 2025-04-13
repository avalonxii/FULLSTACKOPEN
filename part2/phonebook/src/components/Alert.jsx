
function Alert({message, modify}) {
  return (
    <div className={`c-alert ${modify}`}>{message}</div>
  )
}

export default Alert