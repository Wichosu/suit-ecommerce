import Image from 'next/image'
import styles from '@/styles/product-view.module.scss'
import { useState } from 'react'

export default function ProductView({ img, name, desc, price}){
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img 
          src={img} 
          alt='' 
          className={styles.img}
        />
        <img 
          src='/portfolioBg.svg' 
          alt='' 
          className={styles.portfolio}  
        />
      </div>
      <div className={styles.info}>
        <div className={styles.open} />
        <div className={styles.price}>
          <p>{name}</p>
          <p>$ {price}</p>
        </div>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.buttons}>
          <img src='/save.svg' alt='' />
          <button>Select Size</button>
        </div>
        <div className={styles.accordion}>Details & Care</div>
        <p className={styles.panel}>Info...</p>
        <div className={styles.accordion}>Size & Fit</div>
        <p className={styles.panel}>Info...</p>
        <div className={styles.accordion}>Features</div>
        <p className={styles.panel}>Info...</p>
      </div>
    </div>
  )
}