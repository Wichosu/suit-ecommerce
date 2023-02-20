import Image from 'next/image';
import styles from '@/styles/product-card.module.scss'
import Link from 'next/link'

export default function ProductCard({ img, name, desc, price}){

  return (
    <div className={styles.container}>
      <Link href="">
        <img src={img} alt='' />
      </Link>
      <div className={styles.text}>
        <div>
          <Link className={styles.link} href="">
            {name}
          </Link>
          <Image className={styles.image} src={'/save.svg'} width={20} height={20} alt=''  />
        </div>
        <p className={styles.desc}>{desc}</p>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  )
}