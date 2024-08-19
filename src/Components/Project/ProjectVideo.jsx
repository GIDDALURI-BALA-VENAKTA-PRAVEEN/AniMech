import './ProjectVideo.css';

import { Project_Header } from './Project_Header';
import React from 'react'
import project_video  from './Assests/Project_video.mp4';

export function ProjectVideo() {
  return (
    <div>
    <div className="con">
    <video className='project-vc'  autoPlay loop muted>
      <source
        src={project_video}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
      <Project_Header></Project_Header>
  </div>
    </div>
  )
}


