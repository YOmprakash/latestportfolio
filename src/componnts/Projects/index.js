import React from 'react';
import { FaPlay, FaGithub } from 'react-icons/fa';
import './index.css';

const Project = () => {
  return(
    <div id ='projects' className='project-container'>
      <h2 className='heading-secondary'>MY PROJECTS</h2>
      <div className='work'>
        <div className='card'>
          <img src='https://i.postimg.cc/xdLYL83s/Screenshot-2024-03-18-131607.png' alt='insta share' className='project-image'/>
          <div className='card-body'>
            <h1>Insta Share</h1>
            <div className='card-btn-container'>
              <a href='https://github.com/YOmprakash/InstaShare.git' target='_blank' rel='noopener noreferrer'><FaGithub size={24} className='p-btn'/></a>
              <a href='https://prakashinsta63.ccbp.tech' target='_blank' rel='noopener noreferrer'><FaPlay  size={24} className='p-btn'/></a>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src='https://i.postimg.cc/bvrXTj2t/Screenshot-2024-03-18-133754.png' alt='Jobby app' className='project-image'/>
          <div className='card-body'>
            <h1>Jobby App</h1>
            <div className='card-btn-container'>
              <a href='https://github.com/YOmprakash/jobbyappkj.git' target='_blank' rel='noopener noreferrer'><FaGithub size={24} className='p-btn'/></a>
              <a href='https://prakashjobby1.ccbp.tech' target='_blank' rel='noopener noreferrer'><FaPlay  className='p-btn' size={24} /></a>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src='https://i.postimg.cc/LsfxpHwf/Screenshot-2024-03-18-134539.jpg' alt='nxttrendz' className='project-image'/>
          <div className='card-body'>
            <h1>Nxt Trendz</h1>
            <div className='card-btn-container'>
              <a href='https://prakahnxtrenz6.ccbp.tech/' target='_blank' rel='noopener noreferrer'><FaGithub size={24} className='p-btn'/></a>
              <a href='https://prakahnxtrenz6.ccbp.tech' target='_blank' rel='noopener noreferrer'><FaPlay  size={24} className='p-btn'/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;
