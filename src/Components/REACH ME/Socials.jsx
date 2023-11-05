import React from 'react';
import { FaBehanceSquare, FaGithub, FaTwitter, FaFacebook, FaLinkedin  } from "react-icons/fa";

const socialMediaLinks = [
    { 
        "link": "https://github.com/therealtmmy/",
        "icon": FaGithub, 
        "iconStyle": {
            "color": "white", 
            "cursor": "pointer",  
            "fontSize": "25px" 
        } 
    },

    { 
        "link": "https://twitter.com/therealtmmy",
        "icon": FaTwitter, 
        "iconStyle": {
            "color": "white", 
            "cursor": "pointer",  
            "fontSize": "25px" 
        } 
    },

    { 
        "link": "https://www.linkedin.com/in/oluwatimilehin-esan-32a66a157",
        "icon": FaLinkedin, 
        "iconStyle": {
            "color": "white", 
            "cursor": "pointer",  
            "fontSize": "25px" 
        } 
    },

    { 
        "link": "https://www.behance.net/oluwatiesan",
        "icon": FaBehanceSquare, 
        "iconStyle": {
            "color": "white", 
            "cursor": "pointer",  
            "fontSize": "25px" 
        } 
    },

    { 
        "link": "https://web.facebook.com/timi.esan/",
        "icon": FaFacebook, 
        "iconStyle": {
            "color": "white", 
            "cursor": "pointer",  
            "fontSize": "25px" 
        } 
    }
]

const Socials = () => {
    return (
    <div className='socials'>
        {socialMediaLinks.map((value, index) => (
        <a 
        key={index}
        href={value.link}
        target='_blank'
        rel="noreferrer"
        >
        
        {React.createElement(value.icon, { style: value.iconStyle })}
        </a>))}
     </div>
    )
}

export default Socials