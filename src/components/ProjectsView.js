import {useState, useEffect} from 'react'

import CreateForm from './CreateForm'

import '../styles/projects.css'
import ProjectCard from './ProjectCard'

const ProjectsView = ({projects,addProject,deleteProject,makeActive, isViewOpen, toggleView}) => {

    const [projectsList, setProjectsList] = useState([]);

    const [isCreating, setIsCreating] = useState(false)

    

    const toggleCreate=()=>{
        setIsCreating(!isCreating)
    }

    const createNewProject =(projectName) =>{
        addProject(projectName);
        setIsCreating(false);
    }

    const removeProject = (name)=>{
        deleteProject(name);
    }


    useEffect(()=>{
        setProjectsList(projects);
    },[projects])
    
    return (
        <div className={`projects-view ${isViewOpen ? 'max-view': 'min-view'}`}>
            <div className='projects-title'>
                <button className='new-project-btn' onClick = {toggleCreate}> New Project</button>
                <button className='projects-toggle-btn' onClick = {toggleView}> <i className="fas fa-arrow-left arrow-icon"></i></button>
                
            </div>

            <ul className='projects-list'>
                {
                projectsList.map((project) =>{
                    return (
                        <li key = {project.name}>
                            <ProjectCard name = {project.name}
                            active = {project.active}
                            removeProject ={removeProject}
                            makeActive = {makeActive}/>    
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
