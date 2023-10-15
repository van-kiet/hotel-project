import React from "react";
import { SwiperSlide } from "swiper/react"; // Thêm import này

import { useRoomList } from "../../../hooks/useRoomList";

const RoomList = () => {
  const roomList = useRoomList();

  return (
    <>
      {roomList.map((ele) => (
        <SwiperSlide key={ele.id}>
          <img src={ele.image} alt="room" />
        </SwiperSlide>
      ))}
    </>
  );
};

export default RoomList;
