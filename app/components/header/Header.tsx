"use client";
import React, { useState } from "react";
import {
  airport_car,
  analyses,
  sales,
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
import Link from "next/link";

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
      name: "Reports",
      style: "bg-blue-950",
    },
    {
      logo: airport_car,
      name: "Receivings",
      style: "bg-teal-600",
    },
    {
      logo: sales,
      name: "Sales",
      style: "bg-blue-950",
      link: "sales",
    },
    {
      logo: user,
      name: "Employees",
      style: "bg-blue-950",
    },
    {
      logo: hart,
      name: "Gift Cards",
      style: "bg-red-500",
    },
    {
      logo: phone,
      name: "Messages",
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
  let pathName = window.location.pathname.replace("/", "");

  const service = serviceArr.map((e) => {
    return (
      <>
        <Link
          className={`flex items-center h-full ${
            pathName == e.name.toLowerCase() ? "bg-white text-black" : ""
          }`}
          href={e.name.toLowerCase()}
        >
          <li
            key={e.name}
            className="cursor-pointer w-full h-full  mw-80 hover:opacity-70 transition ease-in-out duration-100 flex flex-col items-center justify-center px-2 bg-transparent"
          >
            <span
              className={`${e.style} h-8 w-8 rounded-full text-lg flex items-center justify-center `}
            >
              {e.logo}
            </span>
            <p>{e.name}</p>
          </li>
        </Link>
      </>
    );
  });

  return (
    <div className="flex-cent">
      <div className="w-full">
        <div className="w-full h-6 bg-slate-800 flex justify-between items-center px-2 text-white text-sm">
          <div className="text-gray-300 text-center w-[130px]">
            {currentDate}
          </div>
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
          <ul className="flex items-center gap-7 h-full">{service}</ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
