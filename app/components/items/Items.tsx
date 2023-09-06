"use client";
import React, { useState } from "react";
import {
  addItem,
  filter,
  gridCells,
  gridLiens,
  search,
} from "../../components/svg";
import RowCard from "./RowCard";
import ColCard from "./ColCard";

type Data = {
  id: number;
  img: string;
  name: string;
  from: string;
  type: string;
  price: number;
  time: number;
  date: string;
};

const API: Data[] = [
  {
    id: 1,
    img: "/banana.png",
    name: "meet",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 2,
    img: "/banana.png",
    name: "meet",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 3,
    img: "/banana.png",
    name: "meet",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 4,
    img: "/banana.png",
    name: "meet",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 5,
    img: "/banana.png",
    name: "meet",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 1,
    img: "/banana.png",
    name: "meet",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 2,
    img: "/banana.png",
    name: "meet",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 3,
    img: "/banana.png",
    name: "meet",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 4,
    img: "/banana.png",
    name: "meet",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 5,
    img: "/banana.png",
    name: "meet",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 1,
    img: "/banana.png",
    name: "meet",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 2,
    img: "/banana.png",
    name: "meet",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 3,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 4,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 5,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 1,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 2,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 3,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 4,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 5,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 1,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 2,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 3,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 4,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 5,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 1,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 2,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 3,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 4,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 5,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 1,
    img: "/banana.png",
    name: "apple",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 2,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 3,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 4,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 5,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 1,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 2,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 3,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 4,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 5,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 1,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 2,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 3,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 4,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 5,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 1,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 2,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 3,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 4,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 5,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 1,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 2,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 3,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 4,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
  {
    id: 5,
    img: "/banana.png",
    name: "banana",
    from: "egypt",
    type: "fruit",
    price: 200,
    time: 20,
    date: "8/24/2023",
  },
];

export default function Layout() {
  const [name, setname] = useState("");
  const [view, setview] = useState("rows");

  return (
    <>
      <div className="w-full h-[1000px] p-5 bg-[#f7f9fd]">
        <div className="bg-white rounded-xl p-4 shadow-zinc-400 h-full w-full">
          <div className="Search flex-bet-cen w-full h-20">
            <div className="flex justify-between items-center gap-3">
              <div className="relative h-[40px] w-[500px] rounded-md overflow-hidden px-[1px] shadow-sm focus:rounded-sm border-zinc-300 border outline-gray-300">
                <input
                  onChange={(e) => setname(e.target.value)}
                  className="w-full px-7 h-full bg-zinc-50 border-none outline-none py-2 text-gray-700 font-semibold"
                  type="text"
                />
                <p className="absolute left-2 top-[50%] translate-y-[-50%]">
                  {search}
                </p>
              </div>
              <button className="flex justify-around items-center text-lg flex-row-reverse px-2 h-[40px] w-28 border border-zinc-300 rounded-md transition-all hover:rounded-none hover:opacity-70">
                <p className="px-2 text-[#555]">Filter</p>
                <p>{filter}</p>
              </button>
              <button className="flex justify-around items-center text-lg flex-row-reverse px-2 h-[40px] w-28 border border-zinc-300 rounded-md transition-all hover:rounded-none hover:opacity-70">
                <p className="px-2 text-[#555]">Item</p>
                <p>{API.length}</p>
              </button>
            </div>
            <div className="flex items-center flex-row-reverse h-[40px] w-64">
              <div className="flex justify-between items-center flex-row-reverse px-2.5 cursor-pointer transition-all hover:rounded-none hover:opacity-80 text-white w-28 bg-blue-500 h-full rounded-[4px]">
                <p>Add Item</p>
                <p>{addItem}</p>
              </div>
              <div className="flex justify-between items-center mx-3 text-white w-[90px] h-full outline outline-[1px] outline-zinc-100 rounded-[4px] transition-all overflow-hidden">
                <p
                  onClick={() => setview("rows")}
                  className={`w-2/4 h-full flex justify-center items-center text-xl ${
                    view === "rows" ? "bg-zinc-200 drop-shadow-md" : ""
                  } fill-gray-700 cursor-pointer transition-all hover:opacity-90`}
                >
                  {gridLiens}
                </p>
                <p
                  onClick={() => setview("cols")}
                  className={`w-2/4 h-full flex justify-center items-center text-xl ${
                    view === "cols" ? "bg-zinc-200" : ""
                  } fill-gray-700 cursor-pointer transition-all hover:opacity-90`}
                >
                  {gridCells}
                </p>
              </div>
            </div>
          </div>
          {view === "rows" ? (
            <table className="w-full capitalize">
              <tr className="h-16 border-none text-zinc-600 text-xl bg-zinc-100 drop-shadow-[0px_3px_2px_#ddd] overflow-hidden">
                <th className="w-64">image</th>
                <th>name</th>
                <th>from</th>
                <th>type</th>
                <th>price</th>
                <th>time</th>
                <th>date</th>
                <th>actions</th>
              </tr>
              {API.filter((v) =>
                name.toLowerCase() === ""
                  ? v
                  : v.name.toLowerCase().includes(name)
              ).map((e) => (
                <RowCard
                  key={e.id}
                  id={e.id}
                  img={e.img}
                  name={e.name}
                  from={e.from}
                  type={e.type}
                  price={e.price}
                  time={e.time}
                  date={e.date}
                />
              ))}
            </table>
          ) : (
            <div className="flex justify-between items-center gap-[5px] flex-wrap">
              {API.map((e) => (
                <ColCard
                  key={e.id}
                  id={e.id}
                  img={e.img}
                  name={e.name}
                  from={e.from}
                  type={e.type}
                  price={e.price}
                  time={e.time}
                  date={e.date}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
