import React, { Component } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


export default class Header extends Component {

  render() {

    return (
      <header className='resumeHeader'>
        <h1 className='resumeH1'>RÉSUMÉ</h1>
        <div className='headerContainer'>
          <div className="imgDiv">
            <img className="resumeImg" alt="image of man" src="https://i.ibb.co/BTbK9mq/IMG-1173-copy.png"/>
          </div>
          <div className="bubblesDiv">
            <div className="firstBubble"/>
            <div className="secondBubble"/>
            <div className="thirdBubble"/>
            <div className="fourthBubble">
              <p className="bubbleP"> Hi, my name is <span>Juan Baltazar</span>, I'd like to work for <span>you</span>.</p>
            </div>
          </div>
        </div>

        <ul className="resumeUl">
          <li className="liHeader">
            <p className='cityZip'> <FontAwesomeIcon icon={faCity}/> Culver City, CA 90230</p>
          </li>
          <li className="liHeader"> 
            <p>
              <FontAwesomeIcon icon={faInbox}/> {" "}
              <a href='mailto: juan.baltazar1@gmail.com'> 
                juan.baltazar1@gmail.com
              </a>
            </p>
          </li>
          <li className="liHeader">
            <p className='phone'> <FontAwesomeIcon icon={faMobileAlt}/> (818) 383-8869</p>
          </li>
          <li className="liHeader">
            <p>
              <FontAwesomeIcon icon={faLinkedin}/> {" "}
              <a href='http://www.linkedin.com/in/JuanBaltazar'>
                linkedin.com/in/JuanBaltazar
              </a>
            </p>
          </li>
        </ul>
        
      </header>
    )
  }
}