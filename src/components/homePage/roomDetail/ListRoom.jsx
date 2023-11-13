import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ListRoom(props) {
  const { roomList, id } = props;

  useEffect(() => {
    if (roomList.length > 0) {
      renderOtherRoom();
    }
  }, [roomList]);

  const renderOtherRoom = () => {
    let otherRoom = [...roomList];
    if (otherRoom.length > 0) {
      let index = otherRoom.findIndex((room) => room.id === id);
      otherRoom.splice(index, 1);
    }

    const element = document.getElementById("choose");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    return otherRoom.map((ele) => {
      return (
        <div key={ele.id} className="card">
          <div className=" card-content">
            <div className="left ">
              <img src={ele.image} alt="" />
            </div>
            <div className="right ">
              <h3>{ele.name}</h3>
              <p>{ele.detail}</p>
              <p>Room: {ele.number}</p>
              <p>Breakfast included</p>
              <span className="price">{ele.price}$/NIGHT</span>
              <Link className="see" to={`/RoomDetail/${ele.id}`}>
                SEE
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="main-other-room">
      <h2>Other rooms</h2>
      <div className="room-other">
        <div className="room-other-grid">{renderOtherRoom()}</div>
      </div>
    </div>
  );
}
