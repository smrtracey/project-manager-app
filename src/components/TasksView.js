import {useState,useEffect} from 'react'
import TaskListItem from './TaskListItem'

import '../styles/tasks.css'
import NewTaskModal from './NewTaskModal'

const TasksView = ({projects,updateProjects}) => {

    const [activeProject, setActiveProject] = useState({});
    const [activeTasks, setActiveTasks] = useState([]);

    // state for task creation modal
    const [isModalShowing, setIsModalShowing] = useState(false);

    const toggleModal = ()=>{
        setIsModalShowing(!isModalShowing);
    }

    // set the active project
    // and the active tasks
    useEffect(()=>{
        for(let index in projects){
            if(projects[index].active == true)
            {
                setActiveProject(projects[index]);
                setActiveTasks(projects[index].tasks)
            }
        }
    },[projects])

    // add new task and then update Projects list.
    const addTask =(name, desc)=>{
        const tempProject = activeProject;
        //adds an object with default status of 'todo'
        tempProject.tasks.push(
            {
                name: {name},
                desc: {desc},
                status: 'todo'
            }
        );

        setActiveProject(tempProject);
        updateProjects(activeProject);
        toggleModal();  
    }

    // Delete a task and update Projects list.
    const deleteTask =(target)=>{
        const tempProject = activeProject;

        const tempTasks = tempProject.tasks;
        const filtered = tempTasks.filter(task =>
            task.name.name !== target
        );
        // update the activeTasks state and the project object.
        tempProject.tasks = filtered;
        setActiveTasks(filtered);
        updateProjects(tempProject);   
    }

    // Change a tasks status
    const changeStatus = (targetName, newStatus)=>{
       
        const tempProject = activeProject;
       
        const tempTasks = tempProject.tasks;
        


        for(let i in tempTasks){
           
            
            if(tempTasks[i].name.name === targetName){
               
                tempTasks[i].status = newStatus;
            }
            
        }
        // update the activeTasks state and the project object.
        tempProject.tasks = tempTasks;
        setActiveTasks(tempTasks);
        updateProjects(tempProject); 

       
    }
    //  Edit a task.

    return (
       <div className='tasks'>
            <div className='task-topper'>
                {/* TODO: If there's no active project, don't display the modal */}
                <button onClick ={toggleModal}>New Task</button>
                {
                isModalShowing ? 
                (<NewTaskModal addTask={addTask}/>)
                :
                (
                    null
                )
                }
            </div>

           


            <div className='tasks-view'>


                {/* In each row, filter through the projects and render the list items with the correct status */}
            <div className='panel todo-panel'>
                <h3>To Do</h3>
                <ul className='tasks-list'>
                {
                    // Change this to render only the TaskListItems where the status = 'todo'
                    activeTasks.map((task)=>{
                        const {name, desc} = task
                        if(task.status === 'todo'){
                            return(
                                <TaskListItem 
                                key = {name.name} 
                                name ={name.name} 
                                desc = {desc.desc} 
                                deleteTask={deleteTask} 
                                changeStatus={changeStatus}/>
                            )
                        }
                        
                    })
                }
                </ul>
            </div>

            <div className='panel in-progress-panel'>
                <h3>In Progress</h3>
                <ul className='tasks-list'>
                {
                    // Change this to render only the TaskListItems where the status = 'todo'
                    activeTasks.map((task)=>{
                        const {name, desc} = task
                        if(task.status === 'doing'){
                            return(
                                <TaskListItem 
                                key = {name.name} 
                                name ={name.name} 
                                desc = {desc.desc} 
                                deleteTask={deleteTask} 
                                changeStatus={changeStatus}/>
                            )
                        }
                        
                    })
                }
                </ul>
            </div>

            <div className='panel done-panel'>
                <h3>Done</h3>
                {
                    // Change this to render only the TaskListItems where the status = 'todo'
                    activeTasks.map((task)=>{
                        const {name, desc} = task
                        if(task.status === 'done'){
                            return(
                                <TaskListItem 
                                key = {name.name} 
                                name ={name.name} 
                                desc = {desc.desc} 
                                deleteTask={deleteTask} 
                                changeStatus={changeStatus}/>
                            )
                        }
                        
                    })
                }
            </div>


        </div>
       </div>
       
       
    )
}

export default TasksView
