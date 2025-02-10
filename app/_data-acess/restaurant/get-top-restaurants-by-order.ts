"use server";

import { db } from "@/app/_lib/prisma";
import { Restaurant } from "@prisma/client";

export interface GetTopRestaurantsByOrderDto
  extends Omit<Restaurant, "deliveryFee"> {
  deliveryFee: number;
}

export const getTopRestaurantsByOrders = async (): Promise<
  GetTopRestaurantsByOrderDto[]
> => {
  const restaurant = await db.restaurant.findMany({ take: 10 });
  return restaurant.map((restaurant) => ({
    ...restaurant,
    deliveryFee: Number(restaurant.deliveryFee),
  }));
};
