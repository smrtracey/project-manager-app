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
    })

    // add new task and then update Projects list.
    const addTask =(name, desc)=>{
        const tempProject = activeProject;
        //adds an object
        tempProject.tasks.push(
            {
                name: {name},
                desc: {desc}
            }
        );

        setActiveProject(tempProject);
        updateProjects(activeProject);
        toggleModal();  
    }

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
                        return(
                            <TaskListItem key = {name} name ={name.name} desc = {desc.desc}/>
                        )
                    })
                }
                </ul>
            </div>

            <div className='panel in-progress-panel'>
                <h3>In Progress</h3>
            </div>

            <div className='panel done-panel'>
                <h3>Done</h3>
            </div>


        </div>
       </div>
       
       
    )
}

export default TasksView
