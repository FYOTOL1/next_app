import React from "react";
import style from "./style.module.css";
import { correct, ex } from "../svg";

export default function section() {
  return (
    <>
      <div className={`${style.rightS} bg-gray-300 p-3`}>
        <div className="sec1 flex flex-col font-semibold text-gray-800 ">
          <div className="flex justify-between">
            <p>Name</p>
            <p>Test Customer</p>
          </div>
          <div className="flex justify-between">
            <p>Discount</p>
            <p>70%</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>{`$${"0.00"}`}</p>
          </div>
          <button className="flex justify-evenly rounded-md text-white m-auto items-center w-48 h-10 bg-red-500 opacity-90 transition-opacity hover:opacity-70 ">
            <p className="text-lg">{ex}</p>
            <p>Remove Customer</p>
          </button>
        </div>
        <div
          className={`${style.sec2} flex flex-col font-semibold text-gray-800 mt-1`}
        >
          <div className="flex justify-between">
            <p>Sub Total</p>
            <p>{`$${400}.00`}</p>
          </div>
          <div className="flex justify-between">
            <p>5$ GST</p>
            <p>{`$${20}.00`}</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>{`$${420}.00`}</p>
          </div>
        </div>
        <div
          className={`${style.sec3} flex flex-col font-semibold text-gray-800 mt-1`}
        >
          <div className="flex justify-between">
            <p>Payments Total</p>
            <p>{`$${420}.00`}</p>
          </div>
          <div className="flex justify-between">
            <p>Amount Due</p>
            <p>{`$${0}.00`}</p>
          </div>
        </div>
        <div className={`${style.sec4} h-52 w-full p-3`}>
          <div className="subs1 flex justify-between items-center">
            <p>Payment Type</p>
            <select className="p-2 rounded-sm outline-none border-none w-28 bg-gray-200">
              <option>Cash</option>
            </select>
          </div>
          <div className="subs2 flex justify-between items-center">
            <p>Amount Tendered</p>
          </div>
          <button className="flex justify-evenly rounded-md text-white ms-auto items-center w-32 h-10 bg-teal-500 opacity-90 transition-opacity hover:opacity-70 ">
            <p className="text-lg">{correct}</p>
            <p>Complete</p>
          </button>
        </div>
      </div>
    </>
  );
}
