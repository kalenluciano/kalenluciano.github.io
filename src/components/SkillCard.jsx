import '../styles/SkillCard.css'

const SkillCard = ({icon, name}) => {
    return (
        <div className='skill-card'>
            <img className="icon" src={icon} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}

export default SkillCard
