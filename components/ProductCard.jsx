import Image from 'next/image';
import styles from '@/styles/product-card.module.scss'
import Link from 'next/link'
import { useSave } from '@/zustand/stores';

export default function ProductCard({ img, name, desc, price}){
  const addItem = useSave((state) => state.addItem)

  return (
    <div className={styles.container}>
      <Link href='/product/id'>
        <img src={img} alt='' />
      </Link>
      <div className={styles.text}>
        <div>
          <Link className={styles.link} href='/product/id'>
            {name}
          </Link>
          <Image
            className={styles.image}
            src={'/save.svg'}
            width={20}
            height={20}
            alt=''
            onClick={() => addItem(
              {
                img,
                name,
                desc,
                price
              }
            )}
          />
        </div>
        <p className={styles.desc}>{desc}</p>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  )
}