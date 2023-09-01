import React from "react";
import { Delete, pencil } from "../svg";
import Image from "next/image";

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

export default function RowCard({
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
      <tr key={id} className="font-semibold text-[#333]">
        <td>
          <div className="flex justify-center px-4 items-center ">
            <Image
              className="w-20"
              width={500}
              height={500}
              src={img}
              alt="Error"
            />
          </div>
        </td>
        <td>{name}</td>
        <td>{from}</td>
        <td>{type}</td>
        <td>{`$${price}`}</td>
        <td>{`${time}hour`}</td>
        <td>{`${date}`}</td>
        <td>
          <span className="flex justify-evenly items-center ">
            <button className="rounded-md text-sm flex-cent fill-blue-500 bg-blue-200 w-7 h-7  transition-all hover:opacity-80">
              {pencil}
            </button>
            <button className="rounded-md text-sm flex-cent fill-red-500 bg-red-200 w-7 h-7 transition-all hover:opacity-80">
              {Delete}
            </button>
          </span>
        </td>
      </tr>
    </>
  );
}
