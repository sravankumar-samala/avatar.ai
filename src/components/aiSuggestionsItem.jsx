import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { TbMessageCircle2 } from "react-icons/tb";

export default function AiSuggestionsItem({ data }) {
  const { imageSrc, name, creator, description, usersCount } = data;

  return (
    <Link
      to="/create-new"
      className="p-4 min-w-80 max-w-[316px] flex gap-3 rounded-lg bg-primary-hover hover:bg-accent-hover"
    >
      <span
        style={{ backgroundImage: `url('/${imageSrc}')` }}
        className={`w-24 h-32 bg-cover bg-center rounded-xl`}
      ></span>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <p className="font-medium">{name}</p>
          <p className="text-sm text-secondaryClr">{`By ${creator}`}</p>
          <p className="text-sm mt-1">{description}</p>
        </div>

        <span className="flex items-center gap-1 text-sm text-secondaryClr">
          <TbMessageCircle2 />
          {`${usersCount}m`}
        </span>
      </div>
    </Link>
  );
}

AiSuggestionsItem.propTypes = {
  data: PropTypes.object.isRequired,
};
