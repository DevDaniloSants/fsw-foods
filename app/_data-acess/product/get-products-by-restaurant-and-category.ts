import { db } from "@/app/_lib/prisma";
import { GetProductDTO } from "./get-product";

interface GetProductsByRestaurantAndCategory {
  restaurantId: string;
  categoryId: string;
}

export const getProductsByRestaurantAndCategory = async ({
  restaurantId,
  categoryId,
}: GetProductsByRestaurantAndCategory): Promise<GetProductDTO[]> => {
  const products = await db.product.findMany({
    where: {
      restaurantId,
      categoryId,
    },
    include: {
      restaurant: true,
      category: true,
    },
  });
  return products.map((product) => ({
    ...product,
    price: Number(product.price),
    restaurant: {
      ...product.restaurant,
      deliveryFee: Number(product.restaurant.deliveryFee),
    },
  }));
};
