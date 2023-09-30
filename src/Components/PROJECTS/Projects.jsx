import React from 'react'
import '../PROJECTS/Projects.css'
import details from "./details"

const Projects = ({values}) => (
    <>
        <div className='project'>
            <div>
              <img className='projectImg' src={values.icon} alt="icon" />
              <h3>{values.title}</h3>
              <p className='projectText'>{values.text}</p>
            </div>
            <div className='sourceBtn'>
              <a 
              href={values.sourceCode} 
              rel="noreferrer"
              target="_blank">
              <button>Source Code</button>
              </a>

                <a href={values.link}  
                target="_blank"
                rel="noreferrer"
                >
                    <button>Demo</button>
                </a>
            </div>
        </div>
    </>
  );

const ProjectsCard = () => {
  return (
    <>
      <h3 className='projectHeading'>Projects</h3>
        <div className='projectLine'></div>
        <div className='Projects'>
        {details.map((values) => (
            <Projects key={values.id} values={values}/>
          ))}
      </div>
    </>
  )
}

export default ProjectsCard
