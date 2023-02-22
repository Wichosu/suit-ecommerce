import styles from '@/styles/filter.module.scss'
import { useFilter } from '@/zustand/stores'
import { useState, useRef } from 'react'
const sizes = ['XS', 'S', 'M', 'L', 'XL']
const colors = ['Blue', 'Magenta', 'Red', 'Yellow', 'Brown',
  'Black', 'Orange', 'Teal', 'Cyan']
const materials = ['Cotton', 'X', 'Y', 'Cow']
const models = ['A', 'B', 'C', 'D', 'E']
const filters = [
  {name: 'Size', options: sizes},
  {name: 'Color', options: colors},
  {name: 'Material', options: materials},
  {name: 'Model', options: models}
]

export default function Filter(){
  const filter = useFilter((state) => state.filter)
  const hideFilter = useFilter((state) => state.hideFilter)

  const display = filter
  ? {}
  : { display: 'none'}

  return (
    <div className={styles.filter} style={display}>
      <div className={styles.close} onClick={hideFilter} />
      <p>Filter</p>
      <div className={styles.container}>
        {filters.map((filter) => 
          <Accordion 
            name={filter.name} 
            options={filter.options} 
          />
        )}
      </div>
    </div>
  )
}

const Accordion = ({name, options}) => {
  const [expand, setExpand] = useState(false)
  const panel = useRef(null)

  const open = expand
  ? { maxHeight: `${panel.current.scrollHeight}px`, margin: '1rem 0'}
  : {}
  
  const rotate = expand
  ? `${styles.accordion} ${styles.active}`
  : `${styles.accordion}`

  return (
    <>
      <button 
        className={rotate}
        onClick={() => setExpand((prev) => !prev)}
      >
        {name}
      </button>
      <div className={styles.panel} style={open} ref={panel}>
        {options.map((option) =>
          <button>{option}</button>
        )}
      </div>
    </>
  )
}