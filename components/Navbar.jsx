import Link from 'next/link'
import styles from '@/styles/navbar.module.scss'
import Toolbar from './Toolbar'
import { useRouter } from 'next/router'
import { useMenu, useSave } from '@/zustand/stores'

export default function Navbar(){
  const router = useRouter();
  const showMenu = useMenu((state) => state.showMenu)
  const showSave = useSave((state) => state.showSave)

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
            <img
              src='/save.svg'
              alt=''
              onClick={showSave}
            />
            <Link
              href={'/cart'}
            >
              <img 
                src='/portfolio.svg'
                alt=''
              />
            </Link>
          </div>
        </div>
        {router.asPath === '/products' && <Toolbar />}
      </div>
    </>
  )
}