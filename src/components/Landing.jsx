import '../styles/Landing.css'
import profilePicture from '../assets/project-images/profile-picture.jpeg'
import { GoMarkGithub } from 'react-icons/go'
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { Icon } from '@iconify/react';

const Landing = () => {
  return (
    <section id="landing">
      <h1>Kalen Luciano</h1>
      <h3>Full-Stack Software Engineer</h3>
      <div className='landing-links'>
        <a href="https://docs.google.com/document/d/1f6Ub_9X9cn2RjRJ7zDzhEMlQGk8dkBU43G85jGgb8_4/edit?usp=sharing" target="_blank" rel='noreferrer'>View Resume</a>
        <a href="#contact">Let's Chat</a>
      </div>
      <img className='profile-pic' src={profilePicture} alt='Profile of Kalen Luciano'/>
      <section className='landing-icons'>
        <a href='https://github.com/kalenluciano' target='_blank' rel='noreferrer'><GoMarkGithub className='landing-icon'/></a>
        <a href='https://www.linkedin.com/in/kalenluciano/' target='_blank' rel='noreferrer'><AiFillLinkedin className='landing-icon'/></a>
        <a href={`mailto: ${process.env.REACT_APP_EMAIL}`} target='_blank' rel='noreferrer'><AiOutlineMail className='landing-icon'/></a>
      </section>
      <div className='landing-arrows'>
        <Icon icon="material-symbols:arrow-back-ios-new-rounded" color="#ffb703" width="48" height="48" rotate={3} />
        <Icon icon="material-symbols:arrow-back-ios-new-rounded" color="#ffb703" width="36" height="36" rotate={3} />
        <Icon className="last-arrow" icon="material-symbols:arrow-back-ios-new-rounded" color="#ffb703" width="24" height="24" rotate={3} />
      </div>
    </section>
  )
}

export default Landing
