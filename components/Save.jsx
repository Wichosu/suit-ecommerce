import ProductCard from "./ProductCard";

function Save(){
  return (
    <div>
      <h4>saved items</h4>
      <div>
        {items.map((item) =>
          <ProductCard
            key={item}
            desc={item.desc}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        )}
      </div>
    </div>
  )
}

export default Save;