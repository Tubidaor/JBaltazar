import React from 'react';
import Header from './Components/Header/Header';
import Mainpage from './Pages/Mainpage/Mainpage';
import Bubbles from './Components/Background/Background';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import AboutMePage from './Pages/AboutMePage/AboutMePage';
import  ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import ResumePage from './Pages/ResumePage/ResumePage';

function App() {

  const colorOptions = {
    1: "#45b3e7",
    2: "#F9E100",
    3: "#FF0800",
    4: "#e94498",
    5: "#FF7C00",
  }
  let heightWidthNum = 0
  const heightWidth = function() {
    heightWidthNum = Math.floor(Math.random() * 40)
  }
  const color = function() {
    return colorOptions[Math.floor(Math.random() * 6)]
  }
  const marginTop = function() {
    return Math.floor(Math.random() * -100)
  }
  const marginLeft = function() {
    return Math.floor(Math.random() * 100)
  }
  const bubbles = function(numOfBubbles = 100) {
    let array = []

    for(let i =0; i < numOfBubbles; i++) {
      array.push({id:i})
    }
    return array
  }

  const displayBubbles = bubbles().map(bubble => {
    heightWidth()
    return (
      <Bubbles
        id={bubble.id}
        height={heightWidthNum}
        width={heightWidthNum}
        color={color()}
        marginTop={marginTop()+"vh"}
        marginLeft={marginLeft()+"vw"}
      />
    )
  })

  return (
    <div className="App">
      <Header/>
      <main>
        <Route 
          exact path={"/"}
          component={Mainpage}
        />
        <Route 
        exact path={"/aboutMe"}
        component={AboutMePage}
        />
        <Route
        exact path={"/projects"}
        component={ProjectsPage}
        />
        <Route
        exact path={"/resume"}
        component={ResumePage}
        />


  
      </main>
      <footer className="bubblesContainer">
      {displayBubbles}
      </footer>
    </div>
  );
}

export default App;
