import React from 'react'
import './Mainpage.css'
import Intro from '../../Components/Intro/Intro'

export default class Mainpage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        1:"Hi.",
        2:"I'm Juan.",
        3:"I'm a web developer.",
        counter: 0,
    }
  }

  componentDidMount() {
      setTimeout(this.setCounter, 3000)
      setTimeout(this.setCounter, 4000)
      setTimeout(this.setCounter, 5000)
  }
  
  setCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  
  render() {
    
    return (
      <div className="mainDiv">
        <div className="containerMain" >
          <div className="imgContainer">
            <img
              className="mainImg"
              src="https://i.ibb.co/fnSSrZZ/JUANRESUME-1.png"
              alt="black and white caricature of Juan"/>
          </div>
          <div className="introDiv">
            {
              this.state.counter >= 1 &&
              <Intro
                className={"intro"}
                id={"Hi"}
                top={"100px"}
                left={"2px"}
                text={this.state[1]}
              />
            }
            <br/>
            {
              this.state.counter >= 2 &&
              <Intro
                className={"intro"}
                id={"Juan"}
                top={"250px"}
                left={"2px"}
                text={this.state[2]}
              />
            }
            <br/>
            {
              this.state.counter >= 3 &&
              <Intro
                className={"intro"}
                id={"Dev"}
                top={"400px"}
                left={"2px"}
                text={this.state[3]}
              />
            }
          </div>
        </div>
      </div>
    )
}
  }