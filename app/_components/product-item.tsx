import Image from "next/image";

import { formatCurrency } from "../_helpers/formatCurrency";
import { calculateProductTotalPrice } from "../_helpers/price";

import { GetProductsDTO } from "../_data-acess/product/get-products-with-dicount-percentage";
import Link from "next/link";
import DiscountBadge from "./discount-badge";

interface ProductItemProps {
  product: GetProductsDTO;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link className="min-w-[150px]" href={`/products/${product.id}`}>
      <div className="space-y-2">
        <div className="relative h-[150px] w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="rounded-lg object-cover"
          />
          {product.discountPercentage > 0 && (
            <DiscountBadge
              product={product}
              className="absolute left-2 top-2"
            />
          )}
        </div>
        <div>
          <h2 className="w-full truncate text-sm">{product.name}</h2>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold">
              {calculateProductTotalPrice(product)}
            </h3>
            {product.discountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {formatCurrency(product.price)}
              </span>
            )}
          </div>
          <span className="block text-xs text-muted-foreground">
            {product.restaurant.name}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
