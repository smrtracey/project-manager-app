import React from 'react'


import '../styles/tasks.css'
const TaskListItem = ({name, desc}) => {
    // the list item should show only the name
    // and a button to expand for the full description
    return (
        <div className ='task-box'>
            <h3>{name}</h3>

            <p className='task-desc'>
                {desc}
            </p>
        </div>
    )
}

export default TaskListItem
