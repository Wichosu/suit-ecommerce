import Image from 'next/image';
import styles from '@/styles/product-card.module.scss'
import Link from 'next/link'
import { useSave } from '@/zustand/stores';

export default function ProductCard({ id, img, name, desc, price, slug}){
  const addItem = useSave((state) => state.addItem)
  const savedItems = useSave((state) => state.items)
  const removeItem = useSave((state) => state.removeItem)

  const handleSave = desc
  ? (item) => {
    const founded = savedItems.find((e) => e.id === item.id)
    if(!founded){
      addItem(item)
    }
  }
  : (item) => {
    removeItem(item.id)
  }

  const cutText = (text, maxLength) => {
    if(text.length > maxLength){
      return text.slice(0, maxLength) + '...';
    } else {
      return text;
    }
  }

  return (
    <div className={styles.container}>
      <Link href={`/product/${slug.current}`}>
        <img src={img} alt='' />
      </Link>
      <div className={styles.text}>
        <div>
          <Link 
            className={styles.link}
            href={`/product/${slug.current}`}
            style={desc ? null : {fontSize: '1rem'}}
          >
            {name}
          </Link>
          <Image
            className={styles.icon}
            src={'/save.svg'}
            width={20}
            height={20}
            alt=''
            onClick={() => handleSave(
              {
                id,
                img,
                name,
                desc,
                price
              }
            )}
          />
        </div>
        {desc
        ? <p className={styles.desc}>{cutText(desc, 150)}</p>
        : null
        }
        <p
          className={styles.price}
          style={desc? null: {fontSize: '1rem'}}
        >
          ${price}
        </p>
      </div>
    </div>
  )
}