import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import Link from 'next/link'
import styled from "styled-components"

const StyledLogo = styled.img`
  max-width:50%;
`
const StyledImg = styled.img`
  max-width:85%;
`
const LaMiradaVegetal = props => (
        <div className="flex-project">
          <StyledLogo src="/projects/la-mirada-logo.png" alt="" />
            <h2>React, Three.js, JS, CSS, HTML, Figma</h2>
            <ProyectButtonUrl url="https://shadow-mirada-vegetal.vercel.app" ></ProyectButtonUrl>
          <StyledImg src="/projects/la-mirada-2.png" />
          <div className="mt-2"> 
            <p>La mirada vegetal is a collaborative artistic project of which I am part with another programmer and self-managed artists. I was part of the design, implementation and deploy process of the page, which is still under construction. I implemented several versions of the custom shader, which was created by another programmer.</p>
            <p>Being made in React, the implementation was done using <b>react-three-fiber</b> for the shader and <b>drei</b> for rendering text in a 3D scene. The animations in the background were done using <b>Framer Motion</b>. I designed the page using <b>Figma</b>.</p>
          </div>
        </div>
);

export default LaMiradaVegetal;
