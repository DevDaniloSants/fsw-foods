import Image from "next/image";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

const Home = () => {
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
    </>
  );
};

export default Home;
