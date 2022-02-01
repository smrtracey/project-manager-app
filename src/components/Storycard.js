import React from 'react'
import Draggable from 'react-draggable'

import '../styles/tasks.css'
import '../styles/storycard.css'
const TaskListItem = ({index,name,as,want,so,est,imp,deleteTask}) => {
    console.log(name);
    // the list item should show only the name
    // and a button to expand for the full description
    return (
                 <Draggable>

                 
                <div className ='task-card'>

                    <div className='task-card-topper'>
                        <h3>{name}</h3>
                        <div className='icons-wrapper'>
                            
                            <i className="fas fa-trash icon delete-icon" onClick = {()=>deleteTask(name)}></i>
                        </div>
                        
                    </div>

                   
                </div>
                </Draggable>

      
       
    )
}

export default TaskListItem
