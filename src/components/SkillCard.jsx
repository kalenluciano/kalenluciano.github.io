import '../styles/SkillCard.css'

const SkillCard = ({icon, name}) => {
    return (
        <div>
            <img className="icon" src={icon} alt={name} />
            <h2>{name}</h2>
        </div>
    )
}

export default SkillCard
