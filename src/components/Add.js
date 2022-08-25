import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask, filtertask } from '../redux/action'

const Add = () => {
    const [text, setText] = useState("")
   const dispatch = useDispatch()
   const handleSubmit=(e) =>{
   e.preventDefault();
   const newTask = {
    id:Math.random(),
    task: text,
    isDone:false
   }
   dispatch(addTask(newTask))
   setText("")}
  return (
    <div className='NAVBAR'>
        <h1> TODO list</h1>
        <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} className='input'/>
      <button>Add</button>
      </form>
      <button onClick={()=>dispatch(filtertask())}> Filter </button>
    </div>
  )
}

export default Add
