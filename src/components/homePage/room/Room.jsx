import React, { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./style.scss";
import SwiperCore from "swiper/core";
import { useRoomList } from "../../../hooks/useRoomList";
import { Link } from "react-router-dom";
SwiperCore.use([Navigation, Pagination]);

export default function Room() {
  const roomList = useRoomList();
  const [activeCardId, setActiveCardId] = useState(null);
  console.log(roomList);
  useEffect(() => {
    setActiveCardId("1");
  }, []);

  const handleSlideChange = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeCardId = activeSlide.getAttribute("data-key");
    setActiveCardId(activeCardId);
  };
  const filterDetail = roomList.filter((ele) => ele.id === activeCardId);
  return (
    <div className="room">
      <div className="container">
        <h2>Rooms & Suites</h2>
        <div className="slider">
          <Swiper
            allowTouchMove={false}
            loop
            slidesPerView={3}
            navigation
            spaceBetween={50}
            onSlideChange={handleSlideChange}
          >
            {roomList.map((ele) => (
              <SwiperSlide key={ele.id} data-key={ele.id}>
                <img src={ele.image} alt="room" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="detail">
            {filterDetail.map((ele) => (
              <div key={ele.id}>
                <h3 className="name">{ele.name}</h3>
                <p>{ele.detail}</p>
                <Link className="price" to={`/RoomDetail/${ele.id}`}>
                  from {ele.price}$/night <i className="las la-arrow-right" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
