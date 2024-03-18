
import {IconBrandLinkedin,IconBrandGithub } from "@tabler/icons-react";
import './index.css'


const Hero = () => (
    <div className='hero-container'>
    <div className='hero-card-container'>
    <div className='hero-content'>
       <h2>Hello <img src='https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png' className='wave' alt='wave' /></h2>
        <h1>Omprakash Yamavaram </h1>
        <p>Aspiring FullStock Developer in Nxtwave </p>
       <div className='hero-icon-container'>
       
     
       <a href='https://www.linkedin.com/in/omprakash-yamavaram/' target="_blank" rel="noopener noreferrer">
       <IconBrandLinkedin className='hero-icon' />
        </a>
         
       <a href='https://github.com/YOmprakash?tab=repositories' target="_blank" rel="noopener noreferrer">
       <IconBrandGithub className='hero-icon'   />
        </a>
        
       
       </div>
        
      </div>
      <img className='profile-img' src="https://i.postimg.cc/RFwRPvPb/cropped-image.png" alt="Person" />


    </div>
    </div>
)

export default Hero