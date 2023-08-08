import React from 'react'
import "../HEADER/Header.css"

const Header = () => {
  return (
    <div className='Header'>
        <div>
            <a href="">OLUWATIMILEHIN</a>
        </div>
        <div className='Nav-Bar'>
            <a href="">WORKS</a>
            <a href="">SKILLS</a>
            <a href="https://drive.google.com/file/d/1ZPmR-nMf7i7kpUuK-fpVtrFCMEmeHCsJ/view" target='_blank'>RESUME</a>
            <button>SAY HELLO</button>
        </div>
    </div>
  )
}

export default Header
