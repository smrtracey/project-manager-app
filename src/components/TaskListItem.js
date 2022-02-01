import React from 'react'
import Draggable from 'react-draggable'

import '../styles/tasks.css'
const TaskListItem = ({name, desc, deleteTask, changeStatus}) => {
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

                    <div className='task-card-center'>
                        <p className='task-desc'>
                            {desc}
                        </p>

                        <div className='status-toggles-wrapper'>
                        <div className='status-toggle toggle-todo' onClick = {()=>changeStatus( name, 'todo')}></div>
                        <div className='status-toggle toggle-doing' onClick = {()=>changeStatus( name, 'doing')}></div>
                        <div className='status-toggle toggle-done' onClick = {()=>changeStatus( name, 'done')}></div>
                        </div>
                    </div>
                </div>

        </Draggable>
       
    )
}

export default TaskListItem
