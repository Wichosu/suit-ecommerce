import '@/styles/globals.css'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main style={{width: '100%', height: '100%'}}> 
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
