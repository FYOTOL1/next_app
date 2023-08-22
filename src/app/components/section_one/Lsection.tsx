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
            <div className="Center flex justify-between items-center  py-2 px-3 bg-gray-300 mt-0.5 rounded-sm">
               <div className="flex items-center justify-between h-full ">
                  <p className="font-semibold text-gray-800 ">Find/Scan item Or Receipt</p>
                  <input
                     className="w-96 mx-3 h-full rounded-sm bg-gray-100 shadow-lg border-zinc-400 border outline-gray-400 px-3 py-2 text-gray-700 font-semibold"
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
                     <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path
                           fill="#fff"
                           d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                        />
                     </svg>
                  </p>
                  <p>New Item</p>
               </div>
            </div>
            <div className="bg-zinc-200 mt-0.5 rounded-sm ">
               <table className="w-full  ">
                  <tr className=" bg-zinc-500 text-white font-semibold border-2 ">
                     <td>Delete</td>
                     <td>Item #</td>
                     <td>Item Name</td>
                     <td>Price</td>
                     <td>Qty.</td>
                     <td>Disc %</td>
                     <td>Total</td>
                     <td>Update</td>
                  </tr>
                  <tr>
                     <td>
                        <button>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                              className="w-5 h-5 text-green-600"
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                           </svg>
                        </button>
                     </td>
                     <td></td>
                     <td></td>
                     <td className="box"></td>
                     <td className="box"></td>
                     <td className="box"></td>
                     <td>{`$ `}</td>
                     <td>
                        <button>
                           {" "}
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2.2}
                              stroke="currentColor"
                              className="w-5 h-5 text-green-600 "
                           >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                              />
                           </svg>
                        </button>
                     </td>
                  </tr>

               </table>
            </div>
         </div>
      </>
   );
}
export default memo(Lsection);
