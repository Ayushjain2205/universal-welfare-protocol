"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the QrReader component to avoid SSR issues
const QrReader = dynamic(() => import("react-qr-scanner"), { ssr: false });

export default function ScanPage() {
  const handleScan = (data) => {
    if (data) {
      console.log("QR code scanned data:", data);
      // Handle the scanned data...
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-[81px] text-center flex-col justify-center">
        <h3 className="text-[20px] font-medium">Scan to verify</h3>

        <div className="relative p-4  border-black rounded-md mt-[40px]">
          {/* Your QR Code Image */}
          <QrReader
            legacyMode={true}
            delay={300}
            onError={handleError}
            onScan={handleScan}
            facingMode="rear"
            style={{ width: "260px", height: "230px" }} // Adjust size as needed
          />

          {/* Top Left Corner */}
          <div className="absolute top-0 left-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="58"
              viewBox="0 0 64 58"
              fill="none"
            >
              <path
                d="M1 57.5V11C1 5.47715 5.47715 1 11 1H63.5"
                stroke="black"
              />
            </svg>
          </div>

          <div className="absolute top-0 right-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="58"
              viewBox="0 0 64 58"
              fill="none"
            >
              <path
                d="M63 57.5V11C63 5.47715 58.5228 1 53 1H0.5"
                stroke="black"
              />
            </svg>
          </div>

          <div className="absolute bottom-0 left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="57"
              viewBox="0 0 64 57"
              fill="none"
            >
              <path
                d="M1 0V46.5C1 52.0228 5.47715 56.5 11 56.5H63.5"
                stroke="black"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="57"
              viewBox="0 0 64 57"
              fill="none"
            >
              <path
                d="M63 0V46.5C63 52.0228 58.5228 56.5 53 56.5H0.5"
                stroke="black"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-row gap-[8px] items-center justify-center text-center mt-[150px] text-[#3277F5]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6.00195 5.5C6.00195 5.89782 5.84392 6.27936 5.56261 6.56066C5.28131 6.84196 4.89978 7 4.50195 7C4.10413 7 3.7226 6.84196 3.44129 6.56066C3.15999 6.27936 3.00195 5.89782 3.00195 5.5C3.00195 5.10218 3.15999 4.72064 3.44129 4.43934C3.7226 4.15804 4.10413 4 4.50195 4C4.89978 4 5.28131 4.15804 5.56261 4.43934C5.84392 4.72064 6.00195 5.10218 6.00195 5.5Z"
              fill="#3277F5"
            />
            <path
              d="M2.00195 1C1.47152 1 0.962812 1.21071 0.58774 1.58579C0.212667 1.96086 0.00195313 2.46957 0.00195312 3V13C0.00195313 13.5304 0.212667 14.0391 0.58774 14.4142C0.962812 14.7893 1.47152 15 2.00195 15H14.002C14.5324 15 15.0411 14.7893 15.4162 14.4142C15.7912 14.0391 16.002 13.5304 16.002 13V3C16.002 2.46957 15.7912 1.96086 15.4162 1.58579C15.0411 1.21071 14.5324 1 14.002 1H2.00195ZM14.002 2C14.2672 2 14.5215 2.10536 14.7091 2.29289C14.8966 2.48043 15.002 2.73478 15.002 3V9.5L11.225 7.553C11.1312 7.50602 11.025 7.48973 10.9215 7.50642C10.8179 7.52311 10.7222 7.57194 10.648 7.646L6.93795 11.356L4.27795 9.584C4.18191 9.52006 4.06672 9.4913 3.95189 9.5026C3.83707 9.5139 3.72969 9.56456 3.64795 9.646L1.00195 12V3C1.00195 2.73478 1.10731 2.48043 1.29485 2.29289C1.48238 2.10536 1.73674 2 2.00195 2H14.002Z"
              fill="#3277F5"
            />
          </svg>
          Upload from gallery
        </div>
      </div>
    </div>
  );
}
