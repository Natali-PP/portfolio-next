import React from 'react';
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
//import Cuadrados3D from '../components/Cuadrados3D'

//import Loadable from "react-loadable"
//
//const loader = () => <div>Loading threejs...</div>
////
//// a component that will be defered to be rendered only on client side.
//const LoadableCuadrado = Loadable({
// loader : () => import('../components/Cuadrados3D.js'), // imports the component with the three.js and allows use of it safely
// loading: loader,
//})
const  Container = styled.div`
  text-align-left;
  margin:2rem 8rem 0 10rem;
  h2 {
    text-align:center;
  }
`
const Education = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  a {
    color: #02519E;
    padding: 0.5rem;
    border: 1px solid #8FA4B9;
  }
  h5 {
    color : #DC4596;
  }
`
const CuadradosStyled = styled.div `
  width:100%;
  height:300px;
  overflow:auto;
`
const Certificate = (props) => {
  return(
    <Education>
      <h4>{props.title}</h4>
      <a href={props.link} target="_blank">Certificate</a>
    </Education>
  )
};

const Event = (props) => {
  return (
    <Education>
      <h4>{props.title}</h4>
      <h5>{props.type}</h5>
    </Education>
  )
}

const AboutMe = () => {
  const isBrowser = typeof window !== "undefined";
    return (
      <Layout>
        
        
        <Container>
            
          <h3>About Me</h3>
          <p>Hi! I'm Natalí</p>
          <p> I'm from Argentina, Córdoba.</p>
          <p>I'm a curious woman, and my interests are very diverse, from accesability to 3D graphics in the browser, from volunteer work to a new javascript library.</p>
          <p>My curiosity leaded me to a peculiar path: I've studied cinema, and made a short film and tv documentary. I've studied Industrial Engenering at Universidad Nacional de Córdoba, started my own bussines related to 3D printing and finally a self-taught web developer.</p>
          <p>I've also always been involved in my community. In the past I was a volunteer in various programs in a local organization to help children and young adults in their education. Today I'm a volunteer and part time mentor at MetLab Frontend, helping the women in MeT - Mujeres en Tecnología - a ONG that searches to enhance the impact and participation of women in various areas in IT.</p>
          <div>
            <h3>Courses & Certificates</h3>
              <Certificate title="FreeCodeCamp: APIs & Microservices" link="https://www.freecodecamp.org/certification/natalipp/apis-and-microservices" />            
              <Certificate title="FreeCodeCamp: Front End Libraries" link="https://www.freecodecamp.org/certification/natalipp/front-end-libraries" />
              <Certificate title="FreeCodeCamp: JavaScript Algorithms and Data Structures" link="https://www.freecodecamp.org/certification/natalipp/javascript-algorithms-and-data-structures" />    
              <Certificate title="FreeCodeCamp: Responsive Web Design" link="https://www.freecodecamp.org/certification/natalipp/responsive-web-design" />
          </div>
          <div>
            <h3>Activities</h3>
            <Event title="MeTCamp UX/UI" type="Attendee - 2020" />
            <Event title="Hackatón WeGirlsHack MeT" type="Attendee - 2019" />
            <Event title="PyData Córdoba" type="Volunteer/Attendee - 2019"  />
            <Event title="Bootcamp Web 2nd Edition - MeT" type="Attendee - 2019"  />
            <Event title="Women in Data Science - Córdoba" type="Attendee - 2019" />
          </div>
            
        </Container>
        
      </Layout> 
    )
}

export default AboutMe;
