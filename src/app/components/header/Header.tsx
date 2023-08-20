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

  return (
    <div>
      <div className=" w-screen h-6 bg-slate-800 flex justify-between items-center px-2 text-white text-sm">
        <div className="text-gray-300">{currentDate}</div>
        <div className="text-sm text-gray-300">Open Source Point Of Sale</div>
        <div className="text-teal-600"> USER | Sign out</div>
      </div>
      <nav className="w-screen h-20 bg-slate-600 text-white flex items-center px-4 justify-between">
        <h1 className=" font-serif font-bold text-2xl">OSPOS</h1>
        <ul className="flex gap-6">
          <li className="cursor-pointer mw-80 hover:opacity-70 transition ease-in-out duration-100 flex flex-col items-center">
            <p className="bg-orange-600 h-8 w-8 rounded-full text-lg flex items-center justify-center">
              {customers}
            </p>
            <p>Customers</p>
          </li>
          <li className="cursor-pointer mw-80 hover:opacity-70 transition ease-in-out duration-100 tranition-2s flex flex-col items-center">
            <p className="bg-pink-100 rotate-90 h-8 w-8 rounded-full text-lg flex items-center justify-center">
              {items}
            </p>
            <p>Items</p>
          </li>
          <li className="cursor-pointer mw-80 hover:opacity-70 transition ease-in-out duration-100  flex flex-col items-center">
            <p className="bg-pink-100 h-8 w-8 rounded-full text-lg flex items-center justify-center">
              {items_kits}
            </p>
            <p>Items Kits</p>
          </li>
          <li className="cursor-pointer mw-80 hover:opacity-70 transition ease-in-out duration-100  flex flex-col items-center">
            <p className="bg-blue-950 h-8 w-8 rounded-full text-lg flex items-center justify-center">
              {suppliers}
            </p>
            <p>Suppliers</p>
          </li>
          <li className="cursor-pointer mw-80 hover:opacity-70 transition ease-in-out duration-100  flex flex-col items-center">
            <p className="bg-blue-950 h-8 w-8 rounded-full text-lg flex items-center justify-center">
              {analyses}
            </p>
            <p>Reports</p>
          </li>
          <li className="cursor-pointer mw-80 hover:opacity-70 transition ease-in-out duration-100  flex flex-col items-center">
            <p className="bg-blue-950 h-8 w-8 rounded-full text-lg flex items-center justify-center">
              {airport_car}
            </p>
            <p>Receivings</p>
          </li>
          <li className="cursor-pointer mw-80 hover:opacity-70 transition ease-in-out duration-100  flex flex-col items-center">
            <p className="bg-blue-950 h-8 w-8 rounded-full text-lg flex items-center justify-center">
              {basket}
            </p>
            <p>Sales</p>
          </li>
          <li className="cursor-pointer mw-80 hover:opacity-70 transition ease-in-out duration-100  flex flex-col items-center">
            <p className="bg-blue-950 h-8 w-8 rounded-full text-lg flex items-center justify-center">
              {user}
            </p>
            <p>Employees</p>
          </li>
          <li className="cursor-pointer mw-80 hover:opacity-70 transition ease-in-out duration-100  flex flex-col items-center">
            <p className="bg-red-500 h-8 w-8 rounded-full text-lg flex items-center justify-center">
              {hart}
            </p>
            <p>Gift Cards</p>
          </li>
          <li className="cursor-pointer mw-80 hover:opacity-70 transition ease-in-out duration-100  flex flex-col items-center">
            <p className="bg-orange-400 h-8 w-8 rounded-full text-lg flex items-center justify-center">
              {phone}
            </p>
            <p>Message</p>
          </li>
          <li className="cursor-pointer mw-80 hover:opacity-70 transition ease-in-out duration-100  flex flex-col items-center">
            <p className="bg-blue-950 h-8 w-8 rounded-full text-lg flex items-center justify-center">
              {money}
            </p>
            <p>Taxes</p>
          </li>
          <li className="cursor-pointer mw-80 hover:opacity-70 transition ease-in-out duration-100  flex flex-col items-center">
            <p className="bg-teal-500 h-8 w-8 rounded-full text-lg flex items-center justify-center">
              {gear}
            </p>
            <p>Store Config</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
