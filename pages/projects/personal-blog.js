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
      <ProyectButtonUrl url="https://natali-pp.github.io/blog" />
      <ButtonGithub url="https://github.com/Natali-PP/blog" />
    </div>
    <StyledImg src="/projects/personal-blog-hugo.png"  />
    <div className="mt-2"> 
      <p>Personal blog using Hugo and Go</p>
    </div>
  </div>

)

export default PersonalBlogHugo;
