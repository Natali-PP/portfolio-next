import React from "react"
//import Layout from "../../components/layout"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"
import styled from "styled-components"

const StyledImg = styled.img`
  max-width:85%;
`
const ReactDrumMachine = () => {
  return (
    <div className="flex-project">
      <h1>React Random Quote</h1>
      <h2>React, JS, CSS, HTML, Figma</h2>
      <div className="flex-dir-row">
        <ProyectButtonUrl url="https://natali-pp.github.io/FCC-random-quote-machine/" />
        <ButtonGithub url="https://github.com/Natali-PP/FCC-random-quote-machine" />
      </div>
      <StyledImg  src="/projects/random-quote-machine.png" />
      <div className="mt-2"> 
        <p>I've build this proyect following FreeCodeCamp's Curriculum, using React hooks</p>
        <p>This project was bootstrapped with <b>Create React App</b>.</p>
      </div>
    </div>


  )}

export default ReactDrumMachine;

