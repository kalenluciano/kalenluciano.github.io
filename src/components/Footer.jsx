import '../styles/Footer.css'
import { GoMarkGithub } from 'react-icons/go'
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
    return (
        <section id="footer">
            <a href='https://github.com/kalenluciano' target='_blank' rel='noreferrer'><GoMarkGithub className='footer-icon' /></a>
            <a href='https://www.linkedin.com/in/kalenluciano/' target='_blank' rel='noreferrer'><AiFillLinkedin className='footer-icon' /></a>
            <a href={`mailto: ${process.env.REACT_APP_EMAIL}`} target='_blank' rel='noreferrer'><AiOutlineMail className='footer-icon' /></a>
        </section>
    )
}

export default Footer
