import React from "react";

const Create = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="top flex flex-row justify-end mb-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
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
              className="p-2 h-[48px] border border-black rounded-[6px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dob" className="mb-[8px] text-[14px]">
              Date of birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="p-2 h-[48px] border border-black rounded-[6px]"
            />
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
          <button className="w-[213px] h-[48px] rounded-[8px] bg-[#1A2DD9] text-white">
            Save & Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Create;
