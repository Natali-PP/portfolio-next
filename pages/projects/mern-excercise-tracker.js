import React from "react"
import ButtonGithub from "../../components/ProyectGithub"

const MERNTracker = props => (

        <div className="flex-project">
            <h1>MERN Excercise Tracker</h1>
            <h2>MongoDB, Node, Express, React, Material-UI, CSS, HTML</h2>
            <div className="flex-dir-row">
                <ButtonGithub url="https://github.com/Natali-PP/exercise-tracker-mern" />
            </div>
{/*             <Img 
                fixed={props.data.image.childImageSharp.fixed} 
                objectFit="cover"
                objectPosition="50% 50%"
            /> */}
            

                <p>I've build this proyect following FreeCodeCamp's youtube video, but changing it from class based components in React to hooks, and instead of bootstrap, i've used Material-ui as React UI framework</p>

                <h4>Tecnologies used 💫</h4>
                <ul>
                    <li>MongoDb - MongoAtlas</li>
                    <li>Express</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>Axion</li>
                    <li>Material-UI && Material-UI Pickers</li>
                </ul>

                <p>This project was bootstrapped with <b>Create React App</b>.</p>
                <h4> Funtionalities</h4>
                    <ul>
                        <li>Add new user</li>
                        <li>Add new exercise log</li>
                        <li>Edit logged exercise</li>
                        <li>Delete logged exercise</li>
                        <li>Show exercises of all users</li>
                    </ul>

            </div>

)

export default MERNTracker;
