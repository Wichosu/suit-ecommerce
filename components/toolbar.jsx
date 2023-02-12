import Filter from "./Filter"
import SortBy from "./SortBy"
import styles from "@/styles/toolbar.module.scss"

export default function Toolbar(){
  return (
      <div className={styles.toolbar}>
        {/**Path component, tells the user the current category and subcategory */}
        <div>
          <Filter />
          <SortBy />
        </div>
      </div>
  )
}