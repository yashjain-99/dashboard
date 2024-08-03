import BrandHeader from "./BrandHeader";
import { SIDEBAR_FIELDS } from "@/lib/constants";
import { SidebarItem } from "./SidebarItem";

const Sidebar = () => {
  return (
    <aside className=" bg-primary-foreground min-h-screen h-full lg:w-64 flex flex-col gap-6 pt-8">
      <header className="px-5">
        <BrandHeader />
      </header>
      <nav className="flex flex-col gap-1 self-center lg:self-start">
        {SIDEBAR_FIELDS.map((item, index) => {
          return (
            <SidebarItem key={item.label} item={item} isActive={index == 0} />
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
