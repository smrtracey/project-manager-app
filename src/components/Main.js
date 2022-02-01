import {useState,useEffect} from 'react'
import ProjectsView from './ProjectsView'
import TasksView from './TasksView'

const Main = () => {

    // Stores the projects objects. Every object is structured like so-
    // [
    // {
    // name: String,
    // tasks: [
    //     {
    //      index: int,
    //      name: String, 
    //      as: String,
    //      want: String,
    //      so: String,
    //      est: int,
    //      imp: int
    //     }
    // ], 
    // active: boolean}
    // ]
    const [projects, setProjects] = useState([])

    // Function to add a new Project to the projects array.
    const addProject =(projectName) =>{
        const tempProjects = [...projects];
        // If there are no projects in the list, Make the first one created the active project.
        if(projects.length === 0)
        {
            tempProjects.push({
                name: projectName,
                tasks: [], 
                active: true});
        }

        else{
            tempProjects.push({
                name: projectName,
                tasks: [], 
                active: false});
        }
        
        setProjects(tempProjects);
    }

    // Function to remove a project from the list.
    const deleteProject = (name) =>{
        let tempProjects = [...projects]        
        const filtered = tempProjects.filter(project =>
            project.name !== name
        );
        setProjects(filtered);
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

    // When a task is edited, the projects array needs to be updating to reflect the change.
    const updateProject = (activeProject, activeTasks)=>{
       
        // clone projects state
        const tempProjects = [...projects];

        tempProjects.map((project)=>{
            if(project.name === activeProject.name)
            {
                project.tasks = activeTasks
            }  
        })

        setProjects(tempProjects);
        

    }

    // State for showing/hiding project view window.
    const[isViewOpen, setIsViewOpen] = useState(true)

    const toggleView =()=>{
        setIsViewOpen(!isViewOpen);
    }


    // If theres any projects saved to local Storage, set them as the projects on load.
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
                deleteProject = {deleteProject} 
                makeActive={makeActive}
                isViewOpen ={isViewOpen}
                toggleView = {toggleView}
            />

            <TasksView 
                projects ={projects}
                updateProject ={updateProject}
                isViewOpen = {isViewOpen} 
            />
        </main>
    )
}

export default Main
