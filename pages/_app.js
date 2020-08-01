// import App from 'next/app'
import "../public/main.css"
import '../public/navbar.css';
//import ProyectButtonUrl from "./components/ProyectButtonUrl"
import NavBar from '../components/navbar.js'

function MyApp({ Component, pageProps }) {
    return (
      <>
        <NavBar />
        <Component {...pageProps} />
      </>
    )
  };
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp
