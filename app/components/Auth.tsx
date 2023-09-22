"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";

export default function Auth({ children, type }: any) {
  const Store = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const router: any = useRouter();
  useEffect(() => {
    const user_id: any = localStorage.getItem("u_id");

    switch (type) {
      case "login":
        if (user_id?.length) return router?.push("/page/sales");
        else if (!user_id?.length) return;
        else return router.push("/");
        break;
      case "user":
        if (user_id?.length) return;
        else if (!user_id?.length) return router.push("/page/account/login");
        else return router.push("/");
        break;
      case "admin":
        if (user_id == "12123") return;
        else if (user_id != "12123" || !user_id?.length) {
          if (user_id?.length) return router.push("/page/sales");
          else return router.push("/page/account/login");
        } else if (user_id?.length) return router.push("/page/sales");
        else return router.push("/");
        break;
    }
  }, [router, type]);

  return (
    <>
      <Loading>{children}</Loading>
    </>
  );
}
