import React from "react";
import { appleLogo } from "./svg";

export default function Loading() {
  return (
    <>
      <div className="flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 border bg-[#eee] cursor-default">
        <p className="animate-ping">{appleLogo}</p>
      </div>
    </>
  );
}
