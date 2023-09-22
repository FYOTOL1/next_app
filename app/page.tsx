"use client";
import React, { useEffect, useState } from "react";
import { appleLogo } from "./components/svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const [tim, settim] = useState(false);
  const router: any = useRouter();

  useEffect(() => {
    setTimeout(() => {
      settim(true);
    }, 2000);

    setTimeout(() => {
      router.push("/page/account/signup");
    }, 5050);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 border bg-[#eee]">
        {tim ? (
          <div className="flex items-center justify-center flex-col animate-pulse">
            <Image
              className="w-64"
              src={"/SVG/Logo.svg"}
              alt="Error"
              width={500}
              height={500}
            />
            <p className="mt-10 text-[#B1262D] text-[48px] text-center font-semibold ">
              Welcome To Open Source Point Of Sale <br /> System
            </p>
          </div>
        ) : (
          <p className="animate-ping">{appleLogo}</p>
        )}
      </div>
    </>
  );
}
