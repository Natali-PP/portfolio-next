import Head from 'next/head'
import Link from 'next/link'
import React from "react"
import styled from "styled-components"

//import Cuadrados3D from '../components/Cuadrados3D'
import Loadable from "react-loadable"
import Media from 'react-media';



//
//
const loader = () => <div>Loading threejs...</div>
//
// a component that will be defered to be rendered only on client side.
const LoadableCuadrado = Loadable({
 loader : () => import('../components/Cuadrados3D.js'), // imports the component with the three.js and allows use of it safely
 loading: loader,
})


const StyledLink = styled(Link)`
  color: var(--blue-line);
  font-family: 'Alata', sans-serif;
  text-transform:uppercase;
`

const SiteDescriptionSection = styled.section`
    font-family: 'Alata', sans-serif;
    font-size:1.25rem;
    color: var(--orange);
    text-align:center;
    padding: 1rem;
    margin: 2rem 1rem;
`

const FlexContainerColumnCenter = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 3.5rem 0;
  overflow:hidden;
    div {
        margin: 0 2rem;
        text-align: center;
    }
    h1 {
        font-size:1.75rem;
    }
    h2 {
        font-size:1.25rem;
        font-family: 'Roboto';
        background-color:var(--yelow-line);
    }
    img {
      max-width:50%;
    }
`

const CuadradosStyled = styled.div`
  width:100vw !important;
  height:100vh !important;
  overflow:hidden !important;
  position:absolute !important;
  top:0 !important;
  left:0 !important;
`
const Main = styled.div`
  position: relative;
  width: 99vw;
  height: 99vh;
  overflow: hidden;
`
const Text = styled.div`
  position: absolute;
  display: inline-block;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  left: 7%;
  z-index:200;
  font-size:6vw;
  color: var(--blue-line);
  @media (min-width: 900px){
    font-size:5vw;
    left:15%;
  }
`
const Center = styled.div`
  text-align:center;
`



class ProyectRepeat extends React.Component {
  render() {
    return (
      <>
        <Media queries= {{ small: {maxWidth: 599} }}>
          {matches => 
              matches.small ? (
                <h1 className="portfolio">Portfolio <br /></h1>
              ) : (
                <h1 className="portfolio">Portfolio <br />Portfolio <br/> Portfolio <br/></h1>
              )
          }
        </Media>
      </>
    );
  }
}

const loaderProyect = () => 
            <h1 className="portfolio">Portfolio</h1>;

const LoadableRepeatProyect = Loadable({
  loader: () => <ProyectRepeat />,
  loading: loaderProyect,
})
const PreviewProyectText = props => (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.tecn}</h2>
    </div>
);


const GridIntro = () => {
  //const {width} = useWindowSize();
  const isBrowser = typeof window !== "undefined";
  return(
    <section id="me" className="grid-container">
      <h1 className="name1"> NATALI </h1> <br />                                             
      <h1 className="name2">PALACIO</h1>                                            
      <h1 className="name3">PASTOR</h1>                                            
      <div className="red-line"></div>                                             
      <div className="blue-line"></div>                                        
      <div className="yellow-line"></div>                                           
      { isBrowser && (
        <ProyectRepeat />

      )}
      <section className="me-description">    
        <p>Hi! I’m a <span className="bold">Javascript</span> developer from Argentina, and I can help you build AWESOME web       
          solutions. </p>                     
        <p>I search to balance function and form</p>                              
        <p>The technologies that I use are <span className="bold">HTML, CSS, Javascript, React</span> and <span                    
          className="bold">Node.</span></p>         
        <p>Here you can see what i’ve built. If you are interested, <Link href="contact"><a><span   
          className="bold bold-blue">let’s talk!</span></a></Link></p>                         
      </section>                                                             
    </section>

  )};

/* export default function Home(props) {
  return (
    <div className="container">
      
      
    </div>
  )
} */

export default function Home(props) {
  const isBrowser = typeof window !== "undefined";
  return (
    <>
      <GridIntro />

      <section>
        <h1>Some proyects</h1>
        <Link href="projects/asistocovid">
          <a><FlexContainerColumnCenter>
            <PreviewProyectText title="Asistocovid" tecn="React, Angular, JS, CSS, HTML, Figma" />
            <img src="/projects/asistocovid.png" alt="asistocovid-image" />
          </FlexContainerColumnCenter></a>
        </Link>

        <Link href="projects/animated-city-landing">
          <a><FlexContainerColumnCenter>
            <img src="/projects/animated-city.png" alt="animated-city-landing-image" />
            <PreviewProyectText title="Animated City Landing" tecn="JS, GSAP, CSS, HTML, Figma" />
          </FlexContainerColumnCenter></a>
        </Link>

        <Link href="projects/mern-excercise-tracker">
          <a><FlexContainerColumnCenter>
            <PreviewProyectText title="MERN Excercise Tracker" tecn="MongoDB, Node, Express, React, Material-UI" />
            <img src="/projects/mern-tracker.png" />
          </FlexContainerColumnCenter></a>
        </Link>
        <Main>
          { isBrowser && (
            <CuadradosStyled>
              <LoadableCuadrado />
            </CuadradosStyled>
          )}                               
          <Text><StyledLink href="projects">Click here to see all my proyects</StyledLink></Text>

        </Main>
      </section>

      <SiteDescriptionSection>
        <h6>This site was built with NextJs, React, ThreeJs, CSS Grids and Flexbox!</h6>
        <h6>It's fully responsive and mobile-friendly</h6>
      </SiteDescriptionSection>


    </>
  )};
