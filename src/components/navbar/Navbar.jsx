import React from 'react'
import './navbar.css';

function Navbar() {
  return (
    <div>
      <div className='btns'>
        <span className= 'btns-bar'> <a href='/'> <button className='home-btn'>Home</button> </a></span>
        {/* span is equivalent of div but no line break - had to separate the href tag from the bar tag so that the bar wont be clickable */}
        <a href='/projects'> <button className='projects-btn'>Projects</button> </a>
        <a href='/resume'> <button className='resume-btn'>Resume</button> </a>
        <a href='/about'> <button className='about-btn'>About</button> </a>
      </div>

    </div>
  )
}

export default Navbar
