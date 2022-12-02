import email from '../assets/icons/email.svg'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <section id="footer">
            <h1>Footer</h1>
            <a href='https://github.com/kalenluciano' target='_blank' rel='noreferrer'><img className='footer-icon' src={github} alt='GitHub logo' /></a>
            <a href='https://www.linkedin.com/in/kalenluciano/' target='_blank' rel='noreferrer'><img className='footer-icon' src={linkedin} alt='LinkedIn logo' /></a>
            <a href={`mailto: ${process.env.REACT_APP_EMAIL}`} target='_blank' rel='noreferrer'><img className='footer-icon' src={email} alt='Email logo' /></a>
        </section>
    )
}

export default Footer
