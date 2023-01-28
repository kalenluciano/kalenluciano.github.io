import '../styles/Project.css'
import ProjectCard from "./ProjectCard"
import snakeImage from "../assets/project-images/snake-game.png"
import openSourcePhoto from "../assets/project-images/open-source-photo-aggregator.png"
import buddyUp from '../assets/project-images/buddy-up.png'
import themePark from '../assets/project-images/theme-park.png'
import { DiCss3Full, DiHtml5, DiMongodb, DiNodejsSmall, DiReact } from "react-icons/di";
import { SiExpress, SiJavascript, SiPostgresql, SiSequelize } from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa'

const Projects = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className='project-card-container'>
                <ProjectCard name="BeesKnees" image={buddyUp} description="Utilized Vue.js to create a social media frontend that allows users to login, post content, follow other users, and thoughtfully engage with other users’ posts through reactions, comments, and reposts" gitHubRepo="https://github.com/kalenluciano/bees-knees-frontend" deployedSite="http://bees-knees-frontend.herokuapp.com/login" icons={[<DiHtml5 className='icon'/>, < DiCss3Full className='icon'/>, <SiJavascript className='icon'/>, <FaVuejs className='icon'/>, <SiExpress className='icon'/>, <DiNodejsSmall className='icon'/>, <SiPostgresql className='icon'/>, <SiSequelize className='icon'/>]}/>
                <ProjectCard name="Buddy Up" image={buddyUp} description="BuddyUp allows users to be able to scroll through different user profiles and match with users that are interested in attending the same event." gitHubRepo="https://github.com/kalenluciano/buddy-up-frontend" deployedSite="https://buddy-match-up.herokuapp.com/" icons={[<DiHtml5 className='icon'/>, < DiCss3Full className='icon'/>, <SiJavascript className='icon'/>, <DiReact className='icon'/>, <SiExpress className='icon'/>, <DiNodejsSmall className='icon'/>, <SiPostgresql className='icon'/>, <SiSequelize className='icon'/>]}/>
                <ProjectCard name="Ride or Die: Themepark Edition" image={themePark} description="Utilized a MERN stack (MongoDB, Express.js, React.js, Node.js) to develop a full-stack application guide for rides at various theme parks with create, read, and delete operations during a 3-day hackathon event." gitHubRepo="https://github.com/kalenluciano/ride-or-die-theme-park-edition" deployedSite="https://ride-or-die-theme-park-edition.herokuapp.com/" icons={[<DiHtml5 className='icon'/>, <DiCss3Full className='icon'/>, <SiJavascript className='icon'/>, <DiReact className='icon'/>, <SiExpress className='icon'/>, <DiNodejsSmall className='icon'/>, <DiMongodb className='icon'/>]}/>
                <ProjectCard name="Open Source Photo Aggregator" image={openSourcePhoto} description="Created a front-end application using React.js to organize user-generated photos by location and time to enable journalists to construct timelines of news events. " gitHubRepo="https://github.com/kalenluciano/open-source-photo-aggregator" deployedSite="https://open-source-photo-aggregator.herokuapp.com/" icons={[<DiHtml5 className='icon'/>, <DiCss3Full className='icon'/>, <SiJavascript className='icon'/>, <DiReact className='icon'/>, <SiExpress className='icon'/>, <DiNodejsSmall className='icon'/>, <DiMongodb className='icon'/>]}/>
                <ProjectCard name="Snake Game" image={snakeImage} description="Utilized HTML, CSS, and vanilla JavaScript to create a modern take on the classic game of Snake in a web browser" gitHubRepo="https://github.com/kalenluciano/snake" deployedSite="https://snake-video-game.surge.sh/" icons={[<DiHtml5 className='icon'/>, <DiCss3Full className='icon'/>, <SiJavascript className='icon'/>]} />
            </div>
        </section>
    )
}

export default Projects
