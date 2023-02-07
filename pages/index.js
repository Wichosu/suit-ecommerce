import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Suit Ecommerce</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>{/*Hero container */}
        <span>New Season Arrivals</span>
        <button></button>
      </div>
      <div>
        {/*Card component for index */}
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
