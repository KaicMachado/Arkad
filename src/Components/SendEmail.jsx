import React from "react";
import SendIcon from "./SendIcon";

const SendEmail = () => {
 return (
  <div className="sm:pb-0 sm:h-24  sm:gap-5 pb-4  gap-3 bg-sky-100 flex flex-wrap justify-center items-center">
   <p className="font-bold text-lg pt-3">Nos mande sua ideia</p>
   <div className="flex bg-white rounded-3xl py-1 px-3 sm:py-2 sm:px-4 ">
    <input
     className="focus:outline-none font-bold"
     type="text"
     placeholder="Seu e-mail"
    />{" "}
    <SendIcon />
   </div>
  </div>
 );
};

export default SendEmail;
