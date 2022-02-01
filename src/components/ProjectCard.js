import React from 'react';

const ProjectCard = ({name, active, makeActive, removeProject}) => {
  return(
      <div className={`project-card ${active? 'active': ''}`}>
         
          <div className='project-card-content'>
                <p className='name-p' onClick = {()=>makeActive(name)}>{name}</p>
                <div className='delete-wrapper'>
                    <i className="fas fa-trash icon delete-icon" onClick = {()=>removeProject(name)}/>
                </div>
          </div>
      </div>
  )
};

export default ProjectCard;
