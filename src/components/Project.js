//  A single project object

import {useState} from 'react'


const Project = (props) => {

    const [name, setName] = useState(props.name)
    const [tasks, setTasks] = useState(props.task)

    
    return (
        <div>

        </div>
    )

}

export default Project
