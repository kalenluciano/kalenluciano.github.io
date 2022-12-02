import '../styles/ProjectCard.css'

const ProjectCard = ({name, image, icons, description, gitHubRepo, deployedSite}) => {
    return (
        <div>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <p>{description}</p>
            <a href={gitHubRepo} target="_blank">GitHub Repo</a>
            <a href={deployedSite} target="_blank">Deployed Site</a>
            {icons?.map((icon, index) => (
                <img className="icon" key={index} src={icon} />
            ))}
        </div>
    )
}

export default ProjectCard
