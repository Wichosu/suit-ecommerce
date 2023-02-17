import styles from '@/styles/sort-by.module.scss';
import { useSortBy } from '@/zustand/stores';

export default function SortBy(){
  const hideSortBy = useSortBy((state) => state.hideSortBy)

  return (
    <div className={styles.sortBy}>
      <img
        src=''
        alt=''
      />
      <p>Sort By</p>
      <div className={styles.options}>
        <div >
          <input
            type='radio'
            id='featured'
            value='featured'
            name='sort' 
            onClick={hideSortBy}
          />
          <label htmlFor='featured'>Featured</label>
        </div>
        <div>
          <input
            type='radio'
            id='newest'
            value='newest'
            name='sort'
            onClick={hideSortBy}
          />
          <label htmlFor='newest'>Newest</label>
        </div>
        <div>
          <input
            type='radio'
            id='most-popular'
            value='most-popular'
            name='sort'
            onClick={hideSortBy}
          />
          <label htmlFor='most-popular'>Most Popular</label>
        </div>
        <div>
          <input
            type='radio' 
            id='price-high-low'
            value='price-high-low'
            name='sort'
            onClick={hideSortBy}
          />
          <label htmlFor='price-high-low'>Price High-low</label>
        </div>
        <div>
          <input
            type='radio'
            id='price-low-high'
            value='price-low-high'
            name='sort'
            onClick={hideSortBy}
          />
          <label htmlFor='price-low-high'>Price Low-High</label>
        </div>
      </div>
    </div>
  )
}