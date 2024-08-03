import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
      <Input
        className="text-base py-2 pl-8 pr-3 lg:pl-10 lg:pr-5 placeholder:text-base font-normal font-inter rounded-lg border border-muted-foreground focus:border-blue-500"
        placeholder="Search"
        inputMode="search"
      />
    </div>
  );
};

export default SearchBox;
