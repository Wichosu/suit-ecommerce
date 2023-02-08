import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/index.module.scss'
import Category from '@/components/Category'

//Dummy images
const hero = `https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`
const categories = [
  {img: 'https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'T-shirts'},
  {img: 'https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Knit'},
  {img: 'https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', name: 'Suit'}
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Suit Ecommerce</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.hero}>{/*Hero container */}
        <span>New Season <br />Arrivals</span>
        <button>
          <Link className={styles.linkHero} href=''>
            Shop Now
          </Link>
        </button>
      </div>
      <div className={styles.categoryContainer}>
        {categories.map((category) => 
          <Category 
            key={category} 
            img={category.img} 
            name={category.name} 
          />
        )}
      </div>
      <div>
        <span>The Journal</span>
        {/*Journal component, make sure they only have hr on top */}
        <hr />
      </div>
      <div>
        <h2>Georgia Finest Fabric Weavers</h2>
        <span>Build Our Fabrics</span>
        <button>Discover</button>
      </div>
    </>
  )
}
