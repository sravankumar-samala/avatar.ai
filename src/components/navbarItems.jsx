import { RxDoubleArrowLeft } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { FaCompass } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function NavbarItems({ toggleNavBar }) {
  return (
    <div className="flex flex-col gap-5 px-5 pt-7">
      <div className="hell flex justify-between items-center">
        <Link to="/" className="pl-1 font-semibold text-lg">
          avatar.ai
        </Link>
        <button
          type="button"
          className="p-2 text-xl hover:bg-primary-hover rounded-full"
          onClick={toggleNavBar}
        >
          <RxDoubleArrowLeft className="text-secondary-hover" />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <NavLink
          to="/create-new"
          className="py-2 px-5 bg-secondaryBg hover:bg-primary-hover rounded-3xl border-2 border-primary-b w-fit flex items-center gap-2"
        >
          <FaPlus className="text-xl" /> Create
        </NavLink>
        <NavLink
          to="/"
          className="py-3 px-5 flex gap-3 items-center border-[1px] border-primary-b  hover:bg-secondaryBg rounded-lg"
        >
          <FaCompass className="text-xl" /> Discover
        </NavLink>
      </div>
    </div>
  );
}

NavbarItems.propTypes = {
  toggleNavBar: PropTypes.func.isRequired,
};

export default NavbarItems;
