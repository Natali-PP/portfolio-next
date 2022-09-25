import React from "react"
import ButtonGithub from "../../components/ProyectGithub"
import ProyectButtonUrl from "../../components/ProyectButtonUrl.js"
import styled from "styled-components"

const StyledImg = styled.img`
  max-width:85%;
`
const StyledLogo = styled.img`
  max-width:85%;
`

const StudentsVue = props => (

  <div className="flex-project">
    <h1>Students Vue</h1>
    <h2>Vue, JS, CSS, HTML, Tailwind CSS</h2>
    <div className="flex-dir-row">
      <ProyectButtonUrl url="https://student-vue.vercel.app/" />
      <ButtonGithub url="https://github.com/Natali-PP/student-crud" />
    </div>
    <StyledLogo src="/projects/students-vue.png" />

    <h4>Tecnologies used 💫</h4>
    <ul>
      <li>MongoDb - MongoAtlas</li>
      <li>Express</li>
      <li>Node.js</li>
      <li>Vue</li>
      <li>Tailwind CSS</li>
    </ul>

    <p>This project was bootstrapped with <b>Create React App</b>.</p>
    <h4> Funtionalities</h4>
    <ul>
      <li>Add new student</li>
      <li>Show all students</li>
      <li>Dark Mode</li>
    </ul>

  </div>

)

export default StudentsVue;
