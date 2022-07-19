import React, {useState} from 'react'
const  Form = ({addItem}) => {
    const [task, setTask] = useState("");
    const handleSubmit = (event) => {
        //stop the form from submitting
        event.preventDefault();
        if(!task) {
          return;
        }
        addItem(task);
        setTask("");
    }
  return (
    <div >
        <form onSubmit={handleSubmit}>
        <input 
        placeholder="enter task"
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        >
            </input>
            <button type="submit">+</button>
        </form>


    </div>
  )
}
export default Form; 
