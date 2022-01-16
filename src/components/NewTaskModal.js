import {useState} from 'react'

const NewTaskModal = ({addTask}) => {

    const [nameInput, setNameInput] = useState('');
    const [descInput, setDescInput] = useState('');

    const handleNameChange = (e)=>{
        setNameInput(e.target.value);
    }

    const handleDescChange = (e)=>{
        setDescInput(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        // Create a new task object with a name and description
       
        addTask(nameInput, descInput)
    }

    return (
        <div className='new-task-modal'>
            <h3>NEW TASK</h3>
            {/* Form to include - name, description, status (todo/doing/done) , time est, diff est*/}
            <form className='new-task-form' onSubmit={handleSubmit} >
                <input
                type = 'text'
                placeholder = 'Task Name'
                value ={nameInput}
                onChange = {handleNameChange}/>

                <textarea 
                type='text'
                value = {descInput} 
                onChange= {handleDescChange}
                placeholder ='Task Description'/>
                
                <button onSubmit={handleSubmit}>Add Task</button>
            </form>
        </div>
    )
}

export default NewTaskModal
