import './App.css';
import React, {useState} from 'react';

function App() {
  // create array for task list
  const [tasks, setTasks] = useState([
    {name: "Walk Dog", isComplete: false},
    {name: "Feed Cat", isComplete: true},
    {name: "Clean out fridge", isComplete: false}
  ]);

  //Create new tasks
  const [newTask, setNewTask] = useState("");

  const completeTask = (index) => {
    tasks[index].isComplete = true;
    const copyOfTasks = [...tasks];
    setTasks(copyOfTasks);

  }

  //display tasks on webpage
  const taskNodes = tasks.map( (task, index) => {
    return (
    <li key={index}>
    <span>{task.name}</span>
    {task.isComplete ? <span>Completed</span> : <button onClick={() =>completeTask(index) }>Mark Completed</button>}
    </li>
    );
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  };

  const saveNewTask = (event) => {
    event.preventDefault();
    const newAddedTask = {name: newTask, isComplete: false};
    const copyOfTasks = [...tasks, newAddedTask];
    setTasks(copyOfTasks);
    setNewTask("")
  };

  return (
   <div>
   <h1>Todo</h1>
  <form onSubmit={saveNewTask}>
    <input type="text" id="new-item" value={newTask} onChange={handleTaskInput}/>
    <input type="submit" value="Add"/>
  </form>
    <ul>
      {taskNodes}
    </ul>
   </div>
  );
}

export default App;
