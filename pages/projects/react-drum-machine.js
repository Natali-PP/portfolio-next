import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"
import styled from "styled-components"

const StyledImg = styled.img`
  max-width:85%;
`

const ReactDrumMachine = props => (
  <div className="flex-project">
    <h1>React Drum Machine</h1>
    <h2>React, JS, CSS, HTML, Figma</h2>
    <div className="flex-dir-row">
      <ProyectButtonUrl url="https://natali-pp.github.io/FCC-drum-machine/ " />
      <ButtonGithub url="https://github.com/Natali-PP/FCC-drum-machine" />
    </div>
    <StyledImg  src="/projects/react-drum-machine.png"  />
    <div className="mt-2"> 
      <p>I've build this proyect following FreeCodeCamp's Curriculum, using React hooks</p>
      <p>This project was bootstrapped with <b>Create React App</b>.</p>
    </div>
  </div>
)

export default ReactDrumMachine;
