import React, { useState, useEffect } from "react";
import "./style.scss";

export default function Header() {
  const [currentText, setCurrentText] = useState("");
  const text = "WARDEL SUITES";
  console.log(currentText);
  useEffect(() => {
    const type = () => {
      setCurrentText(text.substring(0, currentText.length + 1));
    };
    setTimeout(type, 100);
  }, [currentText]); // Không có phụ thuộc

  return (
    <div className="header">
      <div className="content">
        <div className="content-top">
          <h1>
            <span>WARDEL</span>
            <span>HOSPITALITY</span>
          </h1>
        </div>
        <div className="content-bottom">
          <div className="container">
            <div className="top ">
              <h2> Fort Leburg</h2>
              <h2>Luxury Business Hotel</h2>
              <div className="button">
                <button className="register">Register</button>
                <button className="login">Login</button>
              </div>
            </div>
            <div className="bottom row">
              <div className="left col-8">
                <p className="typing" id="typing">
                  <span id="typingText">{currentText}</span>
                </p>
              </div>
              <div className="right col-4">
                <a href="">
                  BOOK YOUR STAY <i class="las la-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
