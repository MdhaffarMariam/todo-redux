import { ADD, COMPLETE, DELETE_TASK, EDIT, FILTER } from "./actionTypes"

 
 export const deleteTask =(id)=>{
    return {
    type : DELETE_TASK,
    payload : id};
 }
 export const addTask =(newTask) =>{
    return{
        type:ADD,
        payload:newTask

    }
 }
 export const complete =(id)=>{
    return {
        type:COMPLETE,
        payload:id
    }
 }
 export const edit=(edidtedTask)=>{
    return {
        type : EDIT,
        payload:edidtedTask
    }
 }
 export const filtertask = ()=>{
 return{
    type:FILTER,
 }}
 