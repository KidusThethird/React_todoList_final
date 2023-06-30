
import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {

const [todoList, setTodoList]=useState([]);
const [newTask , setNewTask] = useState("");


const handleChange=(event)=>{
  setNewTask(event.target.value);
}


const addTask= () => {

const task = {
  id : todoList.length ===0? 0 : todoList[todoList.length-1].id +1,
taskName : newTask,
bgcolor : 'white'
}


setTodoList([...todoList , task ]);
}

const deleteTask = (TaskId) => {
 // console.log(TaskId);
 setTodoList( todoList.filter((task)=>task.id !== TaskId))
 
}
const changeColor =(id) =>{

 setTodoList (todoList.map((task)=>{
  if(task.id == id && task.bgcolor == 'green'){ return{ ...task, bgcolor: 'white'}}  
 else if(task.id == id)  { return{ ...task, bgcolor: 'green'}}
    else {return task;}  

 }))
}



  return (
    <div className="App">
      
      <div className='addTaskSection'>
      <input onChange={handleChange}/>
      <button onClick={addTask}>Add</button>
     
    </div>



     <div>
     {
      todoList.map((task)=>{
        return (<Task  TaskName={task.taskName} Id={task.id} bgcolor={task.bgcolor} changeColor={changeColor}  deleteTask={deleteTask}/>);
      })
     }
     </div>
    </div>
  );
}

export default App;
