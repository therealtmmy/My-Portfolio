import React from 'react'
import "../REACH ME/Footer.css"

const Footer = () => {

  let d = new Date();
  const year = d.getFullYear();

  return (
    <div>
      <p className='reach'>Reach Me</p>
      <div>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>

     
      <p className='copyright'>Oluwatimilehin Esan <span>{year}</span></p>
    </div>
  )
}

export default Footer
