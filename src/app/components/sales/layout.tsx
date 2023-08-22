import React from "react";
import style from "./style.module.css";
import Lsection from "./Lsection";
import Rsection from "./Rsection";

export default function layout() {
  return (
    <>
      <div className={style.layout}>
        <Lsection />
        <Rsection />
      </div>
    </>
  );
}
