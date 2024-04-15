import PropTypes from "prop-types";

export default function DarkModeToggler({ toggleDarkMode }) {
  return (
    <>
      <input
        type="checkbox"
        id="check"
        className="hidden peer"
        onChange={toggleDarkMode}
      />
      <label
        htmlFor="check"
        className="inline-block peer-checked:bg-green-500 peer-checked:before:left-[calc(100%-22px)]
           fixed top-5 right-9 w-[50px] h-[26px] border-2 border-secondaryBg rounded-3xl bg-slate-200 cursor-pointer
           transition-all duration-500 before:absolute before:bg-slate-900 before:top-[1px]
           before:left-[2px] before:rounded-3xl before:w-[20px] before:h-[20px] before:transition-all before:duration-200"
      ></label>
    </>
  );
}
DarkModeToggler.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};
