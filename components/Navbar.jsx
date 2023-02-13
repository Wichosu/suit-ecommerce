import Image from 'next/image'
import styles from '@/styles/navbar.module.scss'
import Toolbar from './Toolbar';
import { useRouter } from 'next/router';

export default function Navbar(){
  const router = useRouter();
  console.log(router.asPath)
  return (
    <div className={styles.navbar}>
      <div className={styles.main}>
        <Image src='/menu.svg' height={20} width={20} alt='' />
        <span><b>A</b>.DESIGN</span>
        <div>
          <Image src='/person.svg' height={25} width={25} alt='' />
          <Image src='/save.svg' height={25} width={25} alt='' />
          <Image src='/portfolio.svg' height={25} width={25} alt='' />
        </div>
      </div>
      {router.asPath === '/products' && <Toolbar />}
    </div>
  )
}