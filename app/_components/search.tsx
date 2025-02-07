import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex items-center gap-2">
      <Input
        className="border-none bg-[#f4f4f5] text-sm"
        placeholder="Buscar restaurantes"
      />
      <Button size={"icon"}>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
