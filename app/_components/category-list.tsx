import { getCategories } from "../_data-acess/category/get-categories";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  const categories = await getCategories();

  return (
    <div className="flex gap-3 overflow-x-scroll">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
