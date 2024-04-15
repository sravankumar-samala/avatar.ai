import { useSwiper } from "swiper/react";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export default function SwiperNavigations() {
  const swiper = useSwiper();

  const prev = () => swiper.slidePrev();
  const next = () => swiper.slideNext();

  return (
    <>
      <button className="prevBtn btn " type="button" onClick={prev}>
        <FaChevronLeft />
      </button>
      <button className="nextBtn btn" type="button" onClick={next}>
        <FaChevronRight />
      </button>
    </>
  );
}
