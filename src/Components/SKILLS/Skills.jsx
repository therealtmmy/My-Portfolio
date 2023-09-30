import React from 'react'
import '../SKILLS/Skills.css'
import data from "./data"

const Skills = ({item}) => (
    <>
        <div className='skill'>
          <img 
          className='icon' 
          src={item.icon} 
          alt="icon" />
         <p>{item.skill}</p> 
         </div>
    </>
);

const SkillsCard = () => {
  return (
    <>
     <h3 className='skillsHeading'>Skills</h3>
      <div className='skillsLine'></div>
    <div className='skillMapped'>
      {data.map((item) => (<Skills key={item.id} item={item} {...item} />
))}
    </div>
    </>
  )
}

export default SkillsCard
