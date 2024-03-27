import React, { useState } from "react";
// import LogoArkad from "../assets/logo-arkad.png";

const Apresentation = () => {
 return (
  <div className="bg-red-200">
   <div className="flex justify-between w-4/5 mx-auto py-20 items-center">
    <div className="font-bold">
     <h2 className="text-3xl sm:text-5xl mb-3">
      Chaveiros Personalizados <br />
      Feitos Sob Medida para Você!
     </h2>
     {Number(window.innerWidth) < 640 ? (
      <p>
       Chaveiros feitos em acrílico de alta qualidade, nos mande sua ideia que
       transformamos em realidade
      </p>
     ) : (
      <p>
       Chaveiros feitos em acrílico de alta qualidade,
       <br />
       nos mande sua ideia que transformamos em realidade
      </p>
     )}
    </div>
    <div className="hidden lg:block">
     <h2 className="text-8xl font-bold ">Arkad</h2>
     {/* <img src={LogoArkad} alt="Logo Arkad" /> */}
    </div>
   </div>
  </div>
 );
};

export default Apresentation;
