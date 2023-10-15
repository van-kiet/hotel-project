import React, { useEffect } from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "./style.scss";
import SwiperCore from "swiper/core";
import { useRoomList } from "../../../hooks/useRoomList";
import RoomList from "./RoomList";

SwiperCore.use([Navigation, Pagination]);

export default function Room() {
  const roomList = useRoomList();
  // const renderRoomList = () => {
  //   return roomList.map((ele) => {
  //     return (
  //       <SwiperSlide key={ele.id}>
  //         <img src={ele.image} alt="room" />
  //       </SwiperSlide>
  //     );
  //   });
  // };

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
          >
            <RoomList />
          </Swiper>
        </div>
      </div>
    </div>
  );
}
