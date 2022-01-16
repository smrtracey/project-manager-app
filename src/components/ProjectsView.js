import {useState} from 'react'

import CreateForm from './CreateForm'

import '../styles/projects.css'

const ProjectsView = ({projects,addProject,makeActive}) => {

    const [isCreating, setIsCreating] = useState(false)

    const toggleCreate=()=>{
        setIsCreating(!isCreating)
    }

    const createNewProject =(projectName) =>{
        addProject(projectName);
        setIsCreating(false);
    }

    return (
        <div className='projects-view'>
            <div className='projects-title'>
                <h2>My projects</h2>
                <i className="fas fa-plus plus-icon" onClick = {toggleCreate}></i>
            </div>

            <ul className='projects-list'>
                {
                
                projects.map((project) =>{
                    return (
                        <li key = {project.name}
                        className={project.active? 'active' : ''}
                        onClick = {()=>makeActive(project.name)}>
                            {project.name}
                            
                        </li>
                    )
                })
                }
            </ul>
            {
                isCreating? <CreateForm createNewProject={createNewProject}/> : null
            }
            
        </div>
    )
}

export default ProjectsView
