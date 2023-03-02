import Image from 'next/image'
import styles from '@/styles/product-view.module.scss'
import { useState } from 'react'

export default function ProductView({ img, name, desc, price}){
  const [open, setOpen] = useState(false)

  const slideButton = open
  ? { top: '10%' }
  : {}

  const slideInfo = open
  ? { 
    transform: 'translateY(-60vh)',
  }
  : {}

  const showInfo = open
  ? {height: 'fit-content'}
  : {}

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.product} src={img} alt='' />
        <img 
          className={styles.portfolio}
          src={'/portfolioBg.svg'} 
          alt='' 
        />
        <button 
          className={styles.open}
          onClick={() => setOpen((prev) => !prev)}
          style={slideButton}
        />
      </div>
      <div 
        className={styles.textContainer} 
        style={slideInfo}
      >
        <div className={styles.name}>
          <p>{name}</p>
          <p>$ {price}</p>
        </div>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.buttons}>
          <img src={'/save.svg'} alt='' />
          <button>Select Size</button>
        </div>
        <div 
          className={styles.hide}
          style={showInfo}
        >
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </div>
      </div>
    </div>
  )
}