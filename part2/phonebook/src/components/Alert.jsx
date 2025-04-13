
function Alert({message, modify='success'}) {
  return (
    <div className={`c-alert ${modify}`}>{message}</div>
  )
}

export default Alert