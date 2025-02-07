import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductList from "./_components/product-list";
import { Button } from "./_components/ui/button";
import { ChevronRight } from "lucide-react";
import { getProductsWithDiscountPercentage } from "./_data-acess/product/get-products-with-dicount-percentage";

const Home = async () => {
  const productsWithDiscountPercentage =
    await getProductsWithDiscountPercentage();
  return (
    <>
      <Header />
      <div className="space-y-6 px-5 pt-6">
        <Search />

        <CategoryList />
      </div>
      <div className="pt-6">
        <Image
          src={"/promo-banner.png"}
          alt="promo banner"
          height={0}
          width={0}
          className="min-h-full w-full object-contain"
          sizes="100%"
          quality={100}
        />
      </div>
      <div className="pt-6">
        <div className="flex items-center justify-between px-5 pb-4">
          <h2 className="text-base font-semibold">Pedidos Recomendados</h2>
          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
          >
            Ver todos
            <ChevronRight />
          </Button>
        </div>
        <ProductList products={productsWithDiscountPercentage} />
      </div>
    </>
  );
};

export default Home;
