import React, { useEffect, useState } from 'react'
import "../HEADER/Header.css"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const back = {
    background: "none"
  }

  const backk = {
    background: "black"
  }

  return (
    <>   
     <div className={`${'Header'}`} style= {scrolled ?  backk  : back}>
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
    </>

  )
}

export default Header
