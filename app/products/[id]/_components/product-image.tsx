"use client";

import { Button } from "@/app/_components/ui/button";
import { GetProductsDTO } from "@/app/_data-acess/product/get-products-with-dicount-percentage";

import { ChevronLeftIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductImageProps {
  product: Pick<GetProductsDTO, "imageUrl" | "name">;
}

const ProductImage = ({ product }: ProductImageProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="relative h-[360px] w-full">
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-cover"
        priority
      />
      <Button
        className="absolute left-4 top-4 rounded-full bg-gray-100 text-secondary-foreground hover:text-white"
        size={"icon"}
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
    </div>
  );
};
export default ProductImage;
