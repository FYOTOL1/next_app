"use client";
import React, { memo, useState } from "react";
import style from "./style.module.css";
import { suspended, takings } from "../svg";

function Lsection() {
  const [val, setval] = useState(String);
  return (
    <>
      <div className={style.leftS}>
        <div className="Top flex justify-between items-center h-14 px-3 rounded-sm bg-gray-200">
          <div className="flex justify-between items-center w-48 h-10">
            <p className="font-semibold text-gray-800">Register Mode</p>
            <select className="p-2 outline-none capitalize cursor-pointer rounded-sm transition-opacity hover:opacity-70 focus:opacity-70">
              <option value="sale">sale</option>
              <option value="sale">sale</option>
              <option value="sale">sale</option>
            </select>
          </div>
          <div className="flex justify-between items-center w-60 h-10">
            <div className="flex justify-between items-center w-30 h-full  bg-slate-800 rounded-md py-1 px-2 text-slate-50 cursor-pointer transition-opacity hover:opacity-75">
              <p className="px-1">{takings}</p>
              <p>Takings</p>
            </div>
            <div className="flex justify-between items-center w-30 h-full  bg-slate-400 rounded-md py-1 px-2 text-slate-50 cursor-pointer transition-opacity hover:opacity-75">
              <p className="px-2">{suspended}</p>
              <p>suspended</p>
            </div>
          </div>
        </div>
        <div className="Center flex justify-between items-center h-14 py-2 px-3 bg-gray-300 mt-1 rounded-sm">
          <div className="flex items-center justify-between h-full ">
            <p className="font-semibold text-gray-800 ">
              Find/Scan item Or Receipt
            </p>
            <input
              className="w-96 mx-3 h-full rounded-sm bg-gray-100 outline-none px-3 text-gray-700 font-semibold"
              type="text"
              placeholder="Search In Container"
              onChange={(e) => {
                setval(e.target.value.toString());
              }}
              value={val}
            />
          </div>
          <div className="flex justify-between items-center w-30 h-full bg-blue-500 rounded-md py-1 px-2 text-slate-50 cursor-pointer transition-opacity hover:opacity-75">
            <p className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#fff"
                  d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                />
              </svg>
            </p>
            <p>New Item</p>
          </div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}
export default memo(Lsection);
