import css from '../assets/icons/css3.svg'
import express from '../assets/icons/express.svg'
import html from '../assets/icons/html5.svg'
import js from '../assets/icons/js.svg'
import mongodb from '../assets/icons/mongodb.svg'
import nodejs from '../assets/icons/node-js.svg'
import psql from '../assets/icons/postgresql.svg'
import python from '../assets/icons/python.svg'
import react from '../assets/icons/react.svg'
import vuejs from '../assets/icons/vuejs.svg'
import sequelize from '../assets/icons/sequelize.png'
import flask from '../assets/icons/flask.svg'
import SkillCard from './SkillCard'

const Skills = () => {
    return (
        <section id="skills">
            <h1>Skills</h1>
            <SkillCard icon={html} name="HTML" />
            <SkillCard icon={css} name="CSS" />
            <SkillCard icon={js} name="JavaScript" />
            <SkillCard icon={react} name="React.js" />
            <SkillCard icon={vuejs} name="Vue.js" />
            <SkillCard icon={express} name="Express.js" />
            <SkillCard icon={nodejs} name="Node.js" />
            <SkillCard icon={python} name="Python" />
            <SkillCard icon={flask} name="Flask" />
            <SkillCard icon={mongodb} name="MongoDB" />
            <SkillCard icon={psql} name="PostgreSQL" />
            <SkillCard icon={sequelize} name="Sequelize" />
        </section>
    )
}

export default Skills
