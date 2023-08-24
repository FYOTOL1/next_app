"use client";
import React, { useEffect, useState } from "react";
import {
  Delete,
  addItem,
  checkBox,
  filter,
  gridCells,
  gridLiens,
  pencil,
  search,
} from "../../components/svg";
import Image from "next/image";

export default function Layout() {
  const [bg, setbg] = useState({ bg: "bg-zinc-50", status: false });
  const [bg2, setbg2] = useState({ bg: "bg-zinc-50", status: false });
  console.log([bg, bg2]);

  return (
    <>
      <div className="w-full h-[1000px] p-5 bg-[#f7f9fd]">
        <div className="bg-white rounded-xl shadow-zinc-400 h-full w-full">
          <div className="Search flex-bet-cen w-full h-20">
            <div className="flex justify-between items-center gap-3 ps-4">
              <div className="relative h-[40px] w-[500px] rounded-md overflow-hidden px-[1px] shadow-sm focus:rounded-sm border-zinc-300 border outline-gray-300">
                <input
                  className="w-full px-7 h-full bg-zinc-50 border-none outline-none py-2 text-gray-700 font-semibold"
                  type="text"
                />
                <p className="absolute left-2 top-[50%] translate-y-[-50%]">
                  {search}
                </p>
              </div>
              <button className="flex justify-between items-center flex-row-reverse py-2 px-2 border border-zinc-300 rounded-md transition-all hover:rounded-none hover:opacity-70">
                <p className="px-2 text-[#555]">Condition</p>
                <p>{filter}</p>
              </button>
            </div>
            <div className="flex justify-evenly items-center flex-row-reverse h-[40px] w-64">
              <div className="flex justify-between items-center flex-row-reverse px-2.5 cursor-pointer transition-all hover:rounded-none hover:opacity-80 text-white w-28 bg-blue-500 h-full rounded-[4px]">
                <p>Add Item</p>
                <p>{addItem}</p>
              </div>
              <div className="flex justify-between items-center text-white w-[90px] h-full rounded-[4px] transition-all overflow-hidden drop-shadow-md shadow-zinc-900">
                <p
                  className={`w-2/4 h-full flex justify-center items-center text-xl ${bg.bg} fill-gray-700 cursor-pointer transition-all hover:opacity-90`}
                  onClick={() => {
                    setbg2({
                      bg: "bg-zinc-50 fill-gray-400 shadow-none",
                      status: false,
                    });
                    setbg({
                      bg: "bg-[#ddd] fill-gray-900 shadow-sm",
                      status: true,
                    });
                  }}
                >
                  {gridLiens}
                </p>
                <p
                  className={`w-2/4 h-full flex justify-center items-center text-xl ${bg2.bg} fill-gray-700 cursor-pointer transition-all hover:opacity-90`}
                  onClick={() => {
                    setbg({
                      bg: "bg-zinc-50 fill-gray-400 shadow-none",
                      status: false,
                    });
                    setbg2({
                      bg: "bg-[#ddd] fill-gray-900 shadow-sm",
                      status: true,
                    });
                  }}
                >
                  {gridCells}
                </p>
              </div>
            </div>
          </div>
          <table className="w-full capitalize">
            <tr className="h-16 text-zinc-600 text-xl bg-zinc-100 drop-shadow-[0px_4px_2px_#ddd] overflow-hidden">
              <th>image</th>
              <th>name</th>
              <th>from</th>
              <th>type</th>
              <th>price</th>
              <th>time</th>
              <th>date</th>
              <th>actions</th>
            </tr>
            <tr className="h-10 font-semibold text-[#333]">
              <td className="flex justify-evenly items-center h-full">
                <p className="fill-zinc-400 text-lg">{checkBox}</p>
                <Image
                  className="w-10"
                  width={500}
                  height={500}
                  src="/banana.png"
                  alt="Error"
                />
              </td>
              <td>banana</td>
              <td>egypt</td>
              <td>fruit</td>
              <td>{`$${10}`}</td>
              <td>{`${12}hour`}</td>
              <td>{`${"8/24/2023"}`}</td>
              <td className="flex justify-center text-sm items-center flex-row-reverse gap-2 h-full py-[8px] h-full">
                <p className="flex items-center justify-center rounded-[4px] ps-[1px] text-[14px] fill-red-500 bg-red-200 w-[22.1px] h-[22px] text-center cursor-pointer transition-all hover:opacity-80">
                  {Delete}
                </p>
                <p className="flex items-center justify-center rounded-[4px] text-[14px] fill-blue-500 bg-blue-200 w-[22.1px] h-[22px] text-center cursor-pointer transition-all hover:opacity-80">
                  {pencil}
                </p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
