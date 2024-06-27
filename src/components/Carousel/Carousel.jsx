import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
import styles from "./Carousel.module.css";
import { Navigation } from "swiper/modules";
import { ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../assets/LeftArrow.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Carousel({ albums }) {
  const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.controls}>
        <div className={`${styles.arrow} ${styles.left}`} onClick={goPrev}>
          <LeftArrow />
        </div>
        <Swiper
          slidesPerView={7}
          spaceBetween={30}
          navigation={{
            prevEl: `.${styles.left}`,
            nextEl: `.${styles.right}`,
          }}
          modules={[Navigation]}
          className="mySwiper"
          ref={swiperRef}
        >
          {albums.map((album) => (
            <SwiperSlide key={album.id}>
              <div className={styles.album}>
                <Card album={album} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`${styles.arrow} ${styles.right}`} onClick={goNext}>
          <RightArrow />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
