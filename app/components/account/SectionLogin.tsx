"use client";
import Image from "next/image";
import React from "react";
import Form from "./Form";

export default function SectionLogin() {
  return (
    <>
      <div className="w-[275px]">
        <Image
          className="w-full"
          src={"/SVG/Logo.svg"}
          alt="error"
          width={500}
          height={500}
        />
      </div>
      <div className="flex justify-center items-center flex-col mt-20">
        <h2 className="capitalize text-[32px] font-semibold text-[#1B2330]">
          Login
        </h2>
        <Form Type="login" />
      </div>
    </>
  );
}
