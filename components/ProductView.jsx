import Image from 'next/image'
import styles from '@/styles/product-view.module.scss'
import { useState } from 'react'

export default function ProductView({ img, name, desc, price}){
  return (
    <>
      <div>
        <img src='' alt='' />
        <img src='' alt='' />
      </div>
      <div>
        <div />
        <div>
          <p>{name}</p>
          <p>$ {price}</p>
        </div>
        <p>{desc}</p>
        <div>
          <img src='' alt='' />
          <button>Select Size</button>
        </div>
      </div>
    </>
  )
}