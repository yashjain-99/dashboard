import { Bell, Mail, Settings } from "lucide-react";
import SearchBox from "./SearchBox";
import ActionContainer from "./ActionContainer";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <header className=" bg-primary-foreground w-full flex flex-row gap-6 py-8 justify-between">
      <SearchBox />
      <div className="mr-8 flex flex-row gap-1">
        <ActionContainer shouldShowNotification={true}>
          <Mail className="w-4 h-4" />
        </ActionContainer>
        <ActionContainer>
          <Settings className="w-4 h-4" />
        </ActionContainer>
        <ActionContainer>
          <Bell className="w-4 h-4" />
        </ActionContainer>
        <ActionContainer>
          <Avatar />
        </ActionContainer>
      </div>
    </header>
  );
};

export default Header;
