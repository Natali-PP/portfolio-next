import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl.js"
import ButtonGithub from "../../components/ProyectGithub"
import styled from "styled-components"

const StyledVideoProject = styled.video`
  max-width:85%;
`
const Button3D = props => (
  <div className="flex-project">
    <h1>3D Microinteraction</h1>
    <h2>React, Three.js, JS, CSS, Framer Motion 3D</h2>
    <div className="flex-dir-row">
      <ProyectButtonUrl url="https://natali-pp.github.io/button-3d-animation/" />
      <ButtonGithub url="https://github.com/Natali-PP/button-3d-animation" />
    </div>
    <StyledVideoProject src="/projects/button-3d.mp4" autoPlay loop={true} />
    <p>A 3D button microinteraction </p>

  </div>
)

export default Button3D;
