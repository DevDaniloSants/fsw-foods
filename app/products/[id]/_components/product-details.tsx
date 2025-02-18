"use client";

import DiscountBadge from "@/app/_components/discount-badge";
import ProductList from "@/app/_components/product-list";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";
import { GetProductDTO } from "@/app/_data-acess/product/get-product";

import { formatCurrency } from "@/app/_helpers/formatCurrency";
import { calculateProductTotalPrice } from "@/app/_helpers/price";
import {
  BikeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TimerIcon,
} from "lucide-react";

import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  product: GetProductDTO;
  complementaryProducts: GetProductDTO[];
}

const ProductDetails = ({
  product,
  complementaryProducts,
}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () =>
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));

  const handleIncreaseQuantity = () => setQuantity((prev) => prev + 1);

  return (
    <div className="relative z-50 mt-[-16px] rounded-t-3xl bg-white">
      <div className="p-5">
        <div className="flex items-center gap-1">
          <div className="relative h-5 w-5">
            <Image
              src={product.restaurant.imageUrl}
              alt={product.restaurant.name}
              fill
              sizes="100%"
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-xs text-muted-foreground">
            {product.restaurant.name}
          </span>
        </div>
        <h1 className="mb-3 text-xl font-semibold">{product.name}</h1>
        <div className="flex justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">
                {calculateProductTotalPrice(product)}
              </h3>
              <DiscountBadge product={product} className="flex items-center" />
            </div>
            <span className="text-sm text-muted-foreground">
              De: {formatCurrency(product.price)}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              className="border border-gray-200 bg-white text-secondary-foreground hover:text-white"
              onClick={handleDecreaseQuantity}
            >
              <ChevronLeftIcon />
            </Button>
            <span className="w-7 text-center">{quantity}</span>
            <Button
              size="icon"
              className="border border-gray-200 bg-white text-secondary-foreground hover:text-white"
              onClick={handleIncreaseQuantity}
            >
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
        <Card className="mt-6">
          <div>
            <div className="flex justify-around py-3">
              <div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <span className="font-thin">Entrega</span>
                  <BikeIcon size={16} />
                </div>
                <h4 className="text-center text-sm font-semibold">
                  {product.restaurant.deliveryFee > 0
                    ? `${product.restaurant.deliveryFee} min`
                    : "Grátis"}
                </h4>
              </div>
              <div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <span className="font-thin">Entrega</span>
                  <TimerIcon size={16} />
                </div>
                <h4 className="text-center text-sm font-semibold">
                  {product.restaurant.deliveryTimeMinutes} min
                </h4>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-6 space-y-3">
          <h3 className="font-semibold">Sobre</h3>
          <p className="text-sm text-muted-foreground">{product.description}</p>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        <h3 className="px-5 font-semibold">{product.category.name}</h3>
        <ProductList products={complementaryProducts} />
      </div>
    </div>
  );
};

export default ProductDetails;
