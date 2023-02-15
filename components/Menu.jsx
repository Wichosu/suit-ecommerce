import styles from '@/styles/menu.module.scss'
import Link from 'next/link'

//dummy data
const data = [
  {type: 'Clothing'},
  {type: 'Shoes'},
  {type: 'Accessories'},
  {type: 'Design Your Own'},
]
//TODO Create a search icon
export default function Menu({ toggle, setToggle }){

  const showMenu = toggle
  ? { transform: 'translateX(0%)'}
  : { transform: 'translateX(-100%)'}

  function hideMenu(){
    setToggle(!toggle)
  }

  return (
    <div 
      className={styles.menu}
      style={showMenu}
      onMouseLeave={hideMenu}
    >
      <img src='/save.svg' alt='' />
      <ul>
        <Link className={styles.link} href=''>New Arrivals</Link>
        {data.map((type) => 
          <li
            key={JSON.stringify(type)}
          >
            <Link
              className={styles.link}
              href=''
            >
              {type.type}
            </Link>
          </li>
        )}
      </ul>
      <div>
        <p>Journal</p>
        <p className={styles.stores}>Stores</p>
      </div>
      <button>language</button>
    </div>
  )
}