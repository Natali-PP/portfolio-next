import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"

const BootcampWebMet = props => (
        <div className="flex-project">
          <h1>MeT's Landing Page</h1>
            <h2>CSS, HTML, Zeplin</h2>
            <div className="flex-dir-row">
                <ProyectButtonUrl url="https://natali-pp.github.io/Bootcamp-web/" />
                <ButtonGithub url="https://github.com/Natali-PP/Bootcamp-web" />
            </div>
{/*             <Img 
                fixed={props.data.image.childImageSharp.fixed} 
                objectFit="cover"
                objectPosition="50% 50%"
            /> */}

            <h2>MeT's Bootcamp web landing page</h2>
            <p>I was able to reinforce what I already know, and learn new things, with the help of great professionals and mentors, in an inclusive and diverse envoirment sparkles It was a great experience!</p>
        </div>

)

export default BootcampWebMet;
