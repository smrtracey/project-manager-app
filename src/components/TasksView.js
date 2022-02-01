import {useState,useEffect} from 'react'
import Storycard from './Storycard'
import '../styles/tasks.css'
import NewTaskModal from './NewTaskModal'

const TasksView = ({projects, updateProject, isViewOpen}) => {
    
    // The currently selected project
    const [activeProject, setActiveProject] = useState({});

    // The tasks associated with that project.
    const [activeTasks, setActiveTasks] = useState([]);

    // state for task creation modal
    const [isModalShowing, setIsModalShowing] = useState(false);

    const toggleModal = ()=>{
        setIsModalShowing(!isModalShowing);
    }
    
    // Add a new task to the active tasks list
    const addTask = (state)=>{
         const tempTasks = [...activeTasks];
         tempTasks.push(
            state
         )

         setActiveTasks(tempTasks);
         toggleModal();

    }

    const deleteTask = (target)=>{
        console.log('In delete')
        const tempTasks = [...activeTasks];

        const filtered = tempTasks.filter(task =>
            task.name !==target
        );
        setActiveTasks(filtered);
    }

    // set the active project
    // and the active tasks
    useEffect(()=>{
        for(let index in projects){
            if(projects[index].active === true)
            {
                setActiveProject(projects[index]);
                setActiveTasks(projects[index].tasks)
            }
        }
    },[projects])

    useEffect(()=>{
        console.log(activeTasks);
        updateProject(activeProject, activeTasks);
    },[activeTasks])


    return (
       <div className={`tasks ${isViewOpen? 'max': 'min'}`}>
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
                <section className='column backlog-col'>
                    <h2>Backlog</h2>
                    {
                        activeTasks.map((task)=>{
                            const {index, name, as, want, so, est,imp} = task
                            return(
                                <Storycard
                                key = {index}
                                index = {index}
                                name = {name}
                                as = {as}
                                want = {want}
                                so = {so}
                                est = {est}
                                imp = {imp}
                                deleteTask = {deleteTask}/>
                            )
                        })
                    }
                </section>

                <section className='column analysis-col'>
                    <h2>In Analysis</h2>                    
                </section>

                <section className='column dev-col'>
                    <h2>In Development</h2>                    
                </section>

                <section className='column qa-col'>
                    <h2>In QA</h2>
                </section>

                <section className='column sign-off-col'>
                    <h2>Ready to Sign Off</h2>
                </section>

                <section className='column done-col'>
                    <h2>Done</h2>
                </section>
            </div>
        </div>    
       
       
    )
}

export default TasksView

{/* 
   
   <div className='panel todo-panel'>
                <h3>To Do</h3>
                <ul className='tasks-list'>
                {
                    // Change this to render only the TaskListItems where the status = 'todo'
                    activeTasks.map((task)=>{
                        const {name, desc} = task
                        if(task.stage === 'todo'){
                            return(
                              

                                    <TaskListItem 
                                    key = {name} 
                                    name ={name} 
                                    desc = {desc} 
                                    deleteTask={deleteTask} 
                                    changeStatus={changeStage}/>
                                
                                
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
                                changeStatus={changeStage}/>
                            )
                        }
                       
                    })
                }
                </ul>
            </div>

            <div className='panel done-panel'>
                <h3>Done</h3>
                <ul className='tasks-list'>
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
                                changeStatus={changeStage}/>
                            )
                        }
                       
                    })
                }
                </ul>
            </div>


        </div> */}
     