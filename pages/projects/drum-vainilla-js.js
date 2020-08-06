import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"
import styled from "styled-components"

const StyledImg = styled.img`
  max-width:85%;
`

const DrumVainilla = props => (
  <div className="flex-project">
    <h1>Js Drum Machine</h1>
    <h2>React, JS, CSS, HTML, Figma</h2>
    <div className="flex-dir-row">
      <ProyectButtonUrl url="https://natali-pp.github.io/drum-kit/" />
      <ButtonGithub url="https://github.com/Natali-PP/drum-kit" />
    </div>
    <StyledImg  src="/projects/little-drum-vainillajs.png" />
    <div className="mt-2"> 
      <p>A drum-keyboard in vainilla js!!</p>
      <p>Pressing the indicated keys will make a sound and a little animation</p>
      <p>This was a challenge in Wes Bos's Javascript30 course.</p>
    </div>
  </div>
)

export default DrumVainilla;
