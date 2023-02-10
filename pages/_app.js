import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { Mulish } from '@next/font/google'

const mulish = Mulish({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main className={mulish.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
