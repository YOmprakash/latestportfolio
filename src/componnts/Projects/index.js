import React, { useState } from 'react';
import { FaPlay, FaGithub } from 'react-icons/fa';
import './index.css';

const Project = () => {
  const [showLatest, setShowLatest] = useState(true);

  const allProjects = [
    {
      name: 'Gemini Clone',
      image: 'https://i.postimg.cc/Y2Zq6V3V/Screenshot-2024-05-15-143322.png',
      github: 'https://github.com/YOmprakash/gemini-clone.git',
      live: 'https://gemini-clone-v8ec.vercel.app/'
    },

    {
      name: 'Insta Share',
      image: 'https://i.postimg.cc/xdLYL83s/Screenshot-2024-03-18-131607.png',
      github: 'https://github.com/YOmprakash/InstaShare.git',
      live: 'https://prakashinsta63.ccbp.tech'
    },
    {
      name: 'Jobby App',
      image: 'https://i.postimg.cc/bvrXTj2t/Screenshot-2024-03-18-133754.png',
      github: 'https://github.com/YOmprakash/jobbyappkj.git',
      live: 'https://prakashjobby1.ccbp.tech'
    },
    {
      name: 'Nxt Trendz',
      image: 'https://i.postimg.cc/LsfxpHwf/Screenshot-2024-03-18-134539.jpg',
      github: 'https://prakahnxtrenz6.ccbp.tech/',
      live: 'https://prakahnxtrenz6.ccbp.tech'
    },
    // Add more projects here...
  ];

  const latestProjects = allProjects.slice(0, 1); // Adjust this to show more latest projects

  const displayProjects = showLatest ? latestProjects : allProjects;

  return (
    <div id='projects' className='project-container'>
      <h2 className='heading-secondary'>MY PROJECTS</h2>
      <div className='button-container'>
      <button onClick={() => setShowLatest(true)}  className={`p-button ${showLatest ? ' active-button' : ''}`}>Latest Project</button>
      <button onClick={() => setShowLatest(false)} className={` p-button ${!showLatest ? 'p-button active-button' : ''}`}>All Projects</button>
      </div>
     
      <div className='work'>
        {displayProjects.map((project, index) => (
          <div key={index} className='card'>
            <img src={project.image} alt={project.name} className='project-image'/>
            <div className='card-body'>
              <h1>{project.name}</h1>
              <div className='card-btn-container'>
                <a href={project.github} target='_blank' rel='noopener noreferrer'><FaGithub size={24} className='p-btn'/></a>
                <a href={project.live} target='_blank' rel='noopener noreferrer'><FaPlay size={24} className='p-btn'/></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
