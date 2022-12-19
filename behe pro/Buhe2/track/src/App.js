import Heading from './Component/Heading';
import './App.css';
import Tasks from './Component/Tasks';
import { useState } from 'react';
import AddTask from './Component/AddTask';

 function App() {
  const [showAddTask,setShowAddTask]=useState(true)
  const[tasks,setTasks]=useState(
    [
      {
          id:1,
          text:'doctour appoitment',
          day:'febrariy 5th at 2:30px',
          reminder:true,
      },
      {
          id:2,
          text:'food shooping',
          day:'march 5th at 2:30px',
          reminder:false,
      },
      {
          id:3,
          text:'metteing at school',
          day:'juily 6th at 2:30px',
          reminder:true,
      },
  
  ]
  );
  //add task
  const addTask=(task)=>{
    const id=Math.floor(Math.random()*10000)+1
    const newTask={id, ...task}
    setTasks([...tasks, newTask])
  }
  //delete the task
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id !==id))
  }
  //toggle rimender
  const toggleRemider=(id)=>{
    setTasks(tasks.map((task)=>task.id==id ?
    {...task,reminder:!task.reminder}:task
    ))
  }
  return (
    <div className="container">
      <Heading  onAdd={()=>setShowAddTask(!showAddTask)}
      showAdd={showAddTask} />
      {showAddTask&&<AddTask onAdd={addTask}/> }
     {tasks.length>0 ?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemider}/>) :('no task to show') } 

    </div>
  );
 }


export default App;
