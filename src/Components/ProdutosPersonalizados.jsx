import React from "react";
import CardProduto from "./CardProduto";

const produtos = [
 {
  titulo: "Chaveiro Palmeiras",
  subtitulo: "Quando surge o alviverde imponente...",
  src: "/images/palmeiras.png",
  valor: "10,00",
 },
 {
  titulo: "Chaveiro Fluminense",
  subtitulo: "Sou tricolor de coração, sou do clube tantas vezes campeão...",
  src: "/images/fluminense.png",
  valor: "10,00",
 },
 {
  titulo: "Chaveiro Atlético de Madrid",
  subtitulo: "Jugando, ganando, peleas como el mejor...",
  src: "/images/atl-de-madrid.png",
  valor: "10,00",
 },
 {
  titulo: "Chaveiro Rick and Morty",
  subtitulo: "Fala Geek, diretamente da dimensão C-137 !",
  src: "/images/rickandmorty1.png",
  valor: "10,00",
 },
 {
  titulo: "Chaveiro X-men",
  subtitulo:
   "A mente é uma coisa frágil. Basta a mínima coisa para ir na direção errada.",
  src: "/images/x-men.png",
  valor: "10,00",
 },
 {
  titulo: "Chaveiro Harry Potter",
  subtitulo:
   "Pode se encontrar a felicidade mesmo nas horas mais sombrias, se a pessoa se lembrar de acender a luz.",
  src: "/images/harry.png",
  valor: "10,00",
 },
 {
  titulo: "Chaveiro Jiu-Jitsu",
  subtitulo: "Para muitos o chão é o fim, para nós apenas o começo.",
  src: "/images/jiu-jitsu.png",
  valor: "10,00",
 },
];

const ProdutosPersonalizados = () => {
 return (
  <div>
   <h1 className="text-4xl sm:text-6xl text-center my-6 md:my-7 font-semibold">
    Produtos Temáticos
   </h1>
   <div>
    <ul className="flex flex-wrap gap-8 justify-center my-4 md:my-10">
     {produtos.map(({ titulo, subtitulo, valor, src }) => (
      <li key={titulo}>
       <CardProduto
        titulo={titulo}
        subtitulo={subtitulo}
        src={src}
        valor={valor}
       />
      </li>
     ))}
    </ul>
   </div>
  </div>
 );
};

export default ProdutosPersonalizados;
