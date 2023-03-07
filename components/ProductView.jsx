import Image from 'next/image'
import styles from '@/styles/product-view.module.scss'
import { Fragment, useState } from 'react'

const dummyInfo = {
  details: 'This is a very long and detailed description',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  features: ['First detail', 'Second important feature', 'third but not least', 'fourt is for luck'],
}

export default function ProductView({ img, name, desc, price}){
  const [expandFeatures, setExpandFeatures] = useState(false)
  const [expandSizes, setExpandSizes] = useState(false)
  const [expandDetails, setExpandDetails] = useState(false)

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
        <div 
          className={styles.accordion} 
          onClick={() => setExpandDetails((prev) => !prev)}
        >
          Details & Care
        </div>
        <p className={styles.panel}>{dummyInfo.details}</p>
        <div
          className={styles.accordion}
          onClick={() => setExpandSizes((prev) => !prev)}
        >
          Size & Fit
        </div>
        <div className={styles.panel}>
          {dummyInfo.sizes.map((size) => 
            <Fragment key={size}>
              <input
                type='checkbox'
                id={size}
              />
              <label htmlFor={size}>{size}</label>
            </Fragment>
          )}
        </div>
        <div 
          className={styles.accordion}
          onClick={() => setExpandFeatures((prev) => !prev)}
        >
          Features
        </div>
        <ul className={styles.panel}>
          {dummyInfo.features.map((feature) =>
            <li key={feature}>
              {feature}
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}