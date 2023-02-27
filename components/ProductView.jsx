import Image from 'next/image'
import styles from '@/styles/product-view.module.scss'
import { useState } from 'react'

export default function ProductView({ img, name, desc, price}){

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.product} src={img} alt='' />
        <img 
          className={styles.portfolio}
          src={'/portfolioBg.svg'} 
          alt='' 
        />
      </div>
      <div className={styles.textContainer}>
        <button className={styles.open} />
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