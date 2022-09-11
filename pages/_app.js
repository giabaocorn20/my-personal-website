import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <main >
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
}

export default MyApp
