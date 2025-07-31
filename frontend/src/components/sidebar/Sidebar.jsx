import { Conversations } from "./Conversations.jsx";
import { LogoutBtn } from "./LogoutBtn.jsx";
import { SearchInput } from "./SearchInput.jsx";

export const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 flex flex-col p-4">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutBtn />
    </div>
  );
};
