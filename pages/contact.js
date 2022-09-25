import React from 'react';
//import Layout from "../components/layout"
import styled from "styled-components"

const StyledContact = styled.div`
    width:70vw;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    margin:7.5% 15% 0 15%;
    /* box-shadow: inset 0 0 0 4px #E3001C, inset 0 0 0 8px #FDC403, inset 0 0 0 12px #02519E; */
`
const Social = (props) => {
  return(
    <a href={props.link}> <h3>{props.text}</h3></a>
  )
};

const SocialMail = styled.div`
  font-size:5rem ;
  h3 {
    font-size:3rem;
  }
`
const Contact = () => {
    return (
            <StyledContact>
              <h2>Contact me at</h2>
              <SocialMail>
                <Social link="mailto:cristinanatalip@gmail.com" text="cristinanatalip@gmail.com" /></SocialMail>
              <Social link="https://www.linkedin.com/in/natali-palacio-pastor/" text="Linkedin" />       
              <Social link="https://github.com/Natali-PP" text="Github" />       
              <Social link="https://twitter.com/Envido3" text="Twitter" />       
            </StyledContact>

    )
}

export default Contact;

