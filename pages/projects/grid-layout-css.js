import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"
import styled from "styled-components"

const StyledImg = styled.img`
  max-width:85%;
`

const GridBlogCSS = props => (

        <div className="flex-project">
            <h1>Blog Layout</h1>
            <h2>CSS, HTML</h2>
            <div className="flex-dir-row">
                <ProyectButtonUrl url="https://natali-pp.github.io/CSS-Grid-Blog" />
                <ButtonGithub url="https://github.com/Natali-PP/CSS-Grid-Blog" />
            </div>
          <StyledImg src="/projects/gridblog.png"  />
            
            <p>A blog layout using CSS Grid</p>
            
        </div>

)

export default GridBlogCSS;
