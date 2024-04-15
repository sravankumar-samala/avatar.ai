import { Link } from "react-router-dom";

function TryRecommendingAiItem() {
  return (
    <Link
      to="/create-new"
      className="p-4 min-w-[21rem] max-w-[316px] flex gap-3 rounded-lg bg-primary-hover hover:bg-accent-hover"
    >
      <div className="w-16 h-16">
        <img
          className="max-w-full rounded-full"
          src="/try-ai.png"
          alt="try ai"
        />
      </div>
      <div className="">
        <p>title</p>
        <p>Description</p>
      </div>
    </Link>
  );
}

export default TryRecommendingAiItem;
