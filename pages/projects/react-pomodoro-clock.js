import React from "react"
import ButtonGithub from "../../components/ProyectGithub"
import styled from "styled-components"

const StyledImg = styled.img`
  max-width:85%;
`
const ReactPomodoroClock = props => (
  <div className="flex-project">
    <h1>React Pomodoro Clock</h1>
    <h2>React, JS, CSS, HTML</h2>
    <div className="flex-dir-row">
      <ButtonGithub url="https://github.com/Natali-PP/FCC-pomodoro-clock" />
    </div>
    <StyledImg  src="/projects/pomodoro-clock.png" />

    <div className="mt-2"> 
      <p>Little webapp for the pomodoro technique for time managment, where you can set up the timer for the session and break.</p>
      <p>This is a challenge to obtain frecodecamp's Frontend Libraries certificate</p>

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
      </ul>
    </div>
    <p>This project was bootstrapped with <b>Create React App</b>.</p>
  </div>

)

export default ReactPomodoroClock;
