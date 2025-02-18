import { Prisma } from "@prisma/client";

export type GetProductWithRestaurant = Prisma.ProductGetPayload<{
  include: {
    restaurant: true;
    category: true;
  };
}>;
