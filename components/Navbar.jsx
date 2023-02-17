import Link from 'next/link'
import styles from '@/styles/navbar.module.scss'
import Toolbar from './Toolbar'
import Menu from './Menu'
import { useRouter } from 'next/router'
import { useMenu } from '@/zustand/stores'

export default function Navbar(){
  const router = useRouter();
  const showMenu = useMenu((state) => state.showMenu)

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.main}>
          <img
            className={styles.menu}
            src='/menu.svg'
            alt=''
            onClick={showMenu}
          />
          <Link className={styles.link} href='/'><b>A</b>.DESIGN</Link>
          <div>
            <img src='/person.svg' alt='' />
            <img src='/save.svg' alt='' />
            <img src='/portfolio.svg' alt='' />
          </div>
        </div>
        {router.asPath === '/products' && <Toolbar />}
      </div>
      <Menu />
    </>
  )
}