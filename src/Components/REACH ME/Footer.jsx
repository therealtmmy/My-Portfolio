import React, { useState } from 'react'
import "../REACH ME/Footer.css"
import Socials from "../REACH ME/Socials"


const Footer = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [showName, setShowName] = useState(false)
  const [showEmail, setShowEmail] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  let d = new Date();
  const year = d.getFullYear();
  
  return (
    <>
      <h3 id='reach'>Reach Me</h3>
      <div className='line'></div>

      <form className='Form'
       action="https://getform.io/f/1572c1c8-e1d7-4e82-b97d-5ced3527baf1"
       method="post"
      >
            <label>
            <p>Name:</p>
            <input 
            type="text" 
            name='Your Name' 
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setShowName(true)}
            />
            {showName && name.length < 1 ? (<p style={{color: "red"}}>Name cannot be empty</p>) : null}
            </label>

            <label>
            <p>Email:</p>
            <input 
            type="email" 
            name='Your Email' 
            placeholder ='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setShowEmail(true)}
            />
            {showEmail && email.length < 1 ? (<p style={{color: "red"}}>Email cannot be empty</p>) : null}
            </label>

            <label>
            <p>Message Me:</p>
            <textarea 
            name='Message Me' 
            cols="40" 
            rows="10" 
            placeholder ='How can I help you'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => setShowMessage(true)}
            >
            </textarea>
            {showMessage && message.length < 4 ? (<p style={{color: "red"}}>Please Leave Us a Message</p>) : null}
             </label>

             <br />

      <button className='reachBtn'>Submit</button>
      </form>

      <div><Socials/></div>
      <p className='copyright'> Oluwatimilehin Esan <span>{year}</span></p>
    </>
  )
}

export default Footer
