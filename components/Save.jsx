import ProductCard from "./ProductCard";
import { useSave } from "@/zustand/stores";
import styles from '@/styles/save.module.scss';

function Save(){
  const items = useSave((state) => state.items)
  const save = useSave((state) => state.save)

  const slideSave = save
  ? { transform: 'translateX(0%)'}
  : { transform: 'translateX(100%)'}
  
  console.log(save)

  return (
    <div className={styles.save} style={slideSave}>
      <p className={styles.title}>saved items</p>
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