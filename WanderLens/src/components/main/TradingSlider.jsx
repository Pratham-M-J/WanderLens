import React, { useEffect, useRef } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow as EffectCoverflowModule } from "swiper/modules";
import { IonIcon } from "@ionic/react";
import { star, arrowBackOutline, arrowForwardOutline } from "ionicons/icons";

const TrandingSlider = () => {
  const swiperRef = useRef(null);

  const slidesData = [
    { image: "/images/new-york.jpg", place: "New York", rating: 4 },
    { image: "/images/belgium.jpg", place: "Brussels", rating: 5 },
    { image: "/images/bern.jpg", place: "Bern", rating: 4.5 },
    { image: "/images/osaka.jpg", place: "Osaka", rating: 5 },
    { image: "/images/london.jpg", place: "London", rating: 4.3 },
    { image: "/images/mumbai.jpg", place: "Mumbai", rating: 3.5 },
    { image: "/images/paris.jpg", place: "Paris", rating: 4.5 },
    { image: "/images/rome.jpg", place: "Rome", rating: 5 },
    { image: "/images/canberra.jpg", place: "Canberra", rating: 4 },
    { image: "/images/venice.jpg", place: "Venice", rating: 3.9 }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => <IonIcon key={`full-${i}`} icon={star} />)}
        {halfStar ? <IonIcon icon={star} className="half-star" /> : null}
      </>
    );
  };

  const handleSlideClick = (cardIndex) => {
    console.log(`http://127.0.0.1:5501/public/test.html?tourId=${cardIndex}&placeId=0`);
    window.location.replace(`http://127.0.0.1:5501/public/test.html?tourId=${cardIndex}&placeId=0`);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 'c' && swiperRef.current) {
        swiperRef.current.slideNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id="tranding">
      <div className="container">
        <h3 className="text-center section-subheading">-Explore the world virtually-</h3>
        <h1 className="text-center section-heading">WanderLens</h1>
      </div>
      
      <div className="main_slider">
        <div className="back_arrow"><IonIcon icon={arrowBackOutline} /></div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={10}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 380,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination, EffectCoverflowModule]}
          className="mySwiper"
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
              <div className="slider_card">
                <div className="slider_img">
                  <img src={slide.image} alt={slide.place} />
                  <div className="slider_content">
                    <h3>{slide.place}</h3>
                    <div className="rating">{renderStars(slide.rating)}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="forward_arrow"><IonIcon icon={arrowForwardOutline} /></div>
      </div>
    </div>
  );
};

export default TrandingSlider;
