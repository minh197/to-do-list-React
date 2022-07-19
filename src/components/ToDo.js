import React from 'react'
import '../../src/index.css'
const ToDo = ({toDo, index, updateItem, removeItem}) => {
    return(
        <div className={toDo.complete ? "strike": ""}>
            {toDo.item} 
        <button onClick={() => updateItem(index, true)} className='button'>Complete</button>
        <button onClick={() => updateItem(index, false)} className='incompleteBtn'>Incomplete</button>
        <button onClick={() => removeItem(index)} className='removeBtn'>x</button>
        </div>
    )
}
export default ToDo;
