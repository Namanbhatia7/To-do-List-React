import React from "react";
import {useState} from "react";

function App() {

const [inputText,setInputText] = useState("");

const [newList, setNewList] = useState([]);

const [newClass, setClass] = useState(["undone",0]);


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

function changeState(event){
  if(newClass[1]===0){
   const classChange = event.target.className="done";
   setClass([classChange,1])  
   
  }
  else if(newClass[1]===1){
    const classChange = event.target.className="undone";
    setClass([classChange,0])
   
  }
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
              
              <li onClick={changeState} className="undone" id="toDo" key={toDoItem.key}>{toDoItem}</li>
            )
            } )}
        </ul>
      </div>
    </div>
  );
}

export default App;
