import ProductCard from "./ProductCard";
import { useSave } from "@/zustand/stores";
import styles from '@/styles/save.module.scss';

function Save(){
  const items = useSave((state) => state.items)
  return (
    <div className={styles.save}>
      <h4>saved items</h4>
      <div className={styles.container}>
        {items.map((item) =>
          <ProductCard
            key={item}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        )}
      </div>
    </div>
  )
}

export default Save;