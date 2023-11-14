import '../styles/ProjectCard.css'

const ProjectCard = ({ name, image, icons, description, gitHubRepo, frontendRepo, backendRepo, deployedSite }) => {
    return (
        <div className='project-card'>
            <h2>{name}</h2>
            <img className='project-picture' src={image} alt={name} />
            <p>{description}</p>
            <div className='project-links'>
                {gitHubRepo && <a href={gitHubRepo} target="_blank" rel='noreferrer'>GitHub Repo</a>}
                {frontendRepo && <a href={frontendRepo} target="_blank" rel='noreferrer'>Frontend Repo</a>}
                {backendRepo && <a href={backendRepo} target="_blank" rel='noreferrer'>Backend Repo</a>}
                {deployedSite && <a href={deployedSite} target="_blank" rel='noreferrer'>Deployed Site</a>}
            </div>
            <div className='project-card-icons'>
                {icons?.map((icon, index) => (
                    <div key={index}>
                        {icon}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectCard
