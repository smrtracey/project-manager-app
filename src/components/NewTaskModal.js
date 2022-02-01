import {useState} from 'react'

import '../styles/modal.css'
const NewTaskModal = ({addTask}) => {

    const[ state, setState] = useState({
        index:'',
        name: '',
        as: '',
        want: '',
        so:'',
        est: 0,
        imp:0
    })

    const handleChange = (e)=>{
        const value = e.target.value;
        setState({
        ...state,
        [e.target.name]: value
        }
        )
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        addTask(state);
        // Create a new task object with a name and description
    }

    return (
        <div className='new-task-modal'>
            <h3 className='modal-heading'>NEW USER STORY CARD</h3>
            {/* Form to include - name, description, status (todo/doing/done) , time est, diff est*/}
            <form className='new-task-form' onSubmit={handleSubmit} >

                <section className='input-wrapper story-name-input-wrapper'>
                    <h2>User Story Name:</h2>

                <input
                type = 'text'
                placeholder = 'User Story Card Name'
                label = 'User Story Card Name'
                name = 'name'
                value ={state.name}
                onChange = {handleChange}
                required/>
               
                </section>

                <section className='input-wrapper as-input-wrapper'>
                    <h3>As a : </h3>
                    <input
                    type = 'text'
                    placeholder = 'As a'
                    label = 'As a'
                    name = 'as'
                    value ={state.as}
                    onChange = {handleChange}
                    required/>
                </section> 

                <section className='textarea-wrapper want-input-wrapper'>
                    <h3>I want: </h3>
                    <textarea
                    type = 'text'
                    placeholder = 'I want'
                    label = 'I want'
                    name = 'want'
                    value ={state.want}
                    onChange = {handleChange}
                    required/>
                </section>

                 <section className='textarea-wrapper so-input-wrapper'>
                    <h3>So that: </h3>
                    <textarea
                    type = 'text'
                    placeholder = 'So that'
                    label = 'So that'
                    name = 'so'
                    value ={state.so}
                    onChange = {handleChange}
                    required/>
                </section>  


               <section className='second-col estimate'>
                   <h3>Estimate:</h3>
                    <input
                    type = 'number'
                    placeholder = 'Estimate'
                    label = 'estimate'
                    name = 'est'
                    value ={state.est}
                    onChange = {handleChange}
                    required/>
                </section>

                <section className='second-col importance'>
                   <h3>Importance:</h3>
                    <input
                    type = 'text'
                    placeholder = ''
                    label = 'importance'
                    name = 'imp'
                    value ={state.imp}
                    onChange = {handleChange}
                    required/>
                </section>

               
            <button className = 'submit-btn' onSubmit={handleSubmit}>SAVE</button>
            
                
            </form>
        </div>
    )
}

export default NewTaskModal
