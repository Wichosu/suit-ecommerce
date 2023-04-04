import ProductView from "@/components/ProductView"
import groq from "groq"
import client from "@/lib/client"
import imageUrlBuilder from '@sanity/image-url'

function urlFor(source){
  return imageUrlBuilder(client).image(source)
}

//dummy data
const product = {
  id: 0,
  img: 'https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  name: 'Comfy Coat',
  desc: 'Your home at your office',
  price: '299'
}

export default function Product({product}){
  const {
    name,
    desc,
    img,
    price
  } = product
  return (
    <>
      <ProductView 
        img={urlFor(img)}
        name={name}
        desc={desc}
        price={price}
      />
    </>
  )
}

export async function getStaticPaths(){
  const paths = await client.fetch(
    groq`*[_type == "product" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true
  }
}

export async function getStaticProps(context){
  const { slug = "" } = context.params
  const query = groq`*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    img,
    desc,
    price,
    "sizes": sizes[]->name,
    "colors": colors[]->name,
    "categories": categories[]->name,
    "materials": materials[]->name,
    "designer": designer[]->name
  }`

  const product = await client.fetch(query, { slug })

  return {
    props: {
      product
    }
  }
}