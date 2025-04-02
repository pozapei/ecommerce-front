
export default async function Products() {
  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
  }
  let data = await fetch("http://localhost:3000/products");
  let products: Product = await data.json();



  return (
    <div>
    </div>
  );
}
