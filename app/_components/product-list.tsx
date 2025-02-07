import { GetProductsDTO } from "../_data-acess/product/get-products-with-dicount-percentage";
import ProductItem from "./product-item";

interface ProductListProps {
  products: GetProductsDTO[];
}

const ProductList = ({ products }: ProductListProps) => {
  if (!products) return null;

  return (
    <div className="flex gap-4 overflow-x-auto px-5">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
