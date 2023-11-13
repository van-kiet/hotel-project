import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRoomList } from "../../../hooks/useRoomList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.scss";
import { notification } from "antd";
import moment from "moment/moment";
import InputDate from "./InputDate";
import ListRoom from "./ListRoom";

export default function RoomDetail() {
  const roomList = useRoomList();
  const { id } = useParams();

  const filterDetail = roomList.filter((ele) => ele.id === id);
  const [price, setPrice] = useState(0);

  return (
    <div className="room-detail">
      <div className="container">
        <div className="top">
          <h2 id="choose" className="choose">
            Choose your room
          </h2>
          {filterDetail.map((ele) => (
            <div className="row content" key={ele.id}>
              <div className="col-6 img">
                <img src={ele.image} alt="" />
              </div>
              <div className="col-6 detail">
                <h3>{ele.name}</h3>
                <p>{ele.detail}</p> <br />
                <p>Breakfast included</p> <br />
                <p>City view</p>
                <br />
                <p>Check-in 2:00 PM</p>
                <br />
                <p>Check-out 12:00 PM</p> <br />
                <div
                  type="button"
                  className="btn-modal"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                >
                  See the room details
                </div>
                <div className="price">
                  <span className="price-1">{ele.price}$/NIGHT</span>
                </div>
                <div className="date">
                  <InputDate id={id} room={filterDetail} />
                </div>
                <span className="total">Total :{price}$</span>
              </div>
            </div>
          ))}

          {/* modal */}

          <div
            className="modal fade"
            id="exampleModalLong"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div className="modal-body">
                  <Swiper
                    pagination={{
                      dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    slidesPerView={1}
                    navigation
                  >
                    {filterDetail.map((ele) =>
                      ele.imageDetail.map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <img src={img} alt="room" />
                        </SwiperSlide>
                      ))
                    )}
                  </Swiper>
                  <div className="list-detail">
                    {filterDetail.map((ele, idx) => (
                      <div className="room-amenities-modal__title" key={idx}>
                        <h2>
                          {ele.name},{ele.detail}
                        </h2>
                        <p>
                          Showcasing a chic, modern Indochinese design, the 30
                          m² (323 sq. ft.) room features elegant bathroom with
                          rain shower alongside our signature amenities,
                          spectacular city views and Sky Lounge Benefits.
                          Non-smoking room.
                        </p>
                        <p>
                          <i className="las la-image"></i> City view
                        </p>
                      </div>
                    ))}
                    <div className="room-amenities-modal__list row">
                      <div className="left col-6">
                        <div className="amenities-list">
                          <h3>Food And Beverage</h3>
                          <p className="sublabel">
                            Food And Beverage Facilities
                          </p>
                          <ul>
                            <li>Free in Room Mineral Water</li>
                            <li>Coffee/tea making facilities</li>
                            <li>Mini Bar</li>
                            <li>Mini-refrigerator</li>
                            <li>Nespresso machine</li>
                            <li>Coffee maker</li>
                            <li>Kettle</li>
                          </ul>
                        </div>
                        <div className="amenities-list">
                          <h3>Bathroom</h3>
                          <p className="sublabel">Bathroom Facilities</p>
                          <ul>
                            <li>Accessible bathroom</li>
                            <li>Bathrobe</li>
                            <li>Telephone in bathroom</li>
                            <li>Full-length mirror</li>
                            <li>Hair dryer in bathroom</li>
                          </ul>
                        </div>
                        <div className="amenities-list">
                          <h3>Media And Technology</h3>
                          <p className="sublabel">Tv Facilities</p>
                          <ul>
                            <li>Web TV</li>
                          </ul>
                          <p className="sublabel">Phone Facilities</p>
                          <ul>
                            <li>Voice mail</li>
                          </ul>
                          <p className="sublabel">Internet Facilities</p>
                          <ul>
                            <li>High speed internet</li>
                          </ul>
                        </div>
                      </div>
                      <div className="right col-6">
                        <div className="amenities-list">
                          <h3>Service And Equipment</h3>
                          <p className="sublabel">Comfort Features</p>
                          <ul>
                            <li>Suite Box</li>
                            <li>Iron</li>
                            <li>Double Glazing</li>
                            <li>Alarm clock</li>
                            <li>Blackout Facilities</li>
                            <li>Soundproof room</li>
                          </ul>
                          <p className="sublabel">Accessibility And Security</p>
                          <ul>
                            <li>Dead bolt in rooms</li>
                            <li>Keycard-operated door locks</li>
                            <li>Emergency info in rooms</li>
                            <li>Alarm clock</li>
                            <li>Audible smoke alarms in rooms</li>
                            <li>Sprinkler in room</li>
                            <li>Smoke alarm in room</li>
                            <li>Safe deposit box in room</li>
                            <li>Security Peephole</li>
                          </ul>
                          <p className="sublabel">Room Services</p>
                          <ul>
                            <li>Automatic wake up call</li>
                            <li>Operator wake up call</li>
                          </ul>
                          <p className="sublabel">Electric Facilities</p>
                          <ul>
                            <li>220/240 V AC</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom">
          <ListRoom id={id} roomList={roomList} />
        </div>
      </div>
    </div>
  );
}
