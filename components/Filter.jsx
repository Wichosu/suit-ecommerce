import styles from '@/styles/filter.module.scss';

export default function Filter(){
  return (
    <button className={styles.filter}>
      Filter
      <span>
        1
      </span>
    </button>
  )
}