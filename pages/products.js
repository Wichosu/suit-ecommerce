import ProductCard from "@/components/ProductCard"
import SortBy from "@/components/SortBy"
import Filter from "@/components/Filter"
import styles from "@/styles/products.module.scss"

//Dummy data
const products = [
  {img: 'https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Comfy Coat', desc: 'Your home at your office', price: '299'},
  {img: 'https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Elegant Coat', desc: 'You know you deserve it', price: '529'},
  {img: 'https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Elegant Suit', desc: 'For the perfect ocasion', price: '210'},
  {img: 'https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Cool Coat', desc: 'Stay cool at any moment', price: '100'},
  {img: 'https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Awesome Jacket', desc: 'Awsome jacket to get the everyones attention', price: '499'},
  {img: 'https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Cute Outfit', desc: 'Very cute outfit for winter', price: '999'}
]

export default function Products(){
  return (
    <>
      <div>
        {/**Path component, tells the user the current category and subcategory */}
        <div className={styles.grid}>
          <Filter />
          <SortBy />
        </div>
      </div>
      {products.map((product) => 
        <ProductCard
          key={product}
          img={product.img}
          name={product.name}
          desc={product.desc}
          price={product.price}
        />
      )}
    </>
  )
}