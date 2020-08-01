import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl.js"
import ButtonGithub from "../../components/ProyectGithub"
import styled from "styled-components"

const StyledLogo = styled.img`
  max-width:85%;
`
const animatedCityLanding = props => (
        <div className="flex-project">
            <h1>Animated City Landing</h1>
            <h2>JS, GSAP, CSS, HTML, Figma</h2>
            <div className="flex-dir-row">
                <ProyectButtonUrl url="https://natali-pp.github.io/future-city-animated/" />
                <ButtonGithub url="https://github.com/Natali-PP/future-city-animated" />
            </div>
          <StyledLogo src="/projects/animated-city.png" />
          
        </div>
)

export default animatedCityLanding;
