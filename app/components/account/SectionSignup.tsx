"use client";
import Image from "next/image";
import React from "react";
import Form from "./Form";
import Auth from "../Auth";

export default function SectionSignup() {
  return (
    <>
      <Auth type="login">
        <div className="w-[275px]">
          <Image
            className="w-full"
            src={"/SVG/Logo.svg"}
            alt="error"
            width={500}
            height={500}
          />
        </div>
        <div className="flex justify-center items-center flex-col mt-5">
          <h2 className="capitalize text-[32px] font-semibold text-[#1B2330]">
            create new account
          </h2>
          <Form Type="signup" />
        </div>
      </Auth>
    </>
  );
}
