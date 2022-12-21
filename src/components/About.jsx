import '../styles/About.css'
import email from '../assets/icons/email.svg'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'

const About = () => {
    return (
        <section id="about">
            <h1>About Me</h1>
            <p>I am a determined and detail-oriented software developer with a background in media and a passion for solving complex problems. I have a proven track record of working in fast-paced environments with ambitious teams to tell stories that uncover inequitable systems using technology. I am eager to contribute these skills and my technical abilities in full-stack web development to make a positive impact.</p>
            <section className='about-links'>
                <a href='https://github.com/kalenluciano' target='_blank' rel='noreferrer'><img className='footer-icon' src={github} alt='GitHub logo' /></a>
                <a href='https://www.linkedin.com/in/kalenluciano/' target='_blank' rel='noreferrer'><img className='footer-icon' src={linkedin} alt='LinkedIn logo' /></a>
                <a href={`mailto: ${process.env.REACT_APP_EMAIL}`} target='_blank' rel='noreferrer'><img className='footer-icon' src={email} alt='Email logo' /></a>
            </section>
        </section>
    )
}

export default About
