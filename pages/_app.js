import '@/styles/globals.css'
import Layout from '@/components/Layout'
import { Mulish } from '@next/font/google'
import { useMenu } from '@/zustand/stores'

const mulish = Mulish({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const hideMenu = useMenu((state) => state.hideMenu)
  const menu = useMenu((state) => state.menu)

  const blur = menu
  ? { filter: 'blur(4px)'}
  : { filter: 'blur(0)'}

  return (
    <Layout>
      <main 
        className={mulish.className}
        onClick={hideMenu}
        style={blur}
      >
        {menu
        ? <div style={{pointerEvents: 'none'}}><Component {...pageProps} /></div>
        : <Component {...pageProps} />
        }
      </main>
    </Layout>
  )
}
