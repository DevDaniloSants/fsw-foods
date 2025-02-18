"use server";

import { db } from "@/app/_lib/prisma";

import { GetProductWithRestaurant } from "./types/product-types";

export interface GetProductDTO
  extends Omit<GetProductWithRestaurant, "price" | "restaurant"> {
  price: number;
  restaurant: Omit<GetProductWithRestaurant["restaurant"], "deliveryFee"> & {
    deliveryFee: number;
  };
}

export const getProduct = async (id: string): Promise<GetProductDTO> => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: true,
      category: true,
    },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  return {
    ...product,
    price: Number(product.price),
    restaurant: {
      ...product.restaurant,
      deliveryFee: Number(product.restaurant.deliveryFee),
    },
  };
};
