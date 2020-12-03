import React from "react";
import {useState} from "react";

function App() {

const [inputText,setInputText] = useState("");

const [newList, setNewList] = useState([]);

function inputItem(event){
  const newInput = event.target.value;
  setInputText(newInput);
}

function addItem(){
  setNewList((prevItems) => {
    return [...prevItems,inputText]
  })

  setInputText("")
}


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={inputItem} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newList.map(toDoItem => {
            return(
              
              <li key={toDoItem.key}>{toDoItem}</li>
            )
            } )}
        </ul>
      </div>
    </div>
  );
}

export default App;
