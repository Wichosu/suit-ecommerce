import ProductView from "@/components/ProductView"

//dummy data
const product = {
  img: 'https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  name: 'Comfy Coat',
  desc: 'Your home at your office',
  price: '299'
}

export default function Product(){
  return (
    <>
      <ProductView 
        img={product.img}
        name={product.name}
        desc={product.desc}
        price={product.price}
      />
    </>
  )
}