import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl.js"
import ButtonGithub from "../../components/ProyectGithub"

const animatedCityLanding = props => (
        <div className="flex-project">
            <h1>Animated City Landing</h1>
            <h2>JS, GSAP, CSS, HTML, Figma</h2>
            <div className="flex-dir-row">
                <ProyectButtonUrl url="https://natali-pp.github.io/future-city-animated/" />
                <ButtonGithub url="https://github.com/Natali-PP/future-city-animated" />
            </div>
{/*             <Img 
                fixed={props.data.image.childImageSharp.fixed} 
                objectFit="cover"
                objectPosition="50% 50%"
            /> */}
        </div>
)

export default animatedCityLanding;
