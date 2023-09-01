import Image from "next/image";
import React from "react";

type TY = {
  id: number;
  img: string;
  name: string;
  from: string;
  type: string;
  price: number;
  time: number;
  date: string;
};

export default function ColCard({
  id,
  img,
  name,
  from,
  type,
  price,
  time,
  date,
}: TY) {
  return (
    <>
      <div
        key={id}
        className="card w-[295px] h-[427px] rounded-[8px] my-3 bg-[#E6E6E6] outline outline-[#80808008] drop-shadow-[0px_6px_4px_#80808054] overflow-hidden"
      >
        <div className="Img flex justify-center items-center rounded-[0_0_75px_0] w-full h-[210px] overflow-hidden text-center bg-white">
          <Image
            className="w-48"
            src={img}
            alt={`${img}`}
            width={400}
            height={400}
          />
        </div>
        <div className="flex justify-between items-center px-[16px] mt-4 font-semibold">
          <p className="text-[28px] capitalize text-[#1B2330]">{name}</p>
          <p className="text-[28px] capitalize text-[#1B2330]">{type}</p>
        </div>
        <div className="flex flex-col px-[16px] mt-2 text-[20px]">
          <p className="capitalize">{from}</p>
          <div className="flex justify-between mt-2">
            <p className="capitalize">{`${date}`}</p>
            <p className="capitalize">{`${time}`}</p>
          </div>
        </div>
        <div className="flex justify-between mt-[15px]">
          <p className="text-[28px] ps-[16px] mt-[18px] font-semibold text-[#1B2330]">{`$${price}`}</p>
          <div className="flex content-between px-[16px] items-center gap-[16px] bg-white w-[118px] h-[68px] rounded-[32px_0px_8px_0px]">
            <p className="p-[8px] bg-[#2BBFAF] rounded-[8px] cursor-pointer transition-all hover:opacity-70">
              <Image
                className="w-[19px]"
                src="/SVG/Pencil.svg"
                alt="Error"
                width={100}
                height={100}
              />
            </p>
            <p className="p-[8px] bg-[#B1262D] rounded-[8px] cursor-pointer transition-all hover:opacity-70">
              <Image
                className="w-[19px]"
                src="/SVG/delete.svg"
                alt="Error"
                width={100}
                height={100}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
