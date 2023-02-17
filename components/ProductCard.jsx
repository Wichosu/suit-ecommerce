import Image from 'next/image';
import styles from '@/styles/product-card.module.scss'
import Link from 'next/link'
import { useSortBy } from '@/zustand/stores';

export default function ProductCard({ img, name, desc, price}){
  const sortBy = useSortBy((state) => state.sortBy)

  const hideScroll = sortBy
  ? { display: 'none'}
  : { display: 'block'}

  return (
    <div className={styles.container} style={hideScroll}>
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