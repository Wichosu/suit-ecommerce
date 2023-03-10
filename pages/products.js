import ProductCard from "@/components/ProductCard"
import SortBy from "@/components/SortBy"
import Filter from "@/components/Filter"

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
      {products.map((product) => 
        <ProductCard
          key={JSON.stringify(product)}
          img={product.img}
          name={product.name}
          desc={product.desc}
          price={product.price}
        />
      )}
      <SortBy />
      <Filter />
    </>
  )
}