import React from "react";
import { filter, search } from "../../components/svg";

export default function Layout() {
  return (
    <>
      <div className="w-full h-[1000px] p-5 bg-[#f7f9fd]">
        <div className="bg-white rounded-xl shadow-zinc-400 h-full w-full">
          <div className="Search flex-bet-cen w-full h-20 border-a">
            <div className="flex justify-between items-center gap-3">
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
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
