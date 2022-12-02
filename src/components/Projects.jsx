import ProjectCard from "./ProjectCard"
import snakeImage from "../assets/project-images/snake-game.png"
import openSourcePhoto from "../assets/project-images/open-source-photo-aggregator.png"
import buddyUp from '../assets/project-images/buddy-up.png'
import themePark from '../assets/project-images/theme-park.png'
import css from '../assets/icons/css3.svg'
import express from '../assets/icons/express.svg'
import html from '../assets/icons/html5.svg'
import flask from '../assets/icons/flask.svg'
import js from '../assets/icons/js.svg'
import mongodb from '../assets/icons/mongodb.svg'
import nodejs from '../assets/icons/node-js.svg'
import psql from '../assets/icons/postgresql.svg'
import python from '../assets/icons/python.svg'
import react from '../assets/icons/react.svg'
import vuejs from '../assets/icons/vuejs.svg'
import sequelize from '../assets/icons/sequelize.png'

const Projects = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <ProjectCard name="Buddy Up" image={buddyUp} description="BuddyUp is specially tailored for those individuals that want to go to certain activities/events, but don't wish to go alone. Through the app, the user is able to scroll through different user profiles, and match with users that are interested in attending the same event." gitHubRepo="https://github.com/kalenluciano/buddy-up-frontend" deployedSite="https://buddy-match-up.herokuapp.com/" icons={[html, css, react, express, nodejs, mongodb, js]}/>
            <ProjectCard name="Ride or Die: Themepark Edition" image={themePark} description="Utilized a MERN stack (MongoDB, Express.js, React.js, Node.js) to develop a full-stack application guide for rides at various theme parks with create, read, and delete operations during a 3-day hackathon event. Collaborated with three other programmers using Trello, GitHub, and diagramming to plan and develop the backend database and frontend React.js components as well as design a user-friendly UI with CSS" gitHubRepo="https://github.com/kalenluciano/ride-or-die-theme-park-edition" deployedSite="https://ride-or-die-theme-park-edition.herokuapp.com/" icons={[html, css, react, express, nodejs, mongodb, js]}/>
            <ProjectCard name="Open Source Photo Aggregator" image={openSourcePhoto} description="Created a front-end application using React.js to organize user-generated photos by location and time to enable journalists to construct timelines of news events. Developed RESTful API fetch calls to an Express.js, MongoDB, and Node.js backend handling all create, read, update, delete (CRUD) operations, and tested all backend routes during development using Insomnia" gitHubRepo="https://github.com/kalenluciano/open-source-photo-aggregator" deployedSite="https://open-source-photo-aggregator.herokuapp.com/" icons={[html, css, react, express, nodejs, mongodb, js]}/>
            <ProjectCard name="Snake Game" image={snakeImage} description="Utilized HTML, CSS, and vanilla JavaScript to create a modern take on the classic game of Snake in a web browser" gitHubRepo="https://github.com/kalenluciano/snake" deployedSite="https://snake-video-game.surge.sh/" icons={[html, css, js]} />
        </section>
    )
}

export default Projects
