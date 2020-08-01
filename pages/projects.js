import React from 'react'
import styled from "styled-components"
//import './projects/asistocovid'
import Link from 'next/link'

const ProyectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
            <Link href="./projects/asistocovid">
                <div>
                    <ProyectText title="Asistocovid" tecn="React, Angular, JS, CSS, HTML, Figma" />

                </div>
            </Link>

            <Link href="./projects/animated-city-landing">
                <div>
                    <ProyectText title="Animated City Landing" tecn="JS, GSAP, CSS, HTML, Figma" />

                </div>
            </Link>

            <Link href="./projects/mern-excercise-tracker">
                <div>
                    <ProyectText title="MERN Excercise Tracker" tecn="MongoDB, Node, Express, React, Material-UI" />

                </div>
            </Link>

            <Link href="./projects/react-drum-machine">
            <div>
                <ProyectText title="React Drum Machine" tecn="React, JS, CSS, HTML, Figma"/>
{/*                 <Img 
                        fixed={props.data.imageReactDrum.childImageSharp.fixed} 
                        objectFit="cover"
                        objectPosition="50% 50%"
                    /> */}
            </div>
            </Link>

            <Link href="./projects/react-quote-machine">
                <div>
                    <ProyectText title="React Random Quote" tecn="React, JS, CSS, HTML, Figma"/>
 {/*                    <Img 
                            fixed={props.data.imageQuoteMachine.childImageSharp.fixed} 
                            objectFit="cover"
                            objectPosition="50% 50%"
                        /> */}
                </div>
            </Link>
            <Link href="./projects/react-pomodoro-clock">
                <div>
                    <ProyectText title="React Pomodoro Clock" tecn="React, JS, CSS, HTML"/>
{/*                     <Img 
                            fixed={props.data.imagePomodoro.childImageSharp.fixed} 
                            objectFit="cover"
                            objectPosition="50% 50%"
                        /> */}
                </div>
            </Link>

            <Link href="./projects/bootcamp-met">
                <div>
                    <ProyectText title="MeT's Bootcamp Landing" tecn="JS, CSS, HTML, Zeplin"/>
  {/*                   <Img 
                            fixed={props.data.imageBootcampWeb.childImageSharp.fixed} 
                            objectFit="cover"
                            objectPosition="50% 50%"
                        /> */}
                </div>
            </Link>
            <Link href="./projects/drum-vainilla-js">
                <div>
                    <ProyectText title="JS Drum Machine" tecn="JS, CSS, HTML"/>
{/*                     <Img 
                            fixed={props.data.imageDrumVainilla.childImageSharp.fixed} 
                            objectFit="cover"
                            objectPosition="50% 50%"
                        /> */}
            </div>
            </Link>

            <Link href="./projects/personal-blog">
                <div>
                    <ProyectText title="Personal Blog" tecn="Hugo, Go"/>
{/*                     <Img 
                            fixed={props.data.imageBlogHugo.childImageSharp.fixed} 
                            objectFit="cover"
                            objectPosition="50% 50%"
                        /> */}
                </div>
            </Link>

            <Link href="./projects/js-calculator">
            <div>
                <ProyectText title="React Calculator" tecn="React, JS, CSS, HTML"/>
{/*                 <Img 
                        fixed={props.data.imageCalculator.childImageSharp.fixed} 
                        objectFit="cover"
                        objectPosition="50% 50%"
                    /> */}
            </div>
            </Link>

            <Link href="./projects/grid-layout-css">
            <div>
                <ProyectText title="Grid Layout Blog" tecn="CSS, HTML"/>
{/*                 <Img 
                        fixed={props.data.imageGridBlog.childImageSharp.fixed} 
                        objectFit="cover"
                        objectPosition="50% 50%"
                    /> */}
            </div>
            </Link>

            <Link href="./projects/taco-bar">
            <div>
                <ProyectText title="Taco Bar Layout" tecn="CSS, HTML"/>
{/*                 <Img 
                        fixed={props.data.imageTacoBar.childImageSharp.fixed} 
                        objectFit="cover"
                        objectPosition="50% 50%"
                    /> */}
            </div>
            </Link>

            <Link href="./projects/js-documentation-page">
            <div>
                <ProyectText title="Javascript Documentation Page" tecn="CSS, HTML"/>
  {/*               <Img 
                        fixed={props.data.imageJSDoc.childImageSharp.fixed} 
                        objectFit="cover"
                        objectPosition="50% 50%"
                    /> */}
            </div>
            </Link>

        </ProyectsGrid>
        
    </>
);

export default Projects;
