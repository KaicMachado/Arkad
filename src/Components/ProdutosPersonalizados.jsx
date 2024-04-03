import React from "react";
import CardProduto from "./CardProduto";
import Palmeiras from "../assets/palmeiras.png";
import RickandMorty from "../assets/rickandmorty1.png";
import Xmen from "../assets/x-men.png";
import Fluminense from "../assets/fluminense.png";
import JiuJitsu from "../assets/jiu-jitsu.png";
import Harry from "../assets/harry.png";

const ProdutosPersonalizados = () => {
 return (
  <div>
   <h1 className="text-4xl sm:text-6xl text-center my-6 md:my-7 font-semibold">
    Produtos Temáticos
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
      {/* Fluminense */}
      <li>
       <CardProduto
        titulo="Chaveiro Fluminense"
        valor="10,00"
        subtitulo="Sou tricolor de coração, sou do clube tantas vezes campeão..."
        src={Fluminense}
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
        subtitulo="A mente é uma coisa frágil. Basta a mínima coisa para ir na direção errada."
        src={Xmen}
       />
      </li>
      {/* Jiu-Jitsu */}
      <li>
       <CardProduto
        titulo="Chaveiro Jiu-Jitsu"
        valor="10,00"
        subtitulo="Para muitos o chão é o fim, para nós apenas o começo."
        src={JiuJitsu}
       />
      </li>
      {/* Harry Potter */}
      <li>
       <CardProduto
        titulo="Chaveiro Harry Potter"
        valor="10,00"
        subtitulo="Pode se encontrar a felicidade mesmo nas horas mais sombrias, se a pessoa se lembrar de acender a luz."
        src={Harry}
       />
      </li>
     </ul>
    </div>
   </h1>
  </div>
 );
};

export default ProdutosPersonalizados;
