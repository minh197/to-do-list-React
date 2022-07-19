import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({toDoList, updateItem, removeItem}) =>{
    return(
        <div >
            {toDoList.map((toDoObject, index) => {
                return (
                    <ToDo toDo={toDoObject} updateItem={updateItem}  index={index} removeItem={removeItem} />
                )
            })}
        </div>
    )
}
export default ToDoList;
