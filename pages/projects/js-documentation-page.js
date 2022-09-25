import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"
import styled from "styled-components"

const StyledImg = styled.img`
  max-width:85%;
`

const JSDocumentationPage = props => (
  <div className="flex-project">
    <h1>Js Documentation Pagee</h1>
    <h2>CSS, HTML</h2>
    <div className="flex-dir-row">
      <ProyectButtonUrl url="https://natali-pp.github.io/Technical-Documentation-Page/" />
      <ButtonGithub url="https://github.com/Natali-PP/Technical-Documentation-Page" />
    </div>
    <StyledImg  src="/projects/js-documentation.png" />
    <div className="mt-2"> 
      <p>A technical Documentation Page</p>
      <p>This was one of five challenges from freeCodeCamp's Responsive Web Design certification</p>
    </div>
  </div>

)

export default JSDocumentationPage;
