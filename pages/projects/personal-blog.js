import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"
import styled from "styled-components"

const StyledImg = styled.img`
  max-width:85%;
`

const PersonalBlogHugo = props => (
        <div className="flex-project">
            <h1>Personal Blog</h1>
            <h2>Hugo, Go</h2>
            <div className="flex-dir-row">
                <ProyectButtonUrl url="https://natali-pp.github.io/drum-kit/" />
                <ButtonGithub url="https://github.com/Natali-PP/drum-kit" />
            </div>
          <StyledImg src="/projects/personal-blog-hugo.png"  />
            <p>Personal blog using Hugo and Go</p>
        </div>

)

export default PersonalBlogHugo;
