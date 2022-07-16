import React, {useState, useEffect} from 'react';


function About() {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => setDataList(data))
      },[])

    const listItems = dataList.map((element) => (
        <li key={element.id}>{element.title}</li>
    ))

  return (
    <div>
      <h2>About</h2>
      <ul>{listItems}</ul>
    </div>
  )
}

export default About
