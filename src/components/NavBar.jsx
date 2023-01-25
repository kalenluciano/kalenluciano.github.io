import '../styles/NavBar.css'

const NavBar = () => {
    return (
        <section className='nav'>
            <nav>
                <a href="#landing">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className='nav-bar-line'></div>
        </section>
    )
}

export default NavBar
