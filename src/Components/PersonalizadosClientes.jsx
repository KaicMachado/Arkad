import React from "react";
import Slide from "./Slide";

const produtos = [
 {
  titulo: "Relíquias da Morte",
  subtitulo: "Chaveiro feito para fã de Harry Potter",
  src: "/images/reliquias.png",
 },
 {
  titulo: "Checkmat RC",
  subtitulo: "Chaveiro para academia de Jiu-Jitsu da região de Jaú-SP",
  src: "images/ronaldoChaves.png",
 },
 {
  titulo: "Redline Personal",
  subtitulo: "Feito para academia de funcional e personal",
  src: "/images/redline.png",
 },
 {
  titulo: "Igreja Quadrangular",
  subtitulo: "Chaveiro feito para evento em igreja evangélica",
  src: "/images/igreja.png",
 },
];

const PersonalizadosClientes = () => {
 return (
  <div className="bg-red-200 py-2">
   <h1 className="text-4xl sm:text-6xl text-center my-6 md:my-7 font-semibold">
    Produtos para Clientes
   </h1>
   <Slide slides={produtos} />
  </div>
 );
};

export default PersonalizadosClientes;
