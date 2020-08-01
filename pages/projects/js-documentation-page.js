import React from "react"
import ProyectButtonUrl from "../../components/ProyectButtonUrl"
import ButtonGithub from "../../components/ProyectGithub"

const JSDocumentationPage = props => (
        <div className="flex-project">
            <h1>Js Documentation Pagee</h1>
            <h2>CSS, HTML</h2>
            <div className="flex-dir-row">
                <ProyectButtonUrl url="https://natali-pp.github.io/Technical-Documentation-Page/" />
                <ButtonGithub url="https://github.com/Natali-PP/Technical-Documentation-Page" />
            </div>
{/*             <Img 
                fixed={props.data.image.childImageSharp.fixed} 
                objectFit="cover"
                objectPosition="50% 50%"
            />
 */}
            
            <p>A technical Documentation Page</p>
            <p>This was one of five challenges from freeCodeCamp's Responsive Web Design certification</p>
        </div>

)

export default JSDocumentationPage;
