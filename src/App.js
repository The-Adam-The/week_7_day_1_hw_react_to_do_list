import './App.css';
import React, {useState} from 'react';

function App() {
  // create array for task list
  const [tasks, setTasks] = useState([
    {name: "Walk Dog", priority: "high", isComplete: false},
    {name: "Feed Cat", priority: "high", isComplete: true},
    {name: "Clean fridge", priority: "low", isComplete: false}
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
    <li key={index} className={ task.priority === "high" ? "high-priority" : "low-priority"}>
    <span>{task.name}</span>
    {task.priority === "high" ? <span>High</span> : <span>Low</span>}
    {task.isComplete ? <span id="completed-message" >&#10004;</span> : <button class= {task.priority === "high" ? "high-button" : "low-button"} onClick={() =>completeTask(index) }>Mark Completed</button>}
    </li>
    );
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value);
  };

  const saveNewTask = (event) => {
    event.preventDefault();
    console.dir(event.target.priority)
    const newAddedTask = {name: newTask, priority: event.target.priority.value, isComplete: false};
    const copyOfTasks = [...tasks, newAddedTask];
    setTasks(copyOfTasks);
    setNewTask("")
  };

  return (
   <div>
    <h1>To Do List</h1>
    <form onSubmit={saveNewTask}>
      <input type="text" id="new-item" value={newTask} onChange={handleTaskInput}/>

      <input type="submit" value="Add"/>

      <div className="radio-box">
        <p>Priority level: </p>
        <label id="low-label" htmlFor="low">low</label>
        <input type ="radio" id="low" value="low"  name="priority"/>

        <label id = "high-label" htmlFor="high">high</label>
        <input type ="radio" id="high" value="high" name="priority"/>
      </div>
    </form>
    <ul>
      {taskNodes}
    </ul>
  </div>
  );
}

export default App;
