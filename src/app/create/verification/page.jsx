"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import Verification from "../../components/sections/Verification";
const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/verified");
    }, 5000);

    // Cleanup the timeout if the component unmounts before the timeout is reached.
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <Verification />
    </div>
  );
};

export default Page;
