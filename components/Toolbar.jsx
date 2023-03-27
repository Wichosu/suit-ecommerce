import styles from "@/styles/toolbar.module.scss"
import { useSortBy } from "@/zustand/stores"
import { useFilter } from "@/zustand/stores"

export default function Toolbar(){
  const showSortBy = useSortBy((state) => state.showSortBy)
  const showFilter = useFilter((state) => state.showFilter)
  const filters = useFilter((state) => state.filters)

  return (
      <div className={styles.toolbar}>
        {/**Path component, tells the user the current category and subcategory */}
        <div>
          <button
            className={styles.filter}
            onClick={showFilter}
          >
            Filter
            {filters > 0
            ? <span>{filters}</span>
            : ''
            }
          </button>
          <button
            className={styles.sort}
            onClick={showSortBy}
          >
            Sort By
          </button>
        </div>
      </div>
  )
}