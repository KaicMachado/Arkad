import React from "react";

const CardProduto = ({ titulo, valor, subtitulo, src }) => {
 return (
  <div className="md:hover:scale-110 sm:gap-2 sm:justify-between ease-out duration-300 min-h-card flex items-center justify-around  flex-col gap-1 p-5 rounded-md shadow-md max-w-96">
   <img src={src} className="w-65 sm:w-auto" alt="Foto do Chaveiro" />
   <p className="font-bold text-neutral-500 text-base text-wrap">{subtitulo}</p>
   <h3 className="text-2xl sm:text-3xl">{titulo}</h3>
   <p className="text-xl">R$ {valor}</p>
   <button className="text-lime-500 hover:bg-lime-500 ease-in duration-200 hover:text-white  py-1 px-8 rounded-2xl text-sm border border-solid border-lime-500">
    <a href="https://www.instagram.com/loja.arkad/" target="_blank">
     Comprar
    </a>
   </button>
  </div>
 );
};

export default CardProduto;
