import { createStore } from "redux";
import reducer from "./reducer";



const devtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const taskStore = createStore(reducer,devtools)

export default taskStore;