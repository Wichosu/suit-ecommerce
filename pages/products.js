import ProductCard from "@/components/ProductCard"
import SortBy from "@/components/SortBy"
import Filter from "@/components/Filter"
import styles from '@/styles/products.module.scss'
import groq from "groq"
import client from "@/lib/client"
import imageUrlBuilder from '@sanity/image-url'

function urlFor(source){
  return imageUrlBuilder(client).image(source)
}

export default function Products({products}){

  return (
    <>
      <div className={styles.products}>
        {products.map(({_id, img, name, desc, price, slug}) => 
          <ProductCard
            key={_id}
            id={_id}
            img={urlFor(img)}
            name={name}
            desc={desc}
            price={price}
            slug={slug}
          />
        )}
      </div>
      <SortBy />
      <Filter />
    </>
  )
}

export async function getStaticProps(){
  const query = groq`*[_type == "product"]{
    _id,
    name,
    slug,
    desc,
    img,
    price
  }`

  let products = await client.fetch(query)

  return {
    props: {
      products
    }
  }
}