import '../styles/globals.css'
import {AppWrapper} from '../contexts/Auth'

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
)}

export default MyApp
