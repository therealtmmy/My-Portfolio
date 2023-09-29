import React from 'react'
import "../REACH ME/Footer.css"
import { FaBehanceSquare, FaGithub, FaTwitter, FaFacebook, FaLinkedin  } from "react-icons/fa";


const Footer = () => {

  let d = new Date();
  const year = d.getFullYear();

  return (
    <div>
      <p className='reach'>Reach Me</p>
        <form action="https://getform.io/f/1572c1c8-e1d7-4e82-b97d-5ced3527baf1" method="post" className='Form'>
            <label htmlFor="Name">
              <p>Name:</p>
            <input type="text" name='Your Name' placeholder='Your Name'/>
            </label>

            <label htmlFor="Email">
              <p>Email:</p>
            <input type="text" name='Your Email' placeholder='Your Email'/>
            </label>

            <label htmlFor="Message Me">
              <p>Message Me:</p>
              <textarea name='Message Me'  id="" cols="40" rows="10" placeholder='How can I help you'></textarea>
             </label>
             <br />
        <button className='reachBtn'>Submit</button>
      </form>

      <div className='socials'>
        <a href="https://github.com/therealtmmy/"><FaGithub style={{ color: "white", cursor: "pointer", fontSize: "25px" }}
        />
        </a>
        <a href="https://twitter.com/therealtmmy"><FaTwitter style={{ color: "white", cursor: "pointer",  fontSize: "25px" }}
        /></a>
        <a href="https://www.linkedin.com/in/oluwatimilehin-esan-32a66a157/"><FaLinkedin style={{ color: "white", cursor: "pointer",  fontSize: "25px" }}
        /></a>
        <a href="https://www.behance.net/oluwatiesan"><FaBehanceSquare
          style={{ color: "white", cursor: "pointer",  fontSize: "25px" }}
        /></a>
        <a href="https://web.facebook.com/timi.esan/"><FaFacebook style={{ color: "white", cursor: "pointer",  fontSize: "25px" }}/></a>
      </div>

     
     
      <p className='copyright'>Oluwatimilehin Esan <span>{year}</span></p>
    </div>
  )
}

export default Footer
