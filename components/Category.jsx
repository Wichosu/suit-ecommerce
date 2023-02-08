import Link from 'next/link'
import styles from '@/styles/category.module.scss'

export default function Category({img, name}){
  return (
    <div className={styles.category}>
      <img src={img} />
      <Link className={styles.link} href=''>{name}</Link>
    </div>
  )
}