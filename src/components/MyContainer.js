import { useState } from 'react'
import MyList from './MyList.js'


const MyContainer = () => {

    const [text, setText] = useState('')

    const [items, setItems] = useState([
        { id: "1", text: "This is an item", clicked: false },
        { id: "2", text: "Also this", clicked: false },
    ]);

    const addList = () => {
        const id = items.length + 1;      
        const newItem = {id, text, clicked: false}; 

        setItems([...items, newItem]);
        setText('')

    }

    const updateItem = (id) => {
        items.forEach(item => {
            if(id === item.id){
                item.clicked = !item.clicked;
                setItems([...items]);
            }
        });
        
    }

  return (
    <div>
      <h2>My Container</h2>
      <textarea id="textArea" placeholder='Add new list item' onChange={(e) => setText(e.target.value)} value={text}></textarea>
      <button id="addButton" onClick={addList}>Add new item</button>

      <MyList 
      header="Really epic list component"
      items={items} 
      updateItem={updateItem}
      />
    </div>
  )
}

export default MyContainer
