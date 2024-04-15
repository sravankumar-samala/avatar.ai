import { useEffect, useState } from "react";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import User from "./user";
import NavbarItems from "./navbarItems";

function Sidebar() {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  const toggleNavBar = () => setIsNavExpanded(!isNavExpanded);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setIsNavExpanded(false);
      } else setIsNavExpanded(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside
      className={`w-min relative  min-h-[100vh] flex flex-col justify-between bg-primaryBg text-primaryClr`}
    >
      <div
        className={`h-full relative z-20 overflow-hidden transition-all duration-200 ease-in ${
          isNavExpanded ? "translate-x-0" : "-translate-x-full"
        } ${
          isNavExpanded ? "w-60" : "w-0"
        } flex flex-col justify-between gap-3`}
      >
        <NavbarItems toggleNavBar={toggleNavBar} />
        <div className="flex justify-center items-center flex-1">Chats</div>
        <User sidebarUser={true} />
      </div>
      {!isNavExpanded && (
        <button
          type="button"
          className={`absolute top-7 left-1 transition-opacity ease-in-out z-10 ${
            isNavExpanded ? "opacity-0" : "opacity-100 duration-1000 delay-1000"
          } text-2xl text-secondary-hover hover:bg-primary-hover rounded-full p-1`}
          onClick={toggleNavBar}
        >
          <HiOutlineMenuAlt2 />
        </button>
      )}
    </aside>
  );
}

export default Sidebar;
