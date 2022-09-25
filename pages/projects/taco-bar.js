import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"
import styled from "styled-components"

const StyledImg = styled.img`
  max-width:85%;
`

const TacoBar = props => (

  <div className="flex-project">
    <h1>Taco Bar Landing Page</h1>
    <h2>CSS, HTML</h2>
    <div className="flex-dir-row">
      <ProyectButtonUrl url="https://natali-pp.github.io/taco_bar/" />
      <ButtonGithub url="https://github.com/Natali-PP/taco_bar" />
    </div>
    <StyledImg src="/projects/taco-bar.png"  />

    <div className="mt-2"> 
      <p>Example of a restaurant landing page using Flexbox and CSS Grids</p>
    </div>



  </div>

)

export default TacoBar;
