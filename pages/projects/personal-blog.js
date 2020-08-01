import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"

const PersonalBlogHugo = props => (
        <div className="flex-project">
            <h1>Personal Blog</h1>
            <h2>Hugo, Go</h2>
            <div className="flex-dir-row">
                <ProyectButtonUrl url="https://natali-pp.github.io/drum-kit/" />
                <ButtonGithub url="https://github.com/Natali-PP/drum-kit" />
            </div>
{/*             <Img 
                fixed={props.data.image.childImageSharp.fixed} 
                objectFit="cover"
                objectPosition="50% 50%"
            /> */}

            
            <p>Personal blog using Hugo and Go</p>
        </div>

)

export default PersonalBlogHugo;
