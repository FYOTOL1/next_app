import React from "react";
import style from "./style.module.css";
import { suppliers, suspended, takings } from "../svg";

export default function Lsection() {
  return (
    <>
      <div className={style.leftS}>
        <div
          className={`${style.top} flex justify-between items-center h-12 px-3 rounded-sm bg-gray-200`}
        >
          <div className="flex justify-between items-center w-48 h-10">
            <p>Register Mode</p>
            <select className="p-2 outline-none capitalize">
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
        <div className=""></div>
        <div className=""></div>
      </div>
    </>
  );
}
