import React from "react";

const Congrats = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-[140px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="85"
          height="85"
          viewBox="0 0 85 85"
          fill="none"
        >
          <circle
            cx="42.5"
            cy="42.5"
            r="40.5"
            fill="#1A2DD9"
            stroke="white"
            strokeWidth="4"
          />
          <path
            d="M27.0449 42.3142L37.4693 52.5454L58.7267 31.6818"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="w-[336px] mt-[32px]">
        <p className="text-[24px] text-center">Congrats!</p>
        <p className="text-[24px] text-center">You are a member</p>
        <p className="text-[24px] text-center font-medium leading-[0.6px">
          RATION CARD INITIATIVE BY NFSA
        </p>
      </div>
      <button className="px-[39px] py-[10px] bg-[#1A2DD9] text-[16px] text-white rounded-[8px] font-medium mt-[155px]">
        Done
      </button>
    </div>
  );
};

export default Congrats;
