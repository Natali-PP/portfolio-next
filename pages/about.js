import React from 'react';
//import Layout from "../components/layout"
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

const AlataText = styled.p`
  font-family: 'Alata', sans-serif;
  font-size:1.15rem;
`

const TitleJob = styled.div`
  display:flex;
  justify-content:left;
  align-items:center;
`

const bold = styled.p`
  font-weight:bold;
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
        
        
        <Container>
            
          <AlataText><h3>About Me</h3></AlataText>
          <p>Hi! I'm Natalí 👋</p>
          <p> I'm from Córdoba, Argentina.</p>
          <p>I’m a curious, proactive and creative self-taught React Front end developer.</p>
          <p>I've studied Industrial Engenering at Universidad Nacional de Córdoba, and I'm currently studying the Data Science's University Diploma at UNC FAMAF</p>
          
          <AlataText><h4>Skills</h4></AlataText>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Javascript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Git</li>
            <li>Figma</li>
          </ul>
          <AlataText><h4>Interests & Hobbies</h4></AlataText>
          <ul>
            <li>Creative coding</li>
            <li>Digital Art</li>
            <li>Film and Series</li>
          </ul>
          <AlataText><h4>Community Work</h4></AlataText>
          <p>I've also always been involved in my community. In the past I volunteered in various programs in a local organization to help children and young adults in their education. Today I'm a volunteer and part time mentor at MetLab Frontend, helping the women in MeT - Mujeres en Tecnología - an ONG that searches to enhance the impact and participation of women in various areas in IT.</p>
          <div>
            <AlataText><h3>Work Experience</h3></AlataText>
            <div >
              <TitleJob><AlataText>NeuralActions</AlataText><p style={{marginTop:"20px", marginLeft:"1rem"}}> <i> - Frontend Developer & UI Designer | 2020 - Today</i></p></TitleJob>
              <p>I've <b>implemented</b> and <b>designed</b> the user interfaces, using Figma as a prototyping tool and React and Redux as the frontend’s main libraries.</p>
              <p>• Created and implemented a custom design system.</p>
              <p>• Proposed and upgraded the coding standards  - like using functional components instead of class components in React.</p> 
              <p>• Proposed, designed and implemented a new login and visualization mode. </p>
            </div>

            <div>
              <TitleJob><AlataText>Cientelink</AlataText><p style={{marginTop:"20px", marginLeft:"1rem"}}> <i> - Frontend Dev | 2020</i></p></TitleJob>
              <p>Detected and fixed various bugs and issues in the frontend, using Javacript, Bootstrap, HTML, CSS and JQuery.</p>
            </div>
          </div>

          <div>
            <AlataText><h3>Courses & Certificates</h3></AlataText>
              <Certificate title="FreeCodeCamp: APIs & Microservices" link="https://www.freecodecamp.org/certification/natalipp/apis-and-microservices" />            
              <Certificate title="FreeCodeCamp: Front End Libraries" link="https://www.freecodecamp.org/certification/natalipp/front-end-libraries" />
              <Certificate title="FreeCodeCamp: JavaScript Algorithms and Data Structures" link="https://www.freecodecamp.org/certification/natalipp/javascript-algorithms-and-data-structures" />    
              <Certificate title="FreeCodeCamp: Responsive Web Design" link="https://www.freecodecamp.org/certification/natalipp/responsive-web-design" />
          </div>
          <div>
            <AlataText><h3>Community Work & Activities</h3></AlataText>
            <Event title="BootCamp Web 3rd Edition - MeT" type="Speaker/Teacher - 2020" />
            <Event title="MeTCamp UX/UI" type="Attendee - 2020" />
            <Event title="Hackatón WeGirlsHack MeT" type="Attendee - 2019" />
            <Event title="PyData Córdoba" type="Volunteer/Attendee - 2019"  />
            <Event title="Bootcamp Web 2nd Edition - MeT" type="Attendee - 2019"  />
            <Event title="Women in Data Science - Córdoba" type="Attendee - 2019" />
          </div>
            
        </Container>
        
    )
}

export default AboutMe;
