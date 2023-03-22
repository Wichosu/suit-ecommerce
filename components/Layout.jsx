import Navbar from "./Navbar"
import { useMenu, useSave } from "@/zustand/stores"
import Menu from "./Menu"
import Save from "./Save"
import { Mulish } from "@next/font/google"
import styles from '@/styles/layout.module.scss'

const mulish = Mulish({ subsets: ['latin'] })

export default function Layout({children}){
  const menu = useMenu((state) => state.menu)
  const hideMenu = useMenu((state) => state.hideMenu)
  const save = useSave((state) => state.save)
  const hideSave = useSave((state) => state.hideSave)

  const blur = menu || save
  ? {filter: 'blur(4px)', pointerEvents: 'none',}
  : {}

  const handleWindows = () => {
    hideMenu()
    hideSave()
  }

  return (
    <div className={`${mulish.className} ${styles.layout}`}>
      {menu || save
      ? 
        <div onClick={handleWindows}>
          <div style={blur}>
            <Navbar />  
            {children}
          </div>
        </div>
      :
        <>
          <Navbar />
          {children}
        </>
      }
      <Menu />
      <Save />
    </div>
  )
}