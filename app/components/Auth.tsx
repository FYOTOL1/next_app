"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Loading from "./Loading";

export default function Auth({ children, type }: any) {
  const router: any = useRouter();
  useEffect(() => {
    (() => {
      const user_id: any = localStorage.getItem("u_id");
      switch (type) {
        case "login":
          if (user_id?.length) return router.push("/page/items");
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
            return router.push("/page/account/login");
          } else if (user_id?.length) return router.push("/page/items");
          else return router.push("/");
          break;
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Loading>{children}</Loading>
    </>
  );
}
