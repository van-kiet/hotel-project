import React from "react";
import "./style.scss";
export default function Intro() {
  return (
    <div className="intro">
      <div className="top">
        <div className="container">
          <h2>Luxury suites for people on the go</h2>
        </div>
      </div>
      <div className="bottom ">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p>
                Welcome to our luxurious hotel! We take pride in being a premier
                destination with unparalleled service and experiences that
                cannot be found anywhere else. Our hotel is situated in a
                stunning location, surrounded by breathtaking landscapes and a
                serene atmosphere. With unique architecture and exquisite
                design, we create an exciting and sophisticated resort space.
                The culinary experience at our restaurant will take you on a
                captivating journey of indulgence. Our talented team of chefs
                utilizes fresh ingredients to create unique and mouthwatering
                dishes, catering to every culinary preference.
              </p>
            </div>
            <div className="col-6">
              <p>
                We provide top-notch services and excellent amenities to ensure
                absolute comfort for our guests. From a luxurious fitness center
                and spa to an outdoor swimming pool and premier room service, we
                are committed to delivering a premium living experience for each
                customer. Come and discover our hotel, where every detail is
                attentively cared for, and the beautiful space creates a
                memorable experience. We guarantee to provide you with a
                luxurious and unforgettable vacation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
