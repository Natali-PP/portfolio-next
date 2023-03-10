import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl.js"
import ButtonGithub from "../../components/ProyectGithub"
import styled from "styled-components"

const StyledVideoProject = styled.video`
  max-width:85%;
`
const ShoeCustomizer = props => (
  <div className="flex-project">
    <h1>3D Shoe Customizer</h1>
    <h2>React, Three.js, JS, CSS, HTML, Chackra UI, Framer Motion</h2>
    <div className="flex-dir-row">
      <ProyectButtonUrl url="https://shoe-customizer-silk.vercel.app/" />
      <ButtonGithub url="https://github.com/Natali-PP/3D-shoe-customizer" />
    </div>
    <StyledVideoProject src="/projects/3d-shoe.mp4" autoPlay loop={true} />
    <p>A mobile-friendly web application that allows you to customize the features of a 3D shoe model.</p>

    <h2>Features</h2>

    <ul>
      <li>Present a 3D render of the gld file, where the user can rotate in every direction.</li>
      <li>The ability to change the color of each layer, either by
        <ul><li>Choosing a color from a recommended palette.</li>
        <li>Selecting a color using a color picker, where the saturation and chroma can be defined.</li></ul>
      </li>
      <li>The ability to change the width, height and depth of each layer. You can also go back to the default value configuration.</li>
    </ul>
  </div>
)

export default ShoeCustomizer;
