import Image from 'next/image';

export default function ProductCard({ img, name, desc, price}){
  return (
    <div>
      <img src={img} alt='' />
      <div>
        <p>{name}</p>
        <Image src={'/save.svg'} width={5} height={5} alt=''  />
      </div>
      <p>{desc}</p>
      <p>${price}</p>
    </div>
  )
}