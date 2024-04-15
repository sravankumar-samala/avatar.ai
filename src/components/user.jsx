import PropTypes from "prop-types";
import { HiOutlineChevronDown } from "react-icons/hi";

function User({ sidebarUser }) {
  return (
    <div
      className={`${
        sidebarUser &&
        "mx-5 mb-3 hover:bg-primary-hover border-2 border-primary-hover"
      } p-2  flex items-center justify-between rounded-lg `}
    >
      <div className="flex gap-2 items-center">
        <div
          className={`${
            sidebarUser ? "h-10 w-10 font-bold" : "h-6 w-6 font-medium text-sm"
          } rounded-full bg-gradient-to-br from-[#959595] to-[#000000] grid place-items-center text-white`}
        >
          U
        </div>
        <p className={`${sidebarUser ? "text-sm" : "text-xl"}`}>UserName</p>
      </div>
      {sidebarUser && (
        <button type="button">
          <HiOutlineChevronDown className="text-xl" />
        </button>
      )}
    </div>
  );
}

User.propTypes = {
  sidebarUser: PropTypes.bool,
};

export default User;
