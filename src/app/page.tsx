"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Splash = () => {
  const router = useRouter();

  return (
    <div className="relative">
      <Link href="/wallet">
        <button
          onClick={() => {
            console.log("clicked");
            router.push("/wallet");
          }}
          aria-label="Navigate to Wallet"
          style={{ background: "none", border: "none" }}
        >
          <img src="/images/splash.svg" alt="Splash Image" />
        </button>
      </Link>
    </div>
  );
};

export default Splash;
