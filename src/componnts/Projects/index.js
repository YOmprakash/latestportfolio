import React from 'react';
import './index.css';




const Project = () => {
  return(
    <div id ='projects' className='project-container'>
      <div className='heading-section'>
          <h2 className='heading-secondary'>MY PROJECTS</h2>
        <p className='section-work__paragraph'>Each Project is unique</p>
      </div>
     <div className='work'>
       <div className='work__img-container'>
      <img src='https://i.postimg.cc/7YQrTM5N/Screenshot-2024-01-14-105834.png' alt='project' className='work__img' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>Nxt Watch</h3>
         <p className='work__paragraph'>Developed the Nxt Watch platform, a YouTube-inspired application where users
can access various video categories, such as Trending, Gaming, and Saved videos,</p>
         <div className='btn-container'>
          <a href='https://omprkashnxt63.ccbp.tech/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
       </div>
     </div>
     <div className='work'>
       <div className='work__img-container'>
      <img src='https://i.postimg.cc/CM7zXt2L/Screenshot-2024-01-14-110254.png' alt='project' className='work__img' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>Nxt Trendz ( ECommerce Clone - Amazon,
Flipkart)
</h3>
         <p className='work__paragraph'>Implemented Nxt Trendz application which is a clone for ECommerce applications
like Amazon, Flipkart.</p>
         <div className='btn-container'>
          <a href='https://prakashtrendz.ccbp.tech/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
       </div>
     </div>
     <div className='work'>
       <div className='work__img-container'>
       <img src='https://i.postimg.cc/P5PyP1DY/Screenshot-2024-01-14-110630.png' alt='project' className='work__img' />
       </div>
       <div className='work__content'>
         <h3 className='work__header-three'>Jobby App</h3>
         <p className='work__paragraph'>Implemented Jobby App where users can log in and can see a list of jobs with
search by Job title, filters based on Salary range and Employment type, etc</p>
         <div className='btn-container'>
          <a href='https://prakashjobby1.ccbp.tech/' target='__blank' className='work__btn btn buttons'>View Project</a>
         </div>
       </div>
     </div>
     
    </div>
  )
}

export default Project;