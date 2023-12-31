"use client";
import React, { useState } from "react";
import Scheme from "../components/Scheme";
import Card from "../components/Card";

const Scehemes = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    console.log("here");
    setIsOpen(!isOpen);
  }

  const schemes = [
    {
      name: "Rashtriya Swasthya Bima Yojana",
      category: "Health Insurance",
      image: "/images/scheme1.png",
      link: "/ration",
    },
    {
      name: "RATION CARD : NFSA",
      category: "Food",
      image: "/images/scheme2.png",
      link: "/ration",
    },
    {
      name: "ITC : VOCATIONAL TRAINING",
      category: "Education",
      image: "/images/scheme3.png",
      link: "/ration",
    },
    {
      name: "Dhirubhai Ambani Hospital",
      category: "Health",
      image: "/images/scheme4.png",
      link: "/health",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="top flex flex-row justify-end mb-[40px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.75 18C3.75 17.8011 3.82902 17.6103 3.96967 17.4697C4.11032 17.329 4.30109 17.25 4.5 17.25H19.5C19.6989 17.25 19.8897 17.329 20.0303 17.4697C20.171 17.6103 20.25 17.8011 20.25 18C20.25 18.1989 20.171 18.3897 20.0303 18.5303C19.8897 18.671 19.6989 18.75 19.5 18.75H4.5C4.30109 18.75 4.11032 18.671 3.96967 18.5303C3.82902 18.3897 3.75 18.1989 3.75 18ZM3.75 12C3.75 11.8011 3.82902 11.6103 3.96967 11.4697C4.11032 11.329 4.30109 11.25 4.5 11.25H19.5C19.6989 11.25 19.8897 11.329 20.0303 11.4697C20.171 11.6103 20.25 11.8011 20.25 12C20.25 12.1989 20.171 12.3897 20.0303 12.5303C19.8897 12.671 19.6989 12.75 19.5 12.75H4.5C4.30109 12.75 4.11032 12.671 3.96967 12.5303C3.82902 12.3897 3.75 12.1989 3.75 12ZM3.75 6C3.75 5.80109 3.82902 5.61032 3.96967 5.46967C4.11032 5.32902 4.30109 5.25 4.5 5.25H19.5C19.6989 5.25 19.8897 5.32902 20.0303 5.46967C20.171 5.61032 20.25 5.80109 20.25 6C20.25 6.19891 20.171 6.38968 20.0303 6.53033C19.8897 6.67098 19.6989 6.75 19.5 6.75H4.5C4.30109 6.75 4.11032 6.67098 3.96967 6.53033C3.82902 6.38968 3.75 6.19891 3.75 6Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-[30px]">
        <p className="text-[24px] font-medium">Hello, Raj</p>

        <div
          id="uid"
          onClick={() => setIsOpen(true)}
          className="flex flex-row items-center justify-between rounded-[6px] px-[12px] py-[17px] bg-[#1A2DD9] h-[72px] w-[336px]"
        >
          <div className="flex flex-row items-center gap-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
            >
              <path
                d="M20.9521 14.3268C20.9521 14.3268 38.8069 4.02187 39.6064 19.5844C40.4058 35.1469 20.9521 26.3141 20.9521 26.3141"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M20.1025 14.3268C20.1025 14.3268 1.84201 4.02187 1.02437 19.5844C0.206734 35.1469 20.1025 26.3141 20.1025 26.3141"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M28.2285 27.9386C28.2285 27.9386 31.0449 38.7863 19.8907 38.7862C8.73645 38.7862 12.5238 27.9386 12.5238 27.9386"
                stroke="white"
                stroke-width="2"
              />
              <path
                d="M28.232 11.6027C28.232 11.6027 30.8324 1.21781 19.6781 1.21782C8.5239 1.21783 12.5274 11.6027 12.5274 11.6027"
                stroke="white"
                stroke-width="2"
              />
              <ellipse
                cx="19.4662"
                cy="19.6837"
                rx="7.00432"
                ry="7.00434"
                fill="white"
              />
              <ellipse
                cx="19.6779"
                cy="19.6784"
                rx="2.54703"
                ry="2.54703"
                fill="#1A2DD9"
              />
            </svg>
            <span className="font-semibold text-[16px] text-white">
              472372301036
            </span>
          </div>
          <div className="bg-[#fff] h-[44px] w-[44px] rounded-full flex flex-row items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M1 0.93971V4.2287C1 4.48819 0.776142 4.69855 0.5 4.69855C0.223858 4.69855 0 4.48819 0 4.2287V0.469855C0 0.210361 0.223858 0 0.5 0H4.5C4.77614 0 5 0.210361 5 0.469855C5 0.729349 4.77614 0.93971 4.5 0.93971H1ZM18 0.93971H14.5C14.2239 0.93971 14 0.729349 14 0.469855C14 0.210361 14.2239 0 14.5 0H18.5C18.7761 0 19 0.210361 19 0.469855V4.2287C19 4.48819 18.7761 4.69855 18.5 4.69855C18.2239 4.69855 18 4.48819 18 4.2287V0.93971ZM1 16.9148H4.5C4.77614 16.9148 5 17.1251 5 17.3846C5 17.6441 4.77614 17.8545 4.5 17.8545H0.5C0.223858 17.8545 0 17.6441 0 17.3846V13.6258C0 13.3663 0.223858 13.1559 0.5 13.1559C0.776142 13.1559 1 13.3663 1 13.6258V16.9148ZM18 16.9148V13.6258C18 13.3663 18.2239 13.1559 18.5 13.1559C18.7761 13.1559 19 13.3663 19 13.6258V17.3846C19 17.6441 18.7761 17.8545 18.5 17.8545H14.5C14.2239 17.8545 14 17.6441 14 17.3846C14 17.1251 14.2239 16.9148 14.5 16.9148H18ZM0.5 9.3971C0.223858 9.3971 0 9.18674 0 8.92725C0 8.66775 0.223858 8.45739 0.5 8.45739H18.5C18.7761 8.45739 19 8.66775 19 8.92725C19 9.18674 18.7761 9.3971 18.5 9.3971H0.5Z"
                fill="#1A2DD9"
              />
            </svg>
          </div>
        </div>
      </div>

      <p className="text-[16px] font-medium mt-[58px]">Schemes for you</p>
      <div className="bg-white p-4 space-x-4 overflow-x-scroll flex whitespace-nowrap mt-[22px]">
        <span className="border-b-2 border-black pb-2">For you</span>
        <span className="text-[#D8D8D8]">Health</span>
        <span className="text-[#D8D8D8]">Food</span>
        <span className="text-[#D8D8D8]">Education</span>
        <span className="text-[#D8D8D8]">Finance</span>
      </div>

      <div className="flex flex-col gap-[31px] mt-[45px]">
        {schemes.map((scheme, index) => (
          <Scheme
            key={index}
            name={scheme.name}
            category={scheme.category}
            image={scheme.image}
            link={scheme.link}
          />
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-white opacity-80"></div>
          <div className="flex flex-col justify-center gap-[100px]">
            <Card />
            <button
              className="m-auto flex flex-col items-center justify-center rounded-full h-[48px] w-[48px] bg-[#272727] z-40"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M1.29279 1.29308C1.48031 1.10561 1.73462 1.00029 1.99979 1.00029C2.26495 1.00029 2.51926 1.10561 2.70679 1.29308L7.99979 6.58608L13.2928 1.29308C13.385 1.19757 13.4954 1.12139 13.6174 1.06898C13.7394 1.01657 13.8706 0.988985 14.0034 0.987831C14.1362 0.986677 14.2678 1.01198 14.3907 1.06226C14.5136 1.11254 14.6253 1.18679 14.7192 1.28069C14.8131 1.37458 14.8873 1.48623 14.9376 1.60913C14.9879 1.73202 15.0132 1.8637 15.012 1.99648C15.0109 2.12926 14.9833 2.26048 14.9309 2.38249C14.8785 2.50449 14.8023 2.61483 14.7068 2.70708L9.41378 8.00008L14.7068 13.2931C14.8889 13.4817 14.9897 13.7343 14.9875 13.9965C14.9852 14.2587 14.88 14.5095 14.6946 14.6949C14.5092 14.8803 14.2584 14.9855 13.9962 14.9878C13.734 14.99 13.4814 14.8892 13.2928 14.7071L7.99979 9.41408L2.70679 14.7071C2.51818 14.8892 2.26558 14.99 2.00339 14.9878C1.74119 14.9855 1.49038 14.8803 1.30497 14.6949C1.11956 14.5095 1.01439 14.2587 1.01211 13.9965C1.00983 13.7343 1.11063 13.4817 1.29279 13.2931L6.58579 8.00008L1.29279 2.70708C1.10532 2.51955 1 2.26525 1 2.00008C1 1.73492 1.10532 1.48061 1.29279 1.29308Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scehemes;
