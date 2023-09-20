import Image from "next/image";
import React from "react";

type USER = {
  username: string;
  employee_id: string;
  scheduled: string;
  collections: number;
  img: string;
};

export default function Card({
  username,
  employee_id,
  scheduled,
  collections,
  img,
}: USER) {
  return (
    <>
      <div className="card my-4 drop-shadow-md overflow-hidden relative flex w-[1150px] mx-auto h-[150px] rounded-[8px] bg-zinc-50">
        <div className="img outline outline-1 outline-zinc-300 rounded-[8px] overflow-hidden w-[170px] h-full relative">
          <Image
            className="w-full h-full"
            src={img}
            alt="error"
            width={500}
            height={500}
          />
          <p className="absolute p-[6px] left-0 bottom-0 w-[40px] h-[40px] rounded-[0_5px_0_0] bg-zinc-100 transition-all hover:opacity-70 cursor-pointer">
            <Image
              className="w-full h-full"
              src={"/SVG/outtime.svg"}
              alt="error"
              width={500}
              height={500}
            />
          </p>
          <p className="absolute p-1 right-0 bottom-0 w-[40px] h-[40px] rounded-[5px_0_0_0] bg-[rgba(255,_255,_255,_0.50)] transition-all hover:opacity-70 cursor-pointer">
            <Image
              className="w-full h-full"
              src={"/SVG/male.svg"}
              alt="error"
              width={500}
              height={500}
            />
          </p>
        </div>
        <div className=" flex justify-around items-center w-full h-full py-3">
          <div className="ms-5 h-full text-2xl w-[325px] font-semibold">
            <div className="flex justify-between items-center">
              <p>Employee ID:</p>
              <p className="text-[#707078]">{employee_id}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p>Name:</p>
              <p className="text-[#707078]">{username}</p>
            </div>
          </div>
          <div className="ms-5 h-full text-2xl w-[325px] font-semibold">
            <div className="flex justify-between items-center">
              <p>scheduled:</p>
              <p className="text-[#707078]">{scheduled}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p>collections:</p>
              <p className="text-[#707078]">{`${collections}$`}</p>
            </div>
          </div>
        </div>
        <button className="flex justify-center items-center gap-2 rounded-[8px] absolute bottom-2 right-0 w-[180px] h-[40px] border border-[#B1262D] transition-all hover:opacity-70 hover:rounded-none">
          <p>Employee Details</p>
          <p className="fill-[#B1262D] ">
            <Image
              className="w-full"
              src={"/SVG/right-arrow.svg"}
              alt="error"
              width={500}
              height={500}
            />
          </p>
        </button>
        <p className="absolute top-1 right-1 text-xl font-semibold text-zinc-600">{`15:00`}</p>
      </div>
    </>
  );
}
