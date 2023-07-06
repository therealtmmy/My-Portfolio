import React from 'react'
import '../SKILLS/Skills.css'

const Skills = (props) => {
  return (
    <div className='Skills'>
        <div className='skill'>
          <img className='icon' src={props.icon} alt="icon" />
         <p>{props.skill}</p> 
         </div>
    </div>
  )
}

export default Skills
