import React from "react";
import QRCode from "react-qr-code";

const Card = () => {
  return (
    <div className="relative flex flex-col p-[20px] h-[367px] w-[335px] bg-[#1A2DD9] rounded-[20px]">
      <div className="flex flex-row justify-between items-center">
        <span className="text-[20px] font-semibold text-white">Raj Arora</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="61"
          viewBox="0 0 62 61"
          fill="none"
        >
          <path
            d="M31.9561 22.0091C31.9561 22.0091 58.7637 6.53707 59.964 29.903C61.1643 53.2689 31.9561 40.0072 31.9561 40.0072"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M30.6816 22.0091C30.6816 22.0091 3.26477 6.53707 2.03715 29.903C0.809528 53.2689 30.6816 40.0072 30.6816 40.0072"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M42.8812 42.4467C42.8812 42.4467 47.1099 58.7336 30.3626 58.7336C13.6154 58.7336 19.3018 42.4467 19.3018 42.4467"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M42.8871 17.919C42.8871 17.919 46.7914 2.32694 30.0441 2.32696C13.2968 2.32698 19.3077 17.919 19.3077 17.919"
            stroke="white"
            strokeWidth="3"
          />
          <circle cx="29.7255" cy="30.0523" r="10.5165" fill="white" />
          <circle cx="30.0439" cy="30.044" r="3.82418" fill="#1A2DD9" />
        </svg>
      </div>
      <div className="flex flex-col mt-[72px]">
        <p className="text-[#FFFFFF87]">UID</p>
        <p className="font-semibold text-[20px] text-white">472372301036</p>
      </div>
      <div>
        <p className="w-[100px] text-[12px] mt-[54px] text-[#FFFFFF99]">
          DB Woods Gokuldham Goregaon East Mumbai 400063 Maharashtra
        </p>
      </div>
      <div className="absolute bottom-[12px] right-[20px]">
        <QRCode size={85} value="472372301036" />
      </div>
    </div>
  );
};

export default Card;
