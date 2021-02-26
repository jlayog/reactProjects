import SProjectCard from './SProjectCard'

const Projects = ({ projects }) => {
    return (
        <div className="project-table">
            {projects.map((project) => (
                <SProjectCard 
                    key={project.id} 
                    project={project}      
                />
            ))}
        </div>
    )
}

export default Projects
