import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
// import data from './data.json';
import ToDoList from './components/ToDoList';
import Form from './components/Form';
function App() {
  const [toDoList, setToDoList] = useState([
    {
    "item": "Give dog a bath",
    "complete": false
    },
    {
      "item": "Do Laundry",
      "complete": false
    },

  ]);
  const [itemsRemaining, setItemsRemaining] = useState(0);
  useEffect(() => { 
    setItemsRemaining(toDoList.filter(task => !task.completed).length) 
  },[toDoList]);
  
  const addItem = item => {
    const newItems = [...toDoList, { item, complete: false}];
    setToDoList(newItems);
  }
  const updateItem = (index, completeStatus) => {
    //copy the list of items
    const newItems = [...toDoList];
    newItems[index].complete = completeStatus; 
    setToDoList(newItems);
  }
  
  const removeItem = index => {
    //copy the list of items
    const newItems = [...toDoList];
    newItems.splice(index, 1);
    setToDoList(newItems);
  }
  

  return (
    <div className="App">
      <Header/>
      <div className='toDoContainer'>
      <div className="header">Pending Items ({itemsRemaining})</div>
      <div className='createForm'>
      <Form addItem={addItem}/>
      </div>
     
      <ToDoList toDoList = {toDoList} updateItem={updateItem} removeItem={removeItem}  />
      </div>
     
    </div>
  );
}

export default App;
