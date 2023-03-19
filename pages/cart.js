import styles from '@/styles/cart.module.scss'
import { useCart } from '@/zustand/stores'

export default function Cart(){
  const items = useCart((state) => state.items)

  return(
    <div className={styles.cart}>
      <h1>shopping bag $ </h1>
      {items.map((item) => 
        <ItemCard
          key={item}
          name={item.name}
        />
      )}
      <hr />
      <div className={styles.bill}>
        <p className={styles.delivery}>delivery cost <span>free</span></p>
        <p className={styles.total}>total <span>$</span></p>
      </div>
      <hr />
      {/**Banner or logos */}
      <img src='' alt='' />
      <div className={styles.buttons}>
        <button className={styles.checkout}>checkout</button>
        <button className={styles.paypal}>paypal</button>
      </div>
    </div>
  )
}

const ItemCard = ({name}) => {
  return (
    <div className={styles.itemCard}>
      {name}
    </div>
  )
}