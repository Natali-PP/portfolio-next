// import App from 'next/app'
import "../public/main.css"
import '../public/navbar.css';
//import ProyectButtonUrl from "./components/ProyectButtonUrl"
import NavBar from '../components/navbar.js'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
      <>      
        <Head>
          <title>Portfolio - Natalí Palacio Pastor</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
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
