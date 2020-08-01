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
                <p>Little webapp for the pomodoro technique for time managment, where you can set up the timer for the session and break.</p>
                <p>This is a challenge to obtain frecodecamp's Frontend Libraries certificate</p>

                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>


                {/* <h4>Tecnologies used 💫</h4>
                <ul>
                    <li>MongoDb - MongoAtlas</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>Axion</li>
                    <li>Material-UI && Material-UI Pickers</li>
                </ul> */}

                <p>This project was bootstrapped with <b>Create React App</b>.</p>
                {/* <h4> Funtionalities</h4>
                    <ul>
                        <li>Add new user</li>
                        <li>Add new exercise log</li>
                        <li>Edit logged exercise</li>
                        <li>Delete logged exercise</li>
                        <li>Show exercises of all users</li>
                    </ul> */}

            </div>

)

export default ReactPomodoroClock;
