"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/reducers/userSlice";

export default function Auth({ children, type }: any) {
  const [Load, SetLoad] = useState<boolean>();
  const router: any = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(Load));
    const user_id: any = localStorage.getItem("u_id");
    switch (type) {
      case "login":
        if (user_id?.length) {
          SetLoad(true);
          return router?.push("/page/sales");
        } else if (!user_id?.length) {
          SetLoad(false);
          return;
        } else {
          SetLoad(false);
          return router.push("/");
        }
        break;
      case "user":
        if (user_id?.length) {
          SetLoad(false);
          return;
        } else if (!user_id?.length) {
          SetLoad(true);
          return router.push("/page/account/login");
        } else {
          SetLoad(false);
          return router.push("/");
        }
        break;
      case "admin":
        if (user_id == "12123") {
          SetLoad(false);
          return;
        } else if (user_id != "12123" || !user_id?.length) {
          if (user_id?.length) {
            SetLoad(true);
            return router.push("/page/sales");
          } else {
            SetLoad(true);
            return router.push("/page/account/login");
          }
        } else if (user_id?.length) {
          SetLoad(true);
          return router.push("/page/sales");
        } else {
          SetLoad(false);
          return router.push("/");
        }
        break;
    }
  }, [Load, dispatch, router, type]);

  return <Loading>{Load ? "" : children}</Loading>;
}
