import styles from '@/styles/menu.module.scss'

//dummy data
const data = [
  {type: 'Clothing'},
  {type: 'Shoes'},
  {type: 'Accessories'},
  {type: 'Design Your Own'},
]
/**Make new arrivals and Journal indepent from ul element
 * each one should have it's own div or span
 * create a search icon
 */

export default function Menu(){
  return (
    <div className={styles.menu}>
      <img src='/save.svg' alt='' />
      <ul>
        <li className={styles.arrival}>New Arrivals</li>
        {data.map((type) => 
          <li
            key={JSON.stringify(type)}
          >
            {type.type}
          </li>
        )}
      </ul>
      <div>
        <p>Journal</p>
        <p>Stores</p>
      </div>
      <button>language</button>
    </div>
  )
}