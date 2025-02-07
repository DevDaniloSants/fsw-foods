"use server";

import { db } from "@/app/_lib/prisma";
import { Product } from "@prisma/client";

export interface GetProductsWithDiscountPercentageDTO
  extends Omit<Product, "price"> {
  price: number;
  restaurant: {
    name: string;
  };
}

export const getProductsWithDiscountPercentage = async (): Promise<
  GetProductsWithDiscountPercentageDTO[]
> => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
    take: 10,
  });

  return products.map((product) => ({
    ...product,
    price: Number(product.price),
  }));
};
