import Image from 'next/image'
import styles from '@/styles/product-view.module.scss'
import { Fragment, useState, useRef, useEffect } from 'react'
import { useCart } from '@/zustand/stores'

const dummyInfo = {
  details: 'This is a very long and detailed description',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  features: ['First detail', 'Second important feature', 'third but not least', 'fourt is for luck'],
}

export default function ProductView({ img, name, desc, price}){
  const [open, setOpen] = useState(false)
  const [size, setSize] = useState(null)
  const addItem = useCart((state) => state.addItem)

  const handleButton = () => {
    if(size === null && !open){
      setOpen((prev) => !prev)
    } else {
      addItem({ img, name, desc, price })
    }
  }

  const openStyles = open
  ? null 
  : {top: '75%'} 

  const rotateOpen = open
  ? styles.rotateOpen
  : null

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img 
          src={img} 
          alt='' 
          className={styles.img}
        />
      </div>
      <div
        className={styles.info}
        style={openStyles}
      >
        <div
          className={`${styles.open} ${rotateOpen}`}
          onClick={() => setOpen((prev) => !prev)}
        />
        <div className={styles.price}>
          <p>{name}</p>
          <p>$ {price}</p>
        </div>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.buttons}>
          <img src='/save.svg' alt='' />
          <button onClick={handleButton}>
            {size === null
            ? 'select size'
            : 'add to shopping bag'}
          </button>
        </div>
        <div className={styles.accordions}>
          <Accordion name='Details & Care'>
            <p>{dummyInfo.details}</p>
          </Accordion>
          <Accordion
            name='Size & Fit' 
            preExpand={true}
          >
            <div className={styles.sizesInputs}>
              {dummyInfo.sizes.map((size) => 
                <Fragment key={size}>
                  <input
                    type='radio'
                    id={size}
                    name='size'
                    onClick={() => setSize(size)}
                  />
                  <label htmlFor={size}>{size}</label>
                </Fragment>
              )}
            </div>
          </Accordion>
          <Accordion name='Features'>
            <ul>
              {dummyInfo.features.map((feature) =>
                <li key={feature}>
                  {feature}
                </li>
              )}
            </ul>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

const Accordion = ({name, children, preExpand}) => {
  const [expand, setExpand] = useState(false)
  const panel = useRef(null)

  useEffect(() => {
    if(preExpand){
      setExpand(true)
    }
  }, [])

  const expandStyles = expand
  ? { maxHeight: `${panel.current.scrollHeight}px`} 
  : null 

  const highlightName = expand
  ? { color: 'black'}
  : null

  const rotateArrow = expand
  ? styles.rotateArrow
  : null

  return(
    <>
      <div
        className={`${styles.accordion} ${rotateArrow}`}
        onClick={() => setExpand((prev) => !prev)}
        style={highlightName}
      >
        {name}
      </div>
      <div
        ref={panel}
        style={expandStyles}
        className={styles.panel}
      >
        {children}
      </div>
    </>
  )
}