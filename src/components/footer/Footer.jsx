import React from 'react'
import './footer.css';
import emailLogo from '../../assets/email-logo.png';
import githubLogo from '../../assets/github-logo.png';
import linkedLogo from '../../assets/linked-logo.png';


function Footer() {
  return (
    <div>
      <div className='footer'>
        {/* span is equivalent of div but no line break - had to separate the href tag from the bar tag so that the bar wont be clickable */}
        <a href='https://github.com/Ankeen-A?tab=repositories' target="_blank" rel="noreferrer" className='icons'> 
          <img src={githubLogo} alt="Github" className='github-img'/> 
        </a>

        <a href='mailto:ankeen.s.a@gmail.com' className='icons'> 
          <img src={emailLogo} alt="email" className='email-img'/> 
        </a>

        <a href='https://www.linkedin.com/in/ankeen-arestakesyan-40b914173/' target="_blank" rel="noreferrer" className='icons'> 
          <img src={linkedLogo} alt="LinkeIn" className='linked-img'/> 
        </a>
        
      </div>
    </div>
  )
}

export default Footer

