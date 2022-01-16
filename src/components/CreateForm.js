import {useState} from 'react'


import '../styles/projects.css'


const CreateForm = ({createNewProject}) => {

    const [input, setInput] = useState('');


    const handleSubmit =(e)=>{
        
        e.preventDefault();
        createNewProject(input);
        setInput('')
    }
    
    const handleChange = (e) =>{
        setInput(e.target.value);
    }

    return (
        <form className='create-form' onSubmit={handleSubmit}>
            <input
             type ='text'
             onChange ={handleChange}
             value = {input}
             placeholder='Enter a project name'
             />
             <button type = 'submit' onSubmit={handleSubmit}>OK</button>
        </form>
    )
}

export default CreateForm
