import {useState,useEffect} from 'react'
import ProjectsView from './ProjectsView'
import TasksView from './TasksView'

const Main = () => {

    // Stores the projects objects -[{name: String, tasks: [{name: String, desc: String}], active: boolean}]
    const [projects, setProjects] = useState([])

    const addProject =(projectName) =>{
        
        const tempProjects = [...projects];
        tempProjects.push({
            name: projectName,
            tasks: [], 
            active: false});
        setProjects(tempProjects);
    }

    const makeActive = (projectName) =>{
        const tempProjects = [...projects]
        // set all projects to false except target project.
       tempProjects.map((project)=>{
           const {name, active} = project;
           if(name === projectName){
               project.active = true;
           }
           else{
               project.active = false;
           }
       })
        setProjects(tempProjects);   
    }

    // if details in any project list object have been changed,
    // update that listing.
    const updateProjects =(newProject)=>{
        
        const tempProjects = [...projects]
        tempProjects.map((project)=>{
            if(project.name === newProject.name){
                project = newProject
            }    
        })
        setProjects(tempProjects);
    }

 
    return (
        <main className='main'>
            <ProjectsView 
                projects ={projects}
                addProject = {addProject} 
                makeActive={makeActive}
            />

            <TasksView projects ={projects} updateProjects={updateProjects}/>
        </main>
    )
}

export default Main
