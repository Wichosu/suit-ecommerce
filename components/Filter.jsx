import styles from '@/styles/filter.module.scss'
import { useFilter } from '@/zustand/stores'
import { useState, useRef, useEffect } from 'react'
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
  : { transform: 'translateX(-100%)'}

  return (
    <div className={styles.filter} style={display}>
      <div className={styles.close} onClick={hideFilter} />
      <p>Filter</p>
      <div className={styles.container}>
        {filters.map((filter) => 
          <Accordion 
            key={filter.name}
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
  const [filters, setFilters] = useState([])
  const panel = useRef(null)
  const addFilter = useFilter((state) => state.addFilter)
  const removeFilter = useFilter((state) => state.removeFilter)

  const open = expand
  ? { maxHeight: `${panel.current.scrollHeight}px`, margin: '1rem 0'}
  : {}
  
  const rotate = expand
  ? styles.active
  : '' 

  const handleFilter = (option) => {
    if(filters.includes(option)){
      setFilters((prev) => prev.filter((e) => e !== option))
      removeFilter()
    } else {
      setFilters((prev) => [...prev, option])
      addFilter()
    }
  }

  return (
    <>
      <button 
        className={rotate}
        onClick={() => setExpand((prev) => !prev)}
      >
        {name}
        {filters.length > 0
        ? <span>{filters.length}</span>
        : '' 
        }
      </button>
      <div className={styles.panel} style={open} ref={panel}>
        {options.map((option) =>
          <>
            <input 
              type='checkbox' 
              id={option} 
              onClick={() => handleFilter(option)} 
            />
            <label htmlFor={option}>{option}</label>
          </>
        )}
      </div>
    </>
  )
}