import React from 'react'
import '../SKILLS/Skills.css'

const Skills = (props) => {
  return (
    <div className='Skills'>
        {/* <p className='Skill-Heading'>Skills</p>
        <hr /> */}
        <div className='skill'>
          <img className='icon' src={props.icon} alt="icon" />
         <p>{props.skill}</p> 
         </div>
    </div>
  )
}

export default Skills
