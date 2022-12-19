import '../styles/ProjectCard.css'

const ProjectCard = ({name, image, icons, description, gitHubRepo, deployedSite}) => {
    return (
        <div className='project-card'>
            <img className='project-picture' src={image} alt={name}/>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className='project-links'>
                <a href={gitHubRepo} target="_blank" rel='noreferrer'>GitHub Repo</a>
                <a href={deployedSite} target="_blank" rel='noreferrer'>Deployed Site</a>
            </div>
            <div className='project-card-icons'>    
                {icons?.map((icon, index) => (
                    <img className="icon" key={index} src={icon} alt="Coding icon"/>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard
