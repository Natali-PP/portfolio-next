import React from 'react'
import styled from "styled-components"
import Link from 'next/link'

const ProyectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    margin: 0 2.5rem 0 3.5rem;
    div {
        display:flex;
        justify-cotent:center;
        align-items:center;
        flex-direction:column;
    }

    h1 {
        font-size:1.75rem;
    }

    h2 {
        font-size:1.25rem;
        font-family: 'Roboto';
        background-color:#FDC403;
    }
    @media (min-width:600px){
      grid-template-columns: repeat(2, 1fr);
    }    
    @media (min-width:900px){
      grid-template-columns: repeat(3, 1fr);
    }
`
const StyledImgProject = styled.img`
  max-width:100%;
`
const StyledVideoProject = styled.video`
  max-width:100%;
`
const ProyectText = props => (
  <div>
    <h1>{props.title}</h1>
    <h2>{props.tecn}</h2>
  </div>
);

const Projects = props => (
  <>
    <h1>Projects</h1>

    <ProyectsGrid>
      <Link href="./projects/3d-monsters-card">
        <a>
          <div>
            <ProyectText title="3D Monsters Cards" tecn="React, Three.js, R3F, Next.js , Zustand, JS, CSS, Framer Motion" />
            <StyledVideoProject src="/projects/3d-monsters-cards.mp4" type="video/mp4" autoPlay loop={true} />
          </div>
        </a>
      </Link>
      <Link href="./projects/3d-button">
        <a>
          <div>
            <ProyectText title="3D Microinteraction" tecn="React, Three.js, JS, CSS, Framer Motion 3D" />
            <StyledVideoProject src="/projects/button-3d.mp4" type="video/mp4" autoPlay loop={true} />
          </div>
        </a>
      </Link>
      <Link href="./projects/3d-shoe-customizer">
        <a>
          <div>
            <ProyectText title="3D Shoe Customizer" tecn="React, Three.js, JS, CSS, HTML, Chackra UI, Framer Motion" />
            <StyledVideoProject src="/projects/3d-shoe.mp4" type="video/mp4" autoPlay loop={true} />
          </div>
        </a>
      </Link>

      <Link href="./projects/la-mirada-vegetal">
        <a>
          <div>
            <ProyectText title="La Mirada Vegetal" tecn="React, Three.js, JS, CSS, HTML, Figma" />
            <StyledImgProject src="/projects/la-mirada-vegetal.png" />
          </div>
        </a>
      </Link>

      <Link href="./projects/students-vue">
        <a>
          <div>
            <ProyectText title="Students Vue" tecn="Vue, JS, CSS, HTML, Tailwind CSS" />
            <StyledImgProject src="/projects/students-vue.png" />
          </div>
        </a>
      </Link>

      <Link href="./projects/asistocovid">
        <a>
          <div>
            <ProyectText title="Asistocovid" tecn="React, Angular, JS, CSS, HTML, Figma" />
            <StyledImgProject src="/projects/asistocovid.png" />
          </div>
        </a>
      </Link>

      <Link href="./projects/animated-city-landing">
        <a>
          <div>
            <ProyectText title="Animated City Landing" tecn="JS, GSAP, CSS, HTML, Figma" />
            <StyledVideoProject src="/projects/city.mp4" type="video/mp4" autoPlay loop={true} />
          </div>
        </a>
      </Link>

      <Link href="./projects/mern-excercise-tracker">
        <a>
          <div>
            <ProyectText title="MERN Excercise Tracker" tecn="MongoDB, Node, Express, React, Material-UI" />
            <StyledImgProject src="/projects/mern-tracker.png" />
          </div>
        </a>
      </Link>

      <Link href="./projects/react-drum-machine">
        <a><div>
          <ProyectText title="React Drum Machine" tecn="React, JS, CSS, HTML, Figma" />
          <StyledImgProject src="/projects/react-drum-machine.png" />
        </div></a>
      </Link>

      <Link href="./projects/react-quote-machine">
        <a><div>
          <ProyectText title="React Random Quote" tecn="React, JS, CSS, HTML, Figma" />
          <StyledImgProject src="/projects/random-quote-machine.png" />
        </div></a>
      </Link>
      <Link href="./projects/react-pomodoro-clock">
        <a><div>
          <ProyectText title="React Pomodoro Clock" tecn="React, JS, CSS, HTML" />
          <StyledImgProject src="/projects/pomodoro-clock.png" />
        </div></a>
      </Link>

      <Link href="./projects/bootcamp-met">
        <a><div>
          <ProyectText title="MeT's Bootcamp Landing" tecn="JS, CSS, HTML, Zeplin" />
          <StyledImgProject src="/projects/bootcamp-web-met.png" />
        </div></a>
      </Link>
      <Link href="./projects/drum-vainilla-js">
        <a><div>
          <ProyectText title="JS Drum Machine" tecn="JS, CSS, HTML" />
          <StyledImgProject src="/projects/little-drum-vainillajs.png" />
        </div></a>
      </Link>

      <Link href="./projects/personal-blog">
        <a><div>
          <ProyectText title="Personal Blog" tecn="Hugo, Go" />
          <StyledImgProject src="/projects/personal-blog-hugo.png" />
        </div></a>
      </Link>

      <Link href="./projects/js-calculator">
        <a><div>
          <ProyectText title="React Calculator" tecn="React, JS, CSS, HTML" />
          <StyledImgProject src="/projects/calculator.png" />
        </div></a>
      </Link>

      <Link href="./projects/grid-layout-css">
        <a><div>
          <ProyectText title="Grid Layout Blog" tecn="CSS, HTML" />
          <StyledImgProject src="/projects/gridblog.png" />
        </div></a>
      </Link>

      <Link href="./projects/taco-bar">
        <a><div>
          <ProyectText title="Taco Bar Layout" tecn="CSS, HTML" />
          <StyledImgProject src="/projects/taco-bar.png" />
        </div></a>
      </Link>

      <Link href="./projects/js-documentation-page">
        <a><div>
          <ProyectText title="Javascript Documentation Page" tecn="CSS, HTML" />
          <StyledImgProject src="/projects/js-documentation.png" />
        </div></a>
      </Link>

    </ProyectsGrid>

  </>
);

export default Projects;
