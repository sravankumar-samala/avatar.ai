import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import SwiperNavigations from "./swiperNavigations";
import TryRecommendingAiItem from "./tryRecommendingAiItem";

function TryRecommendingAi() {
  return (
    <div className="w-full group">
      <h2 className="mb-3 font-medium">Try these</h2>
      <Swiper
        navigation={true}
        grid={{
          rows: 2,
          fill: "row",
        }}
        modules={[Grid, Navigation]}
        spaceBetween={10}
        slidesPerView={"auto"}
        className="mySwiper"
      >
        {/* {aiSuggestionsData?.map((each) => (
          <SwiperSlide key={each.id}>
            <AiSuggestionsItem data={each} />
          </SwiperSlide>
        ))} */}
        <SwiperSlide>
          <TryRecommendingAiItem />
        </SwiperSlide>
        <SwiperSlide>
          <TryRecommendingAiItem />
        </SwiperSlide>
        <SwiperSlide>
          <TryRecommendingAiItem />
        </SwiperSlide>
        <SwiperSlide>
          <TryRecommendingAiItem />
        </SwiperSlide>
        <SwiperSlide>
          <TryRecommendingAiItem />
        </SwiperSlide>
        <SwiperSlide>
          <TryRecommendingAiItem />
        </SwiperSlide>

        <SwiperNavigations />
      </Swiper>
    </div>
  );
}

export default TryRecommendingAi;
