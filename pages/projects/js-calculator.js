import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"
import styled from "styled-components"

const StyledImg = styled.img`
  max-width:85%;
`

const JSCalculator = props => (
  <div className="flex-project">
    <h1>React Calculator</h1>
    <h2>React, JS, CSS, HTML</h2>
    <div className="flex-dir-row">
      <ProyectButtonUrl url="https://natali-pp.github.io/FCC-calculator/" />
      <ButtonGithub url="https://github.com/Natali-PP/FCC-calculator" />
    </div>
    <StyledImg  src="/projects/calculator.png" />

    <div className="mt-2"> 
      <p> React calculator using hooks, for the FCC's front end libraries certification </p>
    </div>
  </div>

)

export default JSCalculator;
