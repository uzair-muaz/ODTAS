import '../styles/globals.css'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {

  
  return <div className='h-screen'>

    <div className='h-[10%]' ><Navbar/></div>
    <div className='h-[90%]'><Component {...pageProps} /></div>

  </div>}

export default MyApp
