import Navbar from "./Navbar"
import { useMenu } from "@/zustand/stores"
import Menu from "./Menu"
import { Mulish } from "@next/font/google"

const mulish = Mulish({ subsets: ['latin'] })

export default function Layout({children}){
  const menu = useMenu((state) => state.menu)
  const hideMenu = useMenu((state) => state.hideMenu)

  const blur = menu
  ? {filter: 'blur(4px)', pointerEvents: 'none'}
  : {}

  return (
    <div className={mulish.className}>
      {menu
      ? 
        <div onClick={hideMenu}>
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
    </div>
  )
}