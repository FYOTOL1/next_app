"use client";
import React, { useState } from "react";
import { user } from "../svg";
import Link from "next/link";

const mdy = () => {
  const Day = new Date().getDay();
  const Month = new Date().getMonth();
  const Year = new Date().getFullYear();
  return `${Month}/${Day}/${Year}`;
};
const smh = () => {
  const Second = new Date().getSeconds();
  const Minute = new Date().getMinutes();
  const Hour = new Date().getHours();
  return `${Hour}:${Minute}:${Second}`;
};

export default function HeaderAccount({ Type }: any) {
  const [MDY, setMDY] = useState(mdy);
  const [SMH, setSMH] = useState(smh);

  setInterval(() => {
    setMDY(mdy);
    setSMH(smh);
  }, 1000);

  return (
    <>
      <div className="flex justify-between items-center py-2">
        <div className="flex justify-between items-center text-[20px] text-[#1B2330] font-semibold max-w-[175px] min-w-[175px] w-[175px]">
          <div>{MDY}</div>
          <p>•</p>
          <div>{SMH}</div>
        </div>
        <div className="text-[28px] max-w-[175px] min-w-[175px] w-[175px] text-center">
          OSPOS
        </div>
        <Link
          href={`/page/account/${Type == "signup" ? "login" : "signup"}`}
          className="flex justify-end items-center max-w-[175px] min-w-[175px] w-[175px] transition-all hover:opacity-80"
        >
          <p className="px-2">{Type == "signup" ? "Login" : "Signup"}</p>
          <p>{user}</p>
        </Link>
      </div>
    </>
  );
}
