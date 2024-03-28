import React from "react";
import CardProduto from "./CardProduto";
import Palmeiras from "../assets/palmeiras.png";
import RickandMorty from "../assets/rickandmorty1.png";
import Xmen from "../assets/x-men.png";

const ProdutosPersonalizados = () => {
 return (
  <div>
   <h1 className="text-4xl sm:text-6xl text-center my-6 md:my-7 font-semibold">
    Produtos Personalizados
    <div>
     <ul className="flex flex-wrap gap-8 justify-center my-4 md:my-10">
      {/* Palmeiras */}
      <li>
       <CardProduto
        titulo="Chaveiro Palmeiras"
        valor="10,00"
        subtitulo="Quando surge o alviverde imponente..."
        src={Palmeiras}
       />
      </li>
      {/* Rick and Morty */}
      <li>
       <CardProduto
        titulo="Chaveiro Rick and Morty"
        valor="10,00"
        subtitulo="Fala Geek, diretamente da dimensão C-137 !"
        src={RickandMorty}
       />
      </li>
      {/* X-Men */}
      <li>
       <CardProduto
        titulo="Chaveiro X-Men"
        valor="10,00"
        subtitulo="“A mente é uma coisa frágil. Basta a mínima coisa para ir na direção errada.”"
        src={Xmen}
       />
      </li>
     </ul>
    </div>
   </h1>
  </div>
 );
};

export default ProdutosPersonalizados;
