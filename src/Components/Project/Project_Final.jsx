import MainCards from './MainCards'
import { ProjectVideo } from './ProjectVideo'
import React from 'react'
import './Project_Final.css'
import { ContactFooter } from '../ContactPages/ContactFotter'

function Project_Final() {
  return (
    <div className="con51">
      <ProjectVideo></ProjectVideo>
      <MainCards></MainCards>
      <ContactFooter/>
    </div>
  )
}

export default Project_Final
