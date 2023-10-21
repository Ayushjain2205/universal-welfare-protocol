import React from "react";

const Verification = () => {
  return (
    <div className="flex flex-col mt-[170px] items-center">
      <div className="w-16 h-16 bg-[#1A2DD9] rounded-full flex justify-center items-center space-x-1">
        <div className="w-2 h-2 bg-white rounded-full animate-bounceFirst"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounceSecond"></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounceThird"></div>
      </div>
      <p className="text-[24px] font-medium mt-[32px]">
        Verification in process
      </p>
      <p className="w-[210px] mt-[15px] text-[12px] text-[#00000070] text-center">
        We will notify you once it’s complete. It usually takes upto 24 hours
      </p>
    </div>
  );
};

export default Verification;
