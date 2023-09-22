"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/userSlice";

export default function Auth({ children, type }: any) {
  const Store = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const router: any = useRouter();
  setInterval(() => {
    const user_id: any = localStorage.getItem("u_id");

    switch (type) {
      case "login":
        if (user_id?.length) {
          dispatch(setLoading(true));
          router.push("/page/sales");
          dispatch(setLoading(false));
          return;
        } else if (!user_id?.length) return;
        else return router.push("/");
        break;
      case "user":
        if (user_id?.length) return;
        else if (!user_id?.length) {
          dispatch(setLoading(true));
          router.push("/page/account/login");
          dispatch(setLoading(false));
          return;
        } else return router.push("/");
        break;
      case "admin":
        if (user_id == "12123") return;
        else if (user_id != "12123" || !user_id?.length) {
          if (user_id?.length) {
            dispatch(setLoading(false));
            router.push("/page/sales");
            dispatch(setLoading(true));
            return;
          } else {
            dispatch(setLoading(true));
            router.push("/page/account/login");
            dispatch(setLoading(false));
            return;
          }
        } else if (user_id?.length) {
          dispatch(setLoading(true));
          router.push("/page/sales");
          dispatch(setLoading(false));
          return;
        } else return router.push("/");
        break;
    }

    dispatch(setLoading(false));
  }, 100);

  return (
    <>
      <Loading>{children}</Loading>
    </>
  );
}

// Hello
