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
  canvas {
    margin-left:3rem;
  }
`
const Text = styled.div`
  position: absolute;
  display: inline-block;
  width: 500px;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  left: 30%;
  line-height: 1em;
`
const Center = styled.div`
  text-align:center;
`

const StyledCuadrados = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 1rem;
  overflow: hidden;
`
const Navbar = styled.div`
  position:absolute;
  top: 0;
  z-index:200;
`
const NotFoundPage = () => { 
  const isBrowser = typeof window !== "undefined";
  return (
    <Main>
      { isBrowser && (
        <StyledCuadrados>
          <LoadableCuadrado />
        </StyledCuadrados>
      )}
      <Text>
        <h1>NOT FOUND</h1>
        <Center><p>You just hit a route that doesn&#39;t exist... the sadness.</p></Center>
      </Text>
    </Main>
)}

export default NotFoundPage;
