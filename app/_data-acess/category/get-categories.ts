"use server";

import { db } from "@/app/_lib/prisma";

export const getCategories = async () => {
  return await db.category.findMany({});
};
