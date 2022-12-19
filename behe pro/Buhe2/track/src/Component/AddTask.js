import React from 'react'
import { useState } from 'react';
const AddTask = ({onAdd}) => {

    const [text,setText]=useState('');

    const [day,setDay]=useState('');

    const [reminder,setReminder]=useState
    (false)
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!text){
            alert('adding to task')
            return
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
  return (
    
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add task'
                value={text}
                onchange={(e)=>setText(e.target.value)}
                />

            </div>
            <div className='form-control'>
                <label>day &time</label>
                <input type='text' placeholder='day $ time'
                value={day}
                onchange={(e)=>setDay(e.target.value)}/>

            </div>
            <div className='form-control 
            form-control-check' >
                <label>Reminder</label>
               <input type='checkbox'
               checked={reminder}
               value={reminder}
               onchange={(e)=>setReminder(e.currentTarget.checked)}/> 

            </div>
            <input type='submit' value='save task' className='btn btn-block'/>

        </form>
      
    
  );
}

export default AddTask
