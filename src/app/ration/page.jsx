import React from "react";
import Link from "next/link";

const Ration = () => {
  return (
    <div className="flex flex-col">
      <div className="top flex flex-row justify-between mb-[40px]">
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
            d="M17.0314 2.469C17.1012 2.53867 17.1566 2.62143 17.1944 2.71255C17.2322 2.80367 17.2517 2.90135 17.2517 3C17.2517 3.09865 17.2322 3.19633 17.1944 3.28745C17.1566 3.37857 17.1012 3.46133 17.0314 3.531L8.56086 12L17.0314 20.469C17.1722 20.6098 17.2513 20.8008 17.2513 21C17.2513 21.1992 17.1722 21.3902 17.0314 21.531C16.8905 21.6718 16.6995 21.7509 16.5004 21.7509C16.3012 21.7509 16.1102 21.6718 15.9694 21.531L6.96936 12.531C6.89952 12.4613 6.8441 12.3786 6.80629 12.2874C6.76849 12.1963 6.74902 12.0986 6.74902 12C6.74902 11.9013 6.76849 11.8037 6.80629 11.7125C6.8441 11.6214 6.89952 11.5387 6.96936 11.469L15.9694 2.469C16.039 2.39915 16.1218 2.34374 16.2129 2.30593C16.304 2.26812 16.4017 2.24866 16.5004 2.24866C16.599 2.24866 16.6967 2.26812 16.7878 2.30593C16.8789 2.34374 16.9617 2.39915 17.0314 2.469Z"
            fill="black"
          />
        </svg>
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
      <div className="flex justify-center">
        <img className="w-[157px] h-[175px]" src="/images/scheme2.png" alt="" />
      </div>
      <Link href="/scan">
        <button className="bg-[#1A2DD9] rounded-[8px] h-[46px] w-[336px] mt-[46px] text-white text-medium">
          Opt in
        </button>
      </Link>
      <p className="text-[20px] mt-[30px] font-medium">RATION CARD : NFSA</p>
      <p className="text-[14px] text-[#7A7A7A] mt-[12px] ">Food</p>
      <p className="mt-[27px] w-[336px] text-[14px]">
        Under the ONORC, all the beneficiaries from one state can get their
        share of rations in other states where the ration card was originally
        issued. Any recipient can use their ration cards at any PDS shop across
        the country. ONORC is aimed at providing universal access to PDS food
        grains for migrant workers.
      </p>
    </div>
  );
};

export default Ration;
