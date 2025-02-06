import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import Search from "./_components/search";

const Home = () => {
  return (
    <div className="space-y-6 px-5">
      <Header />

      <Search />

      <CategoryList />
    </div>
  );
};

export default Home;
