import '../styles/Skills.css'
import { DiCss3Full, DiHtml5, DiMongodb, DiNodejsSmall, DiReact } from "react-icons/di";
import { SiExpress, SiJavascript, SiFlask, SiPostgresql, SiSequelize } from 'react-icons/si';
import { FaVuejs, FaPython } from 'react-icons/fa'
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
            <div className='skills-icon-container'>
                <SkillCard icon={<DiHtml5 className='icon'/>} name="HTML" />
                <SkillCard icon={<DiCss3Full className='icon'/>} name="CSS" />
                <SkillCard icon={<SiJavascript className='icon'/>} name="JavaScript" />
                <SkillCard icon={<DiReact className='icon'/>} name="React.js" />
                <SkillCard icon={<FaVuejs className='icon'/>} name="Vue.js" />
                <SkillCard icon={<SiExpress className='icon'/>} name="Express.js" />
                <SkillCard icon={<DiNodejsSmall className='icon'/>} name="Node.js" />
                <SkillCard icon={<FaPython className='icon'/>} name="Python" />
                <SkillCard icon={<SiFlask className='icon'/>} name="Flask" />
                <SkillCard icon={<DiMongodb className='icon'/>} name="MongoDB" />
                <SkillCard icon={<SiPostgresql className='icon'/>} name="PostgreSQL" />
                <SkillCard icon={<SiSequelize className='icon'/>} name="Sequelize" />
            </div>
        </section>
    )
}

export default Skills
