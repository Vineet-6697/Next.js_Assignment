import Layout from '../component/Layout'
import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
  <Component {...pageProps} />
  </Layout>
  </>
)}


export default MyApp
