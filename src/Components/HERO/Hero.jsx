import React from 'react'
import Image from '../HERO/123.jpg'
import '../HERO/Hero.css'

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='ImageDiv'>
      <img className='Profile-Picture' src={Image} alt="my photo" />
      </div>
        <p>Hi, my name is</p>
        <h2>OLUWATIMILEHIN <br /> ESAN </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto earum at recusandae veniam, obcaecati voluptatibus! Error quos molestias, dolor est perspiciatis et impedit reiciendis. Veniam non odit illo quidem corrupti ipsum sapiente animi velit! Minus dolore nam esse quasi iste, molestias ratione voluptatibus explicabo impedit sequi optio! Libero, nemo incidunt!</p>
        <button>MY WORKS</button>
        <a href="">too fancy?</a>
    </div>
  )
}

export default Hero
