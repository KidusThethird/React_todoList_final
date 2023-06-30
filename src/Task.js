export const Task = (props) => {
return <div style={{backgroundColor: props.bgcolor}} className='groups'>
          
          <h1 >{props.TaskName}</h1> 
          <button onClick={()=>props.changeColor(props.Id)}>Completed</button>
        <button onClick={()=>props.deleteTask(props.Id)}>X</button>
        
         </div>
}