import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { Mulish } from '@next/font/google'
import { useMenu } from '@/zustand/stores'

const mulish = Mulish({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const hideMenu = useMenu((state) => state.hideMenu)

  return (
    <Layout>
      <main 
        className={mulish.className}
        onClick={hideMenu}
      >
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
