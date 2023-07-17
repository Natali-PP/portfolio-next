import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl.js"
import ButtonGithub from "../../components/ProyectGithub"
import styled from "styled-components"

const StyledVideoProject = styled.video`
  max-width:85%;
`
const MonstersCards = props => (
  <div className="flex-project">
    <h1>3D Monsters Cards</h1>
    <h2>React, Three.js, R3F, Next.js , Zustand, JS, CSS, Framer Motion</h2>
    <div className="flex-dir-row">
      <ProyectButtonUrl url="https://3d-monsters-cards.vercel.app/" />
      <ButtonGithub url="https://github.com/Natali-PP/3d-monsters-cards" />
    </div>
    <StyledVideoProject src="/projects/3d-monsters-cards.mp4" autoPlay loop={true} />
    <p>A collection of 3D cards, each with a specific theme, with a corresponding 3D model and background.
      Animated scrolling, fade in/out and zoom in/out</p>

  </div>
)

export default MonstersCards;
