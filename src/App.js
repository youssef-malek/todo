import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Task } from './components/Task';

function App() {
  const [textColor,setTextColor] = useState("red");
  const [inputValue,setInputValue] =useState("");




  const [todoList,setTodolist] = useState([]);
  const [newtask,setNewTask] = useState("");

  const handleChange = (event)=>{
    setNewTask(event.target.value)
  }
  ///=================Add task==================================

  const addTask = ()=>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName : newtask,
      done:false
    }
    const newTaskList = [...todoList,task];
    setTodolist(newTaskList);
  }
  ///=================Delete the task==================================

  const deleteTask = (id)=> {
    setTodolist(todoList.filter((task)=> task.id !== id));
  }
  ///=================Complete the task==================================
  const completeTask = (id)=> {
   /// setTodolist(todoList.map((task)=> task.id === id ? task.done =true:task.done =false));

    setTodolist(todoList.map((task)=>{

if (task.id === id){
     return {...task,done : true}
}else{
  return task;
}

    }))
  }
 const handleInputChange = (event)=>{
  setInputValue(event.target.value);
 }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <input onChange={handleInputChange}/>
        {inputValue}
        <button onClick={()=>{
    setTextColor(textColor === "red"? "black":"red")

        }} >change color</button>
        <h1 style={{color:textColor}}> Todo list.</h1>
       

       
        <div className="AddTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>

      </div>
      <div className="list">
        {todoList.map((task)=>{
    
        return <Task 
         taskName = {task.taskName} 
         id ={task.id}
         done = {task.done}
         deleteTask={deleteTask} 
         completeTask={completeTask}/>
           
      }
        )}
      </div>
      </header>


    
    </div>
  );
}

export default App;
