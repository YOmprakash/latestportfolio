
import {IconBrandLinkedin,IconBrandGithub } from "@tabler/icons-react";
import './index.css'


const Hero = () => (
    <div className='hero-container'>
    <div className='hero-card-container'>
    <div className='hero-content'>
       
        <h1>FullStock Developer <img src='https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png' className='wave' alt='wave' /></h1>
        <p>Hello, I'm Omprakash Yamavaram. Aspiring FullStock Developer </p>
       <div className='icon-container'>
       
     
       <a href='https://www.linkedin.com/in/omprakash-yamavaram/' target="_blank" rel="noopener noreferrer">
       <IconBrandLinkedin className='icon' color="black" width={32} height={32} />
        </a>
         
       <a href='https://github.com/YOmprakash?tab=repositories' target="_blank" rel="noopener noreferrer">
       <IconBrandGithub className='icon' color="black" width={32} height={32} />
        </a>
        
       
       </div>
        
      </div>
      <img className='profile-img' src="https://i.postimg.cc/vB8wmVyN/image.png" alt="Person" />


    </div>
    </div>
)

export default Hero