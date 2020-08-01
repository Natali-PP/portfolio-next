import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"

const TacoBar = props => (

        <div className="flex-project">
            <h1>Taco Bar Landing Page</h1>
            <h2>CSS, HTML</h2>
            <div className="flex-dir-row">
                <ProyectButtonUrl url="https://natali-pp.github.io/taco_bar/" />
                <ButtonGithub url="https://github.com/Natali-PP/taco_bar" />
            </div>
{/*             <Img 
                fixed={props.data.image.childImageSharp.fixed} 
                objectFit="cover"
                objectPosition="50% 50%"
            /> */}

            <p>Example of a restaurant landing page using Flexbox and CSS Grids</p>

            
            
        </div>

)

export default TacoBar;
