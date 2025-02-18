import { Product } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";
import { Badge } from "./ui/badge";

interface DiscountBadgeProps {
  product: Pick<Product, "discountPercentage">;
  className?: string;
}

const DiscountBadge = ({ product, className }: DiscountBadgeProps) => {
  return (
    <Badge className={`${className} gap-[2px] px-2 py-[2px]`}>
      <ArrowDownIcon size={12} />
      <span className="text-xs font-semibold">
        {product.discountPercentage} %
      </span>
    </Badge>
  );
};

export default DiscountBadge;
