import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRoomList } from "../../../hooks/useRoomList";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.scss";

export default function RoomDetail() {
  const roomList = useRoomList();
  const { id } = useParams();
  const filterDetail = roomList.filter((ele) => ele.id === id);
  const imgDetail = filterDetail[0].imageDetail;

  return (
    <div className="room-detail">
      <div className="container">
        <div className="top">
          <h2>select your room</h2>
          {filterDetail.map((ele) => (
            <div className="row" key={ele.id}>
              <div className="col-6">
                <img src={ele.image} alt="" />
              </div>
              <div className="col-6">
                <h3>{ele.name}</h3>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Launch demo modal
                </button>
              </div>
            </div>
          ))}

          {/* modal */}

          <div
            className="modal fade"
            id="exampleModalCenter"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    // spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    {/* {imgDetail.map((ele, idx) => (
                      <SwiperSlide key={idx}>
                        <img src={ele} alt="room" />
                      </SwiperSlide>
                    ))} */}
                  </Swiper>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
