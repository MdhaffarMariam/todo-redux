import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {complete, deleteTask, edit } from '../redux/action'
const Task = ({todo}) => {
  
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const handleOpen= () => setOpen(true)
    const handleClose= () => setOpen(false)
    const [inputAction, setInputAction] = useState(todo.task)
    const handleEdit = () =>{
    const edidtedTask={
      id: todo.id,
      task : inputAction,
      isDone:todo.isDone
    }
    dispatch(edit(edidtedTask))
handleClose();}
  return (

    <div>
      {open? 
      <div>
      <input   type="text" value = {inputAction} onChange ={(e) =>setInputAction(e.target.value)}/>
      <button onClick={handleEdit}>Confirm</button>
      <button onClick={handleClose}>Cancel</button>
      </div> :

      <div className='main-div'>
      <h2 className= {todo.isDone? "done":""} id = 'tasks'>{todo.task}</h2>
      <button onClick={()=>dispatch(deleteTask(todo.id))}>Delete</button>
      <button onClick={()=>dispatch(complete(todo.id))}>{todo.isDone? 'undo' : 'complete'}</button>
      <button onClick={handleOpen}>Edit</button>
      </div>}
    </div>
  )
}

export default Task;
