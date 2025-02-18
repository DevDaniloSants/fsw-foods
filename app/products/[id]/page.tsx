import { getProduct } from "@/app/_data-acess/product/get-product";

import { notFound } from "next/navigation";
import ProductImage from "./_components/product-image";
import ProductDetails from "./_components/product-details";
import { getProductsByRestaurantAndCategory } from "@/app/_data-acess/product/get-products-by-restaurant-and-category";

const ProductsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  if (!id) return notFound();

  const product = await getProduct(id);
  const complementaryProducts = await getProductsByRestaurantAndCategory({
    restaurantId: product.restaurantId,
    categoryId: product.categoryId,
  });

  return (
    <div>
      <ProductImage product={product} />
      <ProductDetails
        product={product}
        complementaryProducts={complementaryProducts}
      />
    </div>
  );
};

export default ProductsPage;
