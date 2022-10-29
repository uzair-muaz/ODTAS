import '../styles/globals.css'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  console.log(Component.name)


  return <div className='h-screen'>


    {
      (Component.name != "Login") 
        ? <div className='h-[10%]' ><Navbar /></div>
        : <div></div>
    }
    
    <div className='h-[90%]' ><Component {...pageProps} /></div>

  </div>
}

export default MyApp
