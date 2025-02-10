import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";
import ProductList from "./_components/product-list";
import { Button } from "./_components/ui/button";
import { ChevronRight } from "lucide-react";
import { getProductsWithDiscountPercentage } from "./_data-acess/product/get-products-with-dicount-percentage";
import PromoBanner from "./_components/promo-banner";

const Home = async () => {
  const productsWithDiscountPercentage =
    await getProductsWithDiscountPercentage();
  return (
    <>
      <Header />
      <div className="space-y-6 px-5 pt-6">
        <Search />

        <CategoryList />

        <PromoBanner
          src={"/promo-banner-01.png"}
          alt="Até 30% de desconto em pizzas"
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
      <div className="px-5 pt-6">
        <PromoBanner
          src={"/promo-banner-02.png"}
          alt="A partir de R$17,90 em lanches"
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
