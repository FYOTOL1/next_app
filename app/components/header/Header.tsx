"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router: any = useRouter();

  setInterval(() => {
    setCurrentDate(getDate());
  }, 1000);

  const serviceArr = [
    {
      src: "/SVG/users-add.svg",
      name: "Customers",
    },
    {
      src: "/SVG/price.svg",
      name: "Items",
    },
    {
      src: "/SVG/report-add.svg",
      name: "Reports",
    },
    {
      src: "/SVG/symbols.svg",
      name: "Receivings",
    },
    {
      src: "/SVG/basket.svg",
      name: "Sales",
    },
    {
      src: "/SVG/persons.svg",
      name: "Employees",
    },
    {
      src: "/SVG/gift.svg",
      name: "gift",
    },
    {
      src: "/SVG/more.svg",
      name: "Configurations ",
    },
  ];

  const service = serviceArr.map((e) => {
    return (
      <>
        <Link
          className={`flex items-center h-full ${
            typeof window !== "undefined" &&
            window.location.pathname.replace("/", "") == e.name.toLowerCase()
              ? "bg-white text-black"
              : ""
          }`}
          href={e.name.toLowerCase()}
        >
          <li
            key={e.name}
            className="cursor-pointer w-[90px] h-full hover:opacity-70 transition flex flex-col items-center mt-[10px] justify-center px-2 bg-transparent"
          >
            <span
              className={`bg-zinc-100 h-12 w-12 rounded-full text-lg flex items-center justify-center `}
            >
              <Image
                className="w-full"
                src={e.src}
                alt={e.name}
                width={200}
                height={200}
              />
            </span>
            <p className="w-[90px] text-center">{e.name}</p>
          </li>
        </Link>
      </>
    );
  });

  const SignOut = () => {
    localStorage.removeItem("u_id")
    router.push("/")
  };

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
            <p
              onClick={() => SignOut()}
              className="px-1 text-teal-600 cursor-pointer hover:opacity-70 transition ease-in-out duration-100"
            >
              Sign out
            </p>
          </div>
        </div>
        <nav className="w-full h-[100px] bg-slate-600 text-white flex items-center justify-between px-3">
          <div className="flex items-center justify-center h-full w-[180px]">
            <Image
              className="w-[150px]"
              src={"/SVG/Logo.svg"}
              alt="Error"
              width={300}
              height={300}
            />
          </div>
          <ul className="LINKS relative flex items-center gap-7 h-full overflow-hidden">
            {service}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
