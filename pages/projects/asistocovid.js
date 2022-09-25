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
const Asistovid = props => (
        <div className="flex-project">
          <StyledLogo src="/projects/asistoCovid-cover-transparente.png" alt="" />
            <h2>React, Angular, JS, CSS, HTML, Figma</h2>

            <ProyectButtonUrl url="https://asistocovid.com.ar/#/" ></ProyectButtonUrl>
          <StyledImg src="/projects/asistocovid.png" />
          <div className="mt-2"> 
            <p>It is a virtual assistant that answers frequently asked questions about the coronavirus in Argentina.</p>
            <p>Together with collaborators, we created a virtual assistant to answer questions about the coronavirus and the measures that the Argentine government is taking in this regard.</p>

            <p>It is updated in real time, and behind it uses artificial intelligence to understand what is asked. </p>

            <p>I contributed as a frontend developer and general UI, proposing and implementing improvements and features on the project page as in the chatbot itself</p>
            
            <p>It's used in sites like <a href="https://www.cba24n.com.ar/">cba24n</a>, <a href="https://www.hospitalvirtual.com/">Hospital Virtual</a>, <a href="https://www.kunan.com.ar/">Kunan</a>, <a href="https://www.neuralactions.com.ar/">Neuralactions</a>, <a href="https://asistocovid.com.ar/assets/slidermini.png">Radio del Mar</a> and <a href="">El País diario</a></p>  
          </div>


        </div>

);

export default Asistovid;
