import React from 'react'
import AboutMe from '../../Components/AboutMe/AboutMe'
import { aboutMe } from '../../Data'

export default function AboutMePage(props) {
  
  return (
    <div className="aboutMePageContainer">
      <AboutMe text={aboutMe}/>
    </div>
  )
}

