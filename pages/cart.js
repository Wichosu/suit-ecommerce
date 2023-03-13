import styles from '@/styles/cart.module.scss'

export default function Cart(){
  return(
    <div className={styles.cart}>
      <h1>shopping bag $ </h1>
      {/**Create a component for products on cart */}
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