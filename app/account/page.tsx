"use client";
import React, { useEffect } from "react";
import { appleLogo } from "../components/svg";

export default function Page() {
  useEffect(() => {
    window.location.pathname = "/account/signup";
  }, []);
  return (
    <>
      <div className="flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 border bg-[#eee]">
        <p className="animate-ping">{appleLogo}</p>
      </div>
    </>
  );
}
