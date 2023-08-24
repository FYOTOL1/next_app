import React from "react";
import style from "./style.module.css";
import Lsection from "./Lsection";
import Rsection from "./Rsection";

export default function layout() {
  return (
    <>
      <div className="flex justify-between items-center w-full h-[775px] mt-5 mx-auto gap-0.5">
        <Lsection />
        <Rsection />
      </div>
    </>
  );
}
