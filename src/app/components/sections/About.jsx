import Link from "next/link";
import React from "react";

const About = () => {
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
        <p className="text-[20px] font-medium">Tell us about you</p>
        <div className="flex flex-col">
          <label htmlFor="firstName" className="mb-[8px] text-[14px]">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value="Raj"
            className="p-2 h-[48px] border border-black rounded-[6px]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName" className="mb-[8px] text-[14px]">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value="Arora"
            className="p-2 h-[48px] border border-black rounded-[6px]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dob" className="mb-[8px] text-[14px]">
            Date of birth
          </label>
          <div
            type="text"
            id="lastName"
            name="lastName"
            className="flex flex-row items-center justify-between p-2 h-[48px] border border-black rounded-[6px]"
          >
            <span>19/02/2001</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.25 0C5.44891 0 5.63968 0.0790176 5.78033 0.21967C5.92098 0.360322 6 0.551088 6 0.75V1.5H18V0.75C18 0.551088 18.079 0.360322 18.2197 0.21967C18.3603 0.0790176 18.5511 0 18.75 0C18.9489 0 19.1397 0.0790176 19.2803 0.21967C19.421 0.360322 19.5 0.551088 19.5 0.75V1.5H21C21.7956 1.5 22.5587 1.81607 23.1213 2.37868C23.6839 2.94129 24 3.70435 24 4.5V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.87868 23.1213C0.316071 22.5587 0 21.7956 0 21V4.5C0 3.70435 0.316071 2.94129 0.87868 2.37868C1.44129 1.81607 2.20435 1.5 3 1.5H4.5V0.75C4.5 0.551088 4.57902 0.360322 4.71967 0.21967C4.86032 0.0790176 5.05109 0 5.25 0V0ZM3 3C2.60218 3 2.22064 3.15804 1.93934 3.43934C1.65804 3.72064 1.5 4.10218 1.5 4.5V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H21C21.3978 22.5 21.7794 22.342 22.0607 22.0607C22.342 21.7794 22.5 21.3978 22.5 21V4.5C22.5 4.10218 22.342 3.72064 22.0607 3.43934C21.7794 3.15804 21.3978 3 21 3H3Z"
                fill="#818181"
              />
              <path
                d="M3.75 6C3.75 5.80109 3.82902 5.61032 3.96967 5.46967C4.11032 5.32902 4.30109 5.25 4.5 5.25H19.5C19.6989 5.25 19.8897 5.32902 20.0303 5.46967C20.171 5.61032 20.25 5.80109 20.25 6V7.5C20.25 7.69891 20.171 7.88968 20.0303 8.03033C19.8897 8.17098 19.6989 8.25 19.5 8.25H4.5C4.30109 8.25 4.11032 8.17098 3.96967 8.03033C3.82902 7.88968 3.75 7.69891 3.75 7.5V6Z"
                fill="#818181"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[28px] mt-[60px]">
        <p className="text-[20px] font-medium">About your work</p>
        <div className="flex flex-col">
          <label htmlFor="jobtitle" className="mb-[8px] text-[14px]">
            Job Title
          </label>
          <input
            type="text"
            id="jobtitle"
            name="jobtitle"
            value="Clerk"
            className="p-2 h-[48px] border border-black rounded-[6px]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="years" className="mb-[8px] text-[14px]">
            Years
          </label>
          <input
            type="text"
            id="years"
            name="years"
            value="7"
            className="p-2 h-[48px] border border-black rounded-[6px]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount" className="mb-[8px] text-[14px]">
            Salary
          </label>
          <select
            id="amount"
            name="amount"
            className="p-2 h-[48px] border border-black rounded-[6px] appearance-none"
          >
            <option value="5000">5000 - 50000</option>
            <option value="50000">50000 - 1 lakh</option>
            <option value="100000">1 lakh - 5 lakh</option>
            <option value="500000">5lakh - 20 lakh</option>
            <option value="2000000">20 lakh +</option>
          </select>
        </div>
      </div>

      <div className="flex flex-row items-center gap-[8px] text-[#3277F5] mt-[28px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M8 0C8.26522 0 8.51957 0.105357 8.70711 0.292893C8.89464 0.48043 9 0.734784 9 1V7H15C15.2652 7 15.5196 7.10536 15.7071 7.29289C15.8946 7.48043 16 7.73478 16 8C16 8.26522 15.8946 8.51957 15.7071 8.70711C15.5196 8.89464 15.2652 9 15 9H9V15C9 15.2652 8.89464 15.5196 8.70711 15.7071C8.51957 15.8946 8.26522 16 8 16C7.73478 16 7.48043 15.8946 7.29289 15.7071C7.10536 15.5196 7 15.2652 7 15V9H1C0.734784 9 0.48043 8.89464 0.292893 8.70711C0.105357 8.51957 0 8.26522 0 8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H7V1C7 0.734784 7.10536 0.48043 7.29289 0.292893C7.48043 0.105357 7.73478 0 8 0V0Z"
            fill="#3277F5"
          />
        </svg>
        Add another work
      </div>

      <div className="flex flex-row justify-center mt-[60px] mb-[40px]">
        <Link href="/create/nominee">
          <button className="w-[213px] h-[48px] rounded-[8px] bg-[#1A2DD9] text-white">
            Save & Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
