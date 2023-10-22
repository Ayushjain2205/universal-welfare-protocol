import React from "react";
import Link from "next/link";

const Nominee = () => {
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
      <div className="flex flex-col gap-[28px]">
        <p className="text-[20px] font-medium">Nominee details</p>
        <div className="flex flex-col">
          <label htmlFor="firstName" className="mb-[8px] text-[14px]">
            Nominee name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value="Shweta Arora"
            className="p-2 h-[48px] border border-black rounded-[6px]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="mb-[8px] text-[14px]">
            Nominee DOB
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value="02/09/1970"
            className="p-2 h-[48px] border border-black rounded-[6px]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dob" className="mb-[8px] text-[14px]">
            Mobile number
          </label>
          <input
            type="text"
            id="dob"
            name="dob"
            value="87676599001"
            className="p-2 h-[48px] border border-black rounded-[6px] w-full"
          />
        </div>
      </div>

      <div className="flex flex-row justify-center mt-[60px] mb-[30px]">
        <Link href="/create/id">
          <button className="w-[213px] h-[48px] rounded-[8px] bg-[#1A2DD9] text-white">
            Save & Continue
          </button>
        </Link>
      </div>
      <div className="text-[#3277F5] text-[16px] flex justify-center">Skip</div>
    </div>
  );
};

export default Nominee;
