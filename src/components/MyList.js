
function MyList({header, items, updateItem}) {

    const listItems = items.map((element) => (
        <li key={element.id} onClick={() => updateItem(element.id)} style={{textDecoration: element.clicked ? "line-through":""}}>{element.text}</li>
    ))
    
  return (
    <div>
      <h3>My List </h3>
      <h1>{header}</h1>
      <ol>{listItems}</ol>
    </div>
  )
}

export default MyList
