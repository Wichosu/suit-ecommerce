import Image from 'next/image'

export default function Navbar(){
  return (
    <div>
      <Image src='/menu.svg' height={20} width={20} />
      <span><b>A</b>.DESIGN</span>
      <div>
        <Image src='/person.svg' height={25} width={25} />
        <Image src='/save.svg' height={25} width={25} />
        <Image src='/portfolio.svg' height={25} width={25} />
      </div>
    </div>
  )
}