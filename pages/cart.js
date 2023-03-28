import styles from '@/styles/cart.module.scss'
import { useCart } from '@/zustand/stores'

export default function Cart(){
  const items = useCart((state) => state.items)

  const totalPrice = () => {
    let price = 0
    items.forEach((item) => price += (item.price * item.qty))
    return price
  }

  return(
    <div className={styles.cart}>
      <h1>shopping bag ${totalPrice()} </h1>
      {items.map((item) => 
        <ItemCard
          key={item}
          id={item.id}
          name={item.name}
          img={item.img}
          price={item.price}
          size={item.size}
          qty={item.qty}
        />
      )}
      <hr />
      <div className={styles.bill}>
        <p className={styles.delivery}>delivery cost <span>free</span></p>
        <p className={styles.total}>total <span>${totalPrice()}</span></p>
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

const ItemCard = ({id, name, img, price, size, qty}) => {
  const updateItems = useCart((state) => state.updateItems)
  const items = useCart((state) => state.items)
  const removeItem = useCart((state) => state.removeItem)
  const foundItem = items.find((oldItem) => oldItem.id === id)

  const incQty = () => {
    foundItem.qty = qty + 1
    updateItems()
  }

  const redQty = () => {
    if(qty > 1){
      foundItem.qty = qty - 1
      updateItems()
    }
  }

  return (
    <div className={styles.itemCard}>
      <div className={styles.imgContainer}>
        <img src={img} alt='' />
      </div>
      <div className={styles.textContainer}>
        <div 
          className={styles.close}
          onClick={() => removeItem(id)}
        />
        <div className={styles.cardHeader}>
          <h3>{name}</h3>
          <p>delivery 1 to 7 days (s)</p>
        </div>
        <div className={styles.cardDetails}>
          <p>size {size}</p>
          <div>
            <p className={styles.qty}>
              Qty:
              <button onClick={redQty}>-</button>
              {qty}
              <button onClick={incQty}>+</button>
            </p>
            <p>$ {price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}