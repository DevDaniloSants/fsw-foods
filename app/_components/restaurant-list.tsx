import { getTopRestaurantsByOrders } from "../_data-acess/restaurant/get-top-restaurants-by-order";
import RestaurantItem from "./restaurant-item";

const RestaurantList = async () => {
  const restaurants = await getTopRestaurantsByOrders();
  if (!restaurants) return null;

  return (
    <div className="flex gap-4 overflow-x-auto px-5">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
