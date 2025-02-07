import { getProductsWithDiscountPercentage } from "../_data-acess/product/get-products-with-dicount-percentage";
import ProductItem from "./product-item";

const ProductList = async () => {
  const products = await getProductsWithDiscountPercentage();
  return (
    <div className="flex gap-4 overflow-x-auto px-5">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
