import styles from '@/styles/menu.module.scss'
import Link from 'next/link'
import { useMenu } from '@/zustand/stores'

//dummy data
const data = [
  {type: 'Clothing'},
  {type: 'Shoes'},
  {type: 'Accessories'},
  {type: 'Design Your Own'},
]
//TODO Create a search icon
export default function Menu(){
  const menu = useMenu((state) => state.menu)
  const hideMenu = useMenu((state) => state.hideMenu)

  const showMenu = menu
  ? { transform: 'translateX(0%)'}
  : { transform: 'translateX(-100%)'}

  return (
    <div 
      className={styles.menu}
      style={showMenu}
    >
      <img src='/save.svg' alt='' />
      <ul>
        <Link 
          className={styles.link} 
          href=''
          onClick={hideMenu}
        >
          New Arrivals
        </Link>
        {data.map((type) => 
          <Link
            className={styles.link}
            key={JSON.stringify(type)}
            onClick={hideMenu}
            href=''
          >
            <li
              href=''
            >
              {type.type}
            </li>
          </Link>
        )}
      </ul>
      <div>
        <Link
          className={styles.link}
          onClick={hideMenu}
          href=''
          >
            Journal
          </Link>
        <Link
          className={styles.stores}
          onClick={hideMenu}
          href=''
        >
          Stores
        </Link>
      </div>
    </div>
  )
}