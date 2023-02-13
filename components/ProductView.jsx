import Image from 'next/image'
import styles from '@/styles/product-view.module.scss'

export default function ProductView({ img, name, desc, price}){
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.product} src={img} alt='' />
        <img 
          className={styles.portfolio}
          src={'/portfolio.svg'} 
          alt='' 
        />
        {/**Make logo with background */}
        <div className={styles.line} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.name}>
          <p>{name}</p>
          <p>$ {price}</p>
        </div>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.buttons}>
          <img src={'/save.svg'} alt='' />
          <button>Select Size</button>
        </div>
      </div>
    </div>
  )
}