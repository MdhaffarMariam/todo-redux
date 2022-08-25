
import './App.css';
import TaskList from './components/TaskList';
import React from 'react';
import Add from './components/Add';
function App() {
  return (
    
    <div className="App">
      <Add/>
      <TaskList/>
    </div>
  );
}

export default App;
