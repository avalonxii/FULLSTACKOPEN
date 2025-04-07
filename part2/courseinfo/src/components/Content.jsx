import Part from "./Part"

const Content = ({ content }) => {
  return (
    <div>
      {content.map( data => 
        <Part key={data.id} part={data}/>
      )}
    </div>
  )
}

export default Content