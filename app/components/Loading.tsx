import React from "react";
import { appleLogo } from "./svg";
import { useSelector } from "react-redux";

export default function Loading({ children }: any) {
  const Store = useSelector((state: any) => state.user);
  return (
    <>
      {Store.loading ? (
        <div className="flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 border bg-[#eee] cursor-default">
          <p className="animate-ping">{appleLogo}</p>
        </div>
      ) : (
        children
      )}
    </>
  );
}
