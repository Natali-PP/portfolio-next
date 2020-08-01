import React from "react"
import styled from "styled-components"


const ViewProyectButton = styled.div`
    padding:.5rem 1rem;
    border:1px solid #f05632;
    color: #f05632;
    margin-top:1rem;
    a{
        font-size:1.25rem;
    }
`
const ProyectGithub = props => (
        
        <div>
            <ViewProyectButton> <a target="_blank" href={props.url}>Code ⇨</a></ViewProyectButton>
        </div>
    
);

export default ProyectGithub;
