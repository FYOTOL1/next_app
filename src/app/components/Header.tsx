"use client"

import React, { useEffect, useState } from "react";
type Props = {};

function getDate() {
   const today = new Date();
   const month = today.getMonth() + 1;
   const year = today.getFullYear();
   const date = today.getDate();
   const hour = today.getHours();
   const minut = today.getMinutes();
   const sec = today.getSeconds();

   return `  ${hour} ${minut} ${sec}-- ${month}/${date}/${year} `;
}

const Header = ( props: Props ) => {
    const [ currentDate, setCurrentDate ] = useState( getDate() );
   useEffect(()=>{
setCurrentDate(getDate())
}, [currentDate])
  
   
   return (
      <div>
         <div className=" w-screen h-6 bg-slate-800 flex justify-between items-center px-2 text-white text-sm">
            <div>{currentDate}</div>
            <div className=" text-xl">SPOS</div>
            <div> USER | Sign out</div>
         </div>
         <nav className="w-screen h-20 bg-slate-600 text-white flex items-center px-4 justify-between">
            <h1 className=" font-serif font-bold text-2xl">LOGO</h1>
            <ul className="flex gap-6 px-10">
               <li>icon</li>
               <li>icon</li>
               <li>icon</li>
               <li>icon</li>
               <li>icon</li>
               <li>icon</li>
               <li>icon</li>
               <li>icon</li>
               <li>icon</li>
            </ul>
         </nav>
      </div>
   );
};

export default Header;
