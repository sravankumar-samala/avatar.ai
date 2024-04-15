import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import aiSuggestionsData from "../data/aiSuggestionsData";
import AiSuggestionsItem from "./aiSuggestionsItem";
import SwiperNavigations from "./swiperNavigations";

function AiSuggestions() {
  return (
    <div className="w-full group">
      <h2 className="mb-3 font-medium">For you</h2>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={"auto"}
      >
        {aiSuggestionsData?.map((each) => (
          <SwiperSlide key={each.id}>
            <AiSuggestionsItem data={each} />
          </SwiperSlide>
        ))}

        <SwiperNavigations />
      </Swiper>
    </div>
  );
}

export default AiSuggestions;
