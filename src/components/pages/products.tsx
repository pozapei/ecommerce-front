import ProductInterface from "../interface/products-interface";
import fleece from "../../../public/fleece.jpeg";
import { Button } from "../ui/button";

export default async function Products() {
  let data = await fetch("http://localhost:3000/products");
  let products: ProductInterface[] = await data.json();
  let image = fleece;

  return (
    <div>
      <div className="grid grid-cols-3 p-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="m-1 bg-white text-black flex place-content-between gap-2 rounded-sm p-2 "
          >
            <img src={image.src} alt={product.name} />
            <div className="p-2">
              <h1 className="font-bold text-3xl ">{product.name}</h1>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
            <Button className="place-self-end">Buy Now</Button>
          </div>  
        ))}
      </div>
    </div>
  );
}
