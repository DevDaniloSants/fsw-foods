import { GetProductsDTO } from "../_data-acess/product/get-products-with-dicount-percentage";
import { formatCurrency } from "./formatCurrency";

export const calculateProductTotalPrice = (product: GetProductsDTO) => {
  if (product.discountPercentage === 0) {
    return product.price;
  }

  const discount = product.price * (product.discountPercentage / 100);

  const newPrice = product.price - discount;

  return formatCurrency(newPrice);
};
