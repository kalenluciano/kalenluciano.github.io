import '../styles/SkillCard.css'

const SkillCard = ({icon, name}) => {
    return (
        <div className='skill-card'>
            {icon}
            <h3>{name}</h3>
        </div>
    )
}

export default SkillCard
