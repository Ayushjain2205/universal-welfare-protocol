import React from "react";
import Card from "../components/Card";
import Link from "next/link";

const Verified = () => {
  return (
    <div className="relative">
      <img
        className="absolute top-[-100px] w-[940px] h-[775px]"
        src="/images/scribble.svg"
        alt=""
      />
      <div className="absolute top-[105px] flex flex-col items-center w-full">
        <Card />
        <Link href="/schemes">
          <button className="mt-[70px] bg-[#262626] px-[14px] py-[10px] text-[16px] text-white font-medium rounded-[8px] ">
            Explore schemes
          </button>
        </Link>
        <button className="mt-[30px] text-[#3277F5] text-[16px]">
          Print your card
        </button>
      </div>
    </div>
  );
};

export default Verified;
