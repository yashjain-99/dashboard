import { cn } from "@/lib/utils";

// type SidebarItemProps = {
//   item: SidebarFieldItem;
// };

export const SidebarItem = ({ item, isActive }) => {
  return (
    <div
      className={cn(
        "flex gap-2 w-full cursor-pointer items-center px-5 lg:px-4 py-3 lg:rounded-md lg:border border-transparent text-base font-semibold font-inter hover:bg-muted-foreground",
        {
          " border-l-4 border-blue-600 lg:bg-gradient-to-r lg:from-[#0179FE] lg:to-[#4893FF] lg:hover:from-[#0056D2] lg:hover:to-[#3678D2] lg:hover:border-[#0056D2]":
            isActive,
        }
      )}
    >
      <span className={`${isActive && "text-blue-600 lg:text-primary"}`}>
        {item.icon}
      </span>
      <span className="hidden lg:block">{item.label}</span>
    </div>
  );
};
