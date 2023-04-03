import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/index.module.scss'
import Category from '@/components/Category'
import JournalEntry from '@/components/JournalEntry'
import groq from 'groq'
import client from '@/lib/client'
import imageUrlBuilder from '@sanity/image-url'

function urlFor(source){
  return imageUrlBuilder(client).image(source)
}

//Dummy categories
const hero = `https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`

//Dummy Entries for Journal
const entries = [
  {title: 'Aquatic outfit', desc: 'This is an aquatic demo outfit, very cheap and short', img:'https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {title: 'Elegant outfit', desc: 'Elegant demo for elegant outfit, extremely popular with the ladies', img:'https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {title: 'Sports outfit', desc: 'This is an exotic demo for a sports outfit, it\' a very pretty and exotic suit you must get it while you still can', img:'https://images.pexels.com/photos/9771810/pexels-photo-9771810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
]

export default function Home({categories}) {
  console.log(categories)
  return (
    <>
      <Head>
        <title>Suit Ecommerce</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.hero}>
        <span>New Season <br />Arrivals</span>
        <button>
          <Link className={styles.linkHero} href='/products'>
            Shop Now
          </Link>
        </button>
      </div>
      <div className={styles.categoryContainer}>
        {categories.map(({_id, name, img}) => 
          <Category 
            key={_id} 
            img={urlFor(img)} 
            name={name} 
          />
        )}
      </div>
      <div className={styles.journalContainer}>
        <h2 className={styles.journal}>The Journal</h2>
        {entries.map((entry) => 
          <JournalEntry
            key={JSON.stringify(entry)}
            title={entry.title}
            desc={entry.desc}
            img={entry.img}
          />
        )}
        <hr />
      </div>
      <div className={styles.discover}>
        <h2>Georgia Finest<br/>Fabric Weavers</h2>
        <span>Build Our Fabrics</span>
        <button>Discover</button>
      </div>
    </>
  )
}

export async function getStaticProps(){
  const query = groq`*[_type == "category"]{
    _id,
    name,
    img
  }`

  let categories = await client.fetch(query) 

  return {
    props: {
      categories
    }
  }
}