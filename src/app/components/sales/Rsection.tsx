import React from "react";
import style from "./style.module.css";
import { Delete, correct, ex, suspended } from "../svg";
import Link from "next/link";

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
        <div className={`${style.sec4} h-56 w-full p-3`}>
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
            <Link href="/Search">Complete</Link>
          </button>
          <table className="w-full  shadow-sm shadow-gray-400 mt-1">
            <tr className="bg-zinc-500 text-gray-50 font-semibold">
              <td>Delete</td>
              <td>Type</td>
              <td>Amount</td>
            </tr>
            <tr>
              <td className="cursor-pointer transition-opacity hover:opacity-70">
                {Delete}
              </td>
              <td>Debit Card</td>
              <td>{`$${5}.00`}</td>
            </tr>
            <tr>
              <td className="cursor-pointer transition-opacity hover:opacity-70">
                {Delete}
              </td>
              <td>Cash</td>
              <td>{`$${5}.00`}</td>
            </tr>
          </table>
        </div>
        <div className="sec5 flex justify-between items-center w-full h-12 mt-1">
          <button className="flex justify-evenly rounded-md text-white items-center w-28 h-10 bg-teal-500 opacity-90 transition-opacity hover:opacity-70">
            <p className="text-lg">{suspended}</p>
            <p>Suspend</p>
          </button>
          <button className="flex justify-evenly rounded-md text-white items-center w-24 h-10 bg-red-600 opacity-90 transition-opacity hover:opacity-70">
            <p className="text-lg">{ex}</p>
            <p>Cancel</p>
          </button>
        </div>
        <div className="sec6 w-full h-28 mt-1 ">
          <p className="text-center">Comments</p>
          <textarea className="appearance-none w-full max-h-20 h-20 outline-gray-400 p-1 px-2 border-none"></textarea>
        </div>
        <div className="sec flex justify-between mt-1">
          <div>
            <div className="my-2 flex items-center justify-between w-40">
              <input className="h-5 w-5" type="checkbox" />
              <p className="text-xl">Print After Sale</p>
            </div>
            <div className="my-2 flex items-center justify-between w-40">
              <input className="h-5 w-5" type="checkbox" />
              <p className="text-xl">Print After Sale</p>
            </div>
          </div>
          <div className="bg-zinc-100 h-12 w-44 flex me-auto mt-auto ms-10">
            <p className="w-12 text-2xl flex-cent border-zinc-400 border-e-2">
              #
            </p>
            <p className="w-full flex items-center text-lg border ps-1">{`$${"CO"}`}</p>
          </div>
        </div>
      </div>
    </>
  );
}
