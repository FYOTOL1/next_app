"use client";
import React from "react";
import Link from "next/link";
import {
  email,
  fullRightArrow,
  password,
  phone,
  username,
} from "../../components/svg";

export default function Form({ Type }: any) {
  return (
    <>
      {Type == "signup" ? (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col justify-between gap-[20px] mt-1 w-[610px]"
        >
          <div className="relative w-full">
            <label
              className="flex absolute top-[50%] left-3 translate-y-[-50%] capitalize focus:opacity-0"
              htmlFor="email"
            >
              <span>{email}</span>
            </label>
            <input
              autoComplete="off"
              required
              minLength={4}
              maxLength={30}
              id="email"
              className="py-3 px-10 rounded-[4px] outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray]"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="relative w-full">
            <label
              className="flex absolute top-[50%] left-3 translate-y-[-50%] capitalize"
              htmlFor="phone_number"
            >
              <span>{phone}</span>
            </label>
            <input
              autoComplete="off"
              minLength={7}
              maxLength={11}
              required
              id="phone_number"
              className="py-3 px-10 rounded-[4px] outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray]"
              type="text"
              placeholder="Phone Number"
            />
          </div>

          <div className="relative w-full">
            <label
              className="flex absolute top-[50%] left-3 translate-y-[-50%] capitalize"
              htmlFor="username"
            >
              <span>{username}</span>
            </label>
            <input
              autoComplete="off"
              min={3}
              maxLength={20}
              required
              id="username"
              className="py-3 px-10 rounded-[4px] outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray]"
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="relative w-full">
            <label
              className="flex absolute top-[50%] left-3 translate-y-[-50%] capitalize"
              htmlFor="password"
            >
              <span>{password}</span>
            </label>
            <input
              autoComplete="off"
              minLength={5}
              maxLength={40}
              required
              id="password"
              className="py-3 px-10 rounded-[4px] outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray]"
              type="text"
              placeholder="Password"
            />
          </div>

          <div className="relative w-full">
            <label
              className="flex absolute top-[50%] left-3 translate-y-[-50%] capitalize"
              htmlFor="checking_of_password"
            >
              <span>{password}</span>
            </label>
            <input
              autoComplete="off"
              minLength={5}
              maxLength={40}
              required
              id="checking_of_password"
              className="py-3 px-10 rounded-[4px] outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray]"
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            className="flex justify-center items-center text-[28px] text-white w-full py-[10px] rounded-lg transition-all hover:opacity-70 focus:opacity-70 bg-[#B1262D]"
            type="submit"
          >
            <Link
              className="w-full h-full flex justify-center items-center"
              href={"/account/signup"}
            >
              <p>Sign Up</p>
              <span className="fill-white">{fullRightArrow}</span>
            </Link>
          </button>
          <p className="text-[#1B2330]">Already Have An Account?</p>
          <button
            className="flex justify-center items-center [border:1px_solid_#B1262D] text-[28px] text-[#B1262D] w-full py-[10px] rounded-lg transition-all hover:opacity-70 focus:opacity-70 bg-white"
            type="submit"
          >
            <Link
              className="w-full h-full flex justify-center items-center"
              href={"/account/login"}
            >
              <p>Login</p>
              <span className="fill-[#B1262D]">{fullRightArrow}</span>
            </Link>
          </button>
        </form>
      ) : (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col justify-between gap-[20px] mt-1 w-[610px]"
        >
          <div className="relative w-full">
            <label
              className="flex absolute top-[50%] left-3 translate-y-[-50%] capitalize"
              htmlFor="username"
            >
              <span>{username}</span>
            </label>
            <input
              autoComplete="off"
              min={3}
              maxLength={20}
              required
              id="username"
              className="py-3 px-10 rounded-[4px] outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray]"
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="relative w-full">
            <label
              className="flex absolute top-[50%] left-3 translate-y-[-50%] capitalize"
              htmlFor="password"
            >
              <span>{password}</span>
            </label>
            <input
              autoComplete="off"
              minLength={5}
              maxLength={40}
              required
              id="password"
              className="py-3 px-10 rounded-[4px] outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray]"
              type="text"
              placeholder="Password"
            />
          </div>

          <button
            className="flex justify-center items-center text-[28px] text-white w-full py-[10px] rounded-lg transition-all hover:opacity-70 focus:opacity-70 bg-[#B1262D]"
            type="submit"
          >
            <Link
              className="w-full h-full flex justify-center items-center"
              href={"/account/login"}
            >
              <p>Login</p>
              <span className="fill-white">{fullRightArrow}</span>
            </Link>
          </button>
          <p className="text-[#1B2330]">Create An Account?</p>
          <button
            className="flex justify-center items-center [border:1px_solid_#B1262D] text-[28px] text-[#B1262D] w-full py-[10px] rounded-lg transition-all hover:opacity-70 focus:opacity-70 bg-white"
            type="submit"
          >
            <Link
              className="w-full h-full flex justify-center items-center"
              href={"/account/signup"}
            >
              <p>Signup</p>
              <span className="fill-[#B1262D]">{fullRightArrow}</span>
            </Link>
          </button>
        </form>
      )}
    </>
  );
}
