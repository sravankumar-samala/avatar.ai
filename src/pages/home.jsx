import Header from "../components/headerHome";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import AiSuggestions from "../components/aiSuggestions";
import TryRecommendingAi from "../components/tryRecommendingAi";

function Home() {
  return (
    <div className="overflow-hidden w-full flex flex-col gap-7 max-w-7xl mx-auto">
      <Header />
      <AiSuggestions />
      <TryRecommendingAi />
    </div>
  );
}

export default Home;
