import React from "react";

const CardProduto = ({ titulo, valor, subtitulo, src }) => {
 return (
  <div className="hover:scale-110 ease-out duration-300 min-h-card flex items-center justify-between flex-col gap-2 p-5 rounded-md shadow-md max-w-96">
   <img src={src} alt="Foto do Chaveiro" />
   <p className="font-bold text-neutral-500 text-base text-wrap">{subtitulo}</p>
   <h3 className="text-3xl">{titulo}</h3>
   <p className="text-xl">R$ {valor}</p>
   <button className="text-lime-500 hover:bg-lime-500 ease-in duration-200 hover:text-white  py-1 px-8 rounded-2xl text-sm border border-solid border-lime-500">
    Comprar
   </button>
  </div>
 );
};

export default CardProduto;
