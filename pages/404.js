import React from "react"
import styled from "styled-components"
//import Cuadrados3D from './components/Cuadrados3D'
import Loadable from "react-loadable"

const loader = () => <div>Loading threejs...</div>
//
// a component that will be defered to be rendered only on client side.
const LoadableCuadrado = Loadable({
 loader : () => import('../components/Cuadrados3D.js'), // imports the component with the three.js and allows use of it safely
 loading: loader,
})
const Main = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
const Text = styled.div`
  position: absolute;
  display: inline-block;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  left: 17%;
  z-index:200;
  font-size:5vw;
  color: var(--blue);
  @media (min-width: 900px){
    font-size:2vw;
    left:25%;
  }
`
const Center = styled.div`
  text-align:center;
`

const CuadradosStyled = styled.div`
  width:100vw !important;
  height:100vh !important;
  overflow:hidden !important;
  position:absolute !important;
  top:0 !important;
  left:0 !important;
`
const NotFoundPage = () => { 
  const isBrowser = typeof window !== "undefined";
  return (
    <Main>
      { isBrowser && (
        <CuadradosStyled>
          <LoadableCuadrado />
        </CuadradosStyled>
      )}
      <Text>
        <h1>NOT FOUND</h1>
        <Center><p>You just hit a route that doesn&#39;t exist... the sadness.</p></Center>
      </Text>
    </Main>
)}

export default NotFoundPage;
