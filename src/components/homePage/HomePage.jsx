import React from "react";
import Outstanding from "./outstanding/Outstanding";
import Intro from "./intro/Intro";
import Room from "./room/Room";

export default function HomePage() {
  return (
    <div>
      <Intro />
      <Room />
      <Outstanding />
    </div>
  );
}
