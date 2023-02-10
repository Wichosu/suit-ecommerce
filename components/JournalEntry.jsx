import styles from '@/styles/journal-entry.module.scss'
import Image from 'next/image'

export default function JournalEntry({ title, desc, img}){
  return (
    <>
      <hr />
      <div className={styles.entry}>
        <div>
          <span>{title}</span>
          <p>{desc}</p>
        </div>
        <img src={img} alt='' />
      </div>
    </>
  )
}