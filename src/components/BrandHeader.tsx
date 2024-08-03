import { PiggyBank } from "lucide-react";

const BrandHeader = () => {
  return (
    <div className="cursor-pointer flex items-center gap-1">
      <PiggyBank className="w-8 h-8 fill-blue-500" />
      <h1 className=" text-2xl font-bold font-ibm-plex-serif hidden lg:block">
        Trader
      </h1>
    </div>
  );
};

export default BrandHeader;
