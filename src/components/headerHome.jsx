import { LuSearch } from "react-icons/lu";
import User from "./user";

function Header() {
  return (
    <div className="flex items-end justify-end md:justify-between mb-2">
      <div className="hidden md:flex flex-col gap-1 ">
        <h2 className="text-secondaryClr pl-2">Welcome back,</h2>
        <User />
      </div>
      <div className="flex items-center gap-3 py-3 px-5 rounded-full bg-primary-hover">
        <LuSearch className="text-lg text-secondaryClr" />
        <input
          type="search"
          className="flex-1 bg-transparent placeholder:text-secondaryClr outline-none"
          placeholder="Search for characters"
        />
      </div>
    </div>
  );
}

export default Header;
