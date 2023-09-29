import React from 'react'
import '../PROJECTS/Projects.css'

const Projects = ({values}) => {
   

  return (
    <div className='Projects'>
        <div className='project'>
        <div>
          <img className='projectImg' src={values.icon} alt="icon" />
          <h3>{values.title}</h3>
          <p className='projectText'>{values.text}</p>
         </div>
            <div className='sourceBtn'>
            <a href={values.sourceCode} target="_blank"><button>Source Code</button></a>

                <a href={values.link}  target="_blank">
                    <button>Demo</button>
                    </a>
            </div>
        </div>
    </div>
     
  )
}

export default Projects
