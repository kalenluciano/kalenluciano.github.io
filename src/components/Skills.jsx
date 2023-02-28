import '../styles/Skills.css'
import { DiCss3Full, DiHtml5, DiMongodb, DiNodejsSmall, DiReact } from "react-icons/di";
import { SiExpress, SiJavascript, SiFlask, SiPostgresql, SiSequelize, SiTailwindcss, SiRedux, SiC } from 'react-icons/si';
import { FaVuejs, FaPython } from 'react-icons/fa'
import SkillCard from './SkillCard'

const Skills = () => {
    return (
        <section id="skills">
            <h1>Skills</h1>
            <div className='skills-icon-container'>
                <section className='skills-section'>
                    <h2>Languages</h2>
                    <section className='skills-section-icon-container' >
                        <SkillCard icon={<DiHtml5 className='icon'/>} name="HTML" />
                        <SkillCard icon={<DiCss3Full className='icon'/>} name="CSS" />
                        <SkillCard icon={<SiJavascript className='icon'/>} name="JavaScript" />
                        <SkillCard icon={<FaPython className='icon'/>} name="Python" />
                        <SkillCard icon={<SiC className='icon'/>} name="C" />
                    </section>
                </section>
                <section className='skills-section'>
                    <h2>Frontend</h2>
                    <section className='skills-section-icon-container' >
                        <SkillCard icon={<DiReact className='icon'/>} name="React.js" />
                        <SkillCard icon={<SiRedux className="icon" />} name="Redux" />
                        <SkillCard icon={<FaVuejs className='icon'/>} name="Vue.js" />
                        <SkillCard icon={<SiTailwindcss className='icon'/>} name="Tailwind" />
                    </section>
                </section>
                <section className='skills-section'>
                    <h2>Backend & Databases</h2>
                    <section className='skills-section-icon-container' >
                        <SkillCard icon={<SiExpress className='icon'/>} name="Express.js" />
                        <SkillCard icon={<DiNodejsSmall className='icon'/>} name="Node.js" />
                        <SkillCard icon={<SiFlask className='icon'/>} name="Flask" />
                        <SkillCard icon={<DiMongodb className='icon'/>} name="MongoDB" />
                        <SkillCard icon={<SiPostgresql className='icon'/>} name="PostgreSQL" />
                        <SkillCard icon={<SiSequelize className='icon'/>} name="Sequelize" />
                    </section>
                </section>
            </div>
        </section>
    )
}

export default Skills
