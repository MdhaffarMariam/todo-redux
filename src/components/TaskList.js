import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux/es/exports'

const TaskList = () => {
const {todo,filter}=useSelector(state=>state)
console.log(filter)
 
  return (
    <div>
      {!filter?(
      todo.map(el=><Task todo ={el} key = {el.id}/>)) : 
      todo.filter(el=>!el.isDone).map(el=><Task todo ={el} key = {el.id}/>)
      }

    </div>
  )
}

export default TaskList
