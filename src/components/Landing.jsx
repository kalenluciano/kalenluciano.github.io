import '../styles/Landing.css'
import profilePicture from '../assets/project-images/profile-picture.jpeg'
import { GoMarkGithub } from 'react-icons/go'
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { Icon } from '@iconify/react';

const Landing = () => {
  return (
    <section id="landing">
      <h1 className='top-left'>Kalen Luciano</h1>
      <div className='center-left'>
        <h3>Full-Stack Software Engineer</h3>
      </div>
      <div className='landing-links bottom-left'>
        <a href="https://drive.google.com/file/d/13cFfCoXRGGvUqVi31aXN-k9bZ7IRepxi/view?usp=drive_link" target="_blank" rel='noreferrer'>View Resume</a>
        <a href="#contact">Let's Chat</a>
      </div>
      <div className='top-right'>
        <img className='profile-pic' src={profilePicture} alt='Profile of Kalen Luciano' />
      </div>
      <section className='landing-icons bottom-right'>
        <a href='https://github.com/kalenluciano' target='_blank' rel='noreferrer'><GoMarkGithub className='landing-icon' /></a>
        <a href='https://www.linkedin.com/in/kalenluciano/' target='_blank' rel='noreferrer'><AiFillLinkedin className='landing-icon' /></a>
        <a href={`mailto: ${process.env.REACT_APP_EMAIL}`} target='_blank' rel='noreferrer'><AiOutlineMail className='landing-icon' /></a>
      </section>
      <div className='landing-arrows'>
        <Icon className='first-arrow' icon="material-symbols:arrow-back-ios-new-rounded" color="#ffb703" width="48" height="48" rotate={3} />
        <Icon className='middle-arrow' icon="material-symbols:arrow-back-ios-new-rounded" color="#ffb703" width="36" height="36" rotate={3} />
        <Icon className="last-arrow" icon="material-symbols:arrow-back-ios-new-rounded" color="#ffb703" width="24" height="24" rotate={3} />
      </div>
    </section>
  )
}

export default Landing
