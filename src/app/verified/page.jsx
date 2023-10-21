import React from "react";
import Card from "../components/Card";

const Verified = () => {
  return (
    <div className="relative">
      {/* Added relative positioning */}
      <img
        className="absolute top-[-100px] w-[940px] h-[775px]"
        src="/images/scribble.svg"
        alt=""
      />
      {/* Positioned Card absolutely with a top margin of 105px */}
      <div className="absolute top-[105px] flex justify-center w-full">
        <Card />
      </div>
    </div>
  );
};

export default Verified;
