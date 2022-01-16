import {useState,useEffect} from 'react'
import ProjectsView from './ProjectsView'
import TasksView from './TasksView'

const Main = () => {

    // Stores the projects objects -[{name: String, tasks: [{name: String, desc: String, status: String}], active: boolean}]
    const [projects, setProjects] = useState([])

    const addProject =(projectName) =>{
        // when first created, a project has no tasks.
        const tempProjects = [...projects];
        tempProjects.push({
            name: projectName,
            tasks: [], 
            active: false});
        setProjects(tempProjects);
    }

    // set all projects to false except target project.
    const makeActive = (projectName) =>{
        const tempProjects = [...projects]
        
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

    //If theres any projects saved to local Storage, set them as the projects. 
    useEffect(()=>{
        const fromStorage = localStorage.getItem('PMAprojects');
        if(fromStorage){
            setProjects(JSON.parse(fromStorage));
        }
        
    },[])

    // Any time the projects state is changed, save the projects to localStorage
    useEffect(()=>{
        localStorage.setItem('PMAprojects', JSON.stringify(projects));
    },[projects])
 
    return (
        <main className='main'>
            <ProjectsView 
                projects ={projects}
                addProject = {addProject} 
                makeActive={makeActive}
            />

            <TasksView 
                projects ={projects} 
                updateProjects={updateProjects}
            />
        </main>
    )
}

export default Main
