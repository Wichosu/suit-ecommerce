import Link from 'next/link'
import styles from '@/styles/navbar.module.scss'
import Toolbar from './Toolbar'
import Menu from './Menu'
import { useRouter } from 'next/router'
import { useMenu, useSortBy } from '@/zustand/stores'

export default function Navbar(){
  const router = useRouter();
  const showMenu = useMenu((state) => state.showMenu)
  const menu = useMenu((state) => state.menu)
  const sortBy = useSortBy((state) => state.sortBy)

  const blur = menu
  ? { filter: 'blur(4px)'}
  : { filter: 'blur(0)'}

  return (
    <>
      {!sortBy &&
        <>
          <div className={styles.navbar} style={blur}>
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
      }
    </>
  )
}