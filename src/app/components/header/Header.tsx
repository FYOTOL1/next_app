"use client";
import React, { useState } from "react";
import {
  airport_car,
  analyses,
  basket,
  customers,
  gear,
  hart,
  items,
  items_kits,
  money,
  phone,
  suppliers,
  user,
} from "../svg";
import style from "./style.module.css";

type Props = {};

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const hour = today.getHours();
  const minut = today.getMinutes();
  const sec = today.getSeconds();

  return ` ${month}/${date}/${year} - ${hour}:${minut}:${sec} `;
}

const Header = (props: Props) => {
  const [currentDate, setCurrentDate] = useState(getDate());

  setInterval(() => {
    setCurrentDate(getDate());
  }, 1000);

  const serviceArr = [
    {
      logo: customers,
      name: "Customers",
      style: "bg-orange-600",
    },
    {
      logo: items,
      name: "Items",
      style: "bg-pink-100 rotate-90",
    },
    {
      logo: items_kits,
      name: "Items Kit",
      style: "bg-pink-100",
    },
    {
      logo: suppliers,
      name: "Suppliers",
      style: "bg-blue-950",
    },
    {
      logo: analyses,
      name: "Report",
      style: "bg-blue-950",
    },
    {
      logo: airport_car,
      name: "Receivings",
      style: "bg-teal-600",
    },
    {
      logo: basket,
      name: "Items Kits",
      style: "bg-blue-950",
    },
    {
      logo: user,
      name: "Employees",
      style: "bg-blue-950",
    },
    {
      logo: hart,
      name: "Reports",
      style: "bg-red-500",
    },
    {
      logo: phone,
      name: "Reports",
      style: "bg-orange-500",
    },
    {
      logo: money,
      name: "Taxes",
      style: "bg-blue-950",
    },

    {
      logo: gear,
      name: "Store Config",
      style: "bg-teal-600",
    },
  ];
  const service = serviceArr.map((e) => {
    return (
      <li
        key={e.name}
        className="cursor-pointer mw-80 hover:opacity-70 transition ease-in-out duration-100 flex flex-col items-center"
      >
        <span
          className={`${e.style} h-8 w-8 rounded-full text-lg flex items-center justify-center `}
        >
          {e.logo}
        </span>
        <p>{e.name}</p>
      </li>
    );
  });

  return (
    <div className={style.header}>
      <div className={style.cont}>
        <div className="w-full h-6 bg-slate-800 flex justify-between items-center px-2 text-white text-sm">
          <div className="text-gray-300">{currentDate}</div>
          <div className="text-sm text-gray-300">Open Source Point Of Sale</div>
          <div className=" flex items-center justify-between w-34">
            <p className="px-1 text-teal-600 cursor-pointer hover:opacity-70 transition ease-in-out duration-100">
              USER
            </p>{" "}
            |
            <p className="px-1 text-teal-600 cursor-pointer hover:opacity-70 transition ease-in-out duration-100">
              Sign out
            </p>
          </div>
        </div>
        <nav className="w-full h-20 bg-slate-600 text-white flex items-center px-4 justify-between">
          <h1 className=" font-serif font-bold text-2xl">OSPOS</h1>
          <ul className="flex gap-7">{service}</ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
