import SingleTask from './SingleTask'

const Tasks = ({ tasks }) => {   
    return (
        <div>
        {tasks.map((task) => (
            <SingleTask key={task.id} task={task} />
            ))}
        </div>
    )
}

export default Tasks
