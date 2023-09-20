"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../redux/reducers/userSlice";
import Loading from "./Loading";
import { appleLogo } from "./svg";

export default function Auth({ children }: any) {
  const [Auth, setAuth] = useState<string>("logout");
  const dispatch = useDispatch();
  const router: any = useRouter();
  useEffect(() => {
    (async (e) => {
      const set: any = localStorage.getItem("u_id");
      dispatch(auth());
      setAuth("login");
      if (!set?.length) {
        router.push("/");
      }
    })();
  }, []);
  return (
    <>
      {Auth == "login" ? (
        <Loading>{children}</Loading>
      ) : (
        <div className="flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 border bg-[#eee] cursor-default">
          <p className="animate-ping">{appleLogo}</p>
        </div>
      )}
    </>
  );
}
