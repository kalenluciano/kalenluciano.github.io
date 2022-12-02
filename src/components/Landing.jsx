import '../styles/Landing.css'
import profilePicture from '../assets/project-images/profile-picture.jpeg'

const Landing = () => {
  return (
    <section id="landing">
      <h1>Kalen Luciano</h1>
      <h3>Software Engineer</h3>
      <a href="https://docs.google.com/document/d/1f6Ub_9X9cn2RjRJ7zDzhEMlQGk8dkBU43G85jGgb8_4/edit?usp=sharing" target="_blank" rel='noreferrer'>View Resume</a>
      <a href="https://docs.google.com/document/d/1f6Ub_9X9cn2RjRJ7zDzhEMlQGk8dkBU43G85jGgb8_4/export?format=pdf" target="_blank" rel='noreferrer'>Download Resume</a>
      <a href="#contact">Contact</a>
      <img src={profilePicture} alt='Profile picture of Kalen Luciano'/>
    </section>
  )
}

export default Landing
