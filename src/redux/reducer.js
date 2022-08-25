import { ADD, COMPLETE, DELETE_TASK, EDIT, FILTER } from "./actionTypes";

const init={
     todo :[
        {
            id : Math.random(),
            task : "learn css",
            isDone: true
        },
        {
            id : Math.random(),
            task : "learn react",
            isDone: false
        },
        {
            id : Math.random(),
            task : "learn redux",
            isDone: true
        },
    
    ],
    filter : false 
}
const reducer = (state=init , {type , payload})=> {
    
     switch (type) {
        case DELETE_TASK:
         return {
            ...state,todo:state.todo.filter(el=>el.id!==payload),
         };
         case ADD:
            return{
                ...state, todo:[...state.todo,payload]
            };
        case COMPLETE:
            return {
                ...state, todo: state.todo.map(el=>el.id===payload?{...el,isDone:!el.isDone}:el)
            };
            case EDIT:
                return {
                    ...state,todo:state.todo.map(el=>(el.id === payload.id? payload:el ))
                };

            case FILTER :
                return {
                    ...state,filter : !state.filter
                }
    
        default:
        return state;
    }
}
export default reducer;