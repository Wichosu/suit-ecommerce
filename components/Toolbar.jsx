import styles from "@/styles/toolbar.module.scss"
import { useSortBy } from "@/zustand/stores"
import { useFilter } from "@/zustand/stores"

export default function Toolbar(){
  const showSortBy = useSortBy((state) => state.showSortBy)
  const showFilter = useFilter((state) => state.showFilter)

  return (
      <div className={styles.toolbar}>
        {/**Path component, tells the user the current category and subcategory */}
        <div>
          <button
            className={styles.filter}
            onClick={showFilter}
          >
            Filter
            <span>
              1
            </span>
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