"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  email,
  fullRightArrow,
  password,
  phone,
  username,
} from "../../components/svg";
import { useDispatch } from "react-redux";
import { errorController, login, signup } from "../../redux/reducers/userSlice";
import { useSelector } from "react-redux";
import Loading from "../Loading";
import { useRouter } from "next/navigation";

export default function Form({ Type }: any) {
  const Store = useSelector((state: any) => state?.user);
  const [Username, setUsername] = useState<string>();
  const [Email, setEmail] = useState<string>();
  const [Phone_number, setPhone_number] = useState<number>();
  const [Password, setPassword] = useState<string>();
  const [Password2, setPassword2] = useState<string>();
  const dispatch = useDispatch();
  const router: any = useRouter();

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      await router.push("/page/items");
      dispatch(
        signup({
          Username,
          Email,
          Phone_number,
          Password,
          Role: "user",
          Status: "login",
        })
      );
    } catch (error) {
      await router.push("/page/account/login");
      return console.log(error, "Form");
    }
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await dispatch(
        login({ email: Email, password: Password, phone_number: Phone_number })
      );

      return router.push("/page/items");
    } catch (error) {
      router.push("/page/account/login");
      return console.log(error, "Login Form");
    }
  };

  return (
    <>
      {Store.error == "User Already Exist" ? (
        <div
          onClick={(e) => dispatch(errorController(""))}
          className="ERROR absolute top-0 w-full h-14 text-xl font-semibold text-[#333] bg-red-300 flex justify-center items-center"
        >
          <p>{Store.error}</p>
        </div>
      ) : (
        ""
      )}
      {Store.loading ? (
        <Loading />
      ) : Type == "signup" ? (
        <form
          onSubmit={(e) => handleSignup(e)}
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
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
              autoComplete="off"
              required
              minLength={4}
              maxLength={30}
              id="email"
              className="py-3 px-10 rounded-[4px] lowercase outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray]"
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
              onChange={(e: any) => {
                setPhone_number(e.target.value);
              }}
              autoComplete="off"
              minLength={7}
              maxLength={11}
              required
              id="phone_number"
              className="py-3 px-10 lowercase rounded-[4px] outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray]"
              type="number"
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
              onChange={(e: any) => {
                setUsername(e.target.value);
              }}
              autoComplete="off"
              min={3}
              maxLength={20}
              required
              id="username"
              className="py-3 px-10 lowercase rounded-[4px] outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray]"
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
              onChange={(e: any) => {
                setPassword(e.target.value);
              }}
              autoComplete="off"
              minLength={5}
              maxLength={40}
              required
              id="password"
              className="py-3 px-10 lowercase rounded-[4px] outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray]"
              type="password"
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
              onChange={(e: any) => {
                setPassword2(e.target.value);
              }}
              autoComplete="off"
              minLength={5}
              maxLength={40}
              required
              id="checking_of_password"
              className="py-3 px-10 lowercase rounded-[4px] outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray]"
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
              href={"/page/account/signup"}
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
              href={"/page/account/login"}
            >
              <p>Login</p>
              <span className="fill-[#B1262D]">{fullRightArrow}</span>
            </Link>
          </button>
        </form>
      ) : (
        <form
          onSubmit={(e) => handleLogin(e)}
          className="flex flex-col justify-between gap-[20px] mt-1 w-[610px]"
        >
          <div className="relative w-full">
            <label
              className="flex absolute top-[50%] left-3 translate-y-[-50%] capitalize"
              htmlFor="username"
            >
              <span>{email}</span>
            </label>
            <input
              required
              id="email"
              className="py-3 px-10 lowercase rounded-[4px] outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray]"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative w-full">
            <label
              className="flex absolute top-[50%] left-3 translate-y-[-50%] capitalize"
              htmlFor="password"
            >
              <span>{phone}</span>
            </label>
            <input
              autoComplete="on"
              required
              id="phone_number"
              className="py-3 px-10 lowercase rounded-[4px] outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray] relative"
              type="number"
              placeholder="Phone Number"
              onChange={(e) => setPhone_number(Number(e.target.value))}
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
              required
              id="password"
              className="py-3 px-10 lowercase rounded-[4px] outline-none w-full bg-transparent transition-all [border:1px_solid_#707078] focus:[outline:2px_solid_gray]"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="flex justify-center items-center text-[28px] text-white w-full py-[10px] rounded-lg transition-all hover:opacity-70 focus:opacity-70 bg-[#B1262D]"
            type="submit"
          >
            <Link
              className="w-full h-full flex justify-center items-center"
              href={""}
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
              href={"/page/account/signup"}
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
