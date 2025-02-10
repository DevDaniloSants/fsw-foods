import Image from "next/image";
import { GetTopRestaurantsByOrderDto } from "../_data-acess/restaurant/get-top-restaurants-by-order";
import { HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { formatCurrency } from "../_helpers/formatCurrency";

interface RestaurantItemProps {
  restaurant: GetTopRestaurantsByOrderDto;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  return (
    <div className="w-[266px] min-w-[266px] space-y-3">
      <div className="relative h-[136px] w-full">
        <Image
          src={restaurant.imageUrl}
          alt={restaurant.name}
          sizes="100%"
          fill
          className="rounded-lg object-cover"
        />
        <Badge className="absolute left-2 top-2 space-x-1 bg-white px-2 py-1">
          <StarIcon size={12} className="fill-amber-400 text-amber-400" />
          <span className="text-gray-800">5.0</span>
        </Badge>
        <Button
          size={"icon"}
          className="absolute right-2 top-2 h-7 w-7 rounded-full bg-black/60"
        >
          <HeartIcon className="fill-white" />
        </Button>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold">{restaurant.name}</h3>
        <div className="flex items-center gap-4">
          <div className="flex gap-1">
            <Image
              src="delivery-icon.svg"
              alt="delivery"
              width={14}
              height={14}
            />
            {restaurant.deliveryFee === 0 ? (
              <span className="text-xs text-muted-foreground">
                Entrega Grátis
              </span>
            ) : (
              <span className="text-xs text-muted-foreground">
                {formatCurrency(restaurant.deliveryFee)}
              </span>
            )}
          </div>
          <div className="flex gap-1">
            <TimerIcon size={14} className="text-primary" />
            <span className="text-xs text-muted-foreground">
              {restaurant.deliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantItem;
