"use client";
import React, { useState } from "react";
import { filter, search } from "../../components/svg";
import Image from "next/image";
import Card from "./Card";

export default function Employee() {
  const [name, setname] = useState<string>();
  type USER = {
    username: string;
    employee_id: string;
    scheduled: string;
    collections: number;
    img: string;
  };

  const employees: USER[] = [
    {
      username: "Ahmed",
      employee_id: "A-12311",
      scheduled: "8/9/2023",
      collections: 4000,
      img: "/man.png",
    },
    {
      username: "Ali",
      employee_id: "E-12311",
      scheduled: "8/9/2023",
      collections: 3000,
      img: "/man.png",
    },
    {
      username: "Ahmed",
      employee_id: "B-12311",
      scheduled: "8/9/2023",
      collections: 1500,
      img: "/man.png",
    },
  ];

  return (
    <>
      <div className="p-5 bg-zinc-100 h-screen w-full">
        <div className="Search flex-bet-cen w-full h-20">
          <div className="flex justify-between items-center gap-3">
            <div className="relative h-[40px] w-[500px] rounded-md overflow-hidden px-[1px] shadow-sm focus:rounded-sm border-zinc-300 border outline-gray-300">
              <input
                onChange={(e: any) => setname(e.target.value)}
                className="w-full px-7 h-full bg-zinc-50 border-none outline-none py-2 text-gray-700 font-semibold"
                type="text"
              />
              <p className="absolute left-2 top-[50%] translate-y-[-50%]">
                {search}
              </p>
            </div>
            <button className="flex justify-around items-center text-lg flex-row-reverse px-2 h-[40px] w-28 border border-zinc-300 rounded-md transition-all hover:rounded-none hover:opacity-70">
              <p className="px-2 text-[#555]">Filter</p>
              <p>{filter}</p>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="flex justify-center gap-3 items-center bg-[#B1262D] w-[190px] h-[44px] rounded-[8px] transition-all hover:opacity-70">
              <p className="text-zinc-100">New Employee</p>
              <p className="w-[20px] h-[20px]">
                <Image
                  className="w-full"
                  src={"/SVG/plus.svg"}
                  alt="Add"
                  width={500}
                  height={500}
                />
              </p>
            </button>
          </div>
        </div>
        <div className=" mt-4 w-full flex items-center flex-col">
          {employees.map((e) => (
            <Card
              key={e.employee_id}
              username={e.username}
              employee_id={e.employee_id}
              scheduled={e.scheduled}
              collections={e.collections}
              img={e.img}
            />
          ))}
        </div>
      </div>
    </>
  );
}
