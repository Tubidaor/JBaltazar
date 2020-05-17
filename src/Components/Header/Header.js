import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header(props) {

  function onClickMenu() {
    document.getElementById("hamburger").classList.toggle("change");
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    console.log('onclickRAN')
  }

  return (
    <header className="header">
      {/* <div className="headerImg">
      </div> */}
      <nav className="nav-bar" id="nav-bar">
        <div className="navContainer">
        {/* <span className="my-name">Juan Baltazar</span> */}
        <div className="hamburger" id="hamburger" onClick={onClickMenu}>
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
        </div>
        </div>
        <div className="menu-bg" id="menu-bg">
          <ul className="menu" id="menu">
            <li className="li item1">
              <Link to='/'>
                Home
              </Link>
                {/* <a>Home</a> */}
            </li>
            <li className="li item2">
              <Link to='/aboutMe'>
                About Me
              </Link>
              {/* <a href="aboutMe.html">About me</a> */}
            </li>
            <li className="li item3">
              <Link to='/projects'>
                Projects
              </Link>
              {/* <a href="index.html#projects">Projects</a> */}
            </li>
            <li className="li item4">
              <Link to='/resume'>
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

